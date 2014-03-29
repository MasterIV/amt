function rectRect(ctx, x, y, width, height) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + width , y);
	ctx.lineTo(x + width , y+height);
	ctx.lineTo(x , y +height);
	ctx.closePath();
	ctx.fill();
}

function progressLayerRect(ctx, x, y, width, height,progress, innerColor) {
	ctx.save();
	// Define the shadows
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 2;
	ctx.shadowBlur = 5;
	ctx.shadowColor = '#666';

	// first grey layer
	ctx.fillStyle = 'rgba(150,150,150,1)';
	rectRect(ctx, x, y, width, height);

	ctx.fillStyle = innerColor;
	rectRect(ctx, x+1, y+1, (width-2) * progress, height-2);

	ctx.restore();
}