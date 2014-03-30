function Dialog( message, callback ) {
	var offset = new V2( (game.buffer.width/2-150)|0, (game.buffer.height/2-15)|0 );
	var close = new SmallButton( 3, offset.x+275, offset.y+5, callback );

	this.draw = function( ctx ) {
		ctx.fillStyle = 'rgba(0,0,0,.5)';
		ctx.fillRect( 0, 0, game.buffer.width, game.buffer.height );

		diagbox( ctx, offset.x, offset.y, 300, 30  );
		ctx.fillStyle = game.gameFontColor;
		ctx.font = game.gameFontBig;
		ctx.fillText( message, offset.x+10, offset.y+20 );
		close.draw(ctx);
	}

	this.update = function( delta ) {
		close.update(delta);
	}

	this.click = function( mouse ) {
		close.click( mouse);
		return true;
	}

	this.getZ = function() {
		return 999999;
	}
}
