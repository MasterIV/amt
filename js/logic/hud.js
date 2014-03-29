function Hud( map ) {
	var self = this;
	this.map = map;

	this.moneybarwidth = 307;
	this.personsbarwidth = 191;
	this.barheight = 20;

	this.entities = [
		new cButton(10,10, 80,80),
		new cButton(10,100, 80,80),
		new cButton(10,190, 80,80),
		new cButton(10,280, 80,80)
	];

	this.getZ = function() {
		return 99999;
	}

	this.update = function() {

	}

	this.draw = function( ctx, ofs, viewport ) {
		// Left border
		//ctx.drawImage(g['img/HUD/top_ui_bg.png'], 0,0, this.lborder,20);
		// Money / income / budget bar
		ctx.drawImage(g['img/HUD/money.png'], 0,0, this.moneybarwidth,this.barheight);
		// Persons bar
		ctx.drawImage(g['img/HUD/persons.png'], this.moneybarwidth,0, this.personsbarwidth,this.barheight);
		// Right border
		//ctx.drawImage(g['img/HUD/top_ui_bg.png'], 0,0, 307,20);
	}
}
