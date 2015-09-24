$(document).ready(function()
{

	console.log("hi")
	$('#t1').click(function()
{
	$('#dwn1').slideToggle('fast');
	
});
	$('#t2').click(function()
{
	$('#dwn2').slideToggle('fast');
	
});
	$('#t3').click(function()
{
	$('#dwn3').slideToggle('fast');
});
	$('#t4').click(function()
{
	$('#dwn4').slideToggle('fast');
});
	$('.zoomop').mouseenter(function(){
		$(this).animate({
			zoom: "1.3"
		});
	});
	$('.zoomop').mouseleave(function(){
		$(this).animate({
			zoom: "1"
		});
	});
});