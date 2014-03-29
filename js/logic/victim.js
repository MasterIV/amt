function Victim(pMap, pOffset, pViewport) {
	var map = pMap;
	var offset = pOffset;
	var viewport = pViewport;
	var waitRoom;
	this.anger = 0;	
	
	this.posScreem = new V2( 50,200);
	this.offset = new V2(0, 0);

	this.currentPath = [];
	this.movementSpeed = 0.02;

	this.enter = function() {
		this.posScreem.x = 0; // levelstart
		this.posScreem.y = 0;
	}

	this.img = g['img/testvictim.png'];

	this.wait = function( room ) {
		room.people.push( this );
		waitRoom = room;
	};

	this.annoy = function( anger ) {
		this.anger += anger;
	}

	this.goTo = function(posX, posY) {
		var start = getIsoCoords({x:this.posScreem.x,y:this.posScreem.y},offset,viewport);

		this.currentPath = a_star([start.x, start.y], [posX,posY],map.grid, map.grid.length, map.grid[0].length, false);
	}

	this.update = function(delta) {
		if (this.currentPath.length) {
			 if (this.currentPath[0].x != this.posScreem.x) {
				 this.posScreem.x = this.posScreem.x + ((this.currentPath[0].x*32>this.posScreem.x)?(0.3):(-0.3)); // offset? viewport? speed?
			 }
			 if (this.currentPath[0].y != this.posScreem.y) {
				 this.posScreem.y = this.posScreem.y + ((this.currentPath[0].y*16>this.posScreem.y)?(0.3):(-0.3));// offset? viewport? speed?
			 }
			if (this.currentPath[0].x*32 == parseInt(this.posScreem.x) && this.currentPath[0].y*16 == parseInt(this.posScreem.y)) {
				this.currentPath.splice(0,1);
			}
		}

	}

	this.getZ = function() {
		return this.posScreem.y;
	}
	
	this.draw = function(ctx, offset,viewport) {
		var dx = viewport.x+offset.x+this.posScreem.x-this.offset.x;
		var dy = viewport.y+offset.y+this.posScreem.y-this.offset.y;
		ctx.drawImage( this.img, 0, 0, this.img.width, this.img.height, dx, dy,  this.img.width, this.img.height );
	}


	this.leave = function() {

	}
}
