import{j as i,R as n,a as d}from"./vendor.c97970d3.js";const m=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};m();var u="./assets/image-equilibrium.90d2b484.jpg",p="./assets/icon-ethereum.76974d10.svg",f="./assets/icon-clock.725e4636.svg",x="./assets/image-avatar.48c39391.png";const t=i.exports.jsx,s=i.exports.jsxs;function h(){return t("div",{className:"bg-main-bg overflow-auto font-outfit h-screen w-screen",children:s("article",{className:"bg-card-bg rounded-xl w-[327px] lg:w-[350px] mx-auto m-16 mt-[152px] p-6 flex flex-col divide-y divide-line gap-[7px] shadow-card",children:[s("main",{className:"mb-[15px]",children:[t("figure",{className:"bg-cyan rounded-xl",children:t("img",{src:u,alt:"Image of a glassy cube",className:"rounded-xl lg:cursor-pointer lg:hover:opacity-50 lg:background-cyan "})}),t("h1",{className:"mt-[22px]",children:t("a",{href:"#",className:" text-white text-heading font-semibold lg:hover:text-cyan ",children:"Equilibrium #3429"})}),s("div",{children:[t("section",{className:"text-soft-blue text-body font-light mt-[14px]",children:"Our Equilibrium collection promotes balance and calm."}),s("section",{className:"pt-[1px] flex flex-row justify-between mt-5 items-center",children:[s("div",{className:"flex flex-row whitespace-nowrap gap-[7px]",children:[t("img",{className:"object-contain",alt:"",src:p}),t("p",{className:"text-cyan text-caption inline font-semibold",children:"0.041 ETH"})]}),s("div",{className:"flex flex-row gap-[7px] pr-[3px]",children:[t("img",{className:"object-contain",alt:"",src:f}),t("p",{className:"text-soft-blue  text-caption whitespace-nowrap",children:"3 days left"})]})]})]})]}),s("footer",{className:"flex flex-row justify-start items-center gap-4 pt-4",children:[t("img",{className:"w-[33px] border-white border border-1 rounded rounded-full",src:x,alt:"Jules Wyvern Avatar"}),s("p",{className:"text-soft-blue pb-[1px]",children:["Creation of",t("a",{href:"#",className:"ml-[6px] cursor-pointer lg:hover:text-cyan text-white",children:"Jules Wyvern"})]})]})]})})}n.render(t(d.StrictMode,{children:t(h,{})}),document.getElementById("root"));
