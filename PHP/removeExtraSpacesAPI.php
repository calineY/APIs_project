<?php


$my_str=$_GET['string'];
$trimmed_str_at_start = ltrim($my_str); //remove spaces from start
$trimmed_str_at_end = rtrim($trimmed_str_at_start); //remove spaces from end
$string= preg_replace('/\s\s+/', ' ', $trimmed_str_at_end); //replace two or more spaces with one space

$array=['string'=>$my_str,'result'=>$string];
echo json_encode($array);

?>