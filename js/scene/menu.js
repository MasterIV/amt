function menuScene() {
	game.zoom = 1;

	mouse.init();

	this.entities = [
		new wButton(404, 270,100,50, function(){
			console.log('play');
			game.scene = new mapScene();
			game.init();
		}),
		new wButton(404, 316,100,50, function(){
			console.log('score');
		}),
		new wButton(404, 362,100,50, function(){
			console.log('Help');

		}),
		new wButton(404, 407,100,50, function(){
			console.log('credits');
		}),
		new wButton(404, 453,100,50, function(){
			window.close();
		})
	]

	this.draw = function( ctx ) {
		ctx.drawImage(g['img/startScreen_background.png'],0,0);
		ctx.drawImage(g['img/startScreen_menu.png'],400,264);

		for(var i = 0; i < this.entities.length; i++) {
			if(this.entities[i].draw)
				this.entities[i].draw(ctx);
		}
	};

	this.mousedown = function (mouse) {
		for(var i = 0; i < this.entities.length; i++)
			if(this.entities[i].inArea(mouse))
				this.entities[i].callback();
		console.log(mouse);
	};

	this.update = function ( delta ) {

	};
}