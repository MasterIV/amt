function rButton( room, selector ) {
	this.room = room;
	this.selector = selector;
	this.size = 20;

	this.draw = function( ctx, ofs, viewport ) {
		ctx.drawImage(g[this.room.image], this.x, this.y, this.size, this.size);
	}

	this.position = function (x, y) {
		this.x = x;
		this.y = y;
	}

	this.inArea = function ( mouse ) {
		if (mouse.x > this.x && mouse.x < (this.x + this.size)
		 && mouse.y > this.y && mouse.y < (this.y + this.size)){
			return true;
		} else {
			return false;
		}
	}

	this.click = function ( mouse ) {
		if (this.inArea( mouse )) {
			this.selector.hud.mapscene.placeRoom( this.room );
			this.selector.hud.closeRoomSelector();
			return true;
		}
	}
}