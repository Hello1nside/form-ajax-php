$(document).ready(function(){
	$("#submit").click(function(){
		var name = $("#name").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var contact = $("#contact").val();

		if ($("#services1").prop("checked") == true) {
			var services1 = $("#services1").val();
		} else { services1 = ""; }

		if ($("#services2").prop("checked") == true) {
			var services2 = $("#services2").val();		
		} else { services2 = ""; }
		
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
						$("#result").text(result + services1 + services2);
						$("#do").css("display", "block");
					}
				});
			}
		return false;
	});
});