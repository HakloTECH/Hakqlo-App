
import './startup';

import {init as basicInit} from "./baseFunctions";
import installProcess from './install';
import './back_terminal'
import '../css/main.scss';
import '../css/startupApp.css';
basicInit(window);
installProcess(window);
