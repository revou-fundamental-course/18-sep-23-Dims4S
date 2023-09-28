let currentSlide = 0;
const slides = document.querySelectorAll(".post img");

function showSlide(n) {
  slides[currentSlide].style.opacity = 0; // Sembunyikan gambar saat ini
  currentSlide = (n + slides.length) % slides.length; // Mengganti indeks gambar
  slides[currentSlide].style.opacity = 1; // Tampilkan gambar baru
}

function changePost(n) {
  showSlide(currentSlide + n);
}

// Menampilkan gambar pertama saat halaman dimuat
showSlide(currentSlide);
        // Tampilkan postingan pertama saat halaman dimuat
        showPost(currentPost);
        function validateForm() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var validationMessage = document.getElementById("validationMessage");
        
            if (name === "" || email === "") {
                validationMessage.innerHTML = "Semua field harus diisi.";
                validationMessage.style.display = "block"; // Menampilkan pesan validasi
                return false; // Menghentikan proses submit jika ada field yang kosong
            }
        
            validationMessage.innerHTML = ""; // Menghapus pesan validasi jika semua field diisi
            validationMessage.style.display = "none"; // Menyembunyikan pesan validasi
            return true; // Memungkinkan form untuk disubmit jika semua field diisi
        }