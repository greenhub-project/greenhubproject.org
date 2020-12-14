const animate = function (selector, animation = 'fadeInUp') {
  document.querySelector(selector).classList.add('animated', animation)
}

const animateMany = function (selector, animation = 'fadeInUp') {
  const items = document.querySelectorAll(selector)
  Array.from(items).forEach(
    child => child.classList.add('animated', animation, 'delayed')
  )
}

module.export = { animate, animateMany }
