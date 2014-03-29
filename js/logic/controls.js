/* Game controls */

function initControls() {
	// Map scrolling
	Crafty.addEvent(this, Crafty.stage.elem, "mousedown", function(e) {
		// Do not use second mouse button
		if (e.button > 1) {
            console.log(e);
            testPlaceRoom();
            return;
        }

		var base = {x: e.clientX, y: e.clientY};

		function scroll(e) {
			var dx = base.x - e.clientX,
				dy = base.y - e.clientY;
			base = {x: e.clientX, y: e.clientY};
			Crafty.viewport.x -= dx / Crafty.viewport._scale;
			Crafty.viewport.y -= dy / Crafty.viewport._scale;

		};

		Crafty.addEvent(this, Crafty.stage.elem, "mousemove", scroll);
		Crafty.addEvent(this, Crafty.stage.elem, "mouseup", function() {
			Crafty.removeEvent(this, Crafty.stage.elem, "mousemove", scroll);
		});
	});
}

function testPlaceRoom() {
    var result = map.checkCollision(rooms[0], hoveredTile.x,hoveredTile.y);
    if (!result) {
        map.placeRoom(rooms[0], hoveredTile.x,hoveredTile.y)
        myPlaceRoom(hoveredTile.x,hoveredTile.y);
    } else {
        console.log(result);
    }
}

function myPlaceRoom(pX, pY) {
    var room = Crafty.e("2D, Canvas, room, Mouse");
    iso.place(pX, pY, 0, room);
}