function Wall( img, dx, dy ) {
	this.getZ = function() {
		return dy;
	}

	this.draw = function(ctx, offset, viewport) {
		ctx.drawImage( img, 0, 0, 16, 39, dx+viewport.x, dy-15+viewport.y, 16, 39);
	}
}
