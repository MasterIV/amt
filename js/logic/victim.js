function Victim(pMap, pOffset, pViewport) {
	var map = pMap;
	var offset = pOffset;
	var viewport = pViewport;
	var currentRoom = null;
	this.anger = 0;	
	this.angerLimit = 100;

	this.posScreem = new V2( 100, 200);
	this.offset = new V2(0, 0);

	this.currentPath = [];
	this.movementSpeed = 0.02;

	this.enter = function() {
		this.posScreem.x = 0; // levelstart
		this.posScreem.y = 0;
	}

	this.img = g['img/testvictim.png'];

	this.wait = function( room ) {
		room.addWaiter( this );
		currentRoom = room;
	};

	this.gotoRoom = function( room ) {
		room.addPeople( this );
		currentRoom = room;
	};

	this.annoy = function( anger ) {
		this.anger += anger;

		if (this.anger > this.angerLimit) {
			this.leave();
		}
	}

	this.goTo = function(posX, posY) {
		this.currentPath = a_star(this.getTileCoord(), [posX,posY],map.grid, map.grid.length, map.grid[0].length, false);
	}

	this.update = function(delta) {
		if (this.currentPath.length) {
			 if (this.currentPath[0].x != this.posScreem.x) {
				 this.posScreem.x = this.posScreem.x + ((this.currentPath[0].x*32>this.posScreem.x)?(0.3):(-0.3)); // offset? viewport? speed?
			 }
			 if (this.currentPath[0].y != this.posScreem.y) {
				 this.posScreem.y = this.posScreem.y + ((this.currentPath[0].y*16>this.posScreem.y)?(0.3):(-0.3));// offset? viewport? speed?
			 }
			if (this.currentPath[0].x*32 == parseInt(this.posScreem.x) && this.currentPath[0].y*16 == parseInt(this.posScreem.y)) { // coords right?
				this.currentPath.splice(0,1);
			}
		} else {
			//this.goTo(Math.random()*15|0,Math.random()*15|0);
		}
	}

	this.getTileCoord = function () {
		return [0,0];
	}

	this.getZ = function() {
		return this.posScreem.y;
	}
	
	this.draw = function(ctx, offset,viewport) {
		var dx = viewport.x+offset.x+this.posScreem.x-this.offset.x;
		var dy = viewport.y+offset.y+this.posScreem.y-this.offset.y;

		getCoords( {x:dx,y:dy} ,offset, viewport);

		ctx.drawImage( this.img, 0, 0, this.img.width, this.img.height, dx, dy,  this.img.width, this.img.height );
	}


	function getCoords( point ,offset, viewport) {
		var x = point.x - offset.x - viewport.x;
		var y = point.y - offset.y - viewport.y;

		var mx = ((x / 16 + y / 8) / 2 ) | 0;
		var my = ((y / 8 - (x / 16)) / 2 ) | 0;
		//console.log(mx,my)
		return new V2( mx, my );
	}


	this.leave = function() {
		// goto ausgang? oder löschen
	}
}
