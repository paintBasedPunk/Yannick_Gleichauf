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

function showContact() {

  // if(contact.className.contains = 'active'){
    contact.style.animation = "contact-fadeIn 800ms forwards";
    contact.style.display = 'block'
  // }
}

function closeContact() {
  contact.style.animation = "contact-fadeOut 800ms forwards";
  setTimeout(
    function () {
      contact.style.display = 'none'
    }, 800);
}

//close contact-modal by pressing "ESC"
document.body.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
      closeContact();
  }
});


contactBtn.addEventListener('click', showContact)
contactClose.addEventListener('click', closeContact)