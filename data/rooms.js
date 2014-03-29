/*
 upkeep: 0,
 capacity: 0,

 worker: 1,
 upkeep: 100,
 speed: 20,
 price: 500,
 fee: 50,


 entertainment: .8,
 slow:.8,
 income: 20,


 */

var rooms = [
	{
		name: "Tv",
		category: ["entertain", "slow"],
		image:'img/raum_tv.png',

		worker: 1,
		upkeep: 100,
		speed: 20,
		price: 500,
		fee: 50,

		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2 ],
			[ 2, 1, 1, 2, 0 ],
			[ 2, 1, 1, 2, 0 ],
			[ 2, 2, 2, 2, 0 ]
		]
	}, {
		name: "Snackbox",
		category: ["entertain", "slow"],
		image:'img/raum_snackbox.png',

		entertainment: .8,
		slow:.8,
		income: 20,

		shape: [
			[ 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 2 ],
			[ 2, 2, 2, 2, 2 ]
		]
	},	{
		name: "Toilette",
		category: ["wait"],
		image:'img/raum_restroom.png',
		upkeep: 0,
		capacity: 0,

		shape: [
			[ 2, 2, 2, 2, 2, 2, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 1, 1, 1, 2 ],
			[ 2, 1, 1, 2, 2, 2, 2 ],
			[ 2, 2, 2, 2, 0, 0, 0 ],
		]
	},
];