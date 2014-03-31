function creditsScene() {
	this.menuOptions = {
		width: 270,
		height: 250,
		offsetY: 30,
		offsetX: 0
	}

	this.makeButton(4, 0, 200+this.menuOptions.offsetY, 96, 23, function(){
		game.scene = game.scenes.menu;
	});

	this.drawMenu = function(ctx) {
		ctx.drawImage(g['img/logo.png'], 0, 0, 110, 40, this.menuOptions.offsetX+this.menuOptions.width/2 - 55, 10 +this.menuOptions.offsetY, 110, 40);
		ctx.drawImage(g['img/credits.png'], 0, 0, 250, 141, this.menuOptions.offsetX+this.menuOptions.width/2 - 250/2, 38 +this.menuOptions.offsetY, 250, 141);
	}
}

creditsScene.prototype = new NavigationScene();