<?php   session_start();  
?>
<?php
      if(!isset($_SESSION['use'])){                         
           header("Location:login.php");  
       }
       
       ?>
<?php

$init = $_GET['initials'];
$servername = "localhost";
$susername = "root";
$spassword = "";
$db = "project";
$conn = new mysqli($servername, $susername, $spassword, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "delete from doctors where initials='".$init."'";

$result = $conn->query($sql);
echo $result;
$newURL = 'addDoc.php';
header('Location: '.$newURL);

?>