var iso;
var map_width, map_height;

function initIso(mw,mh) {
	iso = Crafty.isometric.size(32,16);
	map_width = mw;
	map_height = mh;
}

function fillMap() {
	for (var i = 0 ; i < map_width ; i++)
		for (var j = 0 ; j < map_height ; j++) {
			var tile = Crafty.e("2D, Canvas, default");
			iso.place(i,j, 0, tile);
		}
}