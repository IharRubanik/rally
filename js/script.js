window.onload = function () {
  let video = document.querySelector("#video"),
    muted = document.querySelector(".muted"),
    playPause = document.querySelector(".play-pause"),
    play = document.querySelector(".play"),
    pause = document.querySelector(".pause"),
    mutedOff = document.querySelector(".muted-off"),
    mutedOn = document.querySelector(".muted-on"),
    isVolume = false,
    isPlayPause = false,
    progress = document.querySelector("#progress"),
    welcomeBg = document.querySelector(".welcome-bg"),
    videoWrapper = document.querySelector(".video__wrapper");

  // player
  video.ontimeupdate = progressUpdate;
  progress.onclick = videoRewind;

  video.ontimeupdate = progressUpdate;
  progress.onclick = videoRewind;

  function progressUpdate() {
    let videoTime = video.duration;
    let current = video.currentTime;
    let min10 = Math.trunc(video.currentTime / 60 / 10);
    let min = Math.trunc(video.currentTime / 60);
    let sec10 = Math.trunc(video.currentTime / 10);
    let sec = Math.trunc(video.currentTime);
    progress.value = (current / videoTime) * 100;
    document.querySelector("#out").innerHTML =
      String(min10) + String(min) + ":" + String(sec10) + String(sec).slice(-1);
  }
  function videoRewind() {
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = (o / w) * 100;
    video.pause();
    video.currentTime = video.duration * (o / w);
    video.play();
  }

  playPause.addEventListener("click", playPauseOnOff);

  function playPauseOnOff() {
    if (isPlayPause) {
      video.pause();
      playPause.classList.remove("active");
      play.style.display = "block";
      pause.style.display = "none";
      isPlayPause = false;
    } else {
      video.play();
      play.style.display = "none";
      pause.style.display = "block";
      playPause.classList.add("active");
      isPlayPause = true;
    }
  }

  //   (function () {
  //     var isPlayPause = false;
  //     playPause.addEventListener("click", function () {
  //       if (isPlayPause) {
  //         video.pause();
  //         playPause.classList.remove("active");
  //         play.style.display = "block";
  //         pause.style.display = "none";
  //         isPlayPause = false;
  //       } else {
  //         video.play();
  //         play.style.display = "none";
  //         pause.style.display = "block";
  //         playPause.classList.add("active");
  //         isPlayPause = true;
  //       }
  //     });
  //   })();

  muted.addEventListener("click", mutedOnOff);

  function mutedOnOff() {
    if (isVolume) {
      video.muted = 0;
      muted.classList.remove("active");
      mutedOff.style.display = "none";
      mutedOn.style.display = "block";
      isVolume = false;
    } else {
      video.muted = 100;
      muted.classList.add("active");
      mutedOff.style.display = "block";
      mutedOn.style.display = "none";
      isVolume = true;
    }
  }

  let flag = false;

  // scroll
  const screenHeight = window.screen.height;
  window.onscroll = function () {
    var scrollTop = window.pageYOffset
      ? window.pageYOffset
      : document.documentElement.scrollTop
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
    if (scrollTop >= screenHeight / 6) {
      welcomeBg.classList.add("active");
      videoWrapper.classList.add("active");
      videoWrapper.style.transition = "1s ease-in-out transform";
      if (!flag) {
        flag = true;
        muted.classList.add("active");
        mutedOff.style.display = "block";
        mutedOn.style.display = "none";
        isVolume = true;
        playPauseOnOff();
      }
    } else {
      welcomeBg.classList.remove("active");
      videoWrapper.classList.remove("active");
    }
  };

  //   colection-slide
  let colectionSlide1 = document.querySelectorAll(".colection-slide1");
  let colectionSlide2 = document.querySelectorAll(".colection-slide2");
  let colectionSlide3 = document.querySelectorAll(".colection-slide3");
  let colectionSlide4 = document.querySelectorAll(".colection-slide4");
  let colectionSlide5 = document.querySelectorAll(".colection-slide5");
  let colectionSlide6 = document.querySelectorAll(".colection-slide6");
  addClasses(colectionSlide1);
  addClasses(colectionSlide2);
  addClasses(colectionSlide3);
  addClasses(colectionSlide4);
  addClasses(colectionSlide5);
  addClasses(colectionSlide6);
  function addClasses(elements) {
    let i = 0;
    setInterval(function () {
      elements[i].classList.add("active");
      if (i > 0) {
        elements[i - 1].classList.remove("active");
        elements[i - 1].classList.add("noactive");
        elements[elements.length - 1].classList.remove("noactive");
      }
      if (i > 1) {
        elements[i - 2].classList.remove("noactive");
      }
      if (i == 0) {
        elements[elements.length - 1].classList.replace("active", "noactive");
        elements[elements.length - 2].classList.remove("noactive");
      }
      i = (i + 1) % elements.length;
    }, 2000);
  }

  // utility__slider

  let slider = document.querySelector(".utility__slider"),
    prevBtn = document.querySelector(".button-prev"),
    nextBtn = document.querySelector(".button-next"),
    firstNumber = document.querySelector("#first-number"),
    lastNumber = document.querySelector("#last-number");

  // Set the initial slide index
  var slideIndex = 1;

  // Show the first slide
  showSlide(slideIndex);

  // Add event listeners to the previous and next buttons
  prevBtn.addEventListener("click", function () {
    showSlide((slideIndex -= 1));
  });
  nextBtn.addEventListener("click", function () {
    showSlide((slideIndex += 1));
  });

  // Add event listeners to detect swipe gestures on the slider
  slider.addEventListener("touchstart", handleTouchStart, false);
  slider.addEventListener("touchmove", handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        showSlide((slideIndex += 1));
      } else {
        /* right swipe */
        showSlide((slideIndex -= 1));
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }

  // Function to show a specific slide
  function showSlide(n) {
    var i;
    var slides = document.querySelectorAll(".utility__slide");

    // Ensure that the slide index stays within the bounds of the slides array
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      slides[i].classList.add("noactive");
      if (i >= 1) {
        if (i >= 2) slides[i - 1].classList.remove("noactive");
      }

      if (slides.length <= 9) {
        lastNumber.innerHTML = "/0" + slides.length;
      }
      else{
        lastNumber.innerHTML = "/" + slides.length;
      }
      if(slideIndex <= 9) {
        firstNumber.innerHTML = "0" + slideIndex;
      }
      else{
        firstNumber.innerHTML = slideIndex;
      }
    }

    // Show the current slide
    slides[slideIndex - 1].classList.add("active");
    slides[slideIndex - 1].classList.remove("noactive");
  }
};
