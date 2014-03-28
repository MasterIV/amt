var iso;
var map_width, map_height;

function initIso(mw,mh) {
	iso = Crafty.isometric.size(32,16);
    Crafty.canvas.init();
	map_width = mw;
	map_height = mh;
}


var hoveredTile = null;
function fillMap() {
	for (var i = 0 ; i < map_width ; i++)
		for (var j = 0 ; j < map_height ; j++) {
            var tile = null;
            (function (pX, pY) {
                tile = Crafty.e("2D, Canvas, default, Mouse")
                    .areaMap([0,8],[16,0],[32,8],[16,8])
                    .bind('MouseOver', function (e) {
                        hoveredTile = {
                            x:pX,
                            y:pY
                        };
                    });
            })(i,j);

			iso.place(i,j, 0, tile);
		}
}