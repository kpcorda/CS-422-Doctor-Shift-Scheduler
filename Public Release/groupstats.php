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
<!DOCTYPE html>
<html>
    <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
        <link type="text/css" rel="stylesheet" href="style3.css"/>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<script src="http://cameronspear.com/downloads/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js"></script>
        <script src="script3.js" type="text/javascript"></script>
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
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

            <title>
                DSS Group Statistics Page
            </title>
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
$('#table1').hide();
<?php
if(!empty($_POST))
{
    ?>
            $('#table1').show();
<?php } ?>
});
</script>
<style>
.dropdown{
text-align:center;
display: inline-block;
}
form{
	text-align: center;
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
    </head>
    
    <body>
         <?php
      if(!isset($_SESSION['use'])){                         
           header("Location:login.php");  
       }
       ?>
        <div class="container">
	<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container-fluid">
    <div class="navbar-header">
     
        <a class="navbar-brand" href="adminhome.php">Doctor Shift Scheduler</a>
    </div>
      	<ul class="nav navbar-nav">
            <li><a href="adminhome.php"><span class="glyphicon glyphicon-home"> Home</span></a></li>
        <li class="dropdown active" id="dd">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-stats"></span> &nbsp;Statistics</a>
          <ul class="dropdown-menu">
            <li><a href="IndividualStats.php"> Individual Statistics </a></li>
            <li class="active"><a href="groupstats.php"> Group Statistics </a></li>
          </ul>
        </li>
        <li><a href="vacation.php"><span class="glyphicon glyphicon-plane"></span> &nbsp; Vacations </a></li> 
        <li><a href="addDoc.php"><span class="fa fa-user-md"></span> &nbsp; Doctors </a></li> 
      	</ul>
	<ul class="nav navbar-nav navbar-right">
        <li class="dropdown" id="dd1">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span> &nbsp;<?php echo $_SESSION['use'];?></a>
          <ul class="dropdown-menu">
            <li class><a href="changepassword.php"><span class="glyphicon glyphicon-lock"></span> &nbsp; Change Password </a></li>
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
    <h2>Group Doctor Statistics</h2>      
    
  </div>
        </div>
        <div class="container">
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
<input type="submit" id="submit" name="submit" value="submit2" style="display:none;"></form>
            <br>
            <?php
            
            if(!empty($_POST))
            {
/* connect to the db */
require('config.php');
       
                
        
        echo '<table class="table table-bordered" id="table1" >
   <thead >
      <tr>
         <th>Initials</th>
         <th>Full Name</th>
         <th>Number of days worked</th>
         <th>Number of weekdays worked</th>
         <th>Number of weekends worked</th>
         <th>Number of holidays worked</th>
         <th>Number of days as an On Site doctor</th>
         <th>Number of days as an On Call doctor</th>
      </tr>
   </thead>
   <tbody>';
        $sql = "SELECT initials, firstname, lastname from doctors";
$result = mysql_query($sql);
$i=1;
while(!empty($row = mysql_fetch_array($result)))
{
	$countweekdays = 0;
	$countweekends = 0;
	$countsc=0;
	$countpc=0;
	$countholiday =0;
	$sql = "SELECT day,month, year, sc, pc, sca, scb, pca, pcb from schedule where initials='".$row['initials']."' AND year=".$year." AND month between ".$month1." AND ".$month2;
$result2 = mysql_query($sql);
while(!empty($row2 = mysql_fetch_array($result2)))
{
$sql3 = " select dayname, isHoliday from calendar_table where d=".$row2['day']." AND m=".$row2['month']." AND y=".$row2['year'];
$result3 = mysql_query($sql3);;
$row3 = mysql_fetch_array($result3);

	if(strcmp($row3['dayname'],'Monday')==0 || strcmp($row3['dayname'],'Tuesday')==0 || strcmp($row3['dayname'],'Wednesday')==0 || strcmp($row3['dayname'],'Thursday')==0 ||strcmp($row3['dayname'],'Friday')==0)
$countweekdays= $countweekdays + 1;

else
$countweekends = $countweekends + 1;

if(strcmp($row2['sc'],'YES')==0|| strcmp($row2['sca'],'YES')==0 || strcmp($row2['scb'],'YES')==0)
$countsc = $countsc + 1;

else if(strcmp($row2['pc'],'YES')==0|| strcmp($row2['pca'],'YES')==0 || strcmp($row2['pcb'],'YES')==0)
$countpc = $countpc + 1; 

else;

if($row3['isHoliday']==1)
$countholiday = $countholiday + 1;
	
}
                           echo '<tr>';
                        
                                echo '<td>',$row['initials'],'</td>';
                                echo '<td>',$row['firstname']," ",$row['lastname'],'</td>';
                                echo '<td>'.($countweekdays + $countweekends).'</td>';
          echo '<td>'.$countweekdays.'</td> ';
          echo ' <td>'.$countweekends.'</td> ';
           echo ' <td>'.$countholiday.'</td> ';

              echo '<td>'.$countsc.'</td>';
              echo '<td>'.$countpc.'</td>';
           
                        echo '</tr>';
}  
    
   echo '</tbody>
</table>';
   echo '<br> <br> <br> ';
            }?>  
        </div>
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