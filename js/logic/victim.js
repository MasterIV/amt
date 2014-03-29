function Victim(workRoom) {
	var waitRoom;
	this.anger = 0;
	this.x = null;
	this.y = null;
	this.currentPath = null;

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

	this.leave = function() {

	}
}
