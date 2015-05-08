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
        <script type="text/javascript">
var RecaptchaOptions = {

theme : 'custom',
custom_theme_widget: 'recaptcha_widget'
};
</script>

            <title>
                DSS Forgot Password Page
            </title>
    </head>

    <body>
        <?php
if(isset($_POST['submit']))
{ 
 require('config.php');
 require 'PHPMailerAutoload.php';
 $email=$_POST['email'];
 $username=$_POST['username'];
 $q=mysql_query("select * from users where email='".$email."' && username='".$username."'") or die(mysql_error());
 
 $p=mysql_affected_rows();
 if($p!=0) 
 {
  $res=mysql_fetch_array($q);
  function makepassword($length)
{
$validCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUXYVWZ0123456789";
$validCharNumber = strlen($validCharacters);
$r ="";
for ($i = 0; $i < $length; $i++) 
{
$index = mt_rand(0, $validCharNumber - 1);
$r .= $validCharacters[$index];
}
return $r;
}
$random_password = makepassword(10);
//echo $password_final = md5($random_password);
//echo "update set pass ='$random_password' where email = '$email'"; exit;
$final_result = mysql_query("update users set password ='$random_password' where email='".$email."' && username='".$username."' ");
  $to_name = $username;
$to = $email;
$subject = "Reset Password";
$message = "Password is: ".$random_password;
$message = wordwrap($message,70);
 
$from_name = "Doctor Shift Scheduler Team";
$from = "kcorda7@gmail.com";
$mail = new PHPMailer();
 
$mail->IsSMTP();
$mail->Host = "smtp.gmail.com"; //enable php socks to make SSL it working
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Username = "kcorda7@gmail.com";
$mail->Password = '$Athena7';
 
$mail->FromName = $from_name;
$mail->From = $from;
$mail->AddAddress($to, $to_name);
$mail->Subject = $subject;
$mail->Body = $message;
$mail->IsHTML(true);    
$result = $mail->Send();
$recaptcha_secret = "6LcjOwUTAAAAADGgCVgKla2VkRrGEuNmkevGcsrD";
        $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$recaptcha_secret."&response=".$_POST['g-recaptcha-response']);
        $response = json_decode($response, true);
        
  if($result && $response["success"] === true)
  {
    header("location:confirm.html"); 
  }
  else
  {
   echo "<script>alert('Error: Unable to send mail!')</script>";
  }
 }
 else
 {
  echo "<script>alert('The email id or username you entered is not valid')</script>";
 }
}
?>
           
        <nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
        <a class="navbar-brand" href="commonhome.php">Doctor Shift Scheduler</a>
        
    </div>
    <ul class="nav navbar-nav navbar-right">
        <li><a href="login.php" style="text-align: right;"><span class="glyphicon glyphicon-log-in"></span> &nbsp;Login</a></li>
      	</ul>
  </div>
</nav>
  
     
        <div class="container" >
  <div class="jumbotron">
    <h2>Forgot Password</h2>      
  </div>
        </div>
    <div class="panel panel-info" >
                    <div class="panel-heading">
                        <div class="panel-title">Forgot Your Password?</div>
                    </div>
         <div class="panel-body" >
        <div>
            <div id="MyForm">
                <form class="form-signin" name="form" method="POST" action="forgotpassword.php" role="form">
        <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                        <input id="login-user" type="text" class="form-control" name="username" value="" placeholder="Username" required="">                                        
                                    </div>
       <div style="margin-bottom: 25px" class="input-group">
                                        <span class="input-group-addon">@</span>
                                        <input id="login-email" type="email" class="form-control" name="email" value="" placeholder="example@domain.com" required="" autofocus="">                                        
                                    </div>   
    
                <div class="g-recaptcha" data-sitekey="6LcjOwUTAAAAAMcIekTEVIhgFZQoXwPSyB3x0wVF"></div>             
                            <br/>
                <button class="btn btn-lg btn-default btn-block" type="submit" name="submit">Reset Password</button>
     
              
     </div>
      </form>
            </div>
        </div>
         </div>       
    </div>
   
       <script src='https://www.google.com/recaptcha/api.js'></script>
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