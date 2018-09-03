var a = 0;
$(document).ready(function($) {

	$('#menu-wrapper a').click(function(event) {
		a++;
		$('#menu>li>ul').slideUp(500);
		$('#menu').slideToggle(500);
		if (a%2==0)
		{
			$('#menu-wrapper a img').attr("title", "Открыть");
		}
		else
		{
			$('#menu-wrapper a img').attr("title", "Скрыть");
		}
	});

	$("#content h3").click(function(event) {

		$("#content ol").slideToggle(500);
	});
});
