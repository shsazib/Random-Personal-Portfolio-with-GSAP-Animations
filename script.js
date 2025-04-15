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



gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: document.body,
    start: "top -50",
    onEnter: () => {
        gsap.set("#navbar", {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
        });
    },
    onLeaveBack: () => {
        gsap.set("#navbar", {
            position: "absolute",
            backgroundColor: "transparent",
            boxShadow: "none",
            backdropFilter: "none",
        });
    }
});


// Create a timeline for sequenced animations
const tl = gsap.timeline();

// Background shape animation
tl.fromTo(".bg-shape",
    {
        skewX: "0deg",
        width: "100%",
        opacity: 1
    },
    {
        skewX: "17deg",
        width: "60%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.out"
    }
);


// Text content animations
tl.from("#home h1", {
    y: 50,
    opacity: 0,
    duration: 0.7,
    ease: "back.out(1.7)"
}, "-=0.8")

    .from("#home h2", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.7)"
    })

    .from("#home .flex-1 p", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=0.5")

    .from("#home .hireMe", {
        y: 10,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=0.5")



gsap.to("#home img", {
    y: "15px",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});
gsap.from("#home img", {
    x: "100%",
    duration: 2,
    repeat: 0,
    yoyo: true,
    ease: "sine.inOut",
});





// smooth scroll
document.querySelectorAll('a[href^="#"]'.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}));
