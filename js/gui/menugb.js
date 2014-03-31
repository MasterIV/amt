function MenuBg() {
	var buffer = document.createElement('canvas');
	var max, showRooms = [];

	function drawRooms( ctx ) {
		var offset = new V2( max*16, max*-8);

		for( var i in showRooms ) {
			var room = showRooms[i];
			var x = offset.x + room.x*16 - room.y*16 - room.r.offset.x;
			var y = offset.y + room.x*8 + room.y*8 - room.r.offset.y;
			var img = g[room.r.image];
			var w = img.width / ( room.r.frames ? room.r.frames : 1 );

			ctx.drawImage(img, 0, 0, w, img.height, x, y, w, img.height);
		}
	}

	this.draw = function( ctx ) {
		ctx.drawImage(buffer,0,0);
	};

	function selectRoom() {
		return rooms[(Math.random()*rooms.length)|0];
	}

	this.resize = function(w, h) {
		buffer.width = w;
		buffer.height = h;
		var ctx = buffer.getContext('2d');

		var tilesWidth = Math.ceil( w / 32 );
		var tilesHeight = Math.ceil( h / 8 );

		for( var x = -1; x < tilesWidth+1; x++ )
			for( var y = -1; y < tilesHeight; y++ )
				ctx.drawImage(g['img/floor.png'], 0, 0, 32, 16, x*32 - ((y%2==0)?16:0), y*8, 32, 16);

		max = Math.max( tilesWidth, tilesHeight );

		showRooms = [];
		var room = selectRoom();
		var tmpGrid = initGrid(max*2, max*2);

		for( var x = 0; x < max * 2; x ++ )
			for( var y = 0; y < max * 2; y ++ )
				if( x+y >= max && !tmpGrid[x][y] ) {

					var free = true;

					for( var px = 0; px < room.shape.length; px++ )
						for( var py = 0; py < room.shape[0].length ; py++ )
							if( tmpGrid[x+px] && tmpGrid[x+px][y+py] )
								free = false;

					if( free ) {
						showRooms.push( {x: x, y: y, r: room});
						for( var px = 0; px < room.shape.length; px++ )
								for( var py = 0; py < room.shape[0].length; py++ )
									if( typeof tmpGrid[x+px] !== 'undefined' )
										tmpGrid[x+px][y+py] = 1;

						room = selectRoom();
					}
				}

		drawRooms( ctx );
	}
}