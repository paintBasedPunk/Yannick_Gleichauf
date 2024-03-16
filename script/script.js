// --- Show Contact Modal ---
let contact = document.getElementById('contact')
let contactContainer = document.getElementById('contact-container')
let contactBtn = document.getElementById('contact-btn')
let contactClose = document.getElementById('contact-close')

function showContact() {
  contactContainer.style.animation = "fade 800ms forwards";
  contact.style.animation = "fade 600ms forwards";
  contact.style.animation = "moveDown 800ms forwards";
  contactContainer.style.display = 'block'
}

function closeContact() {
  contactContainer.style.animation = "fadeOut 800ms forwards";
  contact.style.animation = "fadeOut 600ms forwards";
  contact.style.animation = "moveUp 800ms forwards";
  setTimeout(
    function () {
      contactContainer.style.display = 'none'
    }, 810);
}

contactContainer.addEventListener('click', function (e) {
  if (e.target === contactContainer) {
    console.log(e.target.id)
    closeContact()
  }
})

// --- Close contact-modal by pressing "ESC" ---
document.body.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeContact();
  }
});

contactBtn.addEventListener('click', showContact)
contactClose.addEventListener('click', closeContact)

// --- Hide the Title Screen on Click ---
let layer = document.getElementById('layer')
let layerWrap = document.getElementById('layer-wrap')

function hideLayer(){
  layer.style.animation = "fadeOut 1000ms forwards";
  layerWrap.style.animation = "fadeOut 900ms forwards";
  layerWrap.style.animation = "moveUp-Y 800ms forwards";
  setTimeout(
    function () {
      layer.style.display = 'none'
    }, 1100);
}

layerWrap.addEventListener('click', hideLayer)