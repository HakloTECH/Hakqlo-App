import platform from 'mini-platform-detect';
import "./baseFunctions";
import installProcess from './install';
import './back_terminal'
import './startupv2';
import '../css/main.scss';
import '../css/startupApp.css';
import { setPageLang } from './lang';
import './ui';
installProcess(window);
//console.log(platform);
