import {init as basicInit} from "./baseFunctions";

import '../node_modules/dialog-polyfill/dist/dialog-polyfill.css';
import '../css/main.css';
basicInit(window);
window.onappinstalled=()=>location.href+="/index.html";
console.log('test');
let installApp = () =>{
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function() {
      console.log('sucsessed');
      
      //location.href+="/pwa.html";
    }).catch(function(err) {
      console.log('error:', err);
    });
    //make an install button (or installPWA function for terminal maybe?)
    const installButton = document.createElement("button");
    installButton.innerText = "install";
    document.body.appendChild(installButton);
    //showInstallPrompt is a function 
    if ("onbeforeinstallprompt" in window) {
      window.addEventListener("beforeinstallprompt", e => {
        e.preventDefault();
        installButton.addEventListener('click', () => {
          if (!e.prompt) {
            popup("didn't you already install the App?", []);
          }
          e.prompt();
        })
      })
    } else if (true) {
      //show a prompt exaplaining how to install(in IOS safari)
      installButton.addEventListener('click', () => {
        popup("Install", [
          "You can install this App by adding into the home screen.",
          createElementFromHTML(`
              <ol>
              <li><div style='background-color: rgba(60, 138, 255, 0.911);
              -webkit-mask: url(${require('../icon/ios-safari-share-icon.svg')}) no-repeat center;
              mask: url(${require('../icon/ios-safari-share-icon.svg')}) no-repeat center;width: 28px;
              height: 28px;'></div> press share button</li><li><div style='background-color: white;
            -webkit-mask: url(${require('../icon/ios-safari-add-to-home-icon.svg')}) no-repeat center;
            mask: url(${require('../icon/ios-safari-add-to-home-icon.svg')}) no-repeat center;width: 28px;
            height: 28px;'></div> then press 'add to home' button</li></ol>
        `)]).then(res => console.log(res)).catch(e => console.warn(e))
      })
      /*

      popup("インストール",[
          "ホーム画面に追加することでインストールが出来ます。",
          createElementFromHTML(`
            <ol>
            <li><div style='background-color: rgba(60, 138, 255, 0.911);
            -webkit-mask: url(./icon/ios-safari-share-icon.svg) no-repeat center;
            mask: url(./icon/ios-safari-share-icon.svg) no-repeat center;width: 28px;
            height: 28px;'></div> 共有ボタンを押して、</li><li><div style='background-color: white;
          -webkit-mask: url(./icon/ios-safari-add-to-home-icon.svg) no-repeat center;
          mask: url(./icon/ios-safari-add-to-home-icon.svg) no-repeat center;width: 28px;
          height: 28px;'></div> ホームに追加ボタンを押す。</li></ol>
      `)]).then(res=>console.log(res)).catch(e=>console.warn(e))
      */

    }
  }
}
installApp();