window.addEventListener('resize',onResize);
let scrCenter = {
  x: screen.width/2,
  y: screen.height/2
}
const onResize = () =>{
  scrCenter = {
    x: screen.width/2,
    y: screen.height/2
  }
}
onResize();
const rotate120deg = () =>{

}
const startup = (startupScreen) =>{
  ss = startupScreen;
  logo = document.createElement('svg');
  path1 = document.createElement('path');
  path2 = document.createElement('path');
  path3 = document.createElement('path');

  logo.style.cssText = 'margin:0;width:100vw;height:100vh'
  ss.appendChild(logo);
  logo.appendChild(path1);
  logo.appendChild(path2);
  logo.appendChild(path3);
  
  anime({
    targets: path1,
    d: [
      {}
    ],
    easing: 'easeInOutQuint',
    duration: 2000,
    loop: false,
  })
  anime({
    targets: path2,
    d: [
      {}
    ],
    easing: 'easeInOutQuint',
    duration: 2000,
    loop: false,
  })
  anime({
    targets: path3,
    d: [
      {}
    ],
    easing: 'easeInOutQuint',
    duration: 2000,
    loop: false,
  })
}
document.addEventListener('DOMContentLoaded',()=>{
  startup(document.querySelector('#startup'));
})
