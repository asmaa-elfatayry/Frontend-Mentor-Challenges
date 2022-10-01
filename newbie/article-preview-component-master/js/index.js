
let share_msg=document.querySelector(' .share');
let icon_share=document.querySelector('.right-icon');
let shareInMobile=document.querySelector('   .respnsive');

// console.log(window.innerWidth)

function showShare(){
    if(window.innerWidth > 375){
share_msg.style.display="flex";
share_msg.parentElement.style.backgroundColor="hsl(214, 17%, 51%)";
share_msg.previousElementSibling.style.fill="#fff"
    }
}

function disappear(){
    if(window.innerWidth > 375){
share_msg.style.display="none";
share_msg.parentElement.style.backgroundColor="hsl(210, 46%, 95%)";
share_msg.previousElementSibling.style.fill="#6E8098 "
    }
}

if(window.innerWidth <= 375){
icon_share.addEventListener("click",function(){
    icon_share.parentElement.style.display="none";
    shareInMobile.style.display="block";
    shareInMobile.firstElementChild.style.display="flex";

    shareInMobile.addEventListener("mouseleave",function(){
        icon_share.parentElement.style.display="flex";
        shareInMobile.style.display="none";
    })
})
}
