var rooms = [
	// -------------------------------------------------------------------------------------------------------
	// Amtszimmer
	// -------------------------------------------------------------------------------------------------------
	{
		name: "Einzelzimmer",
		category: "work",
		notplaceable: true,

		speed: 1.00,
		demand: 1,
		worker: 1,
		fee: 100,

		upkeep: 50,
		price: 1000,

		image:'img/rooms/Raum_Starter.png',
		frames: 14,
		framespeed: 100,
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
		fee: 120,

		upkeep: 100,
		price: 2000,

		image:'img/rooms/Raum_einwohnermeldeamt.png',
		icon:'img/icons/Einwohnermeldeamt.png',
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

		speed: 2.4,
		demand: 2,
		worker: 3,
		fee: 90,

		upkeep: 150,
		price: 5000,

		image:'img/rooms/Raum_arbeitsamt.png',
		icon:'img/icons/Arbeitsamt.png',
		frames: 18,
		framespeed: 70,
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
		fee: 70,

		upkeep: 200,
		price: 12000,

		image:'img/rooms/Raum_gewerbeamt.png',
		icon:'img/icons/Gewerbeamt.png',
		offset: {x: 98, y: 32 },
		frames: 8,
		framespeed: 50,
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
		fee: 60,

		upkeep: 250,
		price: 30000,

		image:'img/rooms/Raum_finanzamt.png',
		icon:'img/icons/Finanzamt.png',
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
		name: "Wartebank",
		category: "wait",
		notplaceable:true,

		anger: 10,
		capacity: 1,

		upkeep: 10,
		price: 100,

		image:'img/rooms/Raum_Bank.png',
		frames: 0,
		framespeed: 0,
		framelength: 0,
		offset: {x: 11, y: 7 },
		shape: [
			[ 2, 2, 2 ],
			[ 2, 1, 2 ],
			[ 2, 2, 2 ]
		]
	},
	{
		name: "Warteschlange",
		category: "wait",

		anger: 30,
		capacity: 4,

		upkeep: 10,
		price: 500,

		image:'img/rooms/Raum_warteschlange.png',
		icon:'img/icons/Warteschlange.png',
		frames: 8,
		framespeed: 70,
		offset: {x: 66, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2, 2 ]
		],

		clicksound: 'snd/Warteschlange.mp3'
	},
	{
		name: "Stehplätze",
		category: "wait",

		anger: 25,
		capacity: 6,

		upkeep: 20,
		price: 2000,

		image:'img/rooms/Raum_stehplaetze.png',
		icon:'img/icons/Stehplaetze.png',
		offset: {x: 48, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2 ]
		],

		clicksound: 'snd/Warteschlange.mp3'
	},
	{
		name: "Sitzplätze",
		category: "wait",

		anger: 20,
		capacity: 6,

		upkeep: 30,
		price: 5000,

		image:'img/rooms/Raum_sitzplaetze.png',
		icon:'img/icons/Sitzplatzraum.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 2, 2, 2 ],
			[ 2, 1, 2, 0, 0 ],
			[ 2, 1, 2, 0, 0 ],
			[ 2, 2, 2, 0, 0 ]
		],

		clicksound: 'snd/Warteraum (Sitzen).mp3'
	},
	{
		name: "Liegeplätze",
		category: "wait",

		anger: 10,
		capacity: 6,

		upkeep: 40,
		price: 15000,

		image:'img/rooms/Raum_liegeplaetze.png',
		icon:'img/icons/Liegeraum.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2 ]
		],

		clicksound: 'snd/Warteraum (Liegen).mp3'
	},

	// -------------------------------------------------------------------------------------------------------
	// Sonstige Räume
	// -------------------------------------------------------------------------------------------------------

	{
		name: "Mitarbeitertoiletten",
		category: "slow",

		slow: 1.15,
		income: 0,

		upkeep: 25,
		price: 500,

		image:'img/rooms/Raum_bathroom.png',
		icon:'img/icons/Klo.png',
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
		category: "slow",

		slow: 1.1,
		income: 0,

		upkeep: 40,
		price: 2000,

		image:'img/rooms/Raum_raucherraum.png',
		icon:'img/icons/Raucherraum.png',
		offset: {x: 68, y: 32 },
		frames: 5,
		framespeed: 50,
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
		category: "slow",

		slow: 1.15,
		income: 10,

		upkeep: 100,
		price: 5000,

		image:'img/rooms/Raum_cafeteria.png',
		icon:'img/icons/Cafe.png',
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
		name: "Kantine",
		category: "slow",

		slow: 1.35,
		income: 20,

		upkeep: 140,
		price: 8000,

		image:'img/rooms/Raum_cantine.png',
		icon:'img/icons/Kantine.png',
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
		category: "slow",

		slow: 1.55,
		income: 0,

		upkeep: 120,
		price: 12000,

		image:'img/rooms/Raum_fitnessraum.png',
		icon:'img/icons/Fitnessraum.png',
		offset: {x: 68, y: 32 },
		frames: 4,
		framespeed: 50,
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
		category: "slow",

		slow: 1.25,
		income: 0,

		upkeep: 200,
		price: 20000,

		image:'img/rooms/Raum_strombergsbuero.png',
		icon:'img/icons/Stromberg.png',
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
		category: "slow",

		slow: 1.05,
		income: 0,

		upkeep: 25,
		price: 500,

		image:'img/rooms/Raum_besenkammer.png',
		icon:'img/icons/Besenkammer.png',
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
		category: "entertain",

		entertainment: 0.9,
		income: 0,

		upkeep: 100,
		price: 1000,

		image:'img/rooms/Raum_musikraum.png',
		icon:'img/icons/Musikraum.png',
		frames: 5,
		framespeed: 10,
		offset: {x: 33, y: 32 },
		shape: [
			[ 2, 2, 2, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 2, 2, 2 ]
		],

		clicksound: 'snd/Musikzimmer.mp3'
	},
	{
		name: "Clownszimmer",
		category: "entertain",

		entertainment: 0.90,
		income: 0,

		upkeep: 300,
		price: 5000,

		image:'img/rooms/clowns_spreadsheet.png',
		icon:'img/icons/Clownraum.png',
		frames: 14,
		framespeed: 50,
		offset: {x: 16, y: 32 },
		shape: [
			[ 2, 2, 2 ],
			[ 2, 1, 2 ],
			[ 2, 2, 2 ]
		],

		clicksound: 'snd/Clownszimmer.mp3'
	},
	{
		name: "Snackautomaten",
		category: "entertain",

		entertainment: 0.9,
		income: 10,

		upkeep: 200,
		price: 2000,

		image:'img/rooms/Raum_snackraum.png',
		icon:'img/icons/Snackraum.png',
		offset: {x: 20, y: 32 },
		shape: [
			[ 2, 2, 2 ],
			[ 2, 1, 2 ],
			[ 2, 1, 2 ],
			[ 2, 2, 2 ]
		],

		clicksound: 'snd/Snackautomat.mp3'
	},
	{
		name: "Fernsehraum",
		category: "entertain",

		entertainment: 0.6,
		income: 0,

		upkeep: 125,
		price: 4000,

		image:'img/rooms/tv_spreadsheet.png',
		icon:'img/icons/Fernsehraum.png',
		offset: {x: 83, y: 32 },
		frames: 22,
		framespeed: 40,
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		],

		clicksound: 'snd/Fernsehzimmer.mp3'
	},
	{
		name: "Spielhölle",
		category: "entertain",

		entertainment: 0.5,
		income: 20,

		upkeep: 200,
		price: 12000,

		image:'img/rooms/Raum_spielhoelle.png',
		icon:'img/icons/Spielhoelle.png',
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

		clicksound: 'snd/Spielehölle.mp3'
	},
	{
		name: "Bordell",
		category: "entertain",

		entertainment: 0.7,
		income: 30,

		upkeep: 350,
		price: 30000,

		image:'img/rooms/cindy_spreadsheet.png',
		icon:'img/icons/Puff.png',
		frames: 12,
		framespeed: 10,
		offset: {x: 31, y: 32 },
		shape: [
			[ 2, 2, 2, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 1, 1, 2 ],
			[ 2, 2, 2, 2 ]
		],

		clicksound: 'snd/Bordell.mp3'
	}
];