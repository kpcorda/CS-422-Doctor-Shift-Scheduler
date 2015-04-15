<html>
<head>
<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
        <link type="text/css" rel="stylesheet" href="style11.css"/>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

<script>
function submitValue(clicked_id)
{
	
	var regex = /(\d+)/g;
	var text = " " + clicked_id;
	var res= text.match(regex);

	var initials = document.getElementById("init"+res).textContent;
	alert("init"+res);
	window.location.href = "DeleteDoc.php?initials="+ initials;
}
</script>
<title>DSS Doctors Page</title>
</head>
<body>

<div class="container">
	<nav class="navbar navbar-inverse navbar-fixed-top" >
	<div class="container-fluid">
    <div class="navbar-header">
     
        <a class="navbar-brand" href="adminhome.php">Doctor Shift Scheduler</a>
    </div>
      	<ul class="nav navbar-nav">
            <li><a href="adminhome.php"><span class="glyphicon glyphicon-home"> Home</span></a></li>
        <li class="dropdown" id="dd">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-stats"></span> &nbsp;Statistics</a>
          <ul class="dropdown-menu">
            <li><a href="IndividualStats.html"> Individual Statistics </a></li>
            <li><a href="groupstats.php"> Group Statistics </a></li>
          </ul>
        </li>
        <li><a href="vacation.php"><span class="glyphicon glyphicon-plane"></span> &nbsp; Vacations </a></li> 
        <li class="active"><a href="#"><span class="fa fa-user-md"></span> &nbsp; Doctors </a></li> 
      	</ul>
	<ul class="nav navbar-nav navbar-right">
        <li><a href="logout.html"><span class="glyphicon glyphicon-log-out"></span> &nbsp;Logout</a></li>
      	</ul>
    	</div>
            
  	
	</nav>
	</div>
	<div class="container">
  		<div class="jumbotron">
    			<h2>Doctor Shift Scheduler</h2>
  		</div>
<div class="row">
  <div class="table-responsive col-md-6">
<h2 class="sub-header">Existing Doctors</h2>
	<div class="span3">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="col-md-1">Initials</th>
                </tr>
              </thead>
              <tbody>
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
$sql = "SELECT * from doctors order by initials asc";

$result = $conn->query($sql);
$i=1;
	while(!(empty($row = $result->fetch_assoc())))
	{
	?>
                <tr>
                  <td class="col-md-1" id="<?php echo "ini".$i ?>"><a id="<?php echo "initial".$i ?>" href="#<?php echo "table".$i ?>" data-toggle="tab"> <?php echo $row["initials"] ?></a></td>
                  
                </tr>
	<?php $i=$i + 1; 
	}?>

</tbody>
            </table>
	</div>
	
    
	<br/>
	<br/>
        
</div>
<?php $i=1; ?>
<h2 class="sub-header">Doctor Details</h2>
<div class="tab-content col-md-6">
	<?php 
		$result = $conn->query($sql);
		while(!(empty($row = $result->fetch_assoc())))
		{
			?>
	
	
          
	<div class="tab-pane" id="<?php echo "table".$i ?>">
            <table class="tab-content table table-striped DivsContent">
	
		<thead>
              </thead>
              <tbody>
		<tr> 
			<td class="col-md-1"> Initials : </td> <td class="col-md-1"> <label id="<?php echo "init".$i ?>"><?php echo $row["initials"] ?></label></td>
		</tr>
                <tr>
                  <td class="col-md-1">First Name :</td><td class="col-md-1"> <label id="<?php echo "firstn".$i ?>"><?php echo $row["firstname"] ?></label></td>
                
                </tr>
                <tr>
                  <td class="col-md-1">Last Name: </td>  <td class="col-md-1"><label id="<?php echo "lastn".$i ?>"> <?php echo $row["lastname"] ?></label> </td>
                  
                </tr>
                 <tr>
                  <td class="col-md-1">SC</td> <td class="col-md-1"><label id="<?php echo "scy".$i ?>"> <?php echo $row["sc"] ?></label></td>
                 
                </tr>
 <tr>
                  <td class="col-md-1">PC</td> <td class="col-md-1"><label id="<?php echo "pcy".$i ?>"> <?php echo $row["pc"] ?></label></td>
                 
                </tr>
<tr>
		<td class="col-md-1"> <button type="button" class="btn btn-default" id="edit<?php echo $i ?>">Edit Doctor Fields</button></td>
                <td class="col-md-1"> <button type="button" class="btn btn-default" data-toggle="modal" data-target="#<?php echo "myModal".$i ?>" id="delete1">Delete Doctor</button></td>
		</tr>	
                

	
<!-- Modal -->
<div class="modal fade" id="<?php echo "myModal".$i ?>" tabindex="-1" role="dialog" 
   aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" 
               data-dismiss="modal" aria-hidden="true">
                  &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
               Are you Sure you want to delete this doctor?
            </h4>
         </div>
         <div class="modal-footer">
		<form name="form<?php echo $i ?>" method="POST" onsubmit="DeleteDoc.php">
            <button type="button" class="btn btn-default" 
               data-dismiss="modal">Cancel
            </button>
		
            
		<input type="hidden" name="submit_value" id="submit_value" value="<?php  echo $i ?>" />
		<button type="submit" class="btn btn-primary" name="deleteconfirm<?php echo $i ?>" id="deleteconfirm<?php echo $i ?>" data-dismiss="modal" onclick="submitValue(this.id)">
               Delete 
            </button>
                
                <div class="bs-example">
    <!-- Button HTML (to Trigger Modal) -->
    <div class="span7 text-center"><a href="#myModal" class="btn btn-lg btn-primary" data-toggle="modal">Add New Doctors</a></div>
    
    <!-- Modal HTML -->
    <div id="myModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Enter Details of New Doctor</h4>
                </div>
		&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <label>Initials: </label> <input type="text" class="input-xlarge" name="intials"/>
		<br/>
		<br/>
		&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <label>First Name: </label> <input type="text" class="input-xlarge" name="firstname"/>
		<br/>
		<br/>
		&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <label>Last Name: </label> <input type="text" class="input-xlarge" name="lastname"/>
		<br/>
		<br/>
		&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <label>SC: </label> <input type="checkbox" name="SC"/> <label> YES </label> <input type="checkbox" name="SC"/> <label> NO </label>
		<br/>
		<br/>
		&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <label>PC: </label> <input type="checkbox" name="PC"/> <label> YES </label> <input type="checkbox" name="PC"/> <label> NO </label>
                <div class="modal-body">
                    <p>Do you want to save changes you made to document before closing?</p>
                    <p class="text-warning"><small>If you don't save, your changes will be lost.</small></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" id="newDoc">Save changes</button>
                </div>
		</form>
		
         </div>
      </div><!-- /.modal-content -->
</div><!-- /.modal -->
	
</tbody>
</table> 

</div>
<?php $i = $i + 1; } ?> 
</div>

</div>

</div>


</body>
</html>


