import{a as d,S as L,i as b}from"./assets/vendor-DnoGfDwQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function m(s,t){const a={key:"55636858-c5012cce39e9f46aea8eda2c3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};d.defaults.baseURL="https://pixabay.com/api/",console.log(d.get("",{params:a}));const e=(await d.get("",{params:a})).data;return console.log(e.totalHits),e}const u=document.querySelector(".gallery");let w=new L(".gallery-card a",{captionsData:"alt",captionDelay:250});function g(s){u.insertAdjacentHTML("beforeend",s.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:l,downloads:y})=>`<li class="gallery-card">
        <a href=${o}>
            <img class="gallery-image" src=${t} alt=${a} width="360"/>
        </a>
        <ul class = "gallery-card-details">
            <li class ="details-list">
                <h3>Likes</h3><p>${e}</p>
            </li>
            <li class ="details-list">
                <h3>Views</h3><p>${r}</p>
            </li>
            <li class ="details-list">
                <h3>Comments</h3><p>${l}</p>
            </li>
            <li class ="details-list">
                <h3>Downloads</h3><p>${y}</p>
            </li>
        </ul>
        </li>`).join("")),w.refresh()}function S(){u.innerHTML=""}const p=document.querySelector("#loader");function q(){p.classList.add("loader")}function f(){p.classList.remove("loader")}function i(s){b.error({message:s,position:"topLeft"})}const P=document.querySelector(".form");let n=null,c=1;const h=document.querySelector("#moreBtn");f();P.addEventListener("submit",$);function $(s){if(s.preventDefault(),n=s.target.elements["search-text"].value.trim(),S(),n===""){i("field is empty"),s.target.reset();return}q(),m(n,c).then(t=>{if(t.hits.length<=0){i("Sorry, there are no images matching your search query. Please try again!");return}u.innerHTML="",g(t.hits),c++,h.classList.remove("hidden")}).catch(t=>{i(t.message),console.log(t.message)}).finally(()=>{f(),s.target.reset()})}h.addEventListener("click",v);function v(s){m(n,c).then(t=>{g(t.hits),c++}).catch(t=>{i(t.message),console.log(t.message)}).finally(()=>{f()})}
//# sourceMappingURL=index.js.map
