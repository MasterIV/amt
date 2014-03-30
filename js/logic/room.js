function Room( x, y, type, map ) {
	var self = this;
	this.posGrid = new V2( x, y );
	this.type = type;
	this.info = null;
	this.kill = false;

	this.posScreen = new V2( x*16+y*-16, x*8+y*8 );
	this.posLeft = this.posScreen.y + ( type.shape[0].length-2 ) * 8;
	this.posRight = this.posScreen.y + ( type.shape.length-2 ) * 8;

	var offset = new V2( type.offset.x, type.offset.y );

	// Animation
	this.animationstep = 0;
	this.animationdelta = 0;

	// Benachbarte Räume
	this.neighbors = [];
	// Einkommen abzüglich unterhalt
	this.income = 0;

	// Werte für Arbeitszimmer
	this.speed = 0;
	this.demand = type.demand ? 1 / type.demand : 0;
	this.worker = type.worker ? type.worker : 0;
	this.queue = [];

	this.work = 0;
	this.gain = 0;

	// Werte für Warteräume
	this.anger = 0;
	this.capacity = type.capacity ? type.capacity : 0;
	this.people = [];

	// Beruhigende oder Arbeitsverlangsamende Faktoren
	this.enable = function() {
		this.enabled = true;
		this.entertainment = type.entertainment ? type.entertainment : 0;
		this.slow = type.slow ? type.slow : 1;
	}

	this.disable = function() {
		this.enabled = false;
		this.entertainment = 1;
		this.slow = 1;
	}

	this.enable();

	this.showInfo = function() {
		this.info = new RoomInfo( this );
		if (this.type.clicksound)
			sound.play(this.type.clicksound);
	};

	this.click = function( mouse ) {
		if (this.info) {
			if (!this.info.click(mouse))
				this.info = null;
		}
	};

	this.updateFactors = function() {
		var customers = 0;
		this.income = 0;

		this.speed = this.type.speed ? 1 / this.type.speed : 0;
		this.anger = this.type.anger ? this.type.anger : 0;

		var speedfactor = 0;
		var angerfactor = 0;
		for( var i in this.neighbors ) {
			var n = this.neighbors[i];
			speedfactor += n.slow;
			angerfactor += n.entertainment;
			customers += n.worker + n.people.length;
		}
		if(speedfactor) this.speed *= speedfactor;
		if(angerfactor) this.anger = this.anger - (this.anger * angerfactor);

		if( this.type.income ) this.income += this.type.income * customers;
		if( this.type.upkeep ) this.income -= this.type.upkeep;
	};

	this.destroy = function() {
		this.kill = true;
		map.money += this.type.price / 2;
	}

	this.draw = function( ctx, ofs, viewport ) {
		var img = g[type.image];
		var dx = viewport.x+ofs.x+this.posScreen.x-offset.x;
		var dy = viewport.y+ofs.y+this.posScreen.y-offset.y;
		var x = 0;
		var y = 0;
		var width = img.width;
		var height = img.height;

		if (this.type.frames) {
			this.animationdelta++;
			if (this.animationdelta > this.type.framespeed) {
				this.animationdelta = 0;
				this.animationstep++;
				if (this.animationstep >= this.type.frames)
					this.animationstep = 0;
			}
			width = this.type.framelength;
			x = width * this.animationstep;
		}
		ctx.drawImage( img, x, y, width, height, dx, dy, width, height );

		if (this.info)
			this.info.draw(ctx, ofs, viewport, dx + width + 10, dy);

		if (this.speed)
			progressLayerRect(ctx, dx + offset.x - 25, dy - 10, 50, 5, this.work / this.speed, '#00f');
		if (this.demand)
			progressLayerRect(ctx, dx + offset.x - 25, dy - 3, 50, 5, this.gain / this.demand, '#f00');
		if (this.capacity)
			progressLayerRect(ctx, dx + offset.x - 25, dy - 10, 50, 5, this.people.length / this.capacity, '#00f');
		// Show average anger level (not very informative..., maybe show biggest?)
		if (this.anger) {
			var anger = 0;
			for (var i in this.people) {
				anger += this.people[i].anger;
			}
			progressLayerRect(ctx, dx + offset.x - 25, dy - 3, 50, 5, (anger / this.people.length) / 100, '#f00');
		}
	}

	/**
	 * Gibt true wenn eine person die behörde verlassen hat
	 * Gibt eine person zurück wenn eine neue person in die behörde kommt
	 */
	this.update = function( delta ) {
		var result = false;

		if (this.kill) {
			result = true;
		} else if( this.anger ) {
			for(var i in this.people)
				if( this.people[i].annoy(delta * this.anger)) {
					result = true;
					this.people[i].leave();
					achivements.track('AngryPeople',1);
				}
		} else if( this.speed ) {
			this.work += delta;
			this.gain += delta;

			if( this.work > this.speed ) {
				// warteschlange abarbeiten
				if( this.queue.length ) {
					this.queue.shift().leave();
					map.money += this.type.fee;
				}

				this.work -= this.speed;
				result = true;
			}

			if( this.gain > this.demand ) {
				// neue leute ankommen lassen
				this.gain -= this.demand;
				result = new Victim(this);
			}
		}

		return result;
	};

	this.getZ = function() {
		return this.posScreen.y;
	}
}