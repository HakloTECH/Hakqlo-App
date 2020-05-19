((global)=>{
    
    const onMessage = e =>{
        const { type } = e.data;
        switch (type) {
            case 'consoleLog':
                console.log(`sw: ${e.data.content}`);
            break;
    
            default:
        }
    }
    if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register('./sw.js').then(function(reg) {
            console.log('sucsessed');
            if(reg.active){
                console.log('sw is active');                
            }else{
                console.log('sw is NOT active');
            }
            const { portMain, portSW } = new MessageChannel();
            navigator.serviceWorker.controller.postMessage({ type: 'init' }, [ portSW ]);
            global.portMain = portMain;
            portMain.addEventListener('message',onMessage);
        }).catch(function(err) {
            console.log('error:', err);
        });
    }
})(window);
