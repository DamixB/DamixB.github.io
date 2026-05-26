/* =====================================================
   Magnes na rezerwacje - Main Script
   Features: scroll reveal, 3D tilt, counters,
             navbar scroll, package select, form AJAX
   ===================================================== */

(function () {
  'use strict';

  /* ─── Navbar scroll state ─── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── Scroll reveal (IntersectionObserver) ─── */
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* ─── Animated counters ─── */
  function animateCounter(el, target, duration = 1600) {
    const start = performance.now();
    const isInt = Number.isInteger(target);

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * target);
      el.textContent = current;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const counterObs = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          animateCounter(el, target);
          counterObs.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));

  /* ─── 3D Card Tilt ─── */
  function initTilt(cards) {
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -6;
        const rotY = ((x - cx) / cx) * 6;

        card.style.transform =
          `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
        card.style.transition = 'transform 0.1s ease';
      });

      const resetTilt = () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)';
      };

      card.addEventListener('mouseleave', resetTilt);
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease';
      });
    });
  }

  // Don't apply tilt on touch devices
  if (!window.matchMedia('(hover: none)').matches) {
    initTilt(document.querySelectorAll('.tilt'));
  }

  /* ─── Pricing → Form package select ─── */
  const packageSelect = document.getElementById('package-selection');

  document.querySelectorAll('.package-select').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const val = btn.getAttribute('data-package');
      if (packageSelect) packageSelect.value = val;

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ─── Form micro-interactions ─── */
  document.querySelectorAll('.form-row input, .form-row select').forEach(field => {
    field.addEventListener('focus', () => {
      field.parentElement.classList.add('focused');
    });
    field.addEventListener('blur', () => {
      field.parentElement.classList.remove('focused');
    });
  });

  /* ─── Smooth anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ─── Lazy image loading enhancement ─── */
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported - nothing extra needed
  } else {
    // Fallback: basic IntersectionObserver lazy loading
    const imgObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          imgObs.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => imgObs.observe(img));
  }

})();
