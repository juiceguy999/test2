const btn = document.querySelector('#menu-btn');
const menu = document.getElementById('menu')

function navToggle() {
  menu.classList.toggle('hidden')
}

btn.addEventListener('click', navToggle)

document.addEventListener('click', (e) => {
  if(!e.target.closest("#menu") && !e.target.matches("#menu-btn")) {
    menu.classList.add('hidden')
  }

})

window.addEventListener('scroll', function() {
  const logoText = document.querySelector('.header__logo-text');
  const toastBtn = document.querySelector('#toast');

  if (window.scrollY > 400) {
    logoText.classList.add('header__logo-text--hidden');
  } else {
    logoText.classList.remove('header__logo-text--hidden');
  }

  if (window.scrollY > 400) {
    toastBtn.classList.add('toast--active');
  } else {
    toastBtn.classList.remove('toast--active');
  }
});