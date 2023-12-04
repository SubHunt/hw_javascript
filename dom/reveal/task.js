const reveal = document.querySelector('.reveal');
console.log(reveal);

function isVisible (el) {
    const {top, bottom} = el.getBoundingClientRect();
    if ((bottom < window.innerHeight) && (top > 0)) {
        return true;
    } else
    return false;
}


function showVisible() {
    for (let reveal of document.querySelectorAll('.reveal')) {
      if (isVisible(reveal)) {
        reveal.classList.add('reveal_active')
      } else {
        reveal.classList.remove('reveal_active')
      }
    }
  }
  
  window.onscroll = showVisible;