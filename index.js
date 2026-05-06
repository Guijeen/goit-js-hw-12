import{a as g,S as b,i as q}from"./assets/vendor-DnoGfDwQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();async function m(a,e){const s={key:"55636858-c5012cce39e9f46aea8eda2c3",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return g.defaults.baseURL="https://pixabay.com/api/",(await g.get("",{params:s})).data}const h=document.querySelector(".gallery");let v=new b(".gallery-card a",{captionsData:"alt",captionDelay:250});function p(a){h.insertAdjacentHTML("beforeend",a.map(({webformatURL:e,largeImageURL:i,tags:s,likes:t,views:r,comments:n,downloads:w})=>`<li class="gallery-card">
        <a href=${i}>
            <img class="gallery-image" src=${e} alt=${s} width="360"/>
        </a>
        <ul class = "gallery-card-details">
            <li class ="details-list">
                <h3>Likes</h3><p>${t}</p>
            </li>
            <li class ="details-list">
                <h3>Views</h3><p>${r}</p>
            </li>
            <li class ="details-list">
                <h3>Comments</h3><p>${n}</p>
            </li>
            <li class ="details-list">
                <h3>Downloads</h3><p>${w}</p>
            </li>
        </ul>
        </li>`).join("")),v.refresh()}function S(){h.innerHTML=""}const L=document.querySelector("#loader");function M(){L.classList.add("loader")}function f(){L.classList.remove("loader")}f();function o(a){q.error({message:a,position:"topLeft"})}const y=document.querySelector("#moreBtn");function B(){y.classList.remove("hidden")}function u(){y.classList.add("hidden")}const P=document.querySelector(".form");let c=null,l=1,d=0;P.addEventListener("submit",$);async function $(a){if(a.preventDefault(),c=a.target.elements["search-text"].value.trim(),u(),S(),l=1,c===""){o("field is empty"),a.target.reset();return}M();try{const e=await m(c,l);if(e.hits.length<=0){o("Sorry, there are no images matching your search query. Please try again!");return}h.innerHTML="",p(e.hits,l),d+=e.hits.length,l++,e.totalHits<=d?(u(),o("We're sorry, but you've reached the end of search results.")):B()}catch(e){o(e.message),console.log(e.message)}finally{f(),a.target.reset()}}y.addEventListener("click",H);async function H(a){try{const e=await m(c,l);p(e.hits),l++,d+=e.hits.length;const s=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({left:0,top:s,behavior:"smooth"}),e.totalHits<=d&&(u(),o("We're sorry, but you've reached the end of search results."))}catch(e){o(e.message),console.log(e.message)}finally{f()}}
//# sourceMappingURL=index.js.map
