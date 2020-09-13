const STARTUP_SCRIPT = 'https://drive.google.com/uc?export=view&id=1pZxb0cPI9bsBanv8lqmBEPBEA68wuidU';
let splashDuration = 1800, splashAction;
const fadeoutTime = 700;
let startupscreen = document.querySelector("#startup");
window.addEventListener("load",(e)=>{
  console.log('load happened')
  //

  setTimeout(()=>{
    startupscreen.style.transition = fadeoutTime/1000 + 's';
    startupscreen.style.opacity = 0;
    window.WindowSystem.away = false;
    setTimeout(()=>startupscreen.remove(),fadeoutTime)
  },splashDuration);
});
/*
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/javascript');
fetch(STARTUP_SCRIPT,{
  method: 'GET',
  headers: {
    'Content-Type': 'text/javascript'
  },
  mode: 'cors', //CORS yay!
}).then(r=>r.text()).then(t=>
  (function(window, document){
    //execute the user code in safe scope(window, document object is overridden)
    return eval(t);
  })({},{})
).then(splash_config=>{
  window.splash_config = splash_config;
  console.log('\n\n\nsplash_config:'+splash_config)
  const splashDuration = splash_config.splashDuration;
  const splashAction = splash_config.splashAction;
  //document.addEventListener("DOMContentLoaded",()=>{
    let startupscreen = document.querySelector("#startup");
    window.addEventListener("load",(e)=>{
      console.log('load happened')
      splashAction(startupscreen,{
        anime: window.anime,
      });
      //

      setTimeout(()=>{
        startupscreen.remove();
        console.log('willbe removed in '+splashDuration+'ms')
      },splashDuration);
    });
  //})
}).catch(e=>console.warn(e));/*
window.importExternal(STARTUP_SCRIPT).then(v=>{
  splashDuration = v.splashDuration;
  splashAction = v.splashAction;
  //document.addEventListener("DOMContentLoaded",()=>{
    let startupscreen = document.querySelector("#startup");
    window.addEventListener("load",(e)=>{
      console.log('load happened')
      splashAction(startupscreen);
      //

      setTimeout(()=>{
        startupscreen.remove();
        console.log('willbe removed in '+splashDuration+'ms')
      },splashDuration);
    });
  //})
})*/