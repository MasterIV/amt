function cButton( x,y,width,height, category, image, hud ) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.category = category;
	this.image = image;
	this.hud = hud;

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
			this.hud.toggleRoomSelector( this.category, this.x + this.width, this.y );
			return true;
		}
	}
}
