import{r as m,o as l,c as _,b as e,K as h,d as o,e as i,w as p,L as y,R as C,F as f,f as x,t as v,N as k,O as $,a as N,H as S,p as B,i as H,j,B as I}from"./vendor.9182a9ef.js";import{_ as w}from"./index.d99c710f.js";import{a as A}from"./index.c628ca2a.js";const V={class:"homeswiper"},z={class:"custom-slick-arrow",style:{left:"10px","z-index":"1"}},F={class:"custom-slick-arrow",style:{right:"10px"}},L={class:"swiper-item"},O={class:"swiper-box"},R={class:"swiper-left"},T={class:"banner-right"},D=["src","alt"],E={props:{banner:Array},setup(a){const t=a,n=m({bgColor:t.banner[0].bg_color});console.log(t);function c(u,r){n.bgColor=t.banner[r].bg_color}return(u,r)=>{const g=k;return l(),_("div",V,[e("div",{class:"swiperBg",style:h({backgroundColor:o(n).bgColor})},null,4),i(g,{arrows:"",autoplay:"",beforeChange:c},{prevArrow:p(()=>[e("div",z,[i(o(y))])]),nextArrow:p(()=>[e("div",F,[i(o(C))])]),default:p(()=>[(l(!0),_(f,null,x(t.banner,(s,b)=>(l(),_("div",L,[e("div",O,[e("div",R,[e("h3",{style:h({color:s.text_color})},v(s.desktop_sub_title||s.sub_title),5),e("h1",{style:h({color:s.text_color})},v(s.desktop_title||s.title),5)]),e("div",T,[e("img",{src:`https://pixl.decathlon.com.cn/${s.picture_desktop}/banner.jpg`,alt:s.title},null,8,D)])])]))),256))]),_:1},8,["beforeChange"])])}}};var K=w(E,[["__scopeId","data-v-0716015e"]]);const q=a=>(B("data-v-fe63f666"),a=a(),H(),a),G={class:"homepage"},J={class:"live"},M=q(()=>e("h1",null,"\u4E50\u4EAB\u751F\u6D3B100+",-1)),P={class:"live-list"},Q={class:"live-item"},U={class:"live-btn"},W=["src","alt"],X=j("\u7ACB\u5373\u4EAB\u53D7\u751F\u6D3B"),Y={async setup(a){let t,n,c=([t,n]=$(()=>A()),t=await t,n(),t);const u=N(),r=m({banner:c.banner,sports:c.sports});return console.log(c),(g,s)=>{const b=I;return l(),_("div",G,[i(K,{banner:o(r).banner},null,8,["banner"]),e("div",J,[M,e("div",P,[o(r).sports.length!==0?(l(),_(f,{key:0},x(10,d=>e("div",Q,[e("div",U,[e("img",{src:o(r).sports[d].menuThumbnail,alt:o(r).sports[d].displayName},null,8,W),e("h3",null,v(o(r).sports[d].displayName),1)])])),64)):S("",!0)]),i(b,{style:{background:"rgb(152, 110, 166)",border:"none",color:"white","font-weight":"800","box-shadow":"10px 10px 10px rgba(0, 0, 0, 0.26)"},shape:"round",size:"large",onClick:s[0]||(s[0]=d=>o(u).push("/product"))},{default:p(()=>[X]),_:1})])])}}};var te=w(Y,[["__scopeId","data-v-fe63f666"]]);export{te as default};
