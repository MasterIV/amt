function Achivement(pMessage, pLimit, icon) {
    this.message = pMessage;
    this.limit = pLimit;
    this.value = 0;
    this.finished = false;
	this.show = 0;

	this.icon = icon;

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

	this.draw = function(ctx, i) {
		if (this.show > 0) {
			this.privateDraw(ctx, i)
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

	this.privateDraw = function(ctx, i) {
		if (typeof i == 'undefined') {
			var x = game.buffer.width/2 - 150,
				y = game.buffer.height - this.y ;
		} else {
			var x = game.buffer.width/2 - 150,
				y = 34 + i * 30;
		}

		drawButton(ctx, x, y, 300);

		ctx.drawImage(g[this.icon], 0, 0, 12, 18, game.buffer.width/2 + 130 , y, 12, 18);

		ctx.fillStyle = 'rgb(0,0,0)';

		if (typeof i == 'undefined') {
			ctx.fillText(this.message,
			game.buffer.width/2 - 150 + this.message.length * 6/4,
			y + 18);
		} else {
			ctx.fillText(this.message,
				game.buffer.width/2 - 150,
				y + 18);
		}
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



