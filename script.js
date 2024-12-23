document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
        e.preventDefault();
        const item = this.closest('.update-item');
        const content = item.querySelector('.content');
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.textContent = 'Selengkapnya';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            this.textContent = 'Tutup';
        }
        });
    });
    // Daftar elemen statistik dan nilai akhirnya
    var stats = [
        { id: 'stat1', endValue: 3919 },
        { id: 'stat2', endValue: 13 },
        { id: 'stat3', endValue: 18314 },
        { id: 'stat4', endValue: 22919 }
    ];

    // Fungsi untuk menganimasikan angka
    function animateValue(id, start, end, duration) {
        var obj = document.getElementById(id);
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, start, end - start, duration);
            obj.innerHTML = Math.round(run).toLocaleString();
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                obj.innerHTML = end.toLocaleString();
            }
        }

        // Fungsi easing untuk animasi yang lebih menarik
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Mulai animasi untuk semua statistik
    stats.forEach(function(stat) {
        animateValue(stat.id, 0, stat.endValue, 1500); // Durasi 1.5 detik
    });
});

function updateFileName() {
    const fileInput = document.getElementById('cv');
    const fileNameDisplay = document.getElementById('file-name');
    
    // Memeriksa apakah ada file yang dipilih
    if (fileInput.files.length > 0) {
        // Mengubah teks menjadi nama file yang diunggah
        fileNameDisplay.textContent = fileInput.files[0].name; 
    } else {
        // Jika tidak ada file yang dipilih, tampilkan pesan default
        fileNameDisplay.textContent = 'Tidak ada file yang dipilih'; 
    }
}