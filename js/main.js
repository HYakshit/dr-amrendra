// $(document).ready(function(){
//     function initializeCarousel() {
//         // Check window width
//         if ($(window).width() < 768) {
//             // If not initialized, initialize Slick
//             if (!$('.before-after-carousel ul, .media-carousel ul, .awards-carousel ul, .testimonials-carousel ul').hasClass('slick-initialized')) {
//                 $('.before-after-carousel ul, .media-carousel ul, .awards-carousel ul, .testimonials-carousel ul').slick({
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: true,
//                     dots: false,
//                     infinite: true,
//                 });
//             }
//         } else {
//             // If already initialized, destroy Slick
//             if ($('.before-after-carousel ul, .media-carousel ul, .awards-carousel ul, .testimonials-carousel ul').hasClass('slick-initialized')) {
//                 $('.before-after-carousel ul, .media-carousel ul, .awards-carousel ul, .testimonials-carousel ul').slick('unslick');
//             }
//         }
//     }

//     // Initialize on page load
//     initializeCarousel();

//     // Reinitialize on window resize
//     $(window).resize(function () {
//         initializeCarousel();
//     });

//     $(".cost-calculator-btn").on('click', function(e){
//         e.preventDefault();
//         $(".popup2, .overlay").show();
//     });

//     $('.overlay, .closeBtn').on('click', function(){
//         $(".popup2, .overlay, .popup1").hide();
//     })

//     $('.book-appointment').on('click', function(e) {
//         e.preventDefault();
//         var target = $(this.hash);

//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 800);
  
//       });

     

//     $(".show-more").click(function () {
//         const content = $(this).closest("li").find(".more-content").html(); 
//         $("#contentModal .modal-body").html(content);
//         $("#contentModal").fadeIn();
//     });

//     $(".close-btn").click(function () {
//         $("#contentModal").fadeOut();
//     });

//     $(window).click(function (e) {
//         if ($(e.target).is("#contentModal")) {
//             $("#contentModal").fadeOut(); // Hide modal
//         }
//     });

//     $("form").on("submit", function () {
//         $("#loader").show(); // Show the loader
//     });

//     $('.phoneNumber').on('input', function (event) { 
//         this.value = this.value.replace(/[^0-9]/g, '');
//     });

//     $(window).scroll(function () {
//         const body = $('body');
//         const isMobile = $(window).width() <= 768;
//         if (isMobile && $(this).scrollTop() > 500) {
//             body.addClass('sticky');
//         } else {
//             body.removeClass('sticky');
//         }
//     });
    
//     $('#grade-form').on('submit', function (e) {
//         $('.radio-option').removeClass('error');
//         $('#error-message').hide();
//         if (!$('input[name="grade"]:checked').length) {
//             e.preventDefault();
//             $('.radio-option').addClass('error');
//             $('#error-message').show();
//             $("#loader, .spinner").hide();
//         }
//     });

//     const videos = document.querySelectorAll('video');

//     // Loop through each video and add an event listener for play
//     videos.forEach(video => {
//         video.addEventListener('play', function() {
//             // Pause all other videos when one video starts playing
//             videos.forEach(otherVideo => {
//                 if (otherVideo !== video) {
//                     otherVideo.pause();
//                 }
//             });
//         });
//     });
// });

// // let currentSlide = 0;
// //         const slider = document.getElementById('slider');
// //         const slides = document.querySelectorAll('.slide');
// //         const totalSlides = slides.length;

// //         function navigate(direction) {
// //             currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
// //             updateSlider();
// //         }

// //         function updateSlider() {
// //             if (window.innerWidth < 768) {
// //                 slider.style.transform = `translateX(-${currentSlide * 100}%)`;
// //             }
// //         }

// //         // Reset transform on window resize
// //         window.addEventListener('resize', () => {
// //             if (window.innerWidth >= 768) {
// //                 slider.style.transform = 'none';
// //             } else {
// //                 updateSlider();
// //             }
// //         });


// //         let currentIndex = 0;

// // function updateCarousel() {
// //   const carousel = document.querySelector('.testimonials .inner-section ul');
// //   const videos = document.querySelectorAll('.testimonials .inner-section li');
// //   const videoWidth = videos[0].offsetWidth;

// //   carousel.style.transform = `translateX(-${currentIndex * videoWidth}px)`;
// // }

// // function nextVideo() {
// //   const videos = document.querySelectorAll('.testimonials .inner-section li');
// //   if (currentIndex < videos.length - 1) {
// //     currentIndex++;
// //     updateCarousel();
// //   }
// // }

// // function prevVideo() {
// //   if (currentIndex > 0) {
// //     currentIndex--;
// //     updateCarousel();
// //   }
// // }

// // // Ensure the carousel resets and works correctly on window resize
// // window.addEventListener('resize', updateCarousel);


    // Wait for the DOM to load before adding event listeners
    document.addEventListener('DOMContentLoaded', function () {
        // Get both buttons and the enquiry form
        const appointmentButton = document.querySelector('#Book_Appointment_Big_device');
        const appointmentButtonTwo = document.querySelector('.SmallNavBar-appointmentButton');
        const appointmentButtonThree = document.querySelector('.appointment-btn');
        
        const enquiryForm = document.getElementById('enquiry-form');
        
        // Add click event listener to the first button (SmallNavBar-appointmentButton)
        appointmentButton.addEventListener('click', function (event) {
            // Prevent the default button behavior
            event.preventDefault();
            
            // Scroll to the enquiry form with smooth scrolling
            enquiryForm.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
        
        // Add click event listener to the second button (NavBar-button)
        appointmentButtonTwo.addEventListener('click', function (event) {
            // Prevent the default button behavior
            event.preventDefault();
            
            // Scroll to the enquiry form with smooth scrolling
            enquiryForm.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });


        appointmentButtonThree.addEventListener('click', function (event) {
            // Prevent the default button behavior
            event.preventDefault();
            
            // Scroll to the enquiry form with smooth scrolling
            enquiryForm.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });
    

let currentSlide = 0;
const slider = document.querySelector(".vt-list");
const items = document.querySelectorAll(".vt-item");

function getItemsPerView() {
  if (window.innerWidth <= 576) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3;
}

function updateSlidePosition() {
  if (window.innerWidth <= 992) {
    const itemsPerView = getItemsPerView();
    if (window.innerWidth <= 576) {
      // For mobile: full width slides
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    } else {
      // For tablet: consider gap in calculation
      const slideWidth = 100 / itemsPerView;
      const gapPercent = ((30 * currentSlide) / slider.offsetWidth) * 100;
      slider.style.transform = `translateX(-${
        currentSlide * slideWidth + gapPercent
      }%)`;
    }
  } else {
    slider.style.transform = "none";
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlidePosition();
    updateArrowVisibility();
  }
}

function nextSlide() {
  const itemsPerView = getItemsPerView();
  if (currentSlide < items.length - itemsPerView) {
    currentSlide++;
    updateSlidePosition();
    updateArrowVisibility();
  }
}

function updateArrowVisibility() {
  const prevArrow = document.querySelector(".vt-nav-prev");
  const nextArrow = document.querySelector(".vt-nav-next");
  const itemsPerView = getItemsPerView();

  if (prevArrow && nextArrow) {
    prevArrow.style.opacity = currentSlide === 0 ? "0.5" : "1";
    nextArrow.style.opacity =
      currentSlide >= items.length - itemsPerView ? "0.5" : "1";
  }
}

// Handle window resize
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const itemsPerView = getItemsPerView();
    currentSlide = Math.min(currentSlide, items.length - itemsPerView);
    if (currentSlide < 0) currentSlide = 0;
    updateSlidePosition();
    updateArrowVisibility();
  }, 100);
});

// Touch events for mobile
let touchStart = 0;
let touchEnd = 0;

slider.addEventListener(
  "touchstart",
  (e) => {
    touchStart = e.touches[0].clientX;
  },
  { passive: true }
);

slider.addEventListener(
  "touchmove",
  (e) => {
    touchEnd = e.touches[0].clientX;
  },
  { passive: true }
);

slider.addEventListener("touchend", () => {
  if (window.innerWidth <= 992) {
    const swipeDistance = touchEnd - touchStart;
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  }
});

function handleVideoSlide() {
// Pause all videos when sliding
const videos = document.querySelectorAll('.vt-item video');
videos.forEach(video => {
video.pause();
});
}

// Modify the prevSlide and nextSlide functions to include video handling
function prevSlide() {
if (currentSlide > 0) {
handleVideoSlide();
currentSlide--;
updateSlidePosition();
updateArrowVisibility();
}
}

function nextSlide() {
const itemsPerView = getItemsPerView();
if (currentSlide < items.length - itemsPerView) {
handleVideoSlide();
currentSlide++;
updateSlidePosition();
updateArrowVisibility();
}
}

// Add event listener for video play
document.querySelectorAll('.vt-item video').forEach(video => {
video.addEventListener('play', function() {
// Pause all other videos when one starts playing
document.querySelectorAll('.vt-item video').forEach(otherVideo => {
if (otherVideo !== video) {
  otherVideo.pause();
}
});
});
});


// Initialize
updateSlidePosition();
updateArrowVisibility();






document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('.before-after-list');
    const items = document.querySelectorAll('.before-after-item');
    const prevButton = document.querySelector('.before-after-nav-prev');
    const nextButton = document.querySelector('.before-after-nav-next');
    let currentIndex = 0;

    function updateSlider() {
        const translateX = -currentIndex * 100;
        list.style.transform = `translateX(${translateX}%)`;
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateSlider();
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateSlider();
    }

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            showPrevSlide();
        } else if (e.key === 'ArrowRight') {
            showNextSlide();
        }
    });
});

