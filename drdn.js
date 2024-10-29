// script.js
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        // Cek apakah elemen berada dalam viewport
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
            element.classList.add('show'); // Tambahkan kelas show jika elemen dalam viewport
        } else {
            element.classList.remove('show'); // Hapus kelas show jika elemen di luar viewport
        }
    });
}

// Panggil fungsi saat halaman dimuat untuk elemen yang ada di viewport langsung muncul
window.addEventListener('load', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('mouseenter', () => {
    dropdownContent.classList.remove('hide'); // Tampilkan dropdown
});

dropdown.addEventListener('mouseleave', () => {
    dropdownContent.classList.add('hide'); // Sembunyikan dropdown
});
