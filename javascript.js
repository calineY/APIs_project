let api1btn=document.getElementById("api1submit");
let calculation_result=document.getElementById("api1result");
let first_number=document.getElementById("first_number");
let second_number=document.getElementById("second_number");
api1btn.addEventListener("click",calculate);

async function calculate(){
    let x=first_number.value;
    let y=second_number.value;
    if (x==='' || y===''){
        calculation_result.textContent="Please fill both numbers.";
        return;
    }
    const response=await fetch(`http://localhost/APIs_project/PHP/calculateAPI.php?x=${x}&y=${y}`);
    res=await response.json();
    calculation_result.textContent="Result:"+ res.result;
}
