
baguetteBox.run('.grid');




// ------------ Search and Filter-------------//
// code based on "JavaScript DOM Tutorial #16" from https://youtu.be/3NG8zy0ywIk
const list = document.querySelector('#image-list ul');
const forms = document.forms;
const searchBar = forms['search-images'].querySelector('input');

searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const images = list.getElementsByTagName('a');
  Array.from(images).forEach((image) => {
    const title = image.getAttribute("data-caption");
    if(title.toLowerCase().indexOf(e.target.value) != -1){
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
});