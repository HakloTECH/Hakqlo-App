import anime from 'animejs/lib/anime.es.js';
const STARTUP_SCRIPT = 'https://drive.google.com/uc?export=view&id=1pZxb0cPI9bsBanv8lqmBEPBEA68wuidU';
//let splashDuration, splashAction;

fetch(STARTUP_SCRIPT).then(r=>{return r.text()}).then(t=>{
  return (function(window, document){
    return eval(t);
  })({},{})
}).then(splash_config=>{
  const splashDuration = splash_config.splashDuration;
  const splashAction = splash_config.splashAction;
  //document.addEventListener("DOMContentLoaded",()=>{
    let startupscreen = document.querySelector("#startup");
    window.addEventListener("load",(e)=>{
      console.log('load happened')
      splashAction(startupscreen,{
        anime: anime,
      });
      //

      setTimeout(()=>{
        startupscreen.remove();
        console.log('willbe removed in '+splashDuration+'ms')
      },splashDuration);
    });
  //})
});/*
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