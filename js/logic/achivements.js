function Achivement(pId, pMessage, pLimit) {
    this.id = pId;
    this.message = pMessage;
    this.limit = pLimit;
    this.value = 0;

    this.track = function(increaseValue) {
        this.value += increaseValue;

        if (this.value >= this.limit) {
            popupAchivementMessage(this);
        }
    }
}

function popupAchivementMessage(achivement) {
    var achivementPopup = $('<div class="achivementPopup"><span>'+achivement.message+'</span></div>');
    $('#achivements').append(achivementPopup);

    window.setTimeout(function () {
        $(achivementPopup).fadeOut(function () {
            $(achivementPopup).remove();
        });
    },achivementPopupShowTime);
}