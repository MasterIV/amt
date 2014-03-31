window.requestAnimFrame = (function(){
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function( callback, element ){window.setTimeout(callback, 25);};
})();

var game = {
	frames: 0,
	fps: 25,
	tick: 6,

	scene: null,
	scenes: [],
	lastUpdate: 0,
	debug: false,
	zoom: 2,

	display: null,
	displayCtx: null,
	buffer: null,
	bufferCtx: null,

	gameFontBig: "11px monospace",
	gameFontSmall: "10px monospace",
	gameFontColor: "white",

	resize: function() {
		this.display.width = window.innerWidth;
		this.display.height = window.innerHeight;
		this.buffer.width = ( this.display.width / this.zoom ) | 0;
		this.buffer.height = ( this.display.height / this.zoom ) | 0;

		for( var i in this.scenes )
			if( this.scenes[i].resize )
				this.scenes[i].resize( this.buffer.width, this.buffer.height );
		bg.resize(this.buffer.width, this.buffer.height);
	},

	init: function() {
		this.display = document.getElementById('gameScreen');
		this.displayCtx = this.display.getContext('2d');

		this.buffer = document.createElement('canvas');
		this.bufferCtx = this.buffer.getContext('2d');

		this.resize();
		var self = this;

		setInterval( function() { self.updateFramerate(); }, 1000 );
		window.onresize = function() { self.resize(); };

		this.lastUpdate = Date.now();
		this.loop();
	},

	updateFramerate: function() {
		this.fps = this.frames;
		this.frames = 0;
	},

	loop: function() {
		var now = Date.now();
		var delta = now - this.lastUpdate;

		if( delta < 250 && this.scene ) {
			this.update( delta );
			this.draw();
		}

		this.lastUpdate = now;
		this.frames++;

		var self = this;
		requestAnimFrame( function() { self.loop(); });
	},

	update: function( delta ) {
		this.scene.update( delta );
	},

	draw: function() {
		this.buffer.width = this.buffer.width;
		this.scene.draw( this.bufferCtx );

		this.display.width = this.display.width;
		this.displayCtx.imageSmoothingEnabled = false;
		this.displayCtx.drawImage( this.buffer,
			0, 0, this.buffer.width, this.buffer.height,
			0, 0, this.buffer.width * this.zoom, this.buffer.height * this.zoom );

		// fsps display
		if( this.debug ) {
			this.displayCtx.fillStyle = 'black';
			this.displayCtx.font = '10px monospace';
			this.displayCtx.fillText( this.fps, 10, 10 );
		}
	}
}