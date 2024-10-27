// Ambil elemen tombol dropdown
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

// Tambahkan event listener untuk mengklik tombol
dropbtn.addEventListener('mouseover', function() {
    dropdownContent.classList.toggle('show'); // Menampilkan atau menyembunyikan konten
});

// Menyembunyikan dropdown jika pengguna mengklik di luar
window.addEventListener('mouseover', function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content')) {
        dropdownContent.classList.remove('show');
    }
});
