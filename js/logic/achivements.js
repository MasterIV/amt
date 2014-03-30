function Achivement(pMessage, pLimit) {
    this.message = pMessage;
    this.limit = pLimit;
    this.value = 0;
    this.finished = false;

    this.track = function(increaseValue) {
        this.value += increaseValue;

	    this.check(this.value);
    }
	this.check = function(value) {
        this.value = value;

      //  console.log(this.value,this.limit);
        if (this.value >= this.limit && !this.finished) {
            this.finished = true;
            popupAchivementMessage(this);
        }
    }
}

function popupAchivementMessage(achivement) {
    var achivementPopup = $('<div class="achivementPopup"><span>'+achivement.message+'</span></div>');
    $('#achivements').append(achivementPopup);

    window.setTimeout(function () {
        $(achivementPopup).fadeOut(achivementFadeTime,function () {
            $(achivementPopup).remove();
        });
    },achivementPopupShowTime);
}

function openAchivementOverlay() {
	var achivementOverlay = $('<div id="achivementOverlay"></div>');
	var innerWrapper = $('<div id="innerWrapper"></div>');
	$(achivementOverlay).append(innerWrapper);
	var closeButton = $('<div id="overlayClose"></div>');
	$(achivementOverlay).append(closeButton);
	$(closeButton).on('click',function () {
		$('#achivementOverlay').remove()
	});

	for(var ac in achivements) {
		var acArray = achivements[ac];
		console.log(typeof acArray );
		if(typeof acArray == 'object') {
			console.log(acArray);

			for(var i =0;i<acArray.length;i++) {
				var achivementDOM = $('<div class="achivementPopup"><span>'+acArray[i].message+'</span></div>');
				$(innerWrapper).append(achivementDOM);
			}
		}
	}
	$('body').append(achivementOverlay);

	var height = parseInt($('body').height()) - 100 - 20;
	$('#innerWrapper').css('height',height+'px');

	$('#achivementOverlay').css('top','50px');

}
