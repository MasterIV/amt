function wButton(num, x, y, width, height, callback ) {
	this.num = num;
	this.callback = callback;
	this.offsetX = x;
	this.x = 0;
	this.y = y;
	this.width = width;
	this.height = height

	this.draw = function( ctx ) {
		ctx.drawImage(g['img/menu_buttons_spritesheet.png'], 0, 23*this.num, 92, 23, this.x+this.offsetX , this.y , 92, 23);
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
