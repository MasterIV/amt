function RoomSelector( mapScene ) {
	var offset = new V2(30, 30);
	var lines = 0;
	var entities = [];

	this.show = function( items ) {
		entities = [];
		lines = Math.ceil( items.length / 4 );

		for( var i in items ) (function(type) {
			var dx = offset.x + ( i % 4 ) * 50;
			var dy = offset.y + (( i / 4 ) | 0 ) * 50;
			entities.push( new RoomButton( type, dx, dy, function() {
				mapScene.info.close();
				mapScene.placeRoom(type);
				entities = [];
			}, mapScene.info  ));
		})(items[i]);
	}

	this.draw = function( ctx ) {
		if( entities.length ) {
			diagbox( ctx, offset.x-5, offset.y-5, 210, lines*50+10 );
			for (var i in entities)
				if (entities[i].draw) entities[i].draw(ctx);
		}
	}

	this.update = function( delta ) {
		for (var i in entities)
			if (entities[i].update)
				entities[i].update( delta );
	};

	this.click = function ( mouse ) {
		for (var i in entities)
			if (entities[i].click)
				if (entities[i].click( mouse ))
					return true;
	}
}
