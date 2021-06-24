/*===== MENU SHOW Y HIDDEN =====*/
const navMenu= document.getElementById('nav-menu');
 toggleMenu = document.getElementById('nav-toggle');
 closeMenu = document.getElementById('nav-menu');


// SHOW
 toggleMenu.addEventListener('click',()=>{
     navMenu.classList.add('show')
 })
// HIDDEN
 closeMenu.addEventListener('click', ()=>{
     navMenu.classList.remove('show');
 })

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelector('.nav__link');
 function linkAction(){
 navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/


const sections =document.querySelectorAll('section[id]');
window.addEventListener('scroll',scrollActive)

 function scrollActive(){
     const scrollY = window.pageYOffset
     sections.forEach(current =>{
         const sectionHeight = current.offsetHeight
         const sectionTop = current.offsetTop - 50;
         sectionId = current.getAttribute('id');

         if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
             document.querySelector('.nav__menu a[href ='+ sectionId + ']').classList.add('active');
         }else{
            document.querySelector('.nav__menu a[href ='+ sectionId + ']').classList.remove('active');
         }
     })
 }
