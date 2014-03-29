function Background( grid, offset ) {
	this.canvas = document.createElement('canvas');
	var ctx = this.canvas.getContext('2d');

	var w = grid.length;
	var h = grid[0].length;

	this.canvas.width = (w+h)*16 + offset.x;
	this.canvas.height = (w+h)*8 + offset.y;

	for( var x = 0; x < w; x++ )
		for( var y = 0; y < h; y++ )
			if( grid[x][y] == 0 ){
				var dx = offset.x+x*16+y*-16;
				var dy = offset.y+x*8+y*8;

				if( x == 0 || grid[x-1][y] != 0 ) ctx.drawImage(g['img/wall_y.png'], 0, 0, 16, 39, dx-16, dy-31, 16, 39);
				if( y == 0 || grid[x][y-1] != 0  ) ctx.drawImage(g['img/wall_x.png'], 0, 0, 16, 39, dx, dy-31, 16, 39);
				ctx.drawImage(g['img/floor.png'], 0, 0, 32, 16, dx-16, dy, 32, 16);
			}

	this.getZ = function() {
		return -1;
	}

	this.draw = function( ctx, offset, viewport ) {
		ctx.drawImage( this.canvas, viewport.x, viewport.y );
	}
}
