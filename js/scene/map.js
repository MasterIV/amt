function mapScene() {
	var w = 20;
	var h = 30;

	var dragging = false;
	var last;

	var map = new Map( initGrid(w, h));
	var offset = new V2( h*16, 31 );
	var bg = new Background(map.grid, offset);
	var viewport = { x: 0, y: 0, w: 0, h: 0 };

	this.click = function( mouse ) {
		var x = mouse.x - offset.x - viewport.x;
		var y = mouse.y - offset.y - viewport.y;

		var mx = ((x / 16 + y / 8) / 2 ) | 0;
		var my = ((y / 8 - (x / 16)) / 2 ) | 0;

		console.log( mx, my );
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

	}

	this.draw = function( ctx ) {
		ctx.drawImage( bg.canvas, viewport.x, viewport.y );

		/* Z sorting
		map.rooms.sort(function( a, b ) {

		});

		for( var i in map.rooms ) {

		}*/

	}
}