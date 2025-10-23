document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen navigasi dan tombol toggle
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');

    // Tambahkan event listener untuk tombol toggle
    menuToggle.addEventListener('click', () => {
        // Toggle class 'active' pada elemen nav
        nav.classList.toggle('active');
    });

    // Opsional: Tutup menu saat link diklik (untuk navigasi yang lancar)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // Anda bisa menambahkan fungsionalitas JavaScript lainnya di sini,
    // seperti animasi scroll, filter proyek, atau validasi formulir.
});
