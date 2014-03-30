function Hud( map, rooms, mapscene ) {
	var self = this;

	var categories = {
		work: [],
		wait: [],
		other: []
	};

	for( var i in rooms ) {
		var r = rooms[i];
		categories[r.category].push( r );
	}

	var selector = new RoomSelector(mapscene);

	this.mapscene = mapscene;

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

	this.entities = [
		selector,
		new cButton(0,this.barfixed, this.buttonsize,this.buttonsize, "work", "img/HUD/bworkpressed.png", this),
		new cButton(0,this.barfixed*2, this.buttonsize,this.buttonsize, "wait", "img/HUD/bwaitpressed.png", this),
		new cButton(0,this.barfixed*3, this.buttonsize,this.buttonsize, "other", "img/HUD/bentpressed.png", this),

		new gButton(this.budgetoffsetx,1, this.buttonsize,this.buttonsize, function() {
			map.claim();
		}, "img/HUD/button_fetch_budget.png")
	];

	this.getZ = function() {
		return 99999;
	}


	this.draw = function( ctx, ofs, viewport ) {
		// Hud Background
		ctx.drawImage(g['img/HUD/money.png'], 0,0, this.moneybarwidth,this.barfixed);
		ctx.drawImage(g['img/HUD/persons.png'], this.moneybarwidth,0, this.personsbarwidth,this.barfixed);
		ctx.drawImage(g['img/HUD/top_ui_bg.png'], this.moneybarwidth + this.personsbarwidth,0, game.buffer.width - (this.moneybarwidth + this.personsbarwidth),this.barfixed);

		ctx.fillStyle = game.gameFontColor;
		ctx.font = game.gameFontBig;

		// Numbers
		ctx.fillText(map.money | 0, this.bariconwidth, this.textoffsety);
		ctx.fillText(map.budget | 0, this.barfieldwidth + this.bariconwidth, this.textoffsety);
		ctx.fillText(Math.ceil( map.cooldown ), this.barfieldwidth + this.bariconwidth + 40, this.textoffsety);
		ctx.fillText(map.income | 0, this.barfieldwidth*2 + this.bariconwidth*2, this.textoffsety);
		ctx.fillText(map.people, this.barfieldwidth*3 + this.bariconwidth*2, this.textoffsety);
		ctx.fillText(map.demand, this.barfieldwidth*4 + this.bariconwidth*2, this.textoffsety);

		/* Left bar */
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

	this.update = function( delta ) {
		for (var i in this.entities)
			if (this.entities[i].update)
				this.entities[i].update( delta );
	}

	this.toggleRoomSelector = function( category, x, y ) {
		selector.show( categories[category] );
	}

	this.closeRoomSelector = function() {
		selection = null;
	}
}
