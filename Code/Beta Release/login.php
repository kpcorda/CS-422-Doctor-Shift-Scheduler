
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
        <script src="script2.js" type="text/javascript"></script>
        <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

            <title>
                DSS Login Page
            </title>
    </head>

    <body>
        
            <?php     //start php tag
//include connect.php page for database connection
require('config.php');
if(isset($_SESSION['use']))   // Checking whether the session is already there or not if 
                              // true that header redirect it to the home page directly 
 {
    header("Location:adminhome.php"); 
 }

//if submit is not blanked i.e. it is clicked.
if (isset($_POST['submit'])) //here give the name of your button on which you would like    //to perform action.
{
// here check the submitted text box for null value by giving there name.
    if($_POST['username']=="" || $_POST['password']=="")
    {
    echo " Field must be filled";
    }
    else
    {
       $sql1= "select * from users where username= '".$_POST['username']."' &&  password ='".$_POST['password']."'";
      $result=mysql_query($sql1)
        or exit("Sql Error".mysql_error());
      $year = time() + 31536000;
    
        $numrows=mysql_num_rows($result);
        if (isset($_POST['remember'])) {
            /* Set cookie to last 1 year */
            setcookie('username', $_POST['username'], $year);
            setcookie('password', ($_POST['password']), $year);
        
        } else {
            /* Cookie expires when browser closes */
            setcookie('username', $_POST['username'], false);
            setcookie('password',($_POST['password']), false);
        }
       if($numrows!=0)
       {
            $_SESSION['use']=$_POST['username'];

//here you can redirect on your file which you want to show after login just change filename ,give it to your filename.
           header("location:adminhome.php"); 
 //OR just simply print a message.
         //Echo "You have logged in successfully";    
        //}
        //else
        //{
            //echo "username or password incorrect";
       // }
    }
    else
    {
        echo "<script>alert('The username or password does not exist!')</script>";
    }
    
}  
}
?>
        <nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
        <a class="navbar-brand" href="commonhome.php">Doctor Shift Scheduler</a>
    </div>
    
  </div>
</nav>
        <div id="login">
        <div class="container" >
  <div class="jumbotron">
    <h2>Administrative Login</h2>      
  </div>
        </div>
    <div class="panel panel-info" >
                    <div class="panel-heading">
                        <div class="panel-title">Sign In</div>
                    </div>
         <div class="panel-body" >
        <div>
            <form class="form-signin" name="form" method="POST" action="login.php" role="form">
        <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                        <input id="login-username" type="text" class="form-control" name="username" value="<?php if(isset($_COOKIE['username'])) {
		echo $_COOKIE['username'];
	}
	else {
		echo '';
	}
	?>" placeholder="Username" required="">                                        
                                    </div>
                                
                            <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                        <input id="login-password" type="password" class="form-control" name="password" placeholder="Password" required="">
                                    </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" name="remember" <?php if(isset($_COOKIE['username'])) {
		echo 'checked="checked"';
	}
	else {
		echo '';
	}
	?>> Remember me
          </label>
        </div>
                <button class="btn btn-lg btn-default btn-block" type="submit" name="submit">Login</button>
        <br/>
        <div id="l1" style="float:left; font-size: 100%; position: relative;"><a href="forgotpassword.php">Forgot password?</a></div>
      </form>
        </div>
         </div>       
    </div>
        </div>
        <br/>
        <br/>
        <nav class="navbar navbar-default navbar-bottom">
  <div class="container-fluid">
    <div>
      <ul class="nav navbar-nav">
        
        <li><a href="aboutus.html">About</a></li>
        <li><a href="contactus.html">Contact</a></li> 
       
      </ul>
    </div>
  </div>
</nav>
        </body>
</html>	