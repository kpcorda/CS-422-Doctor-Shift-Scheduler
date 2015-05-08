<?php   session_start();  
?>
<?php
      if(!isset($_SESSION['use'])){                         
           header("Location:login.php");  
       }
       
       ?>
<?php

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
$sql = "SELECT initials, firstname, lastname from doctors";
$result = $conn->query($sql);
$i=1;
while(!empty($row = $result->fetch_assoc()))
{
	$count = 0;
	$countw = 0;
	$countsc=0;
	$countpc=0;
	$countholiday =0;
	$sql = "SELECT day, month, year, sc, pc, sca, pca, scb, pcb from schedule where initials='".$row['initials']."'";
$result2 = $conn->query($sql);
while(!empty($row2 = $result2->fetch_assoc()))
{
$sql3 = " select dayname, isHoliday from calendar_table where d=".$row2['day']." AND m=".$row2['month']." AND y=".$row2['year'];
$result3 = $conn->query($sql3);
$row3 = $result3->fetch_assoc();

	if(strcmp($row3['dayname'],'Monday')==0 || strcmp($row3['dayname'],'Tuesday')==0 || strcmp($row3['dayname'],'Wednesday')==0 || strcmp($row3['dayname'],'Thursday')==0 ||strcmp($row3['dayname'],'Friday')==0)
$count= $count + 1;

else
$countw = $countw + 1;

if(strcmp($row2['sc'],'YES')==0 || strcmp($row2['sca'],'YES')==0 || strcmp($row2['scb'],'YES')==0)
$countsc = $countsc + 1;

else if(strcmp($row2['pc'],'YES')==0 || strcmp($row2['pca'],'YES')==0 || strcmp($row2['pcb'],'YES')==0)
$countpc = $countpc + 1; 

else;

if($row3['isHoliday']==1)
$countholiday = $countholiday + 1;
	
}
$sql4 = 'update individualstats set weekdays= weekdays + \''.$count.'\',weekends = weekends + \''.$countw.'\',holidays = holidays + \''.$countholiday.'\',sc = sc + \''.$countsc.'\',pc = pc + \''.$countpc.'\' where initials=\''.$row['initials'].'\'';
echo $sql4;
$result4 = $conn->query($sql4);

}
?>