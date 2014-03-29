function mapScene() {
	var placeMe;
	var dragging = false;
	var last;

	var entities = [];

	var map = new Map( levels[0].grid );
	var offset = new V2( map.grid[0].length*16, 31 );
	var bg = new Background(map.grid, offset);
	var viewport = { x: 50, y: 50, w: 0, h: 0 };

	function roomlist(r) {
		var list = document.getElementById('roomlist');
		for( var i in r ) {
			var ele = document.createElement('div');
			var preview = document.createElement('img');
			var caption = document.createElement('p');

			caption.innerHTML = r[i].name;
			preview.src = r[i].image;

			(function(raum, ele) {
				ele.onclick = function() {
					placeMe = raum;
					console.log( raum );
				}
			})(r[i], ele);

			ele.appendChild(caption);
			ele.appendChild(preview);
			list.appendChild(ele);
		}
	}

	roomlist(rooms);

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
			if( room ) entities.push( room );
		}
	}

	this.mousedown = function( mouse ) { dragging = true; last = mouse.clone(); };
	this.mouseup = function() { dragging = false; };

	this.mousemove = function( mouse ) {
		if( dragging ) {
			viewport.x += mouse.x - last.x;
			viewport.y += mouse.y - last.y;
			last = mouse.clone();
		}
	}

	this.resize = function( w, h ) {
		viewport.w = w;
		viewport.h = h;
	}


	this.update = function( delta ) {
		for( var i = 0; i < entities.length; i++ )
			if( entities[i].update ) entities[i].update( delta );
	}

	this.draw = function( ctx ) {
		ctx.drawImage( bg.canvas, viewport.x, viewport.y );

		/* Z sorting */
		var ofs = offset.sum( viewport );
		entities.sort(function( a, b ) { return a.getZ() - b.getZ() });
		for( var i = 0; i < entities.length; i++ )
			if( entities[i].draw ) entities[i].draw( ctx, ofs );

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