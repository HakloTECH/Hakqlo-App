((global)=>{
    
    const onMessage = e =>{
        const { type } = e.data;
        console.log(type);
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
            const { port1, port2 } = new MessageChannel();
            navigator.serviceWorker.controller.postMessage({ type: 'init' }, [ port2 ]);
            global.portMain = port1;
            port1.addEventListener('message',onMessage);
        }).catch(function(err) {
            console.log('error:', err);
        });
    }
})(window);
