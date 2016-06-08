$(document).ready(function(){
	console.log("Script included!");
	//$('#photo').accordion();
	$('li').dblclick(function(){
		console.log("Doube clicked!");
		$(this).addClass("marked");
	});

	$('img').dblclick(function(){
		$(this).hide();
	});
});