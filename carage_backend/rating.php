<?php
require "connection.php";

$rate    = $_REQUEST['rating'];

$sql = "INSERT INTO rating (rating) VALUES (?)";
$result  = $conn->prepare($sql);

$result->execute([$rate]);

?>