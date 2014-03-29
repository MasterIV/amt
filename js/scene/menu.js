function menuScene() {
	game.zoom = 2;

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

		this.drawBackground(ctx)

		for(var i = 0; i < this.entities.length; i++) {
			if(this.entities[i].draw)
				this.entities[i].draw(ctx);
		}
	};

	this.drawBackground = function(ctx) {
		for( var x = -1; x < $(window).width()/(32*game.zoom) ; x++ )
			for( var y = -1; y < $(window).height()/(8*game.zoom); y++ ) {
				ctx.drawImage(g['img/floor.png'], 0, 0, 32, 16, x*32 - ((y%2==0)?16:0), y*8, 32, 16);
			}

		var x = 0,
			y = 4,
			img = g[rooms[0]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);

		var x = 8,
			y = 12,
			img = g[rooms[1]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);

		var x = 16,
			y = 2,
			img = g[rooms[2]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);

		var x = 0,
			y = 20,
			img = g[rooms[3]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);

		var x = 15,
			y = 22,
			img = g[rooms[4]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);

		var x = 10,
			y = 29,
			img = g[rooms[5]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);

		var x = 10,
			y = -4,
			img = g[rooms[6]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);
	}

	this.mousedown = function (mouse) {
		for(var i = 0; i < this.entities.length; i++)
			if(this.entities[i].inArea(mouse))
				this.entities[i].callback();
	};

	this.update = function ( delta ) {

	};
}