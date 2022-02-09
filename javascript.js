let api1btn=document.getElementById("api1submit");
let calculation_result=document.getElementById("api1result");
let first_number=document.getElementById("first_number");
let second_number=document.getElementById("second_number");

let api2btn=document.getElementById("api2submit");
let remove_space_result=document.getElementById("api2result");
let string=document.getElementById("string");

let api3btn=document.getElementById("api3submit");
let is_palindrome_result=document.getElementById("api3result");
let string_palindrome=document.getElementById("string_palindrome");


api1btn.addEventListener("click",calculate);
api2btn.addEventListener("click",removeSpaces);
api3btn.addEventListener("click",isPalindrome);


async function calculate(){
    let x=first_number.value;
    let y=second_number.value;
    if (x==='' || y===''){
        calculation_result.textContent="Please fill both numbers.";
        return;
    }
    const response=await fetch(`http://localhost/APIs_project/PHP/calculateAPI.php?x=${x}&y=${y}`);
    res=await response.json();
    calculation_result.textContent="Result: "+ res.result;
}

async function removeSpaces(){
    let my_str=string.value;
    if (my_str===''){
        remove_space_result.textContent="Please input a string first.";
        return;
    }
    const response=await fetch(`http://localhost/APIs_project/PHP/removeExtraSpacesAPI.php?string=${my_str}`);
    res=await response.json();
    remove_space_result.textContent="Result: "+ res.result;
}

async function isPalindrome(){
    let my_str=string_palindrome.value;
    if (my_str===''){
        is_palindrome_result.textContent="Please input a string first.";
        return;
    }
    const response=await fetch(`http://localhost/APIs_project/PHP/palindromeAPI.php?word=${my_str}`);
    res=await response.json();
    is_palindrome_result.textContent="Result: "+ res.result;
}