var statsUi = {
	stats: {},
	initUi: function() {
		$('<div id="statsUi"></div>').append("body");
	},
	addStat: function(name) {
		this.stats[name] = {
			value:0
		};
		$('#statsUi').append('<span class="'+name+'"></span>');
	},
	updateStat: function(name, value) {
		this.stats[name].value = value;
		$('#statsUi').find('.'+name).html(value);
	}
}
