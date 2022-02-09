<?php


$word=$_GET['word'];
$result=true;
$i=0;
$j=strlen($word)-1;

while($i<$j){
    if ($word[$i]!=$word[$j]){
        $result = false;
        break;
    }
    $i++;
    $j--;
}

$array=["word"=>$word,"result"=>$result];
echo json_encode($array);

?>