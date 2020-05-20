((global)=>{
    global.portMain;
    const onMessage = e =>{
        const { type, content } = e.data;
        switch (type) {
            case 'consoleLog':
                console.log(`sw: ${content}`);
            break;
    
            default:
        }
    }
    
    if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register('./sw.js').then(function(reg) {
            console.log('sucsessed');
            if(reg.active){
                console.log('sw is active');  
                const { port1, port2 } = new MessageChannel();
                reg.active.postMessage({ type: 'init' }, [ port2 ]);
                global.portMain = port1;
                port1.onmessage = onMessage;              
            }else{
                console.log('sw is NOT active');
            }
        }).catch(function(err) {
            console.error('error:', err);
        });
    }
})(window);
