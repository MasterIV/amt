var achivementPopupShowTime = 3000;
var achivementFadeTime = 1000;
var achivements = {
    AngryPeople:[new Achivement('Sie haben wirklich viele Leute verärgert! Weiter so',10),
                 new Achivement('Sie haben wirklich viele Leute verärgert! Weiter so',20),
                 new Achivement('Sie haben wirklich viele Leute verärgert! Weiter so',30)],
	RoomCount:[new Achivement('Kleine Behörde',3),
				new Achivement('Mittlere Behörde',8),
				new Achivement('Die Behörde wächst!',13)]
}
achivements.track = function (achivement, increaseValue) {
    for (var i =0;i<achivements[achivement].length;i++) {
        achivements[achivement][i].track(increaseValue);
    }
}