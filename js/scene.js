function Scene() {
	this.entities = [];
	this.size = {w:0,h:0};
}

Scene.prototype.dispatch = function( func, arg ) {
	for(var i = 0; i < this.entities.length; i++)
		if(this.entities[i][func])
			this.entities[i][func]( arg );
};

Scene.prototype.resize = function( w, h ) {
	this.size.w = w;
	this.size.h = h;
};

Scene.prototype.draw = function( ctx ) {
	this.dispatch('draw', ctx);
};

Scene.prototype.update = function( delta ) {
	this.dispatch('update', delta);
};

Scene.prototype.click = function( mouse ) {
	this.dispatch('click', mouse);
};

Scene.prototype.mousedown = function( mouse ) {
	this.dispatch('mousedown', mouse);
}

Scene.prototype.mouseup = function( mouse ) {
	this.dispatch('mouseup', mouse);
}

function NavigationScene() {
	this.entities = [];
	this.size = {w:0,h:0};

	this.menuOptions = {
		width: 100,
		height: 100,
		offsetY: 30,
		offsetX: 0
	}
}

NavigationScene.prototype = new Scene();

NavigationScene.prototype.makeButton = function(num,x,y,width,height,callback) {
	this.entities.push(new wButton(num, x, y,width,height, callback));
};

NavigationScene.prototype.resize = function(w,h) {
	this.size.w = w;
	this.size.h = h;

	this.menuOptions.offsetX = w/2 - this.menuOptions.width/2;
	for(var i = 0; i < this.entities.length; i++)
		this.entities[i].x = this.menuOptions.offsetX + this.menuOptions.width/2 - 48;
};

NavigationScene.prototype.mousedown = function (mouse) {
	for(var i = 0; i < this.entities.length; i++)
		if(this.entities[i].inArea && this.entities[i].inArea(mouse))
			this.entities[i].callback();
};

NavigationScene.prototype.drawMenu =  function() {};

NavigationScene.prototype.draw = function( ctx ) {
	bg.draw(ctx);

	ctx.fillStyle = 'rgba(0,0,0,0.5)';
	ctx.fillRect(this.menuOptions.offsetX,this.menuOptions.offsetY,this.menuOptions.width,this.menuOptions.height);

	this.drawMenu(ctx);

	for(var i = 0; i < this.entities.length; i++) {
		if(this.entities[i].draw)
			this.entities[i].draw(ctx);
	}
};