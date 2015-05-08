<?php   session_start();  
?>
<?php
	
	if(!empty($_POST))
	{
		$init = $_POST['initials'];
		$fn = $_POST['firstname'];
		$ln = $_POST['lastname'];
		$sc = $_POST['SC'];
		$pc = $_POST['PC'];
		
		$sql = 'insert into doctors values(\' \',\''.$init.'\',\''.$fn.'\',\''.$ln.'\',\''.$sc.'\',\''.$pc.'\')';

$servername = "localhost";
$susername = "root";
$spassword = "";
$db = "project";
// Create connection
$conn = new mysqli($servername, $susername, $spassword, $db);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$result = $conn->query($sql);

echo '<script> alert(\'New Doctor added to Database - Dr.'.$fn.' '. $ln.' \'); 
window.location.href=\'addDoc.php\';
</script> ';

		
	
	}
	

?>