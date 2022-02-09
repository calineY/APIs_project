<?php

header("Access-Control-Allow-Origin: *");

$x=$_GET["x"];
$y=$_GET["y"];

$result=2 * (int)$x + (int)$y % 2;
$array=["first_number"=>$x,"second_number"=>$y,"result"=>$result];

echo json_encode($array);

?>