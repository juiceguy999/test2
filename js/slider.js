const shootsSlider = new Swiper('.shoots__slider', {
  loop: true,

  navigation: {
    nextEl: '.shoots__slider-btn--next',
    prevEl: '.shoots__slider-btn--prev',
  },
  on: {
    transitionStart: function(){
      
      const videos = document.querySelectorAll('.shoots__video');

      videos.forEach((video) => {
        video.pause();
      })
    },
    
    transitionEnd: function(){
      
      const activeIndex = this.activeIndex;
      const activeSlide = document.getElementsByClassName('shoots__slide')[activeIndex];
      const activeSlideVideo = activeSlide.getElementsByClassName('shoots__video')[0];
      activeSlideVideo.play();
    
    },
  
  }
});

const calendarSlider = new Swiper('.calendar__slider', {
  loop: true,

  navigation: {
    nextEl: '.calendar__slider-btn--next',
    prevEl: '.calendar__slider-btn--prev',
  },
  speed: 1,
  allowTouchMove: false
});

const gallerySlider = new Swiper('.gallery__slider', {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  grabCursor: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true
  },
  freeModeMomentum: false,
  speed: 5000
});