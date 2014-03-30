function gButton( x,y,width,height, callback, image ) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.callback = callback;
	this.image = image;

	this.draw = function( ctx, ofs, viewport ) {
		if( this.inArea( mouse )) {
			ctx.drawImage(g[this.image], this.x, this.y);
		}
	}

	this.inArea = function ( mouse ) {
		if (mouse.x > this.x && mouse.x < (this.x + this.width)
		 && mouse.y > this.y && mouse.y < (this.y + this.height)){
			return true;
		} else {
			return false;
		}
	}

	this.click = function ( mouse ) {
		if (this.inArea( mouse )) {
			this.callback();
			return true;
		}
	}

	this.mousedown = function ( mouse ) {
		if (this.inArea( mouse )) {
			return true;
		}
	}
}