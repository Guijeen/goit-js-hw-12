import{a as y,S as v,i as S}from"./assets/vendor-DnoGfDwQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();async function g(a,e){const s={key:"55636858-c5012cce39e9f46aea8eda2c3",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return y.defaults.baseURL="https://pixabay.com/api/",(await y.get("",{params:s})).data}const m=document.querySelector(".gallery");let B=new v(".gallery-card a",{captionsData:"alt",captionDelay:250});function p(a){m.insertAdjacentHTML("beforeend",a.map(({webformatURL:e,largeImageURL:i,tags:s,likes:t,views:r,comments:n,downloads:q})=>`<li class="gallery-card">
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
                <h3>Downloads</h3><p>${q}</p>
            </li>
        </ul>
        </li>`).join("")),B.refresh()}function M(){m.innerHTML=""}const L=document.querySelector("#loader");function w(){L.classList.add("loader")}function h(){L.classList.remove("loader")}h();function o(a){S.error({message:a,position:"topLeft"})}const f=document.querySelector("#moreBtn");function b(){f.classList.remove("hidden")}function u(){f.classList.add("hidden")}const P=document.querySelector(".form");let d=null,l=1,c=0;P.addEventListener("submit",$);async function $(a){if(a.preventDefault(),d=a.target.elements["search-text"].value.trim(),u(),M(),l=1,c=0,d===""){o("field is empty"),a.target.reset();return}w();try{const e=await g(d,l);if(e.hits.length<=0){o("Sorry, there are no images matching your search query. Please try again!");return}p(e.hits,l),c+=e.hits.length,l++,e.totalHits<=c?(u(),o("We're sorry, but you've reached the end of search results.")):b()}catch(e){o(e.message),console.log(e.message)}finally{h(),a.target.reset()}}f.addEventListener("click",O);async function O(a){w(),u();try{const e=await g(d,l);p(e.hits),l++,c+=e.hits.length;const s=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({left:0,top:s*2,behavior:"smooth"}),e.totalHits<=c?o("We're sorry, but you've reached the end of search results."):b()}catch(e){o(e.message),console.log(e.message)}finally{h()}}
//# sourceMappingURL=index.js.map
