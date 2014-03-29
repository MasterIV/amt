var achivementPopupShowTime = 3000;
var achivementFadeTime = 1000;
var achivements = {
    AngryPeople:[new Achivement('Sie haben wirklich viele Leute verärgert! Weiter so',10),
                 new Achivement('Sie haben wirklich viele Leute verärgert! Weiter so',20),
                 new Achivement('Sie haben wirklich viele Leute verärgert! Weiter so',30)]
}
achivements.track = function (achivement, increaseValue) {
    for (var i =0;i<achivements[achivement].length;i++) {
        achivements[achivement][i].track(increaseValue);
    }
}