function Iconanimation( pImg, pFrames , pLifeTime ) {
	var img = pImg;
	var lifeTime = pLifeTime;
	var frames = pFrames;
	var fcount = new framecounter( type.framespeed / 1000 );

	this.draw = function ( ctx ) {
		var width = g[img].width/frames;
		var sx = width * ( fcount.frame % frames );

		ctx.drawImage( img, sx, 0, width, height, dx-offset.x, dy-offset.y, width, height );
	}

	this.update = function ( delta ) {
		fcount.update( delta );

		if (lifeTime > 0) {
			lifeTime = lifeTime - delta;
		} else {
			arrayRemove( game.entities, this );
		}
	}

	this.getZ = function ( ) {
		return 9999;
	}
}
