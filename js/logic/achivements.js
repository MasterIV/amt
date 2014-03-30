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
		if (this.show > 0) { console.log(this.show);
			ctx.drawImage( g['img/HUD/Achievements_bg_bottom.png'], 0, 0, this.message.length * 6 + 30, 2, game.buffer.width/2 - 150, game.buffer.height - this.y, this.message.length * 6 + 30, 2 );
			ctx.drawImage( g['img/HUD/Achievements_bg_bottom.png'], 0, 0, this.message.length * 6 + 30, 2, game.buffer.width/2 - 150, game.buffer.height - this.y, this.message.length * 6 + 30, 25 );
			ctx.drawImage( g['img/HUD/Achievements_bg_bottom.png'], 0, 0, this.message.length * 6 + 30, 2, game.buffer.width/2 - 150, game.buffer.height - this.y, this.message.length * 6 + 30, 2 );

			ctx.fillStyle = 'rgb(0,0,0)';
			ctx.fillText(this.message,
				game.buffer.width/2 - 150 + this.message.length * 6/4,
				game.buffer.height - this.y + 15);
		}
	}

	this.update = function (delta) {
		if (this.show > 0)
			this.show = this.show - delta*10000;
	}
}

