let auto_img = document.getElementsByClassName('auto-img');
let bg_layer = document.getElementById('bg-layer')

var i = Math.floor(Math.random()*(5));

function autoSlide(){
  bg_layer.style.backgroundImage = `url(${auto_img[i].src})`;
  restartAnimation();
  setInterval(autoChange, 10000)
}

  //auto slide
  function autoChange() {
    if (i >= auto_img.length - 1) {
      i = 0;
      bg_layer.style.backgroundImage = `url(${auto_img[i].src})`;
      restartAnimation();
    } 
    else {
      i++;
      bg_layer.style.backgroundImage = `url(${auto_img[i].src})`;
      restartAnimation();
    }
  }

    //reset the keyframe animation
    function restartAnimation(){
      bg_layer.classList.remove("auto-fade");
      void bg_layer.offsetWidth;
      bg_layer.classList.add("auto-fade");
    }

document.addEventListener("DOMContentLoaded", autoSlide);