document.addEventListener("DOMContentLoaded", function () {
    const orgSlides = document.querySelectorAll('.org-slide');

    orgSlides.forEach(slide => {
      const images = slide.querySelectorAll('.org-img');
      const dots = slide.querySelectorAll('.img-dot');
      let index = 0;

      function showImage(i) {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        images[i].classList.add('active');
        dots[i].classList.add('active');
      }

      function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
      }

      // Mulai autoplay setiap 4 detik
      setInterval(nextImage, 3000);

      // Klik dot manual tetap jalan
      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          index = i;
          showImage(index);
        });
      });

      // Inisialisasi tampilan awal
      showImage(index);
    });
  });
