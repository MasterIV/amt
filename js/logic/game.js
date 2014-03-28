/* Main game file */

// Enter all init functions to call
window.onload = function() {
	Crafty.init();

	// Initialize everything
	initIso(1,1);
	initSprites();
	initControls();

	run();
}

function run() {
	// Set zoom level

	Crafty.viewport.scale(4);

	fillMap();
}