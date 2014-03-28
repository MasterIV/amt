/* Main game file */

// Enter all init functions to call

var map = null;
var mapSize = {
    width:50,
    height:50
}

window.onload = function() {
	Crafty.init();

	// Initialize everything
	initIso(mapSize.width,mapSize.height);
	initSprites();
	initControls();

    map = new Map(initGrid(mapSize.width,mapSize.height))

    Crafty.canvas.context._clearRect=Crafty.canvas.context.clearRect;
    Crafty.canvas.context.clearRect=function(x,y,w,h){
        Crafty.canvas.context._clearRect(x,y,w,h);
        Crafty.canvas.context.imageSmoothingEnabled = false;
    };

    run();
}

function run() {
	// Set zoom level
	Crafty.viewport.scale(4);

	fillMap();
}
