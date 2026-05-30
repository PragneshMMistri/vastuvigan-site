document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const navbar = document.getElementById('navbar');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (menu) menu.classList.remove('active');
    });
  });

  if (navbar) {
    const setScrolled = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled);
  }

  const form = document.getElementById('contact-form');
  const successBanner = document.getElementById('success-banner');
  if (form && successBanner) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      successBanner.style.display = 'block';
      form.reset();
      successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  const sectors = document.querySelectorAll('.direction-sector');
  const cards = document.querySelectorAll('.direction-info-card');
  const placeholder = document.getElementById('details-placeholder');
  if (sectors.length) {
    sectors.forEach(sector => {
      sector.addEventListener('mouseenter', () => {
        sectors.forEach(s => s.classList.remove('active'));
        cards.forEach(c => c.classList.remove('active'));
        if (placeholder) placeholder.style.display = 'none';
        sector.classList.add('active');
        const direction = sector.dataset.direction;
        const activeCard = document.getElementById(`info-${direction}`);
        if (activeCard) activeCard.classList.add('active');
      });

      sector.addEventListener('click', (e) => {
        e.stopPropagation();
        sectors.forEach(s => s.classList.remove('active'));
        cards.forEach(c => c.classList.remove('active'));
        if (placeholder) placeholder.style.display = 'none';
        sector.classList.add('active');
        const direction = sector.dataset.direction;
        const activeCard = document.getElementById(`info-${direction}`);
        if (activeCard) activeCard.classList.add('active');
      });
    });
  }
});
