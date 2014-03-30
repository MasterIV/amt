function RoomInfo() {
	var room;
	var lines;

	this.show = function( r ) {
		room = r;
		lines = [];


	}

	this.close = function() {
		room = null;
	}

	this.draw = function( ctx ) {

	}

	this.getZ = function() {
		return 99999;
	}
}