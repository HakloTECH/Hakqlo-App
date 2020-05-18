((global)=>{
    if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register('../pwa/sw.js').then(function() {
            console.log('sucsessed');
        }).catch(function(err) {
            console.log('error:', err);
        });
    }
})(window);
