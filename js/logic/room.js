function Room( x, y, type, map ) {
	var self = this;
	this.posGrid = new V2( x, y );

	this.x = x;
	this.y = y;

	this.posScreen = new V2( x*16+y*-16, x*8+y*8 );
	this.posLeft = this.posScreen.y + ( type.shape[0].length-2 ) * 8;
	this.posRight = this.posScreen.y + ( type.shape.length-2 ) * 8;

	var offset = new V2( type.offset.x, type.offset.y );

	// Animation
	var fcount = new framecounter( type.framespeed / 1000 );

	// Benachbarte Räume
	this.neighbors = [];
	// Einkommen abzüglich unterhalt
	this.income = 0;

	// Werte für die infobox
	this.name = type.name;
	this.price = type.price;
	this.upkeep = type.upkeep;
	this.baseIncome = type.income ? type.income : 0;
	this.clicksound = type.clicksound;

	// Werte für Arbeitszimmer
	this.speed = 0;
	this.demand = type.demand ? type.demand : 0;
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
		this.entertainment = type.entertainment ? type.entertainment : 1;
		this.slow = type.slow ? type.slow : 1;
	}

	this.disable = function() {
		this.enabled = false;
		this.entertainment = 1;
		this.slow = 1;
	}

	this.enable();

	this.updateFactors = function() {
		var customers = 0;
		this.income = 0;

		this.speed = type.speed ? type.speed : 0;
		this.anger = type.anger ? type.anger : 0;

		for( var i in this.neighbors ) {
			var n = this.neighbors[i];
			this.speed *= n.slow;
			this.anger *= n.entertainment;
			customers += n.worker + n.people.length;
		}

		if( type.income ) this.income += type.income * customers;
		if( type.upkeep ) this.income -= type.upkeep;
	};

	this.destroy = function() {
		map.money += type.price / 2;
		map.remove( this, type );
		game.scene.remove( this );
	}

	this.draw = function( ctx, ofs, viewport ) {
		var img = g[type.image];
		var dx = viewport.x+ofs.x+this.posScreen.x;
		var dy = viewport.y+ofs.y+this.posScreen.y;

		var sx = 0;
		var width = img.width;
		var height = img.height;

		if (type.frames) {
			width /= type.frames;
			sx = width * ( fcount.frame % type.frames );
		}

		if( this.hl ) ctx.globalAlpha = .6;
		ctx.drawImage( img, sx, 0, width, height, dx-offset.x, dy-offset.y, width, height );
		if( this.hl ) ctx.globalAlpha = 1;

		if (this.speed) progressLayerRect(ctx, dx - 25, dy - 40, 50, 5, this.work / this.speed, '#00f');
		if (this.demand) progressLayerRect(ctx, dx - 25, dy - 33, 50, 5, this.gain / this.demand, '#f00');

		if (this.capacity) {
			var ox = (dx + ( -10 * this.capacity ) / 2 ) | 0;
			for( var i = 0; i < this.capacity; i++ ) {
				moodRect(ctx, ox+i*10, dy - 20, this.people[i] );
			}
		}
	}

	/**
	 * Gibt true wenn eine person die behörde verlassen hat
	 * Gibt eine person zurück wenn eine neue person in die behörde kommt
	 */
	this.update = function( delta ) {
		var result = false;

		if( type.frames )
			fcount.update( delta );

		if( this.anger ) {
			for(var i in this.people) {
				this.people[i].waittime += delta;
				achivements.check('VictimTime', this.people[i].waittime);

				if( this.people[i].annoy(delta * this.anger)) {
					result = true;
					this.people[i].leave();
					this.sceneEntities.push(new Animationtext('-250 $', this.posScreen, this.sceneEntities, null, 'red' ));
					map.money -= 250;
					achivements.track('AngryPeople',1);
				}
			}
		} else if( this.speed ) {
			this.work += delta;
			this.gain += delta;

			if( this.work > this.speed ) {
				// warteschlange abarbeiten
				if( this.queue.length ) {
					this.queue.shift().leave();
					this.sceneEntities.push(new Animationtext(type.fee+' $', this.posScreen, this.sceneEntities, null, 'black' ));
					map.money += type.fee;

					achivements.track('FinishedApplication',1);
					switch( type.name ) {
						case "Einwohnermeldeamt": achivements.track('RegistrationOffice',1); break;
						case "Arbeitsamt": achivements.track('JobCenter',1); break;
						case "Gewerbeamt": achivements.track('StrongEconomy',1); break;
						case "Finanzamt": achivements.track('FinanceOffice',1); break;
					}
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

	this.setSceneEntities = function( pScene ) {
		this.sceneEntities = pScene;
	}

	this.getZ = function() {
		return this.posScreen.y;
	}
}