function Map( grid, money ) {
	var self = this;
	this.grid = grid;

	// Globale werte
	this.money = money;
	this.income = 0;
	this.people = 0;
	this.demand = 0;

	this.budget = 1000;
	this.cooldown = 1;

	this.claim = function() {
		if( this.cooldown <= 0 && this.money < this.budget ) {
			this.money = this.budget;
			this.cooldown = 5;
		}
	}

	this.roomAt = function( x, y ) {
		if( self.grid[x] && self.grid[x][y] )
			return self.grid[x][y];
	}

	this.remove = function( roomInstance, roomType ) {
		var x = roomInstance.posGrid.x-1;
		var y = roomInstance.posGrid.y-1;

		for( var rx = 0; rx < roomType.shape.length; rx++ )
			for( var ry = 0; ry < roomType.shape[0].length; ry++ )
				if( roomType.shape[rx][ry] == 1 )
					grid[x+rx][ry+y] = 0;
				else if( roomType.shape[rx][ry] == 2 ) {
					if( grid[x+rx][ry+y] ) {
						grid[x+rx][ry+y].remove( roomInstance );
						if( grid[x+rx][ry+y].rooms.length < 1 )
							grid[x+rx][ry+y] = 0;
					}
				}
	}

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
				if( roomType.shape[rx][ry]  &&  ( grid[x+rx][ry+y]  instanceof Room  ||  grid[x+rx][ry+y] == 1))
					collisions.push({x: x+rx, y: y+ry });

		return collisions.length ? collisions : false;
	};

	/**
	 * place a room on the map
	 * returns false if operation was invalid
	 * @param roomType
	 * @param x
	 * @param y
	 * @returns {*}
	 */
	this.placeRoom = function( roomType, x, y ) {
		if( self.checkCollision( roomType, x, y )) return false;
		if( self.money < roomType.price ) return false;

		var roomInstance = new Room( x, y, roomType, this );
		self.money -= roomType.price;
		x -= 1; y -= 1;

		for( var rx = 0; rx < roomType.shape.length; rx++ )
			for( var ry = 0; ry < roomType.shape[0].length; ry++ )
				if( roomType.shape[rx][ry] == 1 )
					grid[x+rx][ry+y] = roomInstance;
				else if( roomType.shape[rx][ry] == 2 ) {
					if( grid[x+rx][ry+y] instanceof Corridor ) grid[x+rx][ry+y].add( roomInstance );
					else grid[x+rx][ry+y] = new Corridor( roomInstance );
				}

		achivements.track('RoomCount',1);
		return roomInstance;
	};

	this.getZ = function() {
		return 0;
	}

	this.update = function( delta ) {
		// add income
		self.money += self.income * delta;
		// budget cooldown
		if( self.cooldown > 0 ) this.cooldown -= delta;
	}
}