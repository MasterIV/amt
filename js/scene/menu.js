function menuScene() {
	this.menuOptions = {
		width: 200,
		height: 250,
		offsetY: 30,
		offsetX: 0
	}

	this.makeButton(0, 0, 100 +this.menuOptions.offsetY, 96, 23, function() { game.scene = game.scenes.map; });
	this.makeButton(1, 0, 130 +this.menuOptions.offsetY, 96, 23, function () { game.scene = game.scenes.achievements; });
	this.makeButton(2, 0, 160 +this.menuOptions.offsetY, 96, 23, function () { game.scene = game.scenes.help; });
	this.makeButton(3, 0, 190 +this.menuOptions.offsetY, 96, 23, function () { game.scene = game.scenes.credits; });

	this.drawMenu = function(ctx) {
		ctx.drawImage(g['img/logo.png'], 0, 0, 110, 78, this.menuOptions.offsetX+this.menuOptions.width/2 - 55, 10 +this.menuOptions.offsetY, 110, 78);
	};
}

menuScene.prototype = new NavigationScene();