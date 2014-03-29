var rooms = [
	// -------------------------------------------------------------------------------------------------------
	// Amtszimmer
	// -------------------------------------------------------------------------------------------------------

	{
		name: "Arbeitsamt",
		category: "work",

		speed: 20,
		demand: 20,
		worker: 1,
		fee: 50,

		upkeep: 100,
		price: 500,

		image:'img/rooms/arbeitsamt.png',
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
		name: "Einwohnermeldeamt",
		category: "work",

		speed: 20,
		demand: 20,
		worker: 1,
		fee: 50,

		upkeep: 100,
		price: 500,

		image:'img/rooms/einwohnermeldeamt.png',
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
		name: "Gewerbeamt",
		category: "work",

		speed: 20,
		demand: 20,
		worker: 1,
		fee: 50,

		upkeep: 100,
		price: 500,

		image:'img/rooms/gewerbeamt.png',
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

		speed: 20,
		demand: 20,
		worker: 1,
		fee: 50,

		upkeep: 100,
		price: 500,

		image:'img/rooms/finanzamt.png',
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

		anger: 1,
		capacity: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/warteschlange.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Stehplätze",
		category: "wait",

		anger: 1,
		capacity: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/stehplaetze.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Sitzplätze",
		category: "wit",

		anger: 1,
		capacity: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/sitzplaetze.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Liegeplätze",
		category: "wait",

		anger: 1,
		capacity: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/liegeplaetze.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},

	// -------------------------------------------------------------------------------------------------------
	// Sonstige Räume
	// -------------------------------------------------------------------------------------------------------

	{
		name: "Besenkammer",
		category: "other",

		entertainment: 1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/besenkammer.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Bordell",
		category: "other",

		entertainment: 1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/bordell.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Cafeteria",
		category: "other",

		entertainment: 1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/cafeteria.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Cantine",
		category: "other",

		entertainment: 1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/cantine.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Fitnessraum",
		category: "other",

		entertainment: 1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/fitnessraum.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Musikraum",
		category: "other",

		entertainment: 1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/musikraum.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Raucherraum",
		category: "other",

		entertainment: 1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/raucherraum.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Toiletten",
		category: "other",

		entertainment: 1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/restroom.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Snackbox",
		category: "other",

		entertainment: 1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/snackbox.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Snackraum",
		category: "other",

		entertainment: 1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/snackraum.png',
		offset: {x: 51, y: 32 },
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
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/spielhoelle.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "Stromberg",
		category: "other",

		entertainment: 1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/strombergsbuero.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	},
	{
		name: "TV Raum",
		category: "other",

		entertainment: 1,
		slow: 1,
		income: 1,

		upkeep: 100,
		price: 500,

		image:'img/rooms/tv.png',
		offset: {x: 51, y: 32 },
		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ]
		]
	}
];