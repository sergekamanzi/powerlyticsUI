
export function initReveal() {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setupEl = (el) => {
    if (!el || el.__revealSetup) return;
    el.__revealSetup = true;
    el.classList.add('reveal');
    const dir = (el.getAttribute('data-reveal') || '').toLowerCase();
    if (dir === 'left') el.classList.add('from-left');
    else if (dir === 'right') el.classList.add('from-right');
    else if (dir === 'up') el.classList.add('from-up');
    else if (dir === 'down') el.classList.add('from-down');
    if (prefersReduced) {
      el.classList.add('is-visible');
    }
  };

  const revealEls = () => document.querySelectorAll('[data-reveal]');

  // If reduced motion, mark all visible and return
  if (prefersReduced) {
    revealEls().forEach(setupEl);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // unobserve by default unless explicitly persistent
          if (entry.target.getAttribute('data-reveal-once') !== 'false') {
            observer.unobserve(entry.target);
          }
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );

  // Prime existing elements
  revealEls().forEach((el) => {
    setupEl(el);
    observer.observe(el);
  });

  // Observe future additions
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType !== 1) continue;
        if (node.hasAttribute && node.hasAttribute('data-reveal')) {
          setupEl(node);
          observer.observe(node);
        }
        // also scan descendants
        node.querySelectorAll && node.querySelectorAll('[data-reveal]').forEach((el) => {
          setupEl(el);
          observer.observe(el);
        });
      }
    }
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });
}
