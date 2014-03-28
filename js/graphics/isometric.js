var iso;
var tiles = [];

function initIso(mw,mh) {
	iso = Crafty.isometric.size(32,16);
    Crafty.canvas.init();
}


var hoveredTile = null;
function fillMap() {
	for (var i = 0 ; i < mapSize.width ; i++) {
        tiles[i] = [];
		for (var j = 0 ; j < mapSize.height ; j++) {
            (function (pX, pY) {
                tiles[i][j] = Crafty.e("2D, Canvas, default, Mouse")
                    .areaMap([0,8],[16,0],[32,8],[16,8])
                    .bind('MouseOver', function (e) {
                        hoveredTile = {
                            x:pX,
                            y:pY
                        };
                    });
            })(i,j);

			iso.place(i,j, 0, tiles[i][j]);
		}
    }
}