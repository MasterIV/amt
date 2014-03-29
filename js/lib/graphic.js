var g = {
	urls: [
		'img/floor.png',
		'img/wall_x.png',
		'img/wall_y.png',
		'img/place_corridor.png',
		'img/place_invalid.png',
		'img/place_room.png',
		'img/testvictim.png',
		'img/startScreen_background.png',
		'img/startScreen_menu.png'
	],

	add: function( url ) {
		this.urls.push( url );
	},

	load: function( callback ) {
		var total = 0, loaded = 0;

		function complete() {
			if( ++loaded >= total ) callback();
		}

		while( this.urls.length ) {
			var url = this.urls.shift();
			if( typeof this[url] == 'undefined' ) {
				total++;
				this[url] = new Image();
				this[url].onload = complete;
				this[url].src = url;
			}
		}

		if( total == 0 ) callback();
	}
}