function Victim(workRoom) {
	var waitRoom;
	this.anger = 0;

	this.wait = function( room ) {
		room.people.push( this );
		waitRoom = room;
	};

	this.annoy = function( anger ) {
		this.anger += anger;
	}

	this.leave = function() {

	}
}
