var achivementPopupShowTime = 3000;
var achivements = {
	StartGame:[new Achivement('Einwohnerregistrierung',10,'img/icons/gold.png')],

	AngryPeople:[new Achivement('Mit der Zeit geht auch der erste Bürger',10,'img/icons/bronze.png'),
		new Achivement('Wenn alle Stricke reißen, hänge ich mich auf',50,'img/icons/gold.png')],
	RoomCount:[new Achivement('Kleine Behörde',3,'img/icons/bronze.png'),
		new Achivement('Mittlere Behörde',10,'img/icons/silver.png'),
		new Achivement('Große Behörde',20,'img/icons/gold.png')],
	FinishedApplication:[new Achivement('Per Anhalter durchs Amt',100,'img/icons/silver.png'),
		new Achivement('Eierschaukeln',50,'img/icons/gold.png')],
	VictimTime:[new Achivement('Warte deines Amtes',100,'img/icons/gold.png')],

	RegistrationOffice:[new Achivement('Volkszählung',10,'img/icons/bronze.png'),
		new Achivement('Schlange von Babel',50,'img/icons/silver.png')],
	JobCenter:[new Achivement('Kommen Sie nächste Woche nochmal',20,'img/icons/silver.png'),
		new Achivement('Gesäßmuskeltraining',10,'img/icons/gold.png')],
	StrongEconomy:[new Achivement('Ich-AGs liegen im Trend',100,'img/icons/gold.png')],
	FinanceOffice:[new Achivement('Schweizer Steuer-CD beantragt',100,'img/icons/silver.png'),
		new Achivement('Resteverwertung',10,'img/icons/gold.png')],

	//WaitingRoomQueue:[new Achivement('Schlange von Babel',100)],
	//WaitingRoomStand:[new Achivement('Economy class warten',100)],
	//WaitingRoomSit:[new Achivement('Gesäßmuskel training',100)],
	//WaitingRoomLie:[new Achivement('First class Warten',100)],

	//PeopleInMusikRoom:[new Achivement('Lärmbelästigung',100)],
	//PeopleInClownRoom:[new Achivement('Erschrecken soll gelernt sein',100)],
	//PeopleInSnackRoom:[new Achivement('Fressflash',100)],
	//PeopleInTvRoom:[new Achivement('Fernsehzeit',100)],
	//PeopleInGamesRoom:[new Achivement('Playroom',100)],

	//PeopleInBathroomRoom:[new Achivement('Wurstverkäufer',100)]

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
