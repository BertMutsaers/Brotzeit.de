document.addEventListener('DOMContentLoaded', () => {

  /* ── Header scroll state ── */
  const header = document.querySelector('.site-header');
  if (header) {
    const update = () => {
      if (window.scrollY > 60) {
        header.classList.replace('transparent', 'solid');
      } else {
        header.classList.replace('solid', 'transparent');
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ── Hero parallax / loaded class ── */
  const hero = document.querySelector('.hero');
  if (hero) {
    requestAnimationFrame(() => hero.classList.add('loaded'));
  }

  /* ── Burger / Mobile nav ── */
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      burger.setAttribute('aria-expanded', String(open));
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Language dropdown toggle ── */
  document.querySelectorAll('.lang-dropdown').forEach(dropdown => {
    // Prevent any click inside dropdown from closing it via document listener
    dropdown.addEventListener('click', e => e.stopPropagation());

    dropdown.querySelector('.lang-trigger').addEventListener('click', () => {
      const isOpen = dropdown.classList.toggle('open');
      dropdown.querySelector('.lang-trigger').setAttribute('aria-expanded', String(isOpen));
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.lang-dropdown.open').forEach(d => {
      d.classList.remove('open');
      d.querySelector('.lang-trigger')?.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
