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


const tl = gsap.timeline();

// Hero section
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


// About
gsap.from("#about img", {
    x: "-100%",
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
        toggleActions: "play none none none"
    }
});

gsap.from("#about .about-pogress", {
    x: "-100%",
    delay: "0.5",
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
        toggleActions: "play none none none"
    }
});


// Service
document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('#service .service-card');

    // Add hover animation to each card
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.1,
                ease: "power2.out",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
            });

            const icon = card.querySelector('svg');
            gsap.to(icon, {
                y: -5,
                duration: 0.1,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.1,
                ease: "power2.out",
                boxShadow: "0 4px 11px 1px rgba(0,0,0,0.1)"
            });

            const icon = card.querySelector('svg');
            gsap.to(icon, {
                y: 0,
                duration: 0.1
            });
        });
    });
});


// count section
document.addEventListener('DOMContentLoaded', function () {
    const countSection = document.querySelector('.count-section');
    const counters = document.querySelectorAll('.count-section h2');
    let animationStarted = false;

    // Store original values and set initial state
    counters.forEach(counter => {
        counter.dataset.target = counter.textContent;
        counter.textContent = '0';
    });

    function animateCounters() {
        if (animationStarted) return;
        animationStarted = true;

        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target.replace('+', ''));
            const suffix = counter.dataset.target.includes('+') ? '+' : '';
            const duration = 2000; // 2 seconds
            const startTime = Date.now();

            function updateCounter() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentValue = Math.floor(progress * target);

                counter.textContent = currentValue + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }

            requestAnimationFrame(updateCounter);
        });
    }

    function checkScroll() {
        const sectionTop = countSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            animateCounters();
            window.removeEventListener('scroll', checkScroll);
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
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

