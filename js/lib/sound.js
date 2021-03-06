var sound = {
	sampels: ['snd/placeroom.mp3',
		'snd/random/Beschwerde_hall.mp3',
		'snd/random/Besenkammerspuren_hall.mp3',
		'snd/random/Betriebsausflug_hall.mp3',
		'snd/random/Geburt_hall.mp3',
		'snd/random/Kleiner_timmi_hall.mp3',
		'snd/random/Langweilig_hall.mp3',
		'snd/random/Neu in der Stadt_hall.mp3',
		'snd/random/Snackautomaten Quitting_hall.mp3',
		'snd/random/Software Update_hall.mp3',
		'snd/random/Sozialempfänger_hall.mp3',
		'snd/random/Sudokuspiel_hall.mp3',
		'snd/random/Tonbandaufnahme__hall.mp3',
		'snd/random/Wartezeit_hall.mp3',
		'snd/random/Wartungsarbeiten_hall.mp3',
		'snd/random/A38.mp3',
		'snd/random/Bon mit Bon.mp3',
		'snd/random/Gesang.mp3',
		'snd/random/Hoeness.mp3'],

	play: function( file, endCallback ) {
		var self = this;

		if( !this.sampels[file] )
			this.sampels[file] = [];

		if( this.sampels[file].length ) {
			var sound = this.sampels[file].pop();
			sound.play();
			return sound;
		} else {
			var sound = new Audio( file );
			sound.onended = function() {
				self.sampels[file].push( this );
				if (typeof endCallback == 'function') endCallback();
			};
			sound.play();
			return sound;
		}
	},

	add: function( url ) {
		this.sampels.push( url );
	}
}