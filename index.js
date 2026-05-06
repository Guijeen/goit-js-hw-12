import{a as g,S as w,i as q}from"./assets/vendor-DnoGfDwQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();async function y(s,e){const o={key:"55636858-c5012cce39e9f46aea8eda2c3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return g.defaults.baseURL="https://pixabay.com/api/",(await g.get("",{params:o})).data}const h=document.querySelector(".gallery");let v=new w(".gallery-card a",{captionsData:"alt",captionDelay:250});function m(s){h.insertAdjacentHTML("beforeend",s.map(({webformatURL:e,largeImageURL:a,tags:o,likes:t,views:r,comments:i,downloads:b})=>`<li class="gallery-card">
        <a href=${a}>
            <img class="gallery-image" src=${e} alt=${o} width="360"/>
        </a>
        <ul class = "gallery-card-details">
            <li class ="details-list">
                <h3>Likes</h3><p>${t}</p>
            </li>
            <li class ="details-list">
                <h3>Views</h3><p>${r}</p>
            </li>
            <li class ="details-list">
                <h3>Comments</h3><p>${i}</p>
            </li>
            <li class ="details-list">
                <h3>Downloads</h3><p>${b}</p>
            </li>
        </ul>
        </li>`).join("")),v.refresh()}function S(){h.innerHTML=""}const p=document.querySelector("#loader");function B(){p.classList.add("loader")}function f(){p.classList.remove("loader")}f();function l(s){q.error({message:s,position:"topLeft"})}const L=document.querySelector("#moreBtn");function M(){L.classList.remove("hidden")}function u(){L.classList.add("hidden")}const $=document.querySelector(".form");let c=null,n=1,d=0;$.addEventListener("submit",P);function P(s){if(s.preventDefault(),c=s.target.elements["search-text"].value.trim(),u(),S(),n=1,c===""){l("field is empty"),s.target.reset();return}B(),y(c,n).then(e=>{if(e.hits.length<=0){l("Sorry, there are no images matching your search query. Please try again!");return}h.innerHTML="",m(e.hits),d+=e.hits.length,n++,e.totalHits<=d?(u(),l("We're sorry, but you've reached the end of search results.")):M()}).catch(e=>{l(e.message),console.log(e.message)}).finally(()=>{f(),s.target.reset()})}moreBtn.addEventListener("click",H);function H(s){y(c,n).then(e=>{m(e.hits),n++,d+=e.hits.length;const o=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({left:0,top:o,behavior:"smooth"}),e.totalHits<=d&&(u(),l("We're sorry, but you've reached the end of search results."))}).catch(e=>{l(e.message),console.log(e.message)}).finally(()=>{f()})}
//# sourceMappingURL=index.js.map
