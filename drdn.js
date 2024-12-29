// Fungsi untuk menambahkan animasi fade-in saat elemen muncul di viewport
function fadeInOnScroll() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    // Lewati elemen yang sudah diberi kelas 'show' (sudah tampil)
    if (element.classList.contains("show")) {
      return;
    }

    const rect = element.getBoundingClientRect();

    // Cek apakah elemen berada dalam viewport
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.classList.add("show"); // Tambahkan kelas show jika elemen dalam viewport
    }
  });
}

// Panggil fungsi saat halaman dimuat untuk elemen yang ada di viewport langsung muncul
window.addEventListener("load", fadeInOnScroll);
window.addEventListener("scroll", fadeInOnScroll);

// Dropdown menu tetap berfungsi
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("mouseenter", () => {
  dropdownContent.classList.remove("hide"); // Tampilkan dropdown
});

dropdown.addEventListener("mouseleave", () => {
  dropdownContent.classList.add("hide"); // Sembunyikan dropdown
});
