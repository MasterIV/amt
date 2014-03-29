function Hud( map, rooms, mapscene ) {
	var self = this;
	this.map = map;
	this.mapscene = mapscene;
	this.rooms = rooms;

	this.moneybarwidth = 307;
	this.personsbarwidth = 191;
	this.constructionmenuheight = 100;
	this.barfixed = 20;
	this.buttonsize = 20;

	this.roomselector = null;

	this.entities = [
		new cButton(0,this.barfixed, this.buttonsize,this.buttonsize, "work", "img/HUD/cButton_h.png", this),
		new cButton(0,this.barfixed*2, this.buttonsize,this.buttonsize, "wait", "img/HUD/cButton_h.png", this),
		new cButton(0,this.barfixed*3, this.buttonsize,this.buttonsize, "other", "img/HUD/cButton_h.png", this)
	];

	this.getZ = function() {
		return 99999;
	}

	this.update = function() {

	}

	this.draw = function( ctx, ofs, viewport ) {
		/* Top bar */

		// Money / income / budget bar
		ctx.drawImage(g['img/HUD/money.png'], 0,0, this.moneybarwidth,this.barfixed);
		// Persons bar
		ctx.drawImage(g['img/HUD/persons.png'], this.moneybarwidth,0, this.personsbarwidth,this.barfixed);
		// Right border
		ctx.drawImage(g['img/HUD/top_ui_bg.png'], this.moneybarwidth + this.personsbarwidth,0, game.buffer.width - (this.moneybarwidth + this.personsbarwidth),this.barfixed);

		/* Left bar */

		// Construction menu
		ctx.drawImage(g['img/HUD/construction.png'], 0,this.barfixed, this.barfixed,this.constructionmenuheight);

		for( var i = 0; i < this.entities.length; i++ )
			if( this.entities[i].draw ) this.entities[i].draw( ctx, ofs, viewport );
	}

	this.click = function( mouse ) {
		for (var i in this.entities)
			if (this.entities[i].click)
				if (this.entities[i].click( mouse ))
					return true;
	}

	this.toggleRoomSelector = function( category, x, y ) {
		if (this.roomselector) {
			if (this.roomselector.y == y) {
				for (var i in this.entities)
					if (this.entities[i] == this.roomselector) {
						this.entities.splice(i, 1);
						break;
					}
				this.roomselector = null;
				return;
			} else {
				for (var i in this.entities)
					if (this.entities[i] == this.roomselector) {
						this.entities.splice(i, 1);
						break;
					}
				this.roomselector = null;
			}
		}
		this.roomselector = new RoomSelector( category, x, y, this );
		this.entities.push(this.roomselector);
	}
}
