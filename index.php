<!DOCTYPE html>
<html>
<head>
	<title>Submit Form Using AJAX and jQuery</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<link href="css/refreshform.css" rel="stylesheet">
	<script src="script.js"></script>
</head>
<body>
	<div id="mainform">
		<h2>Submit Form Using AJAX and jQuery</h2> <!-- Required div Starts Here -->
		<div id="form">
		<h3>Fill Your Information !</h3>
			<div>
				<label>Name :</label>
				<input id="name" type="text">

				<label>Email :</label>
				<input id="email" type="text">

				<label>Password :</label>
				<input id="password" type="password">

				<label>Contact No :</label>
				<input id="contact" type="text">

				<label>Make Choose:</label>
				<input type="checkbox" name="services1" id="services1" value="550">
				<input type="checkbox" name="services2" id="services2" value="200">

				<input id="submit" type="button" value="Submit">
			</div>
		</div>
		<p id="result"></p>
		<div id="do" style="display: none;">
			<p>good</p>
			<button>pay</button>
		</div>
	</div>
</body>
</html>