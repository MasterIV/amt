var rooms = [
	// -------------------------------------------------------------------------------------------------------
	// Amtszimmer
	// -------------------------------------------------------------------------------------------------------

	{
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
		]
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
		offset: {x: 98, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2, 2, 2, 2 ]
		]
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
		]
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
		]
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

		image:'img/rooms/sitzplaetze.png',
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

		image:'img/rooms/liegeplaetze.png',
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
		slow: 1,
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
		]
	},
	{
		name: "Raucherraum",
		category: "other",

		entertainment: 0,
		slow: 1,
		income: 0,

		upkeep: 60,
		price: 1200,

		image:'img/rooms/raucherraum.png',
		offset: {x: 68, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0 ]
		]
	},
	{
		name: "Cafeteria",
		category: "other",

		entertainment: 0,
		slow: 1,
		income: 1,

		upkeep: 130,
		price: 2000,

		image:'img/rooms/cafeteria.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2 ],
			[ 2, 2, 2, 2, 0 ]
		]
	},
	{
		name: "Cantine",
		category: "other",

		entertainment: 0,
		slow: 1,
		income: 1,

		upkeep: 210,
		price: 3000,

		image:'img/rooms/cantine.png',
		offset: {x: 68, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2, 2 ],
			[ 2, 1, 1, 1, 2, 0 ],
			[ 2, 1, 1, 1, 2, 0 ],
			[ 2, 1, 1, 1, 2, 0 ],
			[ 2, 2, 2, 2, 2, 0 ]
		]
	},
	{
		name: "Fitnessraum",
		category: "other",

		entertainment: 0,
		slow: 1,
		income: 0,

		upkeep: 250,
		price: 5000,

		image:'img/rooms/fitnessraum.png',
		offset: {x: 68, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2, 2 ]
		]
	},
	{
		name: "Stromberg",
		category: "other",

		entertainment: 0,
		slow: 1,
		income: 0,

		upkeep: 350,
		price: 7000,

		image:'img/rooms/strombergsbuero.png',
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
		slow: 1,
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
		]
	},
	{
		name: "Musikraum",
		category: "other",

		entertainment: 1,
		slow: 0,
		income: 0,

		upkeep: 100,
		price: 1000,

		image:'img/rooms/musikraum.png',
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

		entertainment: 1,
		slow: 0,
		income: 0,

		upkeep: 250,
		price: 1000,

		image:'img/rooms/clowns.png',
		offset: {x: 33, y: 32 },
		shape: [
			[ 2, 2, 2 ],
			[ 2, 1, 2 ],
			[ 2, 2, 2 ]
		]
	},
	{
		name: "Snackautomaten",
		category: "other",

		entertainment: 1,
		slow: 0,
		income: 1,

		upkeep: 100,
		price: 2000,

		image:'img/rooms/snackraum.png',
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

		entertainment: 1,
		slow: 0,
		income: 0,

		upkeep: 200,
		price: 3000,

		image:'img/rooms/tv.png',
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

		entertainment: 1,
		slow: 0,
		income: 1,

		upkeep: 350,
		price: 5000,

		image:'img/rooms/spielhoelle.png',
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

		entertainment: 1,
		slow: 0,
		income: 1,

		upkeep: 500,
		price: 8000,

		image:'img/rooms/Raum_bordell.png',
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