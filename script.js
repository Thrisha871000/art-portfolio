document.querySelectorAll('.ink-swiper').forEach(function (el) {
  new Swiper(el, {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: false,
    },

    
  });
});

const onceEls = document.querySelectorAll('.fade-section, .slide-up, .slide-left');
const repeatEls = document.querySelectorAll('.print-reveal');
const revealedOnce = new Set();

function checkReveals() {
  onceEls.forEach((el) => {
    if (revealedOnce.has(el)) return;
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (isVisible) {
      el.classList.add('visible');
      revealedOnce.add(el);
    }
  });

  repeatEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;
    if (isVisible) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkReveals);
window.addEventListener('resize', checkReveals);
checkReveals();