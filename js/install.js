((global)=>{
    window.addEventListener('message',e=>{
        const { type } = e.data;
        switch (type) {
            case 'init':
            global.portMain = e.ports[0];
            break;
    
            default:
        }
    })
    global.portMain.addEventListener('message',e=>{
        const { type } = e.data;
        switch (type) {
            case 'consoleLog':
                console.log(`sw: ${e.data.content}`);
            break;
    
            default:
        }
    })
    if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register('./sw.js').then(function(reg) {
            console.log('sucsessed');
            if(reg.active){
                console.log('sw is active');
                console.log(reg.active);
                //reg.active.postMessage({ type: 'init' }, [ port2 ]);
            }
        }).catch(function(err) {
            console.log('error:', err);
        });
    }
})(window);
