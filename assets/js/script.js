// PRTICULAS BANNER
particlesJS("particles-js", {
  "particles": {
    // cantidad de particulas
    "number": { "value": 800, "density": { "enable": false, "value_area": 5524 } },
    "color": { "value": "#EBECE9" },
    "shape": { "type": "star" },
    "opacity": { "value": 1, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } },
    //tamaño particulas
    "size": { "value": 1, "random": true, "anim": { "enable": true, "speed": 14, "size_min": 0, "sync": false } },
    "line_linked": { "enable": false },
    "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true }
  },
  "retina_detect": true
});


//cinta de lenguajes
document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.querySelector('.flow_banner');
  const list = document.querySelector('.flow_banner .list');
  const speed = 30; // píxeles por segundo

  // Duplicar la lista para el loop continuo
  const clone = list.cloneNode(true);
  wrap.appendChild(clone);

  let wrapWidth = '';
  let listWidth = '';

  flowBannerAct();

  let oldWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';

  window.addEventListener('resize', () => {
    const newWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
    if (newWChk !== oldWChk) {
      oldWChk = newWChk;
      flowBannerAct();
    }
  });

  function flowBannerAct() {
    if (wrapWidth !== '') {
      wrap.querySelectorAll('.list').forEach(el => el.style.animation = 'none');
      wrap.querySelectorAll('.list:nth-child(n+3)').forEach(el => el.remove());
    }

    wrapWidth = wrap.offsetWidth;
    listWidth = list.offsetWidth;

    if (listWidth < wrapWidth) {
      const listCount = Math.ceil(wrapWidth * 2 / listWidth);
      for (let i = 2; i < listCount; i++) {
        wrap.appendChild(clone.cloneNode(true));
      }
    }

    wrap.querySelectorAll('.list').forEach(el => {
      el.style.animation = `${listWidth / speed}s linear infinite flowRolling`;
    });
  }
});

const toggler = document.getElementById('cpToggler');
const menu = document.getElementById('cpMobileMenu');

toggler?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggler.classList.toggle('open', open);
  toggler.setAttribute('aria-expanded', open);
});


AOS.init({
  once: false, // 👈 esto es la clave
  duration: 800,
  easing: 'ease-out'
});