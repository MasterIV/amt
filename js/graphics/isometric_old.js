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
                tiles[i][j] = Crafty.e("2D, Canvas, snacks, Mouse")
                    .areaMap([0,8],[16,0],[32,8],[16,8])
                    .bind('MouseOver', function (e) {
                        hoveredTile = {
                            x:pX,
                            y:pY
                        };
                        console.log([pX,pY])
                        console.log(getIsoCoords(pX,pY));

                    });
            })(i,j);

            var coords = getIsoCoords(i,j);

            //console.log(coords);exit;

			iso.place(coords.x,coords.y, 0, tiles[i][j]);
		}
    }
}


function getIsoCoords(x,y) {
    var calcX = (mapSize.width)/2 - (y) + x;
    var calcY = y + x;

    if (x<y) {
        calcX = calcX - parseInt((x-y)/2);
    }
    if (x>y) {
        calcX = calcX - parseInt((x-y)) + parseInt((x-y)/2);
    }

    return {x:calcX,y:calcY};
}
