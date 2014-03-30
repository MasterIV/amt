function RoomInfo() {
	var self = this;
	var offset = new V2( 245, 30 );
	var room;
	var lines;
	var buttons = false;

	var close = new SmallButton(2, offset.x+180, offset.y, function() { self.close(); });
	var demolish = new SmallButton(0, offset.x+180, offset.y+25, function() { room.destroy(); self.close(); });

	this.show = function( r, b ) {
		room = r;
		buttons = b;

		lines = [
			r.name,
			'Kosten: '+ r.price+' $',
			'Unterhaltskosten: '+ r.upkeep +' $'
		];

		if(r.speed) lines.push('Bearbeitungszeit: '+ ((( r.speed*100) | 0) / 100 ));
		if(r.demand) lines.push('Personenandrang: '+ ((( r.demand*100) | 0) / 100 ));
		if(r.worker) lines.push('Mitarbeiter: '+ r.worker);
		if(r.fee) lines.push('Bearbeitungsgebühren: '+ r.fee +' $');

		if(r.anger) lines.push('Verärgerungsrate: '+ ((( r.anger*100) | 0) / 100 ));
		if(r.capacity) lines.push('Kapazität: '+ r.capacity);

		if(r.entertainment) lines.push('Unterhaltung: '+ r.entertainment);
		if(r.slow) lines.push('Mitarbeiterablenkung: '+ r.slow);
		if(r.baseIncome) lines.push('Einkommen pro Person: '+ r.baseIncome);
		if(r.income) lines.push('Gesamteinkommen: '+ r.income);
	}

	this.close = function() {
		room = null;
	}

	this.draw = function( ctx ) {
		if( room ) {
			diagbox( ctx, offset.x-5, offset.y-5, 210, 190 );
			ctx.fillStyle = game.gameFontColor;
			ctx.font = game.gameFontBig;

			for( var i in lines )
				ctx.fillText( lines[i], offset.x, offset.y+i*20+ 10 );

			if( buttons ) {
				close.draw( ctx );
				demolish.draw( ctx );
			}
		}
	}

	this.click = function( mouse ) {
		if( room && buttons ) {
			return close.click( mouse );
		}
	}

	this.update = function(delta) {
		if( room && buttons ) {
			close.update( delta );
		}
	}

	this.getZ = function() {
		return 99999;
	}
}