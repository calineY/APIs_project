<?php


$word=$_GET['word'];
//$reversed_word=[];
$result=true;

/*for ($i=strlen($word)-1;$i>=0;$i--){
    $temp=$word[$i];
    $reversed_word.array_push($temp);
}

if ($reversed_word==$word){
    $result=true;
}else{
    return false;
}*/

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