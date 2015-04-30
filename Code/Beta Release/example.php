<?php 

  require("config.php");
 
  $initials = $_POST['initials'];
  $initials = trim($initials);
  $sql = 'SELECT * FROM doctors where initials=\''.$initials.'\'';
  $result = mysql_query($sql);          //query
  $row = mysql_fetch_array($result);
  $data = array();
  $data['firstname'] = $row['firstname'];
  $data['lastname'] = $row['lastname'];
  echo json_encode($data);

?>