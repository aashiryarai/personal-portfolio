const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('revealed'), i * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
