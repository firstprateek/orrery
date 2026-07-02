var Dg=Object.defineProperty;var Lg=(s,t,e)=>t in s?Dg(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var et=(s,t,e)=>Lg(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="184",Ug={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Og={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sp=0,xu=1,rp=2,Ng=3,Fg=0,ma=1,ap=2,pr=3,Ei=0,Ye=1,zn=2,Hn=0,bs=1,Sr=2,vu=3,yu=4,op=5,Bg=6,Hi=100,lp=101,cp=102,hp=103,up=104,dp=200,fp=201,pp=202,mp=203,yl=204,Ml=205,gp=206,_p=207,xp=208,vp=209,yp=210,Mp=211,Sp=212,bp=213,Tp=214,Sl=0,bl=1,Tl=2,Cs=3,El=4,wl=5,Al=6,Cl=7,Za=0,Ep=1,wp=2,Gn=0,_c=1,xc=2,vc=3,Ka=4,yc=5,Mc=6,Sc=7,Mu="attached",Ap="detached",bc=300,oi=301,Zi=302,ga=303,_a=304,Dr=306,wa=1e3,_n=1001,Aa=1002,Ne=1003,Ju=1004,zg=1004,mr=1005,kg=1005,we=1006,xa=1007,Vg=1007,ii=1008,Hg=1008,mn=1009,$u=1010,ju=1011,br=1012,Tc=1013,Cn=1014,ln=1015,hn=1016,Ec=1017,wc=1018,Tr=1020,Qu=35902,td=35899,ed=1021,nd=1022,cn=1023,li=1026,Gi=1027,Ac=1028,Ja=1029,Ki=1030,Cc=1031,Gg=1032,Rc=1033,va=33776,ya=33777,Ma=33778,Sa=33779,Rl=35840,Pl=35841,Il=35842,Dl=35843,Ll=36196,Ul=37492,Ol=37496,Nl=37488,Fl=37489,Ca=37490,Bl=37491,zl=37808,kl=37809,Vl=37810,Hl=37811,Gl=37812,Wl=37813,Xl=37814,Yl=37815,ql=37816,Zl=37817,Kl=37818,Jl=37819,$l=37820,jl=37821,Ql=36492,tc=36494,ec=36495,nc=36283,ic=36284,Ra=36285,sc=36286,Cp=2200,Rp=2201,Pp=2202,Pa=2300,rc=2301,dl=2302,Su=2303,xs=2400,vs=2401,Ia=2402,Pc=2500,id=2501,Wg=0,Xg=1,Yg=2,Ip=3200,qg=3201,Zg=3202,Kg=3203,wi=0,Dp=1,Mi="",Be="srgb",Da="srgb-linear",La="linear",pe="srgb",Jg="",$g="rg",jg="ga",Qg=0,gs=7680,t_=7681,e_=7682,n_=7683,i_=34055,s_=34056,r_=5386,a_=512,o_=513,l_=514,c_=515,h_=516,u_=517,d_=518,bu=519,Lp=512,Up=513,Op=514,Ic=515,Np=516,Fp=517,Dc=518,Bp=519,Ua=35044,f_=35048,p_=35040,m_=35045,g_=35049,__=35041,x_=35046,v_=35050,y_=35042,M_="100",Tu="300 es",Tn=2e3,Rs=2001,S_={COMPUTE:"compute",RENDER:"render"},b_={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},T_={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},E_={TEXTURE_COMPARE:"depthTextureCompare"};function w_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const A_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function gr(s,t){return new A_[s](t)}function zp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kp(){const s=Oa("canvas");return s.style.display="block",s}const n0={};let Ji=null;function C_(s){Ji=s}function R_(){return Ji}function Na(...s){const t="THREE."+s.shift();Ji?Ji("log",t,...s):console.log(t,...s)}function Vp(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xt(...s){s=Vp(s);const t="THREE."+s.shift();if(Ji)Ji("warn",t,...s);else{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ut(...s){s=Vp(s);const t="THREE."+s.shift();if(Ji)Ji("error",t,...s);else{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ac(...s){const t=s.join(" ");t in n0||(n0[t]=!0,xt(...s))}function P_(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const I_={[Sl]:bl,[Tl]:Al,[El]:Cl,[Cs]:wl,[bl]:Sl,[Al]:Tl,[Cl]:El,[wl]:Cs};let Yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}};const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let i0=1234567;const Ts=Math.PI/180,Er=180/Math.PI;function En(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Gt(s,t,e){return Math.max(t,Math.min(e,s))}function sd(s,t){return(s%t+t)%t}function D_(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function L_(s,t,e){return s!==t?(e-s)/(t-s):0}function ba(s,t,e){return(1-e)*s+e*t}function U_(s,t,e,n){return ba(s,t,1-Math.exp(-e*n))}function O_(s,t=1){return t-Math.abs(sd(s,t*2)-t)}function N_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function F_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function B_(s,t){return s+Math.floor(Math.random()*(t-s+1))}function z_(s,t){return s+Math.random()*(t-s)}function k_(s){return s*(.5-Math.random())}function V_(s){s!==void 0&&(i0=s);let t=i0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function H_(s){return s*Ts}function G_(s){return s*Er}function W_(s){return(s&s-1)===0&&s!==0}function X_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Y_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function q_(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function on(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Z_={DEG2RAD:Ts,RAD2DEG:Er,generateUUID:En,clamp:Gt,euclideanModulo:sd,mapLinear:D_,inverseLerp:L_,lerp:ba,damp:U_,pingpong:O_,smoothstep:N_,smootherstep:F_,randInt:B_,randFloat:z_,randFloatSpread:k_,seededRandom:V_,degToRad:H_,radToDeg:G_,isPowerOfTwo:W_,ceilPowerOfTwo:X_,floorPowerOfTwo:Y_,setQuaternionFromProperEuler:q_,normalize:ee,denormalize:on},Gd=class Gd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gd.prototype.isVector2=!0;let j=Gd;class tn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){const _=Math.acos(g),v=Math.sin(_);m=Math.sin(m*_)/v,o=Math.sin(o*_)/v,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o;const _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wd=class Wd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(s0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(s0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uh.copy(this).projectOnVector(t),this.sub(uh)}reflect(t){return this.sub(uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wd.prototype.isVector3=!0;let R=Wd;const uh=new R,s0=new tn,Xd=class Xd{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],g=i[3],m=i[6],_=i[1],v=i[4],M=i[7],E=i[2],b=i[5],C=i[8];return r[0]=a*x+o*_+l*E,r[3]=a*g+o*v+l*b,r[6]=a*m+o*M+l*C,r[1]=c*x+h*_+d*E,r[4]=c*g+h*v+d*b,r[7]=c*m+h*M+d*C,r[2]=u*x+f*_+p*E,r[5]=u*g+f*v+p*b,r[8]=u*m+f*M+p*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(dh.makeScale(t,e)),this}rotate(t){return this.premultiply(dh.makeRotation(-t)),this}translate(t,e){return this.premultiply(dh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xd.prototype.isMatrix3=!0;let Jt=Xd;const dh=new Jt,r0=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a0=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K_(){const s={enabled:!0,workingColorSpace:Da,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mi?La:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ac("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ac("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Da]:{primaries:t,whitePoint:n,transfer:La,toXYZ:r0,fromXYZ:a0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:r0,fromXYZ:a0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),s}const ae=K_();function Ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hs;class Hp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hs===void 0&&(Hs=Oa("canvas")),Hs.width=t.width,Hs.height=t.height;const i=Hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let J_=0;class Wi{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(fh(i[a].image)):r.push(fh(i[a]))}else r=fh(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function fh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let $_=0;const ph=new R;class Re extends Yn{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=_n,i=_n,r=we,a=ii,o=cn,l=mn,c=Re.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=En(),this.name="",this.source=new Wi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){xt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wa:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wa:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=bc;Re.DEFAULT_ANISOTROPY=1;const Yd=class Yd{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(f+1)/2,E=(m+1)/2,b=(h+u)/4,C=(d+x)/4,y=(p+g)/4;return v>M&&v>E?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=C/n):M>E?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=y/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=C/r,i=y/r),this.set(n,i,r,e),this}let _=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yd.prototype.isVector4=!0;let xe=Yd;class rd extends Yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Re(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:we,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Wi(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xe extends rd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lc extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class j_ extends Xe{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Lc(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Uc extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Q_ extends Xe{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Uc(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}const mc=class mc{constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,p,x,g)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,p,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mc().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Gs.setFromMatrixColumn(t,0).length(),r=1/Gs.setFromMatrixColumn(t,1).length(),a=1/Gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){const u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(t1,t,e1)}lookAt(t,e,n){const i=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ii.crossVectors(n,Mn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ii.crossVectors(n,Mn)),Ii.normalize(),lo.crossVectors(Mn,Ii),i[0]=Ii.x,i[4]=lo.x,i[8]=Mn.x,i[1]=Ii.y,i[5]=lo.y,i[9]=Mn.y,i[2]=Ii.z,i[6]=lo.z,i[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],_=n[3],v=n[7],M=n[11],E=n[15],b=i[0],C=i[4],y=i[8],w=i[12],I=i[1],P=i[5],O=i[9],W=i[13],Y=i[2],L=i[6],k=i[10],F=i[14],it=i[3],ot=i[7],rt=i[11],St=i[15];return r[0]=a*b+o*I+l*Y+c*it,r[4]=a*C+o*P+l*L+c*ot,r[8]=a*y+o*O+l*k+c*rt,r[12]=a*w+o*W+l*F+c*St,r[1]=h*b+d*I+u*Y+f*it,r[5]=h*C+d*P+u*L+f*ot,r[9]=h*y+d*O+u*k+f*rt,r[13]=h*w+d*W+u*F+f*St,r[2]=p*b+x*I+g*Y+m*it,r[6]=p*C+x*P+g*L+m*ot,r[10]=p*y+x*O+g*k+m*rt,r[14]=p*w+x*W+g*F+m*St,r[3]=_*b+v*I+M*Y+E*it,r[7]=_*C+v*P+M*L+E*ot,r[11]=_*y+v*O+M*k+E*rt,r[15]=_*w+v*W+M*F+E*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],_=l*f-c*u,v=o*f-c*d,M=o*u-l*d,E=a*f-c*h,b=a*u-l*h,C=a*d-o*h;return e*(x*_-g*v+m*M)-n*(p*_-g*E+m*b)+i*(p*v-x*E+m*C)-r*(p*M-x*b+g*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=e*o-n*a,v=e*l-i*a,M=e*c-r*a,E=n*l-i*o,b=n*c-r*o,C=i*c-r*l,y=h*x-d*p,w=h*g-u*p,I=h*m-f*p,P=d*g-u*x,O=d*m-f*x,W=u*m-f*g,Y=_*W-v*O+M*P+E*I-b*w+C*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/Y;return t[0]=(o*W-l*O+c*P)*L,t[1]=(i*O-n*W-r*P)*L,t[2]=(x*C-g*b+m*E)*L,t[3]=(u*b-d*C-f*E)*L,t[4]=(l*I-a*W-c*w)*L,t[5]=(e*W-i*I+r*w)*L,t[6]=(g*M-p*C-m*v)*L,t[7]=(h*C-u*M+f*v)*L,t[8]=(a*O-o*I+c*y)*L,t[9]=(n*I-e*O-r*y)*L,t[10]=(p*b-x*M+m*_)*L,t[11]=(d*M-h*b-f*_)*L,t[12]=(o*w-a*P-l*y)*L,t[13]=(e*P-n*w+i*y)*L,t[14]=(x*v-p*E-g*_)*L,t[15]=(h*E-d*v+u*_)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,g=a*d,m=o*d,_=l*c,v=l*h,M=l*d,E=n.x,b=n.y,C=n.z;return i[0]=(1-(x+m))*E,i[1]=(f+M)*E,i[2]=(p-v)*E,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(u+m))*b,i[6]=(g+_)*b,i[7]=0,i[8]=(p+v)*C,i[9]=(g-_)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Gs.set(i[0],i[1],i[2]).length();const o=Gs.set(i[4],i[5],i[6]).length(),l=Gs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Dn.copy(this);const c=1/a,h=1/o,d=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,e.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Tn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Tn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Rs)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Tn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Tn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Rs)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};mc.prototype.isMatrix4=!0;let Xt=mc;const Gs=new R,Dn=new Xt,t1=new R(0,0,0),e1=new R(1,1,1),Ii=new R,lo=new R,Mn=new R,o0=new Xt,l0=new tn;class Rn{constructor(t=0,e=0,n=0,i=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return o0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(o0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return l0.setFromEuler(this),this.setFromQuaternion(l0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Oc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let n1=0;const c0=new R,Ws=new tn,fi=new Xt,co=new R,Wr=new R,i1=new R,s1=new tn,h0=new R(1,0,0),u0=new R(0,1,0),d0=new R(0,0,1),f0={type:"added"},r1={type:"removed"},Xs={type:"childadded",child:null},mh={type:"childremoved",child:null};class ue extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new R,e=new Rn,n=new tn,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Jt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(h0,t)}rotateY(t){return this.rotateOnAxis(u0,t)}rotateZ(t){return this.rotateOnAxis(d0,t)}translateOnAxis(t,e){return c0.copy(t).applyQuaternion(this.quaternion),this.position.add(c0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(h0,t)}translateY(t){return this.translateOnAxis(u0,t)}translateZ(t){return this.translateOnAxis(d0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?co.copy(t):co.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Wr,co,this.up):fi.lookAt(co,Wr,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),Ws.setFromRotationMatrix(fi),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(f0),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(r1),mh.child=t,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(f0),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,i1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,s1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ue.DEFAULT_UP=new R(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xi extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a1={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a1)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},ho={h:0,s:0,l:0};function gh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=sd(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=gh(a,r,t+1/3),this.g=gh(a,r,t),this.b=gh(a,r,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&xt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:xt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Gp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ae.workingToColorSpace(Je.copy(this),t),Math.round(Gt(Je.r*255,0,255))*65536+Math.round(Gt(Je.g*255,0,255))*256+Math.round(Gt(Je.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Je.copy(this),e);const n=Je.r,i=Je.g,r=Je.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Be){ae.workingToColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,i=Je.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(ho);const n=ba(Di.h,ho.h,e),i=ba(Di.s,ho.s,e),r=ba(Di.l,ho.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new vt;vt.NAMES=Gp;class Nc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new vt(t),this.density=e}clone(){return new Nc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new vt(t),this.near=e,this.far=n}clone(){return new Fc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ad extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ln=new R,pi=new R,_h=new R,mi=new R,Ys=new R,qs=new R,p0=new R,xh=new R,vh=new R,yh=new R,Mh=new xe,Sh=new xe,bh=new xe;class gn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ln.subVectors(t,e),i.cross(Ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ln.subVectors(i,e),pi.subVectors(n,e),_h.subVectors(t,e);const a=Ln.dot(Ln),o=Ln.dot(pi),l=Ln.dot(_h),c=pi.dot(pi),h=pi.dot(_h),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Mh.setScalar(0),Sh.setScalar(0),bh.setScalar(0),Mh.fromBufferAttribute(t,e),Sh.fromBufferAttribute(t,n),bh.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Mh,r.x),a.addScaledVector(Sh,r.y),a.addScaledVector(bh,r.z),a}static isFrontFacing(t,e,n,i){return Ln.subVectors(n,e),pi.subVectors(t,e),Ln.cross(pi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Ln.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ys.subVectors(i,n),qs.subVectors(r,n),xh.subVectors(t,n);const l=Ys.dot(xh),c=qs.dot(xh);if(l<=0&&c<=0)return e.copy(n);vh.subVectors(t,i);const h=Ys.dot(vh),d=qs.dot(vh);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ys,a);yh.subVectors(t,r);const f=Ys.dot(yh),p=qs.dot(yh);if(p>=0&&f<=p)return e.copy(r);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(qs,o);const g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return p0.subVectors(r,i),o=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(p0,o);const m=1/(g+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(Ys,a).addScaledVector(qs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class en{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uo.copy(n.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),fo.subVectors(this.max,Xr),Zs.subVectors(t.a,Xr),Ks.subVectors(t.b,Xr),Js.subVectors(t.c,Xr),Li.subVectors(Ks,Zs),Ui.subVectors(Js,Ks),ns.subVectors(Zs,Js);let e=[0,-Li.z,Li.y,0,-Ui.z,Ui.y,0,-ns.z,ns.y,Li.z,0,-Li.x,Ui.z,0,-Ui.x,ns.z,0,-ns.x,-Li.y,Li.x,0,-Ui.y,Ui.x,0,-ns.y,ns.x,0];return!Th(e,Zs,Ks,Js,fo)||(e=[1,0,0,0,1,0,0,0,1],!Th(e,Zs,Ks,Js,fo))?!1:(po.crossVectors(Li,Ui),e=[po.x,po.y,po.z],Th(e,Zs,Ks,Js,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const gi=[new R,new R,new R,new R,new R,new R,new R,new R],Un=new R,uo=new en,Zs=new R,Ks=new R,Js=new R,Li=new R,Ui=new R,ns=new R,Xr=new R,fo=new R,po=new R,is=new R;function Th(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){is.fromArray(s,r);const o=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Si=o1();function o1(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function pn(s){Math.abs(s)>65504&&xt("DataUtils.toHalfFloat(): Value out of range."),s=Gt(s,-65504,65504),Si.floatView[0]=s;const t=Si.uint32View[0],e=t>>23&511;return Si.baseTable[e]+((t&8388607)>>Si.shiftTable[e])}function ha(s){const t=s>>10;return Si.uint32View[0]=Si.mantissaTable[Si.offsetTable[t]+(s&1023)]+Si.exponentTable[t],Si.floatView[0]}class l1{static toHalfFloat(t){return pn(t)}static fromHalfFloat(t){return ha(t)}}const Fe=new R,mo=new j;let c1=0;class me extends Yn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ua,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mo.fromBufferAttribute(this,e),mo.applyMatrix3(t),this.setXY(e,mo.x,mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=on(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=on(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=on(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=on(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ua&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class h1 extends me{constructor(t,e,n){super(new Int8Array(t),e,n)}}class u1 extends me{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class d1 extends me{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class f1 extends me{constructor(t,e,n){super(new Int16Array(t),e,n)}}class od extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class p1 extends me{constructor(t,e,n){super(new Int32Array(t),e,n)}}class ld extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class m1 extends me{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=ha(this.array[t*this.itemSize]);return this.normalized&&(e=on(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=pn(e),this}getY(t){let e=ha(this.array[t*this.itemSize+1]);return this.normalized&&(e=on(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=pn(e),this}getZ(t){let e=ha(this.array[t*this.itemSize+2]);return this.normalized&&(e=on(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=pn(e),this}getW(t){let e=ha(this.array[t*this.itemSize+3]);return this.normalized&&(e=on(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=pn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=pn(e),this.array[t+1]=pn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.array[t+0]=pn(e),this.array[t+1]=pn(n),this.array[t+2]=pn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.array[t+0]=pn(e),this.array[t+1]=pn(n),this.array[t+2]=pn(i),this.array[t+3]=pn(r),this}}class Ct extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}}const g1=new en,Yr=new R,Eh=new R;class qe{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):g1.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);const e=Yr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Yr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(Eh)),this.expandByPoint(Yr.copy(t.center).sub(Eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let _1=0;const An=new Xt,wh=new ue,$s=new R,Sn=new en,qr=new en,Ge=new R;class Zt extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(w_(t)?ld:od)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return wh.lookAt(t),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];qr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(Sn.min,qr.min),Sn.expandByPoint(Ge),Ge.addVectors(Sn.max,qr.max),Sn.expandByPoint(Ge)):(Sn.expandByPoint(qr.min),Sn.expandByPoint(qr.max))}Sn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ge.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ge.fromBufferAttribute(o,c),l&&($s.fromBufferAttribute(t,c),Ge.add($s)),i=Math.max(i,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new R,l[y]=new R;const c=new R,h=new R,d=new R,u=new j,f=new j,p=new j,x=new R,g=new R;function m(y,w,I){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),o[y].add(x),o[w].add(x),o[I].add(x),l[y].add(g),l[w].add(g),l[I].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let y=0,w=_.length;y<w;++y){const I=_[y],P=I.start,O=I.count;for(let W=P,Y=P+O;W<Y;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const v=new R,M=new R,E=new R,b=new R;function C(y){E.fromBufferAttribute(i,y),b.copy(E);const w=o[y];v.copy(w),v.sub(E.multiplyScalar(E.dot(w))).normalize(),M.crossVectors(b,w);const P=M.dot(l[y])<0?-1:1;a.setXYZW(y,v.x,v.y,v.z,P)}for(let y=0,w=_.length;y<w;++y){const I=_[y],P=I.start,O=I.count;for(let W=P,Y=P+O;W<Y;W+=3)C(t.getX(W+0)),C(t.getX(W+1)),C(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new me(u,h,d)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ua,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new R;class Ps{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=on(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=on(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=on(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=on(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ps(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let x1=0;class nn extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=En(),this.name="",this.type="Material",this.blending=bs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=Ml,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){xt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ml&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class cd extends nn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let js;const Zr=new R,Qs=new R,tr=new R,er=new j,Kr=new j,Wp=new Xt,go=new R,Jr=new R,_o=new R,m0=new j,Ah=new j,g0=new j;class Xp extends ue{constructor(t=new cd){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new Zt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bc(e,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new Ps(n,3,0,!1)),js.setAttribute("uv",new Ps(n,2,3,!1))}this.geometry=js,this.material=t,this.center=new j(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qs.setFromMatrixScale(this.matrixWorld),Wp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qs.multiplyScalar(-tr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;xo(go.set(-.5,-.5,0),tr,a,Qs,i,r),xo(Jr.set(.5,-.5,0),tr,a,Qs,i,r),xo(_o.set(.5,.5,0),tr,a,Qs,i,r),m0.set(0,0),Ah.set(1,0),g0.set(1,1);let o=t.ray.intersectTriangle(go,Jr,_o,!1,Zr);if(o===null&&(xo(Jr.set(-.5,.5,0),tr,a,Qs,i,r),Ah.set(0,1),o=t.ray.intersectTriangle(go,_o,Jr,!1,Zr),o===null))return;const l=t.ray.origin.distanceTo(Zr);l<t.near||l>t.far||e.push({distance:l,point:Zr.clone(),uv:gn.getInterpolation(Zr,go,Jr,_o,m0,Ah,g0,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xo(s,t,e,n,i,r){er.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Kr.x=r*er.x-i*er.y,Kr.y=i*er.x+r*er.y):Kr.copy(er),s.copy(t),s.x+=Kr.x,s.y+=Kr.y,s.applyMatrix4(Wp)}const vo=new R,_0=new R;class Yp extends ue{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){vo.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(vo);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){vo.setFromMatrixPosition(t.matrixWorld),_0.setFromMatrixPosition(this.matrixWorld);const n=vo.distanceTo(_0)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}}const _i=new R,Ch=new R,yo=new R,Oi=new R,Rh=new R,Mo=new R,Ph=new R;class Lr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ch.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(Ch);const r=t.distanceTo(e)*.5,a=-this.direction.dot(yo),o=Oi.dot(this.direction),l=-Oi.dot(yo),c=Oi.lengthSq(),h=Math.abs(1-a*a);let d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){const x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ch).addScaledVector(yo,u),f}intersectSphere(t,e){_i.subVectors(t.center,this.origin);const n=_i.dot(this.direction),i=_i.dot(_i)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,i,r){Rh.subVectors(e,t),Mo.subVectors(n,t),Ph.crossVectors(Rh,Mo);let a=this.direction.dot(Ph),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,t);const l=o*this.direction.dot(Mo.crossVectors(Oi,Mo));if(l<0)return null;const c=o*this.direction.dot(Rh.cross(Oi));if(c<0||l+c>a)return null;const h=-o*Oi.dot(Ph);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pn extends nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const x0=new Xt,ss=new Lr,So=new qe,v0=new R,bo=new R,To=new R,Eo=new R,Ih=new R,wo=new R,y0=new R,Ao=new R;class be extends ue{constructor(t=new Zt,e=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Ih.fromBufferAttribute(d,t),a?wo.addScaledVector(Ih,h):wo.addScaledVector(Ih.sub(e),h))}e.add(wo)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(So.containsPoint(ss.origin)===!1&&(ss.intersectSphere(So,v0)===null||ss.origin.distanceToSquared(v0)>(t.far-t.near)**2))&&(x0.copy(r).invert(),ss.copy(t.ray).applyMatrix4(x0),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=_,E=v;M<E;M+=3){const b=o.getX(M),C=o.getX(M+1),y=o.getX(M+2);i=Co(this,m,t,n,c,h,d,b,C,y),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const _=o.getX(g),v=o.getX(g+1),M=o.getX(g+2);i=Co(this,a,t,n,c,h,d,_,v,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=a[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=_,E=v;M<E;M+=3){const b=M,C=M+1,y=M+2;i=Co(this,m,t,n,c,h,d,b,C,y),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const _=g,v=g+1,M=g+2;i=Co(this,a,t,n,c,h,d,_,v,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function v1(s,t,e,n,i,r,a,o){let l;if(t.side===Ye?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ei,o),l===null)return null;Ao.copy(o),Ao.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ao);return c<e.near||c>e.far?null:{distance:c,point:Ao.clone(),object:s}}function Co(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,bo),s.getVertexPosition(l,To),s.getVertexPosition(c,Eo);const h=v1(s,t,e,n,bo,To,Eo,y0);if(h){const d=new R;gn.getBarycoord(y0,bo,To,Eo,d),i&&(h.uv=gn.getInterpolatedAttribute(i,o,l,c,d,new j)),r&&(h.uv1=gn.getInterpolatedAttribute(r,o,l,c,d,new j)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};gn.getNormal(bo,To,Eo,u.normal),h.face=u,h.barycoord=d}return h}const $r=new xe,M0=new xe,S0=new xe,y1=new xe,b0=new Xt,Ro=new R,Dh=new qe,T0=new Xt,Lh=new Lr;class qp extends be{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mu,this.bindMatrix=new Xt,this.bindMatrixInverse=new Xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ro),this.boundingBox.expandByPoint(Ro)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qe),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ro),this.boundingSphere.expandByPoint(Ro)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dh.copy(this.boundingSphere),Dh.applyMatrix4(i),t.ray.intersectsSphere(Dh)!==!1&&(T0.copy(i).invert(),Lh.copy(t.ray).applyMatrix4(T0),!(this.boundingBox!==null&&Lh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Lh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new xe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():xt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;M0.fromBufferAttribute(i.attributes.skinIndex,t),S0.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?($r.copy(e),e.set(0,0,0,0)):($r.set(...e,1),e.set(0,0,0)),$r.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=S0.getComponent(r);if(a!==0){const o=M0.getComponent(r);b0.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(y1.copy($r).applyMatrix4(b0),a)}}return e.isVector4&&(e.w=$r.w),e.applyMatrix4(this.bindMatrixInverse)}}class hd extends ue{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wn extends Re{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ne,h=Ne,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const E0=new Xt,M1=new Xt;class zc{constructor(t=[],e=[]){this.uuid=En(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){xt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Xt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:M1;E0.multiplyMatrices(o,e[r]),E0.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new zc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Wn(e,t,t,cn,ln);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(xt("Skeleton: No bone found with UUID:",r),a=new hd),this.bones.push(a),this.boneInverses.push(new Xt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class wr extends me{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const nr=new Xt,w0=new Xt,Po=[],A0=new en,S1=new Xt,jr=new be,Qr=new qe;class ud extends be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,S1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new en),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,nr),A0.copy(t.boundingBox).applyMatrix4(nr),this.boundingBox.union(A0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qe),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,nr),Qr.copy(t.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Qr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(n),t.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,nr),w0.multiplyMatrices(n,nr),jr.matrixWorld=w0,jr.raycast(t,Po);for(let a=0,o=Po.length;a<o;a++){const l=Po[a];l.instanceId=r,l.object=this,e.push(l)}Po.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wn(new Float32Array(i*this.count),i,this.count,Ac,ln));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Uh=new R,b1=new R,T1=new Jt;class Vi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Uh.subVectors(n,e).cross(b1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Uh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||T1.getNormalMatrix(t),i=this.coplanarPoint(Uh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new qe,E1=new j(.5,.5),Io=new R;class Ur{constructor(t=new Vi,e=new Vi,n=new Vi,i=new Vi,r=new Vi,a=new Vi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],_=r[12],v=r[13],M=r[14],E=r[15];if(i[0].setComponents(c-a,f-h,m-p,E-_).normalize(),i[1].setComponents(c+a,f+h,m+p,E+_).normalize(),i[2].setComponents(c+o,f+d,m+x,E+v).normalize(),i[3].setComponents(c-o,f-d,m-x,E-v).normalize(),n)i[4].setComponents(l,u,g,M).normalize(),i[5].setComponents(c-l,f-u,m-g,E-M).normalize();else if(i[4].setComponents(c-l,f-u,m-g,E-M).normalize(),e===Tn)i[5].setComponents(c+l,f+u,m+g,E+M).normalize();else if(e===Rs)i[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);const e=E1.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Io.x=i.normal.x>0?t.max.x:t.min.x,Io.y=i.normal.y>0?t.max.y:t.min.y,Io.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Jn=new Xt,$n=new Ur;class kc{constructor(){this.coordinateSystem=Tn}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(Jn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),$n.setFromProjectionMatrix(Jn,i.coordinateSystem,i.reversedDepth),$n.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(Jn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),$n.setFromProjectionMatrix(Jn,i.coordinateSystem,i.reversedDepth),$n.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(Jn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),$n.setFromProjectionMatrix(Jn,i.coordinateSystem,i.reversedDepth),$n.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(Jn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),$n.setFromProjectionMatrix(Jn,i.coordinateSystem,i.reversedDepth),$n.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){const i=e.cameras[n];if(Jn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),$n.setFromProjectionMatrix(Jn,i.coordinateSystem,i.reversedDepth),$n.containsPoint(t))return!0}return!1}clone(){return new kc}}function Oh(s,t){return s-t}function w1(s,t){return s.z-t.z}function A1(s,t){return t.z-s.z}class C1{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=t,o.count=e,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const dn=new Xt,R1=new vt(1,1,1),C0=new Ur,P1=new kc,Do=new en,as=new qe,ta=new R,R0=new R,I1=new R,Nh=new C1,$e=new be,Lo=[];function D1(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,s.getComponent(r,a))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function os(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class Zp extends be{constructor(t,e,n=e*2,i){super(new Zt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new Wn(e,t,t,cn,ln);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new Wn(e,t,t,Ja,Cn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new Wn(e,t,t,cn,ln);n.colorSpace=ae.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const a=t.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),d=new me(h,l,c);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new me(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,dn),this.getBoundingBoxAt(r,Do).applyMatrix4(dn),t.union(Do)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qe);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,dn),this.getBoundingSphereAt(r,as).applyMatrix4(dn),t.union(as)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Oh),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;dn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(R1.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const a=t.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Oh),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._geometryInfo[t];if(i&&a.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(const h in n.attributes){const d=e.getAttribute(h),u=n.getAttribute(h);D1(d,u,l);const f=d.itemSize;for(let p=d.count,x=c;p<x;p++){const g=l+p;for(let m=0;m<f;m++)u.setComponent(g,m,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(i){const h=o.indexStart,d=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let u=0;u<a.count;u++)r.setX(h+u,l+a.getX(u));for(let u=a.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,e.boundingBox!==null&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,e.boundingSphere!==null&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=i[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,x=t-d;for(let g=h;g<h+u;g++)p[g]=p[g]+x;f.array.copyWithin(e,h,h+u),f.addUpdateRange(e,u),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(const f in u){const p=u[f],{array:x,itemSize:g}=p;x.copyWithin(t*g,h*g,(h+d)*g),p.addUpdateRange(t*g,d*g),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new en,a=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(ta.fromBufferAttribute(o,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new qe;this.getBoundingBoxAt(t,Do),Do.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let d=c;a&&(d=a.getX(d)),ta.fromBufferAttribute(o,d),l=Math.max(l,r.center.distanceToSquared(ta))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Oh);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);os(this._multiDrawCounts,i),os(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),os(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),os(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),os(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Zt,this._initializeGeometry(r));const a=this.geometry;r.index&&os(r.index.array,a.index.array);for(const o in r.attributes)os(r.attributes[o].array,a.attributes[o].array)}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;$e.material=this.material,$e.geometry.index=a.index,$e.geometry.attributes=a.attributes,$e.geometry.boundingBox===null&&($e.geometry.boundingBox=new en),$e.geometry.boundingSphere===null&&($e.geometry.boundingSphere=new qe);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];$e.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,$e.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,$e.geometry.boundingBox),this.getBoundingSphereAt(c,$e.geometry.boundingSphere),$e.raycast(t,Lo);for(let d=0,u=Lo.length;d<u;d++){const f=Lo[d];f.object=this,f.batchId=o,e.push(f)}Lo.length=0}$e.material=null,$e.geometry.index=null,$e.geometry.attributes={},$e.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,o=i.attributes.position.count>65535?4:2);const c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,x=p.image.data,g=n.isArrayCamera?P1:C0;f&&!n.isArrayCamera&&(dn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),C0.setFromProjectionMatrix(dn,n.coordinateSystem,n.reversedDepth));let m=0;if(this.sortObjects){dn.copy(this.matrixWorld).invert(),ta.setFromMatrixPosition(n.matrixWorld).applyMatrix4(dn),R0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(dn);for(let M=0,E=c.length;M<E;M++)if(c[M].visible&&c[M].active){const b=c[M].geometryIndex;this.getMatrixAt(M,dn),this.getBoundingSphereAt(b,as).applyMatrix4(dn);let C=!1;if(f&&(C=!g.intersectsSphere(as,n)),!C){const y=u[b],w=I1.subVectors(as.center,ta).dot(R0);Nh.push(y.start,y.count,w,M)}}const _=Nh.list,v=this.customSort;v===null?_.sort(r.transparent?A1:w1):v.call(this,_,n);for(let M=0,E=_.length;M<E;M++){const b=_[M];h[m]=b.start*o*l,d[m]=b.count*l,x[m]=b.index,m++}Nh.reset()}else for(let _=0,v=c.length;_<v;_++)if(c[_].visible&&c[_].active){const M=c[_].geometryIndex;let E=!1;if(f&&(this.getMatrixAt(_,dn),this.getBoundingSphereAt(M,as).applyMatrix4(dn),E=!g.intersectsSphere(as,n)),!E){const b=u[M];h[m]=b.start*o*l,d[m]=b.count*l,x[m]=_,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,a){this.onBeforeRender(t,null,i,r,a)}}class un extends nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oc=new R,lc=new R,P0=new Xt,ea=new Lr,Uo=new qe,Fh=new R,I0=new R;class $i extends ue{constructor(t=new Zt,e=new un){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)oc.fromBufferAttribute(e,i-1),lc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=oc.distanceTo(lc);t.setAttribute("lineDistance",new Ct(n,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(i),Uo.radius+=r,t.ray.intersectsSphere(Uo)===!1)return;P0.copy(i).invert(),ea.copy(t.ray).applyMatrix4(P0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){const m=h.getX(x),_=h.getX(x+1),v=Oo(this,t,ea,l,m,_,x);v&&e.push(v)}if(this.isLineLoop){const x=h.getX(p-1),g=h.getX(f),m=Oo(this,t,ea,l,x,g,p-1);m&&e.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){const m=Oo(this,t,ea,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){const x=Oo(this,t,ea,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Oo(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(oc.fromBufferAttribute(o,i),lc.fromBufferAttribute(o,r),e.distanceSqToSegment(oc,lc,Fh,I0)>n)return;Fh.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Fh);if(!(c<t.near||c>t.far))return{distance:c,point:I0.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const D0=new R,L0=new R;class ui extends $i{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)D0.fromBufferAttribute(e,i),L0.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+D0.distanceTo(L0);t.setAttribute("lineDistance",new Ct(n,1))}else xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kp extends $i{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class dd extends nn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const U0=new Xt,Eu=new Lr,No=new qe,Fo=new R;class fd extends ue{constructor(t=new Zt,e=new dd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(i),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;U0.copy(i).invert(),Eu.copy(t.ray).applyMatrix4(U0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){const g=c.getX(p);Fo.fromBufferAttribute(d,g),O0(Fo,g,l,i,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)Fo.fromBufferAttribute(d,p),O0(Fo,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function O0(s,t,e,n,i,r,a){const o=Eu.distanceSqToPoint(s);if(o<e){const l=new R;Eu.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Jp extends Re{constructor(t,e,n,i,r=we,a=we,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class L1 extends Jp{constructor(t,e,n,i,r,a,o,l){super({},t,e,n,i,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}}class U1 extends Re{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ne,this.minFilter=Ne,this.generateMipmaps=!1,this.needsUpdate=!0}}class Vc extends Re{constructor(t,e,n,i,r,a,o,l,c,h,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class O1 extends Vc{constructor(t,e,n,i,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=_n,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class N1 extends Vc{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,oi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class $a extends Re{constructor(t=[],e=oi,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class F1 extends Re{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class B1 extends Re{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){const t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}}class Is extends Re{constructor(t,e,n=Cn,i,r,a,o=Ne,l=Ne,c,h=li,d=1){if(h!==li&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $p extends Is{constructor(t,e=Cn,n=oi,i,r,a=Ne,o=Ne,l,c=li){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class pd extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fs extends Zt{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(d,2));function p(x,g,m,_,v,M,E,b,C,y,w){const I=M/C,P=E/y,O=M/2,W=E/2,Y=b/2,L=C+1,k=y+1;let F=0,it=0;const ot=new R;for(let rt=0;rt<k;rt++){const St=rt*P-W;for(let Lt=0;Lt<L;Lt++){const Kt=Lt*I-O;ot[x]=Kt*_,ot[g]=St*v,ot[m]=Y,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[g]=0,ot[m]=b>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(Lt/C),d.push(1-rt/y),F+=1}}for(let rt=0;rt<y;rt++)for(let St=0;St<C;St++){const Lt=u+St+L*rt,Kt=u+St+L*(rt+1),le=u+(St+1)+L*(rt+1),Wt=u+(St+1)+L*rt;l.push(Lt,Kt,Wt),l.push(Kt,le,Wt),it+=6}o.addGroup(f,it,w),f+=it,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Hc extends Zt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,x=i+1,g=new R,m=new R;for(let _=0;_<=p;_++){let v=0,M=0,E=0,b=0;if(_<=n){const w=_/n,I=w*Math.PI/2;M=-h-t*Math.cos(I),E=t*Math.sin(I),b=-t*Math.cos(I),v=w*d}else if(_<=n+r){const w=(_-n)/r;M=-h+w*e,E=t,b=0,v=d+w*u}else{const w=(_-n-r)/n,I=w*Math.PI/2;M=h+t*Math.sin(I),E=t*Math.cos(I),b=t*Math.sin(I),v=d+u+w*d}const C=Math.max(0,Math.min(1,v/f));let y=0;_===0?y=.5/i:_===p&&(y=-.5/i);for(let w=0;w<=i;w++){const I=w/i,P=I*Math.PI*2,O=Math.sin(P),W=Math.cos(P);m.x=-E*W,m.y=M,m.z=E*O,o.push(m.x,m.y,m.z),g.set(-E*W,b,E*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+y,C)}if(_>0){const w=(_-1)*x;for(let I=0;I<i;I++){const P=w+I,O=w+I+1,W=_*x+I,Y=_*x+I+1;a.push(P,O,W),a.push(O,Y,W)}}}this.setIndex(a),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Gc extends Zt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new R,h=new j;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(o,3)),this.setAttribute("uv",new Ct(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ja extends Zt{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let p=0;const x=[],g=n/2;let m=0;_(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2));function _(){const M=new R,E=new R;let b=0;const C=(e-t)/n;for(let y=0;y<=r;y++){const w=[],I=y/r,P=I*(e-t)+t;for(let O=0;O<=i;O++){const W=O/i,Y=W*l+o,L=Math.sin(Y),k=Math.cos(Y);E.x=P*L,E.y=-I*n+g,E.z=P*k,d.push(E.x,E.y,E.z),M.set(L,C,k).normalize(),u.push(M.x,M.y,M.z),f.push(W,1-I),w.push(p++)}x.push(w)}for(let y=0;y<i;y++)for(let w=0;w<r;w++){const I=x[w][y],P=x[w+1][y],O=x[w+1][y+1],W=x[w][y+1];(t>0||w!==0)&&(h.push(I,P,W),b+=3),(e>0||w!==r-1)&&(h.push(P,O,W),b+=3)}c.addGroup(m,b,0),m+=b}function v(M){const E=p,b=new j,C=new R;let y=0;const w=M===!0?t:e,I=M===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,g*I,0),u.push(0,I,0),f.push(.5,.5),p++;const P=p;for(let O=0;O<=i;O++){const Y=O/i*l+o,L=Math.cos(Y),k=Math.sin(Y);C.x=w*k,C.y=g*I,C.z=w*L,d.push(C.x,C.y,C.z),u.push(0,I,0),b.x=L*.5+.5,b.y=k*.5*I+.5,f.push(b.x,b.y),p++}for(let O=0;O<i;O++){const W=E+O,Y=P+O;M===!0?h.push(Y,Y+1,W):h.push(Y+1,Y,W),y+=3}c.addGroup(m,y,M===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qa extends ja{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Qa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ji extends Zt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const v=new R,M=new R,E=new R;for(let b=0;b<e.length;b+=3)f(e[b+0],v),f(e[b+1],M),f(e[b+2],E),l(v,M,E,_)}function l(_,v,M,E){const b=E+1,C=[];for(let y=0;y<=b;y++){C[y]=[];const w=_.clone().lerp(M,y/b),I=v.clone().lerp(M,y/b),P=b-y;for(let O=0;O<=P;O++)O===0&&y===b?C[y][O]=w:C[y][O]=w.clone().lerp(I,O/P)}for(let y=0;y<b;y++)for(let w=0;w<2*(b-y)-1;w++){const I=Math.floor(w/2);w%2===0?(u(C[y][I+1]),u(C[y+1][I]),u(C[y][I])):(u(C[y][I+1]),u(C[y+1][I+1]),u(C[y+1][I]))}}function c(_){const v=new R;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(_),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){const _=new R;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const M=g(_)/2/Math.PI+.5,E=m(_)/Math.PI+.5;a.push(M,1-E)}p(),d()}function d(){for(let _=0;_<a.length;_+=6){const v=a[_+0],M=a[_+2],E=a[_+4],b=Math.max(v,M,E),C=Math.min(v,M,E);b>.9&&C<.1&&(v<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),E<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,v){const M=_*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function p(){const _=new R,v=new R,M=new R,E=new R,b=new j,C=new j,y=new j;for(let w=0,I=0;w<r.length;w+=9,I+=6){_.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),b.set(a[I+0],a[I+1]),C.set(a[I+2],a[I+3]),y.set(a[I+4],a[I+5]),E.copy(_).add(v).add(M).divideScalar(3);const P=g(E);x(b,I+0,_,P),x(C,I+2,v,P),x(y,I+4,M,P)}}function x(_,v,M,E){E<0&&_.x===1&&(a[v]=_.x-1),M.x===0&&M.z===0&&(a[v]=E/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.vertices,t.indices,t.radius,t.detail)}}class Wc extends ji{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wc(t.radius,t.detail)}}const Bo=new R,zo=new R,Bh=new R,ko=new gn;class jp extends Zt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Ts*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:g,c:m}=ko;if(x.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),ko.getNormal(Bh),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const v=(_+1)%3,M=d[_],E=d[v],b=ko[h[_]],C=ko[h[v]],y=`${M}_${E}`,w=`${E}_${M}`;w in u&&u[w]?(Bh.dot(u[w].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(C.x,C.y,C.z)),u[w]=null):y in u||(u[y]={index0:c[_],index1:c[v],normal:Bh.clone()})}}for(const p in u)if(u[p]){const{index0:x,index1:g}=u[p];Bo.fromBufferAttribute(o,x),zo.fromBufferAttribute(o,g),f.push(Bo.x,Bo.y,Bo.z),f.push(zo.x,zo.y,zo.z)}this.setAttribute("position",new Ct(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new j:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,i=[],r=[],a=[],o=new R,l=new Xt;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Gt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Gt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xc extends qn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new j){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qp extends Xc{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function md(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const N0=new R,F0=new R,zh=new md,kh=new md,Vh=new md;class tm extends qn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(F0.subVectors(i[0],i[1]).add(i[0]),c=F0);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(N0.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=N0),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),zh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),kh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),Vh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(zh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),kh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Vh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(zh.calc(l),kh.calc(l),Vh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function B0(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function z1(s,t){const e=1-s;return e*e*t}function k1(s,t){return 2*(1-s)*s*t}function V1(s,t){return s*s*t}function Ta(s,t,e,n){return z1(s,t)+k1(s,e)+V1(s,n)}function H1(s,t){const e=1-s;return e*e*e*t}function G1(s,t){const e=1-s;return 3*e*e*s*t}function W1(s,t){return 3*(1-s)*s*s*t}function X1(s,t){return s*s*s*t}function Ea(s,t,e,n,i){return H1(s,t)+G1(s,e)+W1(s,n)+X1(s,i)}class gd extends qn{constructor(t=new j,e=new j,n=new j,i=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new j){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ea(t,i.x,r.x,a.x,o.x),Ea(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class em extends qn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ea(t,i.x,r.x,a.x,o.x),Ea(t,i.y,r.y,a.y,o.y),Ea(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _d extends qn{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nm extends qn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xd extends qn{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ta(t,i.x,r.x,a.x),Ta(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vd extends qn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ta(t,i.x,r.x,a.x),Ta(t,i.y,r.y,a.y),Ta(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yd extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(B0(o,l.x,c.x,h.x,d.x),B0(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new j().fromArray(i))}return this}}var cc=Object.freeze({__proto__:null,ArcCurve:Qp,CatmullRomCurve3:tm,CubicBezierCurve:gd,CubicBezierCurve3:em,EllipseCurve:Xc,LineCurve:_d,LineCurve3:nm,QuadraticBezierCurve:xd,QuadraticBezierCurve3:vd,SplineCurve:yd});class im extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new cc[i.type]().fromJSON(i))}return this}}class hc extends im{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _d(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new xd(this.currentPoint.clone(),new j(t,e),new j(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new gd(this.currentPoint.clone(),new j(t,e),new j(n,i),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new yd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new Xc(t,e,n,i,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Es extends hc{constructor(t){super(t),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new hc().fromJSON(i))}return this}}function Y1(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=sm(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=$1(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,d=l;for(let u=e;u<i;u+=e){const f=s[u],p=s[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Fa(r,a,e,o,l,c,0),a}function sm(s,t,e,n,i){let r;if(i===lx(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=z0(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=z0(a/n|0,s[a],s[a+1],r);return r&&Ar(r,r.next)&&(za(r),r=r.next),r}function Ds(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ar(e,e.next)||Ce(e.prev,e,e.next)===0)){if(za(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fa(s,t,e,n,i,r,a){if(!s)return;!a&&r&&nx(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Z1(s,n,i,r):q1(s)){t.push(l.i,s.i,c.i),za(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=K1(Ds(s),t),Fa(s,t,e,n,i,r,2)):a===2&&J1(s,t,e,n,i,r):Fa(Ds(s),t,e,n,i,r,1);break}}}function q1(s){const t=s.prev,e=s,n=s.next;if(Ce(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),d=Math.min(o,l,c),u=Math.max(i,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&ua(i,o,r,l,a,c,p.x,p.y)&&Ce(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Z1(s,t,e,n){const i=s.prev,r=s,a=s.next;if(Ce(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),g=Math.max(h,d,u),m=wu(f,p,t,e,n),_=wu(x,g,t,e,n);let v=s.prevZ,M=s.nextZ;for(;v&&v.z>=m&&M&&M.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&ua(o,h,l,d,c,u,v.x,v.y)&&Ce(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==i&&M!==a&&ua(o,h,l,d,c,u,M.x,M.y)&&Ce(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&ua(o,h,l,d,c,u,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=g&&M!==i&&M!==a&&ua(o,h,l,d,c,u,M.x,M.y)&&Ce(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function K1(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Ar(n,i)&&am(n,e,e.next,i)&&Ba(n,i)&&Ba(i,n)&&(t.push(n.i,e.i,i.i),za(e),za(e.next),e=s=i),e=e.next}while(e!==s);return Ds(e)}function J1(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&rx(a,o)){let l=om(a,o);a=Ds(a,a.next),l=Ds(l,l.next),Fa(a,t,e,n,i,r,0),Fa(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function $1(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=sm(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(sx(c))}i.sort(j1);for(let r=0;r<i.length;r++)e=Q1(i[r],e);return e}function j1(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Q1(s,t){const e=tx(s,t);if(!e)return t;const n=om(e,s);return Ds(n,n.next),Ds(e,e.next)}function tx(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(Ar(s,e))return e;do{if(Ar(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&rm(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);Ba(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&ex(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function ex(s,t){return Ce(s.prev,s,t.prev)<0&&Ce(t.next,s,s.next)<0}function nx(s,t,e,n){let i=s;do i.z===0&&(i.z=wu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ix(i)}function ix(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function wu(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function sx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function rm(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function ua(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&rm(s,t,e,n,i,r,a,o)}function rx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ax(s,t)&&(Ba(s,t)&&Ba(t,s)&&ox(s,t)&&(Ce(s.prev,s,t.prev)||Ce(s,t.prev,t))||Ar(s,t)&&Ce(s.prev,s,s.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ar(s,t){return s.x===t.x&&s.y===t.y}function am(s,t,e,n){const i=Ho(Ce(s,t,e)),r=Ho(Ce(s,t,n)),a=Ho(Ce(e,n,s)),o=Ho(Ce(e,n,t));return!!(i!==r&&a!==o||i===0&&Vo(s,e,t)||r===0&&Vo(s,n,t)||a===0&&Vo(e,s,n)||o===0&&Vo(e,t,n))}function Vo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ho(s){return s>0?1:s<0?-1:0}function ax(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&am(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ba(s,t){return Ce(s.prev,s,s.next)<0?Ce(s,t,s.next)>=0&&Ce(s,s.prev,t)>=0:Ce(s,t,s.prev)<0||Ce(s,s.next,t)<0}function ox(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function om(s,t){const e=Au(s.i,s.x,s.y),n=Au(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function z0(s,t,e,n){const i=Au(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function za(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Au(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lx(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class cx{static triangulate(t,e,n=2){return Y1(t,e,n)}}class Vn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Vn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];k0(t),V0(n,t);let a=t.length;e.forEach(k0);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,V0(n,e[l]);const o=cx.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function k0(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function V0(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Yc extends Zt{constructor(t=new Es([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Ct(i,3)),this.setAttribute("uv",new Ct(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:hx;let v,M=!1,E,b,C,y;if(m){v=m.getSpacedPoints(h),M=!0,u=!1;const Z=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,Z),b=new R,C=new R,y=new R}u||(g=0,f=0,p=0,x=0);const w=o.extractPoints(c);let I=w.shape;const P=w.holes;if(!Vn.isClockWise(I)){I=I.reverse();for(let Z=0,nt=P.length;Z<nt;Z++){const K=P[Z];Vn.isClockWise(K)&&(P[Z]=K.reverse())}}function W(Z){const K=10000000000000001e-36;let mt=Z[0];for(let lt=1;lt<=Z.length;lt++){const Ht=lt%Z.length,D=Z[Ht],$t=D.x-mt.x,Ot=D.y-mt.y,qt=$t*$t+Ot*Ot,ct=Math.max(Math.abs(D.x),Math.abs(D.y),Math.abs(mt.x),Math.abs(mt.y)),ge=K*ct*ct;if(qt<=ge){Z.splice(Ht,1),lt--;continue}mt=D}}W(I),P.forEach(W);const Y=P.length,L=I;for(let Z=0;Z<Y;Z++){const nt=P[Z];I=I.concat(nt)}function k(Z,nt,K){return nt||Ut("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(nt,K)}const F=I.length;function it(Z,nt,K){let mt,lt,Ht;const D=Z.x-nt.x,$t=Z.y-nt.y,Ot=K.x-Z.x,qt=K.y-Z.y,ct=D*D+$t*$t,ge=D*qt-$t*Ot;if(Math.abs(ge)>Number.EPSILON){const A=Math.sqrt(ct),S=Math.sqrt(Ot*Ot+qt*qt),B=nt.x-$t/A,$=nt.y+D/A,st=K.x-qt/S,ut=K.y+Ot/S,pt=((st-B)*qt-(ut-$)*Ot)/(D*qt-$t*Ot);mt=B+D*pt-Z.x,lt=$+$t*pt-Z.y;const q=mt*mt+lt*lt;if(q<=2)return new j(mt,lt);Ht=Math.sqrt(q/2)}else{let A=!1;D>Number.EPSILON?Ot>Number.EPSILON&&(A=!0):D<-Number.EPSILON?Ot<-Number.EPSILON&&(A=!0):Math.sign($t)===Math.sign(qt)&&(A=!0),A?(mt=-$t,lt=D,Ht=Math.sqrt(ct)):(mt=D,lt=$t,Ht=Math.sqrt(ct/2))}return new j(mt/Ht,lt/Ht)}const ot=[];for(let Z=0,nt=L.length,K=nt-1,mt=Z+1;Z<nt;Z++,K++,mt++)K===nt&&(K=0),mt===nt&&(mt=0),ot[Z]=it(L[Z],L[K],L[mt]);const rt=[];let St,Lt=ot.concat();for(let Z=0,nt=Y;Z<nt;Z++){const K=P[Z];St=[];for(let mt=0,lt=K.length,Ht=lt-1,D=mt+1;mt<lt;mt++,Ht++,D++)Ht===lt&&(Ht=0),D===lt&&(D=0),St[mt]=it(K[mt],K[Ht],K[D]);rt.push(St),Lt=Lt.concat(St)}let Kt;if(g===0)Kt=Vn.triangulateShape(L,P);else{const Z=[],nt=[];for(let K=0;K<g;K++){const mt=K/g,lt=f*Math.cos(mt*Math.PI/2),Ht=p*Math.sin(mt*Math.PI/2)+x;for(let D=0,$t=L.length;D<$t;D++){const Ot=k(L[D],ot[D],Ht);z(Ot.x,Ot.y,-lt),mt===0&&Z.push(Ot)}for(let D=0,$t=Y;D<$t;D++){const Ot=P[D];St=rt[D];const qt=[];for(let ct=0,ge=Ot.length;ct<ge;ct++){const A=k(Ot[ct],St[ct],Ht);z(A.x,A.y,-lt),mt===0&&qt.push(A)}mt===0&&nt.push(qt)}}Kt=Vn.triangulateShape(Z,nt)}const le=Kt.length,Wt=p+x;for(let Z=0;Z<F;Z++){const nt=u?k(I[Z],Lt[Z],Wt):I[Z];M?(C.copy(E.normals[0]).multiplyScalar(nt.x),b.copy(E.binormals[0]).multiplyScalar(nt.y),y.copy(v[0]).add(C).add(b),z(y.x,y.y,y.z)):z(nt.x,nt.y,0)}for(let Z=1;Z<=h;Z++)for(let nt=0;nt<F;nt++){const K=u?k(I[nt],Lt[nt],Wt):I[nt];M?(C.copy(E.normals[Z]).multiplyScalar(K.x),b.copy(E.binormals[Z]).multiplyScalar(K.y),y.copy(v[Z]).add(C).add(b),z(y.x,y.y,y.z)):z(K.x,K.y,d/h*Z)}for(let Z=g-1;Z>=0;Z--){const nt=Z/g,K=f*Math.cos(nt*Math.PI/2),mt=p*Math.sin(nt*Math.PI/2)+x;for(let lt=0,Ht=L.length;lt<Ht;lt++){const D=k(L[lt],ot[lt],mt);z(D.x,D.y,d+K)}for(let lt=0,Ht=P.length;lt<Ht;lt++){const D=P[lt];St=rt[lt];for(let $t=0,Ot=D.length;$t<Ot;$t++){const qt=k(D[$t],St[$t],mt);M?z(qt.x,qt.y+v[h-1].y,v[h-1].x+K):z(qt.x,qt.y,d+K)}}}Q(),yt();function Q(){const Z=i.length/3;if(u){let nt=0,K=F*nt;for(let mt=0;mt<le;mt++){const lt=Kt[mt];Ft(lt[2]+K,lt[1]+K,lt[0]+K)}nt=h+g*2,K=F*nt;for(let mt=0;mt<le;mt++){const lt=Kt[mt];Ft(lt[0]+K,lt[1]+K,lt[2]+K)}}else{for(let nt=0;nt<le;nt++){const K=Kt[nt];Ft(K[2],K[1],K[0])}for(let nt=0;nt<le;nt++){const K=Kt[nt];Ft(K[0]+F*h,K[1]+F*h,K[2]+F*h)}}n.addGroup(Z,i.length/3-Z,0)}function yt(){const Z=i.length/3;let nt=0;ht(L,nt),nt+=L.length;for(let K=0,mt=P.length;K<mt;K++){const lt=P[K];ht(lt,nt),nt+=lt.length}n.addGroup(Z,i.length/3-Z,1)}function ht(Z,nt){let K=Z.length;for(;--K>=0;){const mt=K;let lt=K-1;lt<0&&(lt=Z.length-1);for(let Ht=0,D=h+g*2;Ht<D;Ht++){const $t=F*Ht,Ot=F*(Ht+1),qt=nt+mt+$t,ct=nt+lt+$t,ge=nt+lt+Ot,A=nt+mt+Ot;Vt(qt,ct,ge,A)}}}function z(Z,nt,K){l.push(Z),l.push(nt),l.push(K)}function Ft(Z,nt,K){Pt(Z),Pt(nt),Pt(K);const mt=i.length/3,lt=_.generateTopUV(n,i,mt-3,mt-2,mt-1);Tt(lt[0]),Tt(lt[1]),Tt(lt[2])}function Vt(Z,nt,K,mt){Pt(Z),Pt(nt),Pt(mt),Pt(nt),Pt(K),Pt(mt);const lt=i.length/3,Ht=_.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);Tt(Ht[0]),Tt(Ht[1]),Tt(Ht[3]),Tt(Ht[1]),Tt(Ht[2]),Tt(Ht[3])}function Pt(Z){i.push(l[Z*3+0]),i.push(l[Z*3+1]),i.push(l[Z*3+2])}function Tt(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ux(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new cc[i.type]().fromJSON(i)),new Yc(n,t.options)}}const hx={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new j(r,a),new j(o,l),new j(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new j(a,1-l),new j(c,1-d),new j(u,1-p),new j(x,1-m)]:[new j(o,1-l),new j(h,1-d),new j(f,1-p),new j(g,1-m)]}};function ux(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class to extends ji{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new to(t.radius,t.detail)}}class qc extends Zt{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Gt(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,d=new R,u=new j,f=new R,p=new R,x=new R;let g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=e;_++){const v=n+_*h*i,M=Math.sin(v),E=Math.cos(v);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*M,d.y=t[b].y,d.z=t[b].x*E,a.push(d.x,d.y,d.z),u.x=_/e,u.y=b/(t.length-1),o.push(u.x,u.y);const C=l[3*b+0]*M,y=l[3*b+1],w=l[3*b+0]*E;c.push(C,y,w)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){const M=v+_*t.length,E=M,b=M+t.length,C=M+t.length+1,y=M+1;r.push(E,b,y),r.push(C,y,b)}this.setIndex(r),this.setAttribute("position",new Ct(a,3)),this.setAttribute("uv",new Ct(o,2)),this.setAttribute("normal",new Ct(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.points,t.segments,t.phiStart,t.phiLength)}}class eo extends ji{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new eo(t.radius,t.detail)}}class Or extends Zt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){const _=m*u-a;for(let v=0;v<c;v++){const M=v*d-r;p.push(M,-_,0),x.push(0,0,1),g.push(v/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const v=_+c*m,M=_+c*(m+1),E=_+1+c*(m+1),b=_+1+c*m;f.push(v,M,b),f.push(M,E,b)}this.setIndex(f),this.setAttribute("position",new Ct(p,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.width,t.height,t.widthSegments,t.heightSegments)}}class no extends Zt{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new R,p=new j;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<i;x++){const g=x*(n+1);for(let m=0;m<n;m++){const _=m+g,v=_,M=_+n+1,E=_+n+2,b=_+1;o.push(v,M,b),o.push(M,E,b)}}this.setIndex(o),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Zc extends Zt{constructor(t=new Es([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ct(i,3)),this.setAttribute("normal",new Ct(r,3)),this.setAttribute("uv",new Ct(a,2));function c(h){const d=i.length/3,u=h.extractPoints(e);let f=u.shape;const p=u.holes;Vn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const _=p[g];Vn.isClockWise(_)===!0&&(p[g]=_.reverse())}const x=Vn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){const _=f[g];i.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let g=0,m=x.length;g<m;g++){const _=x[g],v=_[0]+d,M=_[1]+d,E=_[2]+d;n.push(v,M,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return dx(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new Zc(n,t.curveSegments)}}function dx(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Qi extends Zt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new R,u=new R,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){const _=[],v=m/n;let M=0;m===0&&a===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let E=0;E<=e;E++){const b=E/e;d.x=-t*Math.cos(i+b*r)*Math.sin(a+v*o),d.y=t*Math.cos(a+v*o),d.z=t*Math.sin(i+b*r)*Math.sin(a+v*o),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(b+M,1-v),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){const v=h[m][_+1],M=h[m][_],E=h[m+1][_],b=h[m+1][_+1];(m!==0||a>0)&&f.push(v,M,b),(m!==n-1||l<Math.PI)&&f.push(M,E,b)}this.setIndex(f),this.setAttribute("position",new Ct(p,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Kc extends ji{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kc(t.radius,t.detail)}}class Jc extends Zt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new R,f=new R,p=new R;for(let x=0;x<=n;x++){const g=a+x/n*o;for(let m=0;m<=i;m++){const _=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(_),f.y=(t+e*Math.cos(g))*Math.sin(_),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){const m=(i+1)*x+g-1,_=(i+1)*(x-1)+g-1,v=(i+1)*(x-1)+g,M=(i+1)*x+g;l.push(m,_,M),l.push(_,v,M)}this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $c extends Zt{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],d=new R,u=new R,f=new R,p=new R,x=new R,g=new R,m=new R;for(let v=0;v<=n;++v){const M=v/n*r*Math.PI*2;_(M,r,a,t,f),_(M+.01,r,a,t,p),g.subVectors(p,f),m.addVectors(p,f),x.crossVectors(g,m),m.crossVectors(x,g),x.normalize(),m.normalize();for(let E=0;E<=i;++E){const b=E/i*Math.PI*2,C=-e*Math.cos(b),y=e*Math.sin(b);d.x=f.x+(C*m.x+y*x.x),d.y=f.y+(C*m.y+y*x.y),d.z=f.z+(C*m.z+y*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(v/n),h.push(E/i)}}for(let v=1;v<=n;v++)for(let M=1;M<=i;M++){const E=(i+1)*(v-1)+(M-1),b=(i+1)*v+(M-1),C=(i+1)*v+M,y=(i+1)*(v-1)+M;o.push(E,b,y),o.push(b,C,y)}this.setIndex(o),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(h,2));function _(v,M,E,b,C){const y=Math.cos(v),w=Math.sin(v),I=E/M*v,P=Math.cos(I);C.x=b*(2+P)*.5*y,C.y=b*(2+P)*w*.5,C.z=b*Math.sin(I)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class jc extends Zt{constructor(t=new vd(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,l=new R,c=new j;let h=new R;const d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(f,2));function x(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),_(),m()}function g(v){h=t.getPointAt(v/e,h);const M=a.normals[v],E=a.binormals[v];for(let b=0;b<=i;b++){const C=b/i*Math.PI*2,y=Math.sin(C),w=-Math.cos(C);l.x=w*M.x+y*E.x,l.y=w*M.y+y*E.y,l.z=w*M.z+y*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=e;v++)for(let M=1;M<=i;M++){const E=(i+1)*(v-1)+(M-1),b=(i+1)*v+(M-1),C=(i+1)*v+M,y=(i+1)*(v-1)+M;p.push(E,b,y),p.push(b,C,y)}}function _(){for(let v=0;v<=e;v++)for(let M=0;M<=i;M++)c.x=v/e,c.y=M/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new jc(new cc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class lm extends Zt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new R,r=new R;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let p=u,x=u+f;p<x;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),_=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,_),H0(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),H0(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ct(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function H0(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var G0=Object.freeze({__proto__:null,BoxGeometry:Fs,CapsuleGeometry:Hc,CircleGeometry:Gc,ConeGeometry:Qa,CylinderGeometry:ja,DodecahedronGeometry:Wc,EdgesGeometry:jp,ExtrudeGeometry:Yc,IcosahedronGeometry:to,LatheGeometry:qc,OctahedronGeometry:eo,PlaneGeometry:Or,PolyhedronGeometry:ji,RingGeometry:no,ShapeGeometry:Zc,SphereGeometry:Qi,TetrahedronGeometry:Kc,TorusGeometry:Jc,TorusKnotGeometry:$c,TubeGeometry:jc,WireframeGeometry:lm});class cm extends nn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new vt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function Cr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(W0(i))i.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(W0(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function rn(s){const t={};for(let e=0;e<s.length;e++){const n=Cr(s[e]);for(const i in n)t[i]=n[i]}return t}function W0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function fx(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function hm(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Rr={clone:Cr,merge:rn};var px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ze extends nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=fx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qc extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ls extends nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class um extends Ls{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class dm extends nn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new vt(16777215),this.specular=new vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Za,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fm extends nn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new vt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class pm extends nn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class mm extends nn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Za,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Md extends nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sd extends nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gm extends nn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new vt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _m extends un{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function ys(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function xm(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Cu(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)i[a++]=s[o+l]}return i}function bd(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}function gx(s,t,e,n,i=30){const r=s.clone();r.name=t;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<e||p>=n)){d.push(c.times[f]);for(let x=0;x<h;++x)u.push(c.values[f*h+x])}}d.length!==0&&(c.times=ys(d,c.times.constructor),c.values=ys(u,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function _x(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const p=o.times.length-1;let x;if(r<=o.times[0]){const m=h,_=d-h;x=o.values.slice(m,_)}else if(r>=o.times[p]){const m=p*d+h,_=m+d-h;x=o.values.slice(m,_)}else{const m=o.createInterpolant(),_=h,v=d-h;m.evaluate(r),x=m.resultBuffer.slice(_,v)}l==="quaternion"&&new tn().fromArray(x).normalize().conjugate().toArray(x);const g=c.times.length;for(let m=0;m<g;++m){const _=m*f+u;if(l==="quaternion")tn.multiplyQuaternionsFlat(c.values,_,x,0,c.values,_);else{const v=f-u*2;for(let M=0;M<v;++M)c.values[_+M]-=x[M]}}}return s.blendMode=id,s}class xx{static convertArray(t,e){return ys(t,e)}static isTypedArray(t){return zp(t)}static getKeyframeOrder(t){return xm(t)}static sortedArray(t,e,n){return Cu(t,e,n)}static flattenJSON(t,e,n,i){bd(t,e,n,i)}static subclip(t,e,n,i,r=30){return gx(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return _x(t,e,n,i)}}class Nr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vm extends Nr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xs,endingEnd:xs}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case vs:r=t,o=2*e-n;break;case Ia:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vs:a=t,l=2*n-e;break;case Ia:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,_=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,v=(-1-f)*g+(1.5+f)*x+.5*p,M=f*g-f*x;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+_*a[c+E]+v*a[l+E]+M*a[d+E];return r}}class Td extends Nr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class ym extends Nr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Mm extends Nr{interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){const x=(n-e)/(i-e),g=1-x;for(let m=0;m!==o;++m)r[m]=a[c+m]*g+a[l+m]*x;return r}const f=o*2,p=t-1;for(let x=0;x!==o;++x){const g=a[c+x],m=a[l+x],_=p*f+x*2,v=u[_],M=u[_+1],E=t*f+x*2,b=d[E],C=d[E+1];let y=(n-e)/(i-e),w,I,P,O,W;for(let Y=0;Y<8;Y++){w=y*y,I=w*y,P=1-y,O=P*P,W=O*P;const k=W*e+3*O*y*v+3*P*w*b+I*i-n;if(Math.abs(k)<1e-10)break;const F=3*O*(v-e)+6*P*y*(b-v)+3*w*(i-b);if(Math.abs(F)<1e-10)break;y=y-k/F,y=Math.max(0,Math.min(1,y))}r[x]=W*g+3*O*y*M+3*P*w*C+I*m}return r}}class In{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ys(e,this.TimeBufferType),this.values=ys(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ys(t.times,Array),values:ys(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ym(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Td(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new Mm(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case Pa:e=this.InterpolantFactoryMethodDiscrete;break;case rc:e=this.InterpolantFactoryMethodLinear;break;case dl:e=this.InterpolantFactoryMethodSmooth;break;case Su:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pa;case this.InterpolantFactoryMethodLinear:return rc;case this.InterpolantFactoryMethodSmooth:return dl;case this.InterpolantFactoryMethodBezier:return Su}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ut("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ut("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&zp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ut("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===dl,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){const x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=rc;class Bs extends In{constructor(t,e,n){super(t,e,n)}}Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Pa;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ed extends In{constructor(t,e,n,i){super(t,e,n,i)}}Ed.prototype.ValueTypeName="color";class ka extends In{constructor(t,e,n,i){super(t,e,n,i)}}ka.prototype.ValueTypeName="number";class Sm extends Nr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let h=c+o;c!==h;c+=4)tn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class io extends In{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Sm(this.times,this.values,this.getValueSize(),t)}}io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends In{constructor(t,e,n){super(t,e,n)}}zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Pa;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Va extends In{constructor(t,e,n,i){super(t,e,n,i)}}Va.prototype.ValueTypeName="vector";class Ha{constructor(t="",e=-1,n=[],i=Pc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=En(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(yx(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(In.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=xm(l);l=Cu(l,1,h),c=Cu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ka(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(xt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return Ut("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,p,x){if(f.length!==0){const g=[],m=[];bd(f,g,m,p),g.length!==0&&x.push(new d(u,g,m))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let x=0;x<u[p].morphTargets.length;x++)f[u[p].morphTargets[x]]=-1;for(const x in f){const g=[],m=[];for(let _=0;_!==u[p].morphTargets.length;++_){const v=u[p];g.push(v.time),m.push(v.morphTarget===x?1:0)}i.push(new ka(".morphTargetInfluence["+x+"]",g,m))}l=f.length*a}else{const f=".bones["+e[d].name+"]";n(Va,f+".position",u,"pos",i),n(io,f+".quaternion",u,"rot",i),n(Va,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function vx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ka;case"vector":case"vector2":case"vector3":case"vector4":return Va;case"color":return Ed;case"quaternion":return io;case"bool":case"boolean":return Bs;case"string":return zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function yx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=vx(s.type);if(s.times===void 0){const e=[],n=[];bd(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const si={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(X0(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!X0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function X0(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class wd{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bm=new wd;class vn{constructor(t){this.manager=t!==void 0?t:bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}vn.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class Mx extends Error{constructor(t,e){super(t),this.response=e}}class Ai extends vn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=si.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(xi[t]!==void 0){xi[t].push({onLoad:e,onProgress:n,onError:i});return}xi[t]=[],xi[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&xt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=xi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let x=0;const g=new ReadableStream({start(m){_();function _(){d.read().then(({done:v,value:M})=>{if(v)m.close();else{x+=M.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let b=0,C=h.length;b<C;b++){const y=h[b];y.onProgress&&y.onProgress(E)}m.enqueue(M),_()}},v=>{m.error(v)})}}});return new Response(g)}else throw new Mx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{si.add(`file:${t}`,c);const h=xi[t];delete xi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=xi[t];if(h===void 0)throw this.manager.itemError(t),c;delete xi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Sx extends vn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Ai(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):Ut(l),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=Ha.parse(t[n]);e.push(i)}return e}}class bx extends vn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=[],o=new Vc,l=new Ai(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(t[d],function(u){const f=r.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=we),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let d=0,u=t.length;d<u;++d)h(d);else l.load(t,function(d){const u=r.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+x]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=we),o.format=u.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}}const ir=new WeakMap;class Ga extends vn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=si.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=ir.get(a);d===void 0&&(d=[],ir.set(a,d)),d.push({onLoad:e,onError:i})}return a}const o=Oa("img");function l(){h(),e&&e(this);const d=ir.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}ir.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),si.remove(`image:${t}`);const u=ir.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}ir.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),si.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Tx extends vn{constructor(t){super(t)}load(t,e,n,i){const r=new $a;r.colorSpace=Be;const a=new Ga(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(t[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class Ex extends vn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Wn,o=new Ai(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Ut(h);return}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:_n,a.wrapT=c.wrapT!==void 0?c.wrapT:_n,a.magFilter=c.magFilter!==void 0?c.magFilter:we,a.minFilter=c.minFilter!==void 0?c.minFilter:we,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=ii),c.mipmapCount===1&&(a.minFilter=we),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},n,i),a}}class Tm extends vn{constructor(t){super(t)}load(t,e,n,i){const r=new Re,a=new Ga(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class ts extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Em extends ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Hh=new Xt,Y0=new R,q0=new R;class Ad{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Y0.setFromMatrixPosition(t.matrixWorld),e.position.copy(Y0),q0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(q0),e.updateMatrixWorld(),Hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Rs||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Go=new R,Wo=new tn,jn=new R;class th extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Go,Wo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Wo,jn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Go,Wo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Wo,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new R,Z0=new j,K0=new j;class We extends th{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,Z0,K0),e.subVectors(K0,Z0)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class wx extends Ad{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Er*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class wm extends ts{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Ax extends Ad{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0}}class Cd extends ts{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ax}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Fr extends th{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Cx extends Ad{constructor(){super(new Fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Am extends ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new Cx}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Rd extends ts{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cm extends ts{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Pd{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new R)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class Rm extends ts{constructor(t=new Pd,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class eh extends vn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,a=new Ai(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):Ut(l),r.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(r){return e[r]===void 0&&xt("MaterialLoader: Undefined texture",r),e[r]}const i=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(i.allowOverride=t.allowOverride),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const a=t.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new vt().setHex(a.value);break;case"v2":i.uniforms[r].value=new j().fromArray(a.value);break;case"v3":i.uniforms[r].value=new R().fromArray(a.value);break;case"v4":i.uniforms[r].value=new xe().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Jt().fromArray(a.value);break;case"m4":i.uniforms[r].value=new Xt().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new j().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new j().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return eh.createMaterialFromType(t)}static createMaterialFromType(t){const e={ShadowMaterial:cm,SpriteMaterial:cd,RawShaderMaterial:Qc,ShaderMaterial:ze,PointsMaterial:dd,MeshPhysicalMaterial:um,MeshStandardMaterial:Ls,MeshPhongMaterial:dm,MeshToonMaterial:fm,MeshNormalMaterial:pm,MeshLambertMaterial:mm,MeshDepthMaterial:Md,MeshDistanceMaterial:Sd,MeshBasicMaterial:Pn,MeshMatcapMaterial:gm,LineDashedMaterial:_m,LineBasicMaterial:un,Material:nn};return new e[t]}}class Ru{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Pm extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Im extends vn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Ai(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(l){i?i(l):Ut(l),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),_=gr(g.type,m),v=new Bc(_,g.stride);return v.uuid=g.uuid,e[p]=v,v}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=t.isInstancedBufferGeometry?new Pm:new Zt,o=t.data.index;if(o!==void 0){const f=gr(o.type,o.array);a.setIndex(new me(f,1))}const l=t.data.attributes;for(const f in l){const p=l[f];let x;if(p.isInterleavedBufferAttribute){const g=i(t.data,p.data);x=new Ps(g,p.itemSize,p.offset,p.normalized)}else{const g=gr(p.type,p.array),m=p.isInstancedBufferAttribute?wr:me;x=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),a.setAttribute(f,x)}const c=t.data.morphAttributes;if(c)for(const f in c){const p=c[f],x=[];for(let g=0,m=p.length;g<m;g++){const _=p[g];let v;if(_.isInterleavedBufferAttribute){const M=i(t.data,_.data);v=new Ps(M,_.itemSize,_.offset,_.normalized)}else{const M=gr(_.type,_.array);v=new me(M,_.itemSize,_.normalized)}_.name!==void 0&&(v.name=_.name),x.push(v)}a.morphAttributes[f]=x}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const x=d[f];a.addGroup(x.start,x.count,x.materialIndex)}const u=t.data.boundingSphere;return u!==void 0&&(a.boundingSphere=new qe().fromJSON(u)),t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}}const Gh={};class Rx extends vn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=this.path===""?Ru.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;const o=new Ai(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),Ut("ObjectLoader: Can't parse "+t+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),Ut("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?Ru.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new Ai(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(t,e);let o;try{o=JSON.parse(a)}catch(c){throw new Error("ObjectLoader: Can't parse "+t+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(c)}),o=this.parseTextures(t.textures,a),l=this.parseMaterials(t.materials,o),c=this.parseObject(t.object,r,l,o,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let d=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(c)}return c}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,i,o,a,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){Gh[t]=e}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new Es().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=new zc().fromJSON(t[r],i);n[o.uuid]=o}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new Im;for(let r=0,a=t.length;r<a;r++){let o;const l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in G0?o=G0[l.type].fromJSON(l,e):l.type in Gh?o=Gh[l.type].fromJSON(l,e):xt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new eh;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){const l=t[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=Ha.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:gr(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new wd(e);r=new Ga(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){const d=t[c],u=d.url;if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const g=u[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new Wn(m.data,m.width,m.height)))}i[d.uuid]=new Wi(f)}else{const f=o(d.url);i[d.uuid]=new Wi(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:gr(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new Ga(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){const l=t[a],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Wn(p.data,p.width,p.height)))}n[l.uuid]=new Wi(h)}else{const h=await r(l.url);n[l.uuid]=new Wi(h)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(xt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=t[r];o.image===void 0&&xt('ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&xt("ObjectLoader: Undefined image",o.image);const l=e[o.image],c=l.data;let h;Array.isArray(c)?(h=new $a,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Wn:h=new Re,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,Px)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],J0),h.wrapT=n(o.wrap[1],J0)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,$0)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,$0)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(t,e,n,i,r){let a;function o(u){return e[u]===void 0&&xt("ObjectLoader: Undefined geometry",u),e[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const g=u[p];n[g]===void 0&&xt("ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[u]===void 0&&xt("ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&xt("ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(t.type){case"Scene":a=new ad,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new vt(t.background):a.background=c(t.background)),t.environment!==void 0&&(a.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new Fc(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new Nc(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new We(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new Fr(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new Rd(t.color,t.intensity);break;case"DirectionalLight":a=new Am(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new Cd(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new Cm(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new wm(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"";break;case"HemisphereLight":a=new Em(t.color,t.groundColor,t.intensity);break;case"LightProbe":const u=new Pd().fromArray(t.sh);a=new Rm(u,t.intensity);break;case"SkinnedMesh":h=o(t.geometry),d=l(t.material),a=new qp(h,d),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),d=l(t.material),a=new be(h,d);break;case"InstancedMesh":h=o(t.geometry),d=l(t.material);const f=t.count,p=t.instanceMatrix,x=t.instanceColor;a=new ud(h,d,f),a.instanceMatrix=new wr(new Float32Array(p.array),16),x!==void 0&&(a.instanceColor=new wr(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=o(t.geometry),d=l(t.material),a=new Zp(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._geometryInfo=t.geometryInfo.map(g=>{let m=null,_=null;return g.boundingBox!==void 0&&(m=new en().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(_=new qe().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:_}}),a._instanceInfo=t.instanceInfo,a._availableInstanceIds=t._availableInstanceIds,a._availableGeometryIds=t._availableGeometryIds,a._nextIndexStart=t.nextIndexStart,a._nextVertexStart=t.nextVertexStart,a._geometryCount=t.geometryCount,a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._matricesTexture=c(t.matricesTexture.uuid),a._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(a.boundingSphere=new qe().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(a.boundingBox=new en().fromJSON(t.boundingBox));break;case"LOD":a=new Yp;break;case"Line":a=new $i(o(t.geometry),l(t.material));break;case"LineLoop":a=new Kp(o(t.geometry),l(t.material));break;case"LineSegments":a=new ui(o(t.geometry),l(t.material));break;case"PointCloud":case"Points":a=new fd(o(t.geometry),l(t.material));break;case"Sprite":a=new Xp(l(t.material));break;case"Group":a=new Xi;break;case"Bone":a=new hd;break;default:a=new ue}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.pivot!==void 0&&(a.pivot=new R().fromArray(t.pivot)),t.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.static!==void 0&&(a.static=t.static),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){const u=t.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],e,n,i,r))}if(t.animations!==void 0){const u=t.animations;for(let f=0;f<u.length;f++){const p=u[f];a.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);const u=t.levels;for(let f=0;f<u.length;f++){const p=u[f],x=a.getObjectByProperty("uuid",p.object);x!==void 0&&a.addLevel(x,p.distance,p.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?xt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new ue}})}}const Px={UVMapping:bc,CubeReflectionMapping:oi,CubeRefractionMapping:Zi,EquirectangularReflectionMapping:ga,EquirectangularRefractionMapping:_a,CubeUVReflectionMapping:Dr},J0={RepeatWrapping:wa,ClampToEdgeWrapping:_n,MirroredRepeatWrapping:Aa},$0={NearestFilter:Ne,NearestMipmapNearestFilter:Ju,NearestMipmapLinearFilter:mr,LinearFilter:we,LinearMipmapNearestFilter:xa,LinearMipmapLinearFilter:ii},Wh=new WeakMap;class Ix extends vn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&xt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&xt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=si.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{Wh.has(a)===!0?(i&&i(Wh.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){si.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t)}).catch(function(c){i&&i(c),Wh.set(l,c),si.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});si.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Xo;class Id{static getContext(){return Xo===void 0&&(Xo=new(window.AudioContext||window.webkitAudioContext)),Xo}static setContext(t){Xo=t}}class Dx extends vn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Ai(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const c=l.slice(0),h=Id.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){o(u),r.manager.itemEnd(d)})}catch(c){o(c)}},n,i);function o(l){i?i(l):Ut(l),r.manager.itemError(t)}}}const j0=new Xt,Q0=new Xt,ls=new Xt;class Lx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new We,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new We,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,ls.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,a=e.near*Math.tan(Ts*e.fov*.5)/e.zoom;let o,l;Q0.elements[12]=-i,j0.elements[12]=i,o=-a*e.aspect+r,l=a*e.aspect+r,ls.elements[0]=2*e.near/(l-o),ls.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(ls),o=-a*e.aspect-r,l=a*e.aspect-r,ls.elements[0]=2*e.near/(l-o),ls.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(ls)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Q0),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(j0)}}const sr=-90,rr=1;class Dm extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(sr,rr,t,e);i.layers=this.layers,this.add(i);const r=new We(sr,rr,t,e);r.layers=this.layers,this.add(r);const a=new We(sr,rr,t,e);a.layers=this.layers,this.add(a);const o=new We(sr,rr,t,e);o.layers=this.layers,this.add(o);const l=new We(sr,rr,t,e);l.layers=this.layers,this.add(l);const c=new We(sr,rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Lm extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class nh{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ux.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Ux(){this._document.hidden===!1&&this.reset()}const cs=new R,Xh=new tn,Ox=new R,hs=new R,us=new R;class Nx extends ue{constructor(){super(),this.type="AudioListener",this.context=Id.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new nh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(cs,Xh,Ox),hs.set(0,0,-1).applyQuaternion(Xh),us.set(0,1,0).applyQuaternion(Xh),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(cs.x,n),e.positionY.linearRampToValueAtTime(cs.y,n),e.positionZ.linearRampToValueAtTime(cs.z,n),e.forwardX.linearRampToValueAtTime(hs.x,n),e.forwardY.linearRampToValueAtTime(hs.y,n),e.forwardZ.linearRampToValueAtTime(hs.z,n),e.upX.linearRampToValueAtTime(us.x,n),e.upY.linearRampToValueAtTime(us.y,n),e.upZ.linearRampToValueAtTime(us.z,n)}else e.setPosition(cs.x,cs.y,cs.z),e.setOrientation(hs.x,hs.y,hs.z,us.x,us.y,us.z)}}class Um extends ue{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){xt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(xt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){xt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(xt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const ds=new R,tf=new tn,Fx=new R,fs=new R;class Bx extends Um{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ds,tf,Fx),fs.set(0,0,1).applyQuaternion(tf);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(ds.x,n),e.positionY.linearRampToValueAtTime(ds.y,n),e.positionZ.linearRampToValueAtTime(ds.z,n),e.orientationX.linearRampToValueAtTime(fs.x,n),e.orientationY.linearRampToValueAtTime(fs.y,n),e.orientationZ.linearRampToValueAtTime(fs.z,n)}else e.setPosition(ds.x,ds.y,ds.z),e.setOrientation(fs.x,fs.y,fs.z)}}class zx{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class Om{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){tn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;tn.multiplyQuaternionsFlat(t,a,t,e,t,n),tn.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const Dd="\\[\\]\\.:\\/",kx=new RegExp("["+Dd+"]","g"),Ld="[^"+Dd+"]",Vx="[^"+Dd.replace("\\.","")+"]",Hx=/((?:WC+[\/:])*)/.source.replace("WC",Ld),Gx=/(WCOD+)?/.source.replace("WCOD",Vx),Wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ld),Xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ld),Yx=new RegExp("^"+Hx+Gx+Wx+Xx+"$"),qx=["material","materials","bones","map"];class Zx{constructor(t,e,n){const i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class he{constructor(t,e,n){this.path=e,this.parsedPath=n||he.parseTrackName(e),this.node=he.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new he.Composite(t,e,n):new he(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(t){const e=Yx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);qx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=he.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}he.Composite=Zx;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Kx{constructor(){this.isAnimationObjectGroup=!0,this.uuid=En(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=t.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(u);for(let x=0,g=a;x!==g;++x)r[x].push(new he(u,n[x],i[x]))}else if(p<c){o=t[p];const x=--c,g=t[x];e[g.uuid]=p,t[p]=g,e[f]=x,t[x]=u;for(let m=0,_=a;m!==_;++m){const v=r[m],M=v[x];let E=v[p];v[p]=M,E===void 0&&(E=new he(u,n[m],i[m])),v[x]=E}}else t[p]!==o&&Ut("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){const d=r++,u=t[d];e[u.uuid]=h,t[h]=u,e[c]=d,t[d]=l;for(let f=0,p=i;f!==p;++f){const x=n[f],g=x[d],m=x[h];x[h]=g,x[d]=m}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=t.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,d=e[h];if(d!==void 0)if(delete e[h],d<r){const u=--r,f=t[u],p=--a,x=t[p];e[f.uuid]=d,t[d]=f,e[x.uuid]=u,t[u]=x,t.pop();for(let g=0,m=i;g!==m;++g){const _=n[g],v=_[u],M=_[p];_[d]=v,_[u]=M,_.pop()}}else{const u=--a,f=t[u];u>0&&(e[f.uuid]=d),t[d]=f,t.pop();for(let p=0,x=i;p!==x;++p){const g=n[p];g[d]=g[u],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(d);for(let u=h,f=l.length;u!==f;++u){const p=l[u];d[u]=new he(p,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=t[o];e[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class Nm{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:xs,endingEnd:xs};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings&&Object.assign(l,h.settings),h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Rp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case id:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Pc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===Pp;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===Cp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=vs,i.endingEnd=vs):(t?i.endingStart=this.zeroSlopeAtStart?vs:xs:i.endingStart=Ia,e?i.endingEnd=this.zeroSlopeAtEnd?vs:xs:i.endingEnd=Ia)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}}const Jx=new Float32Array(1);class $x extends Yn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;p=new Om(he.create(n,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Td(new Float32Array(2),new Float32Array(2),1,Jx),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?Ha.findByName(i,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Pc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Nm(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Ha.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class jx extends rd{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Uc(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Ud{constructor(t){this.value=t}clone(){return new Ud(this.value.clone===void 0?this.value:this.value.clone())}}let Qx=0;class tv extends Yn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Qx++}),this.name="",this.usage=Ua,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class ev extends Bc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class nv{constructor(t,e,n,i,r,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=a,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const ef=new Xt;class Fm{constructor(t,e,n=0,i=1/0){this.ray=new Lr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ut("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ef.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(t,e=!0,n=[]){return Pu(t,this,n,e),n.sort(nf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Pu(t[i],this,n,e);return n.sort(nf),n}}function nf(s,t){return s.distance-t.distance}function Pu(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Pu(r[a],t,e,!0)}}class iv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,xt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}let sv=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};class rv{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}const qd=class qd{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};qd.prototype.isMatrix2=!0;let Iu=qd;const sf=new j;class av{constructor(t=new j(1/0,1/0),e=new j(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sf.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sf).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const rf=new R,Yo=new R,ar=new R,or=new R,Yh=new R,ov=new R,lv=new R;class cv{constructor(t=new R,e=new R){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){rf.subVectors(t,this.start),Yo.subVectors(this.end,this.start);const n=Yo.dot(Yo);if(n===0)return 0;let r=Yo.dot(rf)/n;return e&&(r=Gt(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=ov,n=lv){const i=10000000000000001e-32;let r,a;const o=this.start,l=t.start,c=this.end,h=t.end;ar.subVectors(c,o),or.subVectors(h,l),Yh.subVectors(o,l);const d=ar.dot(ar),u=or.dot(or),f=or.dot(Yh);if(d<=i&&u<=i)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(d<=i)r=0,a=f/u,a=Gt(a,0,1);else{const p=ar.dot(Yh);if(u<=i)a=0,r=Gt(-p/d,0,1);else{const x=ar.dot(or),g=d*u-x*x;g!==0?r=Gt((x*f-p*u)/g,0,1):r=0,a=(x*r+f)/u,a<0?(a=0,r=Gt(-p/d,0,1)):a>1&&(a=1,r=Gt((x-p)/d,0,1))}}return e.copy(o).addScaledVector(ar,r),n.copy(l).addScaledVector(or,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const af=new R;class hv extends ue{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Zt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ct(i,3));const r=new un({fog:!1,toneMapped:!1});this.cone=new ui(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),af.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(af),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Fi=new R,qo=new Xt,qh=new Xt;class uv extends ui{constructor(t){const e=Bm(t),n=new Zt,i=[],r=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Ct(i,3)),n.setAttribute("color",new Ct(r,3));const a=new un({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const o=new vt(255),l=new vt(65280);this.setColors(o,l)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");qh.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){const o=e[r];o.parent&&o.parent.isBone&&(qo.multiplyMatrices(qh,o.matrixWorld),Fi.setFromMatrixPosition(qo),i.setXYZ(a,Fi.x,Fi.y,Fi.z),qo.multiplyMatrices(qh,o.parent.matrixWorld),Fi.setFromMatrixPosition(qo),i.setXYZ(a+1,Fi.x,Fi.y,Fi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Bm(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...Bm(s.children[e]));return t}class dv extends be{constructor(t,e,n){const i=new Qi(e,4,2),r=new Pn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const fv=new R,of=new vt,lf=new vt;class pv extends ue{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new eo(e);i.rotateY(Math.PI*.5),this.material=new Pn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new me(a,3)),this.add(new be(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");of.copy(this.light.color),lf.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?of:lf;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(fv.setFromMatrixPosition(this.light.matrixWorld).negate())}}class mv extends ui{constructor(t=10,e=10,n=4473924,i=8947848){n=new vt(n),i=new vt(i);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,f=0,p=-o;u<=e;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const x=u===r?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new Zt;h.setAttribute("position",new Ct(l,3)),h.setAttribute("color",new Ct(c,3));const d=new un({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class gv extends ui{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new vt(r),a=new vt(a);const o=[],l=[];if(e>1)for(let d=0;d<e;d++){const u=d/e*(Math.PI*2),f=Math.sin(u)*t,p=Math.cos(u)*t;o.push(0,0,0),o.push(f,0,p);const x=d&1?r:a;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let d=0;d<n;d++){const u=d&1?r:a,f=t-t/n*d;for(let p=0;p<i;p++){let x=p/i*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f;o.push(g,0,m),l.push(u.r,u.g,u.b),x=(p+1)/i*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f,o.push(g,0,m),l.push(u.r,u.g,u.b)}}const c=new Zt;c.setAttribute("position",new Ct(o,3)),c.setAttribute("color",new Ct(l,3));const h=new un({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const cf=new R,Zo=new R,hf=new R;class _v extends ue{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Zt;i.setAttribute("position",new Ct([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new un({fog:!1,toneMapped:!1});this.lightPlane=new $i(i,r),this.add(this.lightPlane),i=new Zt,i.setAttribute("position",new Ct([0,0,0,0,0,1],3)),this.targetLine=new $i(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),cf.setFromMatrixPosition(this.light.matrixWorld),Zo.setFromMatrixPosition(this.light.target.matrixWorld),hf.subVectors(Zo,cf),this.lightPlane.lookAt(Zo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Zo),this.targetLine.scale.z=hf.length()}}const Ko=new R,Ie=new th;class xv extends ui{constructor(t){const e=new Zt,n=new un({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,x){l(p),l(x)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}e.setAttribute("position",new Ct(i,3)),e.setAttribute("color",new Ct(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new vt(16755200),h=new vt(16711680),d=new vt(43775),u=new vt(16777215),f=new vt(3355443);this.setColors(c,h,d,u,f)}setColors(t,e,n,i,r){const o=this.geometry.getAttribute("color");return o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0,this}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;let r,a;if(Ie.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,a=0;else if(this.camera.coordinateSystem===Tn)r=-1,a=1;else if(this.camera.coordinateSystem===Rs)r=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Oe("c",e,t,Ie,0,0,r),Oe("t",e,t,Ie,0,0,a),Oe("n1",e,t,Ie,-n,-i,r),Oe("n2",e,t,Ie,n,-i,r),Oe("n3",e,t,Ie,-n,i,r),Oe("n4",e,t,Ie,n,i,r),Oe("f1",e,t,Ie,-n,-i,a),Oe("f2",e,t,Ie,n,-i,a),Oe("f3",e,t,Ie,-n,i,a),Oe("f4",e,t,Ie,n,i,a),Oe("u1",e,t,Ie,n*.7,i*1.1,r),Oe("u2",e,t,Ie,-n*.7,i*1.1,r),Oe("u3",e,t,Ie,0,i*2,r),Oe("cf1",e,t,Ie,-n,0,a),Oe("cf2",e,t,Ie,n,0,a),Oe("cf3",e,t,Ie,0,-i,a),Oe("cf4",e,t,Ie,0,i,a),Oe("cn1",e,t,Ie,-n,0,r),Oe("cn2",e,t,Ie,n,0,r),Oe("cn3",e,t,Ie,0,-i,r),Oe("cn4",e,t,Ie,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Oe(s,t,e,n,i,r,a){Ko.set(i,r,a).unproject(n);const o=t[s];if(o!==void 0){const l=e.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Ko.x,Ko.y,Ko.z)}}const Jo=new en;class vv extends ui{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Zt;r.setIndex(new me(n,1)),r.setAttribute("position",new me(i,3)),super(r,new un({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Jo.setFromObject(this.object),Jo.isEmpty())return;const t=Jo.min,e=Jo.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class yv extends ui{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Zt;r.setIndex(new me(n,1)),r.setAttribute("position",new Ct(i,3)),super(r,new un({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Mv extends $i{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Zt;a.setAttribute("position",new Ct(r,3)),a.computeBoundingSphere(),super(a,new un({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Zt;l.setAttribute("position",new Ct(o,3)),l.computeBoundingSphere(),this.add(new be(l,new Pn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const uf=new R;let $o,Zh;class Sv extends ue{constructor(t=new R(0,0,1),e=new R(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",$o===void 0&&($o=new Zt,$o.setAttribute("position",new Ct([0,0,0,0,1,0],3)),Zh=new Qa(.5,1,5,1),Zh.translate(0,-.5,0)),this.position.copy(e),this.line=new $i($o,new un({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new be(Zh,new Pn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{uf.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(uf,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class bv extends ui{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Zt;i.setAttribute("position",new Ct(e,3)),i.setAttribute("color",new Ct(n,3));const r=new un({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new vt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Tv{constructor(){this.type="ShapePath",this.color=new vt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new hc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const _=[];for(let v=0,M=m.length;v<M;v++){const E=m[v],b=new Es;b.curves=E.curves,_.push(b)}return _}function n(m,_){const v=_.length;let M=!1;for(let E=v-1,b=0;b<v;E=b++){let C=_[E],y=_[b],w=y.x-C.x,I=y.y-C.y;if(Math.abs(I)>Number.EPSILON){if(I<0&&(C=_[b],w=-w,y=_[E],I=-I),m.y<C.y||m.y>y.y)continue;if(m.y===C.y){if(m.x===C.x)return!0}else{const P=I*(m.x-C.x)-w*(m.y-C.y);if(P===0)return!0;if(P<0)continue;M=!M}}else{if(m.y!==C.y)continue;if(y.x<=m.x&&m.x<=C.x||C.x<=m.x&&m.x<=y.x)return!0}}return M}const i=Vn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new Es,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=t?!h:h;const d=[],u=[];let f=[],p=0,x;u[p]=void 0,f[p]=[];for(let m=0,_=r.length;m<_;m++)o=r[m],x=o.getPoints(),a=i(x),a=t?!a:a,a?(!h&&u[p]&&p++,u[p]={s:new Es,p:x},u[p].s.curves=o.curves,h&&p++,f[p]=[]):f[p].push({h:o,p:x[0]});if(!u[0])return e(r);if(u.length>1){let m=!1,_=0;for(let v=0,M=u.length;v<M;v++)d[v]=[];for(let v=0,M=u.length;v<M;v++){const E=f[v];for(let b=0;b<E.length;b++){const C=E[b];let y=!0;for(let w=0;w<u.length;w++)n(C.p,u[w].p)&&(v!==w&&_++,y?(y=!1,d[w].push(C)):m=!0);y&&d[v].push(C)}}_>0&&m===!1&&(f=d)}let g;for(let m=0,_=u.length;m<_;m++){l=u[m].s,c.push(l),g=f[m];for(let v=0,M=g.length;v<M;v++)l.holes.push(g[v].h)}return c}}class Ev extends Yn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){xt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function wv(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Av(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function Cv(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Du(s,t,e,n){const i=Rv(n);switch(e){case ed:return s*t;case Ac:return s*t/i.components*i.byteLength;case Ja:return s*t/i.components*i.byteLength;case Ki:return s*t*2/i.components*i.byteLength;case Cc:return s*t*2/i.components*i.byteLength;case nd:return s*t*3/i.components*i.byteLength;case cn:return s*t*4/i.components*i.byteLength;case Rc:return s*t*4/i.components*i.byteLength;case va:case ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ma:case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pl:case Dl:return Math.max(s,16)*Math.max(t,8)/4;case Rl:case Il:return Math.max(s,8)*Math.max(t,8)/2;case Ll:case Ul:case Nl:case Fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ol:case Ca:case Bl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case $l:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case jl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ql:case tc:case ec:return Math.ceil(s/4)*Math.ceil(t/4)*16;case nc:case ic:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ra:case sc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rv(s){switch(s){case mn:case $u:return{byteLength:1,components:1};case br:case ju:case hn:return{byteLength:2,components:1};case Ec:case wc:return{byteLength:2,components:4};case Cn:case Tc:case ln:return{byteLength:4,components:1};case Qu:case td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}class Pv{static contain(t,e){return wv(t,e)}static cover(t,e){return Av(t,e)}static fill(t){return Cv(t)}static getByteLength(t,e,n,i){return Du(t,e,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zm(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Iv(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ny=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ly="gl_FragColor = linearToOutputTexel( gl_FragColor );",cy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,py=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,my=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,My=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,by=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ty=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ry=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Py=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Iy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,n2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,l2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,m2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,S2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,w2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,A2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,C2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,z2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,k2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,H2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,q2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:Dv,alphahash_pars_fragment:Lv,alphamap_fragment:Uv,alphamap_pars_fragment:Ov,alphatest_fragment:Nv,alphatest_pars_fragment:Fv,aomap_fragment:Bv,aomap_pars_fragment:zv,batching_pars_vertex:kv,batching_vertex:Vv,begin_vertex:Hv,beginnormal_vertex:Gv,bsdfs:Wv,iridescence_fragment:Xv,bumpmap_pars_fragment:Yv,clipping_planes_fragment:qv,clipping_planes_pars_fragment:Zv,clipping_planes_pars_vertex:Kv,clipping_planes_vertex:Jv,color_fragment:$v,color_pars_fragment:jv,color_pars_vertex:Qv,color_vertex:ty,common:ey,cube_uv_reflection_fragment:ny,defaultnormal_vertex:iy,displacementmap_pars_vertex:sy,displacementmap_vertex:ry,emissivemap_fragment:ay,emissivemap_pars_fragment:oy,colorspace_fragment:ly,colorspace_pars_fragment:cy,envmap_fragment:hy,envmap_common_pars_fragment:uy,envmap_pars_fragment:dy,envmap_pars_vertex:fy,envmap_physical_pars_fragment:Ty,envmap_vertex:py,fog_vertex:my,fog_pars_vertex:gy,fog_fragment:_y,fog_pars_fragment:xy,gradientmap_pars_fragment:vy,lightmap_pars_fragment:yy,lights_lambert_fragment:My,lights_lambert_pars_fragment:Sy,lights_pars_begin:by,lights_toon_fragment:Ey,lights_toon_pars_fragment:wy,lights_phong_fragment:Ay,lights_phong_pars_fragment:Cy,lights_physical_fragment:Ry,lights_physical_pars_fragment:Py,lights_fragment_begin:Iy,lights_fragment_maps:Dy,lights_fragment_end:Ly,lightprobes_pars_fragment:Uy,logdepthbuf_fragment:Oy,logdepthbuf_pars_fragment:Ny,logdepthbuf_pars_vertex:Fy,logdepthbuf_vertex:By,map_fragment:zy,map_pars_fragment:ky,map_particle_fragment:Vy,map_particle_pars_fragment:Hy,metalnessmap_fragment:Gy,metalnessmap_pars_fragment:Wy,morphinstance_vertex:Xy,morphcolor_vertex:Yy,morphnormal_vertex:qy,morphtarget_pars_vertex:Zy,morphtarget_vertex:Ky,normal_fragment_begin:Jy,normal_fragment_maps:$y,normal_pars_fragment:jy,normal_pars_vertex:Qy,normal_vertex:t2,normalmap_pars_fragment:e2,clearcoat_normal_fragment_begin:n2,clearcoat_normal_fragment_maps:i2,clearcoat_pars_fragment:s2,iridescence_pars_fragment:r2,opaque_fragment:a2,packing:o2,premultiplied_alpha_fragment:l2,project_vertex:c2,dithering_fragment:h2,dithering_pars_fragment:u2,roughnessmap_fragment:d2,roughnessmap_pars_fragment:f2,shadowmap_pars_fragment:p2,shadowmap_pars_vertex:m2,shadowmap_vertex:g2,shadowmask_pars_fragment:_2,skinbase_vertex:x2,skinning_pars_vertex:v2,skinning_vertex:y2,skinnormal_vertex:M2,specularmap_fragment:S2,specularmap_pars_fragment:b2,tonemapping_fragment:T2,tonemapping_pars_fragment:E2,transmission_fragment:w2,transmission_pars_fragment:A2,uv_pars_fragment:C2,uv_pars_vertex:R2,uv_vertex:P2,worldpos_vertex:I2,background_vert:D2,background_frag:L2,backgroundCube_vert:U2,backgroundCube_frag:O2,cube_vert:N2,cube_frag:F2,depth_vert:B2,depth_frag:z2,distance_vert:k2,distance_frag:V2,equirect_vert:H2,equirect_frag:G2,linedashed_vert:W2,linedashed_frag:X2,meshbasic_vert:Y2,meshbasic_frag:q2,meshlambert_vert:Z2,meshlambert_frag:K2,meshmatcap_vert:J2,meshmatcap_frag:$2,meshnormal_vert:j2,meshnormal_frag:Q2,meshphong_vert:t3,meshphong_frag:e3,meshphysical_vert:n3,meshphysical_frag:i3,meshtoon_vert:s3,meshtoon_frag:r3,points_vert:a3,points_frag:o3,shadow_vert:l3,shadow_frag:c3,sprite_vert:h3,sprite_frag:u3},Mt={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Fn={basic:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:rn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:rn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new vt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:rn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:rn([Mt.points,Mt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:rn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:rn([Mt.common,Mt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:rn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:rn([Mt.sprite,Mt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:rn([Mt.common,Mt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:rn([Mt.lights,Mt.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Fn.physical={uniforms:rn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const jo={r:0,b:0,g:0},d3=new Xt,km=new Jt;km.set(-1,0,0,0,1,0,0,0,1);function f3(s,t,e,n,i,r){const a=new vt(0);let o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let v=_.isScene===!0?_.background:null;if(v&&v.isTexture){const M=_.backgroundBlurriness>0;v=t.get(v,M)}return v}function p(_){let v=!1;const M=f(_);M===null?g(a,o):M&&M.isColor&&(g(M,1),v=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,v){const M=f(v);M&&(M.isCubeTexture||M.mapping===Dr)?(c===void 0&&(c=new be(new Fs(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:Cr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(d3.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(km),c.material.toneMapped=ae.getTransfer(M.colorSpace)!==pe,(h!==M||d!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new be(new Or(2,2),new ze({name:"BackgroundMaterial",uniforms:Cr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ae.getTransfer(M.colorSpace)!==pe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,v){_.getRGB(jo,hm(s)),e.buffers.color.setClear(jo.r,jo.g,jo.b,v,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),o=v,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:p,addToRenderList:x,dispose:m}}function p3(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(P,O,W,Y,L){let k=!1;const F=d(P,Y,W,O);r!==F&&(r=F,c(r.object)),k=f(P,Y,W,L),k&&p(P,Y,W,L),L!==null&&t.update(L,s.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,M(P,O,W,Y),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function d(P,O,W,Y){const L=Y.wireframe===!0;let k=n[O.id];k===void 0&&(k={},n[O.id]=k);const F=P.isInstancedMesh===!0?P.id:0;let it=k[F];it===void 0&&(it={},k[F]=it);let ot=it[W.id];ot===void 0&&(ot={},it[W.id]=ot);let rt=ot[L];return rt===void 0&&(rt=u(l()),ot[L]=rt),rt}function u(P){const O=[],W=[],Y=[];for(let L=0;L<e;L++)O[L]=0,W[L]=0,Y[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:Y,object:P,attributes:{},index:null}}function f(P,O,W,Y){const L=r.attributes,k=O.attributes;let F=0;const it=W.getAttributes();for(const ot in it)if(it[ot].location>=0){const St=L[ot];let Lt=k[ot];if(Lt===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(Lt=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(Lt=P.instanceColor)),St===void 0||St.attribute!==Lt||Lt&&St.data!==Lt.data)return!0;F++}return r.attributesNum!==F||r.index!==Y}function p(P,O,W,Y){const L={},k=O.attributes;let F=0;const it=W.getAttributes();for(const ot in it)if(it[ot].location>=0){let St=k[ot];St===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(St=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(St=P.instanceColor));const Lt={};Lt.attribute=St,St&&St.data&&(Lt.data=St.data),L[ot]=Lt,F++}r.attributes=L,r.attributesNum=F,r.index=Y}function x(){const P=r.newAttributes;for(let O=0,W=P.length;O<W;O++)P[O]=0}function g(P){m(P,0)}function m(P,O){const W=r.newAttributes,Y=r.enabledAttributes,L=r.attributeDivisors;W[P]=1,Y[P]===0&&(s.enableVertexAttribArray(P),Y[P]=1),L[P]!==O&&(s.vertexAttribDivisor(P,O),L[P]=O)}function _(){const P=r.newAttributes,O=r.enabledAttributes;for(let W=0,Y=O.length;W<Y;W++)O[W]!==P[W]&&(s.disableVertexAttribArray(W),O[W]=0)}function v(P,O,W,Y,L,k,F){F===!0?s.vertexAttribIPointer(P,O,W,L,k):s.vertexAttribPointer(P,O,W,Y,L,k)}function M(P,O,W,Y){x();const L=Y.attributes,k=W.getAttributes(),F=O.defaultAttributeValues;for(const it in k){const ot=k[it];if(ot.location>=0){let rt=L[it];if(rt===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor)),rt!==void 0){const St=rt.normalized,Lt=rt.itemSize,Kt=t.get(rt);if(Kt===void 0)continue;const le=Kt.buffer,Wt=Kt.type,Q=Kt.bytesPerElement,yt=Wt===s.INT||Wt===s.UNSIGNED_INT||rt.gpuType===Tc;if(rt.isInterleavedBufferAttribute){const ht=rt.data,z=ht.stride,Ft=rt.offset;if(ht.isInstancedInterleavedBuffer){for(let Vt=0;Vt<ot.locationSize;Vt++)m(ot.location+Vt,ht.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Vt=0;Vt<ot.locationSize;Vt++)g(ot.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,le);for(let Vt=0;Vt<ot.locationSize;Vt++)v(ot.location+Vt,Lt/ot.locationSize,Wt,St,z*Q,(Ft+Lt/ot.locationSize*Vt)*Q,yt)}else{if(rt.isInstancedBufferAttribute){for(let ht=0;ht<ot.locationSize;ht++)m(ot.location+ht,rt.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ht=0;ht<ot.locationSize;ht++)g(ot.location+ht);s.bindBuffer(s.ARRAY_BUFFER,le);for(let ht=0;ht<ot.locationSize;ht++)v(ot.location+ht,Lt/ot.locationSize,Wt,St,Lt*Q,Lt/ot.locationSize*ht*Q,yt)}}else if(F!==void 0){const St=F[it];if(St!==void 0)switch(St.length){case 2:s.vertexAttrib2fv(ot.location,St);break;case 3:s.vertexAttrib3fv(ot.location,St);break;case 4:s.vertexAttrib4fv(ot.location,St);break;default:s.vertexAttrib1fv(ot.location,St)}}}}_()}function E(){w();for(const P in n){const O=n[P];for(const W in O){const Y=O[W];for(const L in Y){const k=Y[L];for(const F in k)h(k[F].object),delete k[F];delete Y[L]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;const O=n[P.id];for(const W in O){const Y=O[W];for(const L in Y){const k=Y[L];for(const F in k)h(k[F].object),delete k[F];delete Y[L]}}delete n[P.id]}function C(P){for(const O in n){const W=n[O];for(const Y in W){const L=W[Y];if(L[P.id]===void 0)continue;const k=L[P.id];for(const F in k)h(k[F].object),delete k[F];delete L[P.id]}}}function y(P){for(const O in n){const W=n[O],Y=P.isInstancedMesh===!0?P.id:0,L=W[Y];if(L!==void 0){for(const k in L){const F=L[k];for(const it in F)h(F[it].object),delete F[it];delete L[k]}delete W[Y],Object.keys(W).length===0&&delete n[O]}}}function w(){I(),a=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function m3(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function g3(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==cn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const y=C===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==mn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ln&&!y)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,maxSamples:E,samples:b}}function _3(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Vi,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{const _=r?0:n,v=_*4;let M=m.clippingState||null;l.value=M,M=h(p,u,v,f);for(let E=0;E!==v;++E)M[E]=e[E];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,p!==!0||g===null){const m=f+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,M=f;v!==x;++v,M+=4)a.copy(d[v]).applyMatrix4(_,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const Yi=4,df=[.125,.215,.35,.446,.526,.582],_s=20,x3=256,na=new Fr,ff=new vt;let Kh=null,Jh=0,$h=0,jh=!1;const v3=new R;class Lu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=v3}=r;Kh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kh,Jh,$h),this._renderer.xr.enabled=jh,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:we,minFilter:we,generateMipmaps:!1,type:hn,format:cn,colorSpace:Da,depthBuffer:!1},i=pf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pf(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=y3(r)),this._blurMaterial=S3(r,t,e),this._ggxMaterial=M3(r,t,e)}return i}_compileMaterial(t){const e=new be(new Zt,t);this._renderer.compile(e,na)}_sceneToCubeUV(t,e,n,i,r){const l=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(ff),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new Fs,new Pn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let m=!1;const _=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,m=!0):(g.color.copy(ff),m=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));const E=this._cubeSize;lr(i,M*E,v>2?E:0,E,E),d.setRenderTarget(i),m&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===oi||t.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mf());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,na)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Yi?n-p+Yi:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,lr(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(o,na),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,lr(t,g,m,3*x,2*x),i.setRenderTarget(t),i.render(o,na)}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_s-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):_s;g>_s&&xt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${_s}`);const m=[];let _=0;for(let C=0;C<_s;++C){const y=C/x,w=Math.exp(-y*y/2);m.push(w),C===0?_+=w:C<g&&(_+=2*w)}for(let C=0;C<m.length;C++)m[C]=m[C]/_;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;const M=this._sizeLods[i],E=3*M*(i>v-Yi?i-v+Yi:0),b=4*(this._cubeSize-M);lr(e,E,b,3*M,2*M),l.setRenderTarget(e),l.render(d,na)}}function y3(s){const t=[],e=[],n=[];let i=s;const r=s-Yi+1+df.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Yi?l=df[a-s+Yi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,x=3,g=2,m=1,_=new Float32Array(x*p*f),v=new Float32Array(g*p*f),M=new Float32Array(m*p*f);for(let b=0;b<f;b++){const C=b%3*2/3-1,y=b>2?0:-1,w=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];_.set(w,x*p*b),v.set(u,g*p*b);const I=[b,b,b,b,b,b];M.set(I,m*p*b)}const E=new Zt;E.setAttribute("position",new me(_,x)),E.setAttribute("uv",new me(v,g)),E.setAttribute("faceIndex",new me(M,m)),n.push(new be(E,null)),i>Yi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function pf(s,t,e){const n=new Xe(s,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function M3(s,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ih(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function S3(s,t,e){const n=new Float32Array(_s),i=new R(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function mf(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function gf(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Od extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new $a(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Fs(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Hn});r.uniforms.tEquirect.value=e;const a=new be(i,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=we),new Dm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}function b3(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===ga||f===_a)if(t.has(u)){const p=t.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const x=new Od(p.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,p=f===ga||f===_a,x=f===oi||f===Zi;if(p||x){let g=e.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Lu(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const _=u.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Lu(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===ga?u.mapping=oi:f===_a&&(u.mapping=Zi),u}function l(u){let f=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function T3(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ac("WebGLRenderer: "+n+" extension not supported."),i}}}function E3(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,p=d.attributes.position;let x=0;if(p===void 0)return;if(f!==null){const _=f.array;x=f.version;for(let v=0,M=_.length;v<M;v+=3){const E=_[v+0],b=_[v+1],C=_[v+2];u.push(E,b,b,C,C,E)}}else{const _=p.array;x=p.version;for(let v=0,M=_.length/3-1;v<M;v+=3){const E=v+0,b=v+1,C=v+2;u.push(E,b,b,C,C,E)}}const g=new(p.count>=65535?ld:od)(u,1);g.version=x;const m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function w3(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function A3(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Ut("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function C3(s,t,e){const n=new WeakMap,i=new xe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let I=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var f=I;u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let E=o.attributes.position.count*M,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const C=new Float32Array(E*b*4*d),y=new Lc(C,E,b,d);y.type=ln,y.needsUpdate=!0;const w=M*4;for(let P=0;P<d;P++){const O=m[P],W=_[P],Y=v[P],L=E*b*4*P;for(let k=0;k<O.count;k++){const F=k*w;p===!0&&(i.fromBufferAttribute(O,k),C[L+F+0]=i.x,C[L+F+1]=i.y,C[L+F+2]=i.z,C[L+F+3]=0),x===!0&&(i.fromBufferAttribute(W,k),C[L+F+4]=i.x,C[L+F+5]=i.y,C[L+F+6]=i.z,C[L+F+7]=0),g===!0&&(i.fromBufferAttribute(Y,k),C[L+F+8]=i.x,C[L+F+9]=i.y,C[L+F+10]=i.z,C[L+F+11]=Y.itemSize===4?i.w:1)}}u={count:d,texture:y,size:new j(E,b)},n.set(o,u),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function R3(s,t,e,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const P3={[_c]:"LINEAR_TONE_MAPPING",[xc]:"REINHARD_TONE_MAPPING",[vc]:"CINEON_TONE_MAPPING",[Ka]:"ACES_FILMIC_TONE_MAPPING",[Mc]:"AGX_TONE_MAPPING",[Sc]:"NEUTRAL_TONE_MAPPING",[yc]:"CUSTOM_TONE_MAPPING"};function I3(s,t,e,n,i){const r=new Xe(t,e,{type:s,depthBuffer:n,stencilBuffer:i,depthTexture:n?new Is(t,e):void 0}),a=new Xe(t,e,{type:hn,depthBuffer:!1,stencilBuffer:!1}),o=new Zt;o.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ct([0,2,0,0,2,0],2));const l=new Qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new be(o,l),h=new Fr(-1,1,1,-1,0,1);let d=null,u=null,f=!1,p,x=null,g=[],m=!1;this.setSize=function(_,v){r.setSize(_,v),a.setSize(_,v);for(let M=0;M<g.length;M++){const E=g[M];E.setSize&&E.setSize(_,v)}},this.setEffects=function(_){g=_,m=g.length>0&&g[0].isRenderPass===!0;const v=r.width,M=r.height;for(let E=0;E<g.length;E++){const b=g[E];b.setSize&&b.setSize(v,M)}},this.begin=function(_,v){if(f||_.toneMapping===Gn&&g.length===0)return!1;if(x=v,v!==null){const M=v.width,E=v.height;(r.width!==M||r.height!==E)&&this.setSize(M,E)}return m===!1&&_.setRenderTarget(r),p=_.toneMapping,_.toneMapping=Gn,!0},this.hasRenderPass=function(){return m},this.end=function(_,v){_.toneMapping=p,f=!0;let M=r,E=a;for(let b=0;b<g.length;b++){const C=g[b];if(C.enabled!==!1&&(C.render(_,E,M,v),C.needsSwap!==!1)){const y=M;M=E,E=y}}if(d!==_.outputColorSpace||u!==_.toneMapping){d=_.outputColorSpace,u=_.toneMapping,l.defines={},ae.getTransfer(d)===pe&&(l.defines.SRGB_TRANSFER="");const b=P3[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(x),_.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Vm=new Re,Uu=new Is(1,1),Hm=new Lc,Gm=new Uc,Wm=new $a,_f=[],xf=[],vf=new Float32Array(16),yf=new Float32Array(9),Mf=new Float32Array(4);function Br(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=_f[i];if(r===void 0&&(r=new Float32Array(i),_f[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function He(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function sh(s,t){let e=xf[t];e===void 0&&(e=new Int32Array(t),xf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function D3(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function L3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2fv(this.addr,t),He(e,t)}}function U3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;s.uniform3fv(this.addr,t),He(e,t)}}function O3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4fv(this.addr,t),He(e,t)}}function N3(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Mf.set(n),s.uniformMatrix2fv(this.addr,!1,Mf),He(e,n)}}function F3(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;yf.set(n),s.uniformMatrix3fv(this.addr,!1,yf),He(e,n)}}function B3(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;vf.set(n),s.uniformMatrix4fv(this.addr,!1,vf),He(e,n)}}function z3(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function k3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2iv(this.addr,t),He(e,t)}}function V3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3iv(this.addr,t),He(e,t)}}function H3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4iv(this.addr,t),He(e,t)}}function G3(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function W3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2uiv(this.addr,t),He(e,t)}}function X3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3uiv(this.addr,t),He(e,t)}}function Y3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4uiv(this.addr,t),He(e,t)}}function q3(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Uu.compareFunction=e.isReversedDepthBuffer()?Dc:Ic,r=Uu):r=Vm,e.setTexture2D(t||r,i)}function Z3(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Gm,i)}function K3(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wm,i)}function J3(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hm,i)}function $3(s){switch(s){case 5126:return D3;case 35664:return L3;case 35665:return U3;case 35666:return O3;case 35674:return N3;case 35675:return F3;case 35676:return B3;case 5124:case 35670:return z3;case 35667:case 35671:return k3;case 35668:case 35672:return V3;case 35669:case 35673:return H3;case 5125:return G3;case 36294:return W3;case 36295:return X3;case 36296:return Y3;case 35678:case 36198:case 36298:case 36306:case 35682:return q3;case 35679:case 36299:case 36307:return Z3;case 35680:case 36300:case 36308:case 36293:return K3;case 36289:case 36303:case 36311:case 36292:return J3}}function j3(s,t){s.uniform1fv(this.addr,t)}function Q3(s,t){const e=Br(t,this.size,2);s.uniform2fv(this.addr,e)}function tM(s,t){const e=Br(t,this.size,3);s.uniform3fv(this.addr,e)}function eM(s,t){const e=Br(t,this.size,4);s.uniform4fv(this.addr,e)}function nM(s,t){const e=Br(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function iM(s,t){const e=Br(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sM(s,t){const e=Br(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function rM(s,t){s.uniform1iv(this.addr,t)}function aM(s,t){s.uniform2iv(this.addr,t)}function oM(s,t){s.uniform3iv(this.addr,t)}function lM(s,t){s.uniform4iv(this.addr,t)}function cM(s,t){s.uniform1uiv(this.addr,t)}function hM(s,t){s.uniform2uiv(this.addr,t)}function uM(s,t){s.uniform3uiv(this.addr,t)}function dM(s,t){s.uniform4uiv(this.addr,t)}function fM(s,t,e){const n=this.cache,i=t.length,r=sh(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),He(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Uu:a=Vm;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function pM(s,t,e){const n=this.cache,i=t.length,r=sh(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Gm,r[a])}function mM(s,t,e){const n=this.cache,i=t.length,r=sh(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Wm,r[a])}function gM(s,t,e){const n=this.cache,i=t.length,r=sh(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Hm,r[a])}function _M(s){switch(s){case 5126:return j3;case 35664:return Q3;case 35665:return tM;case 35666:return eM;case 35674:return nM;case 35675:return iM;case 35676:return sM;case 5124:case 35670:return rM;case 35667:case 35671:return aM;case 35668:case 35672:return oM;case 35669:case 35673:return lM;case 5125:return cM;case 36294:return hM;case 36295:return uM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return pM;case 35680:case 36300:case 36308:case 36293:return mM;case 36289:case 36303:case 36311:case 36292:return gM}}class xM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$3(e.type)}}class vM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_M(e.type)}}class yM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function Sf(s,t){s.seq.push(t),s.map[t.id]=t}function MM(s,t,e){const n=s.name,i=n.length;for(Qh.lastIndex=0;;){const r=Qh.exec(n),a=Qh.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Sf(e,c===void 0?new xM(o,s,t):new vM(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new yM(o),Sf(e,d)),e=d}}}class pl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);MM(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function bf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const SM=37297;let bM=0;function TM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Tf=new Jt;function EM(s){ae._getMatrix(Tf,ae.workingColorSpace,s);const t=`mat3( ${Tf.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(s)){case La:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ef(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+TM(s.getShaderSource(t),o)}else return r}function wM(s,t){const e=EM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const AM={[_c]:"Linear",[xc]:"Reinhard",[vc]:"Cineon",[Ka]:"ACESFilmic",[Mc]:"AgX",[Sc]:"Neutral",[yc]:"Custom"};function CM(s,t){const e=AM[t];return e===void 0?(xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qo=new R;function RM(){ae.getLuminanceCoefficients(Qo);const s=Qo.x.toFixed(4),t=Qo.y.toFixed(4),e=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function IM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function DM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function da(s){return s!==""}function wf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Af(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const LM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(s){return s.replace(LM,OM)}const UM=new Map;function OM(s,t){let e=se[t];if(e===void 0){const n=UM.get(t);if(n!==void 0)e=se[n],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ou(e)}const NM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(s){return s.replace(NM,FM)}function FM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Rf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const BM={[ma]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function zM(s){return BM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kM={[oi]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE_UV"};function VM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":kM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const HM={[Zi]:"ENVMAP_MODE_REFRACTION"};function GM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":HM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WM={[Za]:"ENVMAP_BLENDING_MULTIPLY",[Ep]:"ENVMAP_BLENDING_MIX",[wp]:"ENVMAP_BLENDING_ADD"};function XM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":WM[s.combine]||"ENVMAP_BLENDING_NONE"}function YM(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function qM(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=zM(e),c=VM(e),h=GM(e),d=XM(e),u=YM(e),f=PM(e),p=IM(r),x=i.createProgram();let g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(da).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(da).join(`
`),m.length>0&&(m+=`
`)):(g=[Rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),m=[Rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?se.tonemapping_pars_fragment:"",e.toneMapping!==Gn?CM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,wM("linearToOutputTexel",e.outputColorSpace),RM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(da).join(`
`)),a=Ou(a),a=wf(a,e),a=Af(a,e),o=Ou(o),o=wf(o,e),o=Af(o,e),a=Cf(a),o=Cf(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=_+g+a,M=_+m+o,E=bf(i,i.VERTEX_SHADER,v),b=bf(i,i.FRAGMENT_SHADER,M);i.attachShader(x,E),i.attachShader(x,b),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(x)||"",W=i.getShaderInfoLog(E)||"",Y=i.getShaderInfoLog(b)||"",L=O.trim(),k=W.trim(),F=Y.trim();let it=!0,ot=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,E,b);else{const rt=Ef(i,E,"vertex"),St=Ef(i,b,"fragment");Ut("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+rt+`
`+St)}else L!==""?xt("WebGLProgram: Program Info Log:",L):(k===""||F==="")&&(ot=!1);ot&&(P.diagnostics={runnable:it,programLog:L,vertexShader:{log:k,prefix:g},fragmentShader:{log:F,prefix:m}})}i.deleteShader(E),i.deleteShader(b),y=new pl(i,x),w=DM(i,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(x,SM)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}let ZM=0;class KM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new JM(t),e.set(t,n)),n}}class JM{constructor(t){this.id=ZM++,this.code=t,this.usedTimes=0}}function $M(s){return s===Ki||s===Ca||s===Ra}function jM(s,t,e,n,i,r){const a=new Oc,o=new KM,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,w,I,P,O,W){const Y=P.fog,L=O.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,it=t.get(y.envMap||k,F),ot=it&&it.mapping===Dr?it.image.height:null,rt=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&xt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const St=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Lt=St!==void 0?St.length:0;let Kt=0;L.morphAttributes.position!==void 0&&(Kt=1),L.morphAttributes.normal!==void 0&&(Kt=2),L.morphAttributes.color!==void 0&&(Kt=3);let le,Wt,Q,yt;if(rt){const Qt=Fn[rt];le=Qt.vertexShader,Wt=Qt.fragmentShader}else le=y.vertexShader,Wt=y.fragmentShader,o.update(y),Q=o.getVertexShaderID(y),yt=o.getFragmentShaderID(y);const ht=s.getRenderTarget(),z=s.state.buffers.depth.getReversed(),Ft=O.isInstancedMesh===!0,Vt=O.isBatchedMesh===!0,Pt=!!y.map,Tt=!!y.matcap,Z=!!it,nt=!!y.aoMap,K=!!y.lightMap,mt=!!y.bumpMap,lt=!!y.normalMap,Ht=!!y.displacementMap,D=!!y.emissiveMap,$t=!!y.metalnessMap,Ot=!!y.roughnessMap,qt=y.anisotropy>0,ct=y.clearcoat>0,ge=y.dispersion>0,A=y.iridescence>0,S=y.sheen>0,B=y.transmission>0,$=qt&&!!y.anisotropyMap,st=ct&&!!y.clearcoatMap,ut=ct&&!!y.clearcoatNormalMap,pt=ct&&!!y.clearcoatRoughnessMap,q=A&&!!y.iridescenceMap,tt=A&&!!y.iridescenceThicknessMap,wt=S&&!!y.sheenColorMap,It=S&&!!y.sheenRoughnessMap,gt=!!y.specularMap,dt=!!y.specularColorMap,jt=!!y.specularIntensityMap,ne=B&&!!y.transmissionMap,de=B&&!!y.thicknessMap,U=!!y.gradientMap,ft=!!y.alphaMap,J=y.alphaTest>0,At=!!y.alphaHash,_t=!!y.extensions;let at=Gn;y.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(at=s.toneMapping);const Bt={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:le,fragmentShader:Wt,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:yt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Vt,batchingColor:Vt&&O._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&O.instanceColor!==null,instancingMorph:Ft&&O.morphTexture!==null,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Pt,matcap:Tt,envMap:Z,envMapMode:Z&&it.mapping,envMapCubeUVHeight:ot,aoMap:nt,lightMap:K,bumpMap:mt,normalMap:lt,displacementMap:Ht,emissiveMap:D,normalMapObjectSpace:lt&&y.normalMapType===Dp,normalMapTangentSpace:lt&&y.normalMapType===wi,packedNormalMap:lt&&y.normalMapType===wi&&$M(y.normalMap.format),metalnessMap:$t,roughnessMap:Ot,anisotropy:qt,anisotropyMap:$,clearcoat:ct,clearcoatMap:st,clearcoatNormalMap:ut,clearcoatRoughnessMap:pt,dispersion:ge,iridescence:A,iridescenceMap:q,iridescenceThicknessMap:tt,sheen:S,sheenColorMap:wt,sheenRoughnessMap:It,specularMap:gt,specularColorMap:dt,specularIntensityMap:jt,transmission:B,transmissionMap:ne,thicknessMap:de,gradientMap:U,opaque:y.transparent===!1&&y.blending===bs&&y.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:At,combine:y.combine,mapUv:Pt&&p(y.map.channel),aoMapUv:nt&&p(y.aoMap.channel),lightMapUv:K&&p(y.lightMap.channel),bumpMapUv:mt&&p(y.bumpMap.channel),normalMapUv:lt&&p(y.normalMap.channel),displacementMapUv:Ht&&p(y.displacementMap.channel),emissiveMapUv:D&&p(y.emissiveMap.channel),metalnessMapUv:$t&&p(y.metalnessMap.channel),roughnessMapUv:Ot&&p(y.roughnessMap.channel),anisotropyMapUv:$&&p(y.anisotropyMap.channel),clearcoatMapUv:st&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:It&&p(y.sheenRoughnessMap.channel),specularMapUv:gt&&p(y.specularMap.channel),specularColorMapUv:dt&&p(y.specularColorMap.channel),specularIntensityMapUv:jt&&p(y.specularIntensityMap.channel),transmissionMapUv:ne&&p(y.transmissionMap.channel),thicknessMapUv:de&&p(y.thicknessMap.channel),alphaMapUv:ft&&p(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(lt||qt),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(Pt||ft),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&lt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:z,skinning:O.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Kt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:Pt&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===pe,decodeVideoTextureEmissive:D&&y.emissiveMap.isVideoTexture===!0&&ae.getTransfer(y.emissiveMap.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zn,flipSided:y.side===Ye,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_t&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&y.extensions.multiDraw===!0||Vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function g(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)w.push(I),w.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(m(w,y),_(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function m(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),y.push(a.mask)}function v(y){const w=f[y.type];let I;if(w){const P=Fn[w];I=Rr.clone(P.uniforms)}else I=y.uniforms;return I}function M(y,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new qM(s,w,y,i),c.push(I),h.set(w,I)),I}function E(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:v,acquireProgram:M,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:C}}function QM(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function tS(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Pf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function If(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let _=s[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=p,_.materialVariant=a(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=g,_.group=m),t++,_}function l(u,f,p,x,g,m){const _=o(u,f,p,x,g,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):e.push(_)}function c(u,f,p,x,g,m){const _=o(u,f,p,x,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):e.unshift(_)}function h(u,f){e.length>1&&e.sort(u||tS),n.length>1&&n.sort(f||Pf),i.length>1&&i.sort(f||Pf)}function d(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function eS(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new If,s.set(n,[a])):i>=r.length?(a=new If,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function nS(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new vt};break;case"SpotLight":e={position:new R,direction:new R,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function iS(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let sS=0;function rS(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function aS(s){const t=new nS,e=iS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new Xt,a=new Xt;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,v=0,M=0,E=0,b=0,C=0;c.sort(rS);for(let w=0,I=c.length;w<I;w++){const P=c[w],O=P.color,W=P.intensity,Y=P.distance;let L=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ki?L=P.shadow.map.texture:L=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*W,d+=O.g*W,u+=O.b*W;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],W);C++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,it=e.get(P);it.shadowIntensity=F.intensity,it.shadowBias=F.bias,it.shadowNormalBias=F.normalBias,it.shadowRadius=F.radius,it.shadowMapSize=F.mapSize,n.directionalShadow[f]=it,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=P.shadow.matrix,_++}n.directional[f]=k,f++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(O).multiplyScalar(W),k.distance=Y,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[x]=k;const F=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,F.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[x]=F.matrix,P.castShadow){const it=e.get(P);it.shadowIntensity=F.intensity,it.shadowBias=F.bias,it.shadowNormalBias=F.normalBias,it.shadowRadius=F.radius,it.shadowMapSize=F.mapSize,n.spotShadow[x]=it,n.spotShadowMap[x]=L,M++}x++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(O).multiplyScalar(W),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=k,g++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const F=P.shadow,it=e.get(P);it.shadowIntensity=F.intensity,it.shadowBias=F.bias,it.shadowNormalBias=F.normalBias,it.shadowRadius=F.radius,it.shadowMapSize=F.mapSize,it.shadowCameraNear=F.camera.near,it.shadowCameraFar=F.camera.far,n.pointShadow[p]=it,n.pointShadowMap[p]=L,n.pointShadowMatrix[p]=P.shadow.matrix,v++}n.point[p]=k,p++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(W),k.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[m]=k,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const y=n.hash;(y.directionalLength!==f||y.pointLength!==p||y.spotLength!==x||y.rectAreaLength!==g||y.hemiLength!==m||y.numDirectionalShadows!==_||y.numPointShadows!==v||y.numSpotShadows!==M||y.numSpotMaps!==E||y.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,y.directionalLength=f,y.pointLength=p,y.spotLength=x,y.rectAreaLength=g,y.hemiLength=m,y.numDirectionalShadows=_,y.numPointShadows=v,y.numSpotShadows=M,y.numSpotMaps=E,y.numLightProbes=C,n.version=sS++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0;const g=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){const v=c[m];if(v.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),d++}else if(v.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),f++}else if(v.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Df(s){const t=new aS(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function oS(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Df(s),t.set(i,[o])):r>=a.length?(o=new Df(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const lS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hS=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],uS=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Lf=new Xt,ia=new R,tu=new R;function dS(s,t,e){let n=new Ur;const i=new j,r=new j,a=new xe,o=new Md,l=new Sd,c={},h=e.maxTextureSize,d={[Ei]:Ye,[Ye]:Ei,[zn]:zn},u=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:lS,fragmentShader:cS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Zt;p.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new be(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma;let m=this.type;this.render=function(b,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===ap&&(xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ma);const w=s.getRenderTarget(),I=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Hn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const W=m!==this.type;W&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(L=>L.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,L=b.length;Y<L;Y++){const k=b[Y],F=k.shadow;if(F===void 0){xt("WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const it=F.getFrameExtents();i.multiply(it),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,F.mapSize.y=r.y));const ot=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ot,F.map===null||W===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===pr){if(k.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Xe(i.x,i.y,{format:Ki,type:hn,minFilter:we,magFilter:we,generateMipmaps:!1}),F.map.texture.name=k.name+".shadowMap",F.map.depthTexture=new Is(i.x,i.y,ln),F.map.depthTexture.name=k.name+".shadowMapDepth",F.map.depthTexture.format=li,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ne,F.map.depthTexture.magFilter=Ne}else k.isPointLight?(F.map=new Od(i.x),F.map.depthTexture=new $p(i.x,Cn)):(F.map=new Xe(i.x,i.y),F.map.depthTexture=new Is(i.x,i.y,Cn)),F.map.depthTexture.name=k.name+".shadowMap",F.map.depthTexture.format=li,this.type===ma?(F.map.depthTexture.compareFunction=ot?Dc:Ic,F.map.depthTexture.minFilter=we,F.map.depthTexture.magFilter=we):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ne,F.map.depthTexture.magFilter=Ne);F.camera.updateProjectionMatrix()}const rt=F.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<rt;St++){if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,St),s.clear();else{St===0&&(s.setRenderTarget(F.map),s.clear());const Lt=F.getViewport(St);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),O.viewport(a)}if(k.isPointLight){const Lt=F.camera,Kt=F.matrix,le=k.distance||Lt.far;le!==Lt.far&&(Lt.far=le,Lt.updateProjectionMatrix()),ia.setFromMatrixPosition(k.matrixWorld),Lt.position.copy(ia),tu.copy(Lt.position),tu.add(hS[St]),Lt.up.copy(uS[St]),Lt.lookAt(tu),Lt.updateMatrixWorld(),Kt.makeTranslation(-ia.x,-ia.y,-ia.z),Lf.multiplyMatrices(Lt.projectionMatrix,Lt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Lf,Lt.coordinateSystem,Lt.reversedDepth)}else F.updateMatrices(k);n=F.getFrustum(),M(C,y,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===pr&&_(F,y),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(w,I,P)};function _(b,C){const y=t.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Xe(i.x,i.y,{format:Ki,type:hn})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(C,null,y,u,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(C,null,y,f,x,null)}function v(b,C,y,w){let I=null;const P=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)I=P;else if(I=y.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=I.uuid,W=C.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let L=Y[W];L===void 0&&(L=I.clone(),Y[W]=L,C.addEventListener("dispose",E)),I=L}if(I.visible=C.visible,I.wireframe=C.wireframe,w===pr?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const O=s.properties.get(I);O.light=y}return I}function M(b,C,y,w,I){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===pr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const W=t.update(b),Y=b.material;if(Array.isArray(Y)){const L=W.groups;for(let k=0,F=L.length;k<F;k++){const it=L[k],ot=Y[it.materialIndex];if(ot&&ot.visible){const rt=v(b,ot,w,I);b.onBeforeShadow(s,b,C,y,W,rt,it),s.renderBufferDirect(y,null,W,rt,b,it),b.onAfterShadow(s,b,C,y,W,rt,it)}}}else if(Y.visible){const L=v(b,Y,w,I);b.onBeforeShadow(s,b,C,y,W,L,null),s.renderBufferDirect(y,null,W,L,b,null),b.onAfterShadow(s,b,C,y,W,L,null)}}const O=b.children;for(let W=0,Y=O.length;W<Y;W++)M(O[W],C,y,w,I)}function E(b){b.target.removeEventListener("dispose",E);for(const y in c){const w=c[y],I=b.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function fS(s,t){function e(){let U=!1;const ft=new xe;let J=null;const At=new xe(0,0,0,0);return{setMask:function(_t){J!==_t&&!U&&(s.colorMask(_t,_t,_t,_t),J=_t)},setLocked:function(_t){U=_t},setClear:function(_t,at,Bt,Qt,De){De===!0&&(_t*=Qt,at*=Qt,Bt*=Qt),ft.set(_t,at,Bt,Qt),At.equals(ft)===!1&&(s.clearColor(_t,at,Bt,Qt),At.copy(ft))},reset:function(){U=!1,J=null,At.set(-1,0,0,0)}}}function n(){let U=!1,ft=!1,J=null,At=null,_t=null;return{setReversed:function(at){if(ft!==at){const Bt=t.get("EXT_clip_control");at?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),ft=at;const Qt=_t;_t=null,this.setClear(Qt)}},getReversed:function(){return ft},setTest:function(at){at?ht(s.DEPTH_TEST):z(s.DEPTH_TEST)},setMask:function(at){J!==at&&!U&&(s.depthMask(at),J=at)},setFunc:function(at){if(ft&&(at=I_[at]),At!==at){switch(at){case Sl:s.depthFunc(s.NEVER);break;case bl:s.depthFunc(s.ALWAYS);break;case Tl:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case El:s.depthFunc(s.EQUAL);break;case wl:s.depthFunc(s.GEQUAL);break;case Al:s.depthFunc(s.GREATER);break;case Cl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}At=at}},setLocked:function(at){U=at},setClear:function(at){_t!==at&&(_t=at,ft&&(at=1-at),s.clearDepth(at))},reset:function(){U=!1,J=null,At=null,_t=null,ft=!1}}}function i(){let U=!1,ft=null,J=null,At=null,_t=null,at=null,Bt=null,Qt=null,De=null;return{setTest:function(ve){U||(ve?ht(s.STENCIL_TEST):z(s.STENCIL_TEST))},setMask:function(ve){ft!==ve&&!U&&(s.stencilMask(ve),ft=ve)},setFunc:function(ve,di,Zn){(J!==ve||At!==di||_t!==Zn)&&(s.stencilFunc(ve,di,Zn),J=ve,At=di,_t=Zn)},setOp:function(ve,di,Zn){(at!==ve||Bt!==di||Qt!==Zn)&&(s.stencilOp(ve,di,Zn),at=ve,Bt=di,Qt=Zn)},setLocked:function(ve){U=ve},setClear:function(ve){De!==ve&&(s.clearStencil(ve),De=ve)},reset:function(){U=!1,ft=null,J=null,At=null,_t=null,at=null,Bt=null,Qt=null,De=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,_=null,v=null,M=null,E=null,b=null,C=null,y=new vt(0,0,0),w=0,I=!1,P=null,O=null,W=null,Y=null,L=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,it=0;const ot=s.getParameter(s.VERSION);ot.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(ot)[1]),F=it>=1):ot.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),F=it>=2);let rt=null,St={};const Lt=s.getParameter(s.SCISSOR_BOX),Kt=s.getParameter(s.VIEWPORT),le=new xe().fromArray(Lt),Wt=new xe().fromArray(Kt);function Q(U,ft,J,At){const _t=new Uint8Array(4),at=s.createTexture();s.bindTexture(U,at),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<J;Bt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(ft+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return at}const yt={};yt[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(s.DEPTH_TEST),a.setFunc(Cs),mt(!1),lt(xu),ht(s.CULL_FACE),nt(Hn);function ht(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function z(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Ft(U,ft){return u[U]!==ft?(s.bindFramebuffer(U,ft),u[U]=ft,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function Vt(U,ft){let J=p,At=!1;if(U){J=f.get(ft),J===void 0&&(J=[],f.set(ft,J));const _t=U.textures;if(J.length!==_t.length||J[0]!==s.COLOR_ATTACHMENT0){for(let at=0,Bt=_t.length;at<Bt;at++)J[at]=s.COLOR_ATTACHMENT0+at;J.length=_t.length,At=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,At=!0);At&&s.drawBuffers(J)}function Pt(U){return x!==U?(s.useProgram(U),x=U,!0):!1}const Tt={[Hi]:s.FUNC_ADD,[lp]:s.FUNC_SUBTRACT,[cp]:s.FUNC_REVERSE_SUBTRACT};Tt[hp]=s.MIN,Tt[up]=s.MAX;const Z={[dp]:s.ZERO,[fp]:s.ONE,[pp]:s.SRC_COLOR,[yl]:s.SRC_ALPHA,[yp]:s.SRC_ALPHA_SATURATE,[xp]:s.DST_COLOR,[gp]:s.DST_ALPHA,[mp]:s.ONE_MINUS_SRC_COLOR,[Ml]:s.ONE_MINUS_SRC_ALPHA,[vp]:s.ONE_MINUS_DST_COLOR,[_p]:s.ONE_MINUS_DST_ALPHA,[Mp]:s.CONSTANT_COLOR,[Sp]:s.ONE_MINUS_CONSTANT_COLOR,[bp]:s.CONSTANT_ALPHA,[Tp]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(U,ft,J,At,_t,at,Bt,Qt,De,ve){if(U===Hn){g===!0&&(z(s.BLEND),g=!1);return}if(g===!1&&(ht(s.BLEND),g=!0),U!==op){if(U!==m||ve!==I){if((_!==Hi||E!==Hi)&&(s.blendEquation(s.FUNC_ADD),_=Hi,E=Hi),ve)switch(U){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sr:s.blendFunc(s.ONE,s.ONE);break;case vu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",U);break}else switch(U){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case vu:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yu:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",U);break}v=null,M=null,b=null,C=null,y.set(0,0,0),w=0,m=U,I=ve}return}_t=_t||ft,at=at||J,Bt=Bt||At,(ft!==_||_t!==E)&&(s.blendEquationSeparate(Tt[ft],Tt[_t]),_=ft,E=_t),(J!==v||At!==M||at!==b||Bt!==C)&&(s.blendFuncSeparate(Z[J],Z[At],Z[at],Z[Bt]),v=J,M=At,b=at,C=Bt),(Qt.equals(y)===!1||De!==w)&&(s.blendColor(Qt.r,Qt.g,Qt.b,De),y.copy(Qt),w=De),m=U,I=!1}function K(U,ft){U.side===zn?z(s.CULL_FACE):ht(s.CULL_FACE);let J=U.side===Ye;ft&&(J=!J),mt(J),U.blending===bs&&U.transparent===!1?nt(Hn):nt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const At=U.stencilWrite;o.setTest(At),At&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),D(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):z(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(U){P!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),P=U)}function lt(U){U!==sp?(ht(s.CULL_FACE),U!==O&&(U===xu?s.cullFace(s.BACK):U===rp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):z(s.CULL_FACE),O=U}function Ht(U){U!==W&&(F&&s.lineWidth(U),W=U)}function D(U,ft,J){U?(ht(s.POLYGON_OFFSET_FILL),(Y!==ft||L!==J)&&(Y=ft,L=J,a.getReversed()&&(ft=-ft),s.polygonOffset(ft,J))):z(s.POLYGON_OFFSET_FILL)}function $t(U){U?ht(s.SCISSOR_TEST):z(s.SCISSOR_TEST)}function Ot(U){U===void 0&&(U=s.TEXTURE0+k-1),rt!==U&&(s.activeTexture(U),rt=U)}function qt(U,ft,J){J===void 0&&(rt===null?J=s.TEXTURE0+k-1:J=rt);let At=St[J];At===void 0&&(At={type:void 0,texture:void 0},St[J]=At),(At.type!==U||At.texture!==ft)&&(rt!==J&&(s.activeTexture(J),rt=J),s.bindTexture(U,ft||yt[U]),At.type=U,At.texture=ft)}function ct(){const U=St[rt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ge(){try{s.compressedTexImage2D(...arguments)}catch(U){Ut("WebGLState:",U)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(U){Ut("WebGLState:",U)}}function S(){try{s.texSubImage2D(...arguments)}catch(U){Ut("WebGLState:",U)}}function B(){try{s.texSubImage3D(...arguments)}catch(U){Ut("WebGLState:",U)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Ut("WebGLState:",U)}}function st(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Ut("WebGLState:",U)}}function ut(){try{s.texStorage2D(...arguments)}catch(U){Ut("WebGLState:",U)}}function pt(){try{s.texStorage3D(...arguments)}catch(U){Ut("WebGLState:",U)}}function q(){try{s.texImage2D(...arguments)}catch(U){Ut("WebGLState:",U)}}function tt(){try{s.texImage3D(...arguments)}catch(U){Ut("WebGLState:",U)}}function wt(U){return d[U]!==void 0?d[U]:s.getParameter(U)}function It(U,ft){d[U]!==ft&&(s.pixelStorei(U,ft),d[U]=ft)}function gt(U){le.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function dt(U){Wt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Wt.copy(U))}function jt(U,ft){let J=c.get(ft);J===void 0&&(J=new WeakMap,c.set(ft,J));let At=J.get(U);At===void 0&&(At=s.getUniformBlockIndex(ft,U.name),J.set(U,At))}function ne(U,ft){const At=c.get(ft).get(U);l.get(ft)!==At&&(s.uniformBlockBinding(ft,At,U.__bindingPointIndex),l.set(ft,At))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},rt=null,St={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,_=null,v=null,M=null,E=null,b=null,C=null,y=new vt(0,0,0),w=0,I=!1,P=null,O=null,W=null,Y=null,L=null,le.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:z,bindFramebuffer:Ft,drawBuffers:Vt,useProgram:Pt,setBlending:nt,setMaterial:K,setFlipSided:mt,setCullFace:lt,setLineWidth:Ht,setPolygonOffset:D,setScissorTest:$t,activeTexture:Ot,bindTexture:qt,unbindTexture:ct,compressedTexImage2D:ge,compressedTexImage3D:A,texImage2D:q,texImage3D:tt,pixelStorei:It,getParameter:wt,updateUBOMapping:jt,uniformBlockBinding:ne,texStorage2D:ut,texStorage3D:pt,texSubImage2D:S,texSubImage3D:B,compressedTexSubImage2D:$,compressedTexSubImage3D:st,scissor:gt,viewport:dt,reset:de}}function pS(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,S){return p?new OffscreenCanvas(A,S):Oa("canvas")}function g(A,S,B){let $=1;const st=ge(A);if((st.width>B||st.height>B)&&($=B/Math.max(st.width,st.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ut=Math.floor($*st.width),pt=Math.floor($*st.height);u===void 0&&(u=x(ut,pt));const q=S?x(ut,pt):u;return q.width=ut,q.height=pt,q.getContext("2d").drawImage(A,0,0,ut,pt),xt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ut+"x"+pt+")."),q}else return"data"in A&&xt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),A;return A}function m(A){return A.generateMipmaps}function _(A){s.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(A,S,B,$,st,ut=!1){if(A!==null){if(s[A]!==void 0)return s[A];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pt;$&&(pt=t.get("EXT_texture_norm16"),pt||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=S;if(S===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8),B===s.UNSIGNED_SHORT&&pt&&(q=pt.R16_EXT),B===s.SHORT&&pt&&(q=pt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),S===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8),B===s.UNSIGNED_SHORT&&pt&&(q=pt.RG16_EXT),B===s.SHORT&&pt&&(q=pt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),S===s.RGB&&(B===s.UNSIGNED_SHORT&&pt&&(q=pt.RGB16_EXT),B===s.SHORT&&pt&&(q=pt.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),S===s.RGBA){const tt=ut?La:ae.getTransfer(st);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=tt===pe?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&pt&&(q=pt.RGBA16_EXT),B===s.SHORT&&pt&&(q=pt.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function E(A,S){let B;return A?S===null||S===Cn||S===Tr?B=s.DEPTH24_STENCIL8:S===ln?B=s.DEPTH32F_STENCIL8:S===br&&(B=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Cn||S===Tr?B=s.DEPTH_COMPONENT24:S===ln?B=s.DEPTH_COMPONENT32F:S===br&&(B=s.DEPTH_COMPONENT16),B}function b(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ne&&A.minFilter!==we?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),w(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function y(A){const S=A.target;S.removeEventListener("dispose",y),P(S)}function w(A){const S=n.get(A);if(S.__webglInit===void 0)return;const B=A.source,$=f.get(B);if($){const st=$[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&I(A),Object.keys($).length===0&&f.delete(B)}n.remove(A)}function I(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const B=A.source,$=f.get(B);delete $[S.__cacheKey],a.memory.textures--}function P(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let st=0;st<S.__webglFramebuffer[$].length;st++)s.deleteFramebuffer(S.__webglFramebuffer[$][st]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=A.textures;for(let $=0,st=B.length;$<st;$++){const ut=n.get(B[$]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(B[$])}n.remove(A)}let O=0;function W(){O=0}function Y(){return O}function L(A){O=A}function k(){const A=O;return A>=i.maxTextures&&xt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),O+=1,A}function F(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function it(A,S){const B=n.get(A);if(A.isVideoTexture&&qt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const $=A.image;if($===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{z(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function ot(A,S){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){z(B,A,S);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function rt(A,S){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){z(B,A,S);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function St(A,S){const B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Ft(B,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const Lt={[wa]:s.REPEAT,[_n]:s.CLAMP_TO_EDGE,[Aa]:s.MIRRORED_REPEAT},Kt={[Ne]:s.NEAREST,[Ju]:s.NEAREST_MIPMAP_NEAREST,[mr]:s.NEAREST_MIPMAP_LINEAR,[we]:s.LINEAR,[xa]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},le={[Lp]:s.NEVER,[Bp]:s.ALWAYS,[Up]:s.LESS,[Ic]:s.LEQUAL,[Op]:s.EQUAL,[Dc]:s.GEQUAL,[Np]:s.GREATER,[Fp]:s.NOTEQUAL};function Wt(A,S){if(S.type===ln&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===we||S.magFilter===xa||S.magFilter===mr||S.magFilter===ii||S.minFilter===we||S.minFilter===xa||S.minFilter===mr||S.minFilter===ii)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Lt[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Lt[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Lt[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Kt[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Kt[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,le[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ne||S.minFilter!==mr&&S.minFilter!==ii||S.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Q(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const $=S.source;let st=f.get($);st===void 0&&(st={},f.set($,st));const ut=F(S);if(ut!==A.__cacheKey){st[ut]===void 0&&(st[ut]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),st[ut].usedTimes++;const pt=st[A.__cacheKey];pt!==void 0&&(st[A.__cacheKey].usedTimes--,pt.usedTimes===0&&I(S)),A.__cacheKey=ut,A.__webglTexture=st[ut].texture}return B}function yt(A,S,B){return Math.floor(Math.floor(A/B)/S)}function ht(A,S,B,$){const ut=A.updateRanges;if(ut.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,B,$,S.data);else{ut.sort((It,gt)=>It.start-gt.start);let pt=0;for(let It=1;It<ut.length;It++){const gt=ut[pt],dt=ut[It],jt=gt.start+gt.count,ne=yt(dt.start,S.width,4),de=yt(gt.start,S.width,4);dt.start<=jt+1&&ne===de&&yt(dt.start+dt.count-1,S.width,4)===ne?gt.count=Math.max(gt.count,dt.start+dt.count-gt.start):(++pt,ut[pt]=dt)}ut.length=pt+1;const q=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),wt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let It=0,gt=ut.length;It<gt;It++){const dt=ut[It],jt=Math.floor(dt.start/4),ne=Math.ceil(dt.count/4),de=jt%S.width,U=Math.floor(jt/S.width),ft=ne,J=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,de),e.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,de,U,ft,J,B,$,S.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,wt)}}function z(A,S,B){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);const st=Q(A,S),ut=S.source;e.bindTexture($,A.__webglTexture,s.TEXTURE0+B);const pt=n.get(ut);if(ut.version!==pt.__version||st===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const J=ae.getPrimaries(ae.workingColorSpace),At=S.colorSpace===Mi?null:ae.getPrimaries(S.colorSpace),_t=S.colorSpace===Mi||J===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=g(S.image,!1,i.maxTextureSize);tt=ct(S,tt);const wt=r.convert(S.format,S.colorSpace),It=r.convert(S.type);let gt=M(S.internalFormat,wt,It,S.normalized,S.colorSpace,S.isVideoTexture);Wt($,S);let dt;const jt=S.mipmaps,ne=S.isVideoTexture!==!0,de=pt.__version===void 0||st===!0,U=ut.dataReady,ft=b(S,tt);if(S.isDepthTexture)gt=E(S.format===Gi,S.type),de&&(ne?e.texStorage2D(s.TEXTURE_2D,1,gt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,gt,tt.width,tt.height,0,wt,It,null));else if(S.isDataTexture)if(jt.length>0){ne&&de&&e.texStorage2D(s.TEXTURE_2D,ft,gt,jt[0].width,jt[0].height);for(let J=0,At=jt.length;J<At;J++)dt=jt[J],ne?U&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,dt.width,dt.height,wt,It,dt.data):e.texImage2D(s.TEXTURE_2D,J,gt,dt.width,dt.height,0,wt,It,dt.data);S.generateMipmaps=!1}else ne?(de&&e.texStorage2D(s.TEXTURE_2D,ft,gt,tt.width,tt.height),U&&ht(S,tt,wt,It)):e.texImage2D(s.TEXTURE_2D,0,gt,tt.width,tt.height,0,wt,It,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ne&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,gt,jt[0].width,jt[0].height,tt.depth);for(let J=0,At=jt.length;J<At;J++)if(dt=jt[J],S.format!==cn)if(wt!==null)if(ne){if(U)if(S.layerUpdates.size>0){const _t=Du(dt.width,dt.height,S.format,S.type);for(const at of S.layerUpdates){const Bt=dt.data.subarray(at*_t/dt.data.BYTES_PER_ELEMENT,(at+1)*_t/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,at,dt.width,dt.height,1,wt,Bt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,dt.width,dt.height,tt.depth,wt,dt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,gt,dt.width,dt.height,tt.depth,0,dt.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,dt.width,dt.height,tt.depth,wt,It,dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,gt,dt.width,dt.height,tt.depth,0,wt,It,dt.data)}else{ne&&de&&e.texStorage2D(s.TEXTURE_2D,ft,gt,jt[0].width,jt[0].height);for(let J=0,At=jt.length;J<At;J++)dt=jt[J],S.format!==cn?wt!==null?ne?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,dt.width,dt.height,wt,dt.data):e.compressedTexImage2D(s.TEXTURE_2D,J,gt,dt.width,dt.height,0,dt.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?U&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,dt.width,dt.height,wt,It,dt.data):e.texImage2D(s.TEXTURE_2D,J,gt,dt.width,dt.height,0,wt,It,dt.data)}else if(S.isDataArrayTexture)if(ne){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,gt,tt.width,tt.height,tt.depth),U)if(S.layerUpdates.size>0){const J=Du(tt.width,tt.height,S.format,S.type);for(const At of S.layerUpdates){const _t=tt.data.subarray(At*J/tt.data.BYTES_PER_ELEMENT,(At+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,At,tt.width,tt.height,1,wt,It,_t)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,wt,It,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,gt,tt.width,tt.height,tt.depth,0,wt,It,tt.data);else if(S.isData3DTexture)ne?(de&&e.texStorage3D(s.TEXTURE_3D,ft,gt,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,wt,It,tt.data)):e.texImage3D(s.TEXTURE_3D,0,gt,tt.width,tt.height,tt.depth,0,wt,It,tt.data);else if(S.isFramebufferTexture){if(de)if(ne)e.texStorage2D(s.TEXTURE_2D,ft,gt,tt.width,tt.height);else{let J=tt.width,At=tt.height;for(let _t=0;_t<ft;_t++)e.texImage2D(s.TEXTURE_2D,_t,gt,J,At,0,wt,It,null),J>>=1,At>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const J=s.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),tt.parentNode!==J){J.appendChild(tt),d.add(S),J.onpaint=Qt=>{const De=Qt.changedElements;for(const ve of d)De.includes(ve.image)&&(ve.needsUpdate=!0)},J.requestPaint();return}const At=0,_t=s.RGBA,at=s.RGBA,Bt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,At,_t,at,Bt,tt),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(jt.length>0){if(ne&&de){const J=ge(jt[0]);e.texStorage2D(s.TEXTURE_2D,ft,gt,J.width,J.height)}for(let J=0,At=jt.length;J<At;J++)dt=jt[J],ne?U&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,wt,It,dt):e.texImage2D(s.TEXTURE_2D,J,gt,wt,It,dt);S.generateMipmaps=!1}else if(ne){if(de){const J=ge(tt);e.texStorage2D(s.TEXTURE_2D,ft,gt,J.width,J.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,It,tt)}else e.texImage2D(s.TEXTURE_2D,0,gt,wt,It,tt);m(S)&&_($),pt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ft(A,S,B){if(S.image.length!==6)return;const $=Q(A,S),st=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const ut=n.get(st);if(st.version!==ut.__version||$===!0){e.activeTexture(s.TEXTURE0+B);const pt=ae.getPrimaries(ae.workingColorSpace),q=S.colorSpace===Mi?null:ae.getPrimaries(S.colorSpace),tt=S.colorSpace===Mi||pt===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const wt=S.isCompressedTexture||S.image[0].isCompressedTexture,It=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let at=0;at<6;at++)!wt&&!It?gt[at]=g(S.image[at],!0,i.maxCubemapSize):gt[at]=It?S.image[at].image:S.image[at],gt[at]=ct(S,gt[at]);const dt=gt[0],jt=r.convert(S.format,S.colorSpace),ne=r.convert(S.type),de=M(S.internalFormat,jt,ne,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,ft=ut.__version===void 0||$===!0,J=st.dataReady;let At=b(S,dt);Wt(s.TEXTURE_CUBE_MAP,S);let _t;if(wt){U&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,At,de,dt.width,dt.height);for(let at=0;at<6;at++){_t=gt[at].mipmaps;for(let Bt=0;Bt<_t.length;Bt++){const Qt=_t[Bt];S.format!==cn?jt!==null?U?J&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,0,0,Qt.width,Qt.height,jt,Qt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,de,Qt.width,Qt.height,0,Qt.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,0,0,Qt.width,Qt.height,jt,ne,Qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,de,Qt.width,Qt.height,0,jt,ne,Qt.data)}}}else{if(_t=S.mipmaps,U&&ft){_t.length>0&&At++;const at=ge(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,At,de,at.width,at.height)}for(let at=0;at<6;at++)if(It){U?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,gt[at].width,gt[at].height,jt,ne,gt[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,de,gt[at].width,gt[at].height,0,jt,ne,gt[at].data);for(let Bt=0;Bt<_t.length;Bt++){const De=_t[Bt].image[at].image;U?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,0,0,De.width,De.height,jt,ne,De.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,de,De.width,De.height,0,jt,ne,De.data)}}else{U?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,jt,ne,gt[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,de,jt,ne,gt[at]);for(let Bt=0;Bt<_t.length;Bt++){const Qt=_t[Bt];U?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,0,0,jt,ne,Qt.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,de,jt,ne,Qt.image[at])}}}m(S)&&_(s.TEXTURE_CUBE_MAP),ut.__version=st.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Vt(A,S,B,$,st,ut){const pt=r.convert(B.format,B.colorSpace),q=r.convert(B.type),tt=M(B.internalFormat,pt,q,B.normalized,B.colorSpace),wt=n.get(S),It=n.get(B);if(It.__renderTarget=S,!wt.__hasExternalTextures){const gt=Math.max(1,S.width>>ut),dt=Math.max(1,S.height>>ut);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,ut,tt,gt,dt,S.depth,0,pt,q,null):e.texImage2D(st,ut,tt,gt,dt,0,pt,q,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Ot(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,st,It.__webglTexture,0,$t(S)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,st,It.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(A,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,st=$&&$.isDepthTexture?$.type:null,ut=E(S.stencilBuffer,st),pt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ot(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(S),ut,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(S),ut,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ut,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,A)}else{const $=S.textures;for(let st=0;st<$.length;st++){const ut=$[st],pt=r.convert(ut.format,ut.colorSpace),q=r.convert(ut.type),tt=M(ut.internalFormat,pt,q,ut.normalized,ut.colorSpace);Ot(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(S),tt,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(S),tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,tt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(A,S,B){const $=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(S.depthTexture);if(st.__renderTarget=S,(!st.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(st.__webglInit===void 0&&(st.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),st.__webglTexture===void 0){st.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,S.depthTexture);const wt=r.convert(S.depthTexture.format),It=r.convert(S.depthTexture.type);let gt;S.depthTexture.format===li?gt=s.DEPTH_COMPONENT24:S.depthTexture.format===Gi&&(gt=s.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,gt,S.width,S.height,0,wt,It,null)}}else it(S.depthTexture,0);const ut=st.__webglTexture,pt=$t(S),q=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,tt=S.depthTexture.format===Gi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===li)Ot(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,q,ut,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,tt,q,ut,0);else if(S.depthTexture.format===Gi)Ot(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,q,ut,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,tt,q,ut,0);else throw new Error("Unknown depthTexture format")}function Z(A){const S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",st)};$.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let $=0;$<6;$++)Tt(S.__webglFramebuffer[$],A,$);else{const $=A.texture.mipmaps;$&&$.length>0?Tt(S.__webglFramebuffer[0],A,0):Tt(S.__webglFramebuffer,A,0)}else if(B){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=s.createRenderbuffer(),Pt(S.__webglDepthbuffer[$],A,!1);else{const st=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,ut)}}else{const $=A.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Pt(S.__webglDepthbuffer,A,!1);else{const st=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,ut)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(A,S,B){const $=n.get(A);S!==void 0&&Vt($.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Z(A)}function K(A){const S=A.texture,B=n.get(A),$=n.get(S);A.addEventListener("dispose",y);const st=A.textures,ut=A.isWebGLCubeRenderTarget===!0,pt=st.length>1;if(pt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,a.memory.textures++),ut){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let tt=0;tt<S.mipmaps.length;tt++)B.__webglFramebuffer[q][tt]=s.createFramebuffer()}else B.__webglFramebuffer[q]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<S.mipmaps.length;q++)B.__webglFramebuffer[q]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(pt)for(let q=0,tt=st.length;q<tt;q++){const wt=n.get(st[q]);wt.__webglTexture===void 0&&(wt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Ot(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<st.length;q++){const tt=st[q];B.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[q]);const wt=r.convert(tt.format,tt.colorSpace),It=r.convert(tt.type),gt=M(tt.internalFormat,wt,It,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),dt=$t(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,gt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,B.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,S);for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Vt(B.__webglFramebuffer[q][tt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,tt);else Vt(B.__webglFramebuffer[q],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);m(S)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let q=0,tt=st.length;q<tt;q++){const wt=st[q],It=n.get(wt);let gt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,It.__webglTexture),Wt(gt,wt),Vt(B.__webglFramebuffer,A,wt,s.COLOR_ATTACHMENT0+q,gt,0),m(wt)&&_(gt)}e.unbindTexture()}else{let q=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(q,$.__webglTexture),Wt(q,S),S.mipmaps&&S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Vt(B.__webglFramebuffer[tt],A,S,s.COLOR_ATTACHMENT0,q,tt);else Vt(B.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,q,0);m(S)&&_(q),e.unbindTexture()}A.depthBuffer&&Z(A)}function mt(A){const S=A.textures;for(let B=0,$=S.length;B<$;B++){const st=S[B];if(m(st)){const ut=v(A),pt=n.get(st).__webglTexture;e.bindTexture(ut,pt),_(ut),e.unbindTexture()}}}const lt=[],Ht=[];function D(A){if(A.samples>0){if(Ot(A)===!1){const S=A.textures,B=A.width,$=A.height;let st=s.COLOR_BUFFER_BIT;const ut=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=n.get(A),q=S.length>1;if(q)for(let wt=0;wt<S.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);const tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let wt=0;wt<S.length;wt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pt.__webglColorRenderbuffer[wt]);const It=n.get(S[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,It,0)}s.blitFramebuffer(0,0,B,$,0,0,B,$,st,s.NEAREST),l===!0&&(lt.length=0,Ht.length=0,lt.push(s.COLOR_ATTACHMENT0+wt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(lt.push(ut),Ht.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let wt=0;wt<S.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,pt.__webglColorRenderbuffer[wt]);const It=n.get(S[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,It,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function $t(A){return Math.min(i.maxSamples,A.samples)}function Ot(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function qt(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ct(A,S){const B=A.colorSpace,$=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Da&&B!==Mi&&(ae.getTransfer(B)===pe?($!==cn||st!==mn)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",B)),S}function ge(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=L,this.setTexture2D=it,this.setTexture2DArray=ot,this.setTexture3D=rt,this.setTextureCube=St,this.rebindTextures=nt,this.setupRenderTarget=K,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Xm(s,t){function e(n,i=Mi){let r;const a=ae.getTransfer(i);if(n===mn)return s.UNSIGNED_BYTE;if(n===Ec)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===td)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===$u)return s.BYTE;if(n===ju)return s.SHORT;if(n===br)return s.UNSIGNED_SHORT;if(n===Tc)return s.INT;if(n===Cn)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===hn)return s.HALF_FLOAT;if(n===ed)return s.ALPHA;if(n===nd)return s.RGB;if(n===cn)return s.RGBA;if(n===li)return s.DEPTH_COMPONENT;if(n===Gi)return s.DEPTH_STENCIL;if(n===Ac)return s.RED;if(n===Ja)return s.RED_INTEGER;if(n===Ki)return s.RG;if(n===Cc)return s.RG_INTEGER;if(n===Rc)return s.RGBA_INTEGER;if(n===va||n===ya||n===Ma||n===Sa)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Pl||n===Il||n===Dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ll||n===Ul||n===Ol||n===Nl||n===Fl||n===Ca||n===Bl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ll||n===Ul)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ol)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nl)return r.COMPRESSED_R11_EAC;if(n===Fl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ca)return r.COMPRESSED_RG11_EAC;if(n===Bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zl||n===kl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===Yl||n===ql||n===Zl||n===Kl||n===Jl||n===$l||n===jl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$l)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ql||n===tc||n===ec)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ql)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nc||n===ic||n===Ra||n===sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const mS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new pd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ze({vertexShader:mS,fragmentShader:gS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xS extends Yn{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",g=new _S,m={},_=e.getContextAttributes();let v=null,M=null;const E=[],b=[],C=new j;let y=null;const w=new We;w.viewport=new xe;const I=new We;I.viewport=new xe;const P=[w,I],O=new Lm;let W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let yt=E[Q];return yt===void 0&&(yt=new fl,E[Q]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(Q){let yt=E[Q];return yt===void 0&&(yt=new fl,E[Q]=yt),yt.getGripSpace()},this.getHand=function(Q){let yt=E[Q];return yt===void 0&&(yt=new fl,E[Q]=yt),yt.getHandSpace()};function L(Q){const yt=b.indexOf(Q.inputSource);if(yt===-1)return;const ht=E[yt];ht!==void 0&&(ht.update(Q.inputSource,Q.frame,c||a),ht.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",F);for(let Q=0;Q<E.length;Q++){const yt=b[Q];yt!==null&&(b[Q]=null,E[Q].disconnect(yt))}W=null,Y=null,g.reset();for(const Q in m)delete m[Q];t.setRenderTarget(v),f=null,u=null,d=null,i=null,M=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",k),i.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,z=null,Ft=null;_.depth&&(Ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=_.stencil?Gi:li,z=_.stencil?Tr:Cn);const Vt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Xe(u.textureWidth,u.textureHeight,{format:cn,type:mn,depthTexture:new Is(u.textureWidth,u.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ht={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ht),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Xe(f.framebufferWidth,f.framebufferHeight,{format:cn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(Q){for(let yt=0;yt<Q.removed.length;yt++){const ht=Q.removed[yt],z=b.indexOf(ht);z>=0&&(b[z]=null,E[z].disconnect(ht))}for(let yt=0;yt<Q.added.length;yt++){const ht=Q.added[yt];let z=b.indexOf(ht);if(z===-1){for(let Vt=0;Vt<E.length;Vt++)if(Vt>=b.length){b.push(ht),z=Vt;break}else if(b[Vt]===null){b[Vt]=ht,z=Vt;break}if(z===-1)break}const Ft=E[z];Ft&&Ft.connect(ht)}}const it=new R,ot=new R;function rt(Q,yt,ht){it.setFromMatrixPosition(yt.matrixWorld),ot.setFromMatrixPosition(ht.matrixWorld);const z=it.distanceTo(ot),Ft=yt.projectionMatrix.elements,Vt=ht.projectionMatrix.elements,Pt=Ft[14]/(Ft[10]-1),Tt=Ft[14]/(Ft[10]+1),Z=(Ft[9]+1)/Ft[5],nt=(Ft[9]-1)/Ft[5],K=(Ft[8]-1)/Ft[0],mt=(Vt[8]+1)/Vt[0],lt=Pt*K,Ht=Pt*mt,D=z/(-K+mt),$t=D*-K;if(yt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX($t),Q.translateZ(D),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ft[10]===-1)Q.projectionMatrix.copy(yt.projectionMatrix),Q.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const Ot=Pt+D,qt=Tt+D,ct=lt-$t,ge=Ht+(z-$t),A=Z*Tt/qt*Ot,S=nt*Tt/qt*Ot;Q.projectionMatrix.makePerspective(ct,ge,A,S,Ot,qt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function St(Q,yt){yt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(yt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let yt=Q.near,ht=Q.far;g.texture!==null&&(g.depthNear>0&&(yt=g.depthNear),g.depthFar>0&&(ht=g.depthFar)),O.near=I.near=w.near=yt,O.far=I.far=w.far=ht,(W!==O.near||Y!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,Y=O.far),O.layers.mask=Q.layers.mask|6,w.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;const z=Q.parent,Ft=O.cameras;St(O,z);for(let Vt=0;Vt<Ft.length;Vt++)St(Ft[Vt],z);Ft.length===2?rt(O,w,I):O.projectionMatrix.copy(w.projectionMatrix),Lt(Q,O,z)};function Lt(Q,yt,ht){ht===null?Q.matrix.copy(yt.matrixWorld):(Q.matrix.copy(ht.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(yt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(yt.projectionMatrix),Q.projectionMatrixInverse.copy(yt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Er*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(Q){return m[Q]};let Kt=null;function le(Q,yt){if(h=yt.getViewerPose(c||a),p=yt,h!==null){const ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let z=!1;ht.length!==O.cameras.length&&(O.cameras.length=0,z=!0);for(let Tt=0;Tt<ht.length;Tt++){const Z=ht[Tt];let nt=null;if(f!==null)nt=f.getViewport(Z);else{const mt=d.getViewSubImage(u,Z);nt=mt.viewport,Tt===0&&(t.setRenderTargetTextures(M,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(M))}let K=P[Tt];K===void 0&&(K=new We,K.layers.enable(Tt),K.viewport=new xe,P[Tt]=K),K.matrix.fromArray(Z.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Z.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(nt.x,nt.y,nt.width,nt.height),Tt===0&&(O.matrix.copy(K.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),z===!0&&O.cameras.push(K)}const Ft=i.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Tt=d.getDepthInformation(ht[0]);Tt&&Tt.isValid&&Tt.texture&&g.init(Tt,i.renderState)}if(Ft&&Ft.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Tt=0;Tt<ht.length;Tt++){const Z=ht[Tt].camera;if(Z){let nt=m[Z];nt||(nt=new pd,m[Z]=nt);const K=d.getCameraImage(Z);nt.sourceTexture=K}}}}for(let ht=0;ht<E.length;ht++){const z=b[ht],Ft=E[ht];z!==null&&Ft!==void 0&&Ft.update(z,yt,c||a)}Kt&&Kt(Q,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),p=null}const Wt=new zm;Wt.setAnimationLoop(le),this.setAnimationLoop=function(Q){Kt=Q},this.dispose=function(){}}}const vS=new Xt,Ym=new Jt;Ym.set(-1,0,0,0,1,0,0,0,1);function yS(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,hm(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,_,v,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,_,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ye&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ye&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=t.get(m),v=_.envMap,M=_.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(vS.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ym),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ye&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function MS(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const M=v.program;n.uniformBlockBinding(_,M)}function c(_,v){let M=i[_.id];M===void 0&&(p(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",g));const E=v.program;n.updateUBOMapping(_,E);const b=t.render.frame;r[_.id]!==b&&(u(_),r[_.id]=b)}function h(_){const v=d();_.__bindingPointIndex=v;const M=s.createBuffer(),E=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,E,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const v=i[_.id],M=_.uniforms,E=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,C=M.length;b<C;b++){const y=Array.isArray(M[b])?M[b]:[M[b]];for(let w=0,I=y.length;w<I;w++){const P=y[w];if(f(P,b,w,E)===!0){const O=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let L=0;L<W.length;L++){const k=W[L],F=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,O+Y,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):ArrayBuffer.isView(k)?P.__data.set(new k.constructor(k.buffer,k.byteOffset,P.__data.length)):(k.toArray(P.__data,Y),Y+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,v,M,E){const b=_.value,C=v+"_"+M;if(E[C]===void 0)return typeof b=="number"||typeof b=="boolean"?E[C]=b:ArrayBuffer.isView(b)?E[C]=b.slice():E[C]=b.clone(),!0;{const y=E[C];if(typeof b=="number"||typeof b=="boolean"){if(y!==b)return E[C]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(y.equals(b)===!1)return y.copy(b),!0}}return!1}function p(_){const v=_.uniforms;let M=0;const E=16;for(let C=0,y=v.length;C<y;C++){const w=Array.isArray(v[C])?v[C]:[v[C]];for(let I=0,P=w.length;I<P;I++){const O=w[I],W=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,L=W.length;Y<L;Y++){const k=W[Y],F=x(k),it=M%E,ot=it%F.boundary,rt=it+ot;M+=ot,rt!==0&&E-rt<F.storage&&(M+=E-rt),O.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=F.storage}}}const b=M%E;return b>0&&(M+=E-b),_.__size=M,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}const SS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function bS(){return Qn===null&&(Qn=new Wn(SS,16,16,Ki,hn),Qn.name="DFG_LUT",Qn.minFilter=we,Qn.magFilter=we,Qn.wrapS=_n,Qn.wrapT=_n,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class qm{constructor(t={}){const{canvas:e=kp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=mn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=f,g=new Set([Rc,Cc,Ja]),m=new Set([mn,Cn,br,Tr,Ec,wc]),_=new Uint32Array(4),v=new Int32Array(4),M=new R;let E=null,b=null;const C=[],y=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let P=!1,O=null;this._outputColorSpace=Be;let W=0,Y=0,L=null,k=-1,F=null;const it=new xe,ot=new xe;let rt=null;const St=new vt(0);let Lt=0,Kt=e.width,le=e.height,Wt=1,Q=null,yt=null;const ht=new xe(0,0,Kt,le),z=new xe(0,0,Kt,le);let Ft=!1;const Vt=new Ur;let Pt=!1,Tt=!1;const Z=new Xt,nt=new R,K=new xe,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Ht(){return L===null?Wt:1}let D=n;function $t(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Qt,!1),D===null){const N="webgl2";if(D=$t(N,T),D===null)throw $t(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ut("WebGLRenderer: "+T.message),T}let Ot,qt,ct,ge,A,S,B,$,st,ut,pt,q,tt,wt,It,gt,dt,jt,ne,de,U,ft,J;function At(){Ot=new T3(D),Ot.init(),U=new Xm(D,Ot),qt=new g3(D,Ot,t,U),ct=new fS(D,Ot),qt.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),ge=new A3(D),A=new QM,S=new pS(D,Ot,ct,A,qt,U,ge),B=new b3(I),$=new Iv(D),ft=new p3(D,$),st=new E3(D,$,ge,ft),ut=new R3(D,st,$,ft,ge),jt=new C3(D,qt,S),It=new _3(A),pt=new jM(I,B,Ot,qt,ft,It),q=new yS(I,A),tt=new eS,wt=new oS(Ot),dt=new f3(I,B,ct,ut,p,l),gt=new dS(I,ut,qt),J=new MS(D,ge,qt,ct),ne=new m3(D,Ot,ge),de=new w3(D,Ot,ge),ge.programs=pt.programs,I.capabilities=qt,I.extensions=Ot,I.properties=A,I.renderLists=tt,I.shadowMap=gt,I.state=ct,I.info=ge}At(),x!==mn&&(w=new I3(x,e.width,e.height,i,r));const _t=new xS(I,D);this.xr=_t,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Wt},this.setPixelRatio=function(T){T!==void 0&&(Wt=T,this.setSize(Kt,le,!1))},this.getSize=function(T){return T.set(Kt,le)},this.setSize=function(T,N,X=!0){if(_t.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=T,le=N,e.width=Math.floor(T*Wt),e.height=Math.floor(N*Wt),X===!0&&(e.style.width=T+"px",e.style.height=N+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(Kt*Wt,le*Wt).floor()},this.setDrawingBufferSize=function(T,N,X){Kt=T,le=N,Wt=X,e.width=Math.floor(T*X),e.height=Math.floor(N*X),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(x===mn){Ut("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){xt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(it)},this.getViewport=function(T){return T.copy(ht)},this.setViewport=function(T,N,X,V){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,N,X,V),ct.viewport(it.copy(ht).multiplyScalar(Wt).round())},this.getScissor=function(T){return T.copy(z)},this.setScissor=function(T,N,X,V){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,N,X,V),ct.scissor(ot.copy(z).multiplyScalar(Wt).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(T){ct.setScissorTest(Ft=T)},this.setOpaqueSort=function(T){Q=T},this.setTransparentSort=function(T){yt=T},this.getClearColor=function(T){return T.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,X=!0){let V=0;if(T){let H=!1;if(L!==null){const Et=L.texture.format;H=g.has(Et)}if(H){const Et=L.texture.type,Dt=m.has(Et),bt=dt.getClearColor(),Nt=dt.getClearAlpha(),zt=bt.r,te=bt.g,re=bt.b;Dt?(_[0]=zt,_[1]=te,_[2]=re,_[3]=Nt,D.clearBufferuiv(D.COLOR,0,_)):(v[0]=zt,v[1]=te,v[2]=re,v[3]=Nt,D.clearBufferiv(D.COLOR,0,v))}else V|=D.COLOR_BUFFER_BIT}N&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),dt.dispose(),tt.dispose(),wt.dispose(),A.dispose(),B.dispose(),ut.dispose(),ft.dispose(),J.dispose(),pt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Zd),_t.removeEventListener("sessionend",Kd),es.stop()};function at(T){T.preventDefault(),Na("WebGLRenderer: Context Lost."),P=!0}function Bt(){Na("WebGLRenderer: Context Restored."),P=!1;const T=ge.autoReset,N=gt.enabled,X=gt.autoUpdate,V=gt.needsUpdate,H=gt.type;At(),ge.autoReset=T,gt.enabled=N,gt.autoUpdate=X,gt.needsUpdate=V,gt.type=H}function Qt(T){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function De(T){const N=T.target;N.removeEventListener("dispose",De),ve(N)}function ve(T){di(T),A.remove(T)}function di(T){const N=A.get(T).programs;N!==void 0&&(N.forEach(function(X){pt.releaseProgram(X)}),T.isShaderMaterial&&pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,X,V,H,Et){N===null&&(N=mt);const Dt=H.isMesh&&H.matrixWorld.determinant()<0,bt=wg(T,N,X,V,H);ct.setMaterial(V,Dt);let Nt=X.index,zt=1;if(V.wireframe===!0){if(Nt=st.getWireframeAttribute(X),Nt===void 0)return;zt=2}const te=X.drawRange,re=X.attributes.position;let kt=te.start*zt,ye=(te.start+te.count)*zt;Et!==null&&(kt=Math.max(kt,Et.start*zt),ye=Math.min(ye,(Et.start+Et.count)*zt)),Nt!==null?(kt=Math.max(kt,0),ye=Math.min(ye,Nt.count)):re!=null&&(kt=Math.max(kt,0),ye=Math.min(ye,re.count));const Le=ye-kt;if(Le<0||Le===1/0)return;ft.setup(H,V,bt,X,Nt);let Pe,Me=ne;if(Nt!==null&&(Pe=$.get(Nt),Me=de,Me.setIndex(Pe)),H.isMesh)V.wireframe===!0?(ct.setLineWidth(V.wireframeLinewidth*Ht()),Me.setMode(D.LINES)):Me.setMode(D.TRIANGLES);else if(H.isLine){let Ze=V.linewidth;Ze===void 0&&(Ze=1),ct.setLineWidth(Ze*Ht()),H.isLineSegments?Me.setMode(D.LINES):H.isLineLoop?Me.setMode(D.LINE_LOOP):Me.setMode(D.LINE_STRIP)}else H.isPoints?Me.setMode(D.POINTS):H.isSprite&&Me.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(Ot.get("WEBGL_multi_draw"))Me.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ze=H._multiDrawStarts,Rt=H._multiDrawCounts,yn=H._multiDrawCount,ce=Nt?$.get(Nt).bytesPerElement:1,wn=A.get(V).currentProgram.getUniforms();for(let Kn=0;Kn<yn;Kn++)wn.setValue(D,"_gl_DrawID",Kn),Me.render(Ze[Kn]/ce,Rt[Kn])}else if(H.isInstancedMesh)Me.renderInstances(kt,Le,H.count);else if(X.isInstancedBufferGeometry){const Ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Rt=Math.min(X.instanceCount,Ze);Me.renderInstances(kt,Le,Rt)}else Me.render(kt,Le)};function Zn(T,N,X){T.transparent===!0&&T.side===zn&&T.forceSinglePass===!1?(T.side=Ye,T.needsUpdate=!0,oo(T,N,X),T.side=Ei,T.needsUpdate=!0,oo(T,N,X),T.side=zn):oo(T,N,X)}this.compile=function(T,N,X=null){X===null&&(X=T),b=wt.get(X),b.init(N),y.push(b),X.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),T!==X&&T.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();const V=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Et=H.material;if(Et)if(Array.isArray(Et))for(let Dt=0;Dt<Et.length;Dt++){const bt=Et[Dt];Zn(bt,X,H),V.add(bt)}else Zn(Et,X,H),V.add(Et)}),b=y.pop(),V},this.compileAsync=function(T,N,X=null){const V=this.compile(T,N,X);return new Promise(H=>{function Et(){if(V.forEach(function(Dt){A.get(Dt).currentProgram.isReady()&&V.delete(Dt)}),V.size===0){H(T);return}setTimeout(Et,10)}Ot.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ch=null;function Tg(T){ch&&ch(T)}function Zd(){es.stop()}function Kd(){es.start()}const es=new zm;es.setAnimationLoop(Tg),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(T){ch=T,_t.setAnimationLoop(T),T===null?es.stop():es.start()},_t.addEventListener("sessionstart",Zd),_t.addEventListener("sessionend",Kd),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(T,N);const X=_t.enabled===!0&&_t.isPresenting===!0,V=w!==null&&(L===null||X)&&w.begin(I,L);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(N),N=_t.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,N,L),b=wt.get(T,y.length),b.init(N),b.state.textureUnits=S.getTextureUnits(),y.push(b),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Vt.setFromProjectionMatrix(Z,Tn,N.reversedDepth),Tt=this.localClippingEnabled,Pt=It.init(this.clippingPlanes,Tt),E=tt.get(T,C.length),E.init(),C.push(E),_t.enabled===!0&&_t.isPresenting===!0){const Dt=I.xr.getDepthSensingMesh();Dt!==null&&hh(Dt,N,-1/0,I.sortObjects)}hh(T,N,0,I.sortObjects),E.finish(),I.sortObjects===!0&&E.sort(Q,yt),lt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,lt&&dt.addToRenderList(E,T),this.info.render.frame++,Pt===!0&&It.beginShadows();const H=b.state.shadowsArray;if(gt.render(H,T,N),Pt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&w.hasRenderPass())===!1){const Dt=E.opaque,bt=E.transmissive;if(b.setupLights(),N.isArrayCamera){const Nt=N.cameras;if(bt.length>0)for(let zt=0,te=Nt.length;zt<te;zt++){const re=Nt[zt];$d(Dt,bt,T,re)}lt&&dt.render(T);for(let zt=0,te=Nt.length;zt<te;zt++){const re=Nt[zt];Jd(E,T,re,re.viewport)}}else bt.length>0&&$d(Dt,bt,T,N),lt&&dt.render(T),Jd(E,T,N)}L!==null&&Y===0&&(S.updateMultisampleRenderTarget(L),S.updateRenderTargetMipmap(L)),V&&w.end(I),T.isScene===!0&&T.onAfterRender(I,T,N),ft.resetDefaultState(),k=-1,F=null,y.pop(),y.length>0?(b=y[y.length-1],S.setTextureUnits(b.state.textureUnits),Pt===!0&&It.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,O!==null&&O.renderEnd()};function hh(T,N,X,V){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Vt.intersectsSprite(T)){V&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z);const Dt=ut.update(T),bt=T.material;bt.visible&&E.push(T,Dt,bt,X,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Vt.intersectsObject(T))){const Dt=ut.update(T),bt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),K.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),K.copy(Dt.boundingSphere.center)),K.applyMatrix4(T.matrixWorld).applyMatrix4(Z)),Array.isArray(bt)){const Nt=Dt.groups;for(let zt=0,te=Nt.length;zt<te;zt++){const re=Nt[zt],kt=bt[re.materialIndex];kt&&kt.visible&&E.push(T,Dt,kt,X,K.z,re)}}else bt.visible&&E.push(T,Dt,bt,X,K.z,null)}}const Et=T.children;for(let Dt=0,bt=Et.length;Dt<bt;Dt++)hh(Et[Dt],N,X,V)}function Jd(T,N,X,V){const{opaque:H,transmissive:Et,transparent:Dt}=T;b.setupLightsView(X),Pt===!0&&It.setGlobalState(I.clippingPlanes,X),V&&ct.viewport(it.copy(V)),H.length>0&&ao(H,N,X),Et.length>0&&ao(Et,N,X),Dt.length>0&&ao(Dt,N,X),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function $d(T,N,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){const kt=Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Xe(1,1,{generateMipmaps:!0,type:kt?hn:mn,minFilter:ii,samples:Math.max(4,qt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const Et=b.state.transmissionRenderTarget[V.id],Dt=V.viewport||it;Et.setSize(Dt.z*I.transmissionResolutionScale,Dt.w*I.transmissionResolutionScale);const bt=I.getRenderTarget(),Nt=I.getActiveCubeFace(),zt=I.getActiveMipmapLevel();I.setRenderTarget(Et),I.getClearColor(St),Lt=I.getClearAlpha(),Lt<1&&I.setClearColor(16777215,.5),I.clear(),lt&&dt.render(X);const te=I.toneMapping;I.toneMapping=Gn;const re=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),Pt===!0&&It.setGlobalState(I.clippingPlanes,V),ao(T,X,V),S.updateMultisampleRenderTarget(Et),S.updateRenderTargetMipmap(Et),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ye=0,Le=N.length;ye<Le;ye++){const Pe=N[ye],{object:Me,geometry:Ze,material:Rt,group:yn}=Pe;if(Rt.side===zn&&Me.layers.test(V.layers)){const ce=Rt.side;Rt.side=Ye,Rt.needsUpdate=!0,jd(Me,X,V,Ze,Rt,yn),Rt.side=ce,Rt.needsUpdate=!0,kt=!0}}kt===!0&&(S.updateMultisampleRenderTarget(Et),S.updateRenderTargetMipmap(Et))}I.setRenderTarget(bt,Nt,zt),I.setClearColor(St,Lt),re!==void 0&&(V.viewport=re),I.toneMapping=te}function ao(T,N,X){const V=N.isScene===!0?N.overrideMaterial:null;for(let H=0,Et=T.length;H<Et;H++){const Dt=T[H],{object:bt,geometry:Nt,group:zt}=Dt;let te=Dt.material;te.allowOverride===!0&&V!==null&&(te=V),bt.layers.test(X.layers)&&jd(bt,N,X,Nt,te,zt)}}function jd(T,N,X,V,H,Et){T.onBeforeRender(I,N,X,V,H,Et),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(I,N,X,V,T,Et),H.transparent===!0&&H.side===zn&&H.forceSinglePass===!1?(H.side=Ye,H.needsUpdate=!0,I.renderBufferDirect(X,N,V,H,T,Et),H.side=Ei,H.needsUpdate=!0,I.renderBufferDirect(X,N,V,H,T,Et),H.side=zn):I.renderBufferDirect(X,N,V,H,T,Et),T.onAfterRender(I,N,X,V,H,Et)}function oo(T,N,X){N.isScene!==!0&&(N=mt);const V=A.get(T),H=b.state.lights,Et=b.state.shadowsArray,Dt=H.state.version,bt=pt.getParameters(T,H.state,Et,N,X,b.state.lightProbeGridArray),Nt=pt.getProgramCacheKey(bt);let zt=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const te=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=B.get(T.envMap||V.environment,te),V.envMapRotation=V.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",De),zt=new Map,V.programs=zt);let re=zt.get(Nt);if(re!==void 0){if(V.currentProgram===re&&V.lightsStateVersion===Dt)return t0(T,bt),re}else bt.uniforms=pt.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,X,bt),T.onBeforeCompile(bt,I),re=pt.acquireProgram(bt,Nt),zt.set(Nt,re),V.uniforms=bt.uniforms;const kt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=It.uniform),t0(T,bt),V.needsLights=Cg(T),V.lightsStateVersion=Dt,V.needsLights&&(kt.ambientLightColor.value=H.state.ambient,kt.lightProbe.value=H.state.probe,kt.directionalLights.value=H.state.directional,kt.directionalLightShadows.value=H.state.directionalShadow,kt.spotLights.value=H.state.spot,kt.spotLightShadows.value=H.state.spotShadow,kt.rectAreaLights.value=H.state.rectArea,kt.ltc_1.value=H.state.rectAreaLTC1,kt.ltc_2.value=H.state.rectAreaLTC2,kt.pointLights.value=H.state.point,kt.pointLightShadows.value=H.state.pointShadow,kt.hemisphereLights.value=H.state.hemi,kt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,kt.spotLightMatrix.value=H.state.spotLightMatrix,kt.spotLightMap.value=H.state.spotLightMap,kt.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=re,V.uniformsList=null,re}function Qd(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=pl.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function t0(T,N){const X=A.get(T);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Eg(T,N){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let X=0,V=T.length;X<V;X++){const H=T[X];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function wg(T,N,X,V,H){N.isScene!==!0&&(N=mt),S.resetTextureUnits();const Et=N.fog,Dt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,bt=L===null?I.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ae.workingColorSpace,Nt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,zt=B.get(V.envMap||Dt,Nt),te=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,re=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),kt=!!X.morphAttributes.position,ye=!!X.morphAttributes.normal,Le=!!X.morphAttributes.color;let Pe=Gn;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Pe=I.toneMapping);const Me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ze=Me!==void 0?Me.length:0,Rt=A.get(V),yn=b.state.lights;if(Pt===!0&&(Tt===!0||T!==F)){const Te=T===F&&V.id===k;It.setState(V,T,Te)}let ce=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==yn.state.version||Rt.outputColorSpace!==bt||H.isBatchedMesh&&Rt.batching===!1||!H.isBatchedMesh&&Rt.batching===!0||H.isBatchedMesh&&Rt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Rt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Rt.instancing===!1||!H.isInstancedMesh&&Rt.instancing===!0||H.isSkinnedMesh&&Rt.skinning===!1||!H.isSkinnedMesh&&Rt.skinning===!0||H.isInstancedMesh&&Rt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Rt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Rt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Rt.instancingMorph===!1&&H.morphTexture!==null||Rt.envMap!==zt||V.fog===!0&&Rt.fog!==Et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==It.numPlanes||Rt.numIntersection!==It.numIntersection)||Rt.vertexAlphas!==te||Rt.vertexTangents!==re||Rt.morphTargets!==kt||Rt.morphNormals!==ye||Rt.morphColors!==Le||Rt.toneMapping!==Pe||Rt.morphTargetsCount!==Ze||!!Rt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Rt.__version=V.version);let wn=Rt.currentProgram;ce===!0&&(wn=oo(V,N,H),O&&V.isNodeMaterial&&O.onUpdateProgram(V,wn,Rt));let Kn=!1,Ci=!1,ks=!1;const Se=wn.getUniforms(),Ue=Rt.uniforms;if(ct.useProgram(wn.program)&&(Kn=!0,Ci=!0,ks=!0),V.id!==k&&(k=V.id,Ci=!0),Rt.needsLights){const Te=Eg(b.state.lightProbeGridArray,H);Rt.lightProbeGrid!==Te&&(Rt.lightProbeGrid=Te,Ci=!0)}if(Kn||F!==T){ct.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Se.setValue(D,"projectionMatrix",T.projectionMatrix),Se.setValue(D,"viewMatrix",T.matrixWorldInverse);const Pi=Se.map.cameraPosition;Pi!==void 0&&Pi.setValue(D,nt.setFromMatrixPosition(T.matrixWorld)),qt.logarithmicDepthBuffer&&Se.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Se.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),F!==T&&(F=T,Ci=!0,ks=!0)}if(Rt.needsLights&&(yn.state.directionalShadowMap.length>0&&Se.setValue(D,"directionalShadowMap",yn.state.directionalShadowMap,S),yn.state.spotShadowMap.length>0&&Se.setValue(D,"spotShadowMap",yn.state.spotShadowMap,S),yn.state.pointShadowMap.length>0&&Se.setValue(D,"pointShadowMap",yn.state.pointShadowMap,S)),H.isSkinnedMesh){Se.setOptional(D,H,"bindMatrix"),Se.setOptional(D,H,"bindMatrixInverse");const Te=H.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),Se.setValue(D,"boneTexture",Te.boneTexture,S))}H.isBatchedMesh&&(Se.setOptional(D,H,"batchingTexture"),Se.setValue(D,"batchingTexture",H._matricesTexture,S),Se.setOptional(D,H,"batchingIdTexture"),Se.setValue(D,"batchingIdTexture",H._indirectTexture,S),Se.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Se.setValue(D,"batchingColorTexture",H._colorsTexture,S));const Ri=X.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&jt.update(H,X,wn),(Ci||Rt.receiveShadow!==H.receiveShadow)&&(Rt.receiveShadow=H.receiveShadow,Se.setValue(D,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(Ue.envMapIntensity.value=N.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=bS()),Ci){if(Se.setValue(D,"toneMappingExposure",I.toneMappingExposure),Rt.needsLights&&Ag(Ue,ks),Et&&V.fog===!0&&q.refreshFogUniforms(Ue,Et),q.refreshMaterialUniforms(Ue,V,Wt,le,b.state.transmissionRenderTarget[T.id]),Rt.needsLights&&Rt.lightProbeGrid){const Te=Rt.lightProbeGrid;Ue.probesSH.value=Te.texture,Ue.probesMin.value.copy(Te.boundingBox.min),Ue.probesMax.value.copy(Te.boundingBox.max),Ue.probesResolution.value.copy(Te.resolution)}pl.upload(D,Qd(Rt),Ue,S)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pl.upload(D,Qd(Rt),Ue,S),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Se.setValue(D,"center",H.center),Se.setValue(D,"modelViewMatrix",H.modelViewMatrix),Se.setValue(D,"normalMatrix",H.normalMatrix),Se.setValue(D,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const Te=V.uniformsGroups;for(let Pi=0,Vs=Te.length;Pi<Vs;Pi++){const e0=Te[Pi];J.update(e0,wn),J.bind(e0,wn)}}return wn}function Ag(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Cg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,N,X){const V=A.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),A.get(T.texture).__webglTexture=N,A.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){const X=A.get(T);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const Rg=D.createFramebuffer();this.setRenderTarget=function(T,N=0,X=0){L=T,W=N,Y=X;let V=null,H=!1,Et=!1;if(T){const bt=A.get(T);if(bt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(D.FRAMEBUFFER,bt.__webglFramebuffer),it.copy(T.viewport),ot.copy(T.scissor),rt=T.scissorTest,ct.viewport(it),ct.scissor(ot),ct.setScissorTest(rt),k=-1;return}else if(bt.__webglFramebuffer===void 0)S.setupRenderTarget(T);else if(bt.__hasExternalTextures)S.rebindTextures(T,A.get(T.texture).__webglTexture,A.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const te=T.depthTexture;if(bt.__boundDepthTexture!==te){if(te!==null&&A.has(te)&&(T.width!==te.image.width||T.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(T)}}const Nt=T.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Et=!0);const zt=A.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(zt[N])?V=zt[N][X]:V=zt[N],H=!0):T.samples>0&&S.useMultisampledRTT(T)===!1?V=A.get(T).__webglMultisampledFramebuffer:Array.isArray(zt)?V=zt[X]:V=zt,it.copy(T.viewport),ot.copy(T.scissor),rt=T.scissorTest}else it.copy(ht).multiplyScalar(Wt).floor(),ot.copy(z).multiplyScalar(Wt).floor(),rt=Ft;if(X!==0&&(V=Rg),ct.bindFramebuffer(D.FRAMEBUFFER,V)&&ct.drawBuffers(T,V),ct.viewport(it),ct.scissor(ot),ct.setScissorTest(rt),H){const bt=A.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,bt.__webglTexture,X)}else if(Et){const bt=N;for(let Nt=0;Nt<T.textures.length;Nt++){const zt=A.get(T.textures[Nt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Nt,zt.__webglTexture,X,bt)}}else if(T!==null&&X!==0){const bt=A.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bt.__webglTexture,X)}k=-1},this.readRenderTargetPixels=function(T,N,X,V,H,Et,Dt,bt=0){if(!(T&&T.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=A.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){ct.bindFramebuffer(D.FRAMEBUFFER,Nt);try{const zt=T.textures[bt],te=zt.format,re=zt.type;if(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt),!qt.textureFormatReadable(te)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(re)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-V&&X>=0&&X<=T.height-H&&D.readPixels(N,X,V,H,U.convert(te),U.convert(re),Et)}finally{const zt=L!==null?A.get(L).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(T,N,X,V,H,Et,Dt,bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=A.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt)if(N>=0&&N<=T.width-V&&X>=0&&X<=T.height-H){ct.bindFramebuffer(D.FRAMEBUFFER,Nt);const zt=T.textures[bt],te=zt.format,re=zt.type;if(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt),!qt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,kt),D.bufferData(D.PIXEL_PACK_BUFFER,Et.byteLength,D.STREAM_READ),D.readPixels(N,X,V,H,U.convert(te),U.convert(re),0);const ye=L!==null?A.get(L).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,ye);const Le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await P_(D,Le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,kt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Et),D.deleteBuffer(kt),D.deleteSync(Le),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,X=0){const V=Math.pow(2,-X),H=Math.floor(T.image.width*V),Et=Math.floor(T.image.height*V),Dt=N!==null?N.x:0,bt=N!==null?N.y:0;S.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,Dt,bt,H,Et),ct.unbindTexture()};const Pg=D.createFramebuffer(),Ig=D.createFramebuffer();this.copyTextureToTexture=function(T,N,X=null,V=null,H=0,Et=0){let Dt,bt,Nt,zt,te,re,kt,ye,Le;const Pe=T.isCompressedTexture?T.mipmaps[Et]:T.image;if(X!==null)Dt=X.max.x-X.min.x,bt=X.max.y-X.min.y,Nt=X.isBox3?X.max.z-X.min.z:1,zt=X.min.x,te=X.min.y,re=X.isBox3?X.min.z:0;else{const Ue=Math.pow(2,-H);Dt=Math.floor(Pe.width*Ue),bt=Math.floor(Pe.height*Ue),T.isDataArrayTexture?Nt=Pe.depth:T.isData3DTexture?Nt=Math.floor(Pe.depth*Ue):Nt=1,zt=0,te=0,re=0}V!==null?(kt=V.x,ye=V.y,Le=V.z):(kt=0,ye=0,Le=0);const Me=U.convert(N.format),Ze=U.convert(N.type);let Rt;N.isData3DTexture?(S.setTexture3D(N,0),Rt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(S.setTexture2DArray(N,0),Rt=D.TEXTURE_2D_ARRAY):(S.setTexture2D(N,0),Rt=D.TEXTURE_2D),ct.activeTexture(D.TEXTURE0),ct.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),ct.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ct.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const yn=ct.getParameter(D.UNPACK_ROW_LENGTH),ce=ct.getParameter(D.UNPACK_IMAGE_HEIGHT),wn=ct.getParameter(D.UNPACK_SKIP_PIXELS),Kn=ct.getParameter(D.UNPACK_SKIP_ROWS),Ci=ct.getParameter(D.UNPACK_SKIP_IMAGES);ct.pixelStorei(D.UNPACK_ROW_LENGTH,Pe.width),ct.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pe.height),ct.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),ct.pixelStorei(D.UNPACK_SKIP_ROWS,te),ct.pixelStorei(D.UNPACK_SKIP_IMAGES,re);const ks=T.isDataArrayTexture||T.isData3DTexture,Se=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){const Ue=A.get(T),Ri=A.get(N),Te=A.get(Ue.__renderTarget),Pi=A.get(Ri.__renderTarget);ct.bindFramebuffer(D.READ_FRAMEBUFFER,Te.__webglFramebuffer),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Vs=0;Vs<Nt;Vs++)ks&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A.get(T).__webglTexture,H,re+Vs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,A.get(N).__webglTexture,Et,Le+Vs)),D.blitFramebuffer(zt,te,Dt,bt,kt,ye,Dt,bt,D.DEPTH_BUFFER_BIT,D.NEAREST);ct.bindFramebuffer(D.READ_FRAMEBUFFER,null),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||A.has(T)){const Ue=A.get(T),Ri=A.get(N);ct.bindFramebuffer(D.READ_FRAMEBUFFER,Pg),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ig);for(let Te=0;Te<Nt;Te++)ks?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ue.__webglTexture,H,re+Te):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ue.__webglTexture,H),Se?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ri.__webglTexture,Et,Le+Te):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ri.__webglTexture,Et),H!==0?D.blitFramebuffer(zt,te,Dt,bt,kt,ye,Dt,bt,D.COLOR_BUFFER_BIT,D.NEAREST):Se?D.copyTexSubImage3D(Rt,Et,kt,ye,Le+Te,zt,te,Dt,bt):D.copyTexSubImage2D(Rt,Et,kt,ye,zt,te,Dt,bt);ct.bindFramebuffer(D.READ_FRAMEBUFFER,null),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Se?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Rt,Et,kt,ye,Le,Dt,bt,Nt,Me,Ze,Pe.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,Et,kt,ye,Le,Dt,bt,Nt,Me,Pe.data):D.texSubImage3D(Rt,Et,kt,ye,Le,Dt,bt,Nt,Me,Ze,Pe):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Et,kt,ye,Dt,bt,Me,Ze,Pe.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Et,kt,ye,Pe.width,Pe.height,Me,Pe.data):D.texSubImage2D(D.TEXTURE_2D,Et,kt,ye,Dt,bt,Me,Ze,Pe);ct.pixelStorei(D.UNPACK_ROW_LENGTH,yn),ct.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce),ct.pixelStorei(D.UNPACK_SKIP_PIXELS,wn),ct.pixelStorei(D.UNPACK_SKIP_ROWS,Kn),ct.pixelStorei(D.UNPACK_SKIP_IMAGES,Ci),Et===0&&N.generateMipmaps&&D.generateMipmap(Rt),ct.unbindTexture()},this.initRenderTarget=function(T){A.get(T).__webglFramebuffer===void 0&&S.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),ct.unbindTexture()},this.resetState=function(){W=0,Y=0,L=null,ct.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const TS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ka,AddEquation:Hi,AddOperation:wp,AdditiveAnimationBlendMode:id,AdditiveBlending:Sr,AgXToneMapping:Mc,AlphaFormat:ed,AlwaysCompare:Bp,AlwaysDepth:bl,AlwaysStencilFunc:bu,AmbientLight:Rd,AnimationAction:Nm,AnimationClip:Ha,AnimationLoader:Sx,AnimationMixer:$x,AnimationObjectGroup:Kx,AnimationUtils:xx,ArcCurve:Qp,ArrayCamera:Lm,ArrowHelper:Sv,AttachedBindMode:Mu,Audio:Um,AudioAnalyser:zx,AudioContext:Id,AudioListener:Nx,AudioLoader:Dx,AxesHelper:bv,BackSide:Ye,BasicDepthPacking:Ip,BasicShadowMap:Fg,BatchedMesh:Zp,BezierInterpolant:Mm,Bone:hd,BooleanKeyframeTrack:Bs,Box2:av,Box3:en,Box3Helper:yv,BoxGeometry:Fs,BoxHelper:vv,BufferAttribute:me,BufferGeometry:Zt,BufferGeometryLoader:Im,ByteType:$u,Cache:si,Camera:th,CameraHelper:xv,CanvasTexture:F1,CapsuleGeometry:Hc,CatmullRomCurve3:tm,CineonToneMapping:vc,CircleGeometry:Gc,ClampToEdgeWrapping:_n,Clock:iv,Color:vt,ColorKeyframeTrack:Ed,ColorManagement:ae,Compatibility:E_,CompressedArrayTexture:O1,CompressedCubeTexture:N1,CompressedTexture:Vc,CompressedTextureLoader:bx,ConeGeometry:Qa,ConstantAlphaFactor:bp,ConstantColorFactor:Mp,Controls:Ev,CubeCamera:Dm,CubeDepthTexture:$p,CubeReflectionMapping:oi,CubeRefractionMapping:Zi,CubeTexture:$a,CubeTextureLoader:Tx,CubeUVReflectionMapping:Dr,CubicBezierCurve:gd,CubicBezierCurve3:em,CubicInterpolant:vm,CullFaceBack:xu,CullFaceFront:rp,CullFaceFrontBack:Ng,CullFaceNone:sp,Curve:qn,CurvePath:im,CustomBlending:op,CustomToneMapping:yc,CylinderGeometry:ja,Cylindrical:rv,Data3DTexture:Uc,DataArrayTexture:Lc,DataTexture:Wn,DataTextureLoader:Ex,DataUtils:l1,DecrementStencilOp:n_,DecrementWrapStencilOp:s_,DefaultLoadingManager:bm,DepthFormat:li,DepthStencilFormat:Gi,DepthTexture:Is,DetachedBindMode:Ap,DirectionalLight:Am,DirectionalLightHelper:_v,DiscreteInterpolant:ym,DodecahedronGeometry:Wc,DoubleSide:zn,DstAlphaFactor:gp,DstColorFactor:xp,DynamicCopyUsage:v_,DynamicDrawUsage:f_,DynamicReadUsage:g_,EdgesGeometry:jp,EllipseCurve:Xc,EqualCompare:Op,EqualDepth:El,EqualStencilFunc:l_,EquirectangularReflectionMapping:ga,EquirectangularRefractionMapping:_a,Euler:Rn,EventDispatcher:Yn,ExternalTexture:pd,ExtrudeGeometry:Yc,FileLoader:Ai,Float16BufferAttribute:m1,Float32BufferAttribute:Ct,FloatType:ln,Fog:Fc,FogExp2:Nc,FramebufferTexture:U1,FrontSide:Ei,Frustum:Ur,FrustumArray:kc,GLBufferAttribute:nv,GLSL1:M_,GLSL3:Tu,GreaterCompare:Np,GreaterDepth:Al,GreaterEqualCompare:Dc,GreaterEqualDepth:wl,GreaterEqualStencilFunc:d_,GreaterStencilFunc:h_,GridHelper:mv,Group:Xi,HTMLTexture:B1,HalfFloatType:hn,HemisphereLight:Em,HemisphereLightHelper:pv,IcosahedronGeometry:to,ImageBitmapLoader:Ix,ImageLoader:Ga,ImageUtils:Hp,IncrementStencilOp:e_,IncrementWrapStencilOp:i_,InstancedBufferAttribute:wr,InstancedBufferGeometry:Pm,InstancedInterleavedBuffer:ev,InstancedMesh:ud,Int16BufferAttribute:f1,Int32BufferAttribute:p1,Int8BufferAttribute:h1,IntType:Tc,InterleavedBuffer:Bc,InterleavedBufferAttribute:Ps,Interpolant:Nr,InterpolateBezier:Su,InterpolateDiscrete:Pa,InterpolateLinear:rc,InterpolateSmooth:dl,InterpolationSamplingMode:T_,InterpolationSamplingType:b_,InvertStencilOp:r_,KeepStencilOp:gs,KeyframeTrack:In,LOD:Yp,LatheGeometry:qc,Layers:Oc,LessCompare:Up,LessDepth:Tl,LessEqualCompare:Ic,LessEqualDepth:Cs,LessEqualStencilFunc:c_,LessStencilFunc:o_,Light:ts,LightProbe:Rm,Line:$i,Line3:cv,LineBasicMaterial:un,LineCurve:_d,LineCurve3:nm,LineDashedMaterial:_m,LineLoop:Kp,LineSegments:ui,LinearFilter:we,LinearInterpolant:Td,LinearMipMapLinearFilter:Hg,LinearMipMapNearestFilter:Vg,LinearMipmapLinearFilter:ii,LinearMipmapNearestFilter:xa,LinearSRGBColorSpace:Da,LinearToneMapping:_c,LinearTransfer:La,Loader:vn,LoaderUtils:Ru,LoadingManager:wd,LoopOnce:Cp,LoopPingPong:Pp,LoopRepeat:Rp,MOUSE:Ug,Material:nn,MaterialBlending:Bg,MaterialLoader:eh,MathUtils:Z_,Matrix2:Iu,Matrix3:Jt,Matrix4:Xt,MaxEquation:up,Mesh:be,MeshBasicMaterial:Pn,MeshDepthMaterial:Md,MeshDistanceMaterial:Sd,MeshLambertMaterial:mm,MeshMatcapMaterial:gm,MeshNormalMaterial:pm,MeshPhongMaterial:dm,MeshPhysicalMaterial:um,MeshStandardMaterial:Ls,MeshToonMaterial:fm,MinEquation:hp,MirroredRepeatWrapping:Aa,MixOperation:Ep,MultiplyBlending:yu,MultiplyOperation:Za,NearestFilter:Ne,NearestMipMapLinearFilter:kg,NearestMipMapNearestFilter:zg,NearestMipmapLinearFilter:mr,NearestMipmapNearestFilter:Ju,NeutralToneMapping:Sc,NeverCompare:Lp,NeverDepth:Sl,NeverStencilFunc:a_,NoBlending:Hn,NoColorSpace:Mi,NoNormalPacking:Jg,NoToneMapping:Gn,NormalAnimationBlendMode:Pc,NormalBlending:bs,NormalGAPacking:jg,NormalRGPacking:$g,NotEqualCompare:Fp,NotEqualDepth:Cl,NotEqualStencilFunc:u_,NumberKeyframeTrack:ka,Object3D:ue,ObjectLoader:Rx,ObjectSpaceNormalMap:Dp,OctahedronGeometry:eo,OneFactor:fp,OneMinusConstantAlphaFactor:Tp,OneMinusConstantColorFactor:Sp,OneMinusDstAlphaFactor:_p,OneMinusDstColorFactor:vp,OneMinusSrcAlphaFactor:Ml,OneMinusSrcColorFactor:mp,OrthographicCamera:Fr,PCFShadowMap:ma,PCFSoftShadowMap:ap,PMREMGenerator:Lu,Path:hc,PerspectiveCamera:We,Plane:Vi,PlaneGeometry:Or,PlaneHelper:Mv,PointLight:Cd,PointLightHelper:dv,Points:fd,PointsMaterial:dd,PolarGridHelper:gv,PolyhedronGeometry:ji,PositionalAudio:Bx,PropertyBinding:he,PropertyMixer:Om,QuadraticBezierCurve:xd,QuadraticBezierCurve3:vd,Quaternion:tn,QuaternionKeyframeTrack:io,QuaternionLinearInterpolant:Sm,R11_EAC_Format:Nl,RED_GREEN_RGTC2_Format:Ra,RED_RGTC1_Format:nc,REVISION:gc,RG11_EAC_Format:Ca,RGBADepthPacking:qg,RGBAFormat:cn,RGBAIntegerFormat:Rc,RGBA_ASTC_10x10_Format:Jl,RGBA_ASTC_10x5_Format:ql,RGBA_ASTC_10x6_Format:Zl,RGBA_ASTC_10x8_Format:Kl,RGBA_ASTC_12x10_Format:$l,RGBA_ASTC_12x12_Format:jl,RGBA_ASTC_4x4_Format:zl,RGBA_ASTC_5x4_Format:kl,RGBA_ASTC_5x5_Format:Vl,RGBA_ASTC_6x5_Format:Hl,RGBA_ASTC_6x6_Format:Gl,RGBA_ASTC_8x5_Format:Wl,RGBA_ASTC_8x6_Format:Xl,RGBA_ASTC_8x8_Format:Yl,RGBA_BPTC_Format:Ql,RGBA_ETC2_EAC_Format:Ol,RGBA_PVRTC_2BPPV1_Format:Dl,RGBA_PVRTC_4BPPV1_Format:Il,RGBA_S3TC_DXT1_Format:ya,RGBA_S3TC_DXT3_Format:Ma,RGBA_S3TC_DXT5_Format:Sa,RGBDepthPacking:Zg,RGBFormat:nd,RGBIntegerFormat:Gg,RGB_BPTC_SIGNED_Format:tc,RGB_BPTC_UNSIGNED_Format:ec,RGB_ETC1_Format:Ll,RGB_ETC2_Format:Ul,RGB_PVRTC_2BPPV1_Format:Pl,RGB_PVRTC_4BPPV1_Format:Rl,RGB_S3TC_DXT1_Format:va,RGDepthPacking:Kg,RGFormat:Ki,RGIntegerFormat:Cc,RawShaderMaterial:Qc,Ray:Lr,Raycaster:Fm,RectAreaLight:Cm,RedFormat:Ac,RedIntegerFormat:Ja,ReinhardToneMapping:xc,RenderTarget:rd,RenderTarget3D:jx,RepeatWrapping:wa,ReplaceStencilOp:t_,ReverseSubtractEquation:cp,RingGeometry:no,SIGNED_R11_EAC_Format:Fl,SIGNED_RED_GREEN_RGTC2_Format:sc,SIGNED_RED_RGTC1_Format:ic,SIGNED_RG11_EAC_Format:Bl,SRGBColorSpace:Be,SRGBTransfer:pe,Scene:ad,ShaderChunk:se,ShaderLib:Fn,ShaderMaterial:ze,ShadowMaterial:cm,Shape:Es,ShapeGeometry:Zc,ShapePath:Tv,ShapeUtils:Vn,ShortType:ju,Skeleton:zc,SkeletonHelper:uv,SkinnedMesh:qp,Source:Wi,Sphere:qe,SphereGeometry:Qi,Spherical:sv,SphericalHarmonics3:Pd,SplineCurve:yd,SpotLight:wm,SpotLightHelper:hv,Sprite:Xp,SpriteMaterial:cd,SrcAlphaFactor:yl,SrcAlphaSaturateFactor:yp,SrcColorFactor:pp,StaticCopyUsage:x_,StaticDrawUsage:Ua,StaticReadUsage:m_,StereoCamera:Lx,StreamCopyUsage:y_,StreamDrawUsage:p_,StreamReadUsage:__,StringKeyframeTrack:zs,SubtractEquation:lp,SubtractiveBlending:vu,TOUCH:Og,TangentSpaceNormalMap:wi,TetrahedronGeometry:Kc,Texture:Re,TextureLoader:Tm,TextureUtils:Pv,Timer:nh,TimestampQuery:S_,TorusGeometry:Jc,TorusKnotGeometry:$c,Triangle:gn,TriangleFanDrawMode:Yg,TriangleStripDrawMode:Xg,TrianglesDrawMode:Wg,TubeGeometry:jc,UVMapping:bc,Uint16BufferAttribute:od,Uint32BufferAttribute:ld,Uint8BufferAttribute:u1,Uint8ClampedBufferAttribute:d1,Uniform:Ud,UniformsGroup:tv,UniformsLib:Mt,UniformsUtils:Rr,UnsignedByteType:mn,UnsignedInt101111Type:td,UnsignedInt248Type:Tr,UnsignedInt5999Type:Qu,UnsignedIntType:Cn,UnsignedShort4444Type:Ec,UnsignedShort5551Type:wc,UnsignedShortType:br,VSMShadowMap:pr,Vector2:j,Vector3:R,Vector4:xe,VectorKeyframeTrack:Va,VideoFrameTexture:L1,VideoTexture:Jp,WebGL3DRenderTarget:Q_,WebGLArrayRenderTarget:j_,WebGLCoordinateSystem:Tn,WebGLCubeRenderTarget:Od,WebGLRenderTarget:Xe,WebGLRenderer:qm,WebGLUtils:Xm,WebGPUCoordinateSystem:Rs,WebXRController:fl,WireframeGeometry:lm,WrapAroundEnding:Ia,ZeroCurvatureEnding:xs,ZeroFactor:dp,ZeroSlopeEnding:vs,ZeroStencilOp:Qg,createCanvasElement:kp,error:Ut,getConsoleFunction:R_,log:Na,setConsoleFunction:C_,warn:xt,warnOnce:ac},Symbol.toStringTag,{value:"Module"})),bi=[{id:"sun",name:"Sun",type:"star",parent:null,radiusKm:695700,axialTiltDeg:7.25,rotationPeriodHours:609.12,orbitSource:"none",texture:"2k_sun.jpg",color:16774378,facts:"Contains 99.86% of the Solar System's mass and rotates differentially, faster at its equator than its poles."},{id:"mercury",meridianDeg:329.548,name:"Mercury",type:"planet",parent:"sun",radiusKm:2439.7,axialTiltDeg:.034,rotationPeriodHours:1407.6,orbitSource:"astronomy-engine",texture:"2k_mercury.jpg",color:10260866,facts:"Smallest planet, locked in a 3:2 spin-orbit resonance — three rotations for every two orbits."},{id:"venus",meridianDeg:160.2,name:"Venus",type:"planet",parent:"sun",radiusKm:6051.8,axialTiltDeg:177.36,rotationPeriodHours:5832.5,orbitSource:"astronomy-engine",texture:"2k_venus_atmosphere.jpg",color:15124628,facts:"Rotates retrograde so slowly that its day is longer than its year; hottest planet via a runaway greenhouse."},{id:"earth",meridianDeg:190.147,name:"Earth",type:"planet",parent:"sun",radiusKm:6371,axialTiltDeg:23.44,rotationPeriodHours:23.9345,orbitSource:"astronomy-engine",texture:"2k_earth_daymap.jpg",color:5210111,facts:"The only known world with liquid surface water and life; its 23.44° tilt drives the seasons."},{id:"moon",meridianDeg:38.3213,name:"Moon",type:"moon",parent:"earth",radiusKm:1737.4,axialTiltDeg:6.687,rotationPeriodHours:655.72,orbitSource:"astronomy-engine",texture:"2k_moon.jpg",color:12566463,facts:"Tidally locked to Earth and slowly receding at about 3.8 cm per year."},{id:"mars",meridianDeg:176.63,name:"Mars",type:"planet",parent:"sun",radiusKm:3389.5,axialTiltDeg:25.19,rotationPeriodHours:24.6229,orbitSource:"astronomy-engine",texture:"2k_mars.jpg",color:12665870,facts:"Hosts Olympus Mons, the tallest volcano in the Solar System; its day and tilt are remarkably Earth-like."},{id:"phobos",name:"Phobos",type:"moon",parent:"mars",radiusKm:11.08,axialTiltDeg:0,rotationPeriodHours:7.654,orbitSource:"kepler",texture:"2k_phobos.jpg",tintTexture:!0,color:9075823,facts:"Orbits Mars faster than Mars rotates, rising in the west; it is slowly spiraling inward.",kepler:{aKm:9375,e:.015,iDeg:26.05,omDeg:84.91,wDeg:342.86,maDeg:189.7,periodDays:.31891}},{id:"deimos",name:"Deimos",type:"moon",parent:"mars",radiusKm:6.27,axialTiltDeg:0,rotationPeriodHours:30.312,orbitSource:"kepler",color:10128250,facts:"The smaller, outer Martian moon; smooth regolith makes it look almost featureless.",kepler:{aKm:23457,e:3e-4,iDeg:27.59,omDeg:83.58,wDeg:11.98,maDeg:205,periodDays:1.2625}},{id:"jupiter",meridianDeg:284.95,name:"Jupiter",type:"planet",parent:"sun",radiusKm:69911,axialTiltDeg:3.13,rotationPeriodHours:9.925,orbitSource:"astronomy-engine",texture:"2k_jupiter.jpg",color:14207645,facts:"Most massive planet, spinning once in ~10 hours and hosting the centuries-old Great Red Spot."},{id:"io",name:"Io",type:"moon",parent:"jupiter",radiusKm:1821.6,axialTiltDeg:0,rotationPeriodHours:42.459,orbitSource:"astronomy-engine-jupiter-moon",texture:"2k_io.jpg",color:15194490,facts:"The most volcanically active body in the Solar System, heated by tidal flexing."},{id:"europa",name:"Europa",type:"moon",parent:"jupiter",radiusKm:1560.8,axialTiltDeg:0,rotationPeriodHours:85.228,orbitSource:"astronomy-engine-jupiter-moon",texture:"2k_europa.jpg",color:13482138,facts:"A smooth ice shell hides a global saltwater ocean — a prime target in the search for life."},{id:"ganymede",name:"Ganymede",type:"moon",parent:"jupiter",radiusKm:2634.1,axialTiltDeg:0,rotationPeriodHours:171.709,orbitSource:"astronomy-engine-jupiter-moon",texture:"2k_ganymede.jpg",color:10259576,facts:"The largest moon in the Solar System — bigger than Mercury — and the only one with its own magnetic field."},{id:"callisto",name:"Callisto",type:"moon",parent:"jupiter",radiusKm:2410.3,axialTiltDeg:0,rotationPeriodHours:400.536,orbitSource:"astronomy-engine-jupiter-moon",texture:"2k_callisto.jpg",color:7234136,facts:"The most heavily cratered object in the Solar System; its surface has barely changed in billions of years."},{id:"saturn",meridianDeg:38.9,name:"Saturn",type:"planet",parent:"sun",radiusKm:58232,axialTiltDeg:26.73,rotationPeriodHours:10.656,orbitSource:"astronomy-engine",texture:"2k_saturn.jpg",ringTexture:"2k_saturn_ring_alpha.png",ringInnerKm:74658,ringOuterKm:136775,color:14933184,facts:"Famous for its ring system of ice and rock; the least dense planet — it would float in water."},{id:"titan",name:"Titan",type:"moon",parent:"saturn",radiusKm:2574.7,axialTiltDeg:.3,rotationPeriodHours:382.691,orbitSource:"kepler",texture:"2k_titan.jpg",tintTexture:!0,color:14263361,facts:"The only moon with a thick atmosphere and stable surface liquid — lakes of methane.",kepler:{aKm:1221900,e:.029,iDeg:27.65,omDeg:169.83,wDeg:112.5,maDeg:11.7,periodDays:15.945448}},{id:"rhea",name:"Rhea",type:"moon",parent:"saturn",radiusKm:763.8,axialTiltDeg:0,rotationPeriodHours:108.437,orbitSource:"kepler",texture:"2k_rhea.jpg",color:13091510,facts:"Saturn's second-largest moon, an icy, heavily cratered world.",kepler:{aKm:527200,e:.001,iDeg:28.06,omDeg:170.12,wDeg:137.53,maDeg:31.5,periodDays:4.517503}},{id:"iapetus",name:"Iapetus",type:"moon",parent:"saturn",radiusKm:734.4,axialTiltDeg:0,rotationPeriodHours:1903.716,orbitSource:"kepler",texture:"2k_iapetus.jpg",color:9405040,facts:"Two-toned moon — one hemisphere dark as coal, the other bright as snow — ringed by an equatorial ridge.",kepler:{aKm:3561700,e:.028,iDeg:18.37,omDeg:143.21,wDeg:214.99,maDeg:74.8,periodDays:79.331002}},{id:"uranus",meridianDeg:203.81,name:"Uranus",type:"planet",parent:"sun",radiusKm:25362,axialTiltDeg:97.77,rotationPeriodHours:17.24,orbitSource:"astronomy-engine",texture:"2k_uranus.jpg",color:11195359,facts:"Tipped on its side at ~98°, it effectively rolls along its orbit, giving each pole ~42 years of sunlight then dark."},{id:"titania",name:"Titania",type:"moon",parent:"uranus",radiusKm:788.4,axialTiltDeg:0,rotationPeriodHours:208.941,orbitSource:"kepler",texture:"2k_titania.jpg",color:11970970,facts:"The largest moon of Uranus, scarred by huge canyons from an icy crust that froze and expanded.",kepler:{aKm:436298,e:.002,iDeg:97.79,omDeg:167.68,wDeg:208.44,maDeg:68.1,periodDays:8.705869}},{id:"oberon",name:"Oberon",type:"moon",parent:"uranus",radiusKm:761.4,axialTiltDeg:0,rotationPeriodHours:323.118,orbitSource:"kepler",texture:"2k_oberon.jpg",color:10259838,facts:"The outermost large Uranian moon, an ancient cratered world with dark crater-floor deposits.",kepler:{aKm:583511,e:.002,iDeg:97.73,omDeg:167.73,wDeg:203.95,maDeg:143.6,periodDays:13.463237}},{id:"neptune",meridianDeg:249.978,name:"Neptune",type:"planet",parent:"sun",radiusKm:24622,axialTiltDeg:28.32,rotationPeriodHours:16.11,orbitSource:"astronomy-engine",texture:"2k_neptune.jpg",color:3825613,facts:"The windiest planet, with supersonic gusts over 2,000 km/h; the first planet found by mathematical prediction."},{id:"triton",name:"Triton",type:"moon",parent:"neptune",radiusKm:1353.4,axialTiltDeg:0,rotationPeriodHours:-141.044,orbitSource:"kepler",texture:"2k_triton.jpg",color:13221806,facts:"The only large moon with a retrograde orbit — likely a captured Kuiper Belt object — with active nitrogen geysers.",kepler:{aKm:354800,e:4e-4,iDeg:130.24,omDeg:216.55,wDeg:16.12,maDeg:63,periodDays:5.876994}},{id:"pluto",meridianDeg:302.695,name:"Pluto",type:"dwarf",parent:"sun",radiusKm:1188.3,axialTiltDeg:119.51,rotationPeriodHours:153.294,orbitSource:"astronomy-engine",texture:"2k_pluto.jpg",color:13023397,facts:"The largest dwarf planet in the Kuiper Belt; its dark region is real — that hemisphere was unlit during the 2015 New Horizons flyby, so it has never been mapped."}],zr=Object.fromEntries(bi.map(s=>[s.id,s])),Zm=1495978707e-1,ni=s=>s/Zm,_r=Math.PI/180,Km=2451545,Nu=s=>s/864e5+24405875e-1,ES=s=>(s-24405875e-1)*864e5,Nd=s=>new Date(ES(s));/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const wS=173.1446326846693,AS=14959787069098932e-8,Fu=.017453292519943295,CS=365.24217,Uf=new Date("2000-01-01T12:00:00Z"),Nn=2*Math.PI,Bi=3600*(180/Math.PI),tl=484813681109536e-20,RS=6378.1366,PS=RS/AS,IS=81.30056,Fd=.0002959122082855911,Bu=2825345909524226e-22,zu=8459715185680659e-23,ku=1292024916781969e-23,Vu=1524358900784276e-23;function eu(s){if(!Number.isFinite(s))throw console.trace(),`Value is not a finite number: ${s}`;return s}function cr(s){return s-Math.floor(s)}var oe;(function(s){s.Sun="Sun",s.Moon="Moon",s.Mercury="Mercury",s.Venus="Venus",s.Earth="Earth",s.Mars="Mars",s.Jupiter="Jupiter",s.Saturn="Saturn",s.Uranus="Uranus",s.Neptune="Neptune",s.Pluto="Pluto",s.SSB="SSB",s.EMB="EMB",s.Star1="Star1",s.Star2="Star2",s.Star3="Star3",s.Star4="Star4",s.Star5="Star5",s.Star6="Star6",s.Star7="Star7",s.Star8="Star8"})(oe||(oe={}));const DS=[oe.Star1,oe.Star2,oe.Star3,oe.Star4,oe.Star5,oe.Star6,oe.Star7,oe.Star8],LS=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function US(s){const t=DS.indexOf(s);return t>=0?LS[t]:null}function Jm(s){const t=US(s);return t&&t.dist>0?t:null}var Wa;(function(s){s[s.From2000=0]="From2000",s[s.Into2000=1]="Into2000"})(Wa||(Wa={}));const xr={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function OS(s){var t,e,n,i,r,a,o;const l=2e3+(s-14)/CS;return l<-500?(t=(l-1820)/100,-20+32*t*t):l<500?(t=l/100,e=t*t,n=t*e,i=e*e,r=e*n,a=n*n,10583.6-1014.41*t+33.78311*e-5.952053*n-.1798452*i+.022174192*r+.0090316521*a):l<1600?(t=(l-1e3)/100,e=t*t,n=t*e,i=e*e,r=e*n,a=n*n,1574.2-556.01*t+71.23472*e+.319781*n-.8503463*i-.005050998*r+.0083572073*a):l<1700?(t=l-1600,e=t*t,n=t*e,120-.9808*t-.01532*e+n/7129):l<1800?(t=l-1700,e=t*t,n=t*e,i=e*e,8.83+.1603*t-.0059285*e+13336e-8*n-i/1174e3):l<1860?(t=l-1800,e=t*t,n=t*e,i=e*e,r=e*n,a=n*n,o=n*i,13.72-.332447*t+.0068612*e+.0041116*n-37436e-8*i+121272e-10*r-1699e-10*a+875e-12*o):l<1900?(t=l-1860,e=t*t,n=t*e,i=e*e,r=e*n,7.62+.5737*t-.251754*e+.01680668*n-.0004473624*i+r/233174):l<1920?(t=l-1900,e=t*t,n=t*e,i=e*e,-2.79+1.494119*t-.0598939*e+.0061966*n-197e-6*i):l<1941?(t=l-1920,e=t*t,n=t*e,21.2+.84493*t-.0761*e+.0020936*n):l<1961?(t=l-1950,e=t*t,n=t*e,29.07+.407*t-e/233+n/2547):l<1986?(t=l-1975,e=t*t,n=t*e,45.45+1.067*t-e/260-n/718):l<2005?(t=l-2e3,e=t*t,n=t*e,i=e*e,r=e*n,63.86+.3345*t-.060374*e+.0017275*n+651814e-9*i+2373599e-11*r):l<2050?(t=l-2e3,62.92+.32217*t+.005589*t*t):l<2150?(t=(l-1820)/100,-20+32*t*t-.5628*(2150-l)):(t=(l-1820)/100,-20+32*t*t)}let NS=OS;function Of(s){return s+NS(s)/86400}class ws{constructor(t){if(t instanceof ws){this.date=t.date,this.ut=t.ut,this.tt=t.tt;return}const e=1e3*3600*24;if(t instanceof Date&&Number.isFinite(t.getTime())){this.date=t,this.ut=(t.getTime()-Uf.getTime())/e,this.tt=Of(this.ut);return}if(Number.isFinite(t)){this.date=new Date(Uf.getTime()+t*e),this.ut=t,this.tt=Of(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(t){let e=new ws(t);for(;;){const n=t-e.tt;if(Math.abs(n)<1e-12)return e;e=e.AddDays(n)}}toString(){return this.date.toISOString()}AddDays(t){return new ws(this.ut+t)}}function kr(s){return s instanceof ws?s:new ws(s)}function FS(s){var t=s.tt/36525,e=((((-434e-10*t-576e-9)*t+.0020034)*t-1831e-7)*t-46.836769)*t+84381.406;return e/3600}function BS(s,t){const e=s*Fu,n=Math.cos(e),i=Math.sin(e);return[t[0],t[1]*n-t[2]*i,t[1]*i+t[2]*n]}function zS(s,t){return BS(FS(s),t)}function kS(s){const t=s.tt/36525;function e(Pt,Tt){const Z=[];let nt;for(nt=0;nt<=Tt-Pt;++nt)Z.push(0);return{min:Pt,array:Z}}function n(Pt,Tt,Z,nt){const K=[];for(let mt=0;mt<=Tt-Pt;++mt)K.push(e(Z,nt));return{min:Pt,array:K}}function i(Pt,Tt,Z){const nt=Pt.array[Tt-Pt.min];return nt.array[Z-nt.min]}function r(Pt,Tt,Z,nt){const K=Pt.array[Tt-Pt.min];K.array[Z-K.min]=nt}let a,o,l,c,h,d,u,f,p,x,g,m,_,v,M,E,b,C,y,w,I,P,O,W=n(-6,6,1,4),Y=n(-6,6,1,4);function L(Pt,Tt){return i(W,Pt,Tt)}function k(Pt,Tt){return i(Y,Pt,Tt)}function F(Pt,Tt,Z){return r(W,Pt,Tt,Z)}function it(Pt,Tt,Z){return r(Y,Pt,Tt,Z)}function ot(Pt,Tt,Z,nt,K){K(Pt*Z-Tt*nt,Tt*Z+Pt*nt)}function rt(Pt){return Math.sin(Nn*Pt)}u=t*t,p=0,O=0,g=0,m=3422.7;var St=rt(.19833+.05611*t),Lt=rt(.27869+.04508*t),Kt=rt(.16827-.36903*t),le=rt(.34734-5.37261*t),Wt=rt(.10498-5.37899*t),Q=rt(.42681-.41855*t),yt=rt(.14943-5.37511*t);for(C=.84*St+.31*Lt+14.27*Kt+7.26*le+.28*Wt+.24*Q,y=2.94*St+.31*Lt+14.27*Kt+9.34*le+1.12*Wt+.83*Q,w=-6.4*St-1.89*Q,I=.21*St+.31*Lt+14.27*Kt-88.7*le-15.3*Wt+.24*Q-1.86*yt,P=C-w,f=-3332e-9*rt(.59734-5.37261*t)-539e-9*rt(.35498-5.37899*t)-64e-9*rt(.39943-5.37511*t),_=Nn*cr(.60643382+1336.85522467*t-313e-8*u)+C/Bi,v=Nn*cr(.37489701+1325.55240982*t+2565e-8*u)+y/Bi,M=Nn*cr(.99312619+99.99735956*t-44e-8*u)+w/Bi,E=Nn*cr(.25909118+1342.2278298*t-892e-8*u)+I/Bi,b=Nn*cr(.82736186+1236.85308708*t-397e-8*u)+P/Bi,h=1;h<=4;++h){switch(h){case 1:l=v,o=4,c=1.000002208;break;case 2:l=M,o=3,c=.997504612-.002495388*t;break;case 3:l=E,o=4,c=1.000002708+139.978*f;break;case 4:l=b,o=6,c=1;break;default:throw`Internal error: I = ${h}`}for(F(0,h,1),F(1,h,Math.cos(l)*c),it(0,h,0),it(1,h,Math.sin(l)*c),d=2;d<=o;++d)ot(L(d-1,h),k(d-1,h),L(1,h),k(1,h),(Pt,Tt)=>(F(d,h,Pt),it(d,h,Tt)));for(d=1;d<=o;++d)F(-d,h,L(d,h)),it(-d,h,-k(d,h))}function ht(Pt,Tt,Z,nt){for(var K={x:1,y:0},mt=[0,Pt,Tt,Z,nt],lt=1;lt<=4;++lt)mt[lt]!==0&&ot(K.x,K.y,L(mt[lt],lt),k(mt[lt],lt),(Ht,D)=>(K.x=Ht,K.y=D));return K}function z(Pt,Tt,Z,nt,K,mt,lt,Ht){var D=ht(K,mt,lt,Ht);p+=Pt*D.y,O+=Tt*D.y,g+=Z*D.x,m+=nt*D.x}z(13.902,14.06,-.001,.2607,0,0,0,4),z(.403,-4.01,.394,.0023,0,0,0,3),z(2369.912,2373.36,.601,28.2333,0,0,0,2),z(-125.154,-112.79,-.725,-.9781,0,0,0,1),z(1.979,6.98,-.445,.0433,1,0,0,4),z(191.953,192.72,.029,3.0861,1,0,0,2),z(-8.466,-13.51,.455,-.1093,1,0,0,1),z(22639.5,22609.07,.079,186.5398,1,0,0,0),z(18.609,3.59,-.094,.0118,1,0,0,-1),z(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),z(3.215,5.44,.192,-.0386,1,0,0,-3),z(-38.428,-38.64,.001,.6008,1,0,0,-4),z(-.393,-1.43,-.092,.0086,1,0,0,-6),z(-.289,-1.59,.123,-.0053,0,1,0,4),z(-24.42,-25.1,.04,-.3,0,1,0,2),z(18.023,17.93,.007,.1494,0,1,0,1),z(-668.146,-126.98,-1.302,-.3997,0,1,0,0),z(.56,.32,-.001,-.0037,0,1,0,-1),z(-165.145,-165.06,.054,1.9178,0,1,0,-2),z(-1.877,-6.46,-.416,.0339,0,1,0,-4),z(.213,1.02,-.074,.0054,2,0,0,4),z(14.387,14.78,-.017,.2833,2,0,0,2),z(-.586,-1.2,.054,-.01,2,0,0,1),z(769.016,767.96,.107,10.1657,2,0,0,0),z(1.75,2.01,-.018,.0155,2,0,0,-1),z(-211.656,-152.53,5.679,-.3039,2,0,0,-2),z(1.225,.91,-.03,-.0088,2,0,0,-3),z(-30.773,-34.07,-.308,.3722,2,0,0,-4),z(-.57,-1.4,-.074,.0109,2,0,0,-6),z(-2.921,-11.75,.787,-.0484,1,1,0,2),z(1.267,1.52,-.022,.0164,1,1,0,1),z(-109.673,-115.18,.461,-.949,1,1,0,0),z(-205.962,-182.36,2.056,1.4437,1,1,0,-2),z(.233,.36,.012,-.0025,1,1,0,-3),z(-4.391,-9.66,-.471,.0673,1,1,0,-4),z(.283,1.53,-.111,.006,1,-1,0,4),z(14.577,31.7,-1.54,.2302,1,-1,0,2),z(147.687,138.76,.679,1.1528,1,-1,0,0),z(-1.089,.55,.021,0,1,-1,0,-1),z(28.475,23.59,-.443,-.2257,1,-1,0,-2),z(-.276,-.38,-.006,-.0036,1,-1,0,-3),z(.636,2.27,.146,-.0102,1,-1,0,-4),z(-.189,-1.68,.131,-.0028,0,2,0,2),z(-7.486,-.66,-.037,-.0086,0,2,0,0),z(-8.096,-16.35,-.74,.0918,0,2,0,-2),z(-5.741,-.04,0,-9e-4,0,0,2,2),z(.255,0,0,0,0,0,2,1),z(-411.608,-.2,0,-.0124,0,0,2,0),z(.584,.84,0,.0071,0,0,2,-1),z(-55.173,-52.14,0,-.1052,0,0,2,-2),z(.254,.25,0,-.0017,0,0,2,-3),z(.025,-1.67,0,.0031,0,0,2,-4),z(1.06,2.96,-.166,.0243,3,0,0,2),z(36.124,50.64,-1.3,.6215,3,0,0,0),z(-13.193,-16.4,.258,-.1187,3,0,0,-2),z(-1.187,-.74,.042,.0074,3,0,0,-4),z(-.293,-.31,-.002,.0046,3,0,0,-6),z(-.29,-1.45,.116,-.0051,2,1,0,2),z(-7.649,-10.56,.259,-.1038,2,1,0,0),z(-8.627,-7.59,.078,-.0192,2,1,0,-2),z(-2.74,-2.54,.022,.0324,2,1,0,-4),z(1.181,3.32,-.212,.0213,2,-1,0,2),z(9.703,11.67,-.151,.1268,2,-1,0,0),z(-.352,-.37,.001,-.0028,2,-1,0,-1),z(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),z(.36,.2,-.012,-.0043,2,-1,0,-4),z(-1.167,-1.25,.008,-.0106,1,2,0,0),z(-7.412,-6.12,.117,.0484,1,2,0,-2),z(-.311,-.65,-.032,.0044,1,2,0,-4),z(.757,1.82,-.105,.0112,1,-2,0,2),z(2.58,2.32,.027,.0196,1,-2,0,0),z(2.533,2.4,-.014,-.0212,1,-2,0,-2),z(-.344,-.57,-.025,.0036,0,3,0,-2),z(-.992,-.02,0,0,1,0,2,2),z(-45.099,-.02,0,-.001,1,0,2,0),z(-.179,-9.52,0,-.0833,1,0,2,-2),z(-.301,-.33,0,.0014,1,0,2,-4),z(-6.382,-3.37,0,-.0481,1,0,-2,2),z(39.528,85.13,0,-.7136,1,0,-2,0),z(9.366,.71,0,-.0112,1,0,-2,-2),z(.202,.02,0,0,1,0,-2,-4),z(.415,.1,0,.0013,0,1,2,0),z(-2.152,-2.26,0,-.0066,0,1,2,-2),z(-1.44,-1.3,0,.0014,0,1,-2,2),z(.384,-.04,0,0,0,1,-2,-2),z(1.938,3.6,-.145,.0401,4,0,0,0),z(-.952,-1.58,.052,-.013,4,0,0,-2),z(-.551,-.94,.032,-.0097,3,1,0,0),z(-.482,-.57,.005,-.0045,3,1,0,-2),z(.681,.96,-.026,.0115,3,-1,0,0),z(-.297,-.27,.002,-9e-4,2,2,0,-2),z(.254,.21,-.003,0,2,-2,0,-2),z(-.25,-.22,.004,.0014,1,3,0,-2),z(-3.996,0,0,4e-4,2,0,2,0),z(.557,-.75,0,-.009,2,0,2,-2),z(-.459,-.38,0,-.0053,2,0,-2,2),z(-1.298,.74,0,4e-4,2,0,-2,0),z(.538,1.14,0,-.0141,2,0,-2,-2),z(.263,.02,0,0,1,1,2,0),z(.426,.07,0,-6e-4,1,1,-2,-2),z(-.304,.03,0,3e-4,1,-1,2,0),z(-.372,-.19,0,-.0027,1,-1,-2,2),z(.418,0,0,0,0,0,4,0),z(-.33,-.04,0,0,3,0,2,0);function Ft(Pt,Tt,Z,nt,K){return Pt*ht(Tt,Z,nt,K).y}x=0,x+=Ft(-526.069,0,0,1,-2),x+=Ft(-3.352,0,0,1,-4),x+=Ft(44.297,1,0,1,-2),x+=Ft(-6,1,0,1,-4),x+=Ft(20.599,-1,0,1,0),x+=Ft(-30.598,-1,0,1,-2),x+=Ft(-24.649,-2,0,1,0),x+=Ft(-2,-2,0,1,-2),x+=Ft(-22.571,0,1,1,-2),x+=Ft(10.985,0,-1,1,-2),p+=.82*rt(.7736-62.5512*t)+.31*rt(.0466-125.1025*t)+.35*rt(.5785-25.1042*t)+.66*rt(.4591+1335.8075*t)+.64*rt(.313-91.568*t)+1.14*rt(.148+1331.2898*t)+.21*rt(.5918+1056.5859*t)+.44*rt(.5784+1322.8595*t)+.24*rt(.2275-5.7374*t)+.28*rt(.2965+2.6929*t)+.33*rt(.3132+6.3368*t),a=E+O/Bi;let Vt=(1.000002708+139.978*f)*(18518.511+1.189+g)*Math.sin(a)-6.24*Math.sin(3*a)+x;return{geo_eclip_lon:Nn*cr((_+p/Bi)/Nn),geo_eclip_lat:Math.PI/(180*3600)*Vt,distance_au:Bi*PS/(.999953253*m)}}function VS(s,t){return[s.rot[0][0]*t[0]+s.rot[1][0]*t[1]+s.rot[2][0]*t[2],s.rot[0][1]*t[0]+s.rot[1][1]*t[1]+s.rot[2][1]*t[2],s.rot[0][2]*t[0]+s.rot[1][2]*t[1]+s.rot[2][2]*t[2]]}function HS(s,t,e){const n=GS(t,e);return VS(n,s)}function GS(s,t){const e=s.tt/36525;let n=84381.406,i=((((-951e-10*e+132851e-9)*e-.00114045)*e-1.0790069)*e+5038.481507)*e,r=((((3337e-10*e-467e-9)*e-.00772503)*e+.0512623)*e-.025754)*e+n,a=((((-56e-9*e+170663e-9)*e-.00121197)*e-2.3814292)*e+10.556403)*e;n*=tl,i*=tl,r*=tl,a*=tl;const o=Math.sin(n),l=Math.cos(n),c=Math.sin(-i),h=Math.cos(-i),d=Math.sin(-r),u=Math.cos(-r),f=Math.sin(a),p=Math.cos(a),x=p*h-c*f*u,g=p*c*l+f*u*h*l-o*f*d,m=p*c*o+f*u*h*o+l*f*d,_=-f*h-c*p*u,v=-f*c*l+p*u*h*l-o*p*d,M=-f*c*o+p*u*h*o+l*p*d,E=c*d,b=-d*h*l-o*u,C=-d*h*o+u*l;if(t===Wa.Into2000)return new uc([[x,g,m],[_,v,M],[E,b,C]]);if(t===Wa.From2000)return new uc([[x,_,E],[g,v,b],[m,M,C]]);throw"Invalid precess direction"}class xn{constructor(t,e,n,i){this.x=t,this.y=e,this.z=n,this.t=i}Length(){return Math.hypot(this.x,this.y,this.z)}}class Bd{constructor(t,e,n,i,r,a,o){this.x=t,this.y=e,this.z=n,this.vx=i,this.vy=r,this.vz=a,this.t=o}}class WS{constructor(t,e,n){this.lat=eu(t),this.lon=eu(e),this.dist=eu(n)}}class uc{constructor(t){this.rot=t}}function Hu(s){const t=kr(s),e=kS(t),n=e.distance_au*Math.cos(e.geo_eclip_lat),i=[n*Math.cos(e.geo_eclip_lon),n*Math.sin(e.geo_eclip_lon),e.distance_au*Math.sin(e.geo_eclip_lat)],r=zS(t,i),a=HS(r,t,Wa.Into2000);return new xn(a[0],a[1],a[2],t)}function Mr(s,t,e){let n=1,i=0;for(let r of s){let a=0;for(let[l,c,h]of r)a+=l*Math.cos(c+t*h);let o=n*a;e&&(o%=Nn),i+=o,n*=t}return i}function nu(s,t){let e=1,n=0,i=0,r=0;for(let a of s){let o=0,l=0;for(let[c,h,d]of a){let u=h+t*d;o+=c*d*Math.sin(u),r>0&&(l+=c*Math.cos(u))}i+=r*n*l-e*o,n=e,e*=t,++r}return i}const fa=365250,Gu=0,Wu=1,Xu=2;function Yu(s){return new je(s[0]+44036e-11*s[1]-190919e-12*s[2],-479966e-12*s[0]+.917482137087*s[1]-.397776982902*s[2],.397776982902*s[1]+.917482137087*s[2])}function $m(s,t,e){const n=e*Math.cos(t),i=Math.cos(s),r=Math.sin(s);return[n*i,n*r,e*Math.sin(t)]}function ml(s,t){const e=t.tt/fa,n=Mr(s[Gu],e,!0),i=Mr(s[Wu],e,!1),r=Mr(s[Xu],e,!1),a=$m(n,i,r);return Yu(a).ToAstroVector(t)}function XS(s,t){const e=t/fa,n=Mr(s[Gu],e,!0),i=Mr(s[Wu],e,!1),r=Mr(s[Xu],e,!1),a=nu(s[Gu],e),o=nu(s[Wu],e),l=nu(s[Xu],e),c=Math.cos(n),h=Math.sin(n),d=Math.cos(i),u=Math.sin(i),f=+(l*d*c)-r*u*c*o-r*d*h*a,p=+(l*d*h)-r*u*h*o+r*d*c*a,x=+(l*u)+r*d*o,g=$m(n,i,r),m=[f/fa,p/fa,x/fa],_=Yu(g),v=Yu(m);return new Us(t,_,v)}function el(s,t,e,n){const i=n/(n+Fd),r=ml(xr[e],t);s.x+=i*r.x,s.y+=i*r.y,s.z+=i*r.z}function YS(s){const t=new xn(0,0,0,s);return el(t,s,oe.Jupiter,Bu),el(t,s,oe.Saturn,zu),el(t,s,oe.Uranus,ku),el(t,s,oe.Neptune,Vu),t}const qu=51,qS=29200,vr=146,vi=201,Ms=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class je{constructor(t,e,n){this.x=t,this.y=e,this.z=n}clone(){return new je(this.x,this.y,this.z)}ToAstroVector(t){return new xn(this.x,this.y,this.z,t)}static zero(){return new je(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(t){return new je(this.x+t.x,this.y+t.y,this.z+t.z)}sub(t){return new je(this.x-t.x,this.y-t.y,this.z-t.z)}incr(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}decr(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}mul(t){return new je(t*this.x,t*this.y,t*this.z)}div(t){return new je(this.x/t,this.y/t,this.z/t)}mean(t){return new je((this.x+t.x)/2,(this.y+t.y)/2,(this.z+t.z)/2)}neg(){return new je(-this.x,-this.y,-this.z)}}class Us{constructor(t,e,n){this.tt=t,this.r=e,this.v=n}clone(){return new Us(this.tt,this.r,this.v)}sub(t){return new Us(this.tt,this.r.sub(t.r),this.v.sub(t.v))}}function ZS(s){let[t,[e,n,i],[r,a,o]]=s;return new Us(t,new je(e,n,i),new je(r,a,o))}function nl(s,t,e,n){const i=n/(n+Fd),r=XS(xr[e],t);return s.r.incr(r.r.mul(i)),s.v.incr(r.v.mul(i)),r}function sa(s,t,e){const n=e.sub(s),i=n.quadrature();return n.mul(t/(i*Math.sqrt(i)))}class zd{constructor(t){let e=new Us(t,new je(0,0,0),new je(0,0,0));this.Jupiter=nl(e,t,oe.Jupiter,Bu),this.Saturn=nl(e,t,oe.Saturn,zu),this.Uranus=nl(e,t,oe.Uranus,ku),this.Neptune=nl(e,t,oe.Neptune,Vu),this.Jupiter.r.decr(e.r),this.Jupiter.v.decr(e.v),this.Saturn.r.decr(e.r),this.Saturn.v.decr(e.v),this.Uranus.r.decr(e.r),this.Uranus.v.decr(e.v),this.Neptune.r.decr(e.r),this.Neptune.v.decr(e.v),this.Sun=new Us(t,e.r.mul(-1),e.v.mul(-1))}Acceleration(t){let e=sa(t,Fd,this.Sun.r);return e.incr(sa(t,Bu,this.Jupiter.r)),e.incr(sa(t,zu,this.Saturn.r)),e.incr(sa(t,ku,this.Uranus.r)),e.incr(sa(t,Vu,this.Neptune.r)),e}}class rh{constructor(t,e,n,i){this.tt=t,this.r=e,this.v=n,this.a=i}clone(){return new rh(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class jm{constructor(t,e){this.bary=t,this.grav=e}}function dc(s,t,e,n){return new je(t.x+s*(e.x+s*n.x/2),t.y+s*(e.y+s*n.y/2),t.z+s*(e.z+s*n.z/2))}function Nf(s,t,e){return new je(t.x+s*e.x,t.y+s*e.y,t.z+s*e.z)}function Zu(s,t){const e=s-t.tt,n=new zd(s),i=dc(e,t.r,t.v,t.a),r=n.Acceleration(i).mean(t.a),a=dc(e,t.r,t.v,r),o=t.v.add(r.mul(e)),l=n.Acceleration(a),c=new rh(s,a,o,l);return new jm(n,c)}const KS=[];function Qm(s,t){const e=Math.floor(s);return e<0?0:e>=t?t-1:e}function Ku(s){const t=ZS(s),e=new zd(t.tt),n=t.r.add(e.Sun.r),i=t.v.add(e.Sun.v),r=e.Acceleration(n),a=new rh(t.tt,n,i,r);return new jm(e,a)}function JS(s,t){const e=Ms[0][0];if(t<e||t>Ms[qu-1][0])return null;const n=Qm((t-e)/qS,qu-1);if(!s[n]){const r=s[n]=[];r[0]=Ku(Ms[n]).grav,r[vi-1]=Ku(Ms[n+1]).grav;let a,o=r[0].tt;for(a=1;a<vi-1;++a)r[a]=Zu(o+=vr,r[a-1]).grav;o=r[vi-1].tt;var i=[];for(i[vi-1]=r[vi-1],a=vi-2;a>0;--a)i[a]=Zu(o-=vr,i[a+1]).grav;for(a=vi-2;a>0;--a){const l=a/(vi-1);r[a].r=r[a].r.mul(1-l).add(i[a].r.mul(l)),r[a].v=r[a].v.mul(1-l).add(i[a].v.mul(l)),r[a].a=r[a].a.mul(1-l).add(i[a].a.mul(l))}}return s[n]}function Ff(s,t,e){let n=Ku(s);const i=Math.ceil((t-n.grav.tt)/e);for(let r=0;r<i;++r)n=Zu(r+1===i?t:n.grav.tt+e,n.grav);return n}function $S(s,t){let e,n,i;const r=JS(KS,s.tt);if(r){const a=Qm((s.tt-r[0].tt)/vr,vi-1),o=r[a],l=r[a+1],c=o.a.mean(l.a),h=dc(s.tt-o.tt,o.r,o.v,c),d=Nf(s.tt-o.tt,o.v,c),u=dc(s.tt-l.tt,l.r,l.v,c),f=Nf(s.tt-l.tt,l.v,c),p=(s.tt-o.tt)/vr;e=h.mul(1-p).add(u.mul(p)),n=d.mul(1-p).add(f.mul(p))}else{let a;s.tt<Ms[0][0]?a=Ff(Ms[0],s.tt,-vr):a=Ff(Ms[qu-1],s.tt,+vr),e=a.grav.r,n=a.grav.v,i=a.bary}return i||(i=new zd(s.tt)),e=e.sub(i.Sun.r),n=n.sub(i.Sun.v),new Bd(e.x,e.y,e.z,n.x,n.y,n.z,s)}const jS=new uc([[.999432765338654,-.0336771074697641,0],[.0303959428906285,.902057912352809,.430543388542295],[-.0144994559663353,-.430299169409101,.902569881273754]]),il=[{mu:282489428433814e-21,al:[1.446213296021224,3.5515522861824],a:[[.0028210960212903,0,0]],l:[[-.0001925258348666,4.9369589722645,.01358483658305],[-970803596076e-16,4.3188796477322,.01303413843243],[-8988174165e-14,1.9080016428617,.00305064867158],[-553101050262e-16,1.4936156681569,.01293892891155]],z:[[.0041510849668155,4.089939635545,-.01290686414666],[.0006260521444113,1.446188898627,3.5515522949802],[352747346169e-16,2.1256287034578,.00012727416567]],zeta:[[.0003142172466014,2.7964219722923,-.002315096098],[904169207946e-16,1.0477061879627,-.00056920638196]]},{mu:282483274392893e-21,al:[-.3735263437471362,1.76932271112347],a:[[.0044871037804314,0,0],[4324367498e-16,1.819645606291,1.7822295777568]],l:[[.0008576433172936,4.3188693178264,.01303413830805],[.0004549582875086,1.4936531751079,.01293892881962],[.0003248939825174,1.8196494533458,1.7822295777568],[-.0003074250079334,4.9377037005911,.01358483286724],[.0001982386144784,1.907986905476,.00305101212869],[.0001834063551804,2.1402853388529,.00145009789338],[-.0001434383188452,5.622214036663,.89111478887838],[-771939140944e-16,4.300272437235,2.6733443704266]],z:[[-.0093589104136341,4.0899396509039,-.01290686414666],[.0002988994545555,5.9097265185595,1.7693227079462],[.000213903639035,2.1256289300016,.00012727418407],[.0001980963564781,2.743516829265,.00067797343009],[.0001210388158965,5.5839943711203,320566149e-13],[837042048393e-16,1.6094538368039,-.90402165808846],[823525166369e-16,1.4461887708689,3.5515522949802]],zeta:[[.0040404917832303,1.0477063169425,-.0005692064054],[.0002200421034564,3.3368857864364,-.00012491307307],[.0001662544744719,2.4134862374711,0],[590282470983e-16,5.9719930968366,-3056160225e-14]]},{mu:282498184184723e-21,al:[.2874089391143348,.878207923589328],a:[[.0071566594572575,0,0],[1393029911e-15,1.1586745884981,2.6733443704266]],l:[[.0002310797886226,2.1402987195942,.00145009784384],[-.0001828635964118,4.3188672736968,.01303413828263],[.0001512378778204,4.9373102372298,.01358483481252],[-.0001163720969778,4.300265986149,2.6733443704266],[-955478069846e-16,1.4936612842567,.01293892879857],[815246854464e-16,5.6222137132535,.89111478887838],[-801219679602e-16,1.2995922951532,1.0034433456729],[-607017260182e-16,.64978769669238,.50172167043264]],z:[[.0014289811307319,2.1256295942739,.00012727413029],[.000771093122676,5.5836330003496,320643411e-13],[.0005925911780766,4.0899396636448,-.01290686414666],[.0002045597496146,5.2713683670372,-.12523544076106],[.0001785118648258,.28743156721063,.8782079244252],[.0001131999784893,1.4462127277818,3.5515522949802],[-65877816921e-15,2.2702423990985,-1.7951364394537],[497058888328e-16,5.9096792204858,1.7693227129285]],zeta:[[.0015932721570848,3.3368862796665,-.00012491307058],[.0008533093128905,2.4133881688166,0],[.0003513347911037,5.9720789850127,-3056101771e-14],[-.0001441929255483,1.0477061764435,-.00056920632124]]},{mu:282492144889909e-21,al:[-.3620341291375704,.376486233433828],a:[[.0125879701715314,0,0],[3595204947e-15,.64965776007116,.50172168165034],[27580210652e-16,1.808423578151,3.1750660413359]],l:[[.0005586040123824,2.1404207189815,.00145009793231],[-.0003805813868176,2.7358844897853,2972965062e-14],[.0002205152863262,.649796525964,.5017216724358],[.0001877895151158,1.8084787604005,3.1750660413359],[766916975242e-16,6.2720114319755,1.3928364636651],[747056855106e-16,1.2995916202344,1.0034433456729]],z:[[.0073755808467977,5.5836071576084,3206509914e-14],[.0002065924169942,5.9209831565786,.37648624194703],[.0001589869764021,.28744006242623,.8782079244252],[-.0001561131605348,2.1257397865089,.00012727441285],[.0001486043380971,1.4462134301023,3.5515522949802],[635073108731e-16,5.9096803285954,1.7693227129285],[599351698525e-16,4.1125517584798,-2.7985797954589],[540660842731e-16,5.5390350845569,.00286834082283],[-489596900866e-16,4.6218149483338,-.62695712529519]],zeta:[[.0038422977898495,2.4133922085557,0],[.0022453891791894,5.9721736773277,-3056125525e-14],[-.0002604479450559,3.3368746306409,-.00012491309972],[33211214323e-15,5.5604137742337,.00290037688507]]}];class QS{constructor(t,e,n,i){this.io=t,this.europa=e,this.ganymede=n,this.callisto=i}}function tb(s,t,e){const n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=Math.sqrt(t/(n*n*n));let h,d,u,f=i+r*Math.sin(i)-a*Math.cos(i);do h=Math.cos(f),d=Math.sin(f),u=(i-f+r*d-a*h)/(1-r*h-a*d),f+=u;while(Math.abs(u)>=1e-12);h=Math.cos(f),d=Math.sin(f);const p=a*h-r*d,x=-r*h-a*d,g=1/(1+x),_=1/(1+Math.sqrt(1-r*r-a*a)),v=n*(h-r-_*a*p),M=n*(d-a+_*r*p),E=c*g*n*(-d-_*a*x),b=c*g*n*(+h+_*r*x),C=2*Math.sqrt(1-o*o-l*l),y=1-2*l*l,w=1-2*o*o,I=2*l*o;return new Bd(v*y+M*I,v*I+M*w,(o*M-v*l)*C,E*y+b*I,E*I+b*w,(o*b-E*l)*C,s)}function sl(s,t){const e=s.tt+18262.5,n=[0,t.al[0]+e*t.al[1],0,0,0,0];for(let[r,a,o]of t.a)n[0]+=r*Math.cos(a+e*o);for(let[r,a,o]of t.l)n[1]+=r*Math.sin(a+e*o);n[1]%=Nn,n[1]<0&&(n[1]+=Nn);for(let[r,a,o]of t.z){const l=a+e*o;n[2]+=r*Math.cos(l),n[3]+=r*Math.sin(l)}for(let[r,a,o]of t.zeta){const l=a+e*o;n[4]+=r*Math.cos(l),n[5]+=r*Math.sin(l)}const i=tb(s,t.mu,n);return lb(jS,i)}function eb(s){const t=new ws(s);return new QS(sl(t,il[0]),sl(t,il[1]),sl(t,il[2]),sl(t,il[3]))}function qi(s,t){var e=kr(t);if(s in xr)return ml(xr[s],e);if(s===oe.Pluto){const a=$S(e);return new xn(a.x,a.y,a.z,e)}if(s===oe.Sun)return new xn(0,0,0,e);if(s===oe.Moon){var n=ml(xr.Earth,e),i=Hu(e);return new xn(n.x+i.x,n.y+i.y,n.z+i.z,e)}if(s===oe.EMB){const a=ml(xr.Earth,e),o=Hu(e),l=1+IS;return new xn(a.x+o.x/l,a.y+o.y/l,a.z+o.z/l,e)}if(s===oe.SSB)return YS(e);const r=Jm(s);if(r){const a=new WS(r.dec,15*r.ra,r.dist);return ab(a,e)}throw`HelioVector: Unknown body "${s}"`}function nb(s,t){let e=t,n=0;for(let i=0;i<10;++i){const r=s(e),a=r.Length()/wS;if(a>1)throw"Object is too distant for light-travel solver.";const o=t.AddDays(-a);if(n=Math.abs(o.tt-e.tt),n<1e-9)return r;e=o}throw`Light-travel time solver did not converge: dt = ${n}`}class ib{constructor(t,e,n,i){this.observerBody=t,this.targetBody=e,this.aberration=n,this.observerPos=i}Position(t){this.aberration&&(this.observerPos=qi(this.observerBody,t));const e=qi(this.targetBody,t);return new xn(e.x-this.observerPos.x,e.y-this.observerPos.y,e.z-this.observerPos.z,t)}}function sb(s,t,e,n){const i=kr(s);if(Jm(e)){const o=qi(e,i),l=qi(t,i);return new xn(o.x-l.x,o.y-l.y,o.z-l.z,i)}let r;r=qi(t,i);const a=new ib(t,e,n,r);return nb(o=>a.Position(o),i)}function rb(s,t,e){const n=kr(t);switch(s){case oe.Earth:return new xn(0,0,0,n);case oe.Moon:return Hu(n);default:const i=sb(n,oe.Earth,s,e);return i.t=n,i}}var Bf;(function(s){s[s.Pericenter=0]="Pericenter",s[s.Apocenter=1]="Apocenter"})(Bf||(Bf={}));function ab(s,t){t=kr(t);const e=s.lat*Fu,n=s.lon*Fu,i=s.dist*Math.cos(e);return new xn(i*Math.cos(n),i*Math.sin(n),s.dist*Math.sin(e),t)}function ob(s,t){return new xn(s.rot[0][0]*t.x+s.rot[1][0]*t.y+s.rot[2][0]*t.z,s.rot[0][1]*t.x+s.rot[1][1]*t.y+s.rot[2][1]*t.z,s.rot[0][2]*t.x+s.rot[1][2]*t.y+s.rot[2][2]*t.z,t.t)}function lb(s,t){return new Bd(s.rot[0][0]*t.x+s.rot[1][0]*t.y+s.rot[2][0]*t.z,s.rot[0][1]*t.x+s.rot[1][1]*t.y+s.rot[2][1]*t.z,s.rot[0][2]*t.x+s.rot[1][2]*t.y+s.rot[2][2]*t.z,s.rot[0][0]*t.vx+s.rot[1][0]*t.vy+s.rot[2][0]*t.vz,s.rot[0][1]*t.vx+s.rot[1][1]*t.vy+s.rot[2][1]*t.vz,s.rot[0][2]*t.vx+s.rot[1][2]*t.vy+s.rot[2][2]*t.vz,t.t)}function cb(){return new uc([[1,0,0],[0,.9174821430670688,-.3977769691083922],[0,.3977769691083922,.9174821430670688]])}var zf;(function(s){s.Penumbral="penumbral",s.Partial="partial",s.Annular="annular",s.Total="total"})(zf||(zf={}));var kf;(function(s){s[s.Invalid=0]="Invalid",s[s.Ascending=1]="Ascending",s[s.Descending=-1]="Descending"})(kf||(kf={}));function hb(s){const t=2*Math.PI;let e=s%t;return e>Math.PI&&(e-=t),e<=-Math.PI&&(e+=t),e}function ub(s,t,e=1e-12,n=100){const i=hb(s);let r=t<.8?i:Math.PI*(i===0?1:Math.sign(i));for(let a=0;a<n;a++){const o=(r-t*Math.sin(r)-i)/(1-t*Math.cos(r));if(r-=o,Math.abs(o)<e)break}return r}function db(s){const t=ub(s.M,s.e),e=s.a*(Math.cos(t)-s.e),n=s.a*Math.sqrt(1-s.e*s.e)*Math.sin(t),i=Math.cos(s.om),r=Math.sin(s.om),a=Math.cos(s.w),o=Math.sin(s.w),l=Math.cos(s.i),c=Math.sin(s.i),h=(i*a-r*o*l)*e+(-i*o-r*a*l)*n,d=(r*a+i*o*l)*e+(-r*o+i*a*l)*n,u=o*c*e+a*c*n;return{x:h,y:d,z:u}}const fb=cb(),pb={mercury:oe.Mercury,venus:oe.Venus,earth:oe.Earth,mars:oe.Mars,jupiter:oe.Jupiter,saturn:oe.Saturn,uranus:oe.Uranus,neptune:oe.Neptune,pluto:oe.Pluto};function iu(s){const t=ob(fb,s);return{x:t.x,y:t.y,z:t.z}}function mb(s,t){const e=s.kepler,n=360/e.periodDays,i=(e.maDeg+n*(t-Km))*_r,r=db({a:e.aKm,e:e.e,i:e.iDeg*_r,om:e.omDeg*_r,w:e.wDeg*_r,M:i});return{x:ni(r.x),y:ni(r.y),z:ni(r.z)}}function tg(s,t={}){const e=kr(Nd(s));t.sun={x:0,y:0,z:0};for(const l of bi)l.orbitSource==="astronomy-engine"&&l.type!=="moon"&&(t[l.id]=iu(qi(pb[l.id],e)));const n=qi(oe.Earth,e),i=rb(oe.Moon,e,!1);t.moon=iu(new xn(n.x+i.x,n.y+i.y,n.z+i.z,e));const r=eb(e),a=qi(oe.Jupiter,e),o={io:r.io,europa:r.europa,ganymede:r.ganymede,callisto:r.callisto};for(const l in o){const c=o[l];t[l]=iu(new xn(a.x+c.x,a.y+c.y,a.z+c.z,e))}for(const l of bi)if(l.orbitSource==="kepler"){const c=t[l.parent],h=mb(l,s);t[l.id]={x:c.x+h.x,y:c.y+h.y,z:c.z+h.z}}return t}const Vf=100*365.25;class gb{constructor(t=Nu(Date.now())){et(this,"jd");et(this,"playing",!1);et(this,"speed",1);et(this,"jdMin");et(this,"jdMax");this.jdMin=t-Vf,this.jdMax=t+Vf,this.jd=this.clamp(t)}clamp(t){return Math.min(this.jdMax,Math.max(this.jdMin,t))}advance(t){if(!this.playing||this.speed===0)return;const e=this.jd+this.speed*t;this.jd=this.clamp(e),this.jd!==e&&(this.playing=!1)}setNow(){this.jd=this.clamp(Nu(Date.now()))}}function _b(s=1){return{mode:"true",position:t=>({x:t.x*s,y:t.y*s,z:t.z*s}),radius:t=>t*s}}const xb=1495978707e-1;function vb(s={}){const t=s.distK??10,e=s.distExp??.5,n=s.sizeK??.05,i=s.sizeExp??.33;return{mode:"visual",position:r=>{const a=Math.hypot(r.x,r.y,r.z);if(a===0)return{x:0,y:0,z:0};const o=t*Math.pow(a,e)/a;return{x:r.x*o,y:r.y*o,z:r.z*o}},radius:r=>n*Math.pow(r*xb,i)}}function yb(){const s=new qm({antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance",stencil:!1});return s.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),s.setSize(window.innerWidth,window.innerHeight),s.toneMapping=Ka,s.toneMappingExposure=1,s.outputColorSpace=Be,s}const gl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Vr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Mb=new Fr(-1,1,1,-1,0,1);class Sb extends Zt{constructor(){super(),this.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ct([0,2,0,0,2,0],2))}}const bb=new Sb;class kd{constructor(t){this._mesh=new be(bb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Mb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Tb extends Vr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rr.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new kd(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Hf extends Vr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Eb extends Vr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class wb{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new j);this._width=n.width,this._height=n.height,e=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tb(gl),this.copyPass.material.blending=Hn,this.timer=new nh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Hf!==void 0&&(a instanceof Hf?n=!0:a instanceof Eb&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ab extends Vr{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new vt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Cb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Pr extends Vr{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new j(t.x,t.y):new j(256,256),this.clearColor=new vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(r,a,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Xe(r,a,{type:hn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new Xe(r,a,{type:hn});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=Cb;this.highPassUniforms=Rr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new j(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rr.clone(gl.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:gl.vertexShader,fragmentShader:gl.fragmentShader,premultipliedAlpha:!0,blending:Sr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new vt,this._oldClearAlpha=1,this._basic=new Pn,this._fsQuad=new kd(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Pr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Pr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new ze({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Pr.BlurDirectionX=new j(1,0);Pr.BlurDirectionY=new j(0,1);const rl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Rb extends Vr{constructor(){super(),this.isOutputPass=!0,this.uniforms=Rr.clone(rl.uniforms),this.material=new Qc({name:rl.name,uniforms:this.uniforms,vertexShader:rl.vertexShader,fragmentShader:rl.fragmentShader}),this._fsQuad=new kd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_c?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ka?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===yc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function eg(s,t,e,n){const i=s.getSize(new j),r=new Xe(i.x,i.y,{type:hn,samples:n.msaaSamples}),a=new wb(s,r);a.setPixelRatio(s.getPixelRatio()),a.addPass(new Ab(t,e));const o=new Pr(new j(i.x*n.bloomScale,i.y*n.bloomScale),.7,.5,.85);a.addPass(o);const l=new Rb;return a.addPass(l),{composer:a,bloom:o,setSize(c,h){a.setSize(c,h),o.setSize(c*n.bloomScale,h*n.bloomScale)},render(){a.render()},dispose(){o.dispose(),l.dispose(),a.dispose()}}}function Pb(s){return s.extensions.has("EXT_color_buffer_half_float")||s.extensions.has("EXT_color_buffer_float")}const so={performance:{tier:"performance",label:"Fast · 120fps",targetFps:120,dpr:1,post:!1,msaaSamples:0,bloomScale:.5,beltCount:1500},quality:{tier:"quality",label:"Balanced · 60fps",targetFps:60,dpr:1.5,post:!0,msaaSamples:0,bloomScale:.5,beltCount:2500},highest:{tier:"highest",label:"Beautiful · 30fps",targetFps:30,dpr:2,post:!0,msaaSamples:0,bloomScale:1,beltCount:3500}},Ib=so.highest.beltCount,Db=["performance","quality","highest"];function Lb(s){return s==="quality"||s==="highest"?s:"performance"}/*!
 * camera-controls
 * https://github.com/yomotsu/camera-controls
 * (c) 2017 @yomotsu
 * Released under the MIT License.
 */const Ae={LEFT:1,RIGHT:2,MIDDLE:4},G=Object.freeze({NONE:0,ROTATE:1,TRUCK:2,SCREEN_PAN:4,OFFSET:8,DOLLY:16,ZOOM:32,TOUCH_ROTATE:64,TOUCH_TRUCK:128,TOUCH_SCREEN_PAN:256,TOUCH_OFFSET:512,TOUCH_DOLLY:1024,TOUCH_ZOOM:2048,TOUCH_DOLLY_TRUCK:4096,TOUCH_DOLLY_SCREEN_PAN:8192,TOUCH_DOLLY_OFFSET:16384,TOUCH_DOLLY_ROTATE:32768,TOUCH_ZOOM_TRUCK:65536,TOUCH_ZOOM_OFFSET:131072,TOUCH_ZOOM_SCREEN_PAN:262144,TOUCH_ZOOM_ROTATE:524288}),hr={NONE:0,IN:1,OUT:-1};function ps(s){return s.isPerspectiveCamera}function ki(s){return s.isOrthographicCamera}const zi=Math.PI*2,Gf=Math.PI/2,ng=1e-5,ra=Math.PI/180;function On(s,t,e){return Math.max(t,Math.min(e,s))}function Ee(s,t=ng){return Math.abs(s)<t}function _e(s,t,e=ng){return Ee(s-t,e)}function Wf(s,t){return Math.round(s/t)*t}function aa(s){return isFinite(s)?s:s<0?-Number.MAX_VALUE:Number.MAX_VALUE}function oa(s){return Math.abs(s)<Number.MAX_VALUE?s:s*(1/0)}function al(s,t,e,n,i=1/0,r){n=Math.max(1e-4,n);const a=2/n,o=a*r,l=1/(1+o+.48*o*o+.235*o*o*o);let c=s-t;const h=t,d=i*n;c=On(c,-d,d),t=s-c;const u=(e.value+a*c)*r;e.value=(e.value-a*u)*l;let f=t+(c+u)*l;return h-s>0==f>h&&(f=h,e.value=(f-h)/r),f}function Xf(s,t,e,n,i=1/0,r,a){n=Math.max(1e-4,n);const o=2/n,l=o*r,c=1/(1+l+.48*l*l+.235*l*l*l);let h=t.x,d=t.y,u=t.z,f=s.x-h,p=s.y-d,x=s.z-u;const g=h,m=d,_=u,v=i*n,M=v*v,E=f*f+p*p+x*x;if(E>M){const L=Math.sqrt(E);f=f/L*v,p=p/L*v,x=x/L*v}h=s.x-f,d=s.y-p,u=s.z-x;const b=(e.x+o*f)*r,C=(e.y+o*p)*r,y=(e.z+o*x)*r;e.x=(e.x-o*b)*c,e.y=(e.y-o*C)*c,e.z=(e.z-o*y)*c,a.x=h+(f+b)*c,a.y=d+(p+C)*c,a.z=u+(x+y)*c;const w=g-s.x,I=m-s.y,P=_-s.z,O=a.x-g,W=a.y-m,Y=a.z-_;return w*O+I*W+P*Y>0&&(a.x=g,a.y=m,a.z=_,e.x=(a.x-g)/r,e.y=(a.y-m)/r,e.z=(a.z-_)/r),a}function su(s,t){t.set(0,0),s.forEach(e=>{t.x+=e.clientX,t.y+=e.clientY}),t.x/=s.length,t.y/=s.length}function ru(s,t){return ki(s)?(console.warn(`${t} is not supported in OrthographicCamera`),!0):!1}class Ub{constructor(){et(this,"_listeners",{})}addEventListener(t,e){const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}removeAllEventListeners(t){if(!t){this._listeners={};return}Array.isArray(this._listeners[t])&&(this._listeners[t].length=0)}dispatchEvent(t){const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t)}}}const Ob="3.1.2",ol=1/8;var ip;const Nb=/Mac/.test((ip=globalThis==null?void 0:globalThis.navigator)==null?void 0:ip.platform);let Yt,Yf,ll,au,fn,ie,fe,ur,la,ti,ei,ms,qf,Zf,bn,dr,fr,Kf,ou,Jf,lu,cu,cl;class Xa extends Ub{constructor(e,n){super();et(this,"minPolarAngle",0);et(this,"maxPolarAngle",Math.PI);et(this,"minAzimuthAngle",-1/0);et(this,"maxAzimuthAngle",1/0);et(this,"minDistance",Number.EPSILON);et(this,"maxDistance",1/0);et(this,"infinityDolly",!1);et(this,"minZoom",.01);et(this,"maxZoom",1/0);et(this,"smoothTime",.25);et(this,"draggingSmoothTime",.125);et(this,"maxSpeed",1/0);et(this,"azimuthRotateSpeed",1);et(this,"polarRotateSpeed",1);et(this,"dollySpeed",1);et(this,"dollyDragInverted",!1);et(this,"truckSpeed",2);et(this,"dollyToCursor",!1);et(this,"dragToOffset",!1);et(this,"boundaryFriction",0);et(this,"restThreshold",.01);et(this,"colliderMeshes",[]);et(this,"mouseButtons");et(this,"touches");et(this,"cancel",()=>{});et(this,"lockPointer");et(this,"unlockPointer");et(this,"_enabled",!0);et(this,"_camera");et(this,"_yAxisUpSpace");et(this,"_yAxisUpSpaceInverse");et(this,"_state",G.NONE);et(this,"_domElement");et(this,"_viewport",null);et(this,"_target");et(this,"_targetEnd");et(this,"_focalOffset");et(this,"_focalOffsetEnd");et(this,"_spherical");et(this,"_sphericalEnd");et(this,"_lastDistance");et(this,"_zoom");et(this,"_zoomEnd");et(this,"_lastZoom");et(this,"_cameraUp0");et(this,"_target0");et(this,"_position0");et(this,"_zoom0");et(this,"_focalOffset0");et(this,"_dollyControlCoord");et(this,"_changedDolly",0);et(this,"_changedZoom",0);et(this,"_nearPlaneCorners");et(this,"_hasRested",!0);et(this,"_boundary");et(this,"_boundaryEnclosesCamera",!1);et(this,"_needsUpdate",!0);et(this,"_updatedLastTime",!1);et(this,"_elementRect",new DOMRect);et(this,"_isDragging",!1);et(this,"_dragNeedsUpdate",!0);et(this,"_activePointers",[]);et(this,"_lockedPointer",null);et(this,"_interactiveArea",new DOMRect(0,0,1,1));et(this,"_isUserControllingRotate",!1);et(this,"_isUserControllingDolly",!1);et(this,"_isUserControllingTruck",!1);et(this,"_isUserControllingOffset",!1);et(this,"_isUserControllingZoom",!1);et(this,"_lastDollyDirection",hr.NONE);et(this,"_thetaVelocity",{value:0});et(this,"_phiVelocity",{value:0});et(this,"_radiusVelocity",{value:0});et(this,"_targetVelocity",new Yt.Vector3);et(this,"_focalOffsetVelocity",new Yt.Vector3);et(this,"_zoomVelocity",{value:0});et(this,"_truckInternal",(e,n,i,r)=>{let a,o;if(ps(this._camera)){const l=ie.copy(this._camera.position).sub(this._target),c=this._camera.getEffectiveFOV()*ra,h=l.length()*Math.tan(c*.5);a=this.truckSpeed*e*h/this._elementRect.height,o=this.truckSpeed*n*h/this._elementRect.height}else if(ki(this._camera)){const l=this._camera;a=this.truckSpeed*e*(l.right-l.left)/l.zoom/this._elementRect.width,o=this.truckSpeed*n*(l.top-l.bottom)/l.zoom/this._elementRect.height}else return;r?(i?this.setFocalOffset(this._focalOffsetEnd.x+a,this._focalOffsetEnd.y,this._focalOffsetEnd.z,!0):this.truck(a,0,!0),this.forward(-o,!0)):i?this.setFocalOffset(this._focalOffsetEnd.x+a,this._focalOffsetEnd.y+o,this._focalOffsetEnd.z,!0):this.truck(a,o,!0)});et(this,"_rotateInternal",(e,n)=>{const i=zi*this.azimuthRotateSpeed*e/this._elementRect.height,r=zi*this.polarRotateSpeed*n/this._elementRect.height;this.rotate(i,r,!0)});et(this,"_dollyInternal",(e,n,i)=>{const r=Math.pow(.95,-e*this.dollySpeed),a=this._sphericalEnd.radius,o=this._sphericalEnd.radius*r,l=On(o,this.minDistance,this.maxDistance),c=l-o;this.infinityDolly&&this.dollyToCursor?this._dollyToNoClamp(o,!0):this.infinityDolly&&!this.dollyToCursor?(this.dollyInFixed(c,!0),this._dollyToNoClamp(l,!0)):this._dollyToNoClamp(l,!0),this.dollyToCursor&&(this._changedDolly+=(this.infinityDolly?o:l)-a,this._dollyControlCoord.set(n,i)),this._lastDollyDirection=Math.sign(-e)});et(this,"_zoomInternal",(e,n,i)=>{const r=Math.pow(.95,e*this.dollySpeed),a=this._zoom,o=this._zoom*r;this.zoomTo(o,!0),this.dollyToCursor&&(this._changedZoom+=o-a,this._dollyControlCoord.set(n,i))});typeof Yt>"u"&&console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."),this._camera=e,this._yAxisUpSpace=new Yt.Quaternion().setFromUnitVectors(this._camera.up,ll),this._yAxisUpSpaceInverse=this._yAxisUpSpace.clone().invert(),this._state=G.NONE,this._target=new Yt.Vector3,this._targetEnd=this._target.clone(),this._focalOffset=new Yt.Vector3,this._focalOffsetEnd=this._focalOffset.clone(),this._spherical=new Yt.Spherical().setFromVector3(ie.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)),this._sphericalEnd=this._spherical.clone(),this._lastDistance=this._spherical.radius,this._zoom=this._camera.zoom,this._zoomEnd=this._zoom,this._lastZoom=this._zoom,this._nearPlaneCorners=[new Yt.Vector3,new Yt.Vector3,new Yt.Vector3,new Yt.Vector3],this._updateNearPlaneCorners(),this._boundary=new Yt.Box3(new Yt.Vector3(-1/0,-1/0,-1/0),new Yt.Vector3(1/0,1/0,1/0)),this._cameraUp0=this._camera.up.clone(),this._target0=this._target.clone(),this._position0=this._camera.position.clone(),this._zoom0=this._zoom,this._focalOffset0=this._focalOffset.clone(),this._dollyControlCoord=new Yt.Vector2,this.mouseButtons={left:G.ROTATE,middle:G.DOLLY,right:G.TRUCK,wheel:ps(this._camera)?G.DOLLY:ki(this._camera)?G.ZOOM:G.NONE},this.touches={one:G.TOUCH_ROTATE,two:ps(this._camera)?G.TOUCH_DOLLY_TRUCK:ki(this._camera)?G.TOUCH_ZOOM_TRUCK:G.NONE,three:G.TOUCH_TRUCK};const i=new Yt.Vector2,r=new Yt.Vector2,a=new Yt.Vector2,o=_=>{if(!this._enabled||!this._domElement)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){const E=this._domElement.getBoundingClientRect(),b=_.clientX/E.width,C=_.clientY/E.height;if(b<this._interactiveArea.left||b>this._interactiveArea.right||C<this._interactiveArea.top||C>this._interactiveArea.bottom)return}const v=_.pointerType!=="mouse"?null:(_.buttons&Ae.LEFT)===Ae.LEFT?Ae.LEFT:(_.buttons&Ae.MIDDLE)===Ae.MIDDLE?Ae.MIDDLE:(_.buttons&Ae.RIGHT)===Ae.RIGHT?Ae.RIGHT:null;if(v!==null){const E=this._findPointerByMouseButton(v);E&&this._disposePointer(E)}if((_.buttons&Ae.LEFT)===Ae.LEFT&&this._lockedPointer)return;const M={pointerId:_.pointerId,clientX:_.clientX,clientY:_.clientY,deltaX:0,deltaY:0,mouseButton:v};this._activePointers.push(M),this._domElement.ownerDocument.removeEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c),this._domElement.ownerDocument.addEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",c),this._isDragging=!0,f(_)},l=_=>{_.cancelable&&_.preventDefault();const v=_.pointerId,M=this._lockedPointer||this._findPointerById(v);if(M){if(M.clientX=_.clientX,M.clientY=_.clientY,M.deltaX=_.movementX,M.deltaY=_.movementY,this._state=0,_.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else(!this._isDragging&&this._lockedPointer||this._isDragging&&(_.buttons&Ae.LEFT)===Ae.LEFT)&&(this._state=this._state|this.mouseButtons.left),this._isDragging&&(_.buttons&Ae.MIDDLE)===Ae.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),this._isDragging&&(_.buttons&Ae.RIGHT)===Ae.RIGHT&&(this._state=this._state|this.mouseButtons.right);p()}},c=_=>{const v=this._findPointerById(_.pointerId);if(!(v&&v===this._lockedPointer)){if(v&&this._disposePointer(v),_.pointerType==="touch")switch(this._activePointers.length){case 0:this._state=G.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=G.NONE;x()}};let h=-1;const d=_=>{if(!this._domElement||!this._enabled||this.mouseButtons.wheel===G.NONE)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){const y=this._domElement.getBoundingClientRect(),w=_.clientX/y.width,I=_.clientY/y.height;if(w<this._interactiveArea.left||w>this._interactiveArea.right||I<this._interactiveArea.top||I>this._interactiveArea.bottom)return}if(_.preventDefault(),this.dollyToCursor||this.mouseButtons.wheel===G.ROTATE||this.mouseButtons.wheel===G.TRUCK){const y=performance.now();h-y<1e3&&this._getClientRect(this._elementRect),h=y}const v=Nb?-1:-3,M=_.deltaMode===1&&!_.ctrlKey?_.deltaY/v:_.deltaY/(v*10),E=this.dollyToCursor?(_.clientX-this._elementRect.x)/this._elementRect.width*2-1:0,b=this.dollyToCursor?(_.clientY-this._elementRect.y)/this._elementRect.height*-2+1:0;switch(_.ctrlKey?G.ZOOM:this.mouseButtons.wheel){case G.ROTATE:{this._rotateInternal(_.deltaX,_.deltaY),this._isUserControllingRotate=!0;break}case G.TRUCK:{this._truckInternal(_.deltaX,_.deltaY,!1,!1),this._isUserControllingTruck=!0;break}case G.SCREEN_PAN:{this._truckInternal(_.deltaX,_.deltaY,!1,!0),this._isUserControllingTruck=!0;break}case G.OFFSET:{this._truckInternal(_.deltaX,_.deltaY,!0,!1),this._isUserControllingOffset=!0;break}case G.DOLLY:{this._dollyInternal(-M,E,b),this._isUserControllingDolly=!0;break}case G.ZOOM:{this._zoomInternal(-M,E,b),this._isUserControllingZoom=!0;break}}this.dispatchEvent({type:"control"})},u=_=>{if(!(!this._domElement||!this._enabled)){if(this.mouseButtons.right===Xa.ACTION.NONE){const v=_ instanceof PointerEvent?_.pointerId:0,M=this._findPointerById(v);M&&this._disposePointer(M),this._domElement.ownerDocument.removeEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c);return}_.preventDefault()}},f=_=>{if(!this._enabled)return;if(su(this._activePointers,fn),this._getClientRect(this._elementRect),i.copy(fn),r.copy(fn),this._activePointers.length>=2){const M=fn.x-this._activePointers[1].clientX,E=fn.y-this._activePointers[1].clientY,b=Math.sqrt(M*M+E*E);a.set(0,b);const C=(this._activePointers[0].clientX+this._activePointers[1].clientX)*.5,y=(this._activePointers[0].clientY+this._activePointers[1].clientY)*.5;r.set(C,y)}if(this._state=0,!_)this._lockedPointer&&(this._state=this._state|this.mouseButtons.left);else if("pointerType"in _&&_.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else!this._lockedPointer&&(_.buttons&Ae.LEFT)===Ae.LEFT&&(this._state=this._state|this.mouseButtons.left),(_.buttons&Ae.MIDDLE)===Ae.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(_.buttons&Ae.RIGHT)===Ae.RIGHT&&(this._state=this._state|this.mouseButtons.right);((this._state&G.ROTATE)===G.ROTATE||(this._state&G.TOUCH_ROTATE)===G.TOUCH_ROTATE||(this._state&G.TOUCH_DOLLY_ROTATE)===G.TOUCH_DOLLY_ROTATE||(this._state&G.TOUCH_ZOOM_ROTATE)===G.TOUCH_ZOOM_ROTATE)&&(this._sphericalEnd.theta=this._spherical.theta,this._sphericalEnd.phi=this._spherical.phi,this._thetaVelocity.value=0,this._phiVelocity.value=0),((this._state&G.TRUCK)===G.TRUCK||(this._state&G.SCREEN_PAN)===G.SCREEN_PAN||(this._state&G.TOUCH_TRUCK)===G.TOUCH_TRUCK||(this._state&G.TOUCH_SCREEN_PAN)===G.TOUCH_SCREEN_PAN||(this._state&G.TOUCH_DOLLY_TRUCK)===G.TOUCH_DOLLY_TRUCK||(this._state&G.TOUCH_DOLLY_SCREEN_PAN)===G.TOUCH_DOLLY_SCREEN_PAN||(this._state&G.TOUCH_ZOOM_TRUCK)===G.TOUCH_ZOOM_TRUCK||(this._state&G.TOUCH_ZOOM_SCREEN_PAN)===G.TOUCH_DOLLY_SCREEN_PAN)&&(this._targetEnd.copy(this._target),this._targetVelocity.set(0,0,0)),((this._state&G.DOLLY)===G.DOLLY||(this._state&G.TOUCH_DOLLY)===G.TOUCH_DOLLY||(this._state&G.TOUCH_DOLLY_TRUCK)===G.TOUCH_DOLLY_TRUCK||(this._state&G.TOUCH_DOLLY_SCREEN_PAN)===G.TOUCH_DOLLY_SCREEN_PAN||(this._state&G.TOUCH_DOLLY_OFFSET)===G.TOUCH_DOLLY_OFFSET||(this._state&G.TOUCH_DOLLY_ROTATE)===G.TOUCH_DOLLY_ROTATE)&&(this._sphericalEnd.radius=this._spherical.radius,this._radiusVelocity.value=0),((this._state&G.ZOOM)===G.ZOOM||(this._state&G.TOUCH_ZOOM)===G.TOUCH_ZOOM||(this._state&G.TOUCH_ZOOM_TRUCK)===G.TOUCH_ZOOM_TRUCK||(this._state&G.TOUCH_ZOOM_SCREEN_PAN)===G.TOUCH_ZOOM_SCREEN_PAN||(this._state&G.TOUCH_ZOOM_OFFSET)===G.TOUCH_ZOOM_OFFSET||(this._state&G.TOUCH_ZOOM_ROTATE)===G.TOUCH_ZOOM_ROTATE)&&(this._zoomEnd=this._zoom,this._zoomVelocity.value=0),((this._state&G.OFFSET)===G.OFFSET||(this._state&G.TOUCH_OFFSET)===G.TOUCH_OFFSET||(this._state&G.TOUCH_DOLLY_OFFSET)===G.TOUCH_DOLLY_OFFSET||(this._state&G.TOUCH_ZOOM_OFFSET)===G.TOUCH_ZOOM_OFFSET)&&(this._focalOffsetEnd.copy(this._focalOffset),this._focalOffsetVelocity.set(0,0,0)),this.dispatchEvent({type:"controlstart"})},p=()=>{if(!this._enabled||!this._dragNeedsUpdate)return;this._dragNeedsUpdate=!1,su(this._activePointers,fn);const v=this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement?this._lockedPointer||this._activePointers[0]:null,M=v?-v.deltaX:r.x-fn.x,E=v?-v.deltaY:r.y-fn.y;if(r.copy(fn),((this._state&G.ROTATE)===G.ROTATE||(this._state&G.TOUCH_ROTATE)===G.TOUCH_ROTATE||(this._state&G.TOUCH_DOLLY_ROTATE)===G.TOUCH_DOLLY_ROTATE||(this._state&G.TOUCH_ZOOM_ROTATE)===G.TOUCH_ZOOM_ROTATE)&&(this._rotateInternal(M,E),this._isUserControllingRotate=!0),(this._state&G.DOLLY)===G.DOLLY||(this._state&G.ZOOM)===G.ZOOM){const b=this.dollyToCursor?(i.x-this._elementRect.x)/this._elementRect.width*2-1:0,C=this.dollyToCursor?(i.y-this._elementRect.y)/this._elementRect.height*-2+1:0,y=this.dollyDragInverted?-1:1;(this._state&G.DOLLY)===G.DOLLY?(this._dollyInternal(y*E*ol,b,C),this._isUserControllingDolly=!0):(this._zoomInternal(y*E*ol,b,C),this._isUserControllingZoom=!0)}if((this._state&G.TOUCH_DOLLY)===G.TOUCH_DOLLY||(this._state&G.TOUCH_ZOOM)===G.TOUCH_ZOOM||(this._state&G.TOUCH_DOLLY_TRUCK)===G.TOUCH_DOLLY_TRUCK||(this._state&G.TOUCH_ZOOM_TRUCK)===G.TOUCH_ZOOM_TRUCK||(this._state&G.TOUCH_DOLLY_SCREEN_PAN)===G.TOUCH_DOLLY_SCREEN_PAN||(this._state&G.TOUCH_ZOOM_SCREEN_PAN)===G.TOUCH_ZOOM_SCREEN_PAN||(this._state&G.TOUCH_DOLLY_OFFSET)===G.TOUCH_DOLLY_OFFSET||(this._state&G.TOUCH_ZOOM_OFFSET)===G.TOUCH_ZOOM_OFFSET||(this._state&G.TOUCH_DOLLY_ROTATE)===G.TOUCH_DOLLY_ROTATE||(this._state&G.TOUCH_ZOOM_ROTATE)===G.TOUCH_ZOOM_ROTATE){const b=fn.x-this._activePointers[1].clientX,C=fn.y-this._activePointers[1].clientY,y=Math.sqrt(b*b+C*C),w=a.y-y;a.set(0,y);const I=this.dollyToCursor?(r.x-this._elementRect.x)/this._elementRect.width*2-1:0,P=this.dollyToCursor?(r.y-this._elementRect.y)/this._elementRect.height*-2+1:0;(this._state&G.TOUCH_DOLLY)===G.TOUCH_DOLLY||(this._state&G.TOUCH_DOLLY_ROTATE)===G.TOUCH_DOLLY_ROTATE||(this._state&G.TOUCH_DOLLY_TRUCK)===G.TOUCH_DOLLY_TRUCK||(this._state&G.TOUCH_DOLLY_SCREEN_PAN)===G.TOUCH_DOLLY_SCREEN_PAN||(this._state&G.TOUCH_DOLLY_OFFSET)===G.TOUCH_DOLLY_OFFSET?(this._dollyInternal(w*ol,I,P),this._isUserControllingDolly=!0):(this._zoomInternal(w*ol,I,P),this._isUserControllingZoom=!0)}((this._state&G.TRUCK)===G.TRUCK||(this._state&G.TOUCH_TRUCK)===G.TOUCH_TRUCK||(this._state&G.TOUCH_DOLLY_TRUCK)===G.TOUCH_DOLLY_TRUCK||(this._state&G.TOUCH_ZOOM_TRUCK)===G.TOUCH_ZOOM_TRUCK)&&(this._truckInternal(M,E,!1,!1),this._isUserControllingTruck=!0),((this._state&G.SCREEN_PAN)===G.SCREEN_PAN||(this._state&G.TOUCH_SCREEN_PAN)===G.TOUCH_SCREEN_PAN||(this._state&G.TOUCH_DOLLY_SCREEN_PAN)===G.TOUCH_DOLLY_SCREEN_PAN||(this._state&G.TOUCH_ZOOM_SCREEN_PAN)===G.TOUCH_ZOOM_SCREEN_PAN)&&(this._truckInternal(M,E,!1,!0),this._isUserControllingTruck=!0),((this._state&G.OFFSET)===G.OFFSET||(this._state&G.TOUCH_OFFSET)===G.TOUCH_OFFSET||(this._state&G.TOUCH_DOLLY_OFFSET)===G.TOUCH_DOLLY_OFFSET||(this._state&G.TOUCH_ZOOM_OFFSET)===G.TOUCH_ZOOM_OFFSET)&&(this._truckInternal(M,E,!0,!1),this._isUserControllingOffset=!0),this.dispatchEvent({type:"control"})},x=()=>{su(this._activePointers,fn),r.copy(fn),this._dragNeedsUpdate=!1,(this._activePointers.length===0||this._activePointers.length===1&&this._activePointers[0]===this._lockedPointer)&&(this._isDragging=!1),this._activePointers.length===0&&this._domElement&&(this._domElement.ownerDocument.removeEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c),this.dispatchEvent({type:"controlend"}))};this.lockPointer=()=>{!this._enabled||!this._domElement||(this.cancel(),this._lockedPointer={pointerId:-1,clientX:0,clientY:0,deltaX:0,deltaY:0,mouseButton:null},this._activePointers.push(this._lockedPointer),this._domElement.ownerDocument.removeEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c),this._domElement.requestPointerLock(),this._domElement.ownerDocument.addEventListener("pointerlockchange",g),this._domElement.ownerDocument.addEventListener("pointerlockerror",m),this._domElement.ownerDocument.addEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",c),f())},this.unlockPointer=()=>{var _,v,M;this._lockedPointer!==null&&(this._disposePointer(this._lockedPointer),this._lockedPointer=null),(_=this._domElement)==null||_.ownerDocument.exitPointerLock(),(v=this._domElement)==null||v.ownerDocument.removeEventListener("pointerlockchange",g),(M=this._domElement)==null||M.ownerDocument.removeEventListener("pointerlockerror",m),this.cancel()};const g=()=>{this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement||this.unlockPointer()},m=()=>{this.unlockPointer()};this._addAllEventListeners=_=>{this._domElement=_,this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none",this._domElement.addEventListener("pointerdown",o),this._domElement.addEventListener("pointercancel",c),this._domElement.addEventListener("wheel",d,{passive:!1}),this._domElement.addEventListener("contextmenu",u)},this._removeAllEventListeners=()=>{this._domElement&&(this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect="",this._domElement.removeEventListener("pointerdown",o),this._domElement.removeEventListener("pointercancel",c),this._domElement.removeEventListener("wheel",d,{passive:!1}),this._domElement.removeEventListener("contextmenu",u),this._domElement.ownerDocument.removeEventListener("pointermove",l,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",c),this._domElement.ownerDocument.removeEventListener("pointerlockchange",g),this._domElement.ownerDocument.removeEventListener("pointerlockerror",m))},this.cancel=()=>{this._state!==G.NONE&&(this._state=G.NONE,this._activePointers.length=0,x())},n&&this.connect(n),this.update(0)}static install(e){Yt=e.THREE,Yf=Object.freeze(new Yt.Vector3(0,0,0)),ll=Object.freeze(new Yt.Vector3(0,1,0)),au=Object.freeze(new Yt.Vector3(0,0,1)),fn=new Yt.Vector2,ie=new Yt.Vector3,fe=new Yt.Vector3,ur=new Yt.Vector3,la=new Yt.Vector3,ti=new Yt.Vector3,ei=new Yt.Vector3,ms=new Yt.Vector3,qf=new Yt.Vector3,Zf=new Yt.Vector3,bn=new Yt.Spherical,dr=new Yt.Spherical,fr=new Yt.Box3,Kf=new Yt.Box3,ou=new Yt.Sphere,Jf=new Yt.Quaternion,lu=new Yt.Quaternion,cu=new Yt.Matrix4,cl=new Yt.Raycaster}static get ACTION(){return G}set verticalDragToForward(e){console.warn("camera-controls: `verticalDragToForward` was removed. Use `mouseButtons.left = CameraControls.ACTION.SCREEN_PAN` instead.")}get camera(){return this._camera}set camera(e){this._camera=e,this.updateCameraUp(),this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._domElement&&(e?(this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none"):(this.cancel(),this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect=""))}get active(){return!this._hasRested}get currentAction(){return this._state}get distance(){return this._spherical.radius}set distance(e){this._spherical.radius===e&&this._sphericalEnd.radius===e||(this._spherical.radius=e,this._sphericalEnd.radius=e,this._needsUpdate=!0)}get azimuthAngle(){return this._spherical.theta}set azimuthAngle(e){this._spherical.theta===e&&this._sphericalEnd.theta===e||(this._spherical.theta=e,this._sphericalEnd.theta=e,this._needsUpdate=!0)}get polarAngle(){return this._spherical.phi}set polarAngle(e){this._spherical.phi===e&&this._sphericalEnd.phi===e||(this._spherical.phi=e,this._sphericalEnd.phi=e,this._needsUpdate=!0)}get boundaryEnclosesCamera(){return this._boundaryEnclosesCamera}set boundaryEnclosesCamera(e){this._boundaryEnclosesCamera=e,this._needsUpdate=!0}set interactiveArea(e){this._interactiveArea.width=On(e.width,0,1),this._interactiveArea.height=On(e.height,0,1),this._interactiveArea.x=On(e.x,0,1-this._interactiveArea.width),this._interactiveArea.y=On(e.y,0,1-this._interactiveArea.height)}addEventListener(e,n){super.addEventListener(e,n)}removeEventListener(e,n){super.removeEventListener(e,n)}rotate(e,n,i=!1){return this.rotateTo(this._sphericalEnd.theta+e,this._sphericalEnd.phi+n,i)}rotateAzimuthTo(e,n=!1){return this.rotateTo(e,this._sphericalEnd.phi,n)}rotatePolarTo(e,n=!1){return this.rotateTo(this._sphericalEnd.theta,e,n)}rotateTo(e,n,i=!1){this._isUserControllingRotate=!1;const r=On(e,this.minAzimuthAngle,this.maxAzimuthAngle),a=On(n,this.minPolarAngle,this.maxPolarAngle);this._sphericalEnd.theta=r,this._sphericalEnd.phi=a,this._sphericalEnd.makeSafe(),this._needsUpdate=!0,i||(this._spherical.theta=this._sphericalEnd.theta,this._spherical.phi=this._sphericalEnd.phi);const o=!i||_e(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&_e(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold);return this._createOnRestPromise(o)}dolly(e,n=!1){return this.dollyTo(this._sphericalEnd.radius-e,n)}dollyTo(e,n=!1){return this._isUserControllingDolly=!1,this._lastDollyDirection=hr.NONE,this._changedDolly=0,this._dollyToNoClamp(On(e,this.minDistance,this.maxDistance),n)}_dollyToNoClamp(e,n=!1){const i=this._sphericalEnd.radius;if(this.colliderMeshes.length>=1){const o=this._collisionTest(),l=_e(o,this._spherical.radius);if(!(i>e)&&l)return Promise.resolve();this._sphericalEnd.radius=Math.min(e,o)}else this._sphericalEnd.radius=e;this._needsUpdate=!0,n||(this._spherical.radius=this._sphericalEnd.radius);const a=!n||_e(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(a)}dollyInFixed(e,n=!1){this._targetEnd.add(this._getCameraDirection(la).multiplyScalar(e)),n||this._target.copy(this._targetEnd);const i=!n||_e(this._target.x,this._targetEnd.x,this.restThreshold)&&_e(this._target.y,this._targetEnd.y,this.restThreshold)&&_e(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(i)}zoom(e,n=!1){return this.zoomTo(this._zoomEnd+e,n)}zoomTo(e,n=!1){this._isUserControllingZoom=!1,this._zoomEnd=On(e,this.minZoom,this.maxZoom),this._needsUpdate=!0,n||(this._zoom=this._zoomEnd);const i=!n||_e(this._zoom,this._zoomEnd,this.restThreshold);return this._changedZoom=0,this._createOnRestPromise(i)}pan(e,n,i=!1){return console.warn("`pan` has been renamed to `truck`"),this.truck(e,n,i)}truck(e,n,i=!1){this._camera.updateMatrix(),ti.setFromMatrixColumn(this._camera.matrix,0),ei.setFromMatrixColumn(this._camera.matrix,1),ti.multiplyScalar(e),ei.multiplyScalar(-n);const r=ie.copy(ti).add(ei),a=fe.copy(this._targetEnd).add(r);return this.moveTo(a.x,a.y,a.z,i)}forward(e,n=!1){ie.setFromMatrixColumn(this._camera.matrix,0),ie.crossVectors(this._camera.up,ie),ie.multiplyScalar(e);const i=fe.copy(this._targetEnd).add(ie);return this.moveTo(i.x,i.y,i.z,n)}elevate(e,n=!1){return ie.copy(this._camera.up).multiplyScalar(e),this.moveTo(this._targetEnd.x+ie.x,this._targetEnd.y+ie.y,this._targetEnd.z+ie.z,n)}moveTo(e,n,i,r=!1){this._isUserControllingTruck=!1;const a=ie.set(e,n,i).sub(this._targetEnd);this._encloseToBoundary(this._targetEnd,a,this.boundaryFriction),this._needsUpdate=!0,r||this._target.copy(this._targetEnd);const o=!r||_e(this._target.x,this._targetEnd.x,this.restThreshold)&&_e(this._target.y,this._targetEnd.y,this.restThreshold)&&_e(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(o)}lookInDirectionOf(e,n,i,r=!1){const l=ie.set(e,n,i).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);return this.setPosition(l.x,l.y,l.z,r)}fitToBox(e,n,{cover:i=!1,paddingLeft:r=0,paddingRight:a=0,paddingBottom:o=0,paddingTop:l=0}={}){const c=[],h=e.isBox3?fr.copy(e):fr.setFromObject(e);h.isEmpty()&&(console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"),Promise.resolve());const d=Wf(this._sphericalEnd.theta,Gf),u=Wf(this._sphericalEnd.phi,Gf);c.push(this.rotateTo(d,u,n));const f=ie.setFromSpherical(this._sphericalEnd).normalize(),p=Jf.setFromUnitVectors(f,au),x=_e(Math.abs(f.y),1);x&&p.multiply(lu.setFromAxisAngle(ll,d)),p.multiply(this._yAxisUpSpaceInverse);const g=Kf.makeEmpty();fe.copy(h.min).applyQuaternion(p),g.expandByPoint(fe),fe.copy(h.min).setX(h.max.x).applyQuaternion(p),g.expandByPoint(fe),fe.copy(h.min).setY(h.max.y).applyQuaternion(p),g.expandByPoint(fe),fe.copy(h.max).setZ(h.min.z).applyQuaternion(p),g.expandByPoint(fe),fe.copy(h.min).setZ(h.max.z).applyQuaternion(p),g.expandByPoint(fe),fe.copy(h.max).setY(h.min.y).applyQuaternion(p),g.expandByPoint(fe),fe.copy(h.max).setX(h.min.x).applyQuaternion(p),g.expandByPoint(fe),fe.copy(h.max).applyQuaternion(p),g.expandByPoint(fe),g.min.x-=r,g.min.y-=o,g.max.x+=a,g.max.y+=l,p.setFromUnitVectors(au,f),x&&p.premultiply(lu.invert()),p.premultiply(this._yAxisUpSpace);const m=g.getSize(ie),_=g.getCenter(fe).applyQuaternion(p);if(ps(this._camera)){const v=this.getDistanceToFitBox(m.x,m.y,m.z,i);c.push(this.moveTo(_.x,_.y,_.z,n)),c.push(this.dollyTo(v,n)),c.push(this.setFocalOffset(0,0,0,n))}else if(ki(this._camera)){const v=this._camera,M=v.right-v.left,E=v.top-v.bottom,b=i?Math.max(M/m.x,E/m.y):Math.min(M/m.x,E/m.y);c.push(this.moveTo(_.x,_.y,_.z,n)),c.push(this.zoomTo(b,n)),c.push(this.setFocalOffset(0,0,0,n))}return Promise.all(c)}fitToSphere(e,n){const i=[],a="isObject3D"in e?Xa.createBoundingSphere(e,ou):ou.copy(e);if(i.push(this.moveTo(a.center.x,a.center.y,a.center.z,n)),ps(this._camera)){const o=this.getDistanceToFitSphere(a.radius);i.push(this.dollyTo(o,n))}else if(ki(this._camera)){const o=this._camera.right-this._camera.left,l=this._camera.top-this._camera.bottom,c=2*a.radius,h=Math.min(o/c,l/c);i.push(this.zoomTo(h,n))}return i.push(this.setFocalOffset(0,0,0,n)),Promise.all(i)}setLookAt(e,n,i,r,a,o,l=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=hr.NONE,this._changedDolly=0;const c=fe.set(r,a,o),h=ie.set(e,n,i);this._targetEnd.copy(c),this._sphericalEnd.setFromVector3(h.sub(c).applyQuaternion(this._yAxisUpSpace)),this._needsUpdate=!0,l||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));const d=!l||_e(this._target.x,this._targetEnd.x,this.restThreshold)&&_e(this._target.y,this._targetEnd.y,this.restThreshold)&&_e(this._target.z,this._targetEnd.z,this.restThreshold)&&_e(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&_e(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&_e(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(d)}lerp(e,n,i,r=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=hr.NONE,this._changedDolly=0;const a=ie.set(...e.target);if("spherical"in e)bn.set(...e.spherical);else{const u=fe.set(...e.position);bn.setFromVector3(u.sub(a).applyQuaternion(this._yAxisUpSpace))}const o=ur.set(...n.target);if("spherical"in n)dr.set(...n.spherical);else{const u=fe.set(...n.position);dr.setFromVector3(u.sub(o).applyQuaternion(this._yAxisUpSpace))}this._targetEnd.copy(a.lerp(o,i));const l=dr.theta-bn.theta,c=dr.phi-bn.phi,h=dr.radius-bn.radius;this._sphericalEnd.set(bn.radius+h*i,bn.phi+c*i,bn.theta+l*i),this._needsUpdate=!0,r||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));const d=!r||_e(this._target.x,this._targetEnd.x,this.restThreshold)&&_e(this._target.y,this._targetEnd.y,this.restThreshold)&&_e(this._target.z,this._targetEnd.z,this.restThreshold)&&_e(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&_e(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&_e(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(d)}lerpLookAt(e,n,i,r,a,o,l,c,h,d,u,f,p,x=!1){return this.lerp({position:[e,n,i],target:[r,a,o]},{position:[l,c,h],target:[d,u,f]},p,x)}setPosition(e,n,i,r=!1){return this.setLookAt(e,n,i,this._targetEnd.x,this._targetEnd.y,this._targetEnd.z,r)}setTarget(e,n,i,r=!1){const a=this.getPosition(ie),o=this.setLookAt(a.x,a.y,a.z,e,n,i,r);return this._sphericalEnd.phi=On(this._sphericalEnd.phi,this.minPolarAngle,this.maxPolarAngle),o}setFocalOffset(e,n,i,r=!1){this._isUserControllingOffset=!1,this._focalOffsetEnd.set(e,n,i),this._needsUpdate=!0,r||this._focalOffset.copy(this._focalOffsetEnd);const a=!r||_e(this._focalOffset.x,this._focalOffsetEnd.x,this.restThreshold)&&_e(this._focalOffset.y,this._focalOffsetEnd.y,this.restThreshold)&&_e(this._focalOffset.z,this._focalOffsetEnd.z,this.restThreshold);return this._createOnRestPromise(a)}setOrbitPoint(e,n,i){this._camera.updateMatrixWorld(),ti.setFromMatrixColumn(this._camera.matrixWorldInverse,0),ei.setFromMatrixColumn(this._camera.matrixWorldInverse,1),ms.setFromMatrixColumn(this._camera.matrixWorldInverse,2);const r=ie.set(e,n,i),a=r.distanceTo(this._camera.position),o=r.sub(this._camera.position);ti.multiplyScalar(o.x),ei.multiplyScalar(o.y),ms.multiplyScalar(o.z),ie.copy(ti).add(ei).add(ms),ie.z=ie.z+a,this.dollyTo(a,!1),this.setFocalOffset(-ie.x,ie.y,-ie.z,!1),this.moveTo(e,n,i,!1)}setBoundary(e){if(!e){this._boundary.min.set(-1/0,-1/0,-1/0),this._boundary.max.set(1/0,1/0,1/0),this._needsUpdate=!0;return}this._boundary.copy(e),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._needsUpdate=!0}setViewport(e,n,i,r){if(e===null){this._viewport=null;return}this._viewport=this._viewport||new Yt.Vector4,typeof e=="number"?this._viewport.set(e,n,i,r):this._viewport.copy(e)}getDistanceToFitBox(e,n,i,r=!1){if(ru(this._camera,"getDistanceToFitBox"))return this._spherical.radius;const a=e/n,o=this._camera.getEffectiveFOV()*ra,l=this._camera.aspect;return((r?a>l:a<l)?n:e/l)*.5/Math.tan(o*.5)+i*.5}getDistanceToFitSphere(e){if(ru(this._camera,"getDistanceToFitSphere"))return this._spherical.radius;const n=this._camera.getEffectiveFOV()*ra,i=Math.atan(Math.tan(n*.5)*this._camera.aspect)*2,r=1<this._camera.aspect?n:i;return e/Math.sin(r*.5)}getTarget(e,n=!0){return(e&&e.isVector3?e:new Yt.Vector3).copy(n?this._targetEnd:this._target)}getPosition(e,n=!0){return(e&&e.isVector3?e:new Yt.Vector3).setFromSpherical(n?this._sphericalEnd:this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(n?this._targetEnd:this._target)}getSpherical(e,n=!0){return(e||new Yt.Spherical).copy(n?this._sphericalEnd:this._spherical)}getFocalOffset(e,n=!0){return(e&&e.isVector3?e:new Yt.Vector3).copy(n?this._focalOffsetEnd:this._focalOffset)}normalizeRotations(){return this._sphericalEnd.theta=(this._sphericalEnd.theta%zi+zi)%zi,this._sphericalEnd.theta>Math.PI&&(this._sphericalEnd.theta-=zi),this._spherical.theta+=zi*Math.round((this._sphericalEnd.theta-this._spherical.theta)/zi),this}stop(){this._focalOffset.copy(this._focalOffsetEnd),this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd),this._zoom=this._zoomEnd}reset(e=!1){if(!_e(this._camera.up.x,this._cameraUp0.x)||!_e(this._camera.up.y,this._cameraUp0.y)||!_e(this._camera.up.z,this._cameraUp0.z)){this._camera.up.copy(this._cameraUp0);const i=this.getPosition(ie);this.updateCameraUp(),this.setPosition(i.x,i.y,i.z)}const n=[this.setLookAt(this._position0.x,this._position0.y,this._position0.z,this._target0.x,this._target0.y,this._target0.z,e),this.setFocalOffset(this._focalOffset0.x,this._focalOffset0.y,this._focalOffset0.z,e),this.zoomTo(this._zoom0,e)];return Promise.all(n)}saveState(){this._cameraUp0.copy(this._camera.up),this.getTarget(this._target0),this.getPosition(this._position0),this._zoom0=this._zoom,this._focalOffset0.copy(this._focalOffset)}updateCameraUp(){this._yAxisUpSpace.setFromUnitVectors(this._camera.up,ll),this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert()}applyCameraUp(){const e=ie.subVectors(this._target,this._camera.position).normalize(),n=fe.crossVectors(e,this._camera.up);this._camera.up.crossVectors(n,e).normalize(),this._camera.updateMatrixWorld();const i=this.getPosition(ie);this.updateCameraUp(),this.setPosition(i.x,i.y,i.z)}update(e){const n=this._sphericalEnd.theta-this._spherical.theta,i=this._sphericalEnd.phi-this._spherical.phi,r=this._sphericalEnd.radius-this._spherical.radius,a=qf.subVectors(this._targetEnd,this._target),o=Zf.subVectors(this._focalOffsetEnd,this._focalOffset),l=this._zoomEnd-this._zoom;if(Ee(n))this._thetaVelocity.value=0,this._spherical.theta=this._sphericalEnd.theta;else{const u=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.theta=al(this._spherical.theta,this._sphericalEnd.theta,this._thetaVelocity,u,1/0,e),this._needsUpdate=!0}if(Ee(i))this._phiVelocity.value=0,this._spherical.phi=this._sphericalEnd.phi;else{const u=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.phi=al(this._spherical.phi,this._sphericalEnd.phi,this._phiVelocity,u,1/0,e),this._needsUpdate=!0}if(Ee(r))this._radiusVelocity.value=0,this._spherical.radius=this._sphericalEnd.radius;else{const u=this._isUserControllingDolly?this.draggingSmoothTime:this.smoothTime;this._spherical.radius=al(this._spherical.radius,this._sphericalEnd.radius,this._radiusVelocity,u,this.maxSpeed,e),this._needsUpdate=!0}if(Ee(a.x)&&Ee(a.y)&&Ee(a.z))this._targetVelocity.set(0,0,0),this._target.copy(this._targetEnd);else{const u=this._isUserControllingTruck?this.draggingSmoothTime:this.smoothTime;Xf(this._target,this._targetEnd,this._targetVelocity,u,this.maxSpeed,e,this._target),this._needsUpdate=!0}if(Ee(o.x)&&Ee(o.y)&&Ee(o.z))this._focalOffsetVelocity.set(0,0,0),this._focalOffset.copy(this._focalOffsetEnd);else{const u=this._isUserControllingOffset?this.draggingSmoothTime:this.smoothTime;Xf(this._focalOffset,this._focalOffsetEnd,this._focalOffsetVelocity,u,this.maxSpeed,e,this._focalOffset),this._needsUpdate=!0}if(Ee(l))this._zoomVelocity.value=0,this._zoom=this._zoomEnd;else{const u=this._isUserControllingZoom?this.draggingSmoothTime:this.smoothTime;this._zoom=al(this._zoom,this._zoomEnd,this._zoomVelocity,u,1/0,e)}if(this.dollyToCursor){if(ps(this._camera)&&this._changedDolly!==0){const u=this._spherical.radius-this._lastDistance,f=this._camera,p=this._getCameraDirection(la),x=ie.copy(p).cross(f.up).normalize();x.lengthSq()===0&&(x.x=1);const g=fe.crossVectors(x,p),m=this._sphericalEnd.radius*Math.tan(f.getEffectiveFOV()*ra*.5),v=(this._sphericalEnd.radius-u-this._sphericalEnd.radius)/this._sphericalEnd.radius,M=ur.copy(this._targetEnd).add(x.multiplyScalar(this._dollyControlCoord.x*m*f.aspect)).add(g.multiplyScalar(this._dollyControlCoord.y*m)),E=ie.copy(this._targetEnd).lerp(M,v),b=this._lastDollyDirection===hr.IN&&this._spherical.radius<=this.minDistance,C=this._lastDollyDirection===hr.OUT&&this.maxDistance<=this._spherical.radius;if(this.infinityDolly&&(b||C)){this._sphericalEnd.radius-=u,this._spherical.radius-=u;const w=fe.copy(p).multiplyScalar(-u);E.add(w)}this._boundary.clampPoint(E,E);const y=fe.subVectors(E,this._targetEnd);this._targetEnd.copy(E),this._target.add(y),this._changedDolly-=u,Ee(this._changedDolly)&&(this._changedDolly=0)}else if(ki(this._camera)&&this._changedZoom!==0){const u=this._zoom-this._lastZoom,f=this._camera,p=ie.set(this._dollyControlCoord.x,this._dollyControlCoord.y,(f.near+f.far)/(f.near-f.far)).unproject(f),x=fe.set(0,0,-1).applyQuaternion(f.quaternion),g=ur.copy(p).add(x.multiplyScalar(-p.dot(f.up))),_=-(this._zoom-u-this._zoom)/this._zoom,v=this._getCameraDirection(la),M=this._targetEnd.dot(v),E=ie.copy(this._targetEnd).lerp(g,_),b=E.dot(v),C=v.multiplyScalar(b-M);E.sub(C),this._boundary.clampPoint(E,E);const y=fe.subVectors(E,this._targetEnd);this._targetEnd.copy(E),this._target.add(y),this._changedZoom-=u,Ee(this._changedZoom)&&(this._changedZoom=0)}}this._camera.zoom!==this._zoom&&(this._camera.zoom=this._zoom,this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0),this._dragNeedsUpdate=!0;const c=this._collisionTest();this._spherical.radius=Math.min(this._spherical.radius,c),this._spherical.makeSafe(),this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target),this._camera.lookAt(this._target),(!Ee(this._focalOffset.x)||!Ee(this._focalOffset.y)||!Ee(this._focalOffset.z))&&(this._camera.matrix.compose(this._camera.position,this._camera.quaternion,this._camera.scale),ti.setFromMatrixColumn(this._camera.matrix,0),ei.setFromMatrixColumn(this._camera.matrix,1),ms.setFromMatrixColumn(this._camera.matrix,2),ti.multiplyScalar(this._focalOffset.x),ei.multiplyScalar(-this._focalOffset.y),ms.multiplyScalar(this._focalOffset.z),ie.copy(ti).add(ei).add(ms),this._camera.position.add(ie),this._camera.updateMatrixWorld()),this._boundaryEnclosesCamera&&this._encloseToBoundary(this._camera.position.copy(this._target),ie.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse),1);const d=this._needsUpdate;return d&&!this._updatedLastTime?(this._hasRested=!1,this.dispatchEvent({type:"wake"}),this.dispatchEvent({type:"update"})):d?(this.dispatchEvent({type:"update"}),Ee(n,this.restThreshold)&&Ee(i,this.restThreshold)&&Ee(r,this.restThreshold)&&Ee(a.x,this.restThreshold)&&Ee(a.y,this.restThreshold)&&Ee(a.z,this.restThreshold)&&Ee(o.x,this.restThreshold)&&Ee(o.y,this.restThreshold)&&Ee(o.z,this.restThreshold)&&Ee(l,this.restThreshold)&&!this._hasRested&&(this._hasRested=!0,this.dispatchEvent({type:"rest"}))):!d&&this._updatedLastTime&&this.dispatchEvent({type:"sleep"}),this._lastDistance=this._spherical.radius,this._lastZoom=this._zoom,this._updatedLastTime=d,this._needsUpdate=!1,d}toJSON(){return JSON.stringify({enabled:this._enabled,minDistance:this.minDistance,maxDistance:aa(this.maxDistance),minZoom:this.minZoom,maxZoom:aa(this.maxZoom),minPolarAngle:this.minPolarAngle,maxPolarAngle:aa(this.maxPolarAngle),minAzimuthAngle:aa(this.minAzimuthAngle),maxAzimuthAngle:aa(this.maxAzimuthAngle),smoothTime:this.smoothTime,draggingSmoothTime:this.draggingSmoothTime,dollySpeed:this.dollySpeed,truckSpeed:this.truckSpeed,dollyToCursor:this.dollyToCursor,target:this._targetEnd.toArray(),position:ie.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),zoom:this._zoomEnd,focalOffset:this._focalOffsetEnd.toArray(),target0:this._target0.toArray(),position0:this._position0.toArray(),zoom0:this._zoom0,focalOffset0:this._focalOffset0.toArray()})}fromJSON(e,n=!1){const i=JSON.parse(e);this.enabled=i.enabled,this.minDistance=i.minDistance,this.maxDistance=oa(i.maxDistance),this.minZoom=i.minZoom,this.maxZoom=oa(i.maxZoom),this.minPolarAngle=i.minPolarAngle,this.maxPolarAngle=oa(i.maxPolarAngle),this.minAzimuthAngle=oa(i.minAzimuthAngle),this.maxAzimuthAngle=oa(i.maxAzimuthAngle),this.smoothTime=i.smoothTime,this.draggingSmoothTime=i.draggingSmoothTime,this.dollySpeed=i.dollySpeed,this.truckSpeed=i.truckSpeed,this.dollyToCursor=i.dollyToCursor,this._target0.fromArray(i.target0),this._position0.fromArray(i.position0),this._zoom0=i.zoom0,this._focalOffset0.fromArray(i.focalOffset0),this.moveTo(i.target[0],i.target[1],i.target[2],n),bn.setFromVector3(ie.fromArray(i.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)),this.rotateTo(bn.theta,bn.phi,n),this.dollyTo(bn.radius,n),this.zoomTo(i.zoom,n),this.setFocalOffset(i.focalOffset[0],i.focalOffset[1],i.focalOffset[2],n),this._needsUpdate=!0}connect(e){if(this._domElement){console.warn("camera-controls is already connected.");return}e.setAttribute("data-camera-controls-version",Ob),this._addAllEventListeners(e),this._getClientRect(this._elementRect)}disconnect(){this.cancel(),this._removeAllEventListeners(),this._domElement&&(this._domElement.removeAttribute("data-camera-controls-version"),this._domElement=void 0)}dispose(){this.removeAllEventListeners(),this.disconnect()}_getTargetDirection(e){return e.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse)}_getCameraDirection(e){return this._getTargetDirection(e).negate()}_findPointerById(e){return this._activePointers.find(n=>n.pointerId===e)}_findPointerByMouseButton(e){return this._activePointers.find(n=>n.mouseButton===e)}_disposePointer(e){this._activePointers.splice(this._activePointers.indexOf(e),1)}_encloseToBoundary(e,n,i){const r=n.lengthSq();if(r===0)return e;const a=fe.copy(n).add(e),l=this._boundary.clampPoint(a,ur).sub(a),c=l.lengthSq();if(c===0)return e.add(n);if(c===r)return e;if(i===0)return e.add(n).add(l);{const h=1+i*c/n.dot(l);return e.add(fe.copy(n).multiplyScalar(h)).add(l.multiplyScalar(1-i))}}_updateNearPlaneCorners(){if(ps(this._camera)){const e=this._camera,n=e.near,i=e.getEffectiveFOV()*ra,r=Math.tan(i*.5)*n,a=r*e.aspect;this._nearPlaneCorners[0].set(-a,-r,0),this._nearPlaneCorners[1].set(a,-r,0),this._nearPlaneCorners[2].set(a,r,0),this._nearPlaneCorners[3].set(-a,r,0)}else if(ki(this._camera)){const e=this._camera,n=1/e.zoom,i=e.left*n,r=e.right*n,a=e.top*n,o=e.bottom*n;this._nearPlaneCorners[0].set(i,a,0),this._nearPlaneCorners[1].set(r,a,0),this._nearPlaneCorners[2].set(r,o,0),this._nearPlaneCorners[3].set(i,o,0)}}_collisionTest(){let e=1/0;if(!(this.colliderMeshes.length>=1)||ru(this._camera,"_collisionTest"))return e;const i=this._getTargetDirection(la);cu.lookAt(Yf,i,this._camera.up);for(let r=0;r<4;r++){const a=fe.copy(this._nearPlaneCorners[r]);a.applyMatrix4(cu);const o=ur.addVectors(this._target,a);cl.set(o,i),cl.far=this._spherical.radius+1;const l=cl.intersectObjects(this.colliderMeshes);l.length!==0&&l[0].distance<e&&(e=l[0].distance)}return e}_getClientRect(e){if(!this._domElement)return;const n=this._domElement.getBoundingClientRect();return e.x=n.left,e.y=n.top,this._viewport?(e.x+=this._viewport.x,e.y+=n.height-this._viewport.w-this._viewport.y,e.width=this._viewport.z,e.height=this._viewport.w):(e.width=n.width,e.height=n.height),e}_createOnRestPromise(e){return e?Promise.resolve():(this._hasRested=!1,this.dispatchEvent({type:"transitionstart"}),new Promise(n=>{const i=()=>{this.removeEventListener("rest",i),n()};this.addEventListener("rest",i)}))}_addAllEventListeners(e){}_removeAllEventListeners(){}get dampingFactor(){return console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead."),0}set dampingFactor(e){console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.")}get draggingDampingFactor(){return console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."),0}set draggingDampingFactor(e){console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.")}static createBoundingSphere(e,n=new Yt.Sphere){const i=n,r=i.center;fr.makeEmpty(),e.traverseVisible(o=>{o.isMesh&&fr.expandByObject(o)}),fr.getCenter(r);let a=0;return e.traverseVisible(o=>{if(!o.isMesh)return;const l=o;if(!l.geometry)return;const c=l.geometry.clone();c.applyMatrix4(l.matrixWorld);const d=c.attributes.position;for(let u=0,f=d.count;u<f;u++)ie.fromBufferAttribute(d,u),a=Math.max(a,r.distanceToSquared(ie))}),i.radius=Math.sqrt(a),i}}Xa.install({THREE:TS});class Fb{constructor(t,e){et(this,"camera");et(this,"controls");et(this,"target",new R);this.camera=new We(45,e,1e-7,1e4),this.controls=new Xa(this.camera,t),this.controls.dollySpeed=.6,this.controls.smoothTime=.4,this.controls.draggingSmoothTime=.08,this.controls.setTarget(0,0,0,!1),this.controls.rotateTo(.7,1.1,!1)}frameFrom(t,e,n,i=!0){this.controls.minDistance=t*1.02,this.controls.maxDistance=5e3,this.camera.near=Math.max(t*.001,1e-9),this.camera.far=1e4,this.camera.updateProjectionMatrix();const r=t*{sun:6,planet:3.5,moon:4,small:8}[e],a=Math.hypot(n.x,n.y,n.z)||1;this.controls.setLookAt(n.x/a*r,n.y/a*r,n.z/a*r,0,0,0,i)}setClip(t){this.camera.near=Math.max(t*.001,1e-9),this.camera.far=1e4,this.camera.updateProjectionMatrix()}scaleDistance(t){this.controls.dollyTo(this.distance*t,!1)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}update(t){return this.controls.update(t)}get distance(){return this.controls.getTarget(this.target),this.camera.position.distanceTo(this.target)}}function hu(s,t,e=0,n=Km){const i=t/24,r=(s-n)/i+e*_r/(2*Math.PI);return 2*Math.PI*(r-Math.floor(r))}function Bb(s={}){const t=s.count??2500,e=s.innerAu??2.1,n=s.outerAu??3.3,i=s.thicknessAu??.18,r=s.minScale??.0015,a=s.maxScale??.006;let o=(s.seed??1)>>>0;const l=()=>(o=Math.imul(o,1664525)+1013904223>>>0,o/4294967296),c=[];for(let h=0;h<t;h++){const d=e+l()*(n-e),u=l()*Math.PI*2;c.push({x:Math.cos(u)*d,y:Math.sin(u)*d,z:(l()-.5)*i,scale:r+l()*(a-r),rotX:l()*Math.PI*2,rotY:l()*Math.PI*2,tint:.6+l()*.4})}return c}const zb={earth:{color:new vt(.3,.55,1),power:3.2,strength:1.5,factor:1.03},venus:{color:new vt(.96,.83,.45),power:2.4,strength:1.7,factor:1.05},mars:{color:new vt(.95,.55,.42),power:3.4,strength:.7,factor:1.025},titan:{color:new vt(.96,.6,.25),power:2.6,strength:1.4,factor:1.06},jupiter:{color:new vt(.85,.82,.95),power:4,strength:.5,factor:1.015},saturn:{color:new vt(.92,.86,.72),power:4,strength:.45,factor:1.015},uranus:{color:new vt(.6,.92,.95),power:4,strength:.6,factor:1.02},neptune:{color:new vt(.4,.6,1),power:4,strength:.7,factor:1.02}},kb=new Qi(1,48,24);function Vb(s){const t=new ze({uniforms:{uColor:{value:s.color.clone()},uPower:{value:s.power},uStrength:{value:s.strength},uSunPos:{value:new R}},vertexShader:`
      #include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vWN;
      varying vec3 vWP;
      void main() {
        vWN = normalize(mat3(modelMatrix) * normal);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWP = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
        #include <logdepthbuf_vertex>
      }
    `,fragmentShader:`
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform vec3 uColor;
      uniform float uPower;
      uniform float uStrength;
      uniform vec3 uSunPos;
      varying vec3 vWN;
      varying vec3 vWP;
      void main() {
        #include <logdepthbuf_fragment>
        vec3 N = normalize(vWN);
        vec3 V = normalize(cameraPosition - vWP);
        float rim = pow(1.0 - max(dot(N, V), 0.0), uPower);
        float ndl = dot(N, normalize(uSunPos - vWP));
        float lit = smoothstep(-0.4, 0.3, ndl);
        float a = rim * lit;
        gl_FragColor = vec4(uColor * uStrength * a, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,side:Ye,transparent:!0,blending:Sr,depthWrite:!1}),e=new be(kb,t);return e.renderOrder=2,e}function Hb(s,t,e,n){const i={value:new R(1,0,0)},r={value:0},a=new Ls({color:e,metalness:0,roughness:.9}),o=s.load(`${t}2k_earth_nightmap.jpg`,()=>{r.value=1});o.colorSpace=Be;const l=s.load(`${t}2k_earth_daymap.jpg`,()=>{a.map=l,a.color.setRGB(1,1,1),a.needsUpdate=!0});return l.colorSpace=Be,l.anisotropy=Math.min(8,n),a.onBeforeCompile=c=>{c.uniforms.uNightMap={value:o},c.uniforms.uSunDir=i,c.uniforms.uNightReady=r,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorldNormalE;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
  vWorldNormalE = normalize(mat3(modelMatrix) * objectNormal);`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uNightMap;
uniform vec3 uSunDir;
uniform float uNightReady;
varying vec3 vWorldNormalE;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        #ifdef USE_MAP
        float ndlE = dot(normalize(vWorldNormalE), normalize(uSunDir));
        float nightE = smoothstep(0.12, -0.12, ndlE) * uNightReady;
        totalEmissiveRadiance += texture2D(uNightMap, vMapUv).rgb * nightE * 1.6;
        #endif`)},{material:a,uSunDir:i}}function Gb(s,t,e){const n=new Ls({color:16777215,transparent:!0,depthWrite:!1,metalness:0,roughness:1}),i=new be(e,n);i.visible=!1;const r=s.load(`${t}2k_earth_clouds.jpg`,()=>{n.alphaMap=r,n.needsUpdate=!0,i.visible=!0});return i.renderOrder=1,i}const uu=new Qi(1,64,32),hl="/orrery/textures/",Wb=1600;class Xb{constructor(t,e,n,i=8){et(this,"group",new Xi);et(this,"views",[]);et(this,"byId",{});et(this,"sunLight");et(this,"belt");et(this,"highlighted",null);this.trueScale=e,this.visualScale=n;for(const r of bi){const a=new Xi;a.rotation.x=Math.PI/2+r.axialTiltDeg*_r;let o;const l={def:r,group:a,mesh:void 0};if(r.id==="earth"){const h=Hb(t,hl,r.color,i);o=new be(uu,h.material),l.sunDir=h.uSunDir,l.clouds=Gb(t,hl,uu),a.add(l.clouds)}else o=new be(uu,this.makeMaterial(r,t,i));l.mesh=o,a.add(o),r.ringInnerKm&&r.ringOuterKm&&r.ringTexture&&(l.ring=this.makeRing(r,t),a.add(l.ring),this.wireRingShadows(l));const c=zb[r.id];c&&(l.atmosphere=Vb(c),l.atmoFactor=c.factor,a.add(l.atmosphere)),this.group.add(a),this.views.push(l),this.byId[r.id]=l}this.sunLight=new Cd(16774378,2.6,0,0),this.group.add(this.sunLight),this.group.add(new Rd(16777215,.04)),this.belt=this.buildBelt(),this.group.add(this.belt)}buildBelt(){const t=Bb({count:Ib}),e=new to(1,0),n=new Ls({color:16777215,roughness:1,metalness:0,flatShading:!0}),i=new ud(e,n,t.length),r=new Xt,a=new R,o=new tn,l=new Rn,c=new R,h=new vt;return t.forEach((d,u)=>{a.set(d.x,d.y,d.z),l.set(d.rotX,d.rotY,0),o.setFromEuler(l),c.setScalar(d.scale),r.compose(a,o,c),i.setMatrixAt(u,r),h.setRGB(d.tint*.55,d.tint*.5,d.tint*.44),i.setColorAt(u,h)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.frustumCulled=!1,i}makeMaterial(t,e,n){const i=t.type==="star"?new Pn({color:t.color,toneMapped:!0}):new Ls({color:t.color,metalness:0,roughness:.92});if(t.texture){const r=e.load(`${hl}${t.texture}`,()=>{i.map=r,(t.type!=="star"&&!t.tintTexture||t.type==="star"&&i.color.getHex()===t.color)&&i.color.setRGB(1,1,1),i.needsUpdate=!0});r.colorSpace=Be,r.anisotropy=Math.min(8,n)}return i}makeRing(t,e){const n=ni(t.ringInnerKm),i=ni(t.ringOuterKm),r=new no(n,i,128,1),a=r.attributes.position,o=r.attributes.uv,l=new R;for(let u=0;u<a.count;u++){l.fromBufferAttribute(a,u);const f=(l.length()-n)/(i-n);o.setXY(u,f,.5)}o.needsUpdate=!0;const c=e.load(`${hl}${t.ringTexture}`);c.colorSpace=Be;const h=new Pn({map:c,alphaMap:c,transparent:!0,side:zn,depthWrite:!1}),d=new be(r,h);return d.rotation.x=-Math.PI/2,d.renderOrder=1,d}wireRingShadows(t){const e={uSunDir:{value:new R(1,0,0)},uCenter:{value:new R},uPlanetR:{value:1},uInnerW:{value:1},uOuterW:{value:2}};t.ringShadow=e;const n=t.ring.material,i=n.map,r=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOrrWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vOrrWPos = (modelMatrix * vec4(position, 1.0)).xyz;`)};n.onBeforeCompile=l=>{l.uniforms.uSunDir=e.uSunDir,l.uniforms.uCenter=e.uCenter,l.uniforms.uPlanetR=e.uPlanetR,r(l),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSunDir;
uniform vec3 uCenter;
uniform float uPlanetR;
varying vec3 vOrrWPos;`).replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
          {
            vec3 toFrag = vOrrWPos - uCenter;
            float along = dot(toFrag, uSunDir);
            vec3 perp = toFrag - along * uSunDir;
            if (along < 0.0 && dot(perp, perp) < uPlanetR * uPlanetR) diffuseColor.rgb *= 0.15;
          }`)};const a=new R(0,1,0).applyEuler(t.group.rotation),o=t.mesh.material;o.onBeforeCompile=l=>{l.uniforms.uSunDirS=e.uSunDir,l.uniforms.uCenterS=e.uCenter,l.uniforms.uInnerW=e.uInnerW,l.uniforms.uOuterW=e.uOuterW,l.uniforms.uPoleS={value:a},l.uniforms.uRingTex={value:i},r(l),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSunDirS;
uniform vec3 uCenterS;
uniform vec3 uPoleS;
uniform float uInnerW;
uniform float uOuterW;
uniform sampler2D uRingTex;
varying vec3 vOrrWPos;`).replace("#include <map_fragment>",`#include <map_fragment>
          {
            float denomR = dot(uSunDirS, uPoleS);
            if (abs(denomR) > 1e-6) {
              float tR = dot(uCenterS - vOrrWPos, uPoleS) / denomR;
              if (tR > 0.0) {
                vec3 hitR = vOrrWPos + tR * uSunDirS - uCenterS;
                float radR = length(hitR);
                if (radR > uInnerW && radR < uOuterW) {
                  float aR = texture2D(uRingTex, vec2((radR - uInnerW) / (uOuterW - uInnerW), 0.5)).a;
                  diffuseColor.rgb *= 1.0 - aR * 0.85;
                }
              }
            }
          }`)}}renderRadius(t,e){const n=ni(t.radiusKm),i=this.trueScale.radius(n);return e<=0?i:i+(this.visualScale.radius(n)-i)*e}place(t,e,n){const i=n>0?this.visualScale.position(e):null;for(const r of this.views){const a=t[r.def.id],o=a.x-e.x,l=a.y-e.y,c=a.z-e.z;if(i){const d=this.visualScale.position(a),u=n;r.group.position.set(o+(d.x-i.x-o)*u,l+(d.y-i.y-l)*u,c+(d.z-i.z-c)*u)}else r.group.position.set(o,l,c);const h=this.renderRadius(r.def,n);if(r.mesh.scale.setScalar(h),r.ring&&r.ring.scale.setScalar(h/this.trueScale.radius(ni(r.def.radiusKm))),r.atmosphere&&(r.atmosphere.scale.setScalar(h*r.atmoFactor),r.atmosphere.material.uniforms.uSunPos.value.copy(this.byId.sun.group.position)),r.clouds&&r.clouds.scale.setScalar(h*1.006),r.sunDir&&r.sunDir.value.copy(this.byId.sun.group.position).sub(r.group.position).normalize(),r.ringShadow){const d=r.ringShadow;d.uSunDir.value.copy(this.byId.sun.group.position).sub(r.group.position).normalize(),d.uCenter.value.copy(r.group.position),d.uPlanetR.value=h;const u=h/this.trueScale.radius(ni(r.def.radiusKm));d.uInnerW.value=ni(r.def.ringInnerKm)*u,d.uOuterW.value=ni(r.def.ringOuterKm)*u}}this.sunLight.position.copy(this.byId.sun.group.position),this.belt.visible=n<.5,this.belt.position.set(-e.x,-e.y,-e.z)}setSunBoost(t){const e=this.byId.sun.mesh.material;t?e.color.setRGB(2.6,2.45,2.2):e.color.setRGB(1,1,1)}setHighlight(t){if(t===this.highlighted)return;if((n=>{if(!n)return;const i=this.byId[n].mesh.material;"emissive"in i&&i.emissive.setHex(0)})(this.highlighted),this.highlighted=t,t){const n=this.byId[t].mesh.material;"emissive"in n&&n.emissive.setHex(2240580)}}rotate(t){for(const e of this.views)e.mesh.rotation.y=hu(t,e.def.rotationPeriodHours,e.def.meridianDeg),e.clouds&&(e.clouds.rotation.y=hu(t,e.def.rotationPeriodHours*1.08));this.belt.rotation.z=hu(t,Wb*24)}}const Yb=9e3;function qb(s){const t=s.load("/orrery/textures/8k_stars_milky_way.jpg");t.colorSpace=Be;const e=new Pn({map:t,side:Ye,depthWrite:!1}),n=new be(new Qi(Yb,64,32),e);return n.renderOrder=-1,n.frustumCulled=!1,n}const du=s=>(s<0?0:s>255?255:s)/255;function Zb(s){const t=Math.max(1e3,Math.min(4e4,s))/100;let e;t<=66?e=255:e=329.698727446*Math.pow(t-60,-.1332047592);let n;t<=66?n=99.4708025861*Math.log(t)-161.1195681661:n=288.1221695283*Math.pow(t-60,-.0755148492);let i;return t>=66?i=255:t<=19?i=0:i=138.5177312231*Math.log(t-10)-305.0447927307,[du(e),du(n),du(i)]}const Kb=23.4392911*Math.PI/180;function Jb(s,t,e){const n=Math.cos(t);return{x:e*n*Math.cos(s),y:e*n*Math.sin(s),z:e*Math.sin(t)}}const $b=8500;async function jb(s,t){const e=await fetch(`${s}data/stars.bin`);if(!e.ok)throw new Error(`stars.bin fetch failed: ${e.status}`);const n=new Float32Array(await e.arrayBuffer()),i=n.length/4,r=new Float32Array(i*3),a=new Float32Array(i*3),o=new Float32Array(i);for(let d=0;d<i;d++){const u=n[d*4],f=n[d*4+1],p=n[d*4+2],x=n[d*4+3],g=Jb(u,f,$b);r[d*3]=g.x,r[d*3+1]=g.y,r[d*3+2]=g.z;const[m,_,v]=Zb(x),M=Math.min(1.3,Math.max(.35,(6.5-p)/6+.4));a[d*3]=m*M,a[d*3+1]=_*M,a[d*3+2]=v*M,o[d]=Math.min(6,Math.max(1,1+(6.5-p)*.55))}const l=new Zt;l.setAttribute("position",new me(r,3)),l.setAttribute("aColor",new me(a,3)),l.setAttribute("size",new me(o,1));const c=new ze({uniforms:{uPixelRatio:{value:t}},vertexShader:`
      #include <common>
      #include <logdepthbuf_pars_vertex>
      attribute vec3 aColor;
      attribute float size;
      uniform float uPixelRatio;
      varying vec3 vColor;
      void main() {
        vColor = aColor;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPixelRatio;
        #include <logdepthbuf_vertex>
      }
    `,fragmentShader:`
      #include <common>
      #include <logdepthbuf_pars_fragment>
      varying vec3 vColor;
      void main() {
        #include <logdepthbuf_fragment>
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.1, d);
        gl_FragColor = vec4(vColor, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,transparent:!0,blending:Sr,depthTest:!0,depthWrite:!1}),h=new fd(l,c);return h.rotation.x=-Kb,h.renderOrder=-.5,h.frustumCulled=!1,h}function _l(s,t,e,n,i){n=Math.max(1e-4,n);const r=2/n,a=r*i,o=1/(1+a+.48*a*a+.235*a*a*a),l=s-t,c=(e.value+r*l)*i;return e.value=(e.value-r*c)*o,t+(l+c)*o}function Qb(s,t,e,n,i,r){const a={value:e.x},o={value:e.y},l={value:e.z};return r.x=_l(s.x,t.x,a,n,i),r.y=_l(s.y,t.y,o,n,i),r.z=_l(s.z,t.z,l,n,i),e.x=a.value,e.y=o.value,e.z=l.value,r}class tT{constructor(t,e){et(this,"focusAu",{x:0,y:0,z:0});et(this,"vel",{x:0,y:0,z:0});et(this,"targetId");et(this,"smoothTime",.4);et(this,"flyDuration",1);et(this,"flyTimer",0);et(this,"arrived",!1);this.targetId=t,this.snap(e)}setTarget(t){t!==this.targetId&&(this.targetId=t,this.flyTimer=0,this.arrived=!1)}snap(t){const e=t[this.targetId];this.focusAu.x=e.x,this.focusAu.y=e.y,this.focusAu.z=e.z,this.vel.x=this.vel.y=this.vel.z=0,this.arrived=!0,this.flyTimer=this.flyDuration}update(t,e){const n=t[this.targetId];return this.arrived?(this.focusAu.x=n.x,this.focusAu.y=n.y,this.focusAu.z=n.z,this.focusAu):(Qb(this.focusAu,n,this.vel,this.smoothTime,e,this.focusAu),this.flyTimer+=e,this.flyTimer>=this.flyDuration&&(this.arrived=!0),this.focusAu)}get flying(){return!this.arrived}}function eT(s,t,e,n,i,r,a,o,l,c){const h=s-a,d=t-o,u=e-l,f=h*n+d*i+u*r,p=h*h+d*d+u*u-c*c,x=f*f-p;if(x<0)return null;const g=Math.sqrt(x),m=-f-g;if(m>=0)return m;const _=-f+g;return _>=0?_:null}const fu=new Fm;function ig(s,t,e,n,i=8){fu.setFromCamera(s,t);const r=fu.ray.origin,a=fu.ray.direction,o=t.fov*Math.PI/180,l=2*Math.tan(o/2)/n;let c=null,h=1/0;for(const d of e.views){const u=d.group.position,f=u.distanceTo(r),p=Math.max(d.mesh.scale.x,l*f*i),x=eT(r.x,r.y,r.z,a.x,a.y,a.z,u.x,u.y,u.z,p);x!==null&&x<h&&(h=x,c=d.def.id)}return c}const ul="translate3d(-9999px,-9999px,0)",ca=new R;class nT{constructor(t,e){et(this,"entries",[]);et(this,"container");this.container=document.createElement("div"),this.container.style.cssText="position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:5";for(const n of t.views){const i=document.createElement("div");i.textContent=n.def.name,i.style.cssText="position:absolute;left:0;top:0;transform:"+ul+";color:#e7ecff;font:12px system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:nowrap;will-change:transform;pointer-events:auto;cursor:pointer;padding:6px",e&&i.addEventListener("pointerup",a=>{a.stopPropagation(),e(n.def.id)}),this.container.appendChild(i);const r=n.def.type==="moon"?1:0;this.entries.push({id:n.def.id,el:i,tier:r})}document.body.appendChild(this.container)}update(t,e,n,i,r,a){const o=e.fov*Math.PI/180,l=i/(2*Math.tan(o/2)),c=[];for(const d of this.entries){const u=t.byId[d.id],f=u.group.position;ca.copy(f).project(e);const p=d.id===r||d.id===a;if(ca.z>1||ca.z<-1){d.el.style.transform=ul;continue}const x=e.position.distanceTo(f),g=u.mesh.scale.x/x*l;if(d.tier>0&&g<2&&!p){d.el.style.transform=ul;continue}c.push({e:d,x:(ca.x*.5+.5)*n,y:(-ca.y*.5+.5)*i,tier:d.tier,dist:x})}c.sort((d,u)=>d.tier-u.tier||d.dist-u.dist);const h=[];for(const d of c){const u=d.e.id===r||d.e.id===a;if(h.some(p=>Math.abs(p.x-d.x)<92&&Math.abs(p.y-d.y)<15)&&!u){d.e.el.style.transform=ul;continue}h.push({x:d.x,y:d.y}),d.e.el.style.transform=`translate3d(${(d.x+2).toFixed(1)}px,${(d.y-14).toFixed(1)}px,0)`,d.e.el.style.opacity=u?"1":"0.72",d.e.el.style.fontWeight=d.e.id===r?"600":"400"}}}const pu=[{label:"real-time",v:1/86400},{label:"1 hour/s",v:1/24},{label:"1 day/s",v:1},{label:"1 week/s",v:7},{label:"1 month/s",v:30},{label:"1 year/s",v:365}],$f=1,mu="background:#171a26;color:#cdd6ff;border:1px solid #2a2f44;border-radius:8px;padding:6px 10px;font:16px system-ui;cursor:pointer";class iT{constructor(t,e){et(this,"el");et(this,"playBtn");et(this,"dateEl");et(this,"scrub");et(this,"jdMin");et(this,"jdMax");et(this,"dragging",!1);this.clock=t,this.onChange=e,this.jdMin=t.jdMin,this.jdMax=t.jdMax;const n=document.createElement("div");n.style.cssText="position:fixed;bottom:calc(10px + env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);display:flex;gap:8px;align-items:center;flex-wrap:wrap;justify-content:center;background:rgba(12,14,22,0.72);border:1px solid #232838;border-radius:12px;padding:8px 12px;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:10;max-width:min(720px,94vw)",this.playBtn=document.createElement("button"),this.playBtn.style.cssText=mu,this.playBtn.setAttribute("aria-label","Play or pause time"),this.playBtn.addEventListener("click",()=>{this.clock.playing=!this.clock.playing,this.syncPlay(),this.onChange()}),n.appendChild(this.playBtn);const i=document.createElement("select");i.setAttribute("aria-label","Playback speed"),i.style.cssText=mu,pu.forEach((a,o)=>{const l=document.createElement("option");l.value=String(o),l.textContent=a.label,i.appendChild(l)}),i.value=String($f),this.clock.speed=pu[$f].v,i.addEventListener("change",()=>{this.clock.speed=pu[+i.value].v,this.onChange()}),n.appendChild(i);const r=document.createElement("button");r.textContent="Now",r.style.cssText=mu,r.addEventListener("click",()=>{this.clock.setNow(),this.refresh(),this.onChange()}),n.appendChild(r),this.dateEl=document.createElement("span"),this.dateEl.style.cssText="color:#aab3d0;font:12px ui-monospace,monospace;white-space:nowrap;text-align:center",n.appendChild(this.dateEl),this.scrub=document.createElement("input"),this.scrub.type="range",this.scrub.min="0",this.scrub.max="1",this.scrub.step="0.0001",this.scrub.setAttribute("aria-label","Scrub date"),this.scrub.style.cssText="flex:1 1 100%;min-width:0;accent-color:#6f8bff;cursor:pointer;touch-action:none",this.scrub.addEventListener("pointerdown",()=>this.dragging=!0);for(const a of["pointerup","pointercancel","lostpointercapture"])this.scrub.addEventListener(a,()=>this.dragging=!1);this.scrub.addEventListener("input",()=>{this.clock.playing=!1,this.clock.jd=this.jdMin+ +this.scrub.value*(this.jdMax-this.jdMin),this.syncPlay(),this.refresh(),this.onChange()}),n.appendChild(this.scrub),document.body.appendChild(n),this.el=n,this.syncPlay(),this.refresh()}syncPlay(){this.playBtn.textContent=this.clock.playing?"⏸":"▶"}refresh(){const t=Nd(this.clock.jd);this.dateEl.textContent=t.toISOString().slice(0,16).replace("T","  ")+" UTC",this.dragging||(this.scrub.value=String((this.clock.jd-this.jdMin)/(this.jdMax-this.jdMin)))}}function sT(){return new URLSearchParams(location.search).get("obj")}function rT(){return new URLSearchParams(location.search).get("date")}function aT(){return new URLSearchParams(location.search).get("scale")==="overview"?"overview":null}function sg(s,t,e,n,i,r=!1){const a=new URLSearchParams(s);return a.set("obj",n),i?a.set("date",i):a.delete("date"),r?a.set("scale","overview"):a.delete("scale"),`${t}?${a.toString()}${e}`}let jf=0;function oT(s,t,e=!1){clearTimeout(jf),jf=window.setTimeout(()=>{history.replaceState(null,"",sg(location.search,location.pathname,location.hash,s,t,e))},400)}const Vd=document.getElementById("app");if(!Vd)throw new Error("#app container not found");let ke;try{ke=yb()}catch(s){throw Vd.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#cdd6ff;font:15px/1.6 system-ui;text-align:center;padding:24px">This experience needs WebGL2.<br>Try updating your browser or enabling hardware acceleration.</div>',s}ke.domElement.style.cursor="grab";Vd.appendChild(ke.domElement);const rg=ke.getContext(),Qf=rg.getExtension("WEBGL_debug_renderer_info"),ag=Qf?String(rg.getParameter(Qf.UNMASKED_RENDERER_WEBGL)):"unknown GPU",og=/swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(ag);function lT(){try{return localStorage.getItem("orrery-quality")}catch{return null}}let kn=so[Lb(lT())];og&&(kn=so.performance);ke.setPixelRatio(Math.min(window.devicePixelRatio,kn.dpr));const Hr=new ad,Qe=new Fb(ke.domElement,window.innerWidth/window.innerHeight),cT=_b(),hT=vb(),lg=new Tm,an=new Xb(lg,cT,hT,ke.capabilities.getMaxAnisotropy());Hr.add(an.group);an.belt.count=kn.beltCount;const cg=qb(lg);Hr.add(cg);let Ya=null;jb("/orrery/",ke.getPixelRatio()).then(s=>{Ya=s,Hr.add(s)}).catch(s=>console.warn("star field unavailable:",s));const hg=Pb(ke);let Bn=kn.post&&hg?eg(ke,Hr,Qe.camera,kn):null;an.setSunBoost(Bn!==null);function uT(){Bn?Bn.render():ke.render(Hr,Qe.camera)}const ri=new gb,gu=rT();let ug=!1;if(gu&&/^\d{4}-\d{2}-\d{2}(T[\d:.]+Z?)?$/.test(gu)){const s=Date.parse(gu);Number.isNaN(s)||(ri.jd=ri.clamp(Nu(s)),ug=!0)}ri.playing=!ug;let Ss=tg(ri.jd);const _u=sT(),dg=_u&&zr[_u]?_u:"earth",ai=new tT(dg,Ss);let yi=aT()?1:0,Xn=yi;const tp={value:0};let pa=0;const ah="background:#11131c;color:#cdd6ff;border:1px solid #2a2f44;border-radius:8px;padding:6px 10px;font:16px system-ui;max-width:44vw",Gr=document.createElement("div");Gr.style.cssText="position:fixed;top:calc(10px + env(safe-area-inset-top));left:calc(10px + env(safe-area-inset-left));right:calc(10px + env(safe-area-inset-right));display:flex;gap:8px;align-items:center;flex-wrap:wrap;z-index:10;pointer-events:none";const ci=document.createElement("select");ci.setAttribute("aria-label","Fly to a body");ci.title="Fly to a planet or moon";ci.style.cssText=ah+";pointer-events:auto";{let s=null;for(const t of bi){const e=document.createElement("option");if(e.value=t.id,e.textContent=t.name,t.type==="moon"){const n=zr[t.parent].name;(!s||s.label!==`${n} moons`)&&(s=document.createElement("optgroup"),s.label=`${n} moons`,ci.appendChild(s)),s.appendChild(e)}else s=null,ci.appendChild(e)}}Gr.appendChild(ci);const Os=document.createElement("button");Os.style.cssText=ah+";cursor:pointer;pointer-events:auto";Os.title="Toggle between true scale and a compressed overview (sizes exaggerated)";Os.textContent=Xn>.5?"True scale":"Overview";Os.addEventListener("click",()=>{Xn=Xn>.5?0:1,Os.textContent=Xn>.5?"True scale":"Overview",Hd()});Gr.appendChild(Os);const hi=document.createElement("select");hi.setAttribute("aria-label","Graphics quality");hi.title="Graphics quality (higher looks better, lower runs faster)";hi.style.cssText=ah+";pointer-events:auto";for(const s of Db){const t=document.createElement("option");t.value=s,t.textContent=so[s].label,hi.appendChild(t)}hi.value=kn.tier;hi.addEventListener("change",()=>dT(hi.value));Gr.appendChild(hi);const As=document.createElement("button");As.textContent="Share";As.title="Copy a link to this exact view and moment";As.style.cssText=ah+";cursor:pointer;pointer-events:auto";As.addEventListener("click",async()=>{const s=location.origin+sg(location.search,location.pathname,"",ai.targetId,pg(),Xn>.5);try{await navigator.clipboard.writeText(s),As.textContent="Copied ✓"}catch{prompt("Copy this link:",s)}setTimeout(()=>As.textContent="Share",1600)});Gr.appendChild(As);document.body.appendChild(Gr);function dT(s){kn=so[s];try{localStorage.setItem("orrery-quality",s)}catch{}ke.setPixelRatio(Math.min(window.devicePixelRatio,kn.dpr)),ke.setSize(window.innerWidth,window.innerHeight),Bn&&(Bn.dispose(),Bn=null),kn.post&&hg&&(Bn=eg(ke,Hr,Qe.camera,kn),Bn.setSize(window.innerWidth,window.innerHeight)),an.setSunBoost(Bn!==null),an.belt.count=kn.beltCount,Ya&&(Ya.material.uniforms.uPixelRatio.value=ke.getPixelRatio()),hi.value!==s&&(hi.value=s)}const fT=new URLSearchParams(location.search).has("debug"),oh=document.createElement("div");oh.style.cssText="position:fixed;left:calc(14px + env(safe-area-inset-left));bottom:calc(84px + env(safe-area-inset-bottom));max-width:min(60vw,340px);color:#aab3d0;font:12px/1.6 ui-monospace,monospace;text-shadow:0 1px 2px #000;pointer-events:none;z-index:10";document.body.appendChild(oh);const lh=document.createElement("div");lh.style.cssText="position:fixed;right:calc(14px + env(safe-area-inset-right));bottom:calc(84px + env(safe-area-inset-bottom));max-width:min(300px,44vw);color:#cdd6ff;font:13px/1.5 system-ui;text-align:right;text-shadow:0 1px 3px #000;pointer-events:none;z-index:10";document.body.appendChild(lh);if(og){const s=document.createElement("div");s.textContent="⚠ Software rendering detected (no GPU acceleration). Enable hardware acceleration in your browser for smooth performance.",s.style.cssText="position:fixed;top:58px;left:14px;max-width:380px;background:#3a1a1a;color:#ffd9d9;border:1px solid #6a2a2a;border-radius:8px;padding:8px 12px;font:12px/1.4 system-ui;z-index:20",document.body.appendChild(s)}function pT(){try{return localStorage.getItem("orrery-hint-seen")==="1"}catch{return!1}}if(!pT()){const s=document.createElement("div");s.textContent="drag to look around · scroll or pinch to zoom · tap a planet or pick one above to fly there",s.style.cssText="position:fixed;left:50%;top:calc(64px + env(safe-area-inset-top));transform:translateX(-50%);max-width:min(92vw,560px);text-align:center;background:rgba(12,14,22,0.8);color:#cdd6ff;border:1px solid #2a2f44;border-radius:10px;padding:10px 16px;font:14px/1.5 system-ui;z-index:20;transition:opacity 1s;cursor:pointer";const t=()=>{s.style.opacity="0",setTimeout(()=>s.remove(),1100);try{localStorage.setItem("orrery-hint-seen","1")}catch{}};s.addEventListener("click",t),ke.domElement.addEventListener("pointerdown",t,{once:!0}),setTimeout(t,12e3),document.body.appendChild(s)}const mT=new nT(an,s=>ro(s));let fg=0,xl=16,vl=null;function gT(s){return s.type==="star"?"sun":s.type==="moon"?s.radiusKm<100?"small":"moon":"planet"}const pg=()=>Nd(ri.jd).toISOString();function Hd(){oT(ai.targetId,ri.playing?null:pg(),Xn>.5)}function _T(){const s=zr[ai.targetId];lh.innerHTML=`<b style="font-size:15px">${s.name}</b><br>${s.facts}`}function mg(){const s=zr[ai.targetId];let t;if(yi>.01)t="overview";else{const e=Qe.distance*Zm;t=e>1e6?`${Qe.distance.toFixed(2)} AU`:`${e.toFixed(0)} km`}oh.textContent=fT?`${s.name} · ${t} · ${xl.toFixed(1)} ms (${fg.toFixed(0)} fps) · ${ag}`:`${s.name} · ${t}`}function ro(s,t=!1){ai.setTarget(s),t&&ai.snap(Ss);const e=zr[s];e.type==="moon"&&Xn>.5&&(Xn=0,Os.textContent="Overview");const n=Ss[s],i=Math.hypot(n.x,n.y,n.z),r=i<1e-9?{x:1,y:0,z:.5}:{x:-n.x/i,y:-n.y/i,z:-n.z/i+.5},a=an.renderRadius(e,yi);Qe.frameFrom(a,gT(e),r,!t),pa=a,ci.value!==s&&(ci.value=s),Hd(),_T(),mg()}ci.addEventListener("change",()=>ro(ci.value));window.addEventListener("keydown",s=>{var t,e;if(!(s.metaKey||s.ctrlKey||s.altKey)&&!((e=(t=s.target)==null?void 0:t.matches)!=null&&e.call(t,"input, select, textarea"))&&(s.key==="["||s.key==="]")){const i=(bi.findIndex(r=>r.id===ai.targetId)+(s.key==="]"?1:bi.length-1))%bi.length;ro(bi[i].id)}});window.addEventListener("resize",()=>{ke.setSize(window.innerWidth,window.innerHeight),Bn&&Bn.setSize(window.innerWidth,window.innerHeight),Qe.resize(window.innerWidth/window.innerHeight),Sg()});document.addEventListener("visibilitychange",()=>{ke.setAnimationLoop(document.hidden?null:bg)});const fc=new j;let pc=!1,gg=0,_g=0,xg=0,qa=!1,Ir=null,vg=!1;const Ns=ke.domElement,yg=(s,t,e)=>e.set(s/window.innerWidth*2-1,-(t/window.innerHeight)*2+1);Ns.addEventListener("pointerdown",s=>{if(Ir!==null||s.button!==0||!s.isPrimary){qa=!0;return}Ir=s.pointerId,vg=s.pointerType==="touch",gg=s.clientX,_g=s.clientY,xg=performance.now(),qa=!1});Ns.addEventListener("pointermove",s=>{const t=s.pointerType==="touch"?12:6;s.pointerId===Ir&&Math.hypot(s.clientX-gg,s.clientY-_g)>t&&(qa=!0),s.pointerType!=="touch"&&(yg(s.clientX,s.clientY,fc),pc=!0)});Ns.addEventListener("pointerup",s=>{if(s.pointerId===Ir&&(Ir=null,!qa&&performance.now()-xg<350)){yg(s.clientX,s.clientY,fc);const t=ig(fc,Qe.camera,an,window.innerHeight,vg?22:8);t&&ro(t)}});Ns.addEventListener("pointercancel",()=>{Ir=null,qa=!0});Ns.addEventListener("pointerleave",()=>{pc=!1,vl=null,an.setHighlight(null),Ns.style.cursor="grab"});const Mg=new iT(ri,Hd);function Sg(){const s=`calc(${Mg.el.offsetHeight+24}px + env(safe-area-inset-bottom))`;oh.style.bottom=s,lh.style.bottom=s}Sg();ro(dg,!0);const ep=new nh;let np=0;function xT(s){let t;ep.update(),t=ep.getDelta(),t>.1&&(t=.1),ri.advance(t),Ss=tg(ri.jd,Ss);const e=ai.update(Ss,t);yi=_l(yi,Xn,tp,.5,t),Math.abs(yi-Xn)<5e-4&&(yi=Xn,tp.value=0),an.place(Ss,e,yi),an.rotate(ri.jd);const n=an.renderRadius(zr[ai.targetId],yi);if(n!==pa&&(pa>0&&Qe.scaleDistance(n/pa),Qe.setClip(n),Qe.controls.minDistance=n*1.02,pa=n),pc){const i=ig(fc,Qe.camera,an,window.innerHeight);i!==vl&&(vl=i,an.setHighlight(i),Ns.style.cursor=i?"pointer":"grab"),pc=!1}Qe.update(t),cg.position.copy(Qe.camera.position),Ya&&Ya.position.copy(Qe.camera.position),np%2===0&&mT.update(an,Qe.camera,window.innerWidth,window.innerHeight,ai.targetId,vl),xl+=(t*1e3-xl)*.1,fg=1e3/xl,++np%12===0&&(mg(),Mg.refresh()),uT()}const bg=()=>xT();ke.setAnimationLoop(bg);
