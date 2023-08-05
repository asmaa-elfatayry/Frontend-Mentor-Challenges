

    let navLinks=document.querySelector('.nav-links')
    let navRegister=document.querySelector('.nav-register')
    let menuBtn=document.querySelector('.menu')
   

    menuBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from propagating to the document
        if (navLinks.classList.contains('hidden') && navRegister.classList.contains('hidden')) {
            navLinks.classList.remove('hidden');
            navRegister.classList.remove('hidden');
            navLinks.classList.add('flex');
            navRegister.classList.add('flex');
        } else {
            navLinks.classList.remove('flex');
            navRegister.classList.remove('flex');
            navLinks.classList.add('hidden');
            navRegister.classList.add('hidden');
        }
    });
    
   
    // Click event listener for the document to close the menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            navLinks.classList.remove('flex');
            navRegister.classList.remove('flex');
            navLinks.classList.add('hidden');
            navRegister.classList.add('hidden');
        }
    });

    
    
    

const apiKey = 'de0f992ef95d3a582a775cb75487f99cf457c9bc'; // Replace with your actual Bitly API key

// Function to shorten a link using the Bitly API
async function shortenLink(longUrl) {
    const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            long_url: longUrl
        })
    });

    const data = await response.json();
    return data.id; // This is the shortened link
}

// Example usage
const inputElement = document.getElementById('input'); 
const shortenButton = document.getElementById('shorten-btn'); 

shortenButton.addEventListener('click', async () => {
    if(inputElement.value===''){
inputElement.classList.add('border-red-500','border-2')
document.querySelector('.warn').classList.remove('hidden')
    }else{
        inputElement.classList.remove('border-red-500','border-2')
        document.querySelector('.warn').classList.add('hidden')
        const longUrl = inputElement.value;
        const shortenedUrl = await shortenLink(longUrl);
        
        DisplayShortedUrl(longUrl,shortenedUrl);
        copyLink();
        // console.log('Shortened URL:', shortenedUrl);
    }
 
}); 

function DisplayShortedUrl(longUrl,shortenedUrl){
const parentElem=document.querySelector('.results');
const div=document.createElement('div');
div.classList.add('flex','gap-4','md:gap-0','flex-col','md:flex-row', 'justify-between','bg-white','w-[85%]','mx-auto','rounded-lg','py-3','px-6','md:items-center')
const longParg=document.createElement('p');
longParg.textContent=longUrl;
longParg.classList.add('font-bold','border-b-2','border-slate-100','md:border-b-0','pb-3','md:pb-0')
const innerDiv=document.createElement('div');
innerDiv.classList.add('flex','gap-4','md:items-center','flex-col','md:flex-row')
const shortPar=document.createElement('p');
shortPar.textContent=shortenedUrl;
shortPar.classList.add('shorten-link','text-cyan-col','font-bold')
const copyButton=document.createElement('button');
copyButton.classList.add('copyBtn','hover:bg-opacity-50', 'text-white','font-bold', 'px-5','py-2','w-full','md:w-auto', 'rounded-lg','bg-cyan-col')
const textBtn=document.createTextNode('Copy');
copyButton.appendChild(textBtn);
innerDiv.append(shortPar,copyButton)
div.append(longParg,innerDiv);
parentElem.insertBefore(div, parentElem.firstChild); 
}

if(window.innerWidth<375){
document.querySelector('.link-sec').setAttribute('backgroundImage',"url('./images/bg-shorten-mobile.svg')")
document.querySelector('.boost').setAttribute('backgroundImage',"url('./images/bg-shorten-mobile.svg')")

}else{
    document.querySelector('.link-sec').setAttribute('backgroundImage',"url('./images/bg-boost-desktop.svg')"); 
    document.querySelector('.boost').setAttribute('backgroundImage',"url('./images/bg-boost-desktop.svg')");
}



  


function copyLink(){
  
  const shortenLink=document.querySelector('.shorten-link')
  const copyBtn=document.querySelector('.copyBtn');
  copyBtn.addEventListener('click',()=>{
    copyBtn.classList.remove('bg-cyan-col')
    copyBtn.classList.add('bg-darkViolet-col')
      // Create a range object to select the text
      let range = document.createRange();
      range.selectNode(shortenLink);
  
      // Select the text
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
  
      // Copy the selected text to the clipboard
      document.execCommand('copy');
  
      // Clean up the selection
      window.getSelection().removeAllRanges();
  
      // Change button text temporarily to show success
      copyBtn.innerHTML = 'Copied!';
      setTimeout(function() {
        copyBtn.innerHTML = 'Copied!';
      }, 2000); // Reset button text after 2 seconds
    })
}