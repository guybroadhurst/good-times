// 
// HEADER
// 
// we grab our header and desktop header 
// we insert the contents of our header into the desktop one

const header = document.querySelector('.header')
const desktopHeader = document.querySelector('.header-desktop')

desktopHeader.innerHTML = header.innerHTML

// 1. when the .header enters the viewport, hide the desktop header (remove the visible class)
// 2. when the .header leaves the viewport, show the desktop header (add the visible class)

inView('.header')
  .on('enter', el => desktopHeader.classList.remove('visible'))
  .on('exit', el => desktopHeader.classList.add('visible'))


// 
// IMAGE TILT 
//  
// this adds a tilt effect on the images when you hover over
// them based on your mouse position within the image
VanillaTilt.init(document.querySelectorAll(".image"), {
  max: 25,
  speed: 400
});

// 
// IMAGE FADE IN
//
// here we grab all our elements we want to fade in
// and then add the visible class when they  enter the viewport
// and remove it again when they leave, toggling the opacity
inView('.fade')
  .on('enter', el => el.classList.add('visible'))
  .on('exit', el => el.classList.remove('visible'))

// 
// REGISTER FRONT SLIDE UP
// 
// 1. When we click the register button, run a function
// 2. grab the .front element and add a class of .slide-up
const frontEl = document.querySelector('.front')
const regButton = document.querySelector('.register-button')

regButton.addEventListener('click', event => {
  event.preventDefault()
  frontEl.classList.add('slide-up')
})

// 
// SMOOTH SCROLLING
// 
// grab all the anchor tags on the page
const anchors = document.querySelectorAll('a')
// loop over them
anchors.forEach(anchor => {
  // listen out for clicks on each one
  anchor.addEventListener('click', event => {
    // grab the href attribute
    const href = anchor.getAttribute('href')
    // if the href starts with a #
    if (href.charAt(0) === '#') {
      // stop the default action
      event.preventDefault()
      // find the element the href points to and scroll into view smooth
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      })
    }
  })
})