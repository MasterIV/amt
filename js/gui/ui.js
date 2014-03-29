/* Menu */
var statsUi = {
	stats: {},
	initUi: function() {
		// Add main menu div
		$('<div id="statsUi"></div>').append("body");
	},
	addStat: function(name, getValue) {
		this.stats[name] = {
			value:0
		};
		$('#statsUi').append('<span class="'+name+'"></span>')
	},
	updateStat: function(name, value) {
		$('#statsUi').find('.'+name)
	}
}
