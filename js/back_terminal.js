import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
//import {setCoordinate, startRain, stopRain} from './codeRain';
let blankLinesTop = 0, blankSpacesLeft = 0;
window.term = new Terminal();
const fitAddon = new FitAddon();
term.loadAddon(fitAddon);
term.open(document.querySelector('#xterm_container'));
fitAddon.fit();
window.addEventListener('resize',e=>{
  fitAddon.fit();
  term.write('resized...\n\x1b[1G');
})

window.addEventListener("DOMContentLoaded",()=>{
  ((console)=>{
    const log = console.log;
    const warn = console.warn;
    const error = console.error;
    const agjustCursorPos = ()=>{
      if(term.buffer.baseY<=blankLinesTop) term.write(`\x1b[;${blankSpacesLeft+1}H`);
    }
    console.log = (...args) =>{
      const arg = args.join(' ');
      log(arg);
      agjustCursorPos();
      term.write('\x1b[33m'+arg.replace(/\\n/g,'\n\x1b[1G')+'\n\x1b[1G');
      
    }
    console.warn = (...args) =>{
      const arg = args.join(' ');
      warn(arg);
      agjustCursorPos();
      term.write('\x1b[33m'+arg.replace(/\\n/g,'\n\x1b[1G')+'\n\x1b[1G');
      
    }
    console.error = (...args) =>{
      const arg = args.join(' ');
      error(arg);
      agjustCursorPos();
      term.write('\x1b[33m'+arg.replace(/\\n/g,'\n\x1b[1G')+'\n\x1b[1G');
      
    }
    secretizeFunc(console.log, 'log');
    secretizeFunc(console.warn, 'warn');
    secretizeFunc(console.error, 'error');
    
  })(globalThis.console)
})/*
window.addEventListener("load",()=>{
  setCoordinate();
  startRain();
})
*/