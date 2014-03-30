var backgroundmusic = {
	music: ['snd/background1.mp3',
			'snd/background2.mp3'],
	handler:null,

	play: function( ) {
		backgroundmusic.handler = sound.play(backgroundmusic.music[(Math.random()*backgroundmusic.music.length) | 0], function () {
			backgroundmusic.play();
		});
	},

	stop: function() {
		backgroundmusic.handler.stop();
	},

	init: function(  ) {
		backgroundmusic.play();
	}
}