//((document)=>{
    
    const container = document.querySelector("#container");
    const menuScroller = document.querySelector("#menuScrollBar");
    const menuHighlight = document.querySelector("#menuhighlight"),menuTouchlight = document.querySelector("#menutouchlight");
    const rootVarElementStyle = document.querySelector(":root").style;
    const numArea=container.childElementCount;

/*
    document.body.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);

    
    */
    let currentOrigin=0;/*
    let getStartOrigin=(x)=>{
        
        for(let i=numArea-1;i>-1;i--){
            if(x*numArea/menuScroller.clientWidth>i)return i;
        }
        
        return (x*numArea/menuScroller.clientWidth)^0;
    }*/
    let setScrollBar = o =>{
        rootVarElementStyle.setProperty('--scroll-origin',`${o*menuScroller.clientWidth/numArea}px`);
    }
    let executeScroll=(o)=>{
        if(o!==currentOrigin){
            console.log(`origin changes from ${currentOrigin} to ${o}`);
            container.scrollTo({
                top:0,
                left:o*menuScroller.clientWidth,
                behavior:'smooth',
                duration: '0.3s'
            })
            setScrollBar(o);
            currentOrigin = o;
        }
    }
    menuScroller.addEventListener('touchend',(e)=>{
        executeScroll((e.changedTouches[0].pageX*numArea/menuScroller.clientWidth)^0);
    })
    menuScroller.addEventListener('touchmove',(e)=>{
        e.preventDefault();
        executeScroll((e.touches[0].pageX*numArea/menuScroller.clientWidth)^0);
        menuTouchlight.style.setProperty("left",`${e.touches[0].pageX}px`)
        
    })
    container.addEventListener('scroll', function(event) {
        if(container.scrollLeft%menuScroller.clientWidth==0){
            const o = (container.scrollLeft/menuScroller.clientWidth)^0;
            console.log("whoooooo"+o)
            setScrollBar(o);
            currentOrigin = o;
        }
    }, false);
    /*
    container.addEventListener('touchstart', function(event) {
        fingerX = event.touches[0].pageX;
        if(fingerX>window.innerWidth*0.2&&fingerX<window.innerWidth*0.8)event.preventDefault();
    }, false);

    container.addEventListener('touchmove', function(event) {
        fingerX = event.touches[0].pageX;
    }, false);
    */

//})(document);