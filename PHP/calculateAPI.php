<?php

$x=$_GET["x"];
$y=$_GET["y"];

$result=2 * $x + $y % 2;
$array=[ "first_number"=>$x , "second_number"=>$y , "result"=>$result ];

echo json_encode($array);

?>