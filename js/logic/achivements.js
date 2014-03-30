function Achivement(pMessage, pLimit) {
    this.message = pMessage;
    this.limit = pLimit;
    this.value = 0;
    this.finished = false;
	this.show = 0;

	this.y = 27 + 20;

    this.track = function(increaseValue) {
        this.value += increaseValue;
	    this.check(this.value);
    }
	this.check = function(value) {
        this.value = value;

        if (this.value >= this.limit && !this.finished) {

	        this.show = achivementPopupShowTime;
            this.finished = true;
        }
    }

	this.draw = function(ctx) {
		if (this.show > 0) {
			var x = game.buffer.width/2 - 150,
				y = game.buffer.height - this.y;

			drawButton(ctx, x, y, 300);

			ctx.fillStyle = 'rgb(0,0,0)';
			ctx.fillText(this.message,
				game.buffer.width/2 - 150 + this.message.length * 6/4,
				game.buffer.height - this.y + 18);
		}
		/*
		var width = 200;
		var x = game.buffer.width - 5 - width;
		var y = 29 + 30 + 30 * side;
		if (y < game.buffer.height - 29*2) {
			drawButton(ctx, x, y, width)

			ctx.fillStyle = 'rgb(0,0,0)';
			ctx.fillText(this.message,x+10,y+18);
		} else {
			return false;
		}
		*/
	}

	this.update = function (delta) {
		if (this.show > 0)
			this.show = this.show - delta*10000;
	}

	this.getZ = function() {
		return 9999;
	}
}

function drawButton(ctx, x, y, width) {
	ctx.drawImage( g['img/HUD/Achievements_bg_top.png'], 0, 0, 300, 2, x, y, width, 2 );
	ctx.drawImage( g['img/HUD/Achievements_bg_middle.png'], 0, 0, 300, 2, x, y+2, width, 25 );
	ctx.drawImage( g['img/HUD/Achievements_bg_bottom.png'], 0, 0, 300, 2, x, y+27, width, 2 );
}


function drawAchivementList( ctx ) {
	drawButton(ctx, game.buffer.width - 205, 60 - 31, 200)
	ctx.drawImage( g['img/HUD/arrow_up.png'], 0, 0, 18, 12, game.buffer.width - 205 + 100 - 9, 60 - 22, 18, 12 );

	var achivementList = [];
	for( var i in achivements) {
		if (typeof achivements[i] == 'object') {
			for(var j =0;j<achivements[i].length;j++) {
				achivementList.push(achivements[i][j]);
			}
		}
	}

	var start = 0, stop =0;
	for(var i = start;i<achivementList.length;i++) {
		if (!achivementList[i].draw(ctx,i)) {
			stop = i;
			break;
		}
	}

	var y = 29 + 30 + 30 * (stop);

	drawButton(ctx, game.buffer.width - 205, y, 200);
	ctx.drawImage( g['img/HUD/arrow_down.png'], 0, 0, 18, 12, game.buffer.width - 205 + 100 - 9, y + 9, 18, 12 );
}
