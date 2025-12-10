gsap.set(".bannerred", { perspective: 800 });
gsap.set(".perspective-animation", { display: 'block' });
gsap.set("img", { display: 'block' });
gsap.set(".switch", { display: 'block' });

gsap.from('.bannerred', {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 1,
})
gsap.from('img', {
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

gsap.from('h1, h2',{
    y: -20,
    duration: 0.3,
    stagger: 0.2,
    opacity: 0,
})

gsap.from(".perspective-animation",
    {
        rotateX: 80,     // lying down
        y: -50,          // pushed downward
        opacity: 0,
        transformOrigin: "center bottom",
        duration: 0.5,
        delay: 0.3, 
    }
);