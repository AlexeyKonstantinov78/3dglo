'use strict';

import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import scrollList from "./modules/scrollList";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import blockOurTeam from "./modules/blockOurTeam";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

//Timer
countTimer('01 january 2021');
//menu
toggleMenu();
//popup
togglePopUp();
//buttom scroll
scrollList();
//tab
tabs();
//слайдер
slider();
// наша команда
blockOurTeam();
//калькулятор
calc(100);
// отправка ajax form
sendForm();