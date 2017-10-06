<?php

try {
	$pdo = new PDO("mysql:host=localhost;dbname=mydba;charset=UTF8", "root", "");
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}

//Fetching Values from URL
$name2 = htmlspecialchars(stripslashes($_POST['name1']));
$email2 = htmlspecialchars(stripslashes($_POST['email1']));
$password2 = htmlspecialchars(stripslashes($_POST['password1']));
$contact2 = htmlspecialchars(stripslashes($_POST['contact1']));
//Insert query
$result = $pdo->query("insert into form_element(name, email, password, contact) values ('$name2', '$email2', '$password2','$contact2')");
echo "ya ya -- good job";

?>