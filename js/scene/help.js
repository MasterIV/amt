function helpScene() {

	this.menuOptions = {
		width: 500,
		height: 350,
		offsetY: 30,
		offsetX: 0
	}

	this.makeButton = function(num,x,y,width,height,callback) {
		this.entities.push(new wButton(num, x, y,width,height, callback));
	}

	this.makeButton(4, 0,290+this.menuOptions.offsetY, 96, 23, function(){
		game.scene = game.scenes.menu;
	});

	this.drawMenu = function(ctx) {
		ctx.save();
		ctx.scale(0.8,0.8);
		ctx.drawImage(g['img/Tutorial.png'], 0, 0, 450, 314,
				this.menuOptions.offsetX+this.menuOptions.width/2*0.8 - 450/2 + 450*0.8/2, this.menuOptions.offsetY+30, 450, 314);
		ctx.restore();
	};
}

helpScene.prototype = new NavigationScene();