function Victim(workRoom) {
	var waitRoom;
	this.anger = 0;
	this.x = null;
	this.y = null;
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
		this.currentPath = a_star([this.x,this.y], [posX,posY], map.grid, MAPWIDHT, MAPHEIGHT, false); // change MAP DIMENSIONS
		
	}
	
	this.update = function(delta) {
		if (this.currentPath.length) {
			 if (this.currentPath[0].x != this.x) {
				 this.x = this.x + (this.currentPath[0].x>this.x)?(-1*this.movementSpeed*delta):(this.movementSpeed*delta);
			 }
			 if (this.currentPath[0].y != this.y) {
				 this.y = this.y + (this.currentPath[0].y>this.y)?(-1*this.movementSpeed*delta):(this.movementSpeed*delta);
			 }
			if (this.currentPath[0].x == this.x && this.currentPath[0].y == this.y) {
				this.currentPath.splice(0,1);
			}
		}
	}
	
	this.draw = function(ctx) {
		ctx.drawImage( g[img], 0, 0, 32, 16, dx-16, dy, 32, 16);
	}

	this.leave = function() {

	}
}
