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
$name = $_GET['name'];
$sql = "SELECT Id, Name, Model, CarYear, EngineSize, EngineType, FuelType, Doors, Price from carsImg WHERE Name = '{$name}'";

//store sql query in result
$result = $conn->query($sql);

//if result has more than 0 rows output data
if ($result->num_rows > 0)
{	
	$searcharray = array();
    while($row = mysqli_fetch_assoc($result))
    {
        $searcharray[] = $row;
    }
    echo json_encode($searcharray);

}else 
{
    echo "0 results";
}
//close connection
$conn->close();
?>