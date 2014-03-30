var achivementPopupShowTime = 3000;
var achivements = {
    StartGame:[new Achivement('Einwohner registrierung',10)],

	AngryPeople:[new Achivement('Mit der Zeit geht auch der erste Bürger',10)],
	RoomCount:[new Achivement('Kleine Behörde',3)],
	FinishedApplication:[new Achivement('Per Anhalter durchs Amt',100)],
	VictimTime:[new Achivement('Warte deines Amtes',100)],
	RegistrationOffice:[new Achivement('Volkszählung',100)],
	JobCenter:[new Achivement('Kommen Sie nächste Woche nochmal',100)],
	FinishedApplication:[new Achivement('Ich AGs liegen im Trend',100)],
	FinanceOffice:[new Achivement('Schweizer Steuer CD beantragt',100)],

	WaitingRoomQueue:[new Achivement('Schlange von Babel',100)],
	WaitingRoomStand:[new Achivement('Economy class warten',100)],
	WaitingRoomSit:[new Achivement('Gesäßmuskel training/Businnes class warten',100)],
	WaitingRoomLie:[new Achivement('First class Warten',100)],

	PeopleInMusikRoom:[new Achivement('Lärmbelästigung',100)],
	PeopleInClownRoom:[new Achivement('Erschrecken soll gelernt sein',100)],
	PeopleInSnackRoom:[new Achivement('Fressflash',100)],
	PeopleInTvRoom:[new Achivement('Fernsehzeit',100)],
	PeopleInGamesRoom:[new Achivement('Playroom',100)],

	PeopleInBathroomRoom:[new Achivement('Wurstverkäufer',100)]

}
achivements.track = function (achivement, increaseValue) {
    for (var i =0;i<achivements[achivement].length;i++) {
        achivements[achivement][i].track(increaseValue);
    }
}
achivements.check = function (achivement, value) {
    for (var i =0;i<achivements[achivement].length;i++) {
        achivements[achivement][i].check(value);
    }
}
