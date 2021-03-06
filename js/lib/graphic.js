var g = {
	urls: [
		'img/floor.png',
		'img/wall_x.png',
		'img/wall_y.png',
		'img/place_corridor.png',
		'img/place_invalid.png',
		'img/place_room.png',
		'img/testvictim.png',
		'img/HUD/money.png',
		'img/HUD/persons.png',
		'img/HUD/top_ui_bg.png',
		'img/HUD/construction.png',
		'img/HUD/button_fetch_budget.png',
		'img/HUD/button_destroy_normal.png',
		'img/HUD/button_destroy_pressed.png',
		'img/HUD/bworkpressed.png',
		'img/HUD/bwaitpressed.png',
		'img/HUD/bentpressed.png',
		'img/HUD/roomselector.png',
		'img/HUD/bubble_top.png',
		'img/HUD/bubble_middle.png',
		'img/HUD/bubble_bottom.png',
		'img/HUD/Achievements_bg_bottom.png',
		'img/HUD/Achievements_bg_middle.png',
		'img/HUD/Achievements_bg_top.png',
		'img/HUD/arrow.png',
		'img/HUD/arrow_up.png',
		'img/HUD/arrow_down.png',
		'img/HUD/progress_speed.png',
		'img/HUD/progress_demand.png',
		'img/buttons.png',
		'img/bg_dark.png',
		'img/logo.png',
		'img/menu_buttons_spritesheet.png',
		'img/credits.png',
		'img/Tutorial.png',
		'img/icons/bronze.png',
		'img/icons/silver.png',
		'img/icons/gold.png'
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