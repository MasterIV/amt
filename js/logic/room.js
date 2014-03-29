function Room( x, y, type ) {
	this.posGrid = new V2( x, y );

	var posScreem = new V2( x*16+y*-16, x*8+y*8 );
	var offset = new V2( type.offset.x, type.offset.y );

	// Benachbarte Räume
	this.neighbors = [];
	// Einkommen abzüglich unterhalt
	this.income = 0;

	// Werte für Arbeitszimmer
	this.speed = 0;
	this.worker = type.worker ? type.worker : 0;
	this.queue = [];

	// Werte für Warteräume
	this.anger = 0;
	this.capacity = type.capacity ? type.capacity : 0;
	this.people = [];

	// Beruhigende oder Arbeitsverlangsamende Faktoren
	this.entertainment = type.entertainment ? type.entertainment : 1;
	this.slow = type.slow ? type.slow : 1;

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

	this.getZ = function() {
		return posScreem.y;
	}

	this.draw = function( ctx, ofs, viewport ) {
		var img = g[type.image];
		var dx = viewport.x+ofs.x+posScreem.x-offset.x;
		var dy = viewport.y+ofs.y+posScreem.y-offset.y;
		ctx.drawImage( img, 0, 0, img.width, img.height, dx, dy, img.width, img.height );
	}

	/**
	 * Gibt true wenn eine person die behörde verlassen hat
	 * Gibt eine person zurück wenn eine neue person in die behörde kommt
	 */
	this.update = function( delta ) {
		if( this.anger ) {
			for(var victim in this.people) {
				victim.annoy(delta * 0.001)
			}
			// Verärgerung
		} else if( this.speed ) {
			for(var victim in this.queue) {
				// Arbeitsraum
			}
			// neue leute ankommen lassen
			// warteschlange abarbeiten
		}
	};

	this.addPeople = function(victim) {
		this.people.push(victim);
	}

	this.addWaiter = function(victim) {
		this.queue.push(victim);
	}
}