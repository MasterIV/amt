function achivementsScene() {
	var self = this;
	this.start = 0;


	this.menuOptions = {
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

	this.makeButton(4, 0,260+this.menuOptions .offsetY, 96, 23, function(){
		game.scene = game.scenes.menu;
	});

	this.makeButton(6, 0,260+this.menuOptions .offsetY, 96, 23, function(){
		if (self.start > 0) self.start = self.start - 1;
	});

	this.makeButton(5, 0,260+this.menuOptions.offsetY, 96, 23, function(){
		if (self.start < 1) self.start = self.start + 1;
	});



	this.drawMenu = function( ctx ) {
		var pageCount = 8;
		var startIndex = self.start * pageCount;
		var endIndex = startIndex + pageCount;
		if (endIndex >= this.achivementList.length) endIndex = this.achivementList.length;

		for(var i = startIndex;i<endIndex;i++) {
			this.achivementList[i].privateDraw(ctx, i - startIndex)
		}
	};
}

achivementsScene.prototype =  new NavigationScene();