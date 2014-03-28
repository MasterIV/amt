function Corridor( room ) {
	this.rooms = [room];

	this.add = function( r ) {
		for( var i in this.rooms )
			if( r.neighbors.indexOf( this.rooms[i] ) < 0 ) {
				this.rooms[i].neighbors.push( r );
				r.neighbors.push( this.rooms[i] );
			}
	};

	this.remove = function( r ) {

	};
}