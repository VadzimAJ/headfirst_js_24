window.onload = init;

function init() {
//   var image = document.getElementById('zero');
  // image.onclick = showAnswer;

  var images = document.getElementsByTagName("img");
  for (var i =0; i < images.length; i++) {
    images[i].onmouseover = showAnswer;
    images[i].onmouseout = blurImage;
    console.log(images[i] + " add onmouseover ivent ")
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
}

function blurImage (eventObj) {
  var image = eventObj.target;
  var name = image.id;
  image.src = './assets/' + name + 'blur.jpg';
}