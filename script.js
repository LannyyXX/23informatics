document.addEventListener("DOMContentLoaded", () => {
  // Menambahkan animasi scroll ke bagian tertentu
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.add("fade-in");
  });

  // Mengatur animasi untuk galeri
  const galleryImages = document.querySelectorAll(".gallery img");
  galleryImages.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.1)";
      img.style.filter = "brightness(1.1)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
      img.style.filter = "brightness(1)";
    });
  });

  // Menambahkan efek scroll ke elemen tertentu
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Menambahkan efek smooth scroll pada navigasi
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Tambahkan event listener untuk link media sosial jika elemen ada
  const socialLink = document.getElementById("social-link");
  const socialMediaSection = document.getElementById("social-media");

  if (socialLink && socialMediaSection) {
    socialLink.addEventListener("click", function (e) {
      e.preventDefault();
      socialMediaSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  // Cek apakah variabel students dan studentListContainer ada sebelum digunakan
  const studentListContainer = document.getElementById("student-list");

  if (typeof students !== "undefined" && studentListContainer) {
    students.forEach((student) => {
      const studentItem = document.createElement("div");
      studentItem.classList.add("student-item");
      studentItem.innerHTML = `
        <img src="${student.image}" alt="${student.name}">
        <p>${student.name}</p>
      `;
      studentListContainer.appendChild(studentItem);
    });
  }
});
