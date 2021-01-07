'use strict';

import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import scrollList from "./modules/scrollList";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import blockOurTeam from "./modules/blockOurTeam";
import calc from "./modules/calc";
import sliderTrustUs from "./modules/sliderTrustUs";
import sendForm from "./modules/sendForm";

//Timer
countTimer('10 january 2021');
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
// Слайдер нам доверяют
sliderTrustUs();
// отправка ajax form
sendForm();