<?php
	require_once 'login.php';

	// echo '<h1>SUBMIT</h1>';

	// подключение
	$connection = new mysqli($db_hostname, $db_username, $db_password, $db_database);
	if($connection->connect_error) 
	{
		// echo '<h1>FAIL</h1>';
		die($connection->connect_error);
	}
	// else
	// {
	// 	echo '<h1>SUBMIT</h1>';
	// }

	// $_POST['tel'] = 3351212;
	// $_POST['name'] = 'Dima';

	if(isset($_POST['tel']) &&
		isset($_POST['name']))
	{
		$tel = $_GET['tel'];
		$name = $_GET['name'];


		$query = "INSERT INTO call_orders (`tel`,`name`) VALUES ('$tel', '$name')";

		// $connection->query(	$query);
	}
	else
	{
		die("Please, insert your name and password");
	}

	if ($connection->query($query) === TRUE) {
	    echo "New records created successfully";
	} else {
	    echo "Error: " . $query . "<br>" . $connection->error;
	}

	$connection->close();

	// fix functions
	function mysql_entities_fix_string($connection, $string)
	{
		return htmlentities(mysql_fix_string($connection, $string));
	}

	function mysql_fix_string($connection, $string)
	{
		if(get_magic_quotes_gpc()) $string = stripslashes($string);
		return $connection->real_escape_string($string);
	}

?>