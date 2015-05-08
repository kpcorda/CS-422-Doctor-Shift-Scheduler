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
        $sql1 = 'insert into schedule values(\' \',\''.$doc1.'\',\''.$date.'\',\''.$month.'\',\''.$year.'\',\'YES\',\'NO\',\'NO\',\'NO\',\'NO\',\'NO\')';
        }
        
        
       
        $result = mysql_query($sql1);
    }
    if(!empty($_POST['hiddensca'.$i]))
    {
        
        $data3 = $_POST['hiddensca'.$i];
        list($doc3,$date,$month,$year) = explode('?',$data3);
        $doc = trim($doc3);
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
 
 $sql3 = 'select count(*) as total from schedule where day=\''.$date.'\' && month=\''.$month.'\' && year=\''.$year.'\' && sca=\'YES\'';
 require("config.php");
        $result3 = mysql_query($sql3);
        $row3 = mysql_fetch_array($result3);
        if($row3['total']!=0)
        {
            $sql3 = 'update schedule set initials=\''.$doc3.'\' where day=\''.$date.'\' && month=\''.$month.'\' && year=\''.$year.'\' && sca=\'YES\'';
        }
        else
        {
        $sql3 = 'insert into schedule values(\' \',\''.$doc3.'\',\''.$date.'\',\''.$month.'\',\''.$year.'\',\'NO\',\'NO\',\'YES\',\'NO\',\'NO\',\'NO\')';
        }
        
        
       
        $result = mysql_query($sql3);
    }
    if(!empty($_POST['hiddenscb'.$i]))
    {
        
        $data4 = $_POST['hiddenscb'.$i];
        list($doc4,$date,$month,$year) = explode('?',$data4);
        $doc = trim($doc4);
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
 
 $sql4 = 'select count(*) as total from schedule where day=\''.$date.'\' && month=\''.$month.'\' && year=\''.$year.'\' && scb=\'YES\'';
 require("config.php");
        $result4 = mysql_query($sql4);
        $row4 = mysql_fetch_array($result4);
        if($row4['total']!=0)
        {
            $sql4 = 'update schedule set initials=\''.$doc4.'\' where day=\''.$date.'\' && month=\''.$month.'\' && year=\''.$year.'\' && scb=\'YES\'';
        }
        else
        {
        $sql4 = 'insert into schedule values(\' \',\''.$doc4.'\',\''.$date.'\',\''.$month.'\',\''.$year.'\',\'NO\',\'NO\',\'NO\',\'NO\',\'YES\',\'NO\')';
        }
        
        
       
        $result = mysql_query($sql4);
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
        $sql2 = 'insert into schedule values(\' \',\''.$doc2.'\',\''.$date.'\',\''.$month.'\',\''.$year.'\',\'NO\',\'YES\',\'NO\',\'NO\',\'NO\',\'NO\')';
        }
        
        
       
        $result = mysql_query($sql2);
    }
    if(!empty($_POST['hiddenpca'.$i]))
    {
        
        $data5 = $_POST['hiddenpca'.$i];
        list($doc5,$date,$month,$year) = explode('?',$data5);
        $doc = trim($doc5);
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
 
 $sql5 = 'select count(*) as total from schedule where day=\''.$date.'\' && month=\''.$month.'\' && year=\''.$year.'\' && pca=\'YES\'';
 require("config.php");
 
        $result5 = mysql_query($sql5);
        $row5 = mysql_fetch_array($result5);
        if($row5['total']!=0)
        {
            $sql5 = 'update schedule set initials=\''.$doc5.'\' where day=\''.$date.'\' && month=\''.$month.'\' && year=\''.$year.'\' && pca=\'YES\'';
        }
        else
        {
        $sql5 = 'insert into schedule values(\' \',\''.$doc5.'\',\''.$date.'\',\''.$month.'\',\''.$year.'\',\'NO\',\'NO\',\'NO\',\'YES\',\'NO\',\'NO\')';
        }
        
        
       
        $result = mysql_query($sql5);
    }
    if(!empty($_POST['hiddenpcb'.$i]))
    {
        
        $data6 = $_POST['hiddenpcb'.$i];
        list($doc6,$date,$month,$year) = explode('?',$data6);
        $doc = trim($doc6);
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
 
 $sql6 = 'select count(*) as total from schedule where day=\''.$date.'\' && month=\''.$month.'\' && year=\''.$year.'\' && pcb=\'YES\'';
 require("config.php");
 
        $result6 = mysql_query($sql6);
        $row6 = mysql_fetch_array($result6);
        if($row6['total']!=0)
        {
            $sql6 = 'update schedule set initials=\''.$doc6.'\' where day=\''.$date.'\' && month=\''.$month.'\' && year=\''.$year.'\' && pcb=\'YES\'';
        }
        else
        {
        $sql6 = 'insert into schedule values(\' \',\''.$doc6.'\',\''.$date.'\',\''.$month.'\',\''.$year.'\',\'NO\',\'NO\',\'NO\',\'NO\',\'NO\',\'YES\')';
        }
        
        
       
        $result = mysql_query($sql6);
    }
    $i=$i + 1; 
    
    
    if($i>31)
        break;
       
}
echo '<script> alert(\' Schedule Published for '. $month2 . ' - '. $year. ' \' ); window.location.href=\'adminhome.php\'  </script>';
?>