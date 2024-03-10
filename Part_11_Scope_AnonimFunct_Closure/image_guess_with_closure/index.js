window.onload = init;

function init() {
//   var image = document.getElementById('zero');
  // image.onclick = showAnswer;

  var images = document.getElementsByTagName("img");
  for (var i =0; i < images.length; i++) {
    images[i].onclick = showAnswer;
    console.log(images[i] + " add click ivent ")
  };
  console.log(images);
  
};

function showAnswer (eventObj) {
//   var image = document.getElementById('zero');
  // image.src = "./assets/zero.jpg"

  var image = eventObj.target;
  var name = image.id;
  linkNormaliser = './assets/' + name + '.jpg';
  image.src = linkNormaliser;
  console.log("Handler target for " + image.src);

  function blurImage () {
    image.src = './assets/' + name + 'blur.jpg';
    console.log("Blur target for " + image.src);
  }
  
  

  setTimeout(blurImage, 2000);
}