import './index.html';
import './fute.html';
import './edu.html';
import './about.html';
import './index.scss';


var Mobile = require('./modules/mobile');

const menu = document.querySelector(".menu .main");
const menuTrigger = document.querySelector('.menu-burger');

Mobile(menuTrigger, menu);
