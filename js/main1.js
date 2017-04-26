$(document).ready(function(){
	var countFormat = new Intl.NumberFormat('en-us', {minimumIntegerDigits: 3});
	var last = new Date(2017, 3, 3);
	var now = new Date();
	var utcLast = Date.UTC(last.getFullYear(), last.getMonth(), last.getDate());
	var utcNow = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
	var timeDiff = Math.abs(utcNow - utcLast);
	var count = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	$(".counter").text(countFormat.format(count));
	
});