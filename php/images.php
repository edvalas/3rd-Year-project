<?php
    $var = mysqli_connect("localhost", "root","");
    mysqli_select_db($var, "carImgData") or die(mysqli_error());
	$image_id = $_GET['Id'];
    $sql = "Select Picture from carsImg where Id='{$image_id}'";
    $resultset = mysqli_query($var, "$sql") or die("Invalid query: " . mysqli_error());
	$row = mysqli_fetch_array($resultset);
	header('Content-type: image/jpeg');
	echo $row[0];
   	mysqli_close($var);
?>