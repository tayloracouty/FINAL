function mouseEnter() {
	console.log('Mouse Entered.');
}

function mouseOut() {
	console.log('Mouse Leave.');
 }


$(document).ready(function()  {
	//$('.article').mouseenter(mouseEnter);
	//$('.article').mouseout(mouseOut);
	$('.article').hover(mouseEnter, mouseOut); 
});