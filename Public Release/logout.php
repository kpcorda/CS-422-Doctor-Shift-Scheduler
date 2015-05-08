
<?php
 session_start();
  session_destroy();   // function that Destroys Session 
 
?>
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
        <script src="script1.js" type="text/javascript"></script>
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

            <title>
                DSS Logout Page
            </title>
    </head>
    
    <body>
        <nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="commonhome.php">Doctor Shift Scheduler</a>
    </div>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="login.php"><span class="glyphicon glyphicon-log-in"></span> &nbsp;Login</a></li>
      	</ul>
  </div>
</nav>
        <div class="container">
  <div class="jumbotron">
    <h2>Logout Confirmation</h2>      
    
  </div>
        </div>
        <div class="container">
        <p>You have successfully logged out of the system. </p>
<p>Thank You,<br/>
Doctor Shift Scheduler Team</p>
        </div>
        
        <nav class="navbar navbar-default navbar-fixed-bottom">
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