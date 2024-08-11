//header toggle
let menuBtn=document.getElementById('menubtn')

menuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-action');
    this.classList.toggle('fa-xmark')
})

//typing effect
let typed=new Typed('.auto-input',{
    strings:['Front-End Developer!', 'Web Developer!', 'Backend Developer!', 'Full Stack Developer!', 'Mern stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

//background color
function ChangeBG(color)
{
document.body.style.backgroundColor=color;
let col=document.getElementsByClassName("bgcolor");
if(color=="#000000")
{
for (let elm of col)
{
    elm.style.color="white";
} 
}
else 
{
for( let elm of col)
{
  elm.style.color="black"  ;
}
}
}

/*email.js */
function sendMail(){
    let params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_izcs7qt","template_7hy8zbl",params).then(alert("Email sent successfully"))
}






