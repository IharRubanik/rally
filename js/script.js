window.onload = function () {
  let body = document.querySelector("body"),
    wrapper = document.querySelector(".wrapper"),
    preloader = document.querySelector("#preloader");
  let screenHeight = window.screen.height,
    video = document.querySelector("#video"),
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
    videoWrapper = document.querySelector(".video__wrapper"),
    slides = document.querySelectorAll(".utility__slide"),
    slidesText = document.querySelectorAll(".slider__text"),
    verticalContent = document.querySelector(".vertical-content"),
    roadmap = document.querySelector(".roadmap"),
    slideWrapper = document.querySelector(".slide-wrapper"),
    autoContainer = document.querySelector(".auto__container"),
    circleSlide = document.querySelectorAll(".circle-slide"),
    acordeonItem = document.querySelectorAll(".acordeon-item"),
    itemText = document.querySelectorAll(".item-text"),
    itemTextTitle = document.querySelectorAll(".item-text-title"),
    auto = document.querySelector(".auto"),
    a = 3,
    b = 3.5,
    c = 4,
    d = 6,
    f = 7,
    g = 8,
    h = 9,
    k = 10,
    l = 11;
  const mediaQuery1024 = window.matchMedia(
      "only screen and (max-width: 1280px)"
    ),
    mediaQuery768 = window.matchMedia("only screen and (max-width: 860px)");

  if (mediaQuery1024.matches) {
    autoContainer.classList.remove("right");
    auto.classList.remove("right");
    a = 5;
    b = 6;
    c = 7;
  }
  if (mediaQuery768.matches) {
    video.play();
    a = 2.5;
    b = 3;
    c = 3.5;
  }

  // preloader

  setTimeout(() => {
    body.style.overflow = "visible";
    wrapper.classList.remove("preloader");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }, 2000);

  // resize
  window.addEventListener("resize", function () {
    screenHeight = window.screen.height;
  });

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
    if (scrollTop >= screenHeight * a) {
      verticalContent.classList.add("step-one");
    } else {
      verticalContent.classList.remove("step-one");
    }

    if (scrollTop >= screenHeight * b) {
      roadmap.classList.add("step-one");
    } else {
      roadmap.classList.remove("step-one");
    }
    if (scrollTop >= screenHeight * c) {
      roadmap.classList.add("step-two");
      roadmap.classList.remove("step-one");
    } else {
      roadmap.classList.remove("step-two");
    }

    if (window.innerWidth >= 1281) {
      if (scrollTop >= screenHeight * d) {
        slideWrapper.classList.add("one");
        autoContainer.classList.replace("right", "left");
        addClacc(1);
      } else {
        slideWrapper.classList.remove("one");
        autoContainer.classList.replace("left", "right");
        addClacc(0);
      }
      if (scrollTop >= screenHeight * f) {
        slideWrapper.classList.add("two");
        autoContainer.classList.replace("left", "right");
        addClacc(2);
      } else {
        slideWrapper.classList.remove("two");
      }
      if (scrollTop >= screenHeight * g) {
        slideWrapper.classList.add("three");
        autoContainer.classList.replace("right", "left");
        addClacc(3);
      } else {
        slideWrapper.classList.remove("three");
      }
      if (scrollTop >= screenHeight * h) {
        slideWrapper.classList.add("four");
        autoContainer.classList.replace("left", "right");
        addClacc(4);
      } else {
        slideWrapper.classList.remove("four");
      }
      if (scrollTop >= screenHeight * k) {
        slideWrapper.classList.add("five");
        autoContainer.classList.replace("right", "left");
        addClacc(5);
      } else {
        slideWrapper.classList.remove("five");
      }
      if (scrollTop >= screenHeight * l) {
        slideWrapper.classList.add("six");
        autoContainer.classList.replace("left", "right");
        addClacc(6);
      } else {
        slideWrapper.classList.remove("six");
      }
    }
  };

  function addClacc(slide) {
    for (let i = 0; i < circleSlide.length; i++) {
      circleSlide[i].classList.remove("active");
    }
    circleSlide[slide].classList.add("active");
  }

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

  let prevBtn = document.querySelector(".button-prev"),
    nextBtn = document.querySelector(".button-next"),
    firstNumber = document.querySelector("#first-number"),
    lastNumber = document.querySelector("#last-number");

  // Set the initial slide index
  let slideIndex = 1;

  // Add event listeners to the previous and next buttons
  prevBtn.addEventListener("click", function () {
    showSlide((slideIndex -= 1));
  });
  nextBtn.addEventListener("click", function () {
    showSlide((slideIndex += 1));
  });

  // Function to show a specific slide
  function showSlide(n) {
    let i;

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
      slides[i].classList.remove("noactive");
      slidesText[i].classList.remove("active");
      slidesText[i].classList.remove("noactive");

      if (slides.length <= 9) {
        lastNumber.innerHTML = "/ 0" + slides.length;
      } else {
        lastNumber.innerHTML = "/" + slides.length;
      }
      if (slideIndex <= 9) {
        firstNumber.innerHTML = "0" + slideIndex;
      } else {
        firstNumber.innerHTML = slideIndex;
      }
    }

    // Show the current slide
    slides[slideIndex - 1].classList.add("active");
    slidesText[slideIndex - 1].classList.add("active");
    if (slideIndex >= 2) {
      slides[slideIndex - 2].classList.add("noactive");
      slidesText[slideIndex - 2].classList.add("noactive");
    } else {
      slides[i - 1].classList.add("noactive");
      slidesText[i - 1].classList.add("noactive");
    }
  }

  showSlide();

  // Road slider
  if (window.innerWidth <= 1280) {
    const nextBtn2 = document.querySelector(".button-next2"),
      prevBtn2 = document.querySelector(".button-prev2");
    let roadSlide = document.querySelectorAll(".road-slide"),
      translateX = 0;
    nextBtn2.addEventListener("click", nextRoadSlide);
    prevBtn2.addEventListener("click", prevRoadSlide);

    function nextRoadSlide() {
      if (translateX === -(roadSlide.length - 1) * 100) {
        return;
      }
      translateX -= 100;
      slideWrapper.style.transform = `translateX(${translateX}%)`;
      addClacc(-translateX / 100);
    }
    function prevRoadSlide() {
      if (translateX === 0) {
        return;
      }
      translateX += 100;
      slideWrapper.style.transform = `translateX(${translateX}%)`;
      addClacc(-translateX / 100);
    }

    // color click
    let button = document.querySelectorAll(".button");
    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", function () {
        button[i].style.background = "#7732EA";
        setTimeout(() => {
          button[i].style.background = "none";
        }, 300);
      });
    }
  }

  // Swipe
  const sliders = document.querySelectorAll(".slider");
  let startX, startY;
  sliders.forEach((slider) => {
    slider.addEventListener("touchstart", function (e) {
      startX = e.changedTouches[0].pageX;
      startY = e.changedTouches[0].pageY;
    });

    slider.addEventListener("touchmove", function (e) {
      const distX = e.changedTouches[0].pageX - startX;
      const distY = e.changedTouches[0].pageY - startY;
      if (Math.abs(distX) > Math.abs(distY)) {
        e.preventDefault();
      }
    });

    slider.addEventListener("touchend", function (e) {
      const distX = e.changedTouches[0].pageX - startX;
      const distY = e.changedTouches[0].pageY - startY;
      if (Math.abs(distX) > Math.abs(distY)) {
        if (distX > 0) {
          if (slider.getAttribute("data-slider-id") === "slider-1") {
            showSlide((slideIndex -= 1));
          }
          if (slider.getAttribute("data-slider-id") === "slider-2") {
            prevRoadSlide();
          }
        } else {
          if (slider.getAttribute("data-slider-id") === "slider-1") {
            showSlide((slideIndex += 1));
          }
          if (slider.getAttribute("data-slider-id") === "slider-2") {
            nextRoadSlide();
          }
        }
      }
    });
  });

  // acordeon

  if (acordeonItem) {
    for (let i = 0; i < acordeonItem.length; i++) {
      let style = getComputedStyle(itemText[i]);
      let padding = Number(style.paddingBottom.replace(/[^0-9.]/g, ""));
      acordeonItem[i].addEventListener("click", function (e) {
        if (acordeonItem[i].classList.contains("active")) {
          acordeonItem[i].style.height =
            itemTextTitle[i].scrollHeight + padding * 2 + "px";
          acordeonItem[i].classList.remove("active");
        } else {
          acordeonItem[i].style.height = itemText[i].scrollHeight + "px";
          acordeonItem[i].classList.add("active");
          removeAccordion(e.currentTarget);
        }
      });
    }
    function removeAccordion(item) {
      for (let i = 0; i < acordeonItem.length; i++) {
        let style = getComputedStyle(itemText[i]);
        let padding = Number(style.paddingBottom.replace(/[^0-9.]/g, ""));
        if (item !== acordeonItem[i]) {
          acordeonItem[i].classList.remove("active");
          acordeonItem[i].style.height =
            itemTextTitle[i].scrollHeight + padding * 2 + "px";
        }
      }
    }
    removeAccordion();
  }
};
