/* Main game file */

// Enter all init functions to call
window.onload = function() {
	Crafty.init();

	// Initialize everything
	initIso(20,20);
	initSprites();
	initControls();



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
