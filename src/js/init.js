//Hook up the tweet display

$(document).ready(function() {
	$(".countdown").countdown({
		date: "6 nov 2021 09:00:00",
		format: "on"
	},

	function() {
		// callback function
	});
});