import platform from 'mini-platform-detect';
window.WindowSystem = {
  windowList: [], // contains all windows
  currentWin: 0, // index num of the current window in windowList
  container: document.querySelector('#windowsContainer'),
  scrollLength:0, 
  _away: false,
  _listView: true,
  init: function(){
    //this.away = true;
    //requestAnimationFrame(this.draw.bind(this));
  },
  add: function(element){
    const win = document.createElement('app-window');
    this.windowList.push(win);
    this.container.appendChild(win);
    element && win.appendChild(element);
    return win;
  },
  draw: function(){
    //this.windowList.forEach(v=>v.draw());
    //for(const i in this.windowList)this.windowList[i].draw();
    //requestAnimationFrame(this.draw.bind(this))
  },
  scrollTo: function(l){
    // 0 <= v < this.windowList.length
    //Math.sign(l)
    const v = l%this.windowList.length;
    this.scrollLength = v;
  },
  bringToCenter: function(){
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
//window.WindowSystem.init();
const getDistenceFromCenter = (index, center, listLength) =>{
  const b_distance = index - center;
  if(Math.abs(b_distance)>Math.abs(b_distance+listLength)) return b_distance+listLength;
  if(Math.abs(b_distance)>Math.abs(b_distance-listLength)) return b_distance-listLength;
  return b_distance;
}

const WSR = 0.8;
let scrollXStart=0;
const WXR = 50;
let scrollRatio = 100/screen.width/WSR/WXR;  //lol nobody would understant this including me. u multiple scroll length with this value u get change in scrollLength value.
let WLScrollXstart = 0;
window.addEventListener('resize',()=>{
  scrollRatio = 100/screen.width/WSR/WXR;
})
//window.addEventListener('touchmove',e=>e.preventDefault(),false)
class AppWindow extends HTMLElement {
  winIndex;
  ws = window.WindowSystem;
  ready = false;
  constructor(){
    super();
    //this.updateIndex();
  }
  //when the object is added as DOM
  connectedCallback(){
    this.ready = true;
    this.updateIndex();
    //this.style.transform = `scale(${WSR}, ${WSR}) translateY( ${((WSR - 1)/WSR*50)}% )`;
    requestAnimationFrame(this.draw.bind(this));
    const eventListenerOption = {
      //capture: false,
      //passive: false
    }
    const stopPropagationWhenListView = (e) =>{
      if(this.ws.listView)e.stopPropagation();
    }
    this.addEventListener('touchstart',e=>{
      stopPropagationWhenListView(e);
      scrollXStart = e.changedTouches[0].screenX*scrollRatio;
      WLScrollXstart = WindowSystem.scrollLength;
      WindowSystem.container.classList.add('scrolling');
    },eventListenerOption)
    this.addEventListener('touchmove',e=>{
      stopPropagationWhenListView(e);
      const moveLength = scrollXStart-e.changedTouches[0].screenX*scrollRatio+WLScrollXstart;
      if(WindowSystem.windowList.length===1 && (moveLength > 0.4 || moveLength < -0.4))return 0;
      WindowSystem.scrollTo(moveLength);
    },eventListenerOption)
    this.addEventListener('touchend',e=>{
      stopPropagationWhenListView(e);
      WindowSystem.container.classList.remove('scrolling');
      WindowSystem.bringToCenter();
    },eventListenerOption)
    this.addEventListener('click',e=>{
      stopPropagationWhenListView(e);
      //console.log('esdrftg');
      WindowSystem.currentWin = this.winIndex;
      WindowSystem.listView = false;
    },eventListenerOption)
  }
  updateIndex(){
    //console.log(this.ws===WindowSystem)
    this.winIndex = this.ws.windowList.indexOf(this);
    //console.log('index from method:',this.winIndex);
  }
  draw(){
    //dis:2 -> 90deg -> Math.PI/2 ---> dis*Math.PI/4
    //console.log('connected, myself: ',this);
    
    if(this.ready===false){
      console.log('not ready');
      return 0;
    }
    //this.style.cssText = `transform: translateZ(${(Math.cos(wAngle)-1)*50}%) translateX(${Math.sin(wAngle)*50}%)`
    if(this.classList.contains('focus')){
      this.style.transform = null;
      this.style.opacity = 1;
    }else if(this.classList.contains('away')){
      this.style.opacity = 0;
    }else{
      const wAngle = getDistenceFromCenter(this.winIndex, this.ws.scrollLength, this.ws.windowList.length)*Math.PI/4;
      const cosA = Math.cos(wAngle);
      this.style.transform = `scale(${WSR}, ${WSR}) translateZ(${(cosA-1)*70}px) translateX(${Math.sin(wAngle)*WXR}%)`
      this.style.opacity = cosA**1.5;
    }
    //setInterval(this.draw.bind(this),100);
    requestAnimationFrame(this.draw.bind(this));
  }
}
customElements.define('app-window',AppWindow);

let a1 = WindowSystem.add();
//console.log('index of the win is ', WindowSystem.windowList.indexOf(a1));
let aa = document.createElement('div')
aa.onclick = ()=> alert('gyaaaabdhxjsa');
aa.innerText = 'cfghejkdnbhs\nvgjckanbdsjwb\nhsdsjk'
WindowSystem.add(aa);
WindowSystem.add();

//setInterval(()=>console.log(WindowSystem.scrollLength),100)