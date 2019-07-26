// Toggle Menu for Mobile Devices//
const menuBurger = document.querySelector(".menu-burger");
const mainNav = document.querySelector(".main-nav");
menuBurger.addEventListener('click',() => {
    if (mainNav.style.display==='none'){
    mainNav.style.display='block';}
    else{mainNav.style.display='none';}
}) //End of Toggle menu for Mobile Devices

//Carousel//
var slideIndex, slides, dots, captionText;
function initGallery(){
    slideIndex=0;
    slides=document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity=1;
   
    captionText =document.querySelector(".captionHolder .captionText");
    captionText.innerText = slides[slideIndex].querySelector(".captionText").innerText;

    dots=[]; //Array for dotsContainer
    var dotsContainer=document.getElementById("dotsContainer");

    //Creating dots in the dotsContainer
    for(var i=0; i<slides.length; i++) {
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dot.setAttribute("onClick", "moveSlide("+i+")");
        dotsContainer.append(dot);
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
    }
initGallery();
function plusSlides(n){
    moveSlide(slideIndex+n);
}

function moveSlide(n){
    var i, current, next;
    var moveSlideAnimClass={
    forCurrent:"",
    forNext:""
    }
    var slideTextAnimClass;

if(n>slideIndex){
    if(n>=slides.length){n=0;}
    moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
    moveSlideAnimClass.forNext="moveLeftNextSlide";
    slideTextAnimClass="slideTextFromTop";
}
if(n<slideIndex){
    if(n<0){n=slides.length-1;}
    moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
    moveSlideAnimClass.forNext="moveRightNextSlide";
    slideTextAnimClass="slideTextFromBottom";

}
if(n!=slideIndex){
    next=slides[n];
    current=slides[slideIndex];
    for (i=0; i<slides.length; i++){
        slides[i].className="imageHolder";
        slides[i].style.opacity=0;
        dots[i].classList.remove("active");
    }

    current.classList.add(moveSlideAnimClass.forCurrent);
    next.classList.add(moveSlideAnimClass.forNext);
    dots[n].classList.add("active");
    slideIndex=n;
}

captionText.style.display="none";
captionText.className="captionText "+slideTextAnimClass;
captionText.innerText=slides[n].querySelector(".captionText").innerText;
captionText.style.display="block";

}

//Start of Auto slide, Play and Pause function in Carousel
var timer=null;
function setTimer(){
    timer=setInterval(function(){
        plusSlides(1);
    },3000)
}

setTimer();

var pauseBtn=document.querySelector(".fa-pause");
var playBtn=document.querySelector(".fa-play");

pauseBtn.addEventListener('click', () =>{
    if(timer===null){
        } else{
        clearInterval(timer);
        timer=null;
        playBtn.style.display="block";
        pauseBtn.style.display="none";
        }
})

playBtn.addEventListener('click', () =>{
    if(timer===null){
        setTimer();
        playBtn.style.display="none";
        pauseBtn.style.display="block"; 
    }
})
//End of Carousel//
