function mapScene() {
	var placeMe;
	var dragging = false;
	var last;

	var map = new Map( levels[0].grid );
	var offset = new V2( map.grid[0].length*16, 31 );
	var bg = new Background(map.grid, offset);
	var viewport = { x: 50, y: 50, w: 0, h: 0 };

	var entities = [];
	entities.push( map );
	entities.push( bg );

	function updateRooms() {
		map.income = 0;
		map.people = 0;

		for( var i in entities )
			if( entities[i] instanceof Room ) {
				var r = entities[i];
				r.updateFactors();
				map.income += r.income;
				map.people += r.people.length;
			}
	}

	function getCoords( point ) {
		var x = point.x - offset.x - viewport.x;
		var y = point.y - offset.y - viewport.y;

		var mx = ((x / 16 + y / 8) / 2 ) | 0;
		var my = ((y / 8 - (x / 16)) / 2 ) | 0;

		return new V2( mx, my );
	}

	this.click = function( mouse ) {
		var pos = getCoords( mouse );

		if( placeMe ) {
			var room = map.placeRoom( placeMe, pos.x, pos.y );
			if( room ) {
				entities.push( room );
				updateRooms();
				placeMe = null;
			}
		} else if( map.roomAt( pos.x, pos.y ) instanceof Room ) {
			// show room info
		}
	}

	this.mousedown = function( mouse ) { dragging = true; last = mouse.clone(); };
	this.mouseup = function() { dragging = false; };

	this.mousemove = function( mouse ) {
		if( dragging ) {
			viewport.x += Math.round(mouse.x - last.x);
			viewport.y += Math.round(mouse.y - last.y);
			last = mouse.clone();
		}
	}

	this.resize = function( w, h ) {
		viewport.w = w;
		viewport.h = h;
	}

	this.update = function( delta ) {
		var changed = false;

		for( var i = 0; i < entities.length; i++ )
			if( entities[i].update ) {
				var result = entities[i].update( delta );
				if( result ) changed = true;

				// find a waiting room for our new victim
				if( result instanceof Victim )
					for( var i in entities )
						if( entities[i] instanceof Room )
							if( entities[i].capacity > entities[i].people.length ) {
								result.wait( entities[i] );
								break;
							}
			}

		if( changed ) updateRooms();
	}

	this.draw = function( ctx ) {
		/* Z sorting */
		entities.sort(function( a, b ) {
			var dif = a.getZ() - b.getZ();
			if( dif != 0 ) return dif;

			if( a instanceof Room && b instanceof Room ) {
				if( a.posScreen.x < b.posScreen.x ) return a.posRight - b.posLeft;
				return a.posLeft - b.posRight;
			}

			return 0;
		});

		for( var i = 0; i < entities.length; i++ )
			if( entities[i].draw ) entities[i].draw( ctx, offset, viewport );

		if( placeMe ) {
			var pos = getCoords( mouse );
			pos.x -= 1; pos.y -= 1;

			for( var x = 0; x < placeMe.shape.length; x++ )
				for( var y = 0; y < placeMe.shape[0].length; y++ )
					if( placeMe.shape[x][y] ) {
						var dx = viewport.x+offset.x+(x+pos.x)*16+(y+pos.y)*-16;
						var dy = viewport.y+offset.y+(x+pos.x)*8+(y+pos.y)*8;

						if( typeof map.grid[x+pos.x] == 'undefined' || typeof map.grid[x+pos.x][y+pos.y] == 'undefined' ||
							map.grid[x+pos.x][y+pos.y] == 1 || map.grid[x+pos.x][y+pos.y] instanceof Room )
							var img =  'img/place_invalid.png';
						else var img = placeMe.shape[x][y] == 1 ? 'img/place_room.png' : 'img/place_corridor.png';

						ctx.drawImage( g[img], 0, 0, 32, 16, dx-16, dy, 32, 16);
					}
		}
	}
}