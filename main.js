/* ==========================================================================
   CYBERZILLA — main.js · GSAP animation suite · vanilla, no framework
   ========================================================================== */

// ── 0. Utilities ──────────────────────────────────────────────────────────

function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return [...(ctx || document).querySelectorAll(sel)]; }

const isMobile = () => window.innerWidth < 780;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── 1. GSAP + ScrollTrigger registration ──────────────────────────────────

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

// ── 2. Loading screen ─────────────────────────────────────────────────────

function runLoader() {
  const loader = $('#loader');
  if (!loader) return;

  const fill = $('.loader-bar-fill');
  const pct  = $('.loader-pct');
  const status = $('.loader-status');
  const lines = [
    'Initializing kernel...',
    'Loading asset pipeline...',
    'Mounting AI subsystems...',
    'Rendering grid mesh...',
    'All systems nominal.',
  ];

  let lineIdx = 0;
  const interval = setInterval(() => {
    if (status && lineIdx < lines.length) {
      status.textContent = lines[lineIdx++];
    }
  }, 380);

  const tl = gsap.timeline({
    onComplete: () => {
      clearInterval(interval);
      initSite();
    }
  });

  tl.to(fill, { width: '100%', duration: 1.9, ease: 'power2.inOut' })
    .to(pct, {
      textContent: 100,
      duration: 1.9,
      ease: 'power2.inOut',
      snap: { textContent: 1 },
      onUpdate() { if (pct) pct.textContent = Math.round(this.targets()[0]._gsap.textContent) + '%'; }
    }, '<')
    .to(loader, { yPercent: -100, duration: 0.7, ease: 'power3.inOut', delay: 0.3 })
    .set(loader, { display: 'none' });
}

// ── 3. Site init (runs after loader) ──────────────────────────────────────

function initSite() {
  setupCursor();
  setupNav();
  setupScrollProgress();
  setupHero();
  setupCards3D();
  setupMagnetic();
  setupScrollReveal();
  setupCounters();
  if (!isMobile()) setupMouseParallax();
}

// ── 4. Custom cursor ──────────────────────────────────────────────────────

function setupCursor() {
  if (reduceMotion || isMobile()) return;

  const ring = $('#cursor-ring');
  const dot  = $('#cursor-dot');
  if (!ring || !dot) return;

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    gsap.to(dot, { x: mx, y: my, duration: 0.06, ease: 'none' });
  }, { passive: true });

  gsap.ticker.add(() => {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    gsap.set(ring, { x: rx, y: ry });
  });

  $$('a, button, .app-tile, .card, input, textarea, .nav-toggle').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// ── 5. Nav ────────────────────────────────────────────────────────────────

function setupNav() {
  const btn   = $('.nav-toggle');
  const links = $('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  const header = $('header');
  if (header) {
    ScrollTrigger.create({
      start: 120,
      onEnter: () => header.classList.add('scrolled'),
      onLeaveBack: () => header.classList.remove('scrolled'),
    });
  }
}

// ── 6. Scroll progress ────────────────────────────────────────────────────

function setupScrollProgress() {
  const bar = $('.scroll-progress');
  if (!bar) return;
  gsap.to(bar, {
    width: '100%',
    ease: 'none',
    scrollTrigger: { scrub: 0.3, start: 0, end: 'max' }
  });
}

// ── 7. Hero entrance ──────────────────────────────────────────────────────

function splitChars(el) {
  if (!el) return;
  const text = el.textContent;
  el.textContent = '';
  let html = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      html += '<span class="word-space"> </span>';
    } else {
      html += `<span class="char" aria-hidden="true">${text[i]}</span>`;
    }
  }
  el.innerHTML = html;
  el.setAttribute('aria-label', text);
}

function scrambleText(el, finalText, duration) {
  if (!el) return;
  const chars = '█▓▒░ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const len = finalText.length;
  let frame = 0;
  const totalFrames = Math.round(duration * 60);
  const raf = () => {
    frame++;
    const progress = frame / totalFrames;
    let str = '';
    for (let i = 0; i < len; i++) {
      if (i / len < progress * 1.4 || finalText[i] === ' ') {
        str += finalText[i];
      } else {
        str += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    el.textContent = str;
    if (frame < totalFrames) requestAnimationFrame(raf);
    else el.textContent = finalText;
  };
  requestAnimationFrame(raf);
}

function setupHero() {
  const h1   = $('.hero h1');
  const sub  = $('.hero-sub');
  const eye  = $('.eyebrow');
  const btns = $$('.hero-btns .mag-wrap');
  const bg   = $('.hero-bg');

  if (h1) splitChars(h1);

  const tl = gsap.timeline({ delay: 0.1 });

  if (eye) {
    tl.fromTo(eye, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
  }

  const chars = $$('.hero h1 .char');
  if (chars.length) {
    tl.fromTo(chars,
      { opacity: 0, y: 60, rotateX: -90, transformOrigin: '50% 50%' },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.7, ease: 'back.out(1.7)', stagger: 0.028 },
      '-=0.3'
    );
  }

  if (sub) {
    const finalText = sub.textContent;
    sub.textContent = '';
    tl.call(() => scrambleText(sub, finalText, 1.2), [], '-=0.2');
  }

  if (btns.length) {
    tl.fromTo(btns,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.12 },
      '-=0.5'
    );
  }

  // hero parallax
  if (bg) {
    gsap.to(bg, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', scrub: 1, start: 'top top', end: 'bottom top' }
    });
  }
}

// ── 8. Mouse parallax (hero layers) ───────────────────────────────────────

function setupMouseParallax() {
  const hero = $('.hero');
  if (!hero) return;
  const layers = [
    { el: $('.hero-bg'), strength: 12 },
    { el: $('.hero-content'), strength: 6 },
  ].filter(l => l.el);

  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    const cx = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const cy = (e.clientY - rect.top - rect.height / 2) / rect.height;
    layers.forEach(({ el, strength }) => {
      gsap.to(el, { x: cx * strength, y: cy * strength, duration: 1.2, ease: 'power2.out' });
    });
  }, { passive: true });

  hero.addEventListener('mouseleave', () => {
    layers.forEach(({ el }) => {
      gsap.to(el, { x: 0, y: 0, duration: 1.5, ease: 'elastic.out(1, 0.5)' });
    });
  });
}

// ── 9. 3D card tilt ───────────────────────────────────────────────────────

function setupCards3D() {
  $$('.card, .app-tile').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const cx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const cy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      gsap.to(el, {
        rotateY: cx * 10,
        rotateX: -cy * 8,
        scale: 1.025,
        duration: 0.4,
        ease: 'power2.out',
        transformPerspective: 700,
      });
    }, { passive: true });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        rotateY: 0, rotateX: 0, scale: 1,
        duration: 0.7, ease: 'elastic.out(1, 0.5)'
      });
    });
  });
}

// ── 10. Magnetic buttons ──────────────────────────────────────────────────

function setupMagnetic() {
  $$('.mag-wrap').forEach(wrap => {
    const btn = wrap.querySelector('.cta-btn');
    if (!btn) return;

    wrap.addEventListener('mousemove', e => {
      const rect = wrap.getBoundingClientRect();
      const cx = e.clientX - rect.left - rect.width / 2;
      const cy = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: cx * 0.38, y: cy * 0.38, duration: 0.4, ease: 'power2.out' });
    }, { passive: true });

    wrap.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

// ── 11. Scroll reveal ─────────────────────────────────────────────────────

function setupScrollReveal() {
  // section title clip wipe
  $$('.section-title .title-inner').forEach(el => {
    gsap.fromTo(el,
      { y: '100%', opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true }
      }
    );
  });

  // eyebrows
  $$('.section-eye').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true }
      }
    );
  });

  // cards stagger
  $$('.grid').forEach(grid => {
    const items = $$('.card, .app-tile', grid);
    if (!items.length) return;
    gsap.fromTo(items,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.55, ease: 'power2.out',
        stagger: 0.06,
        scrollTrigger: { trigger: grid, start: 'top 88%', once: true }
      }
    );
  });

  // stats bar
  $$('.stat-item').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.5, delay: i * 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true }
      }
    );
  });

  // split sections
  $$('.split-section').forEach(el => {
    const [left, right] = el.children;
    if (left) gsap.fromTo(left, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    if (right) gsap.fromTo(right, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', delay: 0.1, scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
  });

  // phase items
  $$('.phase-item').forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, x: -24 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', delay: i * 0.06,
        scrollTrigger: { trigger: el, start: 'top 92%', once: true }
      }
    );
  });
}

// ── 12. Stat counters ─────────────────────────────────────────────────────

function setupCounters() {
  $$('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter() {
        gsap.fromTo(
          { val: 0 },
          {
            val: target, duration: 1.6, ease: 'power2.out',
            onUpdate() { el.textContent = Math.round(this.targets()[0].val) + suffix; }
          }
        );
      }
    });
  });
}

// ── Bootstrap ─────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  if (reduceMotion) { initSite(); return; }
  runLoader();
});