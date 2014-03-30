var rooms = [
	// -------------------------------------------------------------------------------------------------------
	// Amtszimmer
	// -------------------------------------------------------------------------------------------------------
	{
		name: "Einzelzimmer",
		category: "work",

		speed: 1.00,
		demand: 1,
		worker: 1,
		fee: 100,

		upkeep: 50,
		price: 1000,

		image:'img/rooms/Raum_starter.png',
		frames: 14,
		framespeed: 10,
		offset: {x: 31, y: 32 },
		shape: [
			[ 2, 2, 2, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 2, 2, 2 ]
		]
	}
	,{
		name: "Einwohnermeldeamt",
		category: "work",

		speed: 1.05,
		demand: 1,
		worker: 2,
		fee: 100,

		upkeep: 100,
		price: 2000,

		image:'img/rooms/Raum_einwohnermeldeamt.png',
		offset: {x: 98, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 2, 0, 0, 0, 0 ],
			[ 2, 2, 2, 2, 0, 0, 0, 0 ]
		],

		clicksound: 'snd/Einwohnermeldeamt.mp3'
	},
	{
		name: "Arbeitsamt",
		category: "work",

		speed: 5,
		demand: 2.4,
		worker: 3,
		fee: 75,

		upkeep: 150,
		price: 4500,

		image:'img/rooms/Raum_arbeitsamt.png',
		frames: 18,
		framespeed: 30,
		offset: {x: 98, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2, 2, 2, 2 ]
		],

		clicksound: 'snd/Arbeitsamt.mp3'
	},
	{
		name: "Gewerbeamt",
		category: "work",

		speed: 4.725,
		demand: 3.5,
		worker: 4,
		fee: 60,

		upkeep: 200,
		price: 8500,

		image:'img/rooms/Raum_gewerbeamt.png',
		offset: {x: 98, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2, 0, 0, 0 ],
			[ 2, 2, 2, 2, 2, 0, 0, 0 ]
		],

		clicksound: 'snd/Gewerbeamt.mp3'
	},
	{
		name: "Finanzamt",
		category: "work",

		speed: 7.5,
		demand: 5,
		worker: 5,
		fee: 50,

		upkeep: 250,
		price: 13000,

		image:'img/rooms/Raum_finanzamt.png',
		offset: {x: 98, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2, 2, 2, 2 ]
		],

		clicksound: 'snd/Finanzamt.mp3'
	},

	// -------------------------------------------------------------------------------------------------------
	// Wartebereiche
	// -------------------------------------------------------------------------------------------------------

	{
		name: "Warteschlange",
		category: "wait",

		anger: 30,
		capacity: 4,

		upkeep: 10,
		price: 500,

		image:'img/rooms/Raum_warteschlange.png',
		frames: 8,
		framespeed: 30,
		framelength: 82,
		offset: {x: 66, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2, 2 ]
		]
	},
	{
		name: "Stehplätze",
		category: "wait",

		anger: 25,
		capacity: 6,

		upkeep: 20,
		price: 1000,

		image:'img/rooms/Raum_stehplaetze.png',
		offset: {x: 48, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2 ]
		]
	},
	{
		name: "Sitzplätze",
		category: "wait",

		anger: 20,
		capacity: 6,

		upkeep: 30,
		price: 2000,

		image:'img/rooms/Raum_sitzplaetze.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 2, 2, 2 ],
			[ 2, 1, 2, 0, 0 ],
			[ 2, 1, 2, 0, 0 ],
			[ 2, 2, 2, 0, 0 ]
		]
	},
	{
		name: "Liegeplätze",
		category: "wait",

		anger: 10,
		capacity: 6,

		upkeep: 60,
		price: 3000,

		image:'img/rooms/Raum_liegeplaetze.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2 ]
		]
	},

	// -------------------------------------------------------------------------------------------------------
	// Sonstige Räume
	// -------------------------------------------------------------------------------------------------------

	{
		name: "Mitarbeitertoiletten",
		category: "other",

		entertainment: 0,
		slow: 1.15,
		income: 0,

		upkeep: 25,
		price: 500,

		image:'img/rooms/Raum_bathroom.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2 ],
			[ 2, 1, 1, 2, 0 ],
			[ 2, 1, 1, 2, 0 ],
			[ 2, 2, 2, 2, 0 ]
		],

		clicksound: 'snd/Mitarbeiter Toilette.mp3'
	},
	{
		name: "Raucherraum",
		category: "other",

		entertainment: 0,
		slow: 1.1,
		income: 0,

		upkeep: 60,
		price: 1200,

		image:'img/rooms/Raum_raucherraum.png',
		offset: {x: 68, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0 ]
		],

		clicksound: 'snd/Raucherraum.mp3'
	},
	{
		name: "Cafeteria",
		category: "other",

		entertainment: 0,
		slow: 1.15,
		income: 10,

		upkeep: 130,
		price: 2000,

		image:'img/rooms/Raum_cafeteria.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2 ],
			[ 2, 2, 2, 2, 0 ]
		],

		clicksound: 'snd/Cafeteria.mp3'
	},
	{
		name: "Cantine",
		category: "other",

		entertainment: 0,
		slow: 1.35,
		income: 20,

		upkeep: 210,
		price: 3000,

		image:'img/rooms/Raum_cantine.png',
		offset: {x: 68, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2, 2 ],
			[ 2, 1, 1, 1, 2, 0 ],
			[ 2, 1, 1, 1, 2, 0 ],
			[ 2, 1, 1, 1, 2, 0 ],
			[ 2, 2, 2, 2, 2, 0 ]
		],

		clicksound: 'snd/Cantine.mp3'
	},
	{
		name: "Fitnessraum",
		category: "other",

		entertainment: 0,
		slow: 1.55,
		income: 0,

		upkeep: 250,
		price: 5000,

		image:'img/rooms/Raum_fitnessraum.png',
		offset: {x: 68, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2, 2 ]
		],

		clicksound: 'snd/Fitnessraum.mp3'
	},
	{
		name: "Stromberg",
		category: "other",

		entertainment: 0,
		slow: 1.25,
		income: 0,

		upkeep: 350,
		price: 7000,

		image:'img/rooms/Raum_strombergsbuero.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2 ]
		]
	},
	{
		name: "Besenkammer",
		category: "other",

		entertainment: 0,
		slow: 1.05,
		income: 0,

		upkeep: 10,
		price: 500,

		image:'img/rooms/Raum_besenkammer.png',
		offset: {x: 33, y: 32 },
		shape: [
			[ 2, 2, 2, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 2, 2, 2 ]
		],

		clicksound: 'snd/Besenkammer.mp3'
	},
	{
		name: "Musikraum",
		category: "other",

		entertainment: 0.1,
		slow: 1,
		income: 0,

		upkeep: 100,
		price: 1000,

		image:'img/rooms/Raum_musikraum.png',
		frames: 5,
		framespeed: 10,
		offset: {x: 33, y: 32 },
		shape: [
			[ 2, 2, 2, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 2, 2, 2 ]
		]
	},
	{
		name: "Clownszimmer",
		category: "other",

		entertainment: 0.05,
		slow: 1,
		income: 0,

		upkeep: 250,
		price: 1000,

		image:'img/rooms/clowns_spreadsheet.png',
		frames: 14,
		framespeed: 10,
		offset: {x: 16, y: 32 },
		shape: [
			[ 2, 2, 2 ],
			[ 2, 1, 2 ],
			[ 2, 2, 2 ]
		]
	},
	{
		name: "Snackautomaten",
		category: "other",

		entertainment: 0.1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 2000,

		image:'img/rooms/Raum_snackraum.png',
		offset: {x: 20, y: 32 },
		shape: [
			[ 2, 2, 2 ],
			[ 2, 1, 2 ],
			[ 2, 1, 2 ],
			[ 2, 2, 2 ]
		]
	},
	{
		name: "Fernsehraum",
		category: "other",

		entertainment: 0.4,
		slow: 1,
		income: 0,

		upkeep: 200,
		price: 3000,

		image:'img/rooms/Raum_TV.png',
		offset: {x: 83, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Spielhölle",
		category: "other",

		entertainment: 0.5,
		slow: 1,
		income: 1,

		upkeep: 350,
		price: 5000,

		image:'img/rooms/Raum_spielhoelle.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2 ],
			[ 2, 1, 1, 2, 0 ],
			[ 2, 1, 1, 2, 0 ],
			[ 2, 2, 2, 2, 0 ]
		]
	},
	{
		name: "Bordell",
		category: "other",

		entertainment: 0.3,
		slow: 1,
		income: 1,

		upkeep: 500,
		price: 8000,

		image:'img/rooms/cindy_spreadsheet.png',
		frames: 12,
		framespeed: 10,
		offset: {x: 31, y: 32 },
		shape: [
			[ 2, 2, 2, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 2, 2, 2 ]
		]
	}
];