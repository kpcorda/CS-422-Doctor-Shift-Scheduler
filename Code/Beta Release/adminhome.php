<?php   session_start();  
?>

<?php if(!empty($_POST['submit']))
{
	$value = $_POST['hidden'];
	list($term, $month, $year) = explode('?', $value);
}?>
<!DOCTYPE html>
<html>
    <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
        <link type="text/css" rel="stylesheet" href="style1.css"/>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
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
        <?php
      if(!isset($_SESSION['use'])){                         
           header("Location:login.php");  
       }
       
       ?>
        
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
        
        <li class="dropdown" id="dd1">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span> &nbsp;admin</a>
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
    			<h3>Doctor Shift Scheduler</h3>
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
               &nbsp;&nbsp;
<div class="dropdown display">
  <button class="btn btn-default dropdown-toggle" type="button" name="dropdownMenu2" id="dropdownMenu2" data-toggle="dropdown">
    <?php if(!empty($_POST)) {echo $month; } else echo 'Select Month'; ?> 
    <span id="MenuText" class="caret">  </span>
  </button>
  <ul class="dropdown-menu scrollable-menu" role="menu" aria-labelledby="dropdownMenu2" id="MonthSelect">
    <?php
    
require("config.php");
    
$sql = "SELECT distinct(monthName) from calendar_table";
$result = mysql_query($sql);
	$j=1;
    while(!(empty($row = mysql_fetch_array($result))))
    {
    ?>
    <li role="presentation" id="month<?php echo $j; $j = $j +1; ?>"><a role="menuitem" tabindex="-1" href="#" ><?php echo $row['monthName'] ?></a></li>
    <?php } ?>
  </ul>
</div>
               &nbsp;&nbsp;
               <div class="dropdown display">
  <button class="btn btn-default dropdown-toggle" type="button" name="dropdownMenu3" id="dropdownMenu3" data-toggle="dropdown">
    <?php if(!empty($_POST)) {echo $year; } else echo 'Select Year'; ?> 
    <span id="MenuText" class="caret">  </span>
  </button>
  <ul class="dropdown-menu scrollable-menu" role="menu" aria-labelledby="dropdownMenu3" id="YearSelect">
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
    
    
    <div class="table">
    <div class="tr">
        <div class="d1"></div>
        <div class="d2"><h3 id="currentMonth"><?php if(!empty($_POST)) {echo $month. ' '. $year; } else echo date('F Y'); ?></h3></div>
       
  

        <div class="d3"><button type="button" class="btn btn-default" id="pub"><span class="glyphicon glyphicon-print">&nbsp;PUBLISH</span> </button></div>
        
    </div>
</div>
           </form>
         
          
                        <?php
                         require('config.php');
            /* draws a calendar */
			if(!empty($_POST))
                    {$sql = "SELECT m from calendar_table where monthName='".$month."'";
$result = mysql_query($sql);   
$row = mysql_fetch_array($result);

echo draw_calendar($row['m'],$year);

}
function draw_calendar($month,$year){

	/* draw table */
    date_default_timezone_set('America/Chicago');
	$calendar = '<form name="calendarpublish" method="POST" action="publish.php"><table cellpadding="0" cellspacing="0" class="calendar" border="2">';
        $calendar.= '<col class="weekend">
  <col class="weekday" span="5">
  <col class="weekend">';
	/* table headings */
	$headings = array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
	$calendar.= '<tr class="calendar-row"><td class="calendar-day-head">'.implode('</td><td class="calendar-day-head">',$headings).'</td></tr>';
        
	/* days and weeks vars now ... */
	$running_day = date('w',mktime(0,0,0,$month,1,(int) $year));
	$days_in_month = date('t',mktime(0,0,0,$month,1,(int) $year));
	$days_in_this_week = 1;
	$day_counter = 0;
	$dates_array = array();
        $today=date("d");
        $tomonth=date("m");
        $toyear=date("Y");
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
			$calendar.= '<div id="date'.$list_day.'" class="day-number">'.$list_day.'</div>';
                        
                        $calendar.= '<div class="sc'.$list_day.'"><div class="sc">SC: ';
                        
                        require('config.php');
                        $sql7 = "SELECT initials from schedule where sc='YES' and pc='NO' and day=$list_day and year=$year and month=$month";
                        $r7 = mysql_query($sql7);
                        $row7 = mysql_fetch_array($r7);
                       
                       $calendar.= '<li class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" id="sc'.$list_day.'">';
                       if(!empty($row7))
                       { 
      $calendar.=$row7['initials'];      
}
else{
    $calendar.='???';
}
                        
                        $calendar.= '&nbsp;</a>
	    <ul class="dropdown-menu scrollable-menu">';
            
$sql2 = "SELECT initials from doctors where sc='YES' order by initials";
$r2 = mysql_query($sql2);
$i=1;

    while($row2 = mysql_fetch_array($r2))
    {
    
               $calendar.=' <li><a tabindex="-1" class="t" href="#">';  
               $calendar.=$row2['initials'];
               $calendar.='</a></li>';
               $i = $i + 1;
    }         
            $calendar.='</ul></li></div><p id="value2" name="value2" value=""> </p> <input type="hidden" name="hiddensc'.$list_day.'" id="hiddensc'.$list_day.'"><p id="outputsc'.$list_day.'"></p>';
            
          
            
        
                        $calendar.='</div>';
                        
                        $calendar.='<div class="pc'.$list_day.'"><div class="pc">PC: ';
                        
                        require('config.php');
                        $sql8 = "SELECT initials from schedule where sc='NO' and pc='YES' and day=$list_day and year=$year and month=$month";
                        $r8 = mysql_query($sql8);
                        $row8 = mysql_fetch_array($r8);
                       
                       $calendar.= '<li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" id="pc'.$list_day.'">';
                       if(!empty($row8))
                       { 
      $calendar.=$row8['initials'];      
}
else{
    $calendar.='???';
}
                        
                        $calendar.= '&nbsp;</a>
	    <ul class="dropdown-menu scrollable-menu">';
            
$sql3 = "SELECT initials from doctors where pc='YES'order by initials";
$r3 = mysql_query($sql3);
$j=1;
    while($row3 = mysql_fetch_array($r3))
    {
    
              $calendar.=' <li><a tabindex="-1" class="t" href="#">';  
               $calendar.=$row3['initials'];
               $calendar.='</a></li>';
               $j = $j + 1;
    }         
   $calendar.='</ul></li></div><p id="value2" name="value2" value=""> </p><input type="hidden" name="hiddenpc'.$list_day.'" id="hiddenpc'.$list_day.'" value=""> <p id="outputpc'.$list_day.'"></p></form>';
            
          
          
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
	$calendar.= '</table> <input type="submit" name="publish" value="publish" id="publish" style="display:none"></form>';
	
	/* all done, return result */
	return $calendar;
        
        
} 
if(empty($_POST))
echo draw_calendar(date("m"),date("Y"));
?>
  	 
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