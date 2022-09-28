// get variables
$btnSubmit=document.querySelector('button');
$card_welcome=document.querySelector('.submit');
$card_thanked=document.querySelector('.thanked');
$arr_numbers= document.querySelectorAll('.numbers span');
$rated_num= '';
$rated_div=document.querySelector('.rated')
// console.log($arr_numbers);


$arr_numbers.forEach(element => {
    element.addEventListener("click",function(){
       $rated_num=element.innerText;
       element.style.backgroundColor="hsl(217, 12%, 63%)";
       element.style.color="hsl(0, 0%, 100%)";
    //    console.log($rated_num)
    })
});


$btnSubmit.addEventListener("click",function(){
    $card_welcome.style.display="none";
    $card_thanked.style.display="block";

    $rated_div.innerText=`  You selected ${$rated_num} out of 5`
})