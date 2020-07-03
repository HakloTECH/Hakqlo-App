import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import {setCoordinate, startRain, stopRain} from './codeRain';
let blankLinesTop = 0, blankSpacesLeft = 0;
const term = new Terminal();
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
      if(term.buffer.baseY<=blankLinesTop)
      term.write(`\x1b[;${blankSpacesLeft+1}H`)
    }
    console.log = (...args) =>{
      log(args.join(' '));
      agjustCursorPos();
      term.write(args.join(' ')+'\n\x1b[1G');
      
    }
    console.warn = (...args) =>{
      warn(args.join(' '));
      agjustCursorPos();
      term.write('\x1b[33m'+args.join(' ')+'\x1b[0m\n\x1b[1G');
      
    }
    console.error = (...args) =>{
      error(args.join(' '));
      agjustCursorPos();
      term.write('\x1b[31m'+args.join(' ')+'\x1b[0m\n\x1b[1G');
      
    }
  })(globalThis.console)
})
window.addEventListener("load",()=>{
  setCoordinate();
  startRain();
})
