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

            <title>
                DSS Group Statistics Page
            </title>
    </head>
    
    <body>
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
            <li><a href="IndividualStats.html"> Individual Statistics </a></li>
            <li><a href="#"> Group Statistics </a></li>
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
    <h2>Group Statistics</h2>      
    
  </div>
        </div>
        <div class="container">
            <?php
/* connect to the db */
require('config.php');
       
                
        
        echo '<table class="table table-bordered" >
   <thead >
      <tr>
         <th>Initials</th>
         <th>Full Name</th>
         <th>Number of days worked</th>
         <th>Number of weekdays worked</th>
         <th>Number of weekends worked</th>
         <th>Number of holidays worked</th>
         <th>Number of vacation days</th>
         <th>Number of days as an On Site doctor</th>
         <th>Number of days as an On Call doctor</th>
      </tr>
   </thead>
   <tbody>';
        $sql= "select initials, firstname, lastname, sc from doctors";
                $result=mysql_query($sql);
                while($row=mysql_fetch_array($result)) {
                        echo '<tr>';
                        {
                                echo '<td>',$row['initials'],'</td>';
                                echo '<td>',$row['firstname']," ",$row['lastname'],'</td>';
                                echo '<td>17</td>
          <td>15</td>
           <td>5</td>
            <td>2</td>
             <td>3</td>';
              echo '<td>';
             {
               if($row['sc']=='NO')
               {
                   echo '0';
               }
               else
               {
              echo '10';
               }
             } echo '</td>';
                
              echo '<td>7</td>';
                        }
                        echo '</tr>';
                }
     
      
   echo '</tbody>
</table>';
          ?>  
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