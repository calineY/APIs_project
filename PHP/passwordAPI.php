<?php

header("Access-Control-Allow-Origin: *");

$password=$_GET['password'];
$result=false;

if (preg_match('/[A-Za-z]/', $password) && preg_match('/[0-9]/', $password) && strlen($password)>=8) //check if password has minimum 8 characters and contains letters and numbers
{
    $result=true;
}
 $hashed=hash('sha256', $password); //hash password

 $array=['password'=>$password,'passedTest'=>$result,'hashed'=>$hashed];

 echo json_encode($array);

?>