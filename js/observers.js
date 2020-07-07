const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

const headerOptions = {};

const headerObserver = new IntersectionObserver(function (
  entries,
  headerObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
},
headerOptions);

headerObserver.observe(header);

const checkbox = document.getElementById('navi-toggle');
checkbox.addEventListener('click', e => {
  navbar.classList.toggle('nav');
});
