

function creditsScene() {
	game.zoom = 2;

	mouse.init();

	var menuOptions = {
		width: 270,
		height: 250,
		offsetY: 30,
		offsetX: 0
	}

	this.entities = [];

	this.makeButton = function(num,x,y,width,height,callback) {
		this.entities.push(new wButton(num, x, y,width,height, callback));
	}

	menuOptions.offsetX = $(window).width()/(2*game.zoom) - menuOptions.width/2;

	this.makeButton(4, menuOptions.offsetX+menuOptions.width/2-48,200 +menuOptions.offsetY, 96, 23, function(){
		game.scene = new menuScene();
	});

	this.draw = function( ctx ) {
		menuOptions.offsetX = game.buffer.width/2 - menuOptions.width/2;

		this.drawBackground(ctx)
		this.drawMenu(ctx);

		for(var i = 0; i < this.entities.length; i++) {
			if(this.entities[i].draw)
				this.entities[i].draw(ctx);
		}
	};

	this.drawMenu = function(ctx) {



		ctx.save();
		ctx.globalAlpha = 0.5;
		ctx.fillRect(menuOptions.offsetX,menuOptions.offsetY,menuOptions.width,menuOptions.height);
		ctx.globalAlpha = 1;

		ctx.drawImage(g['img/logo.png'], 0, 0, 110, 40, menuOptions.offsetX+menuOptions.width/2 - 55, 10 +menuOptions.offsetY, 110, 40);


		ctx.drawImage(g['img/credits.png'], 0, 0, 250, 141, menuOptions.offsetX+menuOptions.width/2 - 250/2, 38 +menuOptions.offsetY, 250, 141);


		ctx.restore();

	}

	this.drawBackground = function(ctx) {
		for( var x = -1; x < $(window).width()/(32*game.zoom) ; x++ )
			for( var y = -1; y < $(window).height()/(8*game.zoom); y++ ) {
				ctx.drawImage(g['img/floor.png'], 0, 0, 32, 16, x*32 - ((y%2==0)?16:0), y*8, 32, 16);
			}

		var x = 0,
			y = 1,
			img = g[rooms[0]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);

		var x = 8,
			y = 12,
			img = g[rooms[1]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);

		var x = 16,
			y = 15,
			img = g[rooms[2]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);
		var x = 0,
			y = 20,
			img = g[rooms[3]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);

		var x = 0,
			y = 26,
			img = g[rooms[4]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);
		 /*
		var x = 10,
			y = 29,
			img = g[rooms[5]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);
		 /*
		var x = 10,
			y = -4,
			img = g[rooms[6]['image']];
		ctx.drawImage(img, 0, 0, img.width, img.height, x*32, y*8, img.width, img.height);

		*/
	}

	this.mousedown = function (mouse) {
		for(var i = 0; i < this.entities.length; i++)
			if(this.entities[i].inArea(mouse))
				this.entities[i].callback();
	};

	this.update = function ( delta ) {

	};
}