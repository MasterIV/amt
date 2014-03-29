function mapScene() {
	var w = 20;
	var h = 30;
	var offsY = 31;

	var grid = initGrid(w, h);
	var root = h*16;

	g.urls = [
		'img/floor.png',
		'img/wall_x.png',
		'img/wall_y.png'
	];

	function detectClick( evt ) {
		var x = evt.layerX/2 - root;
		var y = evt.layerY/2 - offsY;

		var mx = ((x / 16 + y / 8) / 2 ) | 0;
		var my = ((y / 8 - (x / 16)) / 2 ) | 0;

		console.log( mx, my );
	}

	g.load(function() {
		var gameScreen = document.getElementById('gameScreen');
		var ofsc = document.createElement('canvas');

		var stx = gameScreen.getContext('2d');
		var ctx = ofsc.getContext('2d');

		ofsc.width = (w+h)*16;
		ofsc.height = (w+h)*8 + offsY;

		gameScreen.width = ofsc.width*2;
		gameScreen.height = ofsc.height*2;

		gameScreen.onclick = detectClick;

		for( var x = 0; x < w; x++ )
			for( var y = 0; y < h; y++ )
				if( grid[x][y] == 0 ){
					var dx = root+x*16+y*-16;
					var dy = offsY+x*8+y*8;

					if( x == 0 || grid[x-1][y] != 0 ) ctx.drawImage(g['img/wall_y.png'], 0, 0, 16, 39, dx-16, dy-31, 16, 39); // draw right wall
					if( y == 0 || grid[x][y-1] != 0  ) ctx.drawImage(g['img/wall_x.png'], 0, 0, 16, 39, dx, dy-31, 16, 39); // draw left wall

					ctx.drawImage(g['img/floor.png'], 0, 0, 32, 16, dx-16, dy, 32, 16);
				}

		stx.imageSmoothingEnabled = false;
		stx.drawImage( ofsc, 0, 0, ofsc.width, ofsc.height, 0, 0, gameScreen.width, gameScreen.height );
	});

	this.update = function( delta ) {

	}

	this.draw = function( ctx ) {

	}
}