/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click' , () =>{
        modal(i)
    })
})

modalClose.forEach((mc)=>{
    mc.addEventListener('click',() =>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        })
    })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 30,
    loop: true,
    grabCursor:true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
         576: {
            slidesPerView: 2,
            },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
            },
    
    },
 });
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
 const sr = ScrollReveal({
     origin:'top',
     distance: '60px',
     duration:2500,
     delay:400,
     //reset: true,
 })


 sr.reveal('.home__data')
 sr.reveal('.home__handle',{delay:700})
 sr.reveal('.home__social , .home__scroll' , {delay: 900 , origin:'bottom'})
