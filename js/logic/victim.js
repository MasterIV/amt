function Victim(workRoom) {
	var waitRoom;
	this.anger = 0;	
	
	this.posScreem = new V2( x*16+y*-16, x*8+y*8 );
	this.offset = new V2(0, 0);

	this.currentPath = null;
	this.movementSpeed = 1;

	this.enter = function() {
		this.x = 0; // levelstart
		this.y = 0;
	}

	this.wait = function( room ) {
		room.people.push( this );
		waitRoom = room;
	};

	this.annoy = function( anger ) {
		this.anger += anger;
	}

	this.goTo = function(posX, posY) {
		this.currentPath = a_star([this.posScreem.x, this.posScreem.y], [posX,posY], map.grid, map.grid.length, map.grid[0].length, false);
		
	}
	
	this.update = function(delta) {
		if (this.currentPath.length) {
			 if (this.currentPath[0].x != this.posScreem.x) {
				 this.posScreem.x = this.posScreem.x + (this.currentPath[0].x>this.posScreem.x)?(-1*this.movementSpeed*delta):(this.movementSpeed*delta);
			 }
			 if (this.currentPath[0].y != this.posScreem.y) {
				 this.posScreem.y = this.posScreem.y + (this.currentPath[0].y>this.posScreem.y)?(-1*this.movementSpeed*delta):(this.movementSpeed*delta);
			 }
			if (this.currentPath[0].x == this.posScreem.x && this.currentPath[0].y == this.posScreem.y) {
				this.currentPath.splice(0,1);
			}
		}
	}
	
	this.draw = function(ctx, viewport) {
		var dx = viewport.x+this.offset.x+this.posScreem.x-this.offset.x;
		var dy = viewport.y+this.offset.y+this.posScreem.y-this.offset.y;
		ctx.drawImage( this.img, 0, 0, this.img.width, this.img.height, dx, dy,  this.img.width, this.img.height );
	}


	this.leave = function() {

	}
}
