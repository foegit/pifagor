
jQuery(document).ready(function($) {
	var a, b;
	function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	$(".calc input").change(function(event) {

		
		a = ($("#a").val());
		b = ($("#b").val());
		c = a*a;
		
		if (!(isNumeric(+a))){

			$("#a_i").css("outline", "1px solid red").css("display","block");
			$("#c").val("");
		}
		else
		{
			$("#a_i").removeAttr('style');

			if (!(isNumeric(+b))){

			$("#b_i").css("outline", "1px solid red").css("display","block");
			$("#c").val("");
		}
		else{
			$("#b_i").removeAttr('style');
			$("#c").val(Math.sqrt(a*a+b*b));
		}
		
				
		}
			
			
	});

});
