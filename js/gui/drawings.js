function progressLayerRect(ctx, x, y, width, height,progress, innerColor, icon) {
	ctx.save();
	// Define the shadows
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 5;
	ctx.shadowColor = '#666';

	// first grey layer
	ctx.fillStyle = 'rgb(150,150,150)';
	ctx.fillRect( x, y, width, height);

	ctx.fillStyle = innerColor;
	ctx.fillRect( x+1, y+1, (width-2) * progress, height-2);
	ctx.restore();
	
	if ( icon )
		ctx.drawImage(g[icon], x-6, y, 5,5);
}

function moodRect(ctx, x, y, person) {
	ctx.save();
	// Define the shadows
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 5;
	ctx.shadowColor = '#666';

	// first grey layer
	ctx.fillStyle = 'rgb(150,150,150)';
	ctx.fillRect( x, y, 8, 8);

	if( person instanceof Victim ) {
		ctx.fillStyle = 'rgb(255,'+(255-255*(person.anger/person.angerLimit)|0)+',0)';
		ctx.fillRect( x+1, y+1, 6, 6);
	}

	ctx.restore();
}

function diagbox( ctx, x, y, w, h ) {
	ctx.strokeStyle = '#63727d'
	ctx.strokeRect( x, y, w, h );
	ctx.fillStyle = '#b9d5ea';
	ctx.fillRect( x, y, w, h );
}