function Victim( workRoom ) {
	var waitRoom = null;

	this.anger = 0;
	this.angerLimit = 100;
	this.waittime = 0; // Ticks the victim waited

	this.wait = function( room ) {
		room.people.push( this );
		workRoom.queue.push( this );
		waitRoom = room;
	};

	this.annoy = function( anger ) {
		this.anger += anger;
		return this.anger > this.angerLimit;
	}

	this.leave = function() {
		arrayRemove( workRoom.queue, this );
		arrayRemove( waitRoom.people, this );
	}
}
