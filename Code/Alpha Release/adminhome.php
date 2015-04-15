<!DOCTYPE html>
<html>
    <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
        <link type="text/css" rel="stylesheet" href="style1.css"/>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<script src="http://cameronspear.com/downloads/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js"></script>
        <script src="script1.js" type="text/javascript"></script>
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

            <title>
                DSS Home Page
            </title>
    </head>
    
    <body>
        
	<div class="container">
	<nav class="navbar navbar-inverse navbar-fixed-top" >
	<div class="container-fluid">
    <div class="navbar-header">
     
      <a class="navbar-brand" href="#">Doctor Shift Scheduler</a>
    </div>
      	<ul class="nav navbar-nav">
        <li class="active"><a href="#"><span class="glyphicon glyphicon-home"> Home</span></a></li>
        <li class="dropdown" id="dd">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-stats"></span> &nbsp;Statistics</a>
          <ul class="dropdown-menu">
            <li><a href="IndividualStats.html"> Individual Statistics </a></li>
            <li><a href="groupstats.php"> Group Statistics </a></li>
          </ul>
        </li>
        <li><a href="vacation.php"><span class="glyphicon glyphicon-plane"></span> &nbsp; Vacations </a></li> 
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
    			<h2>Doctor Shift Scheduler</h2>
  		</div>
            
           <form name="form1" class="display" method="POST" action="adminhome2.php">
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
    Select Month
    <span id="MenuText" class="caret">  </span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2" id="MonthSelect">
    <?php
    
require("config.php");
    
$sql = "SELECT distinct(monthName) from calendar_table";
$result = mysql_query($sql);
    while(!(empty($row = mysql_fetch_array($result))))
    {
    ?>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#" ><?php echo $row['monthName'] ?></a></li>
    <?php } ?>
  </ul>
</div>
               <div class="dropdown display">
  <button class="btn btn-default dropdown-toggle" type="button" name="dropdownMenu3" id="dropdownMenu3" data-toggle="dropdown">
    Select Year
    <span id="MenuText" class="caret">  </span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu3" id="YearSelect">
    <?php require("config.php");
    
$sql = "SELECT distinct(y) from calendar_table";
$result = mysql_query($sql);
    while(!(empty($row = mysql_fetch_array($result))))
    {
    ?>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#" ><?php echo $row['y'] ?></a></li>
    <?php } ?>
  </ul>
               </div>
               
               <input type="hidden" id="hidden" name="hidden" value="">
    <input type="submit" id="submit" name="submit" value="submit" style="display:none;">
           </form>
            <br/>
                        <?php
                         require('config.php');
            /* draws a calendar */
function draw_calendar($month,$year){

	/* draw table */
	$calendar = '<table cellpadding="0" cellspacing="0" class="calendar">';
        $calendar.= '<col class="weekend">
  <col class="weekday" span="5">
  <col class="weekend">';
	/* table headings */
	$headings = array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
	$calendar.= '<tr class="calendar-row"><td class="calendar-day-head">'.implode('</td><td class="calendar-day-head">',$headings).'</td></tr>';
        
	/* days and weeks vars now ... */
	$running_day = date('w',mktime(0,0,0,$month,1,$year));
	$days_in_month = date('t',mktime(0,0,0,$month,1,$year));
	$days_in_this_week = 1;
	$day_counter = 0;
	$dates_array = array();
        $today=date("d");
        $tomonth=date("m");
        $toyear=date("y");
	/* row for week one */
	$calendar.= '<tr class="calendar-row">';

	/* print "blank" days until the first of the current week */
	for($x = 0; $x < $running_day; $x++):
		$calendar.= '<td class="calendar-day-np"> </td>';
		$days_in_this_week++;
	endfor;

	/* keep going with days.... */
	for($list_day = 1; $list_day <= $days_in_month; $list_day++):
		if($list_day==$today && $month==$tomonth && $year==$toyear)
                        {
            $calendar.= '<td class="calendar-day" style="background: #ffffcc">';
                        }
                        else
                        {
                          $calendar.= '<td class="calendar-day">';  
                        }
			/* add in the day number */
			$calendar.= '<div class="day-number">'.$list_day.'</div>';
                        
                        $calendar.= '<div class="sc">SC: ';
                        $calendar.= '<a class="dropdown-toggle" data-toggle="dropdown">??? &nbsp;</a>
	    <div class="dropdown-menu">';
            
$sql2 = "SELECT initials from doctors where sc='YES'";
$r2 = mysql_query($sql2);
$i=1;
    while($row2 = mysql_fetch_array($r2))
    {
    
               $calendar.=' <div><a class="t'.$i.'" href="#">';  
               $calendar.=$row2['initials'];
               $calendar.='</a></div>';
               $i = $i + 1;
    }         
            $calendar.='</div><p id="value2" name="value2" value=""> </p> <form action="" METHOD="POST"><input type="hidden" name="hidden2" id="hidden2" value=""></form>';
            
          
            $sql2 = "insert into schedule values ('','KA','$list_day','$month','$year','YES','NO')";
$r2 = mysql_query($sql2);
        
                        $calendar.='</div>';
                        
                        $calendar.= '<div class="pc">PC: ';
                        $calendar.= '<a class="dropdown-toggle" data-toggle="dropdown">??? &nbsp;</a>
	    <div class="dropdown-menu">';
            
$sql3 = "SELECT initials from doctors where pc='YES'";
$r3 = mysql_query($sql3);
$i=1;
    while($row3 = mysql_fetch_array($r3))
    {
    
              $calendar.=' <div><a class="t'.$i.'" href="#">';  
               $calendar.=$row3['initials'];
               $calendar.='</a></div>';
               $i = $i + 1;
    }         
   $calendar.='</div><p id="value2" name="value2" value=""> </p> <form action="" METHOD="POST"><input type="hidden" name="hidden2" id="hidden2" value=""></form>';
            
          
            $sql4 = "insert into schedule values ('','KA','$list_day','$month','$year','NO','YES')";
$r4 = mysql_query($sql4);
                        $calendar.='</div>';
			/** QUERY THE DATABASE FOR AN ENTRY FOR THIS DAY !!  IF MATCHES FOUND, PRINT THEM !! **/
			
			
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
	$calendar.= '</table>  ';
	
	/* all done, return result */
	return $calendar;
        
        
} 
echo draw_calendar(date("m"),date("y"));
?>
  	 
<br/>
<br/>
<form class="publish">
 <div class="btn-group">
            <button type="button" class="btn btn-default" id="pub"><span class="glyphicon glyphicon-print"></span> &nbsp;PUBLISH</button>
</div>
</form>

<br/>
<br/>

        </div>
        <nav class="navbar navbar-default navbar-bottom">
  <div class="container-fluid">
    <div>
      <ul class="nav navbar-nav">
        
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li> 
       
      </ul>
    </div>
  </div>
</nav>
    </body>
</html>	