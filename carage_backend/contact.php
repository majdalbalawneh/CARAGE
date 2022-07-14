<?php
require "connection.php";

$name    = $_REQUEST['name'];
$email   = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];



$sql = "INSERT INTO contact (name,email,subject,message) VALUES (?,?,?,?)";
$result  = $conn->prepare($sql);

$result->execute([$name,$email,$subject,$message]);

?>