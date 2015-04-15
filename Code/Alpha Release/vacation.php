<html>
<head>
<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
<link type="text/css" rel="stylesheet" href="style12.css"/>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script>
$(document).ready(function()
{
	$('#TermSelect li > a').click(function()
	{
		   $('#dropdownMenu1').text($(this).html());
			$value = $('#dropdownMenu1').text();
			$('#hidden').val($value);
			$('#dropdownMenu1').append('  <span id="MenuText" class="caret">  </span>');


    });

	$('#YearSelect li > a').click(function()
	{
		   $('#dropdownMenu2').text($(this).html());
			$value = $('#hidden').val() + '?' +  $('#dropdownMenu2').text();
			$('#dropdownMenu2').append('  <span id="MenuText" class="caret">  </span>');
			$('#hidden').val($value);
		var hidden1 = $('#hidden').val();
		$('#submit').trigger('click');
});
});



</script>
<title> DSS Vacation Page</title>
<style type="text/css">
	.bs-example{
    	margin: 20px;
    }
    hr{
        margin: 60px 0;
    }
.dropdown{text-align:center;}
.button, .dropdown-menu{margin:10px auto}
.dropdown-menu{width:200px; left:50%; margin-left:-100px;}
.display{
	
	display:inline;
	
}
</style>
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
        <li class="active"><a href="#"><span class="glyphicon glyphicon-plane"></span> &nbsp; Vacations </a></li> 
        <li><a href="addDoc.php"><span class="fa fa-user-md"></span> &nbsp; Doctors </a></li> 
      	</ul>
	<ul class="nav navbar-nav navbar-right">
        <li><a href="logout.html"><span class="glyphicon glyphicon-log-out"></span> &nbsp;Logout</a></li>
      	</ul>
    	</div>
            
  	
	</nav>
	</div>
	<div class="container">
  		<div class="jumbotron">
    			<h2>Vacation Schedule</h2>
  		</div>


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<form name="form1" class="display" method="POST" action="VacationCal.php">
<div class="dropdown display">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" name="dropdownMenu1" data-toggle="dropdown">
    Select Term
    <span id="MenuText" class="caret">  </span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" id="TermSelect">
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">January - June</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">July - December</a></li>
  </ul>
</div>

<div class="dropdown display">
  <button class="btn btn-default dropdown-toggle" type="button" name="dropdownMenu2" id="dropdownMenu2" data-toggle="dropdown">
    Select Year
    <span id="MenuText" class="caret">  </span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2" id="YearSelect">
	<?php
	
$servername = "localhost";
$susername = "root";
$spassword = "";
$db = "project";
	
$conn = new mysqli($servername, $susername, $spassword, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT distinct(y) from calendar_table limit 10";
$result = $conn->query($sql);
	while(!(empty($row = $result->fetch_assoc())))
	{
	?>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#" ><?php echo $row['y'] ?></a></li>
    <?php } ?>
  </ul>
	<input type="hidden" id="hidden" name="hidden" value="">
	<input type="submit" id="submit" name="submit" value="submit" style="display:none;">
</div>
</form>
</div>
<div id="calendarDisplay"> </div>

      </div>
    </div>
  </div>
</div>
<div id="calendar">
</div>
</body>
</html>