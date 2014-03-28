function map( grid ) {
	this.rooms = [];
	this.grid = grid;

	this.checkCollision = function( room, x, y ) {
		var collisions = [];
		x -= 1; y -= 1;

		for( var rx = 0; rx < room.shape.length; rx++ )
			for( var ry = 0; ry < room.shape[0].length; ry++ )
				if( room.shape[rx][ry] && grid[x+rx][ry+y] )
					collisions.push({x: x+rx, y: y+ry });

		return collisions.length ? collisions : false;
	};

	this.placeRoom = function( room, x, y ) {
		if( !this.checkCollision( room, x, y )) return false;

	};
}