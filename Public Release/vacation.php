
<?php   session_start();  
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
			 $value=$('#dropdownMenu1').text();
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
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>

		<script>
			$(document).ready(function() {
		    	$('td').click(function(event) { //Trigger on form submit
				$(this).toggleClass('cellRed');
	
			$date = $(this).find('div').text();
	$month = $(this).closest('table').attr('id');	
	$doc = $('ul li.DivsContent.active').text();
	$year = $('#dropdownMenu2').text();
	var value = $doc + '?' + $date + '?' + $month + '?' + $year;
	
	$('input[name=hiddenvacation]').val(value);
		    		var postForm = { //Fetch form data
		    			'hiddenvacation' 	: $('input[name=hiddenvacation]').val() //Store name fields value
		    		};
		    
		    		$.ajax({ //Process the form using $.ajax()
		    			type 		: 'POST', //Method type
		    			url 		: 'process.php', //Your form processing file url
		    			data 		: postForm, //Forms name
		    			dataType 	: 'json',
		    			success 	: function(data) {
		    				
		    			if (!data.success) { //If fails
		    				if (data.errors.name) { //Returned if any error from process.php
		    					$('.throw_error').fadeIn(1000).html(data.errors.name); //Throw relevant error
		   					}
		   				} else {
		    					$('#success').val(data.posted);

		    				}
		    			}
		    		});
		    	    event.preventDefault(); //Prevent the default submit
		    	});
		    });
		</script>
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
});
</script>

		<style>
			ul {
				font-family: Arial;
				list-style-type: none;
			}

			#success {
				display: none;
				font-family: Arial;
				color: green;
				margin-left: 85px;
				font-size: 14px;
			}

			input[type=text] {
				padding: 5px;
				box-shadow: inset 0 0 5px #eee;
				border: 1px solid #eee;
			}

			input[type=submit] {
				padding: 3px 8px;
				background: #eee;
				margin-left: 85px;
				cursor: pointer;
				border: 1px solid #aaa;
				font-size: 12px;
			}
                        .container .jumbotron{
      padding:45px 0px;
      padding-left: 60px;
    }

.jumbotron
{
	width:auto;
	height:105px;
}

			.throw_error {
				color:tomato;
				font-size: 12px;
				display: none;
			}

			label {
				font-size: 13px;
			}
		</style>
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
.cellRed
{
background-color: #00CCCC ;
}

.cellWhite
{
background-color: #FFFFFF ;
}

</style>

	</head>
	<body>
            <?php
      if(!isset($_SESSION['use'])){                         
           header("Location:login.php");  
       }
       
       ?>

		<form method="post" name="postForm">
		<input type="hidden" name="hiddenvacation"/>	
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
            <li><a href="IndividualStats.php"> Individual Statistics </a></li>
            <li><a href="groupstats.php"> Group Statistics </a></li>
          </ul>
        </li>
        <li class="active"><a href="vacation.php"><span class="glyphicon glyphicon-plane"></span> &nbsp; Vacations </a></li> 
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
    			<h2>Vacation Schedule</h2>
  		</div>


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<?php
if(!empty($_POST['submit']))
{
	$value= $_POST['hidden'];
	list($term, $year) = explode('?', $value);
	$initials = $_POST['hiddeninit'];
	
}
?>
<form name="form1" class="display" method="POST" action="">
<div class="dropdown display">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" name="dropdownMenu1" data-toggle="dropdown">
    <?php if(!(empty($_POST['submit']))) echo $term; else echo 'Select Term'; ?>
    <span id="MenuText" class="caret">  </span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" id="TermSelect">
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">January - June</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">July - December</a></li>
  </ul>
</div>

<div class="dropdown display">
  <button class="btn btn-default dropdown-toggle" type="button" name="dropdownMenu2" id="dropdownMenu2" data-toggle="dropdown">
    
    <?php if(!(empty($_POST['submit']))) echo $year; else echo 'Select Year'; ?>

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
	<input type="hidden" id="hidden" name="hidden">
	<input type="hidden" id="hiddeninit" name="hiddeninit">
	<input type="submit" id="submit" name="submit" value="submit" style="display:none;">
</div>
</form>

<div><h3>Doctors </h3> Vacation details for Doctor: <div id="docname"> </div> </div>
<div class="row">
  <div class="col-sm-2">
    <div class="sidebar-nav">
      <div class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <span class="visible-xs navbar-brand">Sidebar menu</span>
        </div>
        <div class="navbar-collapse collapse sidebar-navbar-collapse">
          <ul class="nav navbar-nav">
		<?php 
require("config.php");
$sql = "SELECT initials from doctors;";
$result = mysql_query($sql);
$j=1;
while(!(empty($row = mysql_fetch_array($result))))
    {
		if(!empty($_POST['submit']))
		{	
			$initials = $_POST['hiddeninit'];
		if(strcmp($row["initials"],$initials)==0)
            { ?> <li class="DivsContent active"><a href="#" id="init<?php  echo $j;?>"><?php echo $row["initials"]; ?>
</a></li>
<?php 
	}

	else
	{
		?><li class="DivsContent "><a href="#" id="init<?php  echo $j;?>"><?php echo $row["initials"]; ?>
</a></li>
<?php
	}
}

else
{
		?><li class="DivsContent "><a href="#" id="init<?php  echo $j;?>"><?php echo $row["initials"]; ?>
</a></li>
<?php
}

echo 	'<script>
	$(document).ready(function(){
	 $("#init'.$j.'").click(function()
	{
		$(".DivsContent.active").removeClass("active");
		$(this).parent().toggleClass("active");
		$(".CalendarContent:visible").hide();
		$value = $("#init'.$j.'").text();
		$("#"+$value).show();
		$("#hiddeninit").val($value);
		});
});
 </script> ';
  $j = $j + 1;       
} ?>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
     
  </div>
<style>
    div.col-sm-2{
        padding-left: 25px;
        padding-right: 25px;
    }
table.calendar		{ border-left:1px solid #999;  }
tr.calendar-row	{  }
td.calendar-day	{ height:35px; font-size:11px; position:relative; } * html div.calendar-day { height:35px; }
td.calendar-day:hover	{  }
td.calendar-day-np	{ background:#eee; height:35px; } * html div.calendar-day-np { height:35px; }
td.calendar-day-head { background:#ccc; font-weight:bold; font-size: 18px; text-align:center; width:40px; padding:5px; border-bottom:1px solid #999; border-top:1px solid #999; border-right:1px solid #999; }
div.day-number		{ background:#FFF; padding:5px; color:#000; font-weight:bold; float:right; margin:-5px -5px 0 0; width:20px; text-align:center; }
/* shared */
td.calendar-day, td.calendar-day-np { width:40px; padding:5px; border-bottom:1px solid #999; border-right:1px solid #999; }
table.topic {
	display: inline-block;
	float:left;
	width:33%;
}
</style>
    <?php
/* draws a calendar */
function draw_calendar($month,$year, $initials, $vacationdate, $vacationmonth, $vacationyear){
	$i=1;

	/* draw table */
	$calendar = '<table cellpadding="0" cellspacing="0" class="calendar topic" style="float: left; width:33%;" id="'.$month.'">';
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
		if(intval($vacationdate)==$list_day && intval($vacationmonth)==$month && $year==intval($vacationyear)){
		$calendar.= '<td class="calendar-day cellRed">';
			/* add in the day number */
			$calendar.= '<div class="day-number">'.$list_day.'</b></p>';
	
			}
			else
			{
				$calendar.= '<td class="calendar-day">';
			/* add in the day number */
			$calendar.= '<div class="day-number">'.$list_day.'</b></p>';

			}
			
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
<?php
if(!empty($_POST))
{
	

if(strcmp('January - June',$term)==0)
{$month1=1;
$month2=6;
}
else
{$month1=7;
$month2=12;
}
	
$sql2 = "SELECT initials from doctors;";
$result2 = mysql_query($sql2);
$j=1;
$count = mysql_num_rows($result2);


while(!(empty($row2 = mysql_fetch_assoc($result2))))
		{
    
if(!empty($_POST))
{   
    $servername = "localhost";
$susername = "root";
$spassword = "";
$db = "project";
	
$connvacation = new mysqli($servername, $susername, $spassword, $db);
// Check connection
if ($connvacation->connect_error) {
    die("Connection failed: " . $connvacation->connect_error);
}
    $init = $_POST['hiddeninit'];
$sqlvacation = 'select * from vacation where name=\''.$row2['initials'].'\'';
$resultvacation = $connvacation->query($sqlvacation);
$rowvacation = $resultvacation->fetch_assoc();
}

    echo '<form name="postForm"> <div id="'.$row2['initials'].'" class="CalendarContent">';
for( $i=$month1; $i<=$month2; $i++)
{
	
echo '<div style="display:inline-block">';
if($i==1)
echo '<p id="m1"><b> January '. $year .'</b></p>&nbsp;&nbsp;&nbsp;';
elseif($i==2)
echo '<p id="m2"><b> February '. $year .'</b></p>&nbsp;&nbsp;&nbsp;';
elseif($i==3)
echo '<p id="m3"><b> March '. $year .'</b></p>&nbsp;&nbsp;&nbsp;';
elseif($i==4)
echo '<p id="m4"><b> April '. $year .'</b></p>&nbsp;&nbsp;&nbsp;';
elseif($i==5)
echo '<p id="m5"><b> May '. $year .'</b></p>&nbsp;&nbsp;&nbsp;';
elseif($i==6)
echo '<p id="m6"><b> June '. $year .'</b></p>&nbsp;&nbsp;&nbsp;';
elseif($i==7)
echo '<p id="m7"><b> July '. $year .'</b></p>&nbsp;&nbsp;&nbsp;';
elseif($i==8)
echo '<p id="m8"><b> August '. $year .'</b></p>&nbsp;&nbsp;&nbsp;';
elseif($i==9)
echo '<p id="m9"><b> September '. $year .'</b></p>&nbsp;&nbsp;&nbsp;';
elseif($i==10)
echo '<p id="m10"><b> October '. $year .'</b></p>&nbsp;&nbsp;&nbsp;';
elseif($i==11)
echo '<p id="m11"><b> November '. $year .'</b></p>&nbsp;&nbsp;&nbsp;';
elseif($i==12)
echo '<p id="m12"><b> December '. $year .'</b></p>&nbsp;&nbsp;&nbsp;';
if($i==intval($rowvacation['month']) && $year==intval($rowvacation['year']))
{
    echo draw_calendar($i,$year, $row2['initials'], $rowvacation['date'], $rowvacation['month'], $rowvacation['year']);
$rowvacation = $resultvacation->fetch_assoc();
}
else
echo draw_calendar($i,$year, $row2['initials'], 0,0,0);

echo '</div>';
}
echo '</div><div id="success"> </div></form>';
}

 }
?>


<script>
$(document).ready(function()
{
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
if(!empty($_POST['submit']))
{
	$initials = $_POST['hiddeninit'];
	
	if(!empty($initials))
	{
		require("config.php");
		$sql = "SELECT initials from doctors;";
		$result = mysql_query($sql);
		$j=1;

		while(!(empty($row = mysql_fetch_assoc($result))))
		{
			if(strcmp($initials,$row["initials"])==0) 
			{	?>
				$("#<?php echo $row['initials']; ?>").show();
				<?php 
			}
			else
			{ ?>
			$("#<?php echo $row['initials']; ?>").hide();
		<?php }
		
	$j=$j + 1;
		}
	}
	
	else
	{
		require("config.php");
		$sql = "SELECT initials from doctors;";
		$result = mysql_query($sql);
		$j=2;
		$count = mysql_num_rows($result);
		$row = mysql_fetch_assoc($result);
	?>
	$("#init1").parent().toggleClass("active");
	$("#<?php echo $row['initials']; ?>").show();
	<?php 
			for( $j=2; $j<=$count; $j++)
			{
			$row = mysql_fetch_assoc($result);
				?>	
			$("#<?php echo $row['initials']; ?>").hide();
			<?php 
			
			}

	}
	
	}?>
});
</script>
		</form>
<div id="success"></div></div></div>

<nav class="navbar navbar-default navbar-bottom">
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