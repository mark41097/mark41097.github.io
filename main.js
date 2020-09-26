/*======= HMABURGER MENU =====*/
$(document).ready(function() {
  $('.hamburger').on('click', function() {
      $(this).toggleClass('open');
      $('.top-nav').toggleClass('open');
      });
  $('.top-nav .nav-link').on('click', function() {
      $('.hamburger').removeClass('open');
      $('.top-nav').removeClass('open');
      });
});

  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr= ScrollReveal({
  origin:'top',
  distance:'90px',
  duration: 1500
  })

  /*SCROLL HOME*/
  sr.reveal('.home-content .block h6', { delay: 200 });
  sr.reveal('.home-content .block h1', { delay: 400 });
  sr.reveal('.home-content .block h3', { delay: 600 });
  sr.reveal('.home-content .block', { delay: 100 });
  sr.reveal('.home-content .profile', { delay: 100 });
  sr.reveal('.home-content .profile img', { delay: 200 });
  sr.reveal('.wobble-horizontal', { interval: 200 });


  /*SCROLL ABOUT*/
    sr.reveal('.about-details p', { delay: 250 });
    sr.reveal('.skill h1', { delay: 400 });
    sr.reveal('#storm', { delay: 300 });
    sr.reveal('#sustainable', { delay: 300 });
    sr.reveal('.about-heading', {});
    sr.reveal('.about-heading2', {});

  /*SCROLL SKILLS*/
  sr.reveal('.skills-heading', {});
  sr.reveal('.skills_subtitle', {delay: 100});
  sr.reveal('.card', { interval: 200 });
  sr.reveal('.skills_img', { interval:250 });
  sr.reveal('.number', { interval: 350 });
  sr.reveal('.text', { interval:350 });

  /*SCROLL EXPERIENCE*/
  sr.reveal('.section-heading h1', {});
  sr.reveal('.section-heading h6', {delay: 100});
  sr.reveal('.timeline-content', { interval: 400 });
  sr.reveal('.timeline .date', { interval: 200 });
  sr.reveal('.hide', { delay: 200 });
  sr.reveal('.timeline-container h1', { interval:200 });
  sr.reveal('.timeline h3', { delay:250});
