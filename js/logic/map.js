function Map( grid ) {
	this.rooms = [];
	this.grid = grid;

	/**
	 * Check if a room can't be placed to given coordinates
	 * Returns true if you try to leave the map
	 * Returns array of collisions if collisions detected
	 * Returns false if everything is fine
	 * @param roomType
	 * @param x
	 * @param y
	 * @returns {*}
	 */
	this.checkCollision = function( roomType, x, y ) {
		var collisions = [];
		x -= 1; y -= 1;

		if( x < 0 || y < 0 ) return true;
		if( x+roomType.shape.length > grid.length ) return true;
		if( y+roomType.shape[0].length > grid[0].length ) return true;

		for( var rx = 0; rx < roomType.shape.length; rx++ )
			for( var ry = 0; ry < roomType.shape[0].length; ry++ )
				if( roomType.shape[rx][ry] && grid[x+rx][ry+y] instanceof Room )
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
				else if( roomType.shape[rx][ry] == 2 ) {
					if( grid[x+rx][ry+y] instanceof Corridor ) grid[x+rx][ry+y].add( roomInstance );
					else grid[x+rx][ry+y] = new Corridor( roomInstance );
				}
	};

	this.getGrid = function() {
		return grid;
	};

	this.update = function() {

	}
}