/* Main game file */

// Enter all init functions to call
$(document).ready(function() {
    Crafty.init();

    initIso(100,100);
    initSprites();
    initControls();

    run();
})

function run() {
    fillMap();
}