document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll('.cardx');

cards.forEach((card) => {
  const arrowSvg = card.querySelector('.arrow-svg');
  const yellowLine = card.querySelector('.yellow-line'); 
  const cardTitle = card.querySelector('.card-title h2'); 
  const cardParagraph = card.querySelector('.cards-2 p'); 

  card.addEventListener('mouseenter', () => {
    // Animate the card and SVG on hover
    gsap.to(card, {
      backgroundColor: "#222222",
      borderTopRightRadius: 0,
      borderTopLeftRadius: "71px",
      borderBottomLeftRadius: "71px",
      borderBottomRightRadius: "71px",
      yPercent: -15,
      scale: 1.1,
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.13) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      ease: "power1.inOut",
      duration: 0.4,
    scrub: 3,

    });

    if (arrowSvg) {
      gsap.to(arrowSvg, {
        fill: "#ffffff", // Change the fill color to white
        ease: "power1.inOut",
        duration: 0.4,
    scrub: 3,

      });
    }

    if (yellowLine) {
      gsap.to(yellowLine, {
        width: "85%", // Animate width from 0% to 100%
        backgroundColor: "#fff355", // Change the background color to yellow
        transformOrigin: "left center", // Start the animation from the left
        ease: "power1.inOut",
        duration: 1.4,
    scrub: 3,

      });
    }

    if (cardTitle) {
      gsap.to(cardTitle, {
        color: "#fff", // Change the background color to yellow
        ease: "power1.inOut",
        duration: 0.4,
    scrub: 3,

      });
    }

    if (cardParagraph) {
      gsap.to(cardParagraph, {
       fontSize: "24px",
    fontWeight: "400",
    backgroundImage:"radial-gradient(circle, rgba(153,206,255,1) 0%, rgba(0,132,255,1) 100%)"
,       
webkitBackgroundClip :"text",
webkitTextFillColor : "transparent",
 ease: "power1.inOut",
        duration: 0.4,
    scrub: 3,

      });
    }
  });

  card.addEventListener('mouseleave', () => {
    // Revert the card and SVG to original state
    gsap.to(card, {
      backgroundColor: "transparent",
      borderTopRightRadius: 0,
      borderTopLeftRadius: "71px",
      borderBottomLeftRadius: "71px",
      borderBottomRightRadius: "71px",
    scrub: 3,
      yPercent: 0,
      scale: 1,
      boxShadow: "none",
      ease: "power1.inOut",
      duration: 0.4
    });

    if (arrowSvg) {
      gsap.to(arrowSvg, {
        fill: "#222", // Reset the fill color to its original state
        ease: "power1.inOut",
    scrub: 3,
        duration: 0.4
      });
    }

    if (yellowLine) {
      gsap.to(yellowLine, {
        width: "0%", // Reset the width to 0%
        backgroundColor: "#fff355", // Change the background color back to #222
        transformOrigin: "left center", // Ensure the reset animation also starts from the left
        ease: "power1.inOut",
    scrub: 3,
        duration: 1.0
      });
    }

    if (cardTitle) {
      gsap.to(cardTitle, {
        color: "#222", // Change the background color to yellow
        ease: "power1.inOut",
    scrub: 3,
        duration: 0.4
      });
    }

    if (cardParagraph) {
      gsap.to(cardParagraph, {
       fontSize: "24px",
    fontWeight: "400",
    backgroundImage:"radial-gradient(circle, #0084FF 0%, #0084FF 100%)",
webkitBackgroundClip :"text",
webkitTextFillColor : "transparent",
 ease: "power1.inOut",
        duration: 0.4,
    scrub: 3,
      });
    }

  });
});


  // Create a timeline
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#sect-1",
      start: "15% 25%",
      end: "+=250px",
      scrub: 3,
    },
  });

  // Change background color of the element
  tl.from("#sect-2", {
    duration: 0.5,
    backgroundColor: "#121212",
    ease: "power2.out",
  });

  tl.to(
    "#sect-2 span",
    {
      duration: 0.5,
      color: "#424242",
      ease: "power2.out",
    },
    0
  );
  tl.to(
    "#sect-2 p",
    {
      duration: 0.5,
      color: "#0084FF",
      ease: "power2.out",
    },
    0
  );
});

var newTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#sect-3",
    start: "-10% 20%",
    end: "+=400px",
    scrub: 3,
  },
});

newTl2.to(
  ".sect-3-container",
  {
    duration: 1.0,
    borderTopRightRadius: 700,
    borderTopLeftRadius: 700,
    borderTop:"2px solid #000",
    borderLeft:"2px solid #000",
    borderRight:"2px solid #000",
    ease: "power2.out",
  },
  0
);

// Update for GSAP 3.x and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

var windowSize = $(window).width();

$(window).resize(function () {
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
      scroller: "body",
      start: "top top",
      end: "bottom 30%",
      pin: true,
      scrub: 3,
      toggleClass: "showing",
      markers: false,
    },
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
      markers: false,
    },
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
      markers: false,
    },
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
      markers: false,
    },
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
    },
  });
}

// Detect scroll position for email-showing class
var documentHeight = document.body.clientHeight;
var windowHeight = $(window).height() * 1.5;
var bottomPoint = documentHeight - windowHeight;

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();

  if (scrollTop > bottomPoint) {
    $("#four a").addClass("email-showing");
  } else {
    $("#four a").removeClass("email-showing");
  }
});

///////////////////////

gsap.registerPlugin(ScrollTrigger);

const texts = document.querySelectorAll(".text-item");
const images = document.querySelectorAll(".image-item");

// Pin the text section so it stays fixed during scrolling
ScrollTrigger.create({
  trigger: ".text-section",
  start: "top top",
  end: "+=3000", // Adjust this for how long the pinning should last
  pin: true,
  pinSpacing: true,
});

// Loop through each text and create animations
texts.forEach((text, index) => {
  const image = images[index];

  // Text size animation
  gsap.fromTo(text, {
    fontSize: "5px"
  }, {
    fontSize: "56px",
    scrollTrigger: {
      trigger: text,
      start: "top center",
      end: "bottom center",
      scrub: true,
      toggleActions: "play reverse play reverse",
    }
  });

  // Image comes up animation
  gsap.fromTo(image, {
    bottom: '-100%',
    opacity: 0,
  }, {
    bottom: '50%',
    opacity: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: text,
      start: "top center",
      end: "bottom center",
      scrub: true,
      toggleActions: "play reverse play reverse",
    }
  });
});
