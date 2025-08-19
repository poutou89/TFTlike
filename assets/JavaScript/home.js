
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('mg-roster-track');
  if (!track) return;

  const prev = document.querySelector('.carousel__nav--prev');
  const next = document.querySelector('.carousel__nav--next');
  const step = 280; // px par clic

  const scrollBy = (delta) => track.scrollBy({ left: delta, behavior: 'smooth' });

  prev?.addEventListener('click', () => scrollBy(-step));
  next?.addEventListener('click', () => scrollBy(step));
});
console.log('home.js');
