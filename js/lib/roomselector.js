function RoomSelector( category, x, y, hud ) {
	this.x = x;
	this.y = y;
	this.width = 100;
	this.height = 100;
	this.padding = 8;
	this.iconmargin = 2;
	this.roomsize = 20;
	this.linelength = 4;
	this.category = category;
	this.hud = hud;
	this.hovername = "";

	this.entities = new Array();
	for (var i in hud.rooms)
		if (hud.rooms[i].category == this.category)
			this.entities.push(new rButton( hud.rooms[i], this ));

	this.draw = function( ctx, ofs, viewport ) {
		ctx.drawImage(g['img/HUD/roomselector.png'], this.x, this.y, this.width, this.height);

		this.hovername = "";
		for (var i in this.entities) {
			this.entities[i].position( this.x + this.padding + (this.iconmargin + this.roomsize) * (i % this.linelength),
					                   this.y + this.padding + this.roomsize * Math.floor(i / this.linelength) );
			this.entities[i].draw( ctx, ofs, viewport );
		}
		for (var i in this.entities) {
			if (this.entities[i].inArea(mouse)) {
				ctx.save();
				ctx.scale(0.8,0.8);
				ctx.font = game.gameFontSmall;
				ctx.fillStyle = 'rgb(100,100,100)';
				ctx.fillRect(this.x + this.padding + (this.iconmargin + this.roomsize) * (i % this.linelength) -5,
							this.y + this.padding + this.roomsize * Math.floor(i / this.linelength) + 50 - 15,
							6 * this.hovername.length + 10, 20);
				ctx.fillStyle = 'rgb(255,255,255)';
				ctx.fillText(this.hovername,
					this.x + this.padding + (this.iconmargin + this.roomsize) * (i % this.linelength),
					this.y + this.padding + this.roomsize * Math.floor(i / this.linelength) + 50);
				ctx.restore();
			}
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

	this.mousemove = function ( mouse ) {
		for (var i in this.entities)
			if (this.entities[i].mousemove)
				this.entities[i].mousemove( mouse )
	}

	this.mousedown = function ( mouse ) {
		if (this.inArea( mouse )) return true;
	}
}
