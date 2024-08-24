document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
  // gsap.from("#lll", {
  //   scrollTrigger: {
  //     trigger: "#section-3",
  //     start: "bottom center",
  //     end: "+=250px",
  //     scrub: 3,
  //     markers:true,
  //   }, 
  //   duration: 1.5,
  //   backgroundColor: "#121212",
  //   ease: "power2.out",
  // });
  gsap.registerPlugin(ScrollTrigger);

// Create a timeline
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#sect-1",
    start: "20% 25%",
    end: "+=250px",
    scrub: 3,
    // markers: true, // Enable markers for debugging; set to false to hide them
  }
});

// Change background color of the element
tl.from("#lll", {
  duration: 0.5,
  backgroundColor: "#121212",
  ease: "power2.out"
});

// Change text color of a span inside the element
tl.to("#lll span", {
  duration: 0.5,
  color: "#424242",  // Change this to your desired color
  ease: "power2.out"
}, 0); // The 0 here makes sure the text color animation starts at the same time as the background color change
tl.to("#lll p", {
  duration: 0.5,
  color: "#0084FF",  // Change this to your desired color
  ease: "power2.out"
}, 0); // The 0 here makes sure the text color animation starts at the same time as the background color change

 });


// Update for GSAP 3.x and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

var windowSize = $(window).width();

$(window).resize(function() {
  windowSize = $(window).width();
});

if (windowSize > 767) {

  // Zoom animation for section-3
  var zoomHeader = gsap.to("#section-3", {
    scale: 35,
    x: 900,
    y: 900,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: "#section-3",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 3,
      toggleClass: "showing",
      markers: false // Add true to visualize ScrollTrigger markers
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
