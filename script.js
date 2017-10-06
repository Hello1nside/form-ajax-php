$(document).ready(function(){
	$("#submit").click(function(){
		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var contact = $("#contact").val();

		if ($("#services1").prop("checked") == true) {
			var services1 = $("#services1").val();
		} else { services1 = 0; }

		if ($("#services2").prop("checked") == true) {
			var services2 = $("#services2").val();		
		} else { services2 = 0; }

		if ($("#services3").prop("checked") == true) {
			var services3 = $("#services3").val();		
		} else { services3 = 0; }

		if ($("#services4").prop("checked") == true) {
			var services4 = $("#services4").val();		
		} else { services4 = 0; }

		if ($("#services5").prop("checked") == true) {
			var services5 = $("#services5").val();		
		} else { services5 = 0; }

		if ($("#services6").prop("checked") == true) {
			var services6 = $("#services6").val();		
		} else { services6 = 0; }

		if ($("#services7").prop("checked") == true) {
			var services7 = $("#services7").val();		
		} else { services7 = 0; }

		if ($("#services8").prop("checked") == true) {
			var services8 = $("#services8").val();		
		} else { services8 = 0; }

		var price = parseInt(services1) + parseInt(services2) + parseInt(services3) + parseInt(services4) + parseInt(services5) + parseInt(services6) 
		+ parseInt(services7) + parseInt(services8);
		var twenty = price / 5;
		
		// Returns successful data submission message when the entered information is stored in database.
		var dataString = 'name1='+ name + '&email1='+ email + '&password1='+ password + '&contact1='+ contact + '&services1='+services1 + 'services2='+services2;

		if(name == ''|| email == ''|| password == ''|| contact == '') {
			alert("Please Fill All Fields");
		}
		else
			{
				// AJAX Code To Submit Form.
				$.ajax({
					type: "POST",
					url: "ajaxsubmit.php",
					data: dataString,
					cache: false,
					success: function(result){
						$("#result").text(result + '\nYour price:' + price + ' For continue you need to pay 20%: ' + twenty);
						$("#do").css("display", "block");
					}
				});
			}
		return false;
	});
});