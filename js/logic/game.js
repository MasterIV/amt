/* Main game file */

// Enter all init functions to call
window.onload = function() {
	Crafty.init();

	initIso(100,100);
	initSprites();
	initControls();

	run();
}

function run() {
	fillMap();
}