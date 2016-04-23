<?php
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Origin: *");

$servername = "localhost"; //local host
$username = "root"; //root
$password = "";
$dbname = "carImgData"; //database im using

//set up connection
$conn = new mysqli($servername, $username, $password, $dbname);

//try to connect if error display error
if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
} 

//sql queries
$id = $_GET['id']; 
$newpref = $_GET['newpref']; 
$oldpref = $_GET['oldpref']; 

$sql = "UPDATE carsimg
		SET Preference='{$oldpref}'
		WHERE Preference='{$newpref}';";
$sql .= "UPDATE carsimg
		SET Preference='{$newpref}'
		WHERE Id='{$id}'";
		
//store sql query in result
mysqli_multi_query($conn,$sql);

//close connection
$conn->close();
?>