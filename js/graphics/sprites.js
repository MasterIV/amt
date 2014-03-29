/* Sprite definitions */

function initSprites() {
	Crafty.sprite(32,16, "img/default_tile.png", {
		default: [0,0,1,1],
	});
	Crafty.sprite(32,16, "img/floor_snacks.png", {
		snacks: [0,0,1,1],
	});
	Crafty.sprite(128,98, "img/Raum_mockup.png", {
		room: [0,0,1,1]
	});
}