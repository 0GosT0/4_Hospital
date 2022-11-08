   const isMobile = {
      Android: function () {
         return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
         return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () { 
         return navigator.userAgent.match(/iPhone| iPad| iPod/i);
      },
      Opera: function () {
         return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () { 
         return navigator.userAgent.match(/IEMobile/i);
      },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');

   let menuArrows = document.querySelectorAll('.navigation__link-vector');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
         });
      }
   }

} else {
   document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const navigator = document.querySelector('.navigation');
   const regis = document.querySelector('.registration');
   iconMenu.addEventListener("click", function (e){
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      navigator.classList.toggle('_active');
      regis.classList.toggle('_active');
   });
}