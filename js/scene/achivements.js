function achivementsScene() {
	game.zoom = 2;

	this.start = 0;

	mouse.init();

	var menuOptions = {
		width: 320,
		height: 250,
		offsetY: 30,
		offsetX: 0
	}

	this.achivementList = [];
	this.entities = [];
	for( var i in achivements) {
		if (typeof achivements[i] == 'object') {
			for(var j =0;j<achivements[i].length;j++) {
				this.entities.push(achivements[i][j]);
				this.achivementList.push(achivements[i][j]);

			}
		}
	}

	this.makeButton = function(num,x,y,width,height,callback) {
		this.entities.push(new wButton(num, x, y,width,height, callback));
	}

	menuOptions.offsetX = $(window).width()/(2*game.zoom) - menuOptions.width/2;

	this.makeButton(4, menuOptions.offsetX+menuOptions.width/2-48,260+menuOptions.offsetY, 96, 23, function(){
		game.scene = new menuScene();
	});



	this.entities.push(new iButton( game.buffer.width - 205 + 100 - 9, 100,18,12,function () {
		if (this.start > 0)
			this.start = this.start - 1;
		console.log(654654);
	}, 'img/HUD/arrow_up.png' ));

	this.entities.push(new iButton( game.buffer.width - 205 + 100 - 9, 120,18,12,function () {
		if (this.start > this.achivementList.length-8)
			this.start = this.start + 1;
		console.log(654654);

	}, 'img/HUD/arrow_down.png' ));

	this.draw = function( ctx ) {

		this.drawBackground(ctx)


		menuOptions.offsetX = game.buffer.width/2 - menuOptions.width/2;

		ctx.save();
		ctx.globalAlpha = 0.5;
		ctx.fillRect(menuOptions.offsetX,menuOptions.offsetY,menuOptions.width,menuOptions.height);
		ctx.globalAlpha = 1;



		for(var i = this.start;i<8;i++) {
			this.achivementList[i].privateDraw(ctx, i)
		}


		ctx.restore();

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
	}

	this.mousedown = function (mouse) {
		for(var i = 0; i < this.entities.length; i++)
			if (this.entities[i].inArea instanceof iButton)
			if(this.entities[i].inArea(mouse))
				this.entities[i].callback();
	};

	this.update = function ( delta ) {

	};
}