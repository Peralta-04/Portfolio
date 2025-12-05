document.addEventListener('click', function (e) {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  e.preventDefault();
  const target = document.querySelector(a.getAttribute('href'));
  if (target) target.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.contact-btn').addEventListener('click', () => {
  const email = 'your.email@example.com'; 
  const subject = encodeURIComponent('Job Opportunity — Roger E');
  const body = encodeURIComponent('Hi Roger,\n\nI would like to contact you regarding...');
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
