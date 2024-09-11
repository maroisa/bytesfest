// ketika melakukan scrolling, beri background pada navigation
const navbar = document.querySelector(".navigation");
const mybutton = document.getElementById("btn-back-to-top");
const modalSubmission = document.getElementById("modal-submission");
const modalDaftar = document.getElementById("modal-daftar");

const countDownDay = document.getElementById("countDownDay");
const countDownHour = document.getElementById("countDownHour");
const countDownMinute = document.getElementById("countDownMinute");
const countDownSecond = document.getElementById("countDownSecond");

const linkLomba = {
  web: {
    registrasi: "https://docs.google.com/forms/d/e/1FAIpQLSdWc_JHOPzmnIUEacKaEK_l0Vkw4j1Hy_eMFIpUwK_r9DTVow/viewform?usp=sf_link",
    konfirmasi: "https://wa.link/4c2j2s",
	guidebook: "https://uns.id/GuidebookDesweb"
  },
  poster: {
    registrasi: "https://docs.google.com/forms/d/e/1FAIpQLScA_7TAQhJbWoqjqhqjJ9J0QffCGRxUBYvWJ0XcLnNeoputNw/viewform",
    konfirmasi: "https://wa.link/m25f2u",
	guidebook: "https://uns.id/GuidebookPoster"
  },
  ml: {
    registrasi: "https://forms.gle/aV3aXkwNaenCXpb5A",
    konfirmasi: "https://bit.ly/KonfirmasiLombaMobileLegends2024",
	guidebook: "https://drive.google.com/file/d/1XhfR344QbYPGedvW_OQ4TcTrIT69GYIi/view?usp=drivesdk"
  },
  futsal: {
    registrasi: "https://docs.google.com/forms/d/1k-4EXf101HpOab8kxf2tTcCjv413QH5Wq-krAclGDkc/viewform?edit_requested=true",
    konfirmasi: "https://bit.ly/4c0pHsj",
	guidebook: "https://uns.id/GuidebookFutsal"
  },
  
};

const linkSubmission = {
  poster: "https://forms.gle/RK4tCXdGuhuqiUHw9",
  desainWeb: "https://forms.gle/DqNGqZbCmWnAjm2f7",
};

window.onscroll = function () {
  scrollFunction();
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("navbar-scrolling");
  } else {
    navbar.classList.remove("navbar-scrolling");
  }
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.setProperty("display", "block", "important");
  } else {
    mybutton.style.setProperty("display", "none", "important");
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// init Swiper:
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 100,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  // autoplay: {
  // 	delay: 3000,
  // 	disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// navigation for mobile
let hamburgerMenu = document.querySelector("#hamburger");
let navigationMenu = document.querySelector("#navigation-menu");
let navigationMenuBg = navigationMenu.querySelector("ul");

// hamburger-line
const hamburgerLine1 = hamburgerMenu.querySelector("span:nth-child(1)");
const hamburgerLine2 = hamburgerMenu.querySelector("span:nth-child(2)");
const hamburgerLine3 = hamburgerMenu.querySelector("span:nth-child(3)");

hamburgerMenu.addEventListener("click", function () {
  setTimeout(() => {
    hamburgerLine1.classList.add("hamburger-line-1");
    hamburgerLine2.classList.add("hamburger-line-2");
    hamburgerLine3.classList.add("hamburger-line-3");
  }, 50);

  navigationMenu.classList.toggle("hidden");
  navigationMenu.classList.toggle("flex");
  setTimeout(() => {
    navigationMenu.classList.toggle("opacity-0");
    navigationMenu.classList.toggle("opacity-100");
    // setTimeout(() => {
    //   navigationMenuBg.classList.toggle("opacity-100");
    // }, 50);
  }, 100);
});

const countDownDate = new Date("Juli 30, 2024 00:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countDownDay.innerHTML = ("0" + days).slice(-2);
  countDownHour.innerHTML = ("0" + hours).slice(-2);
  countDownMinute.innerHTML = ("0" + minutes).slice(-2);
  countDownSecond.innerHTML = ("0" + seconds).slice(-2);

  if (distance < 0) {
    clearInterval(x);
    countDownDay.innerHTML = "00";
    countDownHour.innerHTML = "00";
    countDownMinute.innerHTML = "00";
    countDownSecond.innerHTML = "00";
  }
}, 1000);

const closeModal = () => {
  console.log("tes modal");
  modalDaftar.classList.toggle("opacity-100");
  modalDaftar.classList.toggle("opacity-0");
  setTimeout(() => {
    modalDaftar.classList.toggle("hidden");
  }, 300);
};

document.getElementById("backdrop").addEventListener("click", closeModal);
document.getElementById("close-button").addEventListener("click", closeModal);

const closeModalSubmission = () => {
  console.log("tes modal sub");
  modalSubmission.classList.toggle("opacity-100");
  modalSubmission.classList.toggle("opacity-0");
  setTimeout(() => {
    modalSubmission.classList.toggle("hidden");
  }, 300);
};

document
  .getElementById("backdrop-submission")
  .addEventListener("click", closeModalSubmission);
document
  .getElementById("close-button-submission")
  .addEventListener("click", closeModalSubmission);

  //const closeModalWebinar = () => {
	//console.log("tes modal sub");
	//modalWebinar.classList.toggle("opacity-100");
	//modalWebinar.classList.toggle("opacity-0");
	//setTimeout(() => {
	//  modalWebinar.classList.toggle("hidden");
	//}, 300);
  //};

  //document
  //.getElementById("backdrop-webinar")
  //.addEventListener("click", closeModalWebinar);

  //const closeModalRegistrasiWebinar = () => {
	//modalRegistrasiWebinar.classList.toggle("opacity-100");
	//modalRegistrasiWebinar.classList.toggle("opacity-0");
	//setTimeout(() => {
	//  modalRegistrasiWebinar.classList.toggle("hidden");
	//}, 300);
  //};

  //document
  //.getElementById("backdrop-registrasi-webinar")
  //.addEventListener("click", closeModalRegistrasiWebinar);
//document
  //.getElementById("close-button-registrasi-webinar")
  //.addEventListener("click", closeModalRegistrasiWebinar);

//function moreInfoWebinar() {
	//event.preventDefault();
  
	//modalWebinar.classList.toggle("hidden");
	//setTimeout(() => {
	 // modalWebinar.classList.toggle("opacity-0");
	 // modalWebinar.classList.toggle("opacity-100");
	//}, 100);
  //}

function goToGuidebook(lomba) {
	event.preventDefault();
	const link = linkLomba[lomba]['guidebook']
	if(link != "#") {
		window.open(link, "_blank");
	}
	
}

function daftarLomba(lomba) {
  event.preventDefault();

  console.log(linkLomba[lomba]);
  document
    .getElementById("btnRegistrasi")
    .setAttribute("href", linkLomba[lomba]["registrasi"]);
  document
    .getElementById("btnKonfirmasi")
    .setAttribute("href", linkLomba[lomba]["konfirmasi"]);
  modalDaftar.classList.toggle("hidden");
  setTimeout(() => {
    modalDaftar.classList.toggle("opacity-0");
    modalDaftar.classList.toggle("opacity-100");
  }, 100);
}

//function daftarWebinar() {
	//event.preventDefault();
  
	//modalRegistrasiWebinar.classList.toggle("hidden");
	//setTimeout(() => {
	  //modalRegistrasiWebinar.classList.toggle("opacity-0");
	  //modalRegistrasiWebinar.classList.toggle("opacity-100");
	//}, 100);
  //}

function submissionLomba() {
  event.preventDefault();
  document
    .getElementById("btnSubmissionPoster")
    .setAttribute("href", linkSubmission.poster);
  document
    .getElementById("btnSubmissionDesainWeb")
    .setAttribute("href", linkSubmission.desainWeb);
  modalSubmission.classList.toggle("hidden");
  setTimeout(() => {
    modalSubmission.classList.toggle("opacity-0");
    modalSubmission.classList.toggle("opacity-100");
  }, 100);
}

// SCRIPT DI BAWAH INI UNTUK LOAD ANIMATION START

// anime-js
// loading - animation - script

loadingText = document.querySelector(".loading-value");
loadingContainer = document.querySelector(".loading-container");
loadingValue = {
  progress: 0,
};

const loadingTimeline = anime.timeline({});

anime({
  targets: loadingValue,
  progress: 100,
  easing: "easeInQuad",
  duration: 800, // loading-duration
  round: 1,
  update: () => {
    loadingText.innerHTML = loadingValue.progress;
    anime({
      targets: ".loading-line",
      width: loadingValue.progress + "%",
      duration: 0,
    });
  },
  complete: () => {
    loadingContainer.classList.add("hidden");
  },
});

const proudlyPresentContainer = document.querySelector(
  ".proudly-present-container"
);
const proudlyPresentTitle = document.querySelector(".proudly-present-title");
const proudlyPresentSubtitle = document.querySelector(
  ".proudly-present-subtitle"
);

setTimeout(() => {
  proudlyPresentContainer.classList.remove("opacity-0");
  proudlyPresentContainer.classList.add("opacity-100");
}, 900);

// proudly-present-appear
setTimeout(() => {
  proudlyPresentTitle.classList.remove("opacity-0");
  proudlyPresentTitle.classList.add("opacity-100");
}, 900);
setTimeout(() => {
  proudlyPresentSubtitle.classList.remove("opacity-0");
  proudlyPresentSubtitle.classList.add("opacity-100");
}, 900);

// proudly-present-disappear
setTimeout(() => {
  proudlyPresentTitle.classList.remove("opacity-100");
  proudlyPresentTitle.classList.add("opacity-0");
}, 2500);
setTimeout(() => {
  proudlyPresentSubtitle.classList.remove("opacity-100");
  proudlyPresentSubtitle.classList.add("opacity-0");
}, 2500);

setTimeout(() => {
  proudlyPresentContainer.classList.add("hidden");
}, 3200);

// bytefest-title-state
const bytesfestStartContainer = document.querySelector(
  ".bytesfest-start-container"
);
setTimeout(() => {
  bytesfestStartContainer.classList.remove("opacity-0");
  bytesfestStartContainer.classList.add("opacity-100");
}, 3200);

const backdropBg = document.querySelector(".backdrop-bg");

setTimeout(() => {
  backdropBg.classList.remove("hidden");
}, 3200);
setTimeout(() => {
  backdropBg.classList.remove("backdrop-blur-lg");
  backdropBg.classList.add("backdrop-blur-0");
}, 3500);

const startAnimationBg = document.querySelector(".start-animation-bg");
const lightBg = document.querySelector(".light-bg");
setTimeout(() => {
  startAnimationBg.classList.add("hidden");
  lightBg.classList.add("opacity-0");
}, 5500);

setTimeout(() => {
  lightBg.classList.add("hidden");
}, 6000);
