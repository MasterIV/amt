function wButton( x, y,width,height, callback ) {
	this.callback = callback;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height

	this.draw = function( ctx ) {
		if( this.inArea( mouse )) {
			//ctx.drawImage(g["img/startScreen_menu_mousover.png"], this.x, this.y);
		}
	}

	this.inArea = function (mouse) {
		if (mouse.x > this.x && mouse.x < (this.x + this.width)
		 && mouse.y > this.y && mouse.y < (this.y + this.height)){
			return true;
		} else {
			return false;
		}
	}
}
