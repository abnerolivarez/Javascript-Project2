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


// =====================Slide Images===========================//

const slides = document.querySelector(".slides-container"),
      imgs = document.querySelectorAll(".slides-container img"),
      prev = document.querySelector(".prev"),
      next = document.querySelector(".next");

slides.append(imgs[0].cloneNode(true));
slides.prepend(imgs[imgs.length - 1].cloneNode(true));

let i = 1, auto = setInterval(() => move(++i), 4000); //Runs move(++i) every 3 seconds (auto-slide).

const move = (x) => {
    i = x;
    slides.style.transition = "0.5s";
    slides.style.transform = `translateX(${-i * imgs[0].clientWidth}px)`;
    setTimeout(() => {
        if (i >= imgs.length + 1) i = 1;
        if (i <= 0) i = imgs.length;
        slides.style.transition = "none";
        slides.style.transform = `translateX(${-i * imgs[0].clientWidth}px)`;
    }, 500);
};

[next, prev].forEach((btn, j) => btn.onclick = () => (move(i + (j ? -1 : 1)), reset())); //Moves slides forward or backward
slides.onmouseenter = () => clearInterval(auto);    //Pauses auto-slide when the mouse hovers over the slider
slides.onmouseleave = () => auto = setInterval(() => move(++i), 3000);
const reset = () => (clearInterval(auto), auto = setInterval(() => move(++i), 3000));

window.onresize = () => move(i);


// =================================================================//
const navbarSubscribeBtn = document.getElementById('navbar-subscribeBtn');
const SubscribeBtn = document.getElementById('subscribe');
const SubscribeClose = document.querySelector('.subscribe-close');
const subscribeButton = document.getElementById('subscribeButton');

navbarSubscribeBtn.addEventListener('click', () => {
    Swal.fire({
        title: 'Subscribe Now!',
        text: 'Do you want to subscribe to our newsletter?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, Subscribe!',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            SubscribeBtn.classList.add("showing"); // Start animation

            setTimeout(() => {
                SubscribeBtn.classList.toggle("show");
                SubscribeBtn.classList.remove("showing"); // Remove animation class after transition
            }, 10); // Small delay to allow animation to start
        }
    });
});


subscribeButton.addEventListener('click', () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to Submit the subscription form?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes, Submit it!',
            cancelButtonText: 'No, Stay'
        }).then((result) => {
            if (result.isConfirmed) {
                
                Swal.fire({
                    title: 'Success!',
                    text: 'Your subscription has been submitted successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                
                }).then(()=>{
                SubscribeBtn.classList.add("hiding"); // Start closing animation
            });
            } 
        
        });
    });

SubscribeClose.addEventListener('click', () => {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to close the subscription form?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Close it!',
        cancelButtonText: 'No, Stay'
    }).then((result) => {
        if (result.isConfirmed) {
            SubscribeBtn.classList.add("hiding"); // Start closing animation
            
            setTimeout(() => {
                SubscribeBtn.classList.remove("show");
                SubscribeBtn.classList.remove("hiding"); // Remove animation class after transition
            }, 400); // Match CSS transition time
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



  