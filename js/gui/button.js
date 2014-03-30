function Button() {
	this.hover = false;
	this.disabled = false;
}

Button.prototype.update = function() {
	this.hover =
		mouse.x > this.x && mouse.x < (this.x + this.width) &&
		mouse.y > this.y && mouse.y < (this.y + this.height);
}

Button.prototype.click = function() {
	if( this.hover && this.callback ) {
		this.callback();
		return true;
	}
}

function SmallButton( i, x, y, callback ) {
	this.callback = callback;
	this.x = x;
	this.y = y;

	this.width = 18;
	this.height = 18;
	this.sy = this.height * i;

	this.disabled = false;
}

SmallButton.prototype = new Button();
SmallButton.prototype.draw = function( ctx ) {
	var sx = this.disabled ? this.width * 3 : 0;
	if( !sx && this.hover ) sx = this.width;
	ctx.drawImage( g['img/buttons.png'], sx, this.sy, this.width, this.height, this.x, this.y, this.width, this.height );
}

function RoomButton( type, x, y, callback ) {
	this.callback = callback;
	this.x = x;
	this.y = y;

	this.width = 50;
	this.height = 50;
	this.type = type;
}

RoomButton.prototype = new Button();
RoomButton.prototype.draw = function( ctx ) {
	var img = g[this.type.image];
	var width = img.width;
	var height = img.height;

	ctx.fillStyle = '#CCC';
	if( this.hover ) ctx.fillRect( this.x, this.y, 50, 50 );
	if( this.type.frames) width /= this.type.frames;
	ctx.drawImage( img, 0, 0, width, height, this.x+2, this.y+2, 46, 46 );
}