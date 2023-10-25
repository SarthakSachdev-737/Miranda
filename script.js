
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();

tl.to("#page1",{
    y:"110vh",
    duration: 0,
    scale:0.5
})

tl.to("#page1",{
    y:"-205vh",
    duration:1,
    delay:0.5
})

tl.to("#page1",{
    rotate: -360 ,
    y:"0vh",
    scale: 1,
    delay:1,
    duration:1
})
