<?php   session_start();  
?>
<?php
      if(!isset($_SESSION['use'])){                         
           header("Location:login.php");  
       }
       
       ?>
<?php
if(!empty($_POST))
{
	$no = $_POST['saveDocID'];
	list($pinit,$pfn,$pln,$psc,$ppc,$tinit,$tfn,$tln,$tsc,$tpc) = explode('?',$no);

if(!empty($tinit))
$init=trim($tinit);

else
$init=trim($pinit);

if(!empty($tfn))
$fn=trim($tfn);

else
$fn=trim($pfn);

if(!empty($tln))
$ln=trim($tln);

else
$ln=trim($pln);

if(!empty($tsc))
$sc=trim($tsc);

else
$sc=trim($psc);

if(!empty($tpc))
$pc=trim($tpc);

else
$pc=trim($ppc);

$pinit= trim($pinit);

$sql = 'update doctors set initials=\''.$init.'\',firstname=\''.$fn.'\', lastname=\''.$ln.'\',sc=\''.$sc.'\', pc=\''.$pc.'\' where initials=\''.$pinit.'\'';

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

echo '<script> alert(\'Doctor Details updated for Dr.'.$ln.' \'); 
window.location.href=\'addDoc.php\';
</script> ';

}
?>
