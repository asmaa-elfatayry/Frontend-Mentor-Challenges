

$btn_email=document.querySelector('button');
$input=document.querySelector('input')
$warn_msg=  document.querySelector('.warn-validation');
$btn_email.addEventListener("click",function(e){
    e.preventDefault();
    ValidateEmail($input)
})

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
    $warn_msg.style.display="none";
    $input.classList.remove('warn');
    $input.value='';
    return (true)
  }
    $warn_msg.style.display="block";
    $input.classList.add('warn')
    document.querySelector('form').style.gap=" 40px";
    return (false)
}


