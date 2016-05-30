<?php
	require_once(file_exists('np.php'));
	$np = new Novaposhta;
	$cities = $np->cities_array();	

	$a = $_GET['a'];
	$b = $_GET['b'];
	echo $cities;
?>