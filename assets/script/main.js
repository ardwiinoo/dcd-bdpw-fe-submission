const marker = document.querySelector('#marker');
const item = document.querySelectorAll('nav a');

function indicator (e){
  console.log("Left",e.offsetLeft)
  console.log("Width",e.offsetWidth)
  marker.style.left = e.offsetLeft+"px";
  marker.style.width = e.offsetWidth+"px";
}
item.forEach(link => {
  link.addEventListener('click', (e)=> {
    indicator(e.target)
  });
})
