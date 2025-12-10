gsap.from('.bannerred', {
    y: -20,
    duration: 0.5,
    opacity: 0,
    stagger: 1,
})
gsap.from('img', {
    top: '50%', 
    left: '50%',
    opacity: 0,
    // duration: 0.5,
    scrollTrigger: {
        trigger: '.bannerred',
        scroller: 'body',
        scrub: 1,
        pin: true,
        // markers: true,

    }

})
gsap.from('h1, h2',{
    y: -20,
    duration: 0.3,
    stagger: 0.1,
    opacity: 0,
})