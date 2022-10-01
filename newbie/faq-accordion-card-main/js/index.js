

let allDivs=document.querySelectorAll('box-Q-and-A')
let allAnswers=document.querySelectorAll('p')
let allQuestions= document.querySelectorAll('h2');
let allArrows= document.querySelectorAll('span');



allQuestions.forEach((ele)=>{
    ele.addEventListener("click",function(e){
   
        // every time click make loop to all element and make them normal style
       allAnswers.forEach((ele)=>{
            ele.classList.remove("active");
           ele.parentElement.children[0].firstElementChild.style.fontWeight="400";
           ele.previousElementSibling.children[1].style.transform=" rotateZ(0deg)";
        })
        // styles when clicked
        e.target.parentElement.nextElementSibling.classList.toggle("active");
        ele.style.fontWeight="700";
        ele.nextElementSibling.style.transform="  rotateZ(180deg)";

        ele.addEventListener("click",()=>{
            ele.parentElement.nextElementSibling.classList.toggle("active")
           
        })
    })
})




allArrows.forEach((ele)=>{
    ele.addEventListener("click",function(e){
    // every time click make loop to all element and make them normal style
       allAnswers.forEach((ele)=>{
            ele.classList.remove("active")
            ele.parentElement.children[0].firstElementChild.style.fontWeight="400";
            ele.previousElementSibling.children[1].style.transform=" rotateZ(0deg)";
        })
        // styles when clicked
        ele.style.transform="  rotateZ(180deg)";
        ele.previousElementSibling.style.fontWeight="700";
        e.target.parentElement.parentElement.nextElementSibling.classList.add("active");

        ele.addEventListener("click",()=>{
           
            ele.parentElement.nextElementSibling.classList.toggle("active");
            ele.style.transform=" rotateZ(0deg)";

           
        })
    
    })
})
