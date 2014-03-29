/* Menu */

function initMenu() {
	// Add main menu div
	$('<div id="menu"></div>').insertAfter("#cr-stage");
	// CSS
	$("#menu").attr("style",
		'position:absolute;' +
		'left:50%;' +
		'bottom:5px;' +
		'margin-left:-139px;' +
		'margin-top:0px;' +
		'padding:5px;' +
		'width:268px;' +
		'height:64px;' +
		'background-color:rgb(233,234,238);' +
		'border-radius:5px;');
	// Buttons
	var buttons = new Array();
	for (var i = 0 ; i < 4 ; i++) {
		$("#menu").append('<div class="button'+ i +'"></a>');
		switch(i) {
			case 0:
				var cat = "work";
				break;
			case 1:
				var cat = "wait";
				break;
			case 2:
				var cat = "slow";
				break;
			case 3:
				var cat = "entertain";
				break;
		}
		$(".button"+i).attr("style",
		'margin-left:'+ Math.ceil(i/4)*4 +'px;' +
		'width:64px;' +
		'height:64px;' +
		'display:block;' +
		'float:left;' +
		'background-color:rgb(203,204,208);' +
		'cursor:pointer;').click({ category: cat }, function(event) { openConstructionMenu(event.data.category); });
	}
}

function openConstructionMenu(category) {
	console.log(category);
}