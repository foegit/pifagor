
$(document).ready(function() {
	$("#menu>li").click(function(event) {
				var a = $('ul', this).attr('style');
				if(a != 'display: block;' || typeof a == "undefined" )
				{
					$("#menu>li>ul").slideUp(500);
					$("ul", this).slideDown(500);
				}
				else{
					$("ul", this).slideUp(500);
				}
		
	});
	$('main, header, footer').click(function(event) {
		$("#menu>li>ul").slideUp(500);
	});
});

