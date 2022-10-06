const form =document.getElementById('myForm');
const name= document.getElementById('name');
const number= document.getElementById('number');
const date_M= document.getElementById('date-m');
const date_Y= document.getElementById('date-y');
const cvc= document.getElementById('cvc');
const btn=document.querySelector('#sub');
const complete=document.querySelector('.complete')

let update_num=document.querySelector('.card-number');
let update_name=document.querySelector('.name');
let update_month=document.querySelector('.dateM');
let update_year=document.querySelector('.dateY');
let update_cvc=document.querySelector('.cvc-p');


let nameState=false;
let numberState=false;
let datemState=false;
let dateyState=false;
let cvcState=false;

form.addEventListener('submit', function(e){
    // console.log(e)
	e.preventDefault();
	checkInputs();
        welcome();
   
});

function checkInputs() {
	// trim to remove the whitespaces

	const nameValue = name.value.trim();
    const numberValue = number.value.trim();
	const date_mValue = date_M.value.trim();
	const date_yValue = date_Y.value.trim();
    const cvcValue = cvc.value.trim();

	
	if(nameValue === '') {
		setErrorFor(name, "Can't be empty");
	} else {
		setSuccessFor(name);
		nameState=true;		
	}

	if(numberValue === '') {
		setErrorFor(number, "Can't be empty");
	}else if (!isNumber(numberValue)) {
        setErrorFor(number, 'Wrong format, numbers only ')

	}else if(numberValue.length !== 16){
		setErrorFor(number, 'Must be 16 numbers !')
	}
	 else {
		setSuccessFor(number);
		numberState=true;
	
	}
	
	if(date_mValue === '' ||  date_yValue=== '') {
		setErrorFor(date_M, "Can't be empty");
	} else {
		setSuccessFor(date_M);
		datemState=true;
		setSuccessFor(date_Y)
		dateyState=true;
		
	}
	
	
    if(cvcValue === '') {
		setErrorFor(cvc, "Can't be empty");
	} else {
		setSuccessFor(cvc);
		cvcState=true;
		
	}

}


function setErrorFor(input, message) {
	const formControl = input.parentElement.parentElement;
	const span = formControl.querySelector('span');
	formControl.className = 'form-control error';
	span.innerText = message;
	
}

function setSuccessFor(input) {
	const formControl = input.parentElement.parentElement;
	formControl.className = 'form-control success';
	
}
	
function isNumber(value) {
   console.log(value.length)
	return /^[0-9]+$/.test(value) ;
}



function welcome(){
    const nameValue = name.value.trim();
    const numberValue = number.value.trim();
	const date_mValue = date_M.value.trim();
	const date_yValue = date_Y.value.trim();
    const cvcValue = cvc.value.trim();


	if(nameState && numberState && datemState && date_yValue && cvcState){
		form.style.display="none";
		complete.style.display="flex";

		
		if (nameValue !== ''){
			update_name.innerHTML=nameValue
			
		}
		if (numberValue !== '' ){
     console.log(typeof numberValue)

	 let str=numberValue;
	 let format =(str.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,''))
			
		
			update_num.innerHTML=format;
	
		}
			
			
		
		if (date_mValue !== '' && date_mValue <=12){
		   if(date_mValue <10){
			update_month.textContent='0'+date_mValue;
	
		   }else{
			update_month.innerHTML=date_mValue;
	
		   }
		   
			
		}
		if (date_yValue !== ''){
			if(date_mValue <10){
				update_year.textContent='0'+date_yValue;
		
			   }else{
				update_year.innerHTML=date_yValue;
			   }
			update_year.innerHTML=date_yValue;
			
		}
		if (cvcValue !== ''){
			update_cvc.innerHTML=cvcValue;
		
		}
	
	}
}

  










