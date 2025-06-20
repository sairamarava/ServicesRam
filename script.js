// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  menuToggle.textContent = mainNav.classList.contains("active") ? "✕" : "☰";
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    if (mainNav.classList.contains("active")) {
      mainNav.classList.remove("active");
      menuToggle.textContent = "☰";
    }

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });
  });
});

// Scroll animations with GSAP and ScrollTrigger
window.addEventListener("DOMContentLoaded", () => {
  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animate service cards on scroll
  gsap.utils.toArray(".service-card").forEach((card, i) => {
    gsap.from(card, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      delay: i * 0.2,
    });
  });

  // Animate section titles
  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // About section animation
  gsap.from(".about-image", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".about-content", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  // Project cards animation
  gsap.utils.toArray(".project-card").forEach((card, i) => {
    gsap.from(card, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      delay: i * 0.2,
    });
  });

  // Contact form animation
  gsap.from(".contact-form", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});
// logo animation
const logo = document.querySelectorAll("#animatedLogo span");
const typeSound = document.getElementById("typeSound");

let index = 0;

function typeLetter() {
  // Reset all letters
  logo.forEach((span) => {
    span.style.opacity = "0";
    span.style.transform = "translateY(5px)";
  });

  // Animate each letter one-by-one
  const interval = setInterval(() => {
    if (index < logo.length) {
      logo[index].style.opacity = "1";
      logo[index].style.transform = "translateY(0)";
      typeSound.currentTime = 0;
      typeSound.play();
      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        index = 0;
        typeLetter(); // Restart loop
      }, 1500); // Wait a bit before repeating
    }
  }, 500); // 0.5s per letter
}

(function () {
  emailjs.init("40kmoHx8oh_fniBxF");
})();

const btn = document.getElementById("btn");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_1ypmxft";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert("Sent!");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });

window.addEventListener("DOMContentLoaded", typeLetter);

// Project box operations
const projects = [
  {
    title: "Portfolio Website",
    src: "src/videos/portfoliopage.mp4",
  },
  {
    title: "Sara AI ChatBot",
    src: "src/videos/sarai.mp4",
  },
  {
    title: "Personal Blog UI",
    src: "src/videos/ram writes.mp4",
  },
  {
    title:"Weather Tracking",
    src: "src/videos/weathertracking.mp4"
  },
  {
    title:"Movie Recommendation",
    src: "src/videos/movie rec.mp4"
  },
  {
    title:"Luxeira E-commerce Site",
    src: "src/videos/luxerira.mp4"
  },
  {
    title:"Foody - UI Design",
    src: "src/videos/foody.mp4"
  },
  {
    title:"Foody - Website",
    src: "src/videos/foody web.mp4"
  },
  {
    title:"Emotion Analysis Model",
    src: "src/videos/emotion.mp4"
  },
  {
    title:"Email Spam Classifier",
    src: "src/videos/email spam.mp4"
  },
  {
    title:"EduHub UI/UX Design",
    src: "src/videos/eduhubui.mp4"
  },
  {
    title:"Apex Mobiles UI",
    src: "src/videos/apex.mp4"
  },
  {
    title:"Alumni Connect UI/UX",
    src: "src/videos/alumniconn.mp4"
  }
];

let currentIndex = 0;
const videoEl = document.getElementById("video");
const titleEl = document.getElementById("title");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateSlide() {
  videoEl.style.opacity = 0;
  setTimeout(() => {
    videoEl.src = projects[currentIndex].src;
    titleEl.textContent = projects[currentIndex].title;
    videoEl.style.opacity = 1;
  }, 200);
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  updateSlide();
});

updateSlide();
