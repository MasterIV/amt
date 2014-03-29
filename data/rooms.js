var rooms = [
	{
		name: "Arbeitsamt",
		category: ["work"],

		worker: 1,
		upkeep: 100,
		speed: 20,
		price: 500,
		fee: 50,


		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2, 0, 0 ],
			[ 2, 2, 2, 2, 2, 0, 0 ]
		]
	}, {
		name: "Snackautomat",
		category: ["entertain", "slow"],

		entertainment: .8,
		slow:.8,
		income: 20,

		shape: [
			[ 2, 2, 2 ],
			[ 2, 1, 2 ],
			[ 2, 2, 2 ]
		]
	},	{
		name: "Warteraum",
		category: ["wait"],

		upkeep: 0,
		capacity: 0,


		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2 ],
		]
	},
];