b=document.body;
log=console.log;
let fstClick=false;
let fromProgram=false, waitId, exCand=[], tapCount=0;
const waitTime = 200;
function onGestureDoubleClick(){
  log('double clicked')
}
function gestureClear(){
  tapCount=0;
}
const processGesture = () =>{
  tapCount++;
}
const gestureFieldInit = () =>{

}
b.addEventListener('touchstart',e=>{
  clearTimeout(waitId);
  if(tapCount===1){
    gestureFieldInit();
  }
})
b.addEventListener('touchmove',e=>{
  
})
b.addEventListener('touchend',e=>{
  
})

b.addEventListener('click',(e) =>{
  if(!fromProgram&&tapCount===0){
    //executed when user clicks at first time
    e.stopPropagation(); //stop children elements to get click event
    waitId=setTimeout(()=>{
      fromProgram=true;
      e.target.dispatchEvent(e);
      log('late event')
      gestureClear();
    },waitTime)
    //judge gestures
    tapCount++;
  }
  fromProgram=false;
},true)