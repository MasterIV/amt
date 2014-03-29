var mouse = new V2( 0, 0 );

mouse.init = function() {
	var self = this;
	var gameframe = document.getElementById('gameScreen');
	var start = { x: 0, y: 0 };

	gameframe.onmousemove = function( ev ) {
		self.x = ( ev.clientX - gameframe.offsetLeft ) / game.zoom | 0;
		self.y = ( ev.clientY - gameframe.offsetTop ) / game.zoom | 0;
		if( game.scene.mousemove )
			game.scene.mousemove( self );
	};

	gameframe.onmousedown = function( ev ) {
		start = self.clone();
		if( game.scene.mousedown )
			game.scene.mousedown( self );
	};

	gameframe.onmouseup = function( ev ) {
		if( self.equal( start ) && game.scene.click )
			game.scene.click( self );
		if( game.scene.mouseup )
			game.scene.mouseup( self, start );
	};

	/* Support for mobile devices */
	gameframe.ontouchstart = function( ev ) {
		this.onmousemove( ev.changedTouches[0] );
		this.onmousedown( ev.changedTouches[0] );
		ev.preventDefault();

	}

	gameframe.ontouchmove = function( ev ) {
		this.onmousemove( ev.changedTouches[0] );
		ev.preventDefault();
	}

	gameframe.ontouchend = function( ev ) {
		this.onmouseup( ev.changedTouches[0] );
		this.onclick( ev.changedTouches[0] );

		self.x = -1;
		self.y = -1;

		ev.preventDefault();
	}
};
