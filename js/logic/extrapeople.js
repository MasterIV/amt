/*

 for(var i =0;i<1;i++) {
 var pos = null;
 if (Math.random()*2 < 1) {
 pos = {x:(Math.random() * map.grid[0].length) | 0,y:0};
 } else {
 pos = {x:0,y:(Math.random() * map.grid.length) | 0};
 }
 console.log(pos);
 //entities.push(new ExtraPeople(map, getNormalCoords(pos)));
 entities.push(new ExtraPeople(map, getNormalCoords({x:10,y:0})));
 }
 */

function ExtraPeople( pMap , posv2) {

	console.log(posv2);

	var map = pMap;
	this.img = g['img/place_invalid.png'];
	this.posScreem = posv2;
	this.offset = new V2(0, 0);

	this.currentPath = [];
	this.nextNode = []
	this.movementSpeed = 0.02;

	this.goTo = function(posX, posY) {
		this.currentPath = a_star(getCoords({x:this.posScreem.x, y:this.posScreem.y}), [posX,posY],map.grid, map.grid[0].length, map.grid.length, false);

		var normalCoords = getNormalCoords({x:this.currentPath[0].x,y:this.currentPath[0].y})

		var coords = getCoords({x:this.posScreem.x,y:this.posScreem.y});
		console.log('now: '+coords[0]+"|"+coords[1]);
		console.log('target: '+this.currentPath[0].x+"|"+this.currentPath[0].y);
	}

	this.update = function(delta) {
		if (this.currentPath.length) {
			var normalCoords = getNormalCoords({x:this.currentPath[0].x,y:this.currentPath[0].y})


			if (parseInt(normalCoords.x) != parseInt(this.posScreem.x)) {
				this.posScreem.x = this.posScreem.x + ((this.currentPath[0].x*32<this.posScreem.x)?(0.2):(-0.2)); // offset? viewport? speed?
			}
			if (parseInt(normalCoords.y) != parseInt(this.posScreem.y)) {
				this.posScreem.y = this.posScreem.y + ((this.currentPath[0].y*16<this.posScreem.y)?(-0.1):(0.1));// offset? viewport? speed?
			}

			if (normalCoords.x == parseInt(this.posScreem.x) && normalCoords.y == parseInt(this.posScreem.y)) { // coords right?
				this.currentPath.splice(0,1);
				var normalCoords = getNormalCoords({x:this.currentPath[0].x,y:this.currentPath[0].y})

				var coords = getCoords({x:this.posScreem.x,y:this.posScreem.y});
				console.log('now: '+coords[0]+"|"+coords[1]);
				console.log('target: '+this.currentPath[0].x+"|"+this.currentPath[0].y);
			}
		} else {
			while (!this.currentPath.length) {
				this.goTo((Math.random()*map.grid.length)|0,(Math.random()*map.grid[0].length)|0);
			}
		}
	}

	function getCoords( point ) {
		var mx = ((point.x / 16 + point.y / 8) / 2 ) | 0;
		var my = ((point.y / 8 - (point.x / 16)) / 2 ) | 0;

		return [mx, my];
	}
	function getNormalCoords( point ) {
		return new V2( point.x*16+point.y*-16 -16, point.x*8+point.y*8);
	}

	this.getZ = function() {
		return this.posScreem.y;
	}

	this.draw = function(ctx, offset,viewport) {
		var dx = viewport.x+offset.x+this.posScreem.x-this.offset.x;
		var dy = viewport.y+offset.y+this.posScreem.y-this.offset.y;

		ctx.drawImage( this.img, 0, 0, this.img.width, this.img.height, dx, dy,  this.img.width, this.img.height );
	}
}
