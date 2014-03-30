function RoomInfo( room ) {
	this.room = room;
	this.padding = 5;
	this.textheight = 10;
	this.bubblewidth = 150;
	this.bubbleheight = 100;
	this.destroybuttonsize = 18;

	this.width = this.bubblewidth;
	this.height = this.bubbleheight + 4;

	this.destroy = new gButton(this.padding,
			                   this.bubbleheight - this.destroybuttonsize - this.padding,
		                       this.destroybuttonsize,
		                       this.destroybuttonsize,
	                           function() { room.destroy(); },
	                           'img/HUD/button_destroy_pressed.png');

	this.draw = function(ctx, ofs, viewport, x, y) {
		this.x = x;
		this.y = y;
		ctx.drawImage(g['img/HUD/bubble_top.png'], x,y, this.bubblewidth,2);
		ctx.drawImage(g['img/HUD/bubble_middle.png'], x,y+2, this.bubblewidth,this.bubbleheight);
		ctx.drawImage(g['img/HUD/bubble_bottom.png'], x,y+102, this.bubblewidth,2);

		// Name of room
		ctx.fillText(room.type.name, x + this.padding, y + this.textheight + this.padding);
		// Amtsgebäude
		if (room.speed) {
			ctx.fillText("Bescheide pro Tick: ca. " + (1/room.speed | 0), x + this.padding, y + this.textheight * 2 + this.padding);
			ctx.fillText("Kunden pro Tick: ca. " + (room.type.demand | 0), x + this.padding, y + this.textheight * 3 + this.padding);
		}
		// Abreißen
		ctx.drawImage(g['img/HUD/button_destroy_normal.png'], x + this.padding, y + this.bubbleheight - this.destroybuttonsize - this.padding, this.destroybuttonsize, this.destroybuttonsize);
		this.destroy.x = x + this.padding;
		this.destroy.y = y + this.bubbleheight - this.destroybuttonsize - this.padding;
		this.destroy.draw(ctx, ofs, viewport);
	}

	this.inArea = function ( mouse ) {
		if (mouse.x > this.x && mouse.x < (this.x + this.width)
			&& mouse.y > this.y && mouse.y < (this.y + this.height)){
			return true;
		} else {
			return false;
		}
	}

	this.click = function( mouse ) {
		if (this.inArea( mouse )) {
			this.destroy.click( mouse );
			return true;
		}
	}
}