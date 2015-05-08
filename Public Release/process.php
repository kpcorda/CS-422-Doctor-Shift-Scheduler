<?php
	$errors = array(); //To store errors
    $form_data = array(); //Pass back the data to `form.php`
    
        	$form_data['success'] = $_POST;
	$data = $_POST['hiddenvacation'];
     $servername = "localhost";
$susername = "root";
$spassword = "";
$db = "project";
list($doc,$date,$month,$year) = explode('?',$data);
$doc = trim($doc);
$date = trim($date);
$month = trim($month);
$year = trim($year);
$conn = new mysqli($servername, $susername, $spassword, $db);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = 'select count(*) as total from vacation where name=\''.$doc.'\' && date=\''.$date.'\' && month=\''.$month.'\'&& year=\''.$year.'\'';
	
	$result = $conn->query($sql);
	$row = $result->fetch_assoc();
	
	if(intval($row['total'])!=0)
	{
		$sqlcheck='delete from vacation where name=\''.$doc.'\' && date=\''.$date.'\' && month=\''.$month.'\'&& year=\''.$year.'\'';
		$result = $conn->query($sqlcheck);
					
		

	}

	else 
	{
		$sql = 'insert into vacation values(\''.$doc.'\',\''.$date.'\',\''.$month.'\',\''.$year.'\')';
		
			$result = $conn->query($sql);

	}

	$form_data['posted'] = $result;

    //Return the data back to form.php
    echo json_encode($form_data);
