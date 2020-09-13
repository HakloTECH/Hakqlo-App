import platform from 'mini-platform-detect';
window.WindowSystem = {
  windowList: [], // contains all windows
  currentWin: 0, // index num of the current window in windowList
  container: document.querySelector('#windowsContainer'),
  scrollLength:0, 
  _away: false,
  _listView: true,
  init(){
    //this.away = true;
    //requestAnimationFrame(this.draw.bind(this));
  },
  add(element){
    const win = document.createElement('app-window');
    this.windowList.push(win);
    this.container.appendChild(win);
    element && win.appendChild(element);
    return win;
  },
  draw(){
    //this.windowList.forEach(v=>v.draw());
    //for(const i in this.windowList)this.windowList[i].draw();
    //requestAnimationFrame(this.draw.bind(this))
  },
  scrollTo(l){
    // 0 <= v < this.windowList.length
    //Math.sign(l)
    const v = l%this.windowList.length;
    this.scrollLength = v;
  },
  bringToCenter(){
    this.scrollLength = Math.round(this.scrollLength);
  },
  get away(){
    return this._away;
  },
  set away(state){
    if(state)this.container.classList.add('away');
    else this.container.classList.remove('away');
    this._away = state;
  },
  set listView(state){
    if(state){
      //this.windowList[this.currentWin].classList.remove('focus')
      this.scrollLength = this.currentWin;
      for(const wIndex in this.windowList){
        if(wIndex == this.currentWin){
          this.windowList[wIndex].classList.remove('focus')
        }else{
          this.windowList[wIndex].classList.remove('away');
        }
      }
    }else{
      for(const wIndex in this.windowList){
        if(wIndex == this.currentWin){
          this.windowList[wIndex].classList.add('focus')
        }else{
          this.windowList[wIndex].classList.add('away');
        }
      }
    }
    this._listView = state;
  },
  get listView(){
    return this._listView;
  }
}
window.WindowSystem.away = true;
const getDistenceFromCenter = (index, center, listLength) =>{
  const b_distance = index - center;
  if(Math.abs(b_distance)>Math.abs(b_distance+listLength)) return b_distance+listLength;
  if(Math.abs(b_distance)>Math.abs(b_distance-listLength)) return b_distance-listLength;
  return b_distance;
}

const WSR = 0.6; //window shrink ratio
let scrollXStart=0;
const WXR = 50; 
let scrollRatio = 100/screen.width/WSR/WXR;  //lol nobody would understant this including me. u multiple scroll length with this value u get change in scrollLength value.
let WLScrollXstart = 0;
window.addEventListener('resize',()=>{
  scrollRatio = 100/screen.width/WSR/WXR;
})
//document.body.addEventListener('touchmove',e=>e.preventDefault(),false)
class AppWindow extends HTMLElement {
  winIndex;
  ws = window.WindowSystem;
  ready = false;
  cover = document.createElement('div');
  constructor(){
    super();
  }
  //when the object is added as DOM
  connectedCallback(){
    this.ready = true;
    this.updateIndex();
    this.appendChild(this.cover);
    this.cover.setAttribute('class','cover')
    //this.cover.className.add('cover');
    requestAnimationFrame(this.draw.bind(this));
    const eventListenerOption = {
      //capture: false,
      //passive: false
    }
    const stp = (e) =>{
      if(this.ws.listView){
        e.stopPropagation();
        //e.preventDefault();
      }
    }
    this.cover.addEventListener('touchstart',e=>{
      stp(e);
      scrollXStart = e.changedTouches[0].screenX*scrollRatio;
      WLScrollXstart = WindowSystem.scrollLength;
      WindowSystem.container.classList.add('scrolling');
    },eventListenerOption)
    this.cover.addEventListener('touchmove',e=>{
      stp(e);
      const moveLength = scrollXStart-e.changedTouches[0].screenX*scrollRatio+WLScrollXstart;
      if(WindowSystem.windowList.length===1 && (moveLength > 0.4 || moveLength < -0.4))return 0;
      WindowSystem.scrollTo(moveLength);
    },eventListenerOption)
    this.cover.addEventListener('touchend',e=>{
      stp(e);
      WindowSystem.container.classList.remove('scrolling');
      WindowSystem.bringToCenter();
    },eventListenerOption)
    /*this.addEventListener('click',e=>{
      console.log('window clicked')
    },eventListenerOption)*/
    this.cover.addEventListener('click',e=>{
      stp(e);
      //console.log('window cover clicked')
      WindowSystem.currentWin = this.winIndex;
      WindowSystem.listView = false;
    },eventListenerOption)
    
  }
  updateIndex(){
    this.winIndex = this.ws.windowList.indexOf(this);
  }
  draw(){
    //dis:2 -> 90deg -> Math.PI/2 ---> dis*Math.PI/4
    
    if(this.ready===false){
      console.log('not ready');
      return 0;
    }
    if(this.classList.contains('focus')){
      this.style.transform = null;
      this.style.opacity = 1;
    }else if(this.classList.contains('away')){
      this.style.opacity = 0;
      this.style.transform = 'translateZ(-100px)';
    }else{
      const wAngle = getDistenceFromCenter(this.winIndex, this.ws.scrollLength, this.ws.windowList.length)*Math.PI/4;
      const cosA = Math.cos(wAngle);
      this.style.transform = `scale(${WSR}, ${WSR}) translateZ(${(cosA)*70}px) translateX(${Math.sin(wAngle)*WXR}%)`
      this.style.opacity = cosA**1.5;
    }
    requestAnimationFrame(this.draw.bind(this));
  }
}
customElements.define('app-window',AppWindow);
window.open = function(url){
  const iframe = document.createElement('iframe');
  iframe.src = url;
  WindowSystem.add(iframe)
  return iframe.contentWindow;
}
let a1 = WindowSystem.add();
//console.log('index of the win is ', WindowSystem.windowList.indexOf(a1));
let aa = document.createElement('div')
aa.classList.add('testing')
aa.onclick = ()=> alert('gyaaaabdhxjsa');
aa.innerText = 'cfghejkdnbhs\nvgjckanbdsjwb\nhsdsjk'
WindowSystem.add(aa);
open('https://hakqlo.github.io')

//setInterval(()=>console.log(WindowSystem.scrollLength),100)