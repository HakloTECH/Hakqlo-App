((global)=>{
    
    const onMessage = e =>{
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
                const { portMain, portSW } = new MessageChannel();
                reg.active.postMessage({ type: 'init' }, [ portSW ]);
                global.portMain = portMain;
                portMain.addEventListener('message',onMessage);
            }else{
                console.log('sw is NOT active');
            }
        }).catch(function(err) {
            console.log('error:', err);
        });
    }
})(window);
