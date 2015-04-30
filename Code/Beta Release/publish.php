<?php
$i=1;

while(true)
{
    ;
    if(!empty($_POST['hiddensc'.$i]))
    {
        
        $data1 = $_POST['hiddensc'.$i];
        list($doc1,$date,$month,$year) = explode('?',$data1);
        $doc = trim($doc1);
$date = trim($date);
$month = trim($month);
$year = trim($year);
$month2 = $month;
 if(strcmp($month,'January')==0)
         $month='01';
 else  if(strcmp($month,'February')==0)
         $month='02';
 else  if(strcmp($month,'March')==0)
         $month='03';
 else  if(strcmp($month,'April')==0)
         $month='04';
 else  if(strcmp($month,'May')==0)
         $month='05';
 else  if(strcmp($month,'June')==0)
         $month='06';
 else  if(strcmp($month,'July')==0)
         $month='07';
 else  if(strcmp($month,'August')==0)
         $month='08';
 else  if(strcmp($month,'September')==0)
         $month='09';
 else  if(strcmp($month,'October')==0)
         $month='10';
 else  if(strcmp($month,'November')==0)
         $month='11';
 else  if(strcmp($month,'December')==0)
         $month='12';
 
 $sql1 = 'select count(*) as total from schedule where day=\''.$date.'\' && month=\''.$month.'\' && year=\''.$year.'\' && sc=\'YES\'';
 require("config.php");
        $result1 = mysql_query($sql1);
        $row1 = mysql_fetch_array($result1);
        if($row1['total']!=0)
        {
            $sql1 = 'update schedule set initials=\''.$doc1.'\' where day=\''.$date.'\' && month=\''.$month.'\' && year=\''.$year.'\' && sc=\'YES\'';
        }
        else
        {
        $sql1 = 'insert into schedule values(\' \',\''.$doc1.'\',\''.$date.'\',\''.$month.'\',\''.$year.'\',\'YES\',\'NO\')';
        }
        
        
       
        $result = mysql_query($sql1);
    }
    
    if(!empty($_POST['hiddenpc'.$i]))
    {
        
        $data2 = $_POST['hiddenpc'.$i];
        list($doc2,$date,$month,$year) = explode('?',$data2);
        $doc = trim($doc2);
$date = trim($date);
$month = trim($month);
$year = trim($year);
 if(strcmp($month,'January')==0)
         $month='01';
 else  if(strcmp($month,'February')==0)
         $month='02';
 else  if(strcmp($month,'March')==0)
         $month='03';
 else  if(strcmp($month,'April')==0)
         $month='04';
 else  if(strcmp($month,'May')==0)
         $month='05';
 else  if(strcmp($month,'June')==0)
         $month='06';
 else  if(strcmp($month,'July')==0)
         $month='07';
 else  if(strcmp($month,'August')==0)
         $month='08';
 else  if(strcmp($month,'September')==0)
         $month='09';
 else  if(strcmp($month,'October')==0)
         $month='10';
 else  if(strcmp($month,'November')==0)
         $month='11';
 else  if(strcmp($month,'December')==0)
         $month='12';
 
 $sql2 = 'select count(*) as total from schedule where day=\''.$date.'\' && month=\''.$month.'\' && year=\''.$year.'\' && pc=\'YES\'';
 require("config.php");
 
        $result2 = mysql_query($sql2);
        $row2 = mysql_fetch_array($result2);
        if($row2['total']!=0)
        {
            $sql2 = 'update schedule set initials=\''.$doc2.'\' where day=\''.$date.'\' && month=\''.$month.'\' && year=\''.$year.'\' && pc=\'YES\'';
        }
        else
        {
        $sql2 = 'insert into schedule values(\' \',\''.$doc2.'\',\''.$date.'\',\''.$month.'\',\''.$year.'\',\'NO\',\'YES\')';
        }
        
        
       
        $result = mysql_query($sql2);
    }
    
    $i=$i + 1; 
    
    
    if($i>31)
        break;
       
}
echo '<script> alert(\' Schedule Published for '. $month2 . ' - '. $year. ' \' ); window.location.href=\'adminhome.php\'  </script>';
?>