// --- Template Setting ---
// let navbar = document.querySelector("nav");
// let navbarHeight = navbar.offsetHeight;

// Set the Navbar Height
let footer = document.querySelector("footer");
let footerHeight = footer.offsetHeight;

document.documentElement.style.setProperty(
  "--footer-height",
  footerHeight + "px"
);

// calculate the height of the container
// let containerHeight = window.innerHeight - navbarHeight;

// set the value of the "--height" variable from the css file
// document.documentElement.style.setProperty(
//   "--container-height",
//   containerHeight + "px"
// );

// Set the Navbar Height
// document.documentElement.style.setProperty(
//   "--navbar-height",
//   navbarHeight + "px"
// );

// --- Change Navbar Background-Color on Scroll ---
// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 1) {
//     navbar.style.backgroundColor = "rgba(30, 30, 30, 1)";
//   }
//   if (window.pageYOffset < 1) {
//     navbar.style.backgroundColor = "rgba(30, 30, 30, 0)";
//   }
// });

// --- Show Contact Modal ---
let contact = document.getElementById('contact')
let contactBtn = document.getElementById('contact-btn')
let contactClose = document.getElementById('contact-close')
let socialIcons = document.querySelectorAll('i')

function showContact() {
  contact.style.animation = "contact-fadeIn 800ms forwards";
  contact.style.display = 'block'
}

function closeContact() {
  contact.style.animation = "contact-fadeOut 800ms forwards";
  setTimeout(
    function () {
      contact.style.display = 'none'
    }, 800);
}

//close modal when clicking outside of the image
/*
document.body.addEventListener("click", function (e) {
  if (
    // e.target.id !== 'contact' &&
    // e.target.classList.contains('fa-solid') 
    // e.target !== contact &&
    // e.target == socialIcons
    // e.target != modal_img &&
    // e.target != next &&
    // e.target != prev &&
    // e.target != caption &&
    // e.target != close_btn &&
    // e.target != fullScreen_btn &&
    // e.target != fullScreen_icon
  ) {
    closeContact()
    console.log(e.target.classList)
  }
});
*/

contactBtn.addEventListener('click', showContact)
contactClose.addEventListener('click', closeContact)