function entity() {
	this.posScreem = new V2(0,0);
	this.width = 10;
	this.height = 10;
	this.offset = {
		x:0,
		y:0
	}
	this.img = null
}

entity.prototype.draw = function(ctx, viewport) {
	var dx = viewport.x+this.offset.x+this.posScreem.x-this.offset.x;
	var dy = viewport.y+this.offset.y+this.posScreem.y-this.offset.y;
	ctx.drawImage( this.img, 0, 0, this.img.width, this.img.height, dx, dy,  this.img.width, this.img.height );
}
