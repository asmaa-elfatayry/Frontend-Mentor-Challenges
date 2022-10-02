const form =document.getElementById('myForm');
const fn= document.getElementById('fname');
const ln= document.getElementById('lname');
const email= document.getElementById('email');
const pass= document.getElementById('pass');
const sub_btn=document.querySelector('#sub');

form.addEventListener('submit', function(e){
    // console.log(e)
	e.preventDefault();
	checkInputs();
});
sub_btn.addEventListener("click",function(){
    this.style.backgroundColor="  #38cc8cb8";
})
function checkInputs() {
	// trim to remove the whitespaces

	const fnameValue = fn.value.trim();
    const lnameValue = ln.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = pass.value.trim();

	
	if(fnameValue === '') {
		setErrorFor(fn, 'First Name cannot be empty');
	} else {
		setSuccessFor(fn);
	}

	if(lnameValue === '') {
		setErrorFor(ln, 'Last Name cannot be empty');
	} else {
		setSuccessFor(ln);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email Address cannot be empty');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Looks like this is not on email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(pass, 'Password cannot be empty');
    } else if (!isPass(passwordValue)) {
        setErrorFor(pass, 'Enter Valid Password !')

	} else {
		setSuccessFor(pass);
	}
	

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const em = formControl.querySelector('em');
	formControl.className = 'form-control error';
	em.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPass(pass){
    return  /^[A-Za-z]\w{7,14}$/.test(pass);



}












// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
