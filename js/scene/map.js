function mapScene() {
	var w = 20;
	var h = 30;

	var grid = initGrid(w, h);
	var offset = new V2( h*16, 31 );
	var bg = new Background(grid, offset);

	this.click = function( mouse ) {
		var x = mouse.x - root;
		var y = mouse.y - offsY;

		var mx = ((x / 16 + y / 8) / 2 ) | 0;
		var my = ((y / 8 - (x / 16)) / 2 ) | 0;

		console.log( mx, my );
	}


	this.update = function( delta ) {

	}

	this.draw = function( ctx ) {
		ctx.drawImage( bg.canvas, 0, 0 );
	}
}