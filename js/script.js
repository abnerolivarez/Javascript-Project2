window.addEventListener("scroll", ()=> {
    const navbar = document.querySelector(".navbar-container");
    const navlinks = document.querySelectorAll(".nav-links li a");
    const logo = document.querySelector(".logo");
    let faBars = document.querySelector(".fa-bars");
    let faXmark = document.querySelector(".fa-xmark");
   
    
    if (window.scrollY > 50) { // Change background after scrolling 50px
        navbar.classList.add("scrolled");
        if(logo)logo.classList.add("scrolled");
        if(faBars)faBars.classList.add("scrolled");
        if(faXmark)faXmark.classList.add("scrolled");
        

        navlinks.forEach(link =>{  // this is to read all nav menu
            if(link)link.classList.add("scrolled");
        });

        
    } else {
        navbar.classList.remove("scrolled");
        if(logo)logo.classList.remove("scrolled");
        if(faBars)faBars.classList.remove("scrolled");
        if(faXmark)faXmark.classList.remove("scrolled");
       

        navlinks.forEach(link =>{  // this is to read all nav menu 
            if(link)link.classList.remove("scrolled");
        });
    }
});

const menuButton = document.getElementById('menu')
const menuLink = document.getElementById('nav-links')

menuButton.addEventListener('click',function(){
    if(menuLink.style.display ==='none'){
    menuLink.style.display ='block';
}else{
        menuLink.style.display = 'none'
    } 
});



const navbarsubscribeBtn = document.getElementById('navbar-subscribeBtn')
navbarsubscribeBtn.addEventListener('click',function(){
    alert('Thank you for Subscribing');
});



// Increement Decreement Button
document.querySelectorAll('.card').forEach(card =>{
const increment = card.querySelector('#increment');
const decrement = card.querySelector('#decrement');
const counterDisplay = card.querySelector('#counter');
const reset =card.querySelector('#reset');

let counter = 0;
increment.addEventListener('click',()=>{
    
    counter = counter + 1;
    counterDisplay.textContent = counter;
    // counter ++;
    // counterDisplay.textContent = counter;
});


decrement.addEventListener('click',()=>{
    
        if(counter >0){
            counter = counter -1;
        }
        counterDisplay.textContent = counter;
    
        // counter --;
        // counterDisplay.textContent = counter;

    // counter = counter > 0 ? counter - 1 : counter;
    // counterDisplay.textContent = counter;
});


reset.addEventListener('click',()=>{
    counter = 0;
    counterDisplay.textContent = counter;
});

});

// ====================================================//

const readBtn = document.getElementById('readBtn');
const readBtn1 = document.getElementById('readBtn1');
const imageDetails = document.getElementById('image-details');
const imageDetails1 = document.getElementById('image-details1');

readBtn.addEventListener('click',() =>{
    if( imageDetails.style.display === 'none'){
        imageDetails.style.display ='block'
    }else{
        imageDetails.style.display ='none'
    }
    
    // imageDetails.style.display === 'none' ? imageDetails.style.display ='block'
    // :imageDetails.style.display ='none'
});

readBtn1.addEventListener('click',() =>{
   
    if( imageDetails1.style.display === 'none'){
        imageDetails1.style.display ='block'
    }else{
        imageDetails1.style.display ='none'
    }
    
    // imageDetails1.style.display === 'none' ? imageDetails1.style.display ='block'
    // :imageDetails1.style.display ='none'
});


// ==========================================================//

const faBarsIcon = document.querySelector('.fa-bars');
const navbarContainer = document.querySelector('.navbar-container ' );
const navLi = document.querySelectorAll('.nav-links li a, .subscribeBtn');

faBarsIcon.addEventListener('click',()=>{
    
    faBarsIcon.classList.toggle('fa-bars');
    faBarsIcon.classList.toggle('fa-xmark');//change icon from menu burger to X
    
    navbarContainer.classList.toggle('show');
    navbarContainer.classList.toggle('hide');

    navLi.forEach(element => {
        element.classList.toggle('nav-visible');
    });
    
});




// =================================================================//
document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById('sendButton');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameInfo = document.getElementById('nameInfo');
    const emailInfo = document.getElementById('emailInfo'); // Make sure this exists

    function isValidName(name) {
        const namePattern = /^[a-z A-Z\s]+$/;
        return namePattern.test(name);
    }

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    sendButton.addEventListener('click', function () {
        const username = nameInput.value.trim();
        nameInput.value = '';

        if (username === '') {
            nameInfo.innerText = 'Please enter your name';
        } else if (!isValidName(username)) {
            nameInfo.textContent = 'Invalid input! Use only letters.';
        } else {
            nameInfo.textContent = `${username} is valid name`;
        }

        // Email Validation
        const email = emailInput.value.trim();
        emailInput.value = '';

        if (email === '') {
            emailInfo.innerText = 'Please enter your email';
        } else if (!isValidEmail(email)) {
            emailInfo.textContent = 'Invalid email format use @ sign!';
        } else {
            emailInfo.textContent = `(${email}) is valid email!`;
        }
    });
});


//=============================================//
const bodyBtn = document.querySelector('.body-btn');
const videoContainer = document.querySelector('.video-container');

bodyBtn.addEventListener('click',()=>{
        
    if(videoContainer.style.display==='none'){
        videoContainer.style.display='block';
    }else{
        videoContainer.style.display='none';
    }
    
    // videoContainer.style.display===('none')? videoContainer.style.display ='block' : videoContainer.style.display ='none';


    });

    let isPlaying = false;
    function toggleButton() {
        let iframe = document.getElementById("youtubeVideo");
        let button = document.getElementById("toggleButton");

       iframe.src = isPlaying ? "https://www.youtube.com/embed/qt10wT98CVs?mute=1" 
                               : "https://www.youtube.com/embed/qt10wT98CVs?autoplay";

        button.textContent = isPlaying ? "Play Video" : "Close Video";
        isPlaying = !isPlaying;
    }
    
//=====================================//



// =================================================//
// Get the current year automatic adjust the year
const currentYear = new Date().getFullYear();

// Insert the year into the span
document.getElementById("year").textContent = currentYear;



  