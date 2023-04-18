var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add("active-tab")
        }
        const d = new Date();
document.getElementById("date").innerHTML = d.getFullYear();

// ----------------------------------------------------------------
var sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

// ---------------------------------------------------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbz82TE-0M0s0L3m7reYWNXw_HZrvGiaJcdFJBVPTCqKCH8lZdDDzfOSUceToUO3Fn5a/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg=document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML="Message Sent Successfully"
                setTimeout(function(){
                    msg.innerHTML=""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })


// -------------------------------------------------------------------
const text=document.querySelector(".second");
        const textLoad = () => {
            setTimeout(() =>{
                text.textContent="Web Designer"
            },0);
            setTimeout(() =>{
                text.textContent="App Designer"
            },4000);
            setTimeout(() =>{
                text.textContent="Code Enthusiast"
            },8000);
        }
        textLoad();
        setInterval(textLoad,12000);