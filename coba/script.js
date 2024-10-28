// script.js
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-text');
  elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      
      // Cek apakah elemen berada di dalam viewport
      if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
          element.classList.add('show'); // Tampilkan teks jika elemen masuk viewport
      } else {
          element.classList.remove('show'); // Hilangkan teks jika elemen keluar dari viewport
      }
  });
}

window.addEventListener('scroll', animateOnScroll);
