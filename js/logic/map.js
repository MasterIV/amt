function Map( grid ) {
	var self = this;
	this.rooms = [];
	this.grid = grid;

	// Globale werte
	this.money = 500000;
	this.income = 0;
	this.people = 0;
	this.cooldown = 0;

	function updateRooms() {
		self.income = 0;
		self.people = 0;

		for( var i in self.rooms ) {
			var r = self.rooms[i];
			r.updateFactors();
			self.income += r.income;
			self.people += r.people.length;
		}
	}

	this.roomAt = function( x, y ) {
		return self.grid[x][y];
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
				if( roomType.shape[rx][ry] && grid[x+rx][ry+y] instanceof Room )
					collisions.push({x: x+rx, y: y+ry });

		return collisions.length ? collisions : false;
	};

	/**
	 * place a room on the map
	 * returns false if operation was invalid
	 * @param roomType
	 * @param x
	 * @param y
	 * @returns {boolean}
	 */
	this.placeRoom = function( roomType, x, y ) {
		if( self.checkCollision( roomType, x, y )) return false;
		if( self.money < roomType.price ) return false;

		var roomInstance = new Room( x, y, roomType );
		self.rooms.push(roomInstance);
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

		updateRooms();
		return true;
	};

	this.update = function( delta ) {
		var change = false;

		// add income
		self.money += self.income * delta;
		// budget cooldown
		if( self.cooldown > 0 ) this.cooldown -= delta;

		// update waiting rooms
		for( var i in self.rooms ) {
			var result = self.rooms[i].update( delta );
			if( result ) change = true;
			if( result instanceof Victim ) ; // place Victim in waiting room
		}

		if( change ) updateRooms();
	}
}