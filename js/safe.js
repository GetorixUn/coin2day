document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
  if (event.ctrlKey && (event.key === 'c' || event.key === 'a' || event.key === 'x' || event.key === 'v')) {
    event.preventDefault();
  }
});
const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].oncontextmenu = function() {
    return false;
  }
}