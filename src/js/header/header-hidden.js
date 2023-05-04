import { dropdownList, handleCloseDropdownMenu } from './dropdown-btn';
import { menuBackdrop, handleCloseMenu } from './menu';

let prevScrollPos = document.documentElement.scrollTop;
const header = document.querySelector('.header');

function handleHiddenOnScroll() {
  const currentScrollPos = document.documentElement.scrollTop;
  console.log({ prevScrollPos, currentScrollPos });
  if (prevScrollPos > currentScrollPos) {
    header.classList.remove('header--hidden');
  } else {
    header.classList.add('header--hidden');

    if (dropdownList.classList.contains('header__dropdown-list--open')) {
      handleCloseDropdownMenu();
    }

    if (menuBackdrop.classList.contains('mobile-menu__backdrop--open')) {
      handleCloseMenu();
    }
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', handleHiddenOnScroll);
