function RandomSounds() {
	var self = this;
	var soundlist = [
		'snd/random/Beschwerde_hall.mp3',
		'snd/random/Besenkammerspuren_hall.mp3',
		'snd/random/Betriebsausflug_hall.mp3',
		'snd/random/Geburt_hall.mp3',
		'snd/random/Kleiner_timmi_hall.mp3',
		'snd/random/Langweilig_hall.mp3',
		'snd/random/Neu in der Stadt_hall.mp3',
		'snd/random/Snackautomaten Quittung_hall.mp3',
		'snd/random/Software Update_hall.mp3',
		'snd/random/Sozialempfänger_hall.mp3',
		'snd/random/Sudokuspiel_hall.mp3',
		'snd/random/Tonbandaufnahme__hall.mp3',
		'snd/random/Wartezeit_hall.mp3',
		'snd/random/Wartungsarbeiten_hall.mp3',
		'snd/random/A38.mp3',
		'snd/random/Bon mit Bon.mp3',
		'snd/random/Gesang.mp3',
		'snd/random/Hoeness.mp3'
	];

	this.chance = 0;

	this.draw = function( ) {

	}

	this.getZ = function( ) {
		return 0;
	}

	this.update = function(delta) {
		this.chance += delta;
		//console.log(this.chance, (Math.random() * 100));

		if (this.chance < 1.5) return;

		if (this.chance > (Math.random() * 7000)) {
			var snd = Math.floor( Math.random() * soundlist.length );
			sound.play(soundlist[snd]);
			this.chance = 0;
		}
	}

}