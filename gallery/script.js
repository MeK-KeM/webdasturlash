var bigCapture = document.getElementsByClassName("image_block");
var thumbs = document.getElementsByClassName('thumb_img');

function clickToThumb( id ) {
  var imageLink = thumbs[--id].attributes['data-link'].nodeValue;
  bigCapture[0].style.background = 'url( ' + imageLink + ' ) no-repeat center center';
}
