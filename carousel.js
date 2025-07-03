// Organisasi Slide
  const orgSlides = document.querySelectorAll(".org-slide");
  const orgPrev = document.querySelector(".org-prev");
  const orgNext = document.querySelector(".org-next");
  let orgIndex = 0;

  function showOrgSlide(i) {
    orgSlides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === i);
    });
  }

  orgPrev.onclick = () => {
    orgIndex = (orgIndex - 1 + orgSlides.length) % orgSlides.length;
    showOrgSlide(orgIndex);
  };

  orgNext.onclick = () => {
    orgIndex = (orgIndex + 1) % orgSlides.length;
    showOrgSlide(orgIndex);
  };

  // Gambar Carousel per Organisasi
  document.querySelectorAll(".org-slide").forEach((slide) => {
    const imgs = slide.querySelectorAll(".org-img");
    const dots = slide.querySelectorAll(".img-dot");
    const prevBtn = slide.querySelector(".img-prev");
    const nextBtn = slide.querySelector(".img-next");

    let imgIndex = 0;

    function showImg(idx) {
      imgs.forEach((img, i) => {
        img.classList.toggle("active", i === idx);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === idx);
      });
    }

    prevBtn.onclick = () => {
      imgIndex = (imgIndex - 1 + imgs.length) % imgs.length;
      showImg(imgIndex);
    };

    nextBtn.onclick = () => {
      imgIndex = (imgIndex + 1) % imgs.length;
      showImg(imgIndex);
    };

    dots.forEach((dot, idx) => {
      dot.onclick = () => {
        imgIndex = idx;
        showImg(imgIndex);
      };
    });
  });