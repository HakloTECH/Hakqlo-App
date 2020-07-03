let splashDuration = 3000;
let splashAction = () =>{
  startupscreen.setAttribute("class","clear");
}
document.addEventListener("DOMContentLoaded",()=>{
  let startupscreen = document.querySelector("#startup");
  window.addEventListener("load",(e)=>{
    
    splashAction();
    //

    setTimeout(()=>{
      startupscreen.remove();
    },splashDuration);
  });
})

/*
.addEventListener('transitionend', (event) => {
      event.target.remove();
    });
//function for creating and adding elements
    const ce = (tagname,parent) =>{
        const el = document.createElement(tagname);
        parent.appendChild(el);
        return el;
    }
    //scale define

    const baseTriWidth = 20,baseTriHeight = baseTriWidth*Math.sqrt(3)*0.5,maxLength = document.body.clientWidth;
    const startUpScreen = document.querySelector("#startup");
    const startIcon = ce("div",startUpScreen);
    const centerTriangle = ce("div",startIcon);

    centerTriangle.dataset.sideLength=baseTriWidth;
    centerTriangle.setAttribute("data-side-length","60")
    centerTriangle.setAttribute("class","logoTriangle");
    //svg scope 
    document.addEventListener("DOMContentloaded",()=>{
        (svgdoc=>{
        })(document.querySelector("#startup > object").getSVGDocument());
    })
    

*/