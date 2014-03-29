/* Menu */

function initMenu() {
return;
	// Add main menu div
	$('<div id="menu"></div>').insertAfter("#cr-stage");
	// CSS
	$("#menu").attr("style",
		'position:absolute;' +
		'left:0px;' +
		'top:50%;' +
		'margin-left:10px;' +
		'margin-top:-200px;' +
		'width:400px;' +
		'height:400px;' +
		'background-color:rgb(233,234,238);' +
		'border-radius:5px;');
}