// console.log('ulandi');
var icons = document.getElementsByClassName("item_img");
console.log( icons );
var asosiyRasm = document.getElementsByClassName("image_block");

function iconClick( id ) {
  var imgURL = icons[id-1].attributes["data-link"].nodeValue;
  console.log(imgURL);
  asosiyRasm[0].style.background = 'url(' + imgURL + ') no-repeat center center';
}
