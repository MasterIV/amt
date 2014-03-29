function RoomSelector( category, x, y, hud ) {
	this.x = x;
	this.y = y;
	this.width = 100;
	this.height = 100;
	this.padding = 10;
	this.roomsize = 20;
	this.linelength = 4;
	this.category = category;
	this.hud = hud;

	this.entities = new Array();
	for (var i in hud.rooms)
		if (hud.rooms[i].category == this.category)
			this.entities.push(new rButton( hud.rooms[i], this ));

	this.draw = function( ctx, ofs, viewport ) {
		ctx.drawImage(g['img/HUD/roomselector.png'], this.x, this.y, this.width, this.height);

		var y = this.y + this.padding;
		for (var i in this.entities) {
			this.entities[i].position( this.x + this.padding + this.roomsize * (i % this.linelength),
					                   this.y + this.padding + this.roomsize * Math.floor(i / this.linelength) );
			this.entities[i].draw( ctx, ofs, viewport );
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
		for (var i in this.entities)
			if (this.entities[i].click)
				if (this.entities[i].click( mouse ))
					return true;
	}

	this.mousedown = function ( mouse ) {
		if (this.inArea( mouse )) return true;
	}
}
