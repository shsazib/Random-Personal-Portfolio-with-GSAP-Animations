// Projects Swiper
var swiper = new Swiper(".projectsSwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1270: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

// Testmonial Swiper
var swiper = new Swiper(".testmonialSwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30
        },
    }
});


// Navbar
const phoneMenu = document.querySelector(".phone-menu")
const openMenu = document.querySelector(".open-menu")
const closeMenu = document.querySelector(".close-menu")

openMenu.addEventListener('click', () => {
    phoneMenu.classList.remove('hidden')
    phoneMenu.classList.add('block')
    openMenu.classList.add('hidden')
    closeMenu.classList.remove('hidden')
})

closeMenu.addEventListener('click', () => {
    phoneMenu.classList.add('hidden')
    phoneMenu.classList.remove('block')
    openMenu.classList.remove('hidden')
    closeMenu.classList.add('hidden')
})

document.addEventListener('click', (event) => {
    const isClickInsideMenu = phoneMenu.contains(event.target)
    const isClickOnOpenButton = openMenu.contains(event.target)
    const isClickOnCloseButton = closeMenu.contains(event.target)

    if (!isClickInsideMenu && !isClickOnOpenButton && !isClickOnCloseButton) {
        phoneMenu.classList.add('hidden')
        phoneMenu.classList.remove('block')
        openMenu.classList.remove('hidden')
        closeMenu.classList.add('hidden')
    }
})

document.querySelectorAll('.service-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const dropdown = toggle.nextElementSibling
      const icon = toggle.querySelector('.dropdown-icon')
  
      dropdown.classList.toggle('hidden')
      icon.classList.toggle('rotate-180')
    })
  })
  
  
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('absolute')
        navbar.classList.add('fixed', 'bg-white/40', 'shadow', 'backdrop-blur-lg')
    } else {
        navbar.classList.remove('fixed', 'bg-white/40', 'shadow', 'backdrop-blur-lg')
        navbar.classList.add('absolute')
    }
})


// smooth scroll
document.querySelectorAll('a[href^="#"]'.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}));
