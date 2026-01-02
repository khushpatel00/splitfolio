gsap.registerPlugin(ScrollToPlugin);
gsap.set(".bannerred", { perspective: 800 });
gsap.set(".perspective-animation", { display: 'block' });
gsap.set(".icon", { display: 'block' });
gsap.set(".switch", { display: 'block' });
setTimeout(() => {

    gsap.to(window, {
        scrollTo: 'body',
        duration: 0.1,
    })
}, 0)

gsap.from('.bannerred', {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 1,
})


gsap.from('.icon', {
    top: '50%',
    left: '50%',
    opacity: -0.1,
    scale: 0.8,
    // duration: 0.5,
    scrollTrigger: {
        trigger: '.bannerred',
        scroller: 'body',
        scrub: 1,
        pin: true,
        // markers: true,

    }

})

gsap.from('.switch', {
    y: -100,
    delay: 0.7,
})

gsap.from('h1, h2', {
    y: -20,
    duration: 0.3,
    opacity: 0,
})


// gsap.utils.toArray("h1, h2").forEach(el => {

//   gsap.from(el, {
//     y: -20,
//     opacity: 0,
//     duration: 0.3,
//     stagger: 0.2,
//     scrollTrigger: {
//       trigger: el,
//       start: "top 75%"
//     }
//   });

// });


gsap.from(".perspective-animation",
    {
        opacity: 0,
        rotateX: 80,     // lying down
        y: -50,           // pushed upward
        transformOrigin: "center bottom",
        duration: 0.5,
        delay: 0.3,
    }
);

// gsap.to('.floaticon', {
//     y: 5, 
//     delay: 1,     
//     duration: 0.5,
// })

function scrolltoAbout() {

    gsap.to(window, {
        scrollTo: "#about",
        duration: 1,
        ease: "power4.out"
    });
}

document.querySelector('#scrolltoabout').addEventListener('click', () => {
    scrolltoAbout();
}, true)