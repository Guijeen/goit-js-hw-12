import{a as g,S as b,i as w}from"./assets/vendor-DnoGfDwQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();async function y(s,e){const l={key:"55636858-c5012cce39e9f46aea8eda2c3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return g.defaults.baseURL="https://pixabay.com/api/",(await g.get("",{params:l})).data}const h=document.querySelector(".gallery");let q=new b(".gallery-card a",{captionsData:"alt",captionDelay:250});function m(s){h.insertAdjacentHTML("beforeend",s.map(({webformatURL:e,largeImageURL:i,tags:l,likes:t,views:r,comments:o,downloads:L})=>`<li class="gallery-card">
        <a href=${i}>
            <img class="gallery-image" src=${e} alt=${l} width="360"/>
        </a>
        <ul class = "gallery-card-details">
            <li class ="details-list">
                <h3>Likes</h3><p>${t}</p>
            </li>
            <li class ="details-list">
                <h3>Views</h3><p>${r}</p>
            </li>
            <li class ="details-list">
                <h3>Comments</h3><p>${o}</p>
            </li>
            <li class ="details-list">
                <h3>Downloads</h3><p>${L}</p>
            </li>
        </ul>
        </li>`).join("")),q.refresh()}function v(){h.innerHTML=""}const p=document.querySelector("#loader");function S(){p.classList.add("loader")}function f(){p.classList.remove("loader")}f();function a(s){w.error({message:s,position:"topLeft"})}const P=document.querySelector(".form");let d=null,n=1;const c=document.querySelector("#moreBtn");let u=0;P.addEventListener("submit",$);function $(s){if(s.preventDefault(),d=s.target.elements["search-text"].value.trim(),c.classList.add("hidden"),v(),n=1,d===""){a("field is empty"),s.target.reset();return}S(),y(d,n).then(e=>{if(e.hits.length<=0){a("Sorry, there are no images matching your search query. Please try again!");return}h.innerHTML="",m(e.hits),u+=e.hits.length,n++,e.totalHits<=u?(c.classList.add("hidden"),a("We're sorry, but you've reached the end of search results.")):c.classList.remove("hidden")}).catch(e=>{a(e.message),console.log(e.message)}).finally(()=>{f(),s.target.reset()})}c.addEventListener("click",H);function H(s){y(d,n).then(e=>{m(e.hits),n++,u+=e.hits.length;const l=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({left:0,top:l,behavior:"smooth"}),e.totalHits<=u&&(c.classList.add("hidden"),a("We're sorry, but you've reached the end of search results."))}).catch(e=>{a(e.message),console.log(e.message)}).finally(()=>{f()})}
//# sourceMappingURL=index.js.map
