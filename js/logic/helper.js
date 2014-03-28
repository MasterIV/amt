function initGrid( w, h ) {
	var g = [];

	for( var x = 0; x < w; x++) {
		g[x] = [];
		for( var y = 0; y < h; y++) {
			g[x][y] = 0;
		}
	}

	return g;
}