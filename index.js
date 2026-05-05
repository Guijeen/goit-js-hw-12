import{a as n,S as m,i as p}from"./assets/vendor-DnoGfDwQ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(r){const s={key:"55636858-c5012cce39e9f46aea8eda2c3",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return n.defaults.baseURL="https://pixabay.com/api/",n.get("",{params:s}).then(i=>i.data.hits).catch(i=>console.log(i.message))}const c=document.querySelector(".gallery");let y=new m(".gallery-card a",{captionsData:"alt",captionDelay:250});function g(r){c.innerHTML=r.map(({webformatURL:a,largeImageURL:s,tags:i,likes:e,views:t,comments:l,downloads:f})=>`<li class="gallery-card">
        <a href=${s}>
            <img class="gallery-image" src=${a} alt=${i} width="360"/>
        </a>
        <ul class = "gallery-card-details">
            <li class ="details-list">
                <h3>Likes</h3><p>${e}</p>
            </li>
            <li class ="details-list">
                <h3>Views</h3><p>${t}</p>
            </li>
            <li class ="details-list">
                <h3>Comments</h3><p>${l}</p>
            </li>
            <li class ="details-list">
                <h3>Downloads</h3><p>${f}</p>
            </li>
        </ul>
        </li>`).join(""),y.refresh()}function L(){c.innerHTML=""}const u=document.querySelector("#loader");function b(){u.classList.add("loader")}function d(){u.classList.remove("loader")}const w=document.querySelector(".form");d();w.addEventListener("submit",P);function P(r){r.preventDefault();const a=r.target.elements["search-text"].value.trim();if(L(),a===""){o("field is empty"),r.target.reset();return}b(),h(a).then(s=>{if(s.length<=0){o("Sorry, there are no images matching your search query. Please try again!");return}g(s)}).catch(s=>{console.log(s),o(s.message)}).finally(()=>{d(),r.target.reset()})}function o(r){p.error({message:r,position:"topLeft"})}
//# sourceMappingURL=index.js.map
