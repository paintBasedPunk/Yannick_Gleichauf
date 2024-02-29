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


// --- Show Contact Modal ---
let contact = document.getElementById('contact')
let contactContainer = document.getElementById('contact-container')
let contactBtn = document.getElementById('contact-btn')
let contactClose = document.getElementById('contact-close')

function showContact() {
  // if(contact.className.contains = 'active'){
    contactContainer.style.animation = "fade 800ms forwards";
    contact.style.animation = "fade 800ms forwards";
    contact.style.animation = "moveDown 800ms forwards";
    contactContainer.style.display = 'block'
  // }
}

function closeContact() {
  contactContainer.style.animation = "fadeOut 400ms forwards";
  contact.style.animation = "fadeOut 800ms forwards";
  contact.style.animation = "moveUp 800ms forwards";
  setTimeout(
    function () {
      contactContainer.style.display = 'none'
    }, 810);
}

contactContainer.addEventListener('click', function(e){
  if(e.target === contactContainer){
    console.log(e.target.id)
    closeContact()
  }
})

//close contact-modal by pressing "ESC"
document.body.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
      closeContact();
  }
});


contactBtn.addEventListener('click', showContact)
contactClose.addEventListener('click', closeContact)