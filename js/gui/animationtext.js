function Animationtext( text , posv2, sceneEntities, icon, color ){
	this.text = text;
	this.duration = 1300; // millisecs
	this.anitime = 0;
	this.sceneEntities = sceneEntities;

	this.x = posv2.x;
	this.y = posv2.y;

	if (typeof icon != 'undefined') {
		this.icon = icon
	}

	this.update = function( delta ) {
		delta = delta * 10000;
		if (this.icon ) this.icon.update(delta);
		this.anitime = this.anitime + delta;
		if (this.anitime > this.duration) 	arrayRemove(this.sceneEntities, this);
	}

	this.draw = function( ctx , ofs, viewport){
		if (this.icon ) this.icon.draw(ctx);
		ctx.font = "10px monospace";
		ctx.textAlign = 'center';

		var x = viewport.x+ofs.x+this.x;
		var y = viewport.y+ofs.y+this.y - 30 - 10 * Math.sin( Math.PI*2*(this.anitime)/(this.duration));

		ctx.fillStyle = color;
		ctx.fillText(this.text, x, y);
	}

	this.getZ = function () {
		return 9999999;
	}
}

