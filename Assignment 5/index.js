let main_img = document.getElementById('img1');
let all_imgs = ['./Images/istockphoto-1146517111-612x612.jpg', './Images/sea-164989_640.jpg', './Images/view.jpg', './Images/image-7.jpg', './Images/nature-image-for-website.jpg', './Images/free-Images.jpg'];
let currentIndex = 0;

function mySlider(){
  main_img.src = all_imgs[currentIndex];
  currentIndex = (currentIndex +1) % all_imgs.length; 
}

let para = document.createElement('p');
para.innerText = "Nature is Love";
para.style.color = 'Black';
para.style.fontWeight = 'bold';
para.style.fontSize = '25px';
para.style.marginLeft = '680px';

let btn1 = document.createElement('button');
btn1.innerHTML = "Click for more.."
btn1.style.padding = '10px';
btn1.style.backgroundColor = 'purple';
btn1.style.color = 'white';
btn1.style.marginLeft = '700px';
btn1.style.border = 'solid';

document.body.appendChild(para);
document.body.appendChild(btn1);

btn1.addEventListener('click', function(){
  window.open("https://www.google.com/search?q=images&rlz=1C1GCEB_enPK1032PK1032&oq=images&gs_lcrp=EgZjaHJvbWUyFwgAEEUYORhDGIMBGLEDGMkDGIAEGIoFMg0IARAAGIMBGLEDGIAEMg0IAhAAGIMBGLEDGIAEMgcIAxAAGIAEMgoIBBAAGLEDGIAEMg0IBRAAGJIDGIAEGIoFMg0IBhAAGJIDGIAEGIoFMgYIBxBFGD2oAgCwAgA&sourceid=chrome&ie=UTF-8");
})
setInterval(mySlider, 3000);
