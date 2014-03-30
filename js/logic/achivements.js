function Achivement(pMessage, pLimit) {
    this.message = pMessage;
    this.limit = pLimit;
    this.value = 0;
    this.finished = false;
	this.show = false;

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

	this.draw = function() {
		if (this.show > 0) {
			ctx.drawImage( img, x, y, width, height, dx, dy, width, height );
			ctx.drawImage( img, x, y, width, height, dx, dy, width, height );
			ctx.drawImage( img, x, y, width, height, dx, dy, width, height );
		}
	}

	this.update = function (delta) {
		if (this.show > 0)
			this.show = this.show - delta*10;
	}
}

