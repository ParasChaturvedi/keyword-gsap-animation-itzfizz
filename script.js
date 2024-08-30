document.addEventListener("DOMContentLoaded", (event) => {

  gsap.registerPlugin(ScrollTrigger);

// Create a timeline
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#sect-1",
    start: "15% 25%",
    end: "+=250px",
    scrub: 3,
  }
});

// Change background color of the element
tl.from("#sect-2", {
  duration: 0.5,
  backgroundColor: "#121212",
  ease: "power2.out"
});

tl.to("#sect-2 span", {
  duration: 0.5,
  color: "#424242",
  ease: "power2.out"
}, 0); 
tl.to("#sect-2 p", {
  duration: 0.5,
  color: "#0084FF",  
  ease: "power2.out"
}, 0); 

 });

 var newTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#sect-3",
    start: "-10% 20%",
    end: "+=400px",
    scrub: 3,
  }
});

newTl2.to(".sect-3-container", {
  duration: 1.5,
 borderTopRightRadius:750,
 borderTopLeftRadius:750,
  ease: "power2.out"
}, 0);


// Update for GSAP 3.x and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

var windowSize = $(window).width();

$(window).resize(function() {
  windowSize = $(window).width();
});

if (windowSize > 767) {

  // Zoom animation for section-1
  var zoomHeader = gsap.to("#section-1", {
    scale: 35,
    x: 900,
    y: 900,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#section-1",
      scroller:"body",
      start: "top top",
      end: "bottom 30%",
      pin: true,
      scrub: 3,
      toggleClass: "showing",
      markers: false 
    }
  });


  // Zoom animation for scene one
  var zoomOne = gsap.to("#one", {
    scale: 35,
    x: 900,
    y: 900,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#one",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 3,
      toggleClass: "showing",
      markers: false
    }
  });

  // Zoom animation for scene two
  var zoomTwo = gsap.to("#two", {
    scale: 35,
    x: 900,
    y: 900,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#two",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 3,
      toggleClass: "showing",
      markers: false
    }
  });

  // Zoom animation for scene three
  var zoomThree = gsap.to("#three", {
    scale: 35,
    x: 900,
    y: 900,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#three",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 3,
      toggleClass: "showing",
      markers: false
    }
  });

  // Zoom animation for scene four
  var zoomFour = gsap.to("#four", {
    scale: 35,
    x: 900,
    y: 900,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#four",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 3,
      toggleClass: "showing",
      markers: false,
    }
  });
}

// Detect scroll position for email-showing class
var documentHeight = document.body.clientHeight;
var windowHeight = $(window).height() * 1.5;
var bottomPoint = documentHeight - windowHeight;

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();

  if (scrollTop > bottomPoint) {
    $('#four a').addClass('email-showing');
  } else {
    $('#four a').removeClass('email-showing');
  }
});
