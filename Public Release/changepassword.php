<?php  session_start(); ?> 

<!DOCTYPE html>
<html>
    <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
        <link type="text/css" rel="stylesheet" href="style2.css"/>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
	<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<script src="http://cameronspear.com/downloads/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js"></script>
        <script src="script1.js" type="text/javascript"></script>
        
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
        <style>  .container .jumbotron{
      padding:45px 0px;
      padding-left: 60px;
    }

.jumbotron
{
	width:auto;
	height:105px;
} </style>
        <script type="text/javascript">
           
$(document).ready(function(){
    $(".close").click(function(){
        $(".alert").alert();
    });
});  
</script>


            <title>
                DSS Change Password Page
            </title>
    </head>

    <body>
        <?php
      if(!isset($_SESSION['use'])){                         
           header("Location:login.php");  
       }
       ?>
            <?php     //start php tag
//include connect.php page for database connection
require('config.php');
//if submit is not blanked i.e. it is clicked.
if (isset($_POST['submit'])) //here give the name of your button on which you would like    //to perform action.
{
// here check the submitted text box for null value by giving there name.
    if($_POST['newpassword']=="" || $_POST['currentpassword']=="" || $_POST['confirmpassword']=="")
    {
    echo "<script>alert('Please fill all the fields.')</script>";
    }
    
    else
    {
       if(count($_POST)>0) {
$result = mysql_query("SELECT *from users WHERE username='" . $_SESSION["use"] . "'");
$row=mysql_fetch_array($result);
if($_POST["currentpassword"] == $row["password"] && $_POST["newpassword"] == $_POST["confirmpassword"]) {
mysql_query("UPDATE users set password='" . $_POST["newpassword"] . "' WHERE username='" . $_SESSION["use"] . "'");

echo "<script>alert('Your password has been changed successfully.')</script>";


} else {
    echo "<script>alert('One of the fields is not correct')</script>";
    
}
}
}  
}
?>
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
        <li><a href="vacation.php"><span class="glyphicon glyphicon-plane"></span> &nbsp; Vacations </a></li> 
        <li><a href="addDoc.php"><span class="fa fa-user-md"></span> &nbsp; Doctors </a></li> 
      	</ul>
	<ul class="nav navbar-nav navbar-right">
        
        <li class="dropdown active" id="dd1">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span> &nbsp;<?php echo $_SESSION['use'];?></a>
          <ul class="dropdown-menu">
            <li class="active"><a href="changepassword.php"><span class="glyphicon glyphicon-lock"></span> &nbsp; Change Password </a></li>
            <li class="divider"></li>
            <li><a href="logout.php"><span class="glyphicon glyphicon-log-out"></span> &nbsp; Logout </a></li>
          </ul>
        </li>
      	</ul>
    	</div>
            
  	
	</nav>
        <div id="login">
        <div class="container" >
  <div class="jumbotron">
    <h2>Change Password</h2>      
  </div>
        </div>
    <div class="panel panel-info" >
                    <div class="panel-heading">
                        <div class="panel-title">Change Password</div>
                    </div>
         <div class="panel-body" >
        <div>
            <form class="frmChange" name="form" method="POST" action="changepassword.php" role="form"">
               
        
                            <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <input id="login-password1" type="password" class="form-control" name="currentpassword" placeholder="Current Password" required="">
                                    </div>
                 <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <input id="login-password2" type="password" class="form-control" name="newpassword" placeholder="New Password" required="">
                                    </div>
                 <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <input id="login-password3" type="password" class="form-control" name="confirmpassword" placeholder="Confirm Password" required="">
                                    </div>
        
                <button class="btn btn-lg btn-default btn-block" type="submit" name="submit">Save Password</button>
      </form>
        </div>
         </div>       
    </div>
        </div>
        <br/>
        <br/>
        <nav class="navbar navbar-default navbar-fixed-bottom">
  <div class="container-fluid">
    <div>
      <ul class="nav navbar-nav">
        
        <li><a href="aboutus.php">About</a></li>
        <li><a href="contactus.php">Contact</a></li> 
       
      </ul>
    </div>
  </div>
</nav>
        </body>
</html>	