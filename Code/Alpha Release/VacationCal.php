
<html>
    
    <head>
        <script>
	<link type="text/css" rel="stylesheet" href="style12.css"/>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>


<script>
$(document).ready(function()
{
	$('.calendar-day').click(function()
	{
		$(this).toggleClass('cellRed');
	});
});
	</script>
    <style>
    
table.calendar		{ border-left:1px solid #999; }
tr.calendar-row	{  }
td.calendar-day	{ height:35px;px; font-size:11px; position:relative; } * html div.calendar-day { height:35px; }
td.calendar-day:hover	{ background:#eceff5; }
td.calendar-day-np	{ background:#eee; height:35px;px; } * html div.calendar-day-np { height:35px; }
td.calendar-day-head { background:#ccc; font-weight:bold; text-align:center; width:40px; padding:5px; border-bottom:1px solid #999; border-top:1px solid #999; border-right:1px solid #999; }
div.day-number		{ background:#FFF; padding:5px; color:#000; font-weight:bold; float:right; margin:-5px -5px 0 0; width:20px; text-align:center; }
/* shared */
td.calendar-day, td.calendar-day-np { width:40px; padding:5px; border-bottom:1px solid #999; border-right:1px solid #999; }
table.topic {
	display: inline-block;
	float:left;
	width:33%;
}

</style>
    </head>
    <?php
/* draws a calendar */
function draw_calendar($month,$year){

	$i=1;

	/* draw table */
	$calendar = '<table cellpadding="0" cellspacing="0" class="calendar topic" style="float: left; width:33%;" id="<?php echo $i>">';

	/* table headings */
	$headings = array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
	$calendar.= '<tr class="calendar-row"><td class="calendar-day-head">'.implode('</td><td class="calendar-day-head">',$headings).'</td></tr>';

	/* days and weeks vars now ... */
	$running_day = date('w',mktime(0,0,0,$month,1,$year));
	$days_in_month = date('t',mktime(0,0,0,$month,1,$year));
	$days_in_this_week = 1;
	$day_counter = 0;
	$dates_array = array();

	/* row for week one */
	$calendar.= '<tr class="calendar-row">';

	/* print "blank" days until the first of the current week */
	for($x = 0; $x < $running_day; $x++):
		$calendar.= '<td class="calendar-day-np"> </td>';
		$days_in_this_week++;
	endfor;

	/* keep going with days.... */
	for($list_day = 1; $list_day <= $days_in_month; $list_day++):
		$calendar.= '<td class="calendar-day">';
			/* add in the day number */
			$calendar.= '<div class="day-number">'.$list_day.'</b></p>';

			/** QUERY THE DATABASE FOR AN ENTRY FOR THIS DAY !!  IF MATCHES FOUND, PRINT THEM !! **/
			$calendar.= str_repeat('<p> </p>',2);
			
		$calendar.= '</td>';
		if($running_day == 6):
			$calendar.= '</tr>';
			if(($day_counter+1) != $days_in_month):
				$calendar.= '<tr class="calendar-row">';
			endif;
			$running_day = -1;
			$days_in_this_week = 0;
		endif;
		$days_in_this_week++; $running_day++; $day_counter++;
	endfor;

	/* finish the rest of the days in the week */
	if($days_in_this_week < 8):
		for($x = 1; $x <= (8 - $days_in_this_week); $x++):
			$calendar.= '<td class="calendar-day-np"> </td>';
		endfor;
	endif;

	/* final row */
	$calendar.= '</tr>';

	/* end the table */
	$calendar.= '</table>';
	$i= $i + 1;
	/* all done, return result */
	return $calendar;
}

/* sample usages */
?>

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
     
      <a class="navbar-brand" href="admin.php">Doctor Shift Scheduler</a>
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
<?php
$value= $_POST['hidden'];
list($term, $year) = explode('?', $value);
?>
<form name="form1" class="display" method="POST" action="VacationCal.php">
<div class="dropdown display">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" name="dropdownMenu1" data-toggle="dropdown">
    <?php echo $term; ?>
    <span id="MenuText" class="caret">  </span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" id="TermSelect">
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">January - June</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">July - December</a></li>
  </ul>
</div>
<div class="dropdown display">
  <button class="btn btn-default dropdown-toggle" type="button" name="dropdownMenu2" id="dropdownMenu2" data-toggle="dropdown">
    <?php echo $year; ?>
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
</form>
<br/>
<br/>
<br/>

<h3>Doctors </h3>
<div class="row">
  <div class="col-sm-2">
    <div class="sidebar-nav">
      <div class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
                  </button>
          <span class="visible-xs navbar-brand">Sidebar menu</span>
        </div>
<div class="table-responsive col-md-6">
<div class="navbar-collapse collapse sidebar-navbar-collapse">
          <ul class="nav navbar-nav">
<?php


$sql = "SELECT * from doctors order by initials asc";

$result = $conn->query($sql);
$i=1;
	while(!(empty($row = $result->fetch_assoc())))
	{
	


        	if($i==1)
            {?><li class="DivsContent active"><a href="#table<?php echo $i ?>"  data-toggle="tab" id="name"<?php echo $i; ?>"> <?php echo $row["initials"] ?></a></li>
<?php }
	else{ ?>
	<li class="DivsContent"><a href="#table<?php echo $i ?>"  data-toggle="tab" id="name"<?php echo $i; ?>"> <?php echo $row["initials"] ?></a></li>


	<?php } $i = $i +1;
} ?>


	</ul>
        </div> 
<!--/.nav-collapse -->

      </div>
    </div>
  </div>
</div>

<?php
if(strcmp('January - June',$term)==0)
{$month1=1;
$month2=6;
}

else
{$month1=7;
$month2=12;
}
	for( $i=$month1; $i<=$month2; $i++)
{
echo '<div style="display:inline-block">';
if($i==1)
echo '<p><b> January '. $year .'</b></p>';

elseif($i==2)
echo '<p><b> February '. $year .'</b></p>';

elseif($i==3)
echo '<p><b> March '. $year .'</b></p>';

elseif($i==4)
echo '<p><b> April '. $year .'</b></p>';

elseif($i==5)
echo '<p><b> May '. $year .'</b></p>';

elseif($i==6)
echo '<p><b> June '. $year .'</b></p>';

elseif($i==7)
echo '<p><b> July '. $year .'</b></p>';

elseif($i==8)
echo '<p><b> August '. $year .'</b></p>';

elseif($i==9)
echo '<p><b> September '. $year .'</b></p>';

elseif($i==10)
echo '<p><b> October '. $year .'</b></p>';

elseif($i==11)
echo '<p><b> November '. $year .'</b></p>';

elseif($i==12)
echo '<p><b> December '. $year .'</b></p>';

echo draw_calendar($i,$year);
echo '</div>';
}


 
?>