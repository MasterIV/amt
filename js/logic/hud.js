function Hud( map, rooms, mapscene ) {
	var self = this;
	this.map = map;
	this.mapscene = mapscene;
	this.rooms = rooms;

	this.moneybarwidth = 307;
	this.personsbarwidth = 190;
	this.bariconwidth = 27;
	this.barfieldwidth = 94;
	this.textoffsety = 13;
	this.budgetoffsetx = 191;
	this.constructionmenuheight = 58;
	this.constructionmenuwidth = 18;
	this.barfixed = 20;
	this.buttonsize = 18;

	this.roomselector = null;

	this.entities = [
		new cButton(0,this.barfixed, this.buttonsize,this.buttonsize, "work", "img/HUD/bworkpressed.png", this),
		new cButton(0,this.barfixed*2, this.buttonsize,this.buttonsize, "wait", "img/HUD/bwaitpressed.png", this),
		new cButton(0,this.barfixed*3, this.buttonsize,this.buttonsize, "other", "img/HUD/bentpressed.png", this),
		new gButton(this.budgetoffsetx,1, this.buttonsize,this.buttonsize, function() {}, "img/HUD/button_fetch_budget.png")
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

		ctx.save();
		ctx.scale(1,1);
		ctx.fillStyle = game.gameFontColor;
		ctx.font = game.gameFontBig;
		// Money
		ctx.fillText(this.map.money | 0, this.bariconwidth, this.textoffsety);
		// Income
		ctx.fillText(this.map.income | 0, this.barfieldwidth*2 + this.bariconwidth*2, this.textoffsety);
		// Persons
		ctx.fillText(this.map.people, this.barfieldwidth*3 + this.bariconwidth*2, this.textoffsety);
		ctx.restore();

		/* Left bar */

		// Construction menu
		ctx.drawImage(g['img/HUD/construction.png'], 0,this.barfixed, this.constructionmenuwidth,this.constructionmenuheight);

		for( var i = 0; i < this.entities.length; i++ )
			if( this.entities[i].draw ) this.entities[i].draw( ctx, ofs, viewport );
	}

	this.click = function( mouse ) {
		for (var i in this.entities)
			if (this.entities[i].click)
				if (this.entities[i].click( mouse ))
					return true;
	}

	this.mousedown = function( mouse ) {
		if ( mouse.y <= this.barfixed ) return true;

		for (var i in this.entities)
			if (this.entities[i].mousedown)
				if (this.entities[i].mousedown( mouse ))
					return true;
	}

	this.mousemove = function( mouse ) {
		for (var i in this.entities)
			if (this.entities[i].mousemove)
				this.entities[i].mousemove( mouse );
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

	this.closeRoomSelector = function() {
		if (this.roomselector) {
			for (var i in this.entities)
				if (this.entities[i] == this.roomselector) {
					this.entities.splice(i, 1);
					break;
				}
				this.roomselector = null;
		}
	}
}
