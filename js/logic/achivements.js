function Achivement(pMessage, pLimit) {
    this.message = pMessage;
    this.limit = pLimit;
    this.value = 0;

    this.track = function(increaseValue) {
        this.value += increaseValue;

        console.log(this.value,this.limit);
        if (this.value >= this.limit) {
            popupAchivementMessage(this);
        }
    }
}

function popupAchivementMessage(achivement) {
    console.log(34234);

    var achivementPopup = $('<div class="achivementPopup"><span>'+achivement.message+'</span></div>');
    $('#achivements').append(achivementPopup);

    window.setTimeout(function () {
        //$(achivementPopup).fadeOut(function () {
         //   $(achivementPopup).remove();
        //});
    },achivementPopupShowTime);
}