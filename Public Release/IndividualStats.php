<?php   session_start();  
?>
<?php if(!empty($_POST['submit']))
{
	$value = $_POST['hidden'];
	list($term, $year) = explode('?', $value);
	if(strcmp($term,'January - June')==0)
	{
		$month1 = 1;
		$month2 = 6;
	}
	else
	{
		$month1=7;
		$month2=12;
	}
}?>

<html>
<head>
<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1"><link type="text/css" rel="stylesheet" href="style1.css"/>
        <link type="text/css" rel="stylesheet" href="style13.css"/>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
        <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<script src="http://cameronspear.com/downloads/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js"></script>
        <script src="script1.js" type="text/javascript"></script>
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
        <script>
$(document).ready(function()
{
	$('#dd').hover(function() {
  $(this).find('.dropdown-menu').show();
}, function() {
  $(this).find('.dropdown-menu').hide();
});
$('#dd1').hover(function() {
  $(this).find('.dropdown-menu').show();
}, function() {
  $(this).find('.dropdown-menu').hide();
});
</script>
<script>
$(document).ready(function(){
$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	$('#'+selText).show();
});
});

$(document).ready(function()
{
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
$sql = "SELECT count(*) as total from doctors";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$total = $row['total'];
for( $i=1; $i <= $total; $i++)
{?>
	$('#comp<?php echo $i;?>').hide();
<?php }?>
	
});

$(document).ready(function(){
	$(".dropdown-menu li a").click(function(){
	$(".DivsContent:visible").hide();
	var selText = $(this).attr('href');
	$(selText).show();
});
});
</script>
<title>
    DSS Individual Statistics Page
</title>
<style>
    .container .jumbotron{
      padding:45px 0px;
      padding-left:60px; 
    }

.jumbotron
{
	width:auto;
	height:105px;
}
.dropdown{
text-align:center;
display: inline-block;
}

.sel {
    color:white;
    width: 250px;
    min-height: 40px;
    box-sizing: border-box;
    background-color: #55E6FA;
    overflow: hidden;
}
.border{
    border: 1px solid blue;
}

</style>
<script>
$(document).ready(function()
{
    $('#TermSelect li > a').click(function()
    {
           $('#dropdownMenu1').text($(this).html());
            $value = $('#dropdownMenu1').text();
            $('#hidden').val($value);
            $('#dropdownMenu1').append('  <span id="MenuText" class="caret">  </span>');
	$('#YearSelect').toggleClass('.border');
	});

$('#YearSelect li > a').click(function()
    {
           $('#dropdownMenu3').text($(this).html());
            $value = $('#hidden').val() + '?' +  $('#dropdownMenu3').text();
            $('#dropdownMenu3').append('  <span id="MenuText" class="caret">  </span>');
            $('#hidden').val($value);
        var hidden1 = $('#hidden').val();
	$('table').hide();
        $('#submit').trigger('click');
});
});
</script>

</head>
<body>
    <?php
      if(!isset($_SESSION['use'])){                         
           header("Location:login.php");  
       }
       
       ?>
<div class="container">
	<nav class="navbar navbar-inverse navbar-fixed-top" >
	<div class="container-fluid">
    <div class="navbar-header">
     
        <a class="navbar-brand" href="adminhome.php">Doctor Shift Scheduler</a>
    </div>
      	<ul class="nav navbar-nav">
            <li><a href="adminhome.php"><span class="glyphicon glyphicon-home"> Home</span></a></li>
        <li class="dropdown active" id="dd">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-stats"></span> &nbsp;Statistics</a>
          <ul class="dropdown-menu">
            <li class="active"><a href="IndividualStats.php"> Individual Statistics </a></li>
            <li><a href="groupstats.php"> Group Statistics </a></li>
          </ul>
        </li>
        <li><a href="vacation.php"><span class="glyphicon glyphicon-plane"></span> &nbsp; Vacations </a></li> 
        <li><a href="addDoc.php"><span class="fa fa-user-md"></span> &nbsp; Doctors </a></li> 
      	</ul>
	<ul class="nav navbar-nav navbar-right">
        <li class="dropdown" id="dd1">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span> &nbsp;<?php echo $_SESSION['use'];?></a>
          <ul class="dropdown-menu">
            <li><a href="changepassword.php"><span class="glyphicon glyphicon-lock"></span> &nbsp; Change Password </a></li>
            <li class="divider"></li>
            <li><a href="logout.php"><span class="glyphicon glyphicon-log-out"></span> &nbsp; Logout </a></li>
          </ul>
        </li>
      	</ul>
    	</div>
            
  	
	</nav>
	</div>
	<div class="container">
  		<div class="jumbotron">
    			<h2>Individual Doctor Statistics</h2>
  		</div>

           <form name="form1" class="display" method="POST" action="">

<div class="dropdown display">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" name="dropdownMenu1" data-toggle="dropdown">
    <?php if(!empty($_POST)) {if(!empty($term))echo $term;
else
	echo $_POST['termhidden']; } else echo 'Select Term'; ?> 
    <span id="MenuText" class="caret">  </span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" id="TermSelect">
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">January - June</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">July - December</a></li>
  </ul>
<input type="hidden" name="termhidden" id="termhidden">
</div>
<div class="dropdown display">
  <button class="btn btn-default dropdown-toggle" type="button" name="dropdownMenu3" id="dropdownMenu3" data-toggle="dropdown">
    <?php if(!empty($_POST)) {echo $year; } else echo 'Select Year'; ?> 
    <span id="MenuText" class="caret">  </span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu3" id="YearSelect">

<?php require("config.php");
    
$sql = "SELECT distinct(y) from calendar_table";
$result = mysql_query($sql);
$k=1;
    while(!(empty($row = mysql_fetch_array($result))))
    {
    ?>
    <li role="presentation" id="day<?php echo $k; $k=$k+1; ?>"><a role="menuitem" tabindex="-1" href="#" ><?php echo $row['y'] ?></a></li>
    <?php } ?>
  </ul>
               </div>
<input type="hidden" id="hidden" name="hidden">
    <input type="submit" id="submit" name="submit" value="submit2" style="display:none;">
<?php 
if(!empty($_POST))
{?>
<div class="row">
  <div class="table-responsive">
   <table class="table table-striped">
              <thead>
                <tr>
		
                  <th class="col-md-1" style="text-align:center;">  <div class="btn-group">
   <button type="button" class="btn btn-default dropdown-toggle" 
      data-toggle="dropdown">
      Select a Doctor <span class="caret"></span>
   </button>

   <ul class="dropdown-menu" >
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
$sql = "SELECT firstname, lastname from doctors";
$result = $conn->query($sql);
$i=1;
while(!empty($row = $result->fetch_assoc()))
{
?>
      <li><a href="#comp<?php echo $i; ?>"><?php echo $row['firstname']. ' '. $row['lastname']; ?></a></li>	
<?php $i = $i +1; } ?>
   </ul>
</div>
	</th>
                </tr>
              </thead>

</table>
</div>
</div>
<?php 
}?>
<br/>
<br/>
	<?php
if(!empty($_POST))
{
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
	$countweekdays = 0;
	$countweekends = 0;
	$countsc=0;
	$countpc=0;
	$countholiday =0;
	$sql = "SELECT day,month, year, sc, pc from schedule where initials='".$row['initials']."' AND year=".$year." AND month between ".$month1." AND ".$month2;
$result2 = $conn->query($sql);
while(!empty($row2 = $result2->fetch_assoc()))
{
$sql3 = " select dayname, isHoliday from calendar_table where d=".$row2['day']." AND m=".$row2['month']." AND y=".$row2['year'];
$result3 = $conn->query($sql3);
$row3 = $result3->fetch_assoc();

	if(strcmp($row3['dayname'],'Monday')==0 || strcmp($row3['dayname'],'Tuesday')==0 || strcmp($row3['dayname'],'Wednesday')==0 || strcmp($row3['dayname'],'Thursday')==0 ||strcmp($row3['dayname'],'Friday')==0)
$countweekdays= $countweekdays + 1;

else
$countweekends = $countweekends + 1;

if(strcmp($row2['sc'],'YES')==0)
$countsc = $countsc + 1;

else if(strcmp($row2['pc'],'YES')==0)
$countpc = $countpc + 1; 

else;

if($row3['isHoliday']==1)
$countholiday = $countholiday + 1;
	
}
?>
<div class="table-responsive DivsContent" id="comp<?php echo $i; ?>">
<table class="table table-striped ">

<tr> <td style="text-align: center;"><b> Initials: <?php echo $row['initials']; ?></b></td> </tr>          
<tr> <td style="text-align: center;"><b> Doctor Name: <?php echo $row['firstname']. '  ' . $row['lastname']; ?></b></td> </tr>          
<tr> <td> Number of weekdays worked : </td> <td> <?php echo $countweekdays; ?></td> </tr>
<tr> <td> Number of weekends worked : </td> <td> <?php echo $countweekends; ?>  </td> </tr>
<tr> <td> Number of holidays worked : </td> <td> <?php echo $countholiday; ?></td> </tr>
<tr> <td> Number of days worked as Site Call doctor : </td> <td><?php echo $countsc; ?></td> </tr>
<tr> <td> Number of days worked as Phone Call Doctor : </td> <td><?php echo $countpc;?></td> </tr>
</table>
</div>
<?php $i = $i + 1; 
}
}
?>
           </form></div>
    
<nav class="navbar navbar-default navbar-fixed-bottom">
  <div class="container-fluid">
    <div>
      <ul class="nav navbar-nav">
        
        <li><a href="about.php">About</a></li>
        <li><a href="contact.php">Contact</a></li> 
       
      </ul>
    </div>
  </div>
</nav>
   
</body>
</html>