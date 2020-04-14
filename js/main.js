 $ ( () => {
  //Navbar
  let nav = document.querySelector('nav'),
      mobiriseLogo =document.querySelector('.mobirise-logo');

  window.addEventListener('scroll', function (event) {
      event.preventDefault();
      if (window.scrollY <= 110) { 
        nav.style.backgroundColor = 'transparent';
        mobiriseLogo.style.width = '60px';
        mobiriseLogo.style.height = '60px';
      } else {
        nav.style.backgroundColor = '#212529';
        mobiriseLogo.style.width = '48px';
        mobiriseLogo.style.height = '48px';
        nav.style.transition  = 'all 0.7s ease-in-out';
      }
  });

    // Initialize Swiper 
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
 })