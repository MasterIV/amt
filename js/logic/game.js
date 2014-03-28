/* Main game file */

// Enter all init functions to call
window.onload = function() {
	Crafty.init();

	// Initialize everything
	initIso(20,20);
	initSprites();
	initControls();

	run();
}

function run() {
	// Set zoom level

	Crafty.viewport.scale(4);

    window.onresize();

	fillMap();
}

window.onresize = function () {
    if (Crafty.canvas != null)
        Crafty.canvas.context.imageSmoothingEnabled = false;
}
