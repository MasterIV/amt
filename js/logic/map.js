function Map( grid ) {
	this.rooms = [];
	this.grid = grid;

	this.checkCollision = function( roomType, x, y ) {
		var collisions = [];

		x -= 1; y -= 1;
		for( var rx = 0; rx < roomType.shape.length; rx++ )
			for( var ry = 0; ry < roomType.shape[0].length; ry++ )
				if( roomType.shape[rx][ry] && grid[x+rx][ry+y] )
					collisions.push({x: x+rx, y: y+ry });

		return collisions.length ? collisions : false;
	};

	this.placeRoom = function( roomType, x, y ) {
		if( this.checkCollision( roomType, x, y )) return false;

		var roomInstance = new Room( x, y, roomType );
		this.rooms.push(roomInstance);
		x -= 1; y -= 1;

		for( var rx = 0; rx < roomType.shape.length; rx++ )
			for( var ry = 0; ry < roomType.shape[0].length; ry++ )
				if( roomType.shape[rx][ry] == 1 )
					grid[x+rx][ry+y] = roomInstance;
	};

	this.getGrid = function() {
		return grid;
	};

	this.update = function() {

	}
}