(()=>{"use strict";(e=>{const t=setInterval(o,1e3,e);function o(e){const o=document.querySelector("#timer-hours"),c=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");function l(e){return e>=0&&e<10?"0"+e:e}!function(){const r=function(){const t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),c=Math.floor(t/60%60);return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:c,seconds:o}}();o.textContent=l(r.hours),c.textContent=l(r.minutes),n.textContent=l(r.seconds),r.timeRemaining<=0&&(clearInterval(t),o.textContent="00",c.textContent="00",n.textContent="00")}()}o(e)})("31 december 2020"),(()=>{const e=document.querySelector("menu"),t=document.querySelector("body"),o=(e.querySelectorAll("ul>li>a"),()=>{e.classList.toggle("active-menu")});t.addEventListener("click",(t=>{let c=t.target;c.closest(".active-menu")||!0!==e.classList.contains("active-menu")||o(),c.closest(".menu")&&o(),c.closest(".close-btn")&&o(),c.closest("a")&&null!==c.closest("menu")&&!c.closest(".close-btn")&&(o(),t.preventDefault(),document.getElementById(c.getAttribute("href").substr(1)).scrollIntoView({block:"start",behavior:"smooth"}))}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content");document.querySelectorAll(".popup-btn").forEach((o=>{o.addEventListener("click",(o=>{if(o.preventDefault(),e.style.display="block",t.style.top="30%",document.documentElement.offsetWidth>=768){let e=0;requestAnimationFrame((function o(){e++,t.style.opacity=e/100,e<100&&setTimeout(o,2)}))}}))})),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))}))})(),(()=>{const e=document.querySelector('a[href*="#service-block"]');document.documentElement.style,e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({block:"start",behavior:"smooth"})}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let c=e.target;c=c.closest(".service-header-tab"),c&&t.forEach(((e,n)=>{e===c&&(e=>{for(let c=0;c<o.length;c++)e===c?(t[c].classList.add("active"),o[c].classList.remove("d-none")):(t[c].classList.remove("active"),o[c].classList.add("d-none"))})(n)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content");let o,c=document.querySelectorAll(".dot"),n=0;const l=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},s=()=>{l(e,n,"portfolio-item-active"),l(c,n,"dot-active"),n++,n>=e.length&&(n=0),r(e,n,"portfolio-item-active"),r(c,n,"dot-active")},a=(t=1500)=>{0===c.length&&(e=>{for(let t=0;t<e;t++){let e=document.createElement("li");e.classList.add("dot"),document.querySelector(".portfolio-dots").append(e)}c=document.querySelectorAll(".dot"),r(c,0,"dot-active")})(e.length),o=setInterval(s,t)};t.addEventListener("click",(t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot")&&(l(e,n,"portfolio-item-active"),l(c,n,"dot-active"),o.matches("#arrow-right")?n++:o.matches("#arrow-left")?n--:o.matches(".dot")&&c.forEach(((e,t)=>{e===o&&(n=t)})),n>=e.length&&(n=0),n<0&&(n=e.length-1),r(e,n,"portfolio-item-active"),r(c,n,"dot-active"))})),t.addEventListener("mouseover",(e=>{e.target.matches(".portfolio-btn, .dot")&&clearInterval(o)})),t.addEventListener("mouseout",(e=>{e.target.matches(".portfolio-btn, .dot")&&a()})),a(1500)})(),(()=>{const e=document.querySelector(".command>.container>.row");let t;e.addEventListener("mouseover",(e=>{e.target.matches("img")&&(t=e.target.src,e.target.src=e.target.dataset.img)})),e.addEventListener("mouseout",(e=>{e.target.matches("img")&&(e.target.src=t)}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),c=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),r=document.getElementById("total"),s=(e,t=0)=>{let o=Math.ceil(e/1e3*11);t<e&&(t+=+o),t<e?(setTimeout(requestAnimationFrame((()=>{s(e,t)})),1),r.textContent=t):r.textContent=Math.round(e)};t.addEventListener("change",(t=>{const r=t.target;(r.matches(".calc-type")||r.matches(".calc-square")||r.matches(".calc-count")||r.matches(".calc-day"))&&(()=>{let t=1,r=1,a=0;const i=o.options[o.selectedIndex].value,u=+c.value;n.value>1&&(t+=(n.value-1)/10),l.value&&l.value<5?r*=2:l.value&&l.value<10&&(r*=1.5),i&&u&&(a=e*i*u*t*r,requestAnimationFrame((()=>{s(a)})))})()}))})(100),(()=>{const e="Что то пошло не так...",t=document.querySelectorAll("form"),o=document.createElement("div");o.classList.add("preloader"),o.innerHTML='\n            <div class="circle circle-1"></div>\n            <div class="circle circle-2"></div>\n            <div class="circle circle-3"></div>\n            <div class="circle circle-4"></div>\n            <div class="circle circle-5"></div>                \n            ';const c=document.createElement("div");c.style.cssText="font-size: 2rem; color: #FFFFFF;",t.forEach((t=>{t.addEventListener("input",(e=>l(e.target,t))),t.addEventListener("submit",(l=>{l.preventDefault(),t.appendChild(c),c.textContent="";const a=new FormData(t);let i={};a.forEach(((e,t)=>{i[t]=e})),""===i.user_name||""===i.user_email||""===i.user_phone||void 0!==i.user_message&&""===i.user_message?c.textContent=e:(t.appendChild(o),s(i).then((e=>{if(200!==e.status)throw new Error("status network not 200");t.removeChild(o),c.textContent="Спсасибо! Мы скоро с вами свяжемся!",n(t)})).catch((l=>{t.removeChild(o),c.textContent=e,n(t),console.error(l)})).finally((()=>{r(t)})))}))}));const n=e=>{setTimeout((()=>{e.removeChild(c)}),5e3)},l=(e,t)=>{e.closest(".form-phone")&&(e.value=e.value.substring(0,12).replace(/[^\+0-9]/g,"")+e.value.substring(11).replace(/./g,""),/^\+?([-()]*\d){8,11}$/.test(e.value)&&e.value.length>=8&&e.value.length<=12?e.style.border="":e.style.border="solid red"),(e.closest(".form-name")||e.closest("#form2-name"))&&(e.value=e.value.replace(/[^А-Яа-яЁё ]/gi,"")),e.closest(".form-email")&&(e.value=e.value.replace(/[^\w+@\w+\.\w]/gi,""),/^\w+@\w+\.\w{2,}$/g.test(e.value)?e.style.border="":e.style.border="solid red"),e.closest(".mess")&&(e.value=e.value.replace(/[^А-Яа-яЁё\d .,?!'"]/gi,""))},r=e=>{e.querySelectorAll("input").forEach((e=>{e.value=""}))},s=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})()})();