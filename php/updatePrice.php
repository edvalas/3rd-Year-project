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
$price = $_GET['price'];
$sql = "UPDATE carsimg
		SET Price='{$price}'
		WHERE Id='{$id}'";

//store sql query in result
$result = $conn->query($sql);

//if result has more than 0 rows output data
if ($result->num_rows > 0)
{	
	$updatearray = array();
    while($row = mysqli_fetch_assoc($result))
    {
        $updatearray[] = $row;
    }
    echo json_encode($updatearray);

}else 
{
    echo "0 results";
}
//close connection
$conn->close();
?>