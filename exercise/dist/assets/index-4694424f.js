(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Is="148",Bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xl=0,Ks=1,vl=2,Ao=1,Co=2,Li=3,Pn=0,Pt=1,Os=2,ji=3,on=0,oi=1,Js=2,Qs=3,ea=4,bl=5,ti=100,yl=101,Ml=102,ta=103,na=104,Sl=200,wl=201,El=202,Tl=203,Lo=204,Po=205,Al=206,Cl=207,Ll=208,Pl=209,Dl=210,Rl=0,Il=1,Ol=2,xs=3,Fl=4,Nl=5,zl=6,Ul=7,Do=0,Bl=1,kl=2,en=0,Gl=1,Vl=2,Hl=3,Wl=4,Xl=5,Ro=300,ci=301,ui=302,vs=303,bs=304,vr=306,Nt=1e3,Ot=1001,ys=1002,pt=1003,ia=1004,Nr=1005,Lt=1006,ql=1007,Oi=1008,Dn=1009,jl=1010,Yl=1011,Io=1012,$l=1013,Tn=1014,An=1015,Fi=1016,Zl=1017,Kl=1018,li=1020,Jl=1021,Ql=1022,Ft=1023,ec=1024,tc=1025,Cn=1026,di=1027,nc=1028,ic=1029,rc=1030,sc=1031,ac=1033,zr=33776,Ur=33777,Br=33778,kr=33779,ra=35840,sa=35841,aa=35842,oa=35843,oc=36196,la=37492,ca=37496,ua=37808,da=37809,ha=37810,fa=37811,pa=37812,ma=37813,ga=37814,_a=37815,xa=37816,va=37817,ba=37818,ya=37819,Ma=37820,Sa=37821,wa=36492,Rn=3e3,Ge=3001,lc=3200,cc=3201,Oo=0,uc=1,Gt="srgb",Ni="srgb-linear",Gr=7680,dc=519,Ea=35044,Ta="300 es",Ms=1035;class Nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vr=Math.PI/180,Aa=180/Math.PI;function Gi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ot[r&255]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]+"-"+ot[e&255]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[t&63|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[n&255]+ot[n>>8&255]+ot[n>>16&255]+ot[n>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function hc(r,e){return(r%e+e)%e}function Hr(r,e,t){return(1-t)*r+t*e}function Ca(r){return(r&r-1)===0&&r!==0}function Ss(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],_=n[8],p=i[0],f=i[3],x=i[6],E=i[1],M=i[4],y=i[7],S=i[2],L=i[5],F=i[8];return s[0]=o*p+a*E+l*S,s[3]=o*f+a*M+l*L,s[6]=o*x+a*y+l*F,s[1]=c*p+u*E+d*S,s[4]=c*f+u*M+d*L,s[7]=c*x+u*y+d*F,s[2]=h*p+m*E+_*S,s[5]=h*f+m*M+_*L,s[8]=h*x+m*y+_*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,m=c*s-o*l,_=t*d+n*h+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=d*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=h*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wr.makeScale(e,t)),this}rotate(e){return this.premultiply(Wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wr=new Et;function Fo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function zi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ln(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function mr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Xr={[Gt]:{[Ni]:Ln},[Ni]:{[Gt]:mr}},ht={legacyMode:!0,get workingColorSpace(){return Ni},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Xr[e]&&Xr[e][t]!==void 0){const n=Xr[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},No={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ke={r:0,g:0,b:0},Dt={h:0,s:0,l:0},$i={h:0,s:0,l:0};function qr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Zi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}let Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=hc(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=qr(o,s,e+1/3),this.g=qr(o,s,e),this.b=qr(o,s,e-1/3)}return ht.toWorkingColorSpace(this,i),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ht.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ht.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ht.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ht.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Gt){const n=No[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ht.fromWorkingColorSpace(Zi(this,Ke),e),_t(Ke.r*255,0,255)<<16^_t(Ke.g*255,0,255)<<8^_t(Ke.b*255,0,255)<<0}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(Zi(this,Ke),t);const n=Ke.r,i=Ke.g,s=Ke.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(Zi(this,Ke),t),e.r=Ke.r,e.g=Ke.g,e.b=Ke.b,e}getStyle(e=Gt){return ht.fromWorkingColorSpace(Zi(this,Ke),e),e!==Gt?`color(${e} ${Ke.r} ${Ke.g} ${Ke.b})`:`rgb(${Ke.r*255|0},${Ke.g*255|0},${Ke.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Dt),Dt.h+=e,Dt.s+=t,Dt.l+=n,this.setHSL(Dt.h,Dt.s,Dt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dt),e.getHSL($i);const n=Hr(Dt.h,$i.h,t),i=Hr(Dt.s,$i.s,t),s=Hr(Dt.l,$i.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Be.NAMES=No;let Gn;class zo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=zi("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ln(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Uo{constructor(e=null){this.isSource=!0,this.uuid=Gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(jr(i[o].image)):s.push(jr(i[o]))}else s=jr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function jr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fc=0;class xt extends Nn{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Ot,i=Ot,s=Lt,o=Oi,a=Ft,l=Dn,c=xt.DEFAULT_ANISOTROPY,u=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=Gi(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ro)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nt:e.x=e.x-Math.floor(e.x);break;case Ot:e.x=e.x<0?0:1;break;case ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nt:e.y=e.y-Math.floor(e.y);break;case Ot:e.y=e.y<0?0:1;break;case ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Ro;xt.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,t=0,n=0,i=1){He.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],_=l[9],p=l[2],f=l[6],x=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-p)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+p)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(m+1)/2,S=(x+1)/2,L=(u+h)/4,F=(d+p)/4,g=(_+f)/4;return M>y&&M>S?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=L/n,s=F/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=L/i,s=g/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=F/s,i=g/s),this.set(n,i,s,t),this}let E=Math.sqrt((f-_)*(f-_)+(d-p)*(d-p)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(f-_)/E,this.y=(d-p)/E,this.z=(h-u)/E,this.w=Math.acos((c+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class In extends Nn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new He(0,0,e,t),this.scissorTest=!1,this.viewport=new He(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Lt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bo extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pc extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=Ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(d!==p||l!==h||c!==m||u!==_){let f=1-a;const x=l*h+c*m+u*_+d*p,E=x>=0?1:-1,M=1-x*x;if(M>Number.EPSILON){const S=Math.sqrt(M),L=Math.atan2(S,x*E);f=Math.sin(f*L)/S,a=Math.sin(a*L)/S}const y=a*E;if(l=l*f+h*y,c=c*f+m*y,u=u*f+_*y,d=d*f+p*y,f===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*d+l*m-c*h,e[t+1]=l*_+u*h+c*d-a*m,e[t+2]=c*_+u*m+a*h-l*d,e[t+3]=u*_-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),m=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"YXZ":this._x=h*u*d+c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"ZXY":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d-h*m*_;break;case"ZYX":this._x=h*u*d-c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d+h*m*_;break;case"YZX":this._x=h*u*d+c*m*_,this._y=c*m*d+h*u*_,this._z=c*u*_-h*m*d,this._w=c*u*d-h*m*_;break;case"XZY":this._x=h*u*d-c*m*_,this._y=c*m*d-h*u*_,this._z=c*u*_+h*m*d,this._w=c*u*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(La.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(La.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,d=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-d*-o,this.y=u*l+h*-o+d*-s-c*-a,this.z=d*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yr.copy(this).projectOnVector(e),this.sub(Yr)}reflect(e){return this.sub(Yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new R,La=new On;class Vi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)bn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(bn)}else n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox),$r.applyMatrix4(e.matrixWorld),this.union($r);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),Ki.subVectors(this.max,vi),Vn.subVectors(e.a,vi),Hn.subVectors(e.b,vi),Wn.subVectors(e.c,vi),nn.subVectors(Hn,Vn),rn.subVectors(Wn,Hn),yn.subVectors(Vn,Wn);let t=[0,-nn.z,nn.y,0,-rn.z,rn.y,0,-yn.z,yn.y,nn.z,0,-nn.x,rn.z,0,-rn.x,yn.z,0,-yn.x,-nn.y,nn.x,0,-rn.y,rn.x,0,-yn.y,yn.x,0];return!Zr(t,Vn,Hn,Wn,Ki)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,Vn,Hn,Wn,Ki))?!1:(Ji.crossVectors(nn,rn),t=[Ji.x,Ji.y,Ji.z],Zr(t,Vn,Hn,Wn,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return bn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new R,new R,new R,new R,new R,new R,new R,new R],bn=new R,$r=new Vi,Vn=new R,Hn=new R,Wn=new R,nn=new R,rn=new R,yn=new R,vi=new R,Ki=new R,Ji=new R,Mn=new R;function Zr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Mn.fromArray(r,s);const a=i.x*Math.abs(Mn.x)+i.y*Math.abs(Mn.y)+i.z*Math.abs(Mn.z),l=e.dot(Mn),c=t.dot(Mn),u=n.dot(Mn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const mc=new Vi,bi=new R,Kr=new R;class Fs{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(bi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(Kr)),this.expandByPoint(bi.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new R,Jr=new R,Qi=new R,sn=new R,Qr=new R,er=new R,es=new R;class gc{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.direction).multiplyScalar(t).add(this.origin),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jr.copy(e).add(t).multiplyScalar(.5),Qi.copy(t).sub(e).normalize(),sn.copy(this.origin).sub(Jr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Qi),a=sn.dot(this.direction),l=-sn.dot(Qi),c=sn.lengthSq(),u=Math.abs(1-o*o);let d,h,m,_;if(u>0)if(d=o*l-a,h=o*a-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const p=1/u;d*=p,h*=p,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Qi).multiplyScalar(h).add(Jr),m}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const n=$t.dot(this.direction),i=$t.dot($t)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,i,s){Qr.subVectors(t,e),er.subVectors(n,e),es.crossVectors(Qr,er);let o=this.direction.dot(es),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sn.subVectors(this.origin,e);const l=a*this.direction.dot(er.crossVectors(sn,er));if(l<0)return null;const c=a*this.direction.dot(Qr.cross(sn));if(c<0||l+c>o)return null;const u=-a*sn.dot(es);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,d,h,m,_,p,f){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=u,x[10]=d,x[14]=h,x[3]=m,x[7]=_,x[11]=p,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Xn.setFromMatrixColumn(e,0).length(),s=1/Xn.setFromMatrixColumn(e,1).length(),o=1/Xn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*d,_=a*u,p=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=h-p*c,t[9]=-a*l,t[2]=p-h*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,_=c*u,p=c*d;t[0]=h+p*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,_=c*u,p=c*d;t[0]=h-p*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,_=a*u,p=a*d;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+p,t[1]=l*d,t[5]=p*c+h,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=p-h*d,t[8]=_*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+_,t[10]=h-p*d}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+p,t[5]=o*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*u,t[10]=p*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_c,e,xc)}lookAt(e,t,n){const i=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),an.crossVectors(n,Mt),an.lengthSq()===0&&(Math.abs(n.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),an.crossVectors(n,Mt)),an.normalize(),tr.crossVectors(Mt,an),i[0]=an.x,i[4]=tr.x,i[8]=Mt.x,i[1]=an.y,i[5]=tr.y,i[9]=Mt.y,i[2]=an.z,i[6]=tr.z,i[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],_=n[2],p=n[6],f=n[10],x=n[14],E=n[3],M=n[7],y=n[11],S=n[15],L=i[0],F=i[4],g=i[8],A=i[12],P=i[1],j=i[5],Z=i[9],N=i[13],D=i[2],H=i[6],K=i[10],te=i[14],Y=i[3],ne=i[7],J=i[11],W=i[15];return s[0]=o*L+a*P+l*D+c*Y,s[4]=o*F+a*j+l*H+c*ne,s[8]=o*g+a*Z+l*K+c*J,s[12]=o*A+a*N+l*te+c*W,s[1]=u*L+d*P+h*D+m*Y,s[5]=u*F+d*j+h*H+m*ne,s[9]=u*g+d*Z+h*K+m*J,s[13]=u*A+d*N+h*te+m*W,s[2]=_*L+p*P+f*D+x*Y,s[6]=_*F+p*j+f*H+x*ne,s[10]=_*g+p*Z+f*K+x*J,s[14]=_*A+p*N+f*te+x*W,s[3]=E*L+M*P+y*D+S*Y,s[7]=E*F+M*j+y*H+S*ne,s[11]=E*g+M*Z+y*K+S*J,s[15]=E*A+M*N+y*te+S*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],_=e[3],p=e[7],f=e[11],x=e[15];return _*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*m-n*l*m)+p*(+t*l*m-t*c*h+s*o*h-i*o*m+i*c*u-s*l*u)+f*(+t*c*d-t*a*m-s*o*d+n*o*m+s*a*u-n*c*u)+x*(-i*a*u-t*l*d+t*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],_=e[12],p=e[13],f=e[14],x=e[15],E=d*f*c-p*h*c+p*l*m-a*f*m-d*l*x+a*h*x,M=_*h*c-u*f*c-_*l*m+o*f*m+u*l*x-o*h*x,y=u*p*c-_*d*c+_*a*m-o*p*m-u*a*x+o*d*x,S=_*d*l-u*p*l-_*a*h+o*p*h+u*a*f-o*d*f,L=t*E+n*M+i*y+s*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=E*F,e[1]=(p*h*s-d*f*s-p*i*m+n*f*m+d*i*x-n*h*x)*F,e[2]=(a*f*s-p*l*s+p*i*c-n*f*c-a*i*x+n*l*x)*F,e[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*m-n*l*m)*F,e[4]=M*F,e[5]=(u*f*s-_*h*s+_*i*m-t*f*m-u*i*x+t*h*x)*F,e[6]=(_*l*s-o*f*s-_*i*c+t*f*c+o*i*x-t*l*x)*F,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*m+t*l*m)*F,e[8]=y*F,e[9]=(_*d*s-u*p*s-_*n*m+t*p*m+u*n*x-t*d*x)*F,e[10]=(o*p*s-_*a*s+_*n*c-t*p*c-o*n*x+t*a*x)*F,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*m-t*a*m)*F,e[12]=S*F,e[13]=(u*p*i-_*d*i+_*n*h-t*p*h-u*n*f+t*d*f)*F,e[14]=(_*a*i-o*p*i-_*n*l+t*p*l+o*n*f-t*a*f)*F,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*h+t*a*h)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,m=s*u,_=s*d,p=o*u,f=o*d,x=a*d,E=l*c,M=l*u,y=l*d,S=n.x,L=n.y,F=n.z;return i[0]=(1-(p+x))*S,i[1]=(m+y)*S,i[2]=(_-M)*S,i[3]=0,i[4]=(m-y)*L,i[5]=(1-(h+x))*L,i[6]=(f+E)*L,i[7]=0,i[8]=(_+M)*F,i[9]=(f-E)*F,i[10]=(1-(h+p))*F,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Xn.set(i[0],i[1],i[2]).length();const o=Xn.set(i[4],i[5],i[6]).length(),a=Xn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Rt.copy(this);const c=1/s,u=1/o,d=1/a;return Rt.elements[0]*=c,Rt.elements[1]*=c,Rt.elements[2]*=c,Rt.elements[4]*=u,Rt.elements[5]*=u,Rt.elements[6]*=u,Rt.elements[8]*=d,Rt.elements[9]*=d,Rt.elements[10]*=d,t.setFromRotationMatrix(Rt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),d=(t+e)*l,h=(n+i)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xn=new R,Rt=new Ye,_c=new R(0,0,0),xc=new R(1,1,1),an=new R,tr=new R,Mt=new R,Pa=new Ye,Da=new On;class Hi{constructor(e=0,t=0,n=0,i=Hi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Da.setFromEuler(this),this.setFromQuaternion(Da,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Hi.DefaultOrder="XYZ";Hi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ko{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vc=0;const Ra=new R,qn=new On,Zt=new Ye,nr=new R,yi=new R,bc=new R,yc=new On,Ia=new R(1,0,0),Oa=new R(0,1,0),Fa=new R(0,0,1),Mc={type:"added"},Na={type:"removed"};class lt extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DefaultUp.clone();const e=new R,t=new Hi,n=new On,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Et}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=lt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=lt.DefaultMatrixWorldAutoUpdate,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(Ia,e)}rotateY(e){return this.rotateOnAxis(Oa,e)}rotateZ(e){return this.rotateOnAxis(Fa,e)}translateOnAxis(e,t){return Ra.copy(e).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ia,e)}translateY(e){return this.translateOnAxis(Oa,e)}translateZ(e){return this.translateOnAxis(Fa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(yi,nr,this.up):Zt.lookAt(nr,yi,this.up),this.quaternion.setFromRotationMatrix(Zt),i&&(Zt.extractRotation(i.matrixWorld),qn.setFromRotationMatrix(Zt),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Na)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Na)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,bc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,yc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}lt.DefaultUp=new R(0,1,0);lt.DefaultMatrixAutoUpdate=!0;lt.DefaultMatrixWorldAutoUpdate=!0;const It=new R,Kt=new R,ts=new R,Jt=new R,jn=new R,Yn=new R,za=new R,ns=new R,is=new R,rs=new R;class Qt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),It.subVectors(e,t),i.cross(It);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){It.subVectors(i,t),Kt.subVectors(n,t),ts.subVectors(e,t);const o=It.dot(It),a=It.dot(Kt),l=It.dot(ts),c=Kt.dot(Kt),u=Kt.dot(ts),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,m=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jt),Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Jt),l.set(0,0),l.addScaledVector(s,Jt.x),l.addScaledVector(o,Jt.y),l.addScaledVector(a,Jt.z),l}static isFrontFacing(e,t,n,i){return It.subVectors(n,t),Kt.subVectors(e,t),It.cross(Kt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return It.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),It.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Qt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;jn.subVectors(i,n),Yn.subVectors(s,n),ns.subVectors(e,n);const l=jn.dot(ns),c=Yn.dot(ns);if(l<=0&&c<=0)return t.copy(n);is.subVectors(e,i);const u=jn.dot(is),d=Yn.dot(is);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(jn,o);rs.subVectors(e,s);const m=jn.dot(rs),_=Yn.dot(rs);if(_>=0&&m<=_)return t.copy(s);const p=m*c-l*_;if(p<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Yn,a);const f=u*_-m*d;if(f<=0&&d-u>=0&&m-_>=0)return za.subVectors(s,i),a=(d-u)/(d-u+(m-_)),t.copy(i).addScaledVector(za,a);const x=1/(f+p+h);return o=p*x,a=h*x,t.copy(n).addScaledVector(jn,o).addScaledVector(Yn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Sc=0;class Wi extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=oi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lo,this.blendDst=Po,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Go extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const je=new R,ir=new Se;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ea,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ir.fromBufferAttribute(this,t),ir.applyMatrix3(e),this.setXY(t,ir.x,ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix3(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ea&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Vo extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ho extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wc=0;const Ct=new Ye,ss=new lt,$n=new R,St=new Vi,Mi=new Vi,it=new R;class tn extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fo(e)?Ho:Vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return ss.lookAt(e),ss.updateMatrix(),this.applyMatrix4(ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];St.setFromBufferAttribute(s),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Mi.setFromBufferAttribute(a),this.morphTargetsRelative?(it.addVectors(St.min,Mi.min),St.expandByPoint(it),it.addVectors(St.max,Mi.max),St.expandByPoint(it)):(St.expandByPoint(Mi.min),St.expandByPoint(Mi.max))}St.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)it.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(it));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)it.fromBufferAttribute(a,c),l&&($n.fromBufferAttribute(e,c),it.add($n)),i=Math.max(i,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new R,u[P]=new R;const d=new R,h=new R,m=new R,_=new Se,p=new Se,f=new Se,x=new R,E=new R;function M(P,j,Z){d.fromArray(i,P*3),h.fromArray(i,j*3),m.fromArray(i,Z*3),_.fromArray(o,P*2),p.fromArray(o,j*2),f.fromArray(o,Z*2),h.sub(d),m.sub(d),p.sub(_),f.sub(_);const N=1/(p.x*f.y-f.x*p.y);isFinite(N)&&(x.copy(h).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(N),E.copy(m).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(N),c[P].add(x),c[j].add(x),c[Z].add(x),u[P].add(E),u[j].add(E),u[Z].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,j=y.length;P<j;++P){const Z=y[P],N=Z.start,D=Z.count;for(let H=N,K=N+D;H<K;H+=3)M(n[H+0],n[H+1],n[H+2])}const S=new R,L=new R,F=new R,g=new R;function A(P){F.fromArray(s,P*3),g.copy(F);const j=c[P];S.copy(j),S.sub(F.multiplyScalar(F.dot(j))).normalize(),L.crossVectors(g,j);const N=L.dot(u[P])<0?-1:1;l[P*4]=S.x,l[P*4+1]=S.y,l[P*4+2]=S.z,l[P*4+3]=N}for(let P=0,j=y.length;P<j;++P){const Z=y[P],N=Z.start,D=Z.count;for(let H=N,K=N+D;H<K;H+=3)A(n[H+0]),A(n[H+1]),A(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,d=new R;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),p=e.getX(h+1),f=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let p=0,f=l.length;p<f;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let x=0;x<u;x++)h[_++]=c[m++]}return new Wt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ua=new Ye,Zn=new gc,as=new Fs,Si=new R,wi=new R,Ei=new R,os=new R,rr=new R,sr=new Se,ar=new Se,or=new Se,ls=new R,lr=new R;class st extends lt{constructor(e=new tn,t=new Go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){rr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(os.fromBufferAttribute(d,e),o?rr.addScaledVector(os,u):rr.addScaledVector(os.sub(t),u))}t.add(rr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(s),e.ray.intersectsSphere(as)===!1)||(Ua.copy(s).invert(),Zn.copy(e.ray).applyMatrix4(Ua),n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,d=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){const p=d[m],f=i[p.materialIndex],x=Math.max(p.start,h.start),E=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let M=x,y=E;M<y;M+=3){const S=a.getX(M),L=a.getX(M+1),F=a.getX(M+2);o=cr(this,f,e,Zn,c,u,S,L,F),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=m,f=_;p<f;p+=3){const x=a.getX(p),E=a.getX(p+1),M=a.getX(p+2);o=cr(this,i,e,Zn,c,u,x,E,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,_=d.length;m<_;m++){const p=d[m],f=i[p.materialIndex],x=Math.max(p.start,h.start),E=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let M=x,y=E;M<y;M+=3){const S=M,L=M+1,F=M+2;o=cr(this,f,e,Zn,c,u,S,L,F),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=m,f=_;p<f;p+=3){const x=p,E=p+1,M=p+2;o=cr(this,i,e,Zn,c,u,x,E,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Ec(r,e,t,n,i,s,o,a){let l;if(e.side===Pt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Pn,a),l===null)return null;lr.copy(a),lr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(lr);return c<t.near||c>t.far?null:{distance:c,point:lr.clone(),object:r}}function cr(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Si),r.getVertexPosition(a,wi),r.getVertexPosition(l,Ei);const c=Ec(r,e,t,n,Si,wi,Ei,ls);if(c){i&&(sr.fromBufferAttribute(i,o),ar.fromBufferAttribute(i,a),or.fromBufferAttribute(i,l),c.uv=Qt.getUV(ls,Si,wi,Ei,sr,ar,or,new Se)),s&&(sr.fromBufferAttribute(s,o),ar.fromBufferAttribute(s,a),or.fromBufferAttribute(s,l),c.uv2=Qt.getUV(ls,Si,wi,Ei,sr,ar,or,new Se));const u={a:o,b:a,c:l,normal:new R,materialIndex:0};Qt.getNormal(Si,wi,Ei,u.normal),c.face=u}return c}class zn extends tn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(d,2));function _(p,f,x,E,M,y,S,L,F,g,A){const P=y/F,j=S/g,Z=y/2,N=S/2,D=L/2,H=F+1,K=g+1;let te=0,Y=0;const ne=new R;for(let J=0;J<K;J++){const W=J*j-N;for(let B=0;B<H;B++){const ae=B*P-Z;ne[p]=ae*E,ne[f]=W*M,ne[x]=D,c.push(ne.x,ne.y,ne.z),ne[p]=0,ne[f]=0,ne[x]=L>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(B/F),d.push(1-J/g),te+=1}}for(let J=0;J<g;J++)for(let W=0;W<F;W++){const B=h+W+H*J,ae=h+W+H*(J+1),ie=h+(W+1)+H*(J+1),oe=h+(W+1)+H*J;l.push(B,ae,oe),l.push(ae,ie,oe),Y+=6}a.addGroup(m,Y,A),m+=Y,h+=te}}static fromJSON(e){return new zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ft(r){const e={};for(let t=0;t<r.length;t++){const n=hi(r[t]);for(const i in n)e[i]=n[i]}return e}function Tc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Wo(r){return r.getRenderTarget()===null&&r.outputEncoding===Ge?Gt:Ni}const Ac={clone:hi,merge:ft};var Cc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cc,this.fragmentShader=Lc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hi(e.uniforms),this.uniformsGroups=Tc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xo extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends Xo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,Jn=1;class Pc extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new wt(Kn,Jn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new wt(Kn,Jn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new wt(Kn,Jn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new wt(Kn,Jn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new wt(Kn,Jn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new wt(Kn,Jn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=en,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class qo extends xt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ci,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dc extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zn(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:on});s.uniforms.tEquirect.value=t;const o=new st(i,s),a=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Lt),new Pc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const cs=new R,Rc=new R,Ic=new Et;class Sn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cs.subVectors(n,t).cross(Rc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(cs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ic.getNormalMatrix(e),i=this.coplanarPoint(cs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Fs,ur=new R;class Ns{constructor(e=new Sn,t=new Sn,n=new Sn,i=new Sn,s=new Sn,o=new Sn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],m=n[9],_=n[10],p=n[11],f=n[12],x=n[13],E=n[14],M=n[15];return t[0].setComponents(a-i,d-l,p-h,M-f).normalize(),t[1].setComponents(a+i,d+l,p+h,M+f).normalize(),t[2].setComponents(a+s,d+c,p+m,M+x).normalize(),t[3].setComponents(a-s,d-c,p-m,M-x).normalize(),t[4].setComponents(a-o,d-u,p-_,M-E).normalize(),t[5].setComponents(a+o,d+u,p+_,M+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ur.x=i.normal.x>0?e.max.x:e.min.x,ur.y=i.normal.y>0?e.max.y:e.min.y,ur.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jo(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Oc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,d,h),c.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,m=u.updateRange;r.bindBuffer(d,c),m.count===-1?r.bufferSubData(d,0,h):(t?r.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class Xi extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,m=[],_=[],p=[],f=[];for(let x=0;x<u;x++){const E=x*h-o;for(let M=0;M<c;M++){const y=M*d-s;_.push(y,-E,0),p.push(0,0,1),f.push(M/a),f.push(1-x/l)}}for(let x=0;x<l;x++)for(let E=0;E<a;E++){const M=E+c*x,y=E+c*(x+1),S=E+1+c*(x+1),L=E+1+c*x;m.push(M,y,L),m.push(y,S,L)}this.setIndex(m),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(p,3)),this.setAttribute("uv",new ct(f,2))}static fromJSON(e){return new Xi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Nc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Uc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gc="vec3 transformed = vec3( position );",Vc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Wc=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Xc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eu=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,tu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,nu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",lu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,hu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fu=`#ifdef USE_ENVMAP
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
#endif`,pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xu=`#ifdef USE_GRADIENTMAP
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
}`,vu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Su=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,wu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Eu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Pu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Du=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ou=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,$u=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ju=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ed=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ld=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,md=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_d=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vd=`#ifdef USE_SKINNING
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
#endif`,bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ed=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Td=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ad=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ld=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Pd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Dd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Id=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Od=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ud=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,kd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Vd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Zd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Jd=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,th=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,nh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ih=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,rh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ah=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,lh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ch=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,dh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,hh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:Fc,alphamap_pars_fragment:Nc,alphatest_fragment:zc,alphatest_pars_fragment:Uc,aomap_fragment:Bc,aomap_pars_fragment:kc,begin_vertex:Gc,beginnormal_vertex:Vc,bsdfs:Hc,iridescence_fragment:Wc,bumpmap_pars_fragment:Xc,clipping_planes_fragment:qc,clipping_planes_pars_fragment:jc,clipping_planes_pars_vertex:Yc,clipping_planes_vertex:$c,color_fragment:Zc,color_pars_fragment:Kc,color_pars_vertex:Jc,color_vertex:Qc,common:eu,cube_uv_reflection_fragment:tu,defaultnormal_vertex:nu,displacementmap_pars_vertex:iu,displacementmap_vertex:ru,emissivemap_fragment:su,emissivemap_pars_fragment:au,encodings_fragment:ou,encodings_pars_fragment:lu,envmap_fragment:cu,envmap_common_pars_fragment:uu,envmap_pars_fragment:du,envmap_pars_vertex:hu,envmap_physical_pars_fragment:wu,envmap_vertex:fu,fog_vertex:pu,fog_pars_vertex:mu,fog_fragment:gu,fog_pars_fragment:_u,gradientmap_pars_fragment:xu,lightmap_fragment:vu,lightmap_pars_fragment:bu,lights_lambert_fragment:yu,lights_lambert_pars_fragment:Mu,lights_pars_begin:Su,lights_toon_fragment:Eu,lights_toon_pars_fragment:Tu,lights_phong_fragment:Au,lights_phong_pars_fragment:Cu,lights_physical_fragment:Lu,lights_physical_pars_fragment:Pu,lights_fragment_begin:Du,lights_fragment_maps:Ru,lights_fragment_end:Iu,logdepthbuf_fragment:Ou,logdepthbuf_pars_fragment:Fu,logdepthbuf_pars_vertex:Nu,logdepthbuf_vertex:zu,map_fragment:Uu,map_pars_fragment:Bu,map_particle_fragment:ku,map_particle_pars_fragment:Gu,metalnessmap_fragment:Vu,metalnessmap_pars_fragment:Hu,morphcolor_vertex:Wu,morphnormal_vertex:Xu,morphtarget_pars_vertex:qu,morphtarget_vertex:ju,normal_fragment_begin:Yu,normal_fragment_maps:$u,normal_pars_fragment:Zu,normal_pars_vertex:Ku,normal_vertex:Ju,normalmap_pars_fragment:Qu,clearcoat_normal_fragment_begin:ed,clearcoat_normal_fragment_maps:td,clearcoat_pars_fragment:nd,iridescence_pars_fragment:id,output_fragment:rd,packing:sd,premultiplied_alpha_fragment:ad,project_vertex:od,dithering_fragment:ld,dithering_pars_fragment:cd,roughnessmap_fragment:ud,roughnessmap_pars_fragment:dd,shadowmap_pars_fragment:hd,shadowmap_pars_vertex:fd,shadowmap_vertex:pd,shadowmask_pars_fragment:md,skinbase_vertex:gd,skinning_pars_vertex:_d,skinning_vertex:xd,skinnormal_vertex:vd,specularmap_fragment:bd,specularmap_pars_fragment:yd,tonemapping_fragment:Md,tonemapping_pars_fragment:Sd,transmission_fragment:wd,transmission_pars_fragment:Ed,uv_pars_fragment:Td,uv_pars_vertex:Ad,uv_vertex:Cd,uv2_pars_fragment:Ld,uv2_pars_vertex:Pd,uv2_vertex:Dd,worldpos_vertex:Rd,background_vert:Id,background_frag:Od,backgroundCube_vert:Fd,backgroundCube_frag:Nd,cube_vert:zd,cube_frag:Ud,depth_vert:Bd,depth_frag:kd,distanceRGBA_vert:Gd,distanceRGBA_frag:Vd,equirect_vert:Hd,equirect_frag:Wd,linedashed_vert:Xd,linedashed_frag:qd,meshbasic_vert:jd,meshbasic_frag:Yd,meshlambert_vert:$d,meshlambert_frag:Zd,meshmatcap_vert:Kd,meshmatcap_frag:Jd,meshnormal_vert:Qd,meshnormal_frag:eh,meshphong_vert:th,meshphong_frag:nh,meshphysical_vert:ih,meshphysical_frag:rh,meshtoon_vert:sh,meshtoon_frag:ah,points_vert:oh,points_frag:lh,shadow_vert:ch,shadow_frag:uh,sprite_vert:dh,sprite_frag:hh},se={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Et},uv2Transform:{value:new Et},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Et}}},Vt={basic:{uniforms:ft([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:ft([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:ft([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:ft([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:ft([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:ft([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:ft([se.points,se.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:ft([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:ft([se.common,se.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:ft([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:ft([se.sprite,se.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:ft([se.common,se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:ft([se.lights,se.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Vt.physical={uniforms:ft([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const dr={r:0,b:0,g:0};function fh(r,e,t,n,i,s,o){const a=new Be(0);let l=s===!0?0:1,c,u,d=null,h=0,m=null;function _(f,x){let E=!1,M=x.isScene===!0?x.background:null;M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M));const y=r.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(M=null),M===null?p(a,l):M&&M.isColor&&(p(M,1),E=!0),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===vr)?(u===void 0&&(u=new st(new zn(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:hi(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,F,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=M.encoding!==Ge,(d!==M||h!==M.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,m=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new st(new Xi(2,2),new Fn({name:"BackgroundMaterial",uniforms:hi(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=M.encoding!==Ge,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,m=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function p(f,x){f.getRGB(dr,Wo(r)),n.buffers.color.setClear(dr.r,dr.g,dr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(f,x=1){a.set(f),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(a,l)},render:_}}function ph(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,u=!1;function d(D,H,K,te,Y){let ne=!1;if(o){const J=p(te,K,H);c!==J&&(c=J,m(c.object)),ne=x(D,te,K,Y),ne&&E(D,te,K,Y)}else{const J=H.wireframe===!0;(c.geometry!==te.id||c.program!==K.id||c.wireframe!==J)&&(c.geometry=te.id,c.program=K.id,c.wireframe=J,ne=!0)}Y!==null&&t.update(Y,34963),(ne||u)&&(u=!1,g(D,H,K,te),Y!==null&&r.bindBuffer(34963,t.get(Y).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,H,K){const te=K.wireframe===!0;let Y=a[D.id];Y===void 0&&(Y={},a[D.id]=Y);let ne=Y[H.id];ne===void 0&&(ne={},Y[H.id]=ne);let J=ne[te];return J===void 0&&(J=f(h()),ne[te]=J),J}function f(D){const H=[],K=[],te=[];for(let Y=0;Y<i;Y++)H[Y]=0,K[Y]=0,te[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:te,object:D,attributes:{},index:null}}function x(D,H,K,te){const Y=c.attributes,ne=H.attributes;let J=0;const W=K.getAttributes();for(const B in W)if(W[B].location>=0){const ie=Y[B];let oe=ne[B];if(oe===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;J++}return c.attributesNum!==J||c.index!==te}function E(D,H,K,te){const Y={},ne=H.attributes;let J=0;const W=K.getAttributes();for(const B in W)if(W[B].location>=0){let ie=ne[B];ie===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),Y[B]=oe,J++}c.attributes=Y,c.attributesNum=J,c.index=te}function M(){const D=c.newAttributes;for(let H=0,K=D.length;H<K;H++)D[H]=0}function y(D){S(D,0)}function S(D,H){const K=c.newAttributes,te=c.enabledAttributes,Y=c.attributeDivisors;K[D]=1,te[D]===0&&(r.enableVertexAttribArray(D),te[D]=1),Y[D]!==H&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),Y[D]=H)}function L(){const D=c.newAttributes,H=c.enabledAttributes;for(let K=0,te=H.length;K<te;K++)H[K]!==D[K]&&(r.disableVertexAttribArray(K),H[K]=0)}function F(D,H,K,te,Y,ne){n.isWebGL2===!0&&(K===5124||K===5125)?r.vertexAttribIPointer(D,H,K,Y,ne):r.vertexAttribPointer(D,H,K,te,Y,ne)}function g(D,H,K,te){if(n.isWebGL2===!1&&(D.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Y=te.attributes,ne=K.getAttributes(),J=H.defaultAttributeValues;for(const W in ne){const B=ne[W];if(B.location>=0){let ae=Y[W];if(ae===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),ae!==void 0){const ie=ae.normalized,oe=ae.itemSize,X=t.get(ae);if(X===void 0)continue;const Ce=X.buffer,pe=X.type,ve=X.bytesPerElement;if(ae.isInterleavedBufferAttribute){const fe=ae.data,Fe=fe.stride,we=ae.offset;if(fe.isInstancedInterleavedBuffer){for(let be=0;be<B.locationSize;be++)S(B.location+be,fe.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let be=0;be<B.locationSize;be++)y(B.location+be);r.bindBuffer(34962,Ce);for(let be=0;be<B.locationSize;be++)F(B.location+be,oe/B.locationSize,pe,ie,Fe*ve,(we+oe/B.locationSize*be)*ve)}else{if(ae.isInstancedBufferAttribute){for(let fe=0;fe<B.locationSize;fe++)S(B.location+fe,ae.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let fe=0;fe<B.locationSize;fe++)y(B.location+fe);r.bindBuffer(34962,Ce);for(let fe=0;fe<B.locationSize;fe++)F(B.location+fe,oe/B.locationSize,pe,ie,oe*ve,oe/B.locationSize*fe*ve)}}else if(J!==void 0){const ie=J[W];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(B.location,ie);break;case 3:r.vertexAttrib3fv(B.location,ie);break;case 4:r.vertexAttrib4fv(B.location,ie);break;default:r.vertexAttrib1fv(B.location,ie)}}}}L()}function A(){Z();for(const D in a){const H=a[D];for(const K in H){const te=H[K];for(const Y in te)_(te[Y].object),delete te[Y];delete H[K]}delete a[D]}}function P(D){if(a[D.id]===void 0)return;const H=a[D.id];for(const K in H){const te=H[K];for(const Y in te)_(te[Y].object),delete te[Y];delete H[K]}delete a[D.id]}function j(D){for(const H in a){const K=a[H];if(K[D.id]===void 0)continue;const te=K[D.id];for(const Y in te)_(te[Y].object),delete te[Y];delete K[D.id]}}function Z(){N(),u=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:j,initAttributes:M,enableAttribute:y,disableUnusedAttributes:L}}function mh(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function gh(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),h=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),x=r.getParameter(36348),E=r.getParameter(36349),M=h>0,y=o||e.has("OES_texture_float"),S=M&&y,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:L}}function _h(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Sn,a=new Et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,m){const _=d.length!==0||h||n!==0||i;return i=h,t=u(d,m,0),n=d.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,h,m){const _=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,x=r.get(d);if(!i||_===null||_.length===0||s&&!f)s?u(null):c();else{const E=s?0:n,M=E*4;let y=x.clippingState||null;l.value=y,y=u(_,h,M,m);for(let S=0;S!==M;++S)y[S]=t[S];x.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,_){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=l.value,_!==!0||f===null){const x=m+p*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(f===null||f.length<x)&&(f=new Float32Array(x));for(let M=0,y=m;M!==p;++M,y+=4)o.copy(d[M]).applyMatrix4(E,a),o.normal.toArray(f,y),f[y+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function xh(r){let e=new WeakMap;function t(o,a){return a===vs?o.mapping=ci:a===bs&&(o.mapping=ui),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===vs||a===bs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Yo extends Xo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ri=4,Ba=[.125,.215,.35,.446,.526,.582],En=20,us=new Yo,ka=new Be;let ds=null;const wn=(1+Math.sqrt(5))/2,ei=1/wn,Ga=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,wn,ei),new R(0,wn,-ei),new R(ei,0,wn),new R(-ei,0,wn),new R(wn,ei,0),new R(-wn,ei,0)];class Va{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ds=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ds),e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ds=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Fi,format:Ft,encoding:Rn,depthBuffer:!1},i=Ha(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ha(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vh(s)),this._blurMaterial=bh(s,e,t)}return i}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,us)}_sceneToCubeUV(e,t,n,i){const a=new wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(ka),u.toneMapping=en,u.autoClear=!1;const m=new Go({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),_=new st(new zn,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(ka),p=!0);for(let x=0;x<6;x++){const E=x%3;E===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):E===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));const M=this._cubeSize;hr(i,E*M,x>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ci||e.mapping===ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,us)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ga[(i-1)%Ga.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new st(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*En-1),p=s/_,f=isFinite(s)?1+Math.floor(u*p):En;f>En&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${En}`);const x=[];let E=0;for(let F=0;F<En;++F){const g=F/p,A=Math.exp(-g*g/2);x.push(A),F===0?E+=A:F<f&&(E+=2*A)}for(let F=0;F<x.length;F++)x[F]=x[F]/E;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=x,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=_,h.mipInt.value=M-n;const y=this._sizeLods[i],S=3*y*(i>M-ri?i-M+ri:0),L=4*(this._cubeSize-y);hr(t,S,L,3*y,2*y),l.setRenderTarget(t),l.render(d,us)}}function vh(r){const e=[],t=[],n=[];let i=r;const s=r-ri+1+Ba.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ri?l=Ba[o-r+ri-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,p=3,f=2,x=1,E=new Float32Array(p*_*m),M=new Float32Array(f*_*m),y=new Float32Array(x*_*m);for(let L=0;L<m;L++){const F=L%3*2/3-1,g=L>2?0:-1,A=[F,g,0,F+2/3,g,0,F+2/3,g+1,0,F,g,0,F+2/3,g+1,0,F,g+1,0];E.set(A,p*_*L),M.set(h,f*_*L);const P=[L,L,L,L,L,L];y.set(P,x*_*L)}const S=new tn;S.setAttribute("position",new Wt(E,p)),S.setAttribute("uv",new Wt(M,f)),S.setAttribute("faceIndex",new Wt(y,x)),e.push(S),i>ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ha(r,e,t){const n=new In(r,e,t);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function bh(r,e,t){const n=new Float32Array(En),i=new R(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zs(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Wa(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zs(),fragmentShader:`

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
		`,blending:on,depthTest:!1,depthWrite:!1})}function Xa(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function zs(){return`

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
	`}function yh(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===vs||l===bs,u=l===ci||l===ui;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Va(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new Va(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Mh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sh(r,e,t,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],34962);const m=d.morphAttributes;for(const _ in m){const p=m[_];for(let f=0,x=p.length;f<x;f++)e.update(p[f],34962)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let p=0;if(m!==null){const E=m.array;p=m.version;for(let M=0,y=E.length;M<y;M+=3){const S=E[M+0],L=E[M+1],F=E[M+2];h.push(S,L,L,F,F,S)}}else{const E=_.array;p=_.version;for(let M=0,y=E.length/3-1;M<y;M+=3){const S=M+0,L=M+1,F=M+2;h.push(S,L,L,F,F,S)}}const f=new(Fo(h)?Ho:Vo)(h,1);f.version=p;const x=s.get(d);x&&e.remove(x),s.set(d,f)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function wh(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){r.drawElements(s,m,a,h*l),t.update(m,s,1)}function d(h,m,_){if(_===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,h*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function Eh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Th(r,e){return r[0]-e[0]}function Ah(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Ch(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new He,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=_!==void 0?_.length:0;let f=s.get(u);if(f===void 0||f.count!==p){let H=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",H)};f!==void 0&&f.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],F=u.morphAttributes.normal||[],g=u.morphAttributes.color||[];let A=0;M===!0&&(A=1),y===!0&&(A=2),S===!0&&(A=3);let P=u.attributes.position.count*A,j=1;P>e.maxTextureSize&&(j=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const Z=new Float32Array(P*j*4*p),N=new Bo(Z,P,j,p);N.type=An,N.needsUpdate=!0;const D=A*4;for(let K=0;K<p;K++){const te=L[K],Y=F[K],ne=g[K],J=P*j*4*K;for(let W=0;W<te.count;W++){const B=W*D;M===!0&&(o.fromBufferAttribute(te,W),Z[J+B+0]=o.x,Z[J+B+1]=o.y,Z[J+B+2]=o.z,Z[J+B+3]=0),y===!0&&(o.fromBufferAttribute(Y,W),Z[J+B+4]=o.x,Z[J+B+5]=o.y,Z[J+B+6]=o.z,Z[J+B+7]=0),S===!0&&(o.fromBufferAttribute(ne,W),Z[J+B+8]=o.x,Z[J+B+9]=o.y,Z[J+B+10]=o.z,Z[J+B+11]=ne.itemSize===4?o.w:1)}}f={count:p,texture:N,size:new Se(P,j)},s.set(u,f),u.addEventListener("dispose",H)}let x=0;for(let M=0;M<m.length;M++)x+=m[M];const E=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",E),h.getUniforms().setValue(r,"morphTargetInfluences",m),h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const _=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==_){p=[];for(let y=0;y<_;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<_;y++){const S=p[y];S[0]=y,S[1]=m[y]}p.sort(Ah);for(let y=0;y<8;y++)y<_&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Th);const f=u.morphAttributes.position,x=u.morphAttributes.normal;let E=0;for(let y=0;y<8;y++){const S=a[y],L=S[0],F=S[1];L!==Number.MAX_SAFE_INTEGER&&F?(f&&u.getAttribute("morphTarget"+y)!==f[L]&&u.setAttribute("morphTarget"+y,f[L]),x&&u.getAttribute("morphNormal"+y)!==x[L]&&u.setAttribute("morphNormal"+y,x[L]),i[y]=F,E+=F):(f&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),x&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const M=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Lh(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const $o=new xt,Zo=new Bo,Ko=new pc,Jo=new qo,qa=[],ja=[],Ya=new Float32Array(16),$a=new Float32Array(9),Za=new Float32Array(4);function pi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=qa[i];if(s===void 0&&(s=new Float32Array(i),qa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Je(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Qe(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function br(r,e){let t=ja[e];t===void 0&&(t=new Int32Array(e),ja[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ph(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Dh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;r.uniform2fv(this.addr,e),Qe(t,e)}}function Rh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Je(t,e))return;r.uniform3fv(this.addr,e),Qe(t,e)}}function Ih(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;r.uniform4fv(this.addr,e),Qe(t,e)}}function Oh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,n))return;Za.set(n),r.uniformMatrix2fv(this.addr,!1,Za),Qe(t,n)}}function Fh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,n))return;$a.set(n),r.uniformMatrix3fv(this.addr,!1,$a),Qe(t,n)}}function Nh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Je(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qe(t,e)}else{if(Je(t,n))return;Ya.set(n),r.uniformMatrix4fv(this.addr,!1,Ya),Qe(t,n)}}function zh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Uh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;r.uniform2iv(this.addr,e),Qe(t,e)}}function Bh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Je(t,e))return;r.uniform3iv(this.addr,e),Qe(t,e)}}function kh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;r.uniform4iv(this.addr,e),Qe(t,e)}}function Gh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Vh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Je(t,e))return;r.uniform2uiv(this.addr,e),Qe(t,e)}}function Hh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Je(t,e))return;r.uniform3uiv(this.addr,e),Qe(t,e)}}function Wh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Je(t,e))return;r.uniform4uiv(this.addr,e),Qe(t,e)}}function Xh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||$o,i)}function qh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ko,i)}function jh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jo,i)}function Yh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zo,i)}function $h(r){switch(r){case 5126:return Ph;case 35664:return Dh;case 35665:return Rh;case 35666:return Ih;case 35674:return Oh;case 35675:return Fh;case 35676:return Nh;case 5124:case 35670:return zh;case 35667:case 35671:return Uh;case 35668:case 35672:return Bh;case 35669:case 35673:return kh;case 5125:return Gh;case 36294:return Vh;case 36295:return Hh;case 36296:return Wh;case 35678:case 36198:case 36298:case 36306:case 35682:return Xh;case 35679:case 36299:case 36307:return qh;case 35680:case 36300:case 36308:case 36293:return jh;case 36289:case 36303:case 36311:case 36292:return Yh}}function Zh(r,e){r.uniform1fv(this.addr,e)}function Kh(r,e){const t=pi(e,this.size,2);r.uniform2fv(this.addr,t)}function Jh(r,e){const t=pi(e,this.size,3);r.uniform3fv(this.addr,t)}function Qh(r,e){const t=pi(e,this.size,4);r.uniform4fv(this.addr,t)}function ef(r,e){const t=pi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function tf(r,e){const t=pi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function nf(r,e){const t=pi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rf(r,e){r.uniform1iv(this.addr,e)}function sf(r,e){r.uniform2iv(this.addr,e)}function af(r,e){r.uniform3iv(this.addr,e)}function of(r,e){r.uniform4iv(this.addr,e)}function lf(r,e){r.uniform1uiv(this.addr,e)}function cf(r,e){r.uniform2uiv(this.addr,e)}function uf(r,e){r.uniform3uiv(this.addr,e)}function df(r,e){r.uniform4uiv(this.addr,e)}function hf(r,e,t){const n=this.cache,i=e.length,s=br(t,i);Je(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||$o,s[o])}function ff(r,e,t){const n=this.cache,i=e.length,s=br(t,i);Je(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ko,s[o])}function pf(r,e,t){const n=this.cache,i=e.length,s=br(t,i);Je(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Jo,s[o])}function mf(r,e,t){const n=this.cache,i=e.length,s=br(t,i);Je(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zo,s[o])}function gf(r){switch(r){case 5126:return Zh;case 35664:return Kh;case 35665:return Jh;case 35666:return Qh;case 35674:return ef;case 35675:return tf;case 35676:return nf;case 5124:case 35670:return rf;case 35667:case 35671:return sf;case 35668:case 35672:return af;case 35669:case 35673:return of;case 5125:return lf;case 36294:return cf;case 36295:return uf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return mf}}class _f{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=$h(t.type)}}class xf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=gf(t.type)}}class vf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const hs=/(\w+)(\])?(\[|\.)?/g;function Ka(r,e){r.seq.push(e),r.map[e.id]=e}function bf(r,e,t){const n=r.name,i=n.length;for(hs.lastIndex=0;;){const s=hs.exec(n),o=hs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ka(t,c===void 0?new _f(a,r,e):new xf(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new vf(a),Ka(t,d)),t=d}}}class gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);bf(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ja(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let yf=0;function Mf(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Sf(r){switch(r){case Rn:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Qa(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Mf(r.getShaderSource(e),o)}else return i}function wf(r,e){const t=Sf(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ef(r,e){let t;switch(e){case Gl:t="Linear";break;case Vl:t="Reinhard";break;case Hl:t="OptimizedCineon";break;case Wl:t="ACESFilmic";break;case Xl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function Af(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cf(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Pi(r){return r!==""}function eo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function to(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ws(r){return r.replace(Lf,Pf)}function Pf(r,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ws(t)}const Df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function no(r){return r.replace(Df,Rf)}function Rf(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function io(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function If(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ao?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Co?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Of(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ci:case ui:e="ENVMAP_TYPE_CUBE";break;case vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ff(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ui:e="ENVMAP_MODE_REFRACTION";break}return e}function Nf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Do:e="ENVMAP_BLENDING_MULTIPLY";break;case Bl:e="ENVMAP_BLENDING_MIX";break;case kl:e="ENVMAP_BLENDING_ADD";break}return e}function zf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Uf(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=If(t),c=Of(t),u=Ff(t),d=Nf(t),h=zf(t),m=t.isWebGL2?"":Tf(t),_=Af(s),p=i.createProgram();let f,x,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[_].filter(Pi).join(`
`),f.length>0&&(f+=`
`),x=[m,_].filter(Pi).join(`
`),x.length>0&&(x+=`
`)):(f=[io(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),x=[m,io(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==en?"#define TONE_MAPPING":"",t.toneMapping!==en?Ee.tonemapping_pars_fragment:"",t.toneMapping!==en?Ef("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,wf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),o=ws(o),o=eo(o,t),o=to(o,t),a=ws(a),a=eo(a,t),a=to(a,t),o=no(o),a=no(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",t.glslVersion===Ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=E+f+o,y=E+x+a,S=Ja(i,35633,M),L=Ja(i,35632,y);if(i.attachShader(p,S),i.attachShader(p,L),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(S).trim(),j=i.getShaderInfoLog(L).trim();let Z=!0,N=!0;if(i.getProgramParameter(p,35714)===!1){Z=!1;const D=Qa(i,S,"vertex"),H=Qa(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+D+`
`+H)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(P===""||j==="")&&(N=!1);N&&(this.diagnostics={runnable:Z,programLog:A,vertexShader:{log:P,prefix:f},fragmentShader:{log:j,prefix:x}})}i.deleteShader(S),i.deleteShader(L);let F;this.getUniforms=function(){return F===void 0&&(F=new gr(i,p)),F};let g;return this.getAttributes=function(){return g===void 0&&(g=Cf(i,p)),g},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=yf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=L,this}let Bf=0;class kf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gf(e),t.set(e,n)),n}}class Gf{constructor(e){this.id=Bf++,this.code=e,this.usedTimes=0}}function Vf(r,e,t,n,i,s,o){const a=new ko,l=new kf,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g,A,P,j,Z){const N=j.fog,D=Z.geometry,H=g.isMeshStandardMaterial?j.environment:null,K=(g.isMeshStandardMaterial?t:e).get(g.envMap||H),te=K&&K.mapping===vr?K.image.height:null,Y=_[g.type];g.precision!==null&&(m=i.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const ne=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,J=ne!==void 0?ne.length:0;let W=0;D.morphAttributes.position!==void 0&&(W=1),D.morphAttributes.normal!==void 0&&(W=2),D.morphAttributes.color!==void 0&&(W=3);let B,ae,ie,oe;if(Y){const Fe=Vt[Y];B=Fe.vertexShader,ae=Fe.fragmentShader}else B=g.vertexShader,ae=g.fragmentShader,l.update(g),ie=l.getVertexShaderID(g),oe=l.getFragmentShaderID(g);const X=r.getRenderTarget(),Ce=g.alphaTest>0,pe=g.clearcoat>0,ve=g.iridescence>0;return{isWebGL2:u,shaderID:Y,shaderName:g.type,vertexShader:B,fragmentShader:ae,defines:g.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:X===null?r.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Rn,map:!!g.map,matcap:!!g.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:te,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===uc,tangentSpaceNormalMap:g.normalMapType===Oo,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===Ge,clearcoat:pe,clearcoatMap:pe&&!!g.clearcoatMap,clearcoatRoughnessMap:pe&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!g.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!g.iridescenceMap,iridescenceThicknessMap:ve&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===oi,alphaMap:!!g.alphaMap,alphaTest:Ce,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!D.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(g.map||g.bumpMap||g.normalMap||g.specularMap||g.alphaMap||g.emissiveMap||g.roughnessMap||g.metalnessMap||g.clearcoatNormalMap||g.iridescenceMap||g.iridescenceThicknessMap||g.transmission>0||g.transmissionMap||g.thicknessMap||g.specularIntensityMap||g.specularColorMap||g.sheen>0||g.sheenColorMap||g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!N,useFog:g.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:W,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:g.toneMapped?r.toneMapping:en,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Os,flipSided:g.side===Pt,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function f(g){const A=[];if(g.shaderID?A.push(g.shaderID):(A.push(g.customVertexShaderID),A.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)A.push(P),A.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(x(A,g),E(A,g),A.push(r.outputEncoding)),A.push(g.customProgramCacheKey),A.join()}function x(g,A){g.push(A.precision),g.push(A.outputEncoding),g.push(A.envMapMode),g.push(A.envMapCubeUVHeight),g.push(A.combine),g.push(A.vertexUvs),g.push(A.fogExp2),g.push(A.sizeAttenuation),g.push(A.morphTargetsCount),g.push(A.morphAttributeCount),g.push(A.numDirLights),g.push(A.numPointLights),g.push(A.numSpotLights),g.push(A.numSpotLightMaps),g.push(A.numHemiLights),g.push(A.numRectAreaLights),g.push(A.numDirLightShadows),g.push(A.numPointLightShadows),g.push(A.numSpotLightShadows),g.push(A.numSpotLightShadowsWithMaps),g.push(A.shadowMapType),g.push(A.toneMapping),g.push(A.numClippingPlanes),g.push(A.numClipIntersection),g.push(A.depthPacking)}function E(g,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),g.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),g.push(a.mask)}function M(g){const A=_[g.type];let P;if(A){const j=Vt[A];P=Ac.clone(j.uniforms)}else P=g.uniforms;return P}function y(g,A){let P;for(let j=0,Z=c.length;j<Z;j++){const N=c[j];if(N.cacheKey===A){P=N,++P.usedTimes;break}}return P===void 0&&(P=new Uf(r,A,g,s),c.push(P)),P}function S(g){if(--g.usedTimes===0){const A=c.indexOf(g);c[A]=c[c.length-1],c.pop(),g.destroy()}}function L(g){l.remove(g)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:y,releaseProgram:S,releaseShaderCache:L,programs:c,dispose:F}}function Hf(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Wf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ro(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function so(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,h,m,_,p,f){let x=r[e];return x===void 0?(x={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:p,group:f},r[e]=x):(x.id=d.id,x.object=d,x.geometry=h,x.material=m,x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=p,x.group=f),e++,x}function a(d,h,m,_,p,f){const x=o(d,h,m,_,p,f);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function l(d,h,m,_,p,f){const x=o(d,h,m,_,p,f);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function c(d,h){t.length>1&&t.sort(d||Wf),n.length>1&&n.sort(h||ro),i.length>1&&i.sort(h||ro)}function u(){for(let d=e,h=r.length;d<h;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Xf(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new so,r.set(n,[o])):i>=s.length?(o=new so,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function qf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Be};break;case"SpotLight":t={position:new R,direction:new R,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function jf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Yf=0;function $f(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Zf(r,e){const t=new qf,n=jf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new R);const s=new R,o=new Ye,a=new Ye;function l(u,d){let h=0,m=0,_=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let p=0,f=0,x=0,E=0,M=0,y=0,S=0,L=0,F=0,g=0;u.sort($f);const A=d!==!0?Math.PI:1;for(let j=0,Z=u.length;j<Z;j++){const N=u[j],D=N.color,H=N.intensity,K=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=D.r*H*A,m+=D.g*H*A,_+=D.b*H*A;else if(N.isLightProbe)for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],H);else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const ne=N.shadow,J=n.get(N);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=te,i.directionalShadowMatrix[p]=N.shadow.matrix,y++}i.directional[p]=Y,p++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(D).multiplyScalar(H*A),Y.distance=K,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[x]=Y;const ne=N.shadow;if(N.map&&(i.spotLightMap[F]=N.map,F++,ne.updateMatrices(N),N.castShadow&&g++),i.spotLightMatrix[x]=ne.matrix,N.castShadow){const J=n.get(N);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,i.spotShadow[x]=J,i.spotShadowMap[x]=te,L++}x++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(D).multiplyScalar(H),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[E]=Y,E++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*A),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const ne=N.shadow,J=n.get(N);J.shadowBias=ne.bias,J.shadowNormalBias=ne.normalBias,J.shadowRadius=ne.radius,J.shadowMapSize=ne.mapSize,J.shadowCameraNear=ne.camera.near,J.shadowCameraFar=ne.camera.far,i.pointShadow[f]=J,i.pointShadowMap[f]=te,i.pointShadowMatrix[f]=N.shadow.matrix,S++}i.point[f]=Y,f++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(H*A),Y.groundColor.copy(N.groundColor).multiplyScalar(H*A),i.hemi[M]=Y,M++}}E>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=_;const P=i.hash;(P.directionalLength!==p||P.pointLength!==f||P.spotLength!==x||P.rectAreaLength!==E||P.hemiLength!==M||P.numDirectionalShadows!==y||P.numPointShadows!==S||P.numSpotShadows!==L||P.numSpotMaps!==F)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=E,i.point.length=f,i.hemi.length=M,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=L+F-g,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=g,P.directionalLength=p,P.pointLength=f,P.spotLength=x,P.rectAreaLength=E,P.hemiLength=M,P.numDirectionalShadows=y,P.numPointShadows=S,P.numSpotShadows=L,P.numSpotMaps=F,i.version=Yf++)}function c(u,d){let h=0,m=0,_=0,p=0,f=0;const x=d.matrixWorldInverse;for(let E=0,M=u.length;E<M;E++){const y=u[E];if(y.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),h++}else if(y.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),_++}else if(y.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),a.identity(),o.copy(y.matrixWorld),o.premultiply(x),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){const S=i.hemi[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(x),f++}}}return{setup:l,setupView:c,state:i}}function ao(r,e){const t=new Zf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Kf(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ao(r,e),t.set(s,[l])):o>=a.length?(l=new ao(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Jf extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qf extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ep=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function np(r,e,t){let n=new Ns;const i=new Se,s=new Se,o=new He,a=new Jf({depthPacking:cc}),l=new Qf,c={},u=t.maxTextureSize,d={0:Pt,1:Pn,2:Os},h=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:ep,fragmentShader:tp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new tn;_.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new st(_,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao,this.render=function(y,S,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const F=r.getRenderTarget(),g=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),P=r.state;P.setBlending(on),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let j=0,Z=y.length;j<Z;j++){const N=y[j],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const H=D.getFrameExtents();if(i.multiply(H),s.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/H.x),i.x=s.x*H.x,D.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/H.y),i.y=s.y*H.y,D.mapSize.y=s.y)),D.map===null){const te=this.type!==Li?{minFilter:pt,magFilter:pt}:{};D.map=new In(i.x,i.y,te),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const K=D.getViewportCount();for(let te=0;te<K;te++){const Y=D.getViewport(te);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),P.viewport(o),D.updateMatrices(N,te),n=D.getFrustum(),M(S,L,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===Li&&x(D,L),D.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(F,g,A)};function x(y,S){const L=e.update(p);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new In(i.x,i.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(S,null,L,h,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(S,null,L,m,p,null)}function E(y,S,L,F,g,A){let P=null;const j=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(j!==void 0)P=j;else if(P=L.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const Z=P.uuid,N=S.uuid;let D=c[Z];D===void 0&&(D={},c[Z]=D);let H=D[N];H===void 0&&(H=P.clone(),D[N]=H),P=H}return P.visible=S.visible,P.wireframe=S.wireframe,A===Li?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:d[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,L.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(L.matrixWorld),P.nearDistance=F,P.farDistance=g),P}function M(y,S,L,F,g){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&g===Li)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const j=e.update(y),Z=y.material;if(Array.isArray(Z)){const N=j.groups;for(let D=0,H=N.length;D<H;D++){const K=N[D],te=Z[K.materialIndex];if(te&&te.visible){const Y=E(y,te,F,L.near,L.far,g);r.renderBufferDirect(L,null,j,Y,y,K)}}}else if(Z.visible){const N=E(y,Z,F,L.near,L.far,g);r.renderBufferDirect(L,null,j,N,y,null)}}const P=y.children;for(let j=0,Z=P.length;j<Z;j++)M(P[j],S,L,F,g)}}function ip(r,e,t){const n=t.isWebGL2;function i(){let C=!1;const G=new He;let Q=null;const de=new He(0,0,0,0);return{setMask:function(_e){Q!==_e&&!C&&(r.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){C=_e},setClear:function(_e,Ne,tt,at,gn){gn===!0&&(_e*=at,Ne*=at,tt*=at),G.set(_e,Ne,tt,at),de.equals(G)===!1&&(r.clearColor(_e,Ne,tt,at),de.copy(G))},reset:function(){C=!1,Q=null,de.set(-1,0,0,0)}}}function s(){let C=!1,G=null,Q=null,de=null;return{setTest:function(_e){_e?Ce(2929):pe(2929)},setMask:function(_e){G!==_e&&!C&&(r.depthMask(_e),G=_e)},setFunc:function(_e){if(Q!==_e){switch(_e){case Rl:r.depthFunc(512);break;case Il:r.depthFunc(519);break;case Ol:r.depthFunc(513);break;case xs:r.depthFunc(515);break;case Fl:r.depthFunc(514);break;case Nl:r.depthFunc(518);break;case zl:r.depthFunc(516);break;case Ul:r.depthFunc(517);break;default:r.depthFunc(515)}Q=_e}},setLocked:function(_e){C=_e},setClear:function(_e){de!==_e&&(r.clearDepth(_e),de=_e)},reset:function(){C=!1,G=null,Q=null,de=null}}}function o(){let C=!1,G=null,Q=null,de=null,_e=null,Ne=null,tt=null,at=null,gn=null;return{setTest:function(Ve){C||(Ve?Ce(2960):pe(2960))},setMask:function(Ve){G!==Ve&&!C&&(r.stencilMask(Ve),G=Ve)},setFunc:function(Ve,qt,At){(Q!==Ve||de!==qt||_e!==At)&&(r.stencilFunc(Ve,qt,At),Q=Ve,de=qt,_e=At)},setOp:function(Ve,qt,At){(Ne!==Ve||tt!==qt||at!==At)&&(r.stencilOp(Ve,qt,At),Ne=Ve,tt=qt,at=At)},setLocked:function(Ve){C=Ve},setClear:function(Ve){gn!==Ve&&(r.clearStencil(Ve),gn=Ve)},reset:function(){C=!1,G=null,Q=null,de=null,_e=null,Ne=null,tt=null,at=null,gn=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,p=[],f=null,x=!1,E=null,M=null,y=null,S=null,L=null,F=null,g=null,A=!1,P=null,j=null,Z=null,N=null,D=null;const H=r.getParameter(35661);let K=!1,te=0;const Y=r.getParameter(7938);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=te>=2);let ne=null,J={};const W=r.getParameter(3088),B=r.getParameter(2978),ae=new He().fromArray(W),ie=new He().fromArray(B);function oe(C,G,Q){const de=new Uint8Array(4),_e=r.createTexture();r.bindTexture(C,_e),r.texParameteri(C,10241,9728),r.texParameteri(C,10240,9728);for(let Ne=0;Ne<Q;Ne++)r.texImage2D(G+Ne,0,6408,1,1,0,6408,5121,de);return _e}const X={};X[3553]=oe(3553,3553,1),X[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(2929),l.setFunc(xs),Ze(!1),ut(Ks),Ce(2884),et(on);function Ce(C){h[C]!==!0&&(r.enable(C),h[C]=!0)}function pe(C){h[C]!==!1&&(r.disable(C),h[C]=!1)}function ve(C,G){return m[C]!==G?(r.bindFramebuffer(C,G),m[C]=G,n&&(C===36009&&(m[36160]=G),C===36160&&(m[36009]=G)),!0):!1}function fe(C,G){let Q=p,de=!1;if(C)if(Q=_.get(G),Q===void 0&&(Q=[],_.set(G,Q)),C.isWebGLMultipleRenderTargets){const _e=C.texture;if(Q.length!==_e.length||Q[0]!==36064){for(let Ne=0,tt=_e.length;Ne<tt;Ne++)Q[Ne]=36064+Ne;Q.length=_e.length,de=!0}}else Q[0]!==36064&&(Q[0]=36064,de=!0);else Q[0]!==1029&&(Q[0]=1029,de=!0);de&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Fe(C){return f!==C?(r.useProgram(C),f=C,!0):!1}const we={[ti]:32774,[yl]:32778,[Ml]:32779};if(n)we[ta]=32775,we[na]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(we[ta]=C.MIN_EXT,we[na]=C.MAX_EXT)}const be={[Sl]:0,[wl]:1,[El]:768,[Lo]:770,[Dl]:776,[Ll]:774,[Al]:772,[Tl]:769,[Po]:771,[Pl]:775,[Cl]:773};function et(C,G,Q,de,_e,Ne,tt,at){if(C===on){x===!0&&(pe(3042),x=!1);return}if(x===!1&&(Ce(3042),x=!0),C!==bl){if(C!==E||at!==A){if((M!==ti||L!==ti)&&(r.blendEquation(32774),M=ti,L=ti),at)switch(C){case oi:r.blendFuncSeparate(1,771,1,771);break;case Js:r.blendFunc(1,1);break;case Qs:r.blendFuncSeparate(0,769,0,1);break;case ea:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case oi:r.blendFuncSeparate(770,771,1,771);break;case Js:r.blendFunc(770,1);break;case Qs:r.blendFuncSeparate(0,769,0,1);break;case ea:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}y=null,S=null,F=null,g=null,E=C,A=at}return}_e=_e||G,Ne=Ne||Q,tt=tt||de,(G!==M||_e!==L)&&(r.blendEquationSeparate(we[G],we[_e]),M=G,L=_e),(Q!==y||de!==S||Ne!==F||tt!==g)&&(r.blendFuncSeparate(be[Q],be[de],be[Ne],be[tt]),y=Q,S=de,F=Ne,g=tt),E=C,A=!1}function $e(C,G){C.side===Os?pe(2884):Ce(2884);let Q=C.side===Pt;G&&(Q=!Q),Ze(Q),C.blending===oi&&C.transparent===!1?et(on):et(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const de=C.stencilWrite;c.setTest(de),de&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ze(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ce(32926):pe(32926)}function Ze(C){P!==C&&(C?r.frontFace(2304):r.frontFace(2305),P=C)}function ut(C){C!==xl?(Ce(2884),C!==j&&(C===Ks?r.cullFace(1029):C===vl?r.cullFace(1028):r.cullFace(1032))):pe(2884),j=C}function We(C){C!==Z&&(K&&r.lineWidth(C),Z=C)}function ze(C,G,Q){C?(Ce(32823),(N!==G||D!==Q)&&(r.polygonOffset(G,Q),N=G,D=Q)):pe(32823)}function Tt(C){C?Ce(3089):pe(3089)}function gt(C){C===void 0&&(C=33984+H-1),ne!==C&&(r.activeTexture(C),ne=C)}function w(C,G,Q){Q===void 0&&(ne===null?Q=33984+H-1:Q=ne);let de=J[Q];de===void 0&&(de={type:void 0,texture:void 0},J[Q]=de),(de.type!==C||de.texture!==G)&&(ne!==Q&&(r.activeTexture(Q),ne=Q),r.bindTexture(C,G||X[C]),de.type=C,de.texture=G)}function v(){const C=J[ne];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function k(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function T(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function I(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(C){ae.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),ae.copy(C))}function me(C){ie.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),ie.copy(C))}function Le(C,G){let Q=d.get(G);Q===void 0&&(Q=new WeakMap,d.set(G,Q));let de=Q.get(C);de===void 0&&(de=r.getUniformBlockIndex(G,C.name),Q.set(C,de))}function Pe(C,G){const de=d.get(G).get(C);u.get(G)!==de&&(r.uniformBlockBinding(G,de,C.__bindingPointIndex),u.set(G,de))}function Ue(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,J={},m={},_=new WeakMap,p=[],f=null,x=!1,E=null,M=null,y=null,S=null,L=null,F=null,g=null,A=!1,P=null,j=null,Z=null,N=null,D=null,ae.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:pe,bindFramebuffer:ve,drawBuffers:fe,useProgram:Fe,setBlending:et,setMaterial:$e,setFlipSided:Ze,setCullFace:ut,setLineWidth:We,setPolygonOffset:ze,setScissorTest:Tt,activeTexture:gt,bindTexture:w,unbindTexture:v,compressedTexImage2D:k,compressedTexImage3D:ee,texImage2D:he,texImage3D:ce,updateUBOMapping:Le,uniformBlockBinding:Pe,texStorage2D:I,texStorage3D:ue,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:ye,compressedTexSubImage3D:T,scissor:ge,viewport:me,reset:Ue}}function rp(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,v){return x?new OffscreenCanvas(w,v):zi("canvas")}function M(w,v,k,ee){let re=1;if((w.width>ee||w.height>ee)&&(re=ee/Math.max(w.width,w.height)),re<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const le=v?Ss:Math.floor,ye=le(re*w.width),T=le(re*w.height);p===void 0&&(p=E(ye,T));const I=k?E(ye,T):p;return I.width=ye,I.height=T,I.getContext("2d").drawImage(w,0,0,ye,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ye+"x"+T+")."),I}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function y(w){return Ca(w.width)&&Ca(w.height)}function S(w){return a?!1:w.wrapS!==Ot||w.wrapT!==Ot||w.minFilter!==pt&&w.minFilter!==Lt}function L(w,v){return w.generateMipmaps&&v&&w.minFilter!==pt&&w.minFilter!==Lt}function F(w){r.generateMipmap(w)}function g(w,v,k,ee,re=!1){if(a===!1)return v;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let le=v;return v===6403&&(k===5126&&(le=33326),k===5131&&(le=33325),k===5121&&(le=33321)),v===33319&&(k===5126&&(le=33328),k===5131&&(le=33327),k===5121&&(le=33323)),v===6408&&(k===5126&&(le=34836),k===5131&&(le=34842),k===5121&&(le=ee===Ge&&re===!1?35907:32856),k===32819&&(le=32854),k===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function A(w,v,k){return L(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==pt&&w.minFilter!==Lt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function P(w){return w===pt||w===ia||w===Nr?9728:9729}function j(w){const v=w.target;v.removeEventListener("dispose",j),N(v),v.isVideoTexture&&_.delete(v)}function Z(w){const v=w.target;v.removeEventListener("dispose",Z),H(v)}function N(w){const v=n.get(w);if(v.__webglInit===void 0)return;const k=w.source,ee=f.get(k);if(ee){const re=ee[v.__cacheKey];re.usedTimes--,re.usedTimes===0&&D(w),Object.keys(ee).length===0&&f.delete(k)}n.remove(w)}function D(w){const v=n.get(w);r.deleteTexture(v.__webglTexture);const k=w.source,ee=f.get(k);delete ee[v.__cacheKey],o.memory.textures--}function H(w){const v=w.texture,k=n.get(w),ee=n.get(v);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)r.deleteFramebuffer(k.__webglFramebuffer[re]),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[re]);else{if(r.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let re=0;re<k.__webglColorRenderbuffer.length;re++)k.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[re]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let re=0,le=v.length;re<le;re++){const ye=n.get(v[re]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(v[re])}n.remove(v),n.remove(w)}let K=0;function te(){K=0}function Y(){const w=K;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),K+=1,w}function ne(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.encoding),v.join()}function J(w,v){const k=n.get(w);if(w.isVideoTexture&&Tt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(k,w,v);return}}t.bindTexture(3553,k.__webglTexture,33984+v)}function W(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){pe(k,w,v);return}t.bindTexture(35866,k.__webglTexture,33984+v)}function B(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){pe(k,w,v);return}t.bindTexture(32879,k.__webglTexture,33984+v)}function ae(w,v){const k=n.get(w);if(w.version>0&&k.__version!==w.version){ve(k,w,v);return}t.bindTexture(34067,k.__webglTexture,33984+v)}const ie={[Nt]:10497,[Ot]:33071,[ys]:33648},oe={[pt]:9728,[ia]:9984,[Nr]:9986,[Lt]:9729,[ql]:9985,[Oi]:9987};function X(w,v,k){if(k?(r.texParameteri(w,10242,ie[v.wrapS]),r.texParameteri(w,10243,ie[v.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,ie[v.wrapR]),r.texParameteri(w,10240,oe[v.magFilter]),r.texParameteri(w,10241,oe[v.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(v.wrapS!==Ot||v.wrapT!==Ot)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,P(v.magFilter)),r.texParameteri(w,10241,P(v.minFilter)),v.minFilter!==pt&&v.minFilter!==Lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===pt||v.minFilter!==Nr&&v.minFilter!==Oi||v.type===An&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Fi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Ce(w,v){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",j));const ee=v.source;let re=f.get(ee);re===void 0&&(re={},f.set(ee,re));const le=ne(v);if(le!==w.__cacheKey){re[le]===void 0&&(re[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),re[le].usedTimes++;const ye=re[w.__cacheKey];ye!==void 0&&(re[w.__cacheKey].usedTimes--,ye.usedTimes===0&&D(v)),w.__cacheKey=le,w.__webglTexture=re[le].texture}return k}function pe(w,v,k){let ee=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=35866),v.isData3DTexture&&(ee=32879);const re=Ce(w,v),le=v.source;t.bindTexture(ee,w.__webglTexture,33984+k);const ye=n.get(le);if(le.version!==ye.__version||re===!0){t.activeTexture(33984+k),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const T=S(v)&&y(v.image)===!1;let I=M(v.image,T,!1,u);I=gt(v,I);const ue=y(I)||a,he=s.convert(v.format,v.encoding);let ce=s.convert(v.type),ge=g(v.internalFormat,he,ce,v.encoding,v.isVideoTexture);X(ee,v,ue);let me;const Le=v.mipmaps,Pe=a&&v.isVideoTexture!==!0,Ue=ye.__version===void 0||re===!0,C=A(v,I,ue);if(v.isDepthTexture)ge=6402,a?v.type===An?ge=36012:v.type===Tn?ge=33190:v.type===li?ge=35056:ge=33189:v.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Cn&&ge===6402&&v.type!==Io&&v.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Tn,ce=s.convert(v.type)),v.format===di&&ge===6402&&(ge=34041,v.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=li,ce=s.convert(v.type))),Ue&&(Pe?t.texStorage2D(3553,1,ge,I.width,I.height):t.texImage2D(3553,0,ge,I.width,I.height,0,he,ce,null));else if(v.isDataTexture)if(Le.length>0&&ue){Pe&&Ue&&t.texStorage2D(3553,C,ge,Le[0].width,Le[0].height);for(let G=0,Q=Le.length;G<Q;G++)me=Le[G],Pe?t.texSubImage2D(3553,G,0,0,me.width,me.height,he,ce,me.data):t.texImage2D(3553,G,ge,me.width,me.height,0,he,ce,me.data);v.generateMipmaps=!1}else Pe?(Ue&&t.texStorage2D(3553,C,ge,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,he,ce,I.data)):t.texImage2D(3553,0,ge,I.width,I.height,0,he,ce,I.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&Ue&&t.texStorage3D(35866,C,ge,Le[0].width,Le[0].height,I.depth);for(let G=0,Q=Le.length;G<Q;G++)me=Le[G],v.format!==Ft?he!==null?Pe?t.compressedTexSubImage3D(35866,G,0,0,0,me.width,me.height,I.depth,he,me.data,0,0):t.compressedTexImage3D(35866,G,ge,me.width,me.height,I.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,G,0,0,0,me.width,me.height,I.depth,he,ce,me.data):t.texImage3D(35866,G,ge,me.width,me.height,I.depth,0,he,ce,me.data)}else{Pe&&Ue&&t.texStorage2D(3553,C,ge,Le[0].width,Le[0].height);for(let G=0,Q=Le.length;G<Q;G++)me=Le[G],v.format!==Ft?he!==null?Pe?t.compressedTexSubImage2D(3553,G,0,0,me.width,me.height,he,me.data):t.compressedTexImage2D(3553,G,ge,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,G,0,0,me.width,me.height,he,ce,me.data):t.texImage2D(3553,G,ge,me.width,me.height,0,he,ce,me.data)}else if(v.isDataArrayTexture)Pe?(Ue&&t.texStorage3D(35866,C,ge,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,he,ce,I.data)):t.texImage3D(35866,0,ge,I.width,I.height,I.depth,0,he,ce,I.data);else if(v.isData3DTexture)Pe?(Ue&&t.texStorage3D(32879,C,ge,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,he,ce,I.data)):t.texImage3D(32879,0,ge,I.width,I.height,I.depth,0,he,ce,I.data);else if(v.isFramebufferTexture){if(Ue)if(Pe)t.texStorage2D(3553,C,ge,I.width,I.height);else{let G=I.width,Q=I.height;for(let de=0;de<C;de++)t.texImage2D(3553,de,ge,G,Q,0,he,ce,null),G>>=1,Q>>=1}}else if(Le.length>0&&ue){Pe&&Ue&&t.texStorage2D(3553,C,ge,Le[0].width,Le[0].height);for(let G=0,Q=Le.length;G<Q;G++)me=Le[G],Pe?t.texSubImage2D(3553,G,0,0,he,ce,me):t.texImage2D(3553,G,ge,he,ce,me);v.generateMipmaps=!1}else Pe?(Ue&&t.texStorage2D(3553,C,ge,I.width,I.height),t.texSubImage2D(3553,0,0,0,he,ce,I)):t.texImage2D(3553,0,ge,he,ce,I);L(v,ue)&&F(ee),ye.__version=le.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ve(w,v,k){if(v.image.length!==6)return;const ee=Ce(w,v),re=v.source;t.bindTexture(34067,w.__webglTexture,33984+k);const le=n.get(re);if(re.version!==le.__version||ee===!0){t.activeTexture(33984+k),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,T=v.image[0]&&v.image[0].isDataTexture,I=[];for(let G=0;G<6;G++)!ye&&!T?I[G]=M(v.image[G],!1,!0,c):I[G]=T?v.image[G].image:v.image[G],I[G]=gt(v,I[G]);const ue=I[0],he=y(ue)||a,ce=s.convert(v.format,v.encoding),ge=s.convert(v.type),me=g(v.internalFormat,ce,ge,v.encoding),Le=a&&v.isVideoTexture!==!0,Pe=le.__version===void 0||ee===!0;let Ue=A(v,ue,he);X(34067,v,he);let C;if(ye){Le&&Pe&&t.texStorage2D(34067,Ue,me,ue.width,ue.height);for(let G=0;G<6;G++){C=I[G].mipmaps;for(let Q=0;Q<C.length;Q++){const de=C[Q];v.format!==Ft?ce!==null?Le?t.compressedTexSubImage2D(34069+G,Q,0,0,de.width,de.height,ce,de.data):t.compressedTexImage2D(34069+G,Q,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+G,Q,0,0,de.width,de.height,ce,ge,de.data):t.texImage2D(34069+G,Q,me,de.width,de.height,0,ce,ge,de.data)}}}else{C=v.mipmaps,Le&&Pe&&(C.length>0&&Ue++,t.texStorage2D(34067,Ue,me,I[0].width,I[0].height));for(let G=0;G<6;G++)if(T){Le?t.texSubImage2D(34069+G,0,0,0,I[G].width,I[G].height,ce,ge,I[G].data):t.texImage2D(34069+G,0,me,I[G].width,I[G].height,0,ce,ge,I[G].data);for(let Q=0;Q<C.length;Q++){const _e=C[Q].image[G].image;Le?t.texSubImage2D(34069+G,Q+1,0,0,_e.width,_e.height,ce,ge,_e.data):t.texImage2D(34069+G,Q+1,me,_e.width,_e.height,0,ce,ge,_e.data)}}else{Le?t.texSubImage2D(34069+G,0,0,0,ce,ge,I[G]):t.texImage2D(34069+G,0,me,ce,ge,I[G]);for(let Q=0;Q<C.length;Q++){const de=C[Q];Le?t.texSubImage2D(34069+G,Q+1,0,0,ce,ge,de.image[G]):t.texImage2D(34069+G,Q+1,me,ce,ge,de.image[G])}}}L(v,he)&&F(34067),le.__version=re.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function fe(w,v,k,ee,re){const le=s.convert(k.format,k.encoding),ye=s.convert(k.type),T=g(k.internalFormat,le,ye,k.encoding);n.get(v).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,T,v.width,v.height,v.depth,0,le,ye,null):t.texImage2D(re,0,T,v.width,v.height,0,le,ye,null)),t.bindFramebuffer(36160,w),ze(v)?h.framebufferTexture2DMultisampleEXT(36160,ee,re,n.get(k).__webglTexture,0,We(v)):(re===3553||re>=34069&&re<=34074)&&r.framebufferTexture2D(36160,ee,re,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(w,v,k){if(r.bindRenderbuffer(36161,w),v.depthBuffer&&!v.stencilBuffer){let ee=33189;if(k||ze(v)){const re=v.depthTexture;re&&re.isDepthTexture&&(re.type===An?ee=36012:re.type===Tn&&(ee=33190));const le=We(v);ze(v)?h.renderbufferStorageMultisampleEXT(36161,le,ee,v.width,v.height):r.renderbufferStorageMultisample(36161,le,ee,v.width,v.height)}else r.renderbufferStorage(36161,ee,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(v.depthBuffer&&v.stencilBuffer){const ee=We(v);k&&ze(v)===!1?r.renderbufferStorageMultisample(36161,ee,35056,v.width,v.height):ze(v)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const ee=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let re=0;re<ee.length;re++){const le=ee[re],ye=s.convert(le.format,le.encoding),T=s.convert(le.type),I=g(le.internalFormat,ye,T,le.encoding),ue=We(v);k&&ze(v)===!1?r.renderbufferStorageMultisample(36161,ue,I,v.width,v.height):ze(v)?h.renderbufferStorageMultisampleEXT(36161,ue,I,v.width,v.height):r.renderbufferStorage(36161,I,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function we(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const ee=n.get(v.depthTexture).__webglTexture,re=We(v);if(v.depthTexture.format===Cn)ze(v)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,re):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(v.depthTexture.format===di)ze(v)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,re):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function be(w){const v=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");we(v.__webglFramebuffer,w)}else if(k){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]=r.createRenderbuffer(),Fe(v.__webglDepthbuffer[ee],w,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),Fe(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function et(w,v,k){const ee=n.get(w);v!==void 0&&fe(ee.__webglFramebuffer,w,w.texture,36064,3553),k!==void 0&&be(w)}function $e(w){const v=w.texture,k=n.get(w),ee=n.get(v);w.addEventListener("dispose",Z),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=v.version,o.memory.textures++);const re=w.isWebGLCubeRenderTarget===!0,le=w.isWebGLMultipleRenderTargets===!0,ye=y(w)||a;if(re){k.__webglFramebuffer=[];for(let T=0;T<6;T++)k.__webglFramebuffer[T]=r.createFramebuffer()}else{if(k.__webglFramebuffer=r.createFramebuffer(),le)if(i.drawBuffers){const T=w.texture;for(let I=0,ue=T.length;I<ue;I++){const he=n.get(T[I]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ze(w)===!1){const T=le?v:[v];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let I=0;I<T.length;I++){const ue=T[I];k.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(36161,k.__webglColorRenderbuffer[I]);const he=s.convert(ue.format,ue.encoding),ce=s.convert(ue.type),ge=g(ue.internalFormat,he,ce,ue.encoding,w.isXRRenderTarget===!0),me=We(w);r.renderbufferStorageMultisample(36161,me,ge,w.width,w.height),r.framebufferRenderbuffer(36160,36064+I,36161,k.__webglColorRenderbuffer[I])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ee.__webglTexture),X(34067,v,ye);for(let T=0;T<6;T++)fe(k.__webglFramebuffer[T],w,v,36064,34069+T);L(v,ye)&&F(34067),t.unbindTexture()}else if(le){const T=w.texture;for(let I=0,ue=T.length;I<ue;I++){const he=T[I],ce=n.get(he);t.bindTexture(3553,ce.__webglTexture),X(3553,he,ye),fe(k.__webglFramebuffer,w,he,36064+I,3553),L(he,ye)&&F(3553)}t.unbindTexture()}else{let T=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?T=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,ee.__webglTexture),X(T,v,ye),fe(k.__webglFramebuffer,w,v,36064,T),L(v,ye)&&F(T),t.unbindTexture()}w.depthBuffer&&be(w)}function Ze(w){const v=y(w)||a,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,re=k.length;ee<re;ee++){const le=k[ee];if(L(le,v)){const ye=w.isWebGLCubeRenderTarget?34067:3553,T=n.get(le).__webglTexture;t.bindTexture(ye,T),F(ye),t.unbindTexture()}}}function ut(w){if(a&&w.samples>0&&ze(w)===!1){const v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,ee=w.height;let re=16384;const le=[],ye=w.stencilBuffer?33306:36096,T=n.get(w),I=w.isWebGLMultipleRenderTargets===!0;if(I)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){le.push(36064+ue),w.depthBuffer&&le.push(ye);const he=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(he===!1&&(w.depthBuffer&&(re|=256),w.stencilBuffer&&(re|=1024)),I&&r.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[ue]),he===!0&&(r.invalidateFramebuffer(36008,[ye]),r.invalidateFramebuffer(36009,[ye])),I){const ce=n.get(v[ue]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ce,0)}r.blitFramebuffer(0,0,k,ee,0,0,k,ee,re,9728),m&&r.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ue,36161,T.__webglColorRenderbuffer[ue]);const he=n.get(v[ue]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ue,3553,he,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function We(w){return Math.min(d,w.samples)}function ze(w){const v=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Tt(w){const v=o.render.frame;_.get(w)!==v&&(_.set(w,v),w.update())}function gt(w,v){const k=w.encoding,ee=w.format,re=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Ms||k!==Rn&&(k===Ge?a===!1?e.has("EXT_sRGB")===!0&&ee===Ft?(w.format=Ms,w.minFilter=Lt,w.generateMipmaps=!1):v=zo.sRGBToLinear(v):(ee!==Ft||re!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),v}this.allocateTextureUnit=Y,this.resetTextureUnits=te,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=B,this.setTextureCube=ae,this.rebindTextures=et,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ze}function sp(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Dn)return 5121;if(s===Zl)return 32819;if(s===Kl)return 32820;if(s===jl)return 5120;if(s===Yl)return 5122;if(s===Io)return 5123;if(s===$l)return 5124;if(s===Tn)return 5125;if(s===An)return 5126;if(s===Fi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Jl)return 6406;if(s===Ft)return 6408;if(s===ec)return 6409;if(s===tc)return 6410;if(s===Cn)return 6402;if(s===di)return 34041;if(s===Ql)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ms)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===nc)return 6403;if(s===ic)return 36244;if(s===rc)return 33319;if(s===sc)return 33320;if(s===ac)return 36249;if(s===zr||s===Ur||s===Br||s===kr)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===zr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===zr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ur)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Br)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ra||s===sa||s===aa||s===oa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ra)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===aa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===oc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===la||s===ca)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===la)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ca)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ua||s===da||s===ha||s===fa||s===pa||s===ma||s===ga||s===_a||s===xa||s===va||s===ba||s===ya||s===Ma||s===Sa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ua)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===da)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ha)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ma)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ga)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_a)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===va)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ba)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ya)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ma)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===wa)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===li?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ap extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class si extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const op={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),x=this._getHandJoint(c,p);f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(op)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new si;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lp extends xt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Cn,u!==Cn&&u!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Cn&&(n=Tn),n===void 0&&u===di&&(n=li),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pt,this.minFilter=l!==void 0?l:pt,this.flipY=!1,this.generateMipmaps=!1}}class cp extends Nn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,d=null,h=null,m=null;const _=t.getContextAttributes();let p=null,f=null;const x=[],E=[],M=new Set,y=new Map,S=new wt;S.layers.enable(1),S.viewport=new He;const L=new wt;L.layers.enable(2),L.viewport=new He;const F=[S,L],g=new ap;g.layers.enable(1),g.layers.enable(2);let A=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let B=x[W];return B===void 0&&(B=new fs,x[W]=B),B.getTargetRaySpace()},this.getControllerGrip=function(W){let B=x[W];return B===void 0&&(B=new fs,x[W]=B),B.getGripSpace()},this.getHand=function(W){let B=x[W];return B===void 0&&(B=new fs,x[W]=B),B.getHandSpace()};function j(W){const B=E.indexOf(W.inputSource);if(B===-1)return;const ae=x[B];ae!==void 0&&ae.dispatchEvent({type:W.type,data:W.inputSource})}function Z(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",N);for(let W=0;W<x.length;W++){const B=E[W];B!==null&&(E[W]=null,x[W].disconnect(B))}A=null,P=null,e.setRenderTarget(p),h=null,d=null,u=null,i=null,f=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:h}),f=new In(h.framebufferWidth,h.framebufferHeight,{format:Ft,type:Dn,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let B=null,ae=null,ie=null;_.depth&&(ie=_.stencil?35056:33190,B=_.stencil?di:Cn,ae=_.stencil?li:Tn);const oe={colorFormat:32856,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(oe),i.updateRenderState({layers:[d]}),f=new In(d.textureWidth,d.textureHeight,{format:Ft,type:Dn,depthTexture:new lp(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const X=e.properties.get(f);X.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(W){for(let B=0;B<W.removed.length;B++){const ae=W.removed[B],ie=E.indexOf(ae);ie>=0&&(E[ie]=null,x[ie].disconnect(ae))}for(let B=0;B<W.added.length;B++){const ae=W.added[B];let ie=E.indexOf(ae);if(ie===-1){for(let X=0;X<x.length;X++)if(X>=E.length){E.push(ae),ie=X;break}else if(E[X]===null){E[X]=ae,ie=X;break}if(ie===-1)break}const oe=x[ie];oe&&oe.connect(ae)}}const D=new R,H=new R;function K(W,B,ae){D.setFromMatrixPosition(B.matrixWorld),H.setFromMatrixPosition(ae.matrixWorld);const ie=D.distanceTo(H),oe=B.projectionMatrix.elements,X=ae.projectionMatrix.elements,Ce=oe[14]/(oe[10]-1),pe=oe[14]/(oe[10]+1),ve=(oe[9]+1)/oe[5],fe=(oe[9]-1)/oe[5],Fe=(oe[8]-1)/oe[0],we=(X[8]+1)/X[0],be=Ce*Fe,et=Ce*we,$e=ie/(-Fe+we),Ze=$e*-Fe;B.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ze),W.translateZ($e),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const ut=Ce+$e,We=pe+$e,ze=be-Ze,Tt=et+(ie-Ze),gt=ve*pe/We*ut,w=fe*pe/We*ut;W.projectionMatrix.makePerspective(ze,Tt,gt,w,ut,We)}function te(W,B){B===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(B.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;g.near=L.near=S.near=W.near,g.far=L.far=S.far=W.far,(A!==g.near||P!==g.far)&&(i.updateRenderState({depthNear:g.near,depthFar:g.far}),A=g.near,P=g.far);const B=W.parent,ae=g.cameras;te(g,B);for(let oe=0;oe<ae.length;oe++)te(ae[oe],B);g.matrixWorld.decompose(g.position,g.quaternion,g.scale),W.matrix.copy(g.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);const ie=W.children;for(let oe=0,X=ie.length;oe<X;oe++)ie[oe].updateMatrixWorld(!0);ae.length===2?K(g,S,L):g.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return g},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(W){d!==null&&(d.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)},this.getPlanes=function(){return M};let Y=null;function ne(W,B){if(c=B.getViewerPose(l||o),m=B,c!==null){const ae=c.views;h!==null&&(e.setRenderTargetFramebuffer(f,h.framebuffer),e.setRenderTarget(f));let ie=!1;ae.length!==g.cameras.length&&(g.cameras.length=0,ie=!0);for(let oe=0;oe<ae.length;oe++){const X=ae[oe];let Ce=null;if(h!==null)Ce=h.getViewport(X);else{const ve=u.getViewSubImage(d,X);Ce=ve.viewport,oe===0&&(e.setRenderTargetTextures(f,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(f))}let pe=F[oe];pe===void 0&&(pe=new wt,pe.layers.enable(oe),pe.viewport=new He,F[oe]=pe),pe.matrix.fromArray(X.transform.matrix),pe.projectionMatrix.fromArray(X.projectionMatrix),pe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),oe===0&&g.matrix.copy(pe.matrix),ie===!0&&g.cameras.push(pe)}}for(let ae=0;ae<x.length;ae++){const ie=E[ae],oe=x[ae];ie!==null&&oe!==void 0&&oe.update(ie,B,l||o)}if(Y&&Y(W,B),B.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:B.detectedPlanes});let ae=null;for(const ie of M)B.detectedPlanes.has(ie)||(ae===null&&(ae=[]),ae.push(ie));if(ae!==null)for(const ie of ae)M.delete(ie),y.delete(ie),n.dispatchEvent({type:"planeremoved",data:ie});for(const ie of B.detectedPlanes)if(!M.has(ie))M.add(ie),y.set(ie,B.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ie});else{const oe=y.get(ie);ie.lastChangedTime>oe&&(y.set(ie,ie.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ie}))}}m=null}const J=new jo;J.setAnimationLoop(ne),this.setAnimationLoop=function(W){Y=W},this.dispose=function(){}}}function up(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,Wo(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,x,E,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),c(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&h(p,f,M)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),_(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,x,E):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Pt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Pt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let E;f.map?E=f.map:f.specularMap?E=f.specularMap:f.displacementMap?E=f.displacementMap:f.normalMap?E=f.normalMap:f.bumpMap?E=f.bumpMap:f.roughnessMap?E=f.roughnessMap:f.metalnessMap?E=f.metalnessMap:f.alphaMap?E=f.alphaMap:f.emissiveMap?E=f.emissiveMap:f.clearcoatMap?E=f.clearcoatMap:f.clearcoatNormalMap?E=f.clearcoatNormalMap:f.clearcoatRoughnessMap?E=f.clearcoatRoughnessMap:f.iridescenceMap?E=f.iridescenceMap:f.iridescenceThicknessMap?E=f.iridescenceThicknessMap:f.specularIntensityMap?E=f.specularIntensityMap:f.specularColorMap?E=f.specularColorMap:f.transmissionMap?E=f.transmissionMap:f.thicknessMap?E=f.thicknessMap:f.sheenColorMap?E=f.sheenColorMap:f.sheenRoughnessMap&&(E=f.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let M;f.aoMap?M=f.aoMap:f.lightMap&&(M=f.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,x,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=E*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M;f.map?M=f.map:f.alphaMap&&(M=f.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function h(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Pt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function dp(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(E,M){const y=M.program;n.uniformBlockBinding(E,y)}function c(E,M){let y=i[E.id];y===void 0&&(_(E),y=u(E),i[E.id]=y,E.addEventListener("dispose",f));const S=M.program;n.updateUBOMapping(E,S);const L=e.render.frame;s[E.id]!==L&&(h(E),s[E.id]=L)}function u(E){const M=d();E.__bindingPointIndex=M;const y=r.createBuffer(),S=E.__size,L=E.usage;return r.bindBuffer(35345,y),r.bufferData(35345,S,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,M,y),y}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const M=i[E.id],y=E.uniforms,S=E.__cache;r.bindBuffer(35345,M);for(let L=0,F=y.length;L<F;L++){const g=y[L];if(m(g,L,S)===!0){const A=g.__offset,P=Array.isArray(g.value)?g.value:[g.value];let j=0;for(let Z=0;Z<P.length;Z++){const N=P[Z],D=p(N);typeof N=="number"?(g.__data[0]=N,r.bufferSubData(35345,A+j,g.__data)):N.isMatrix3?(g.__data[0]=N.elements[0],g.__data[1]=N.elements[1],g.__data[2]=N.elements[2],g.__data[3]=N.elements[0],g.__data[4]=N.elements[3],g.__data[5]=N.elements[4],g.__data[6]=N.elements[5],g.__data[7]=N.elements[0],g.__data[8]=N.elements[6],g.__data[9]=N.elements[7],g.__data[10]=N.elements[8],g.__data[11]=N.elements[0]):(N.toArray(g.__data,j),j+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,A,g.__data)}}r.bindBuffer(35345,null)}function m(E,M,y){const S=E.value;if(y[M]===void 0){if(typeof S=="number")y[M]=S;else{const L=Array.isArray(S)?S:[S],F=[];for(let g=0;g<L.length;g++)F.push(L[g].clone());y[M]=F}return!0}else if(typeof S=="number"){if(y[M]!==S)return y[M]=S,!0}else{const L=Array.isArray(y[M])?y[M]:[y[M]],F=Array.isArray(S)?S:[S];for(let g=0;g<L.length;g++){const A=L[g];if(A.equals(F[g])===!1)return A.copy(F[g]),!0}}return!1}function _(E){const M=E.uniforms;let y=0;const S=16;let L=0;for(let F=0,g=M.length;F<g;F++){const A=M[F],P={boundary:0,storage:0},j=Array.isArray(A.value)?A.value:[A.value];for(let Z=0,N=j.length;Z<N;Z++){const D=j[Z],H=p(D);P.boundary+=H.boundary,P.storage+=H.storage}if(A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,F>0){L=y%S;const Z=S-L;L!==0&&Z-P.boundary<0&&(y+=S-L,A.__offset=y)}y+=P.storage}return L=y%S,L>0&&(y+=S-L),E.__size=y,E.__cache={},this}function p(E){const M={boundary:0,storage:0};return typeof E=="number"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function f(E){const M=E.target;M.removeEventListener("dispose",f);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function x(){for(const E in i)r.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:l,update:c,dispose:x}}function hp(){const r=zi("canvas");return r.style.display="block",r}function Qo(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:hp(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let d=null,h=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Rn,this.physicallyCorrectLights=!1,this.toneMapping=en,this.toneMappingExposure=1;const p=this;let f=!1,x=0,E=0,M=null,y=-1,S=null;const L=new He,F=new He;let g=null,A=e.width,P=e.height,j=1,Z=null,N=null;const D=new He(0,0,A,P),H=new He(0,0,A,P);let K=!1;const te=new Ns;let Y=!1,ne=!1,J=null;const W=new Ye,B=new Se,ae=new R,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return M===null?j:1}let X=t;function Ce(b,z){for(let V=0;V<b.length;V++){const O=b[V],q=e.getContext(O,z);if(q!==null)return q}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Is}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Le,!1),X===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),X=Ce(z,b),X===null)throw Ce(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let pe,ve,fe,Fe,we,be,et,$e,Ze,ut,We,ze,Tt,gt,w,v,k,ee,re,le,ye,T,I,ue;function he(){pe=new Mh(X),ve=new gh(X,pe,r),pe.init(ve),T=new sp(X,pe,ve),fe=new ip(X,pe,ve),Fe=new Eh,we=new Hf,be=new rp(X,pe,fe,we,ve,T,Fe),et=new xh(p),$e=new yh(p),Ze=new Oc(X,ve),I=new ph(X,pe,Ze,ve),ut=new Sh(X,Ze,Fe,I),We=new Lh(X,ut,Ze,Fe),re=new Ch(X,ve,be),v=new _h(we),ze=new Vf(p,et,$e,pe,ve,I,v),Tt=new up(p,we),gt=new Xf,w=new Kf(pe,ve),ee=new fh(p,et,$e,fe,We,u,o),k=new np(p,We,ve),ue=new dp(X,Fe,ve,fe),le=new mh(X,pe,Fe,ve),ye=new wh(X,pe,Fe,ve),Fe.programs=ze.programs,p.capabilities=ve,p.extensions=pe,p.properties=we,p.renderLists=gt,p.shadowMap=k,p.state=fe,p.info=Fe}he();const ce=new cp(p,X);this.xr=ce,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(A,P,!1))},this.getSize=function(b){return b.set(A,P)},this.setSize=function(b,z,V){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,P=z,e.width=Math.floor(b*j),e.height=Math.floor(z*j),V!==!1&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(A*j,P*j).floor()},this.setDrawingBufferSize=function(b,z,V){A=b,P=z,j=V,e.width=Math.floor(b*V),e.height=Math.floor(z*V),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,z,V,O){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,z,V,O),fe.viewport(L.copy(D).multiplyScalar(j).floor())},this.getScissor=function(b){return b.copy(H)},this.setScissor=function(b,z,V,O){b.isVector4?H.set(b.x,b.y,b.z,b.w):H.set(b,z,V,O),fe.scissor(F.copy(H).multiplyScalar(j).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(b){fe.setScissorTest(K=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(b=!0,z=!0,V=!0){let O=0;b&&(O|=16384),z&&(O|=256),V&&(O|=1024),X.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),gt.dispose(),w.dispose(),we.dispose(),et.dispose(),$e.dispose(),We.dispose(),I.dispose(),ue.dispose(),ze.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",de),ce.removeEventListener("sessionend",_e),J&&(J.dispose(),J=null),Ne.stop()};function ge(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const b=Fe.autoReset,z=k.enabled,V=k.autoUpdate,O=k.needsUpdate,q=k.type;he(),Fe.autoReset=b,k.enabled=z,k.autoUpdate=V,k.needsUpdate=O,k.type=q}function Le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pe(b){const z=b.target;z.removeEventListener("dispose",Pe),Ue(z)}function Ue(b){C(b),we.remove(b)}function C(b){const z=we.get(b).programs;z!==void 0&&(z.forEach(function(V){ze.releaseProgram(V)}),b.isShaderMaterial&&ze.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,V,O,q,xe){z===null&&(z=ie);const Me=q.isMesh&&q.matrixWorld.determinant()<0,Te=pl(b,z,V,O,q);fe.setMaterial(O,Me);let Ae=V.index,Oe=1;O.wireframe===!0&&(Ae=ut.getWireframeAttribute(V),Oe=2);const De=V.drawRange,Re=V.attributes.position;let Xe=De.start*Oe,vt=(De.start+De.count)*Oe;xe!==null&&(Xe=Math.max(Xe,xe.start*Oe),vt=Math.min(vt,(xe.start+xe.count)*Oe)),Ae!==null?(Xe=Math.max(Xe,0),vt=Math.min(vt,Ae.count)):Re!=null&&(Xe=Math.max(Xe,0),vt=Math.min(vt,Re.count));const jt=vt-Xe;if(jt<0||jt===1/0)return;I.setup(q,O,Te,V,Ae);let _n,qe=le;if(Ae!==null&&(_n=Ze.get(Ae),qe=ye,qe.setIndex(_n)),q.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*oe()),qe.setMode(1)):qe.setMode(4);else if(q.isLine){let Ie=O.linewidth;Ie===void 0&&(Ie=1),fe.setLineWidth(Ie*oe()),q.isLineSegments?qe.setMode(1):q.isLineLoop?qe.setMode(2):qe.setMode(3)}else q.isPoints?qe.setMode(0):q.isSprite&&qe.setMode(4);if(q.isInstancedMesh)qe.renderInstances(Xe,jt,q.count);else if(V.isInstancedBufferGeometry){const Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Rr=Math.min(V.instanceCount,Ie);qe.renderInstances(Xe,jt,Rr)}else qe.render(Xe,jt)},this.compile=function(b,z){function V(O,q,xe){O.transparent===!0&&O.side===ji?(O.side=Pt,O.needsUpdate=!0,At(O,q,xe),O.side=Pn,O.needsUpdate=!0,At(O,q,xe),O.side=ji):At(O,q,xe)}h=w.get(b),h.init(),_.push(h),b.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights(p.physicallyCorrectLights),b.traverse(function(O){const q=O.material;if(q)if(Array.isArray(q))for(let xe=0;xe<q.length;xe++){const Me=q[xe];V(Me,b,O)}else V(q,b,O)}),_.pop(),h=null};let G=null;function Q(b){G&&G(b)}function de(){Ne.stop()}function _e(){Ne.start()}const Ne=new jo;Ne.setAnimationLoop(Q),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(b){G=b,ce.setAnimationLoop(b),b===null?Ne.stop():Ne.start()},ce.addEventListener("sessionstart",de),ce.addEventListener("sessionend",_e),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(z),z=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,z,M),h=w.get(b,_.length),h.init(),_.push(h),W.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),te.setFromProjectionMatrix(W),ne=this.localClippingEnabled,Y=v.init(this.clippingPlanes,ne,z),d=gt.get(b,m.length),d.init(),m.push(d),tt(b,z,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(Z,N),Y===!0&&v.beginShadows();const V=h.state.shadowsArray;if(k.render(V,b,z),Y===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,b),h.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const O=z.cameras;for(let q=0,xe=O.length;q<xe;q++){const Me=O[q];at(d,b,Me,Me.viewport)}}else at(d,b,z);M!==null&&(be.updateMultisampleRenderTarget(M),be.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(p,b,z),I.resetDefaultState(),y=-1,S=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function tt(b,z,V,O){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||te.intersectsSprite(b)){O&&ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(W);const Me=We.update(b),Te=b.material;Te.visible&&d.push(b,Me,Te,V,ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Fe.render.frame&&(b.skeleton.update(),b.skeleton.frame=Fe.render.frame),!b.frustumCulled||te.intersectsObject(b))){O&&ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(W);const Me=We.update(b),Te=b.material;if(Array.isArray(Te)){const Ae=Me.groups;for(let Oe=0,De=Ae.length;Oe<De;Oe++){const Re=Ae[Oe],Xe=Te[Re.materialIndex];Xe&&Xe.visible&&d.push(b,Me,Xe,V,ae.z,Re)}}else Te.visible&&d.push(b,Me,Te,V,ae.z,null)}}const xe=b.children;for(let Me=0,Te=xe.length;Me<Te;Me++)tt(xe[Me],z,V,O)}function at(b,z,V,O){const q=b.opaque,xe=b.transmissive,Me=b.transparent;h.setupLightsView(V),xe.length>0&&gn(q,z,V),O&&fe.viewport(L.copy(O)),q.length>0&&Ve(q,z,V),xe.length>0&&Ve(xe,z,V),Me.length>0&&Ve(Me,z,V),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function gn(b,z,V){const O=ve.isWebGL2;J===null&&(J=new In(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Fi:Dn,minFilter:Oi,samples:O&&s===!0?4:0})),p.getDrawingBufferSize(B),O?J.setSize(B.x,B.y):J.setSize(Ss(B.x),Ss(B.y));const q=p.getRenderTarget();p.setRenderTarget(J),p.clear();const xe=p.toneMapping;p.toneMapping=en,Ve(b,z,V),p.toneMapping=xe,be.updateMultisampleRenderTarget(J),be.updateRenderTargetMipmap(J),p.setRenderTarget(q)}function Ve(b,z,V){const O=z.isScene===!0?z.overrideMaterial:null;for(let q=0,xe=b.length;q<xe;q++){const Me=b[q],Te=Me.object,Ae=Me.geometry,Oe=O===null?Me.material:O,De=Me.group;Te.layers.test(V.layers)&&qt(Te,z,V,Ae,Oe,De)}}function qt(b,z,V,O,q,xe){b.onBeforeRender(p,z,V,O,q,xe),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(p,z,V,O,b,xe),q.transparent===!0&&q.side===ji?(q.side=Pt,q.needsUpdate=!0,p.renderBufferDirect(V,z,O,q,b,xe),q.side=Pn,q.needsUpdate=!0,p.renderBufferDirect(V,z,O,q,b,xe),q.side=ji):p.renderBufferDirect(V,z,O,q,b,xe),b.onAfterRender(p,z,V,O,q,xe)}function At(b,z,V){z.isScene!==!0&&(z=ie);const O=we.get(b),q=h.state.lights,xe=h.state.shadowsArray,Me=q.state.version,Te=ze.getParameters(b,q.state,xe,z,V),Ae=ze.getProgramCacheKey(Te);let Oe=O.programs;O.environment=b.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=(b.isMeshStandardMaterial?$e:et).get(b.envMap||O.environment),Oe===void 0&&(b.addEventListener("dispose",Pe),Oe=new Map,O.programs=Oe);let De=Oe.get(Ae);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===Me)return Ys(b,Te),De}else Te.uniforms=ze.getUniforms(b),b.onBuild(V,Te,p),b.onBeforeCompile(Te,p),De=ze.acquireProgram(Te,Ae),Oe.set(Ae,De),O.uniforms=Te.uniforms;const Re=O.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=v.uniform),Ys(b,Te),O.needsLights=gl(b),O.lightsStateVersion=Me,O.needsLights&&(Re.ambientLightColor.value=q.state.ambient,Re.lightProbe.value=q.state.probe,Re.directionalLights.value=q.state.directional,Re.directionalLightShadows.value=q.state.directionalShadow,Re.spotLights.value=q.state.spot,Re.spotLightShadows.value=q.state.spotShadow,Re.rectAreaLights.value=q.state.rectArea,Re.ltc_1.value=q.state.rectAreaLTC1,Re.ltc_2.value=q.state.rectAreaLTC2,Re.pointLights.value=q.state.point,Re.pointLightShadows.value=q.state.pointShadow,Re.hemisphereLights.value=q.state.hemi,Re.directionalShadowMap.value=q.state.directionalShadowMap,Re.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Re.spotShadowMap.value=q.state.spotShadowMap,Re.spotLightMatrix.value=q.state.spotLightMatrix,Re.spotLightMap.value=q.state.spotLightMap,Re.pointShadowMap.value=q.state.pointShadowMap,Re.pointShadowMatrix.value=q.state.pointShadowMatrix);const Xe=De.getUniforms(),vt=gr.seqWithValue(Xe.seq,Re);return O.currentProgram=De,O.uniformsList=vt,De}function Ys(b,z){const V=we.get(b);V.outputEncoding=z.outputEncoding,V.instancing=z.instancing,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function pl(b,z,V,O,q){z.isScene!==!0&&(z=ie),be.resetTextureUnits();const xe=z.fog,Me=O.isMeshStandardMaterial?z.environment:null,Te=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Rn,Ae=(O.isMeshStandardMaterial?$e:et).get(O.envMap||Me),Oe=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!O.normalMap&&!!V.attributes.tangent,Re=!!V.morphAttributes.position,Xe=!!V.morphAttributes.normal,vt=!!V.morphAttributes.color,jt=O.toneMapped?p.toneMapping:en,_n=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,qe=_n!==void 0?_n.length:0,Ie=we.get(O),Rr=h.state.lights;if(Y===!0&&(ne===!0||b!==S)){const bt=b===S&&O.id===y;v.setState(O,b,bt)}let nt=!1;O.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Rr.state.version||Ie.outputEncoding!==Te||q.isInstancedMesh&&Ie.instancing===!1||!q.isInstancedMesh&&Ie.instancing===!0||q.isSkinnedMesh&&Ie.skinning===!1||!q.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Ae||O.fog===!0&&Ie.fog!==xe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==v.numPlanes||Ie.numIntersection!==v.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==De||Ie.morphTargets!==Re||Ie.morphNormals!==Xe||Ie.morphColors!==vt||Ie.toneMapping!==jt||ve.isWebGL2===!0&&Ie.morphTargetsCount!==qe)&&(nt=!0):(nt=!0,Ie.__version=O.version);let xn=Ie.currentProgram;nt===!0&&(xn=At(O,z,q));let $s=!1,xi=!1,Ir=!1;const dt=xn.getUniforms(),vn=Ie.uniforms;if(fe.useProgram(xn.program)&&($s=!0,xi=!0,Ir=!0),O.id!==y&&(y=O.id,xi=!0),$s||S!==b){if(dt.setValue(X,"projectionMatrix",b.projectionMatrix),ve.logarithmicDepthBuffer&&dt.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),S!==b&&(S=b,xi=!0,Ir=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const bt=dt.map.cameraPosition;bt!==void 0&&bt.setValue(X,ae.setFromMatrixPosition(b.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&dt.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||q.isSkinnedMesh)&&dt.setValue(X,"viewMatrix",b.matrixWorldInverse)}if(q.isSkinnedMesh){dt.setOptional(X,q,"bindMatrix"),dt.setOptional(X,q,"bindMatrixInverse");const bt=q.skeleton;bt&&(ve.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),dt.setValue(X,"boneTexture",bt.boneTexture,be),dt.setValue(X,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Or=V.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0&&ve.isWebGL2===!0)&&re.update(q,V,O,xn),(xi||Ie.receiveShadow!==q.receiveShadow)&&(Ie.receiveShadow=q.receiveShadow,dt.setValue(X,"receiveShadow",q.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(vn.envMap.value=Ae,vn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),xi&&(dt.setValue(X,"toneMappingExposure",p.toneMappingExposure),Ie.needsLights&&ml(vn,Ir),xe&&O.fog===!0&&Tt.refreshFogUniforms(vn,xe),Tt.refreshMaterialUniforms(vn,O,j,P,J),gr.upload(X,Ie.uniformsList,vn,be)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(gr.upload(X,Ie.uniformsList,vn,be),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&dt.setValue(X,"center",q.center),dt.setValue(X,"modelViewMatrix",q.modelViewMatrix),dt.setValue(X,"normalMatrix",q.normalMatrix),dt.setValue(X,"modelMatrix",q.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const bt=O.uniformsGroups;for(let Fr=0,_l=bt.length;Fr<_l;Fr++)if(ve.isWebGL2){const Zs=bt[Fr];ue.update(Zs,xn),ue.bind(Zs,xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xn}function ml(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function gl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,z,V){we.get(b.texture).__webglTexture=z,we.get(b.depthTexture).__webglTexture=V;const O=we.get(b);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=V===void 0,O.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const V=we.get(b);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,V=0){M=b,x=z,E=V;let O=!0,q=null,xe=!1,Me=!1;if(b){const Ae=we.get(b);Ae.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),O=!1):Ae.__webglFramebuffer===void 0?be.setupRenderTarget(b):Ae.__hasExternalTextures&&be.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Me=!0);const De=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(q=De[z],xe=!0):ve.isWebGL2&&b.samples>0&&be.useMultisampledRTT(b)===!1?q=we.get(b).__webglMultisampledFramebuffer:q=De,L.copy(b.viewport),F.copy(b.scissor),g=b.scissorTest}else L.copy(D).multiplyScalar(j).floor(),F.copy(H).multiplyScalar(j).floor(),g=K;if(fe.bindFramebuffer(36160,q)&&ve.drawBuffers&&O&&fe.drawBuffers(b,q),fe.viewport(L),fe.scissor(F),fe.setScissorTest(g),xe){const Ae=we.get(b.texture);X.framebufferTexture2D(36160,36064,34069+z,Ae.__webglTexture,V)}else if(Me){const Ae=we.get(b.texture),Oe=z||0;X.framebufferTextureLayer(36160,36064,Ae.__webglTexture,V||0,Oe)}y=-1},this.readRenderTargetPixels=function(b,z,V,O,q,xe,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){fe.bindFramebuffer(36160,Te);try{const Ae=b.texture,Oe=Ae.format,De=Ae.type;if(Oe!==Ft&&T.convert(Oe)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=De===Fi&&(pe.has("EXT_color_buffer_half_float")||ve.isWebGL2&&pe.has("EXT_color_buffer_float"));if(De!==Dn&&T.convert(De)!==X.getParameter(35738)&&!(De===An&&(ve.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-O&&V>=0&&V<=b.height-q&&X.readPixels(z,V,O,q,T.convert(Oe),T.convert(De),xe)}finally{const Ae=M!==null?we.get(M).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(b,z,V=0){const O=Math.pow(2,-V),q=Math.floor(z.image.width*O),xe=Math.floor(z.image.height*O);be.setTexture2D(z,0),X.copyTexSubImage2D(3553,V,0,0,b.x,b.y,q,xe),fe.unbindTexture()},this.copyTextureToTexture=function(b,z,V,O=0){const q=z.image.width,xe=z.image.height,Me=T.convert(V.format),Te=T.convert(V.type);be.setTexture2D(V,0),X.pixelStorei(37440,V.flipY),X.pixelStorei(37441,V.premultiplyAlpha),X.pixelStorei(3317,V.unpackAlignment),z.isDataTexture?X.texSubImage2D(3553,O,b.x,b.y,q,xe,Me,Te,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(3553,O,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):X.texSubImage2D(3553,O,b.x,b.y,Me,Te,z.image),O===0&&V.generateMipmaps&&X.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(b,z,V,O,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,Te=b.max.z-b.min.z+1,Ae=T.convert(O.format),Oe=T.convert(O.type);let De;if(O.isData3DTexture)be.setTexture3D(O,0),De=32879;else if(O.isDataArrayTexture)be.setTexture2DArray(O,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,O.flipY),X.pixelStorei(37441,O.premultiplyAlpha),X.pixelStorei(3317,O.unpackAlignment);const Re=X.getParameter(3314),Xe=X.getParameter(32878),vt=X.getParameter(3316),jt=X.getParameter(3315),_n=X.getParameter(32877),qe=V.isCompressedTexture?V.mipmaps[0]:V.image;X.pixelStorei(3314,qe.width),X.pixelStorei(32878,qe.height),X.pixelStorei(3316,b.min.x),X.pixelStorei(3315,b.min.y),X.pixelStorei(32877,b.min.z),V.isDataTexture||V.isData3DTexture?X.texSubImage3D(De,q,z.x,z.y,z.z,xe,Me,Te,Ae,Oe,qe.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(De,q,z.x,z.y,z.z,xe,Me,Te,Ae,qe.data)):X.texSubImage3D(De,q,z.x,z.y,z.z,xe,Me,Te,Ae,Oe,qe),X.pixelStorei(3314,Re),X.pixelStorei(32878,Xe),X.pixelStorei(3316,vt),X.pixelStorei(3315,jt),X.pixelStorei(32877,_n),q===0&&O.generateMipmaps&&X.generateMipmap(De),fe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?be.setTextureCube(b,0):b.isData3DTexture?be.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?be.setTexture2DArray(b,0):be.setTexture2D(b,0),fe.unbindTexture()},this.resetState=function(){x=0,E=0,M=null,fe.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class fp extends Qo{}fp.prototype.isWebGL1Renderer=!0;class Us{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new Us(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class pp extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Bs extends tn{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],m=[];let _=0;const p=[],f=n/2;let x=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(m,2));function E(){const y=new R,S=new R;let L=0;const F=(t-e)/n;for(let g=0;g<=s;g++){const A=[],P=g/s,j=P*(t-e)+e;for(let Z=0;Z<=i;Z++){const N=Z/i,D=N*l+a,H=Math.sin(D),K=Math.cos(D);S.x=j*H,S.y=-P*n+f,S.z=j*K,d.push(S.x,S.y,S.z),y.set(H,F,K).normalize(),h.push(y.x,y.y,y.z),m.push(N,1-P),A.push(_++)}p.push(A)}for(let g=0;g<i;g++)for(let A=0;A<s;A++){const P=p[A][g],j=p[A+1][g],Z=p[A+1][g+1],N=p[A][g+1];u.push(P,j,N),u.push(j,Z,N),L+=6}c.addGroup(x,L,0),x+=L}function M(y){const S=_,L=new Se,F=new R;let g=0;const A=y===!0?e:t,P=y===!0?1:-1;for(let Z=1;Z<=i;Z++)d.push(0,f*P,0),h.push(0,P,0),m.push(.5,.5),_++;const j=_;for(let Z=0;Z<=i;Z++){const D=Z/i*l+a,H=Math.cos(D),K=Math.sin(D);F.x=A*K,F.y=f*P,F.z=A*H,d.push(F.x,F.y,F.z),h.push(0,P,0),L.x=H*.5+.5,L.y=K*.5*P+.5,m.push(L.x,L.y),_++}for(let Z=0;Z<i;Z++){const N=S+Z,D=j+Z;y===!0?u.push(D,D+1,N):u.push(D+1,D,N),g+=3}c.addGroup(x,g,y===!0?1:2),x+=g}}static fromJSON(e){return new Bs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ks extends Bs{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ks(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gs extends tn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new R,h=new R,m=[],_=[],p=[],f=[];for(let x=0;x<=n;x++){const E=[],M=x/n;let y=0;x==0&&o==0?y=.5/t:x==n&&l==Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const L=S/t;d.x=-e*Math.cos(i+L*s)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(i+L*s)*Math.sin(o+M*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),p.push(h.x,h.y,h.z),f.push(L+y,1-M),E.push(c++)}u.push(E)}for(let x=0;x<n;x++)for(let E=0;E<t;E++){const M=u[x][E+1],y=u[x][E],S=u[x+1][E],L=u[x+1][E+1];(x!==0||o>0)&&m.push(M,y,L),(x!==n-1||l<Math.PI)&&m.push(y,S,L)}this.setIndex(m),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(p,3)),this.setAttribute("uv",new ct(f,2))}static fromJSON(e){return new Gs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mi extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const oo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class mp{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const gp=new mp;class el{constructor(e){this.manager=e!==void 0?e:gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class _p extends el{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=oo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=zi("img");function l(){u(),oo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class xp extends el{constructor(e){super(e)}load(e,t,n,i){const s=new xt,o=new _p(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Vs extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ps=new Ye,lo=new R,co=new R;class tl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lo.setFromMatrixPosition(e.matrixWorld),t.position.copy(lo),co.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(co),t.updateMatrixWorld(),ps.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ps),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ps)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const uo=new Ye,Ti=new R,ms=new R;class vp extends tl{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ti.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ti),ms.copy(n.position),ms.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ms),n.updateMatrixWorld(),i.makeTranslation(-Ti.x,-Ti.y,-Ti.z),uo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo)}}class yr extends Vs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bp extends tl{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yp extends Vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DefaultUp),this.updateMatrix(),this.target=new lt,this.shadow=new bp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mp extends Vs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ho(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ho();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ho(){return(typeof performance>"u"?Date:performance).now()}class fo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Is}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Is);const po={type:"change"},gs={type:"start"},mo={type:"end"};class wp extends Nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bn.ROTATE,MIDDLE:Bn.DOLLY,RIGHT:Bn.PAN},this.touches={ONE:kn.ROTATE,TWO:kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",gt),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(po),n.update(),s=i.NONE},this.update=function(){const T=new R,I=new On().setFromUnitVectors(e.up,new R(0,1,0)),ue=I.clone().invert(),he=new R,ce=new On,ge=2*Math.PI;return function(){const Le=n.object.position;T.copy(Le).sub(n.target),T.applyQuaternion(I),a.setFromVector3(T),n.autoRotate&&s===i.NONE&&A(F()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Pe=n.minAzimuthAngle,Ue=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Ue)&&(Pe<-Math.PI?Pe+=ge:Pe>Math.PI&&(Pe-=ge),Ue<-Math.PI?Ue+=ge:Ue>Math.PI&&(Ue-=ge),Pe<=Ue?a.theta=Math.max(Pe,Math.min(Ue,a.theta)):a.theta=a.theta>(Pe+Ue)/2?Math.max(Pe,a.theta):Math.min(Ue,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(a),T.applyQuaternion(ue),Le.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||he.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o?(n.dispatchEvent(po),he.copy(n.object.position),ce.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",ut),n.domElement.removeEventListener("wheel",Tt),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",gt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new fo,l=new fo;let c=1;const u=new R;let d=!1;const h=new Se,m=new Se,_=new Se,p=new Se,f=new Se,x=new Se,E=new Se,M=new Se,y=new Se,S=[],L={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function g(){return Math.pow(.95,n.zoomSpeed)}function A(T){l.theta-=T}function P(T){l.phi-=T}const j=function(){const T=new R;return function(ue,he){T.setFromMatrixColumn(he,0),T.multiplyScalar(-ue),u.add(T)}}(),Z=function(){const T=new R;return function(ue,he){n.screenSpacePanning===!0?T.setFromMatrixColumn(he,1):(T.setFromMatrixColumn(he,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(ue),u.add(T)}}(),N=function(){const T=new R;return function(ue,he){const ce=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;T.copy(ge).sub(n.target);let me=T.length();me*=Math.tan(n.object.fov/2*Math.PI/180),j(2*ue*me/ce.clientHeight,n.object.matrix),Z(2*he*me/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(ue*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),Z(he*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(T){n.object.isPerspectiveCamera?c/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(T){n.object.isPerspectiveCamera?c*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(T){h.set(T.clientX,T.clientY)}function te(T){E.set(T.clientX,T.clientY)}function Y(T){p.set(T.clientX,T.clientY)}function ne(T){m.set(T.clientX,T.clientY),_.subVectors(m,h).multiplyScalar(n.rotateSpeed);const I=n.domElement;A(2*Math.PI*_.x/I.clientHeight),P(2*Math.PI*_.y/I.clientHeight),h.copy(m),n.update()}function J(T){M.set(T.clientX,T.clientY),y.subVectors(M,E),y.y>0?D(g()):y.y<0&&H(g()),E.copy(M),n.update()}function W(T){f.set(T.clientX,T.clientY),x.subVectors(f,p).multiplyScalar(n.panSpeed),N(x.x,x.y),p.copy(f),n.update()}function B(T){T.deltaY<0?H(g()):T.deltaY>0&&D(g()),n.update()}function ae(T){let I=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),I=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),I=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),I=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),I=!0;break}I&&(T.preventDefault(),n.update())}function ie(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const T=.5*(S[0].pageX+S[1].pageX),I=.5*(S[0].pageY+S[1].pageY);h.set(T,I)}}function oe(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const T=.5*(S[0].pageX+S[1].pageX),I=.5*(S[0].pageY+S[1].pageY);p.set(T,I)}}function X(){const T=S[0].pageX-S[1].pageX,I=S[0].pageY-S[1].pageY,ue=Math.sqrt(T*T+I*I);E.set(0,ue)}function Ce(){n.enableZoom&&X(),n.enablePan&&oe()}function pe(){n.enableZoom&&X(),n.enableRotate&&ie()}function ve(T){if(S.length==1)m.set(T.pageX,T.pageY);else{const ue=ye(T),he=.5*(T.pageX+ue.x),ce=.5*(T.pageY+ue.y);m.set(he,ce)}_.subVectors(m,h).multiplyScalar(n.rotateSpeed);const I=n.domElement;A(2*Math.PI*_.x/I.clientHeight),P(2*Math.PI*_.y/I.clientHeight),h.copy(m)}function fe(T){if(S.length===1)f.set(T.pageX,T.pageY);else{const I=ye(T),ue=.5*(T.pageX+I.x),he=.5*(T.pageY+I.y);f.set(ue,he)}x.subVectors(f,p).multiplyScalar(n.panSpeed),N(x.x,x.y),p.copy(f)}function Fe(T){const I=ye(T),ue=T.pageX-I.x,he=T.pageY-I.y,ce=Math.sqrt(ue*ue+he*he);M.set(0,ce),y.set(0,Math.pow(M.y/E.y,n.zoomSpeed)),D(y.y),E.copy(M)}function we(T){n.enableZoom&&Fe(T),n.enablePan&&fe(T)}function be(T){n.enableZoom&&Fe(T),n.enableRotate&&ve(T)}function et(T){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",$e),n.domElement.addEventListener("pointerup",Ze)),ee(T),T.pointerType==="touch"?w(T):We(T))}function $e(T){n.enabled!==!1&&(T.pointerType==="touch"?v(T):ze(T))}function Ze(T){re(T),S.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(mo),s=i.NONE}function ut(T){re(T)}function We(T){let I;switch(T.button){case 0:I=n.mouseButtons.LEFT;break;case 1:I=n.mouseButtons.MIDDLE;break;case 2:I=n.mouseButtons.RIGHT;break;default:I=-1}switch(I){case Bn.DOLLY:if(n.enableZoom===!1)return;te(T),s=i.DOLLY;break;case Bn.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;Y(T),s=i.PAN}else{if(n.enableRotate===!1)return;K(T),s=i.ROTATE}break;case Bn.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;K(T),s=i.ROTATE}else{if(n.enablePan===!1)return;Y(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(gs)}function ze(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ne(T);break;case i.DOLLY:if(n.enableZoom===!1)return;J(T);break;case i.PAN:if(n.enablePan===!1)return;W(T);break}}function Tt(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(gs),B(T),n.dispatchEvent(mo))}function gt(T){n.enabled===!1||n.enablePan===!1||ae(T)}function w(T){switch(le(T),S.length){case 1:switch(n.touches.ONE){case kn.ROTATE:if(n.enableRotate===!1)return;ie(),s=i.TOUCH_ROTATE;break;case kn.PAN:if(n.enablePan===!1)return;oe(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case kn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),s=i.TOUCH_DOLLY_PAN;break;case kn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(gs)}function v(T){switch(le(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;fe(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(T),n.update();break;default:s=i.NONE}}function k(T){n.enabled!==!1&&T.preventDefault()}function ee(T){S.push(T)}function re(T){delete L[T.pointerId];for(let I=0;I<S.length;I++)if(S[I].pointerId==T.pointerId){S.splice(I,1);return}}function le(T){let I=L[T.pointerId];I===void 0&&(I=new Se,L[T.pointerId]=I),I.set(T.pageX,T.pageY)}function ye(T){const I=T.pointerId===S[0].pointerId?S[1]:S[0];return L[I.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",ut),n.domElement.addEventListener("wheel",Tt,{passive:!1}),this.update()}}function Ep(r){if(r&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function ai(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),o=r.a,a=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=r.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+o+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var go=Array.prototype.forEach,Ai=Array.prototype.slice,$={BREAK:{},extend:function(e){return this.each(Ai.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(Ai.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=Ai.call(arguments);return function(){for(var t=Ai.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(go&&e.forEach&&e.forEach===go)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,o=arguments;function a(){i=null,n||e.apply(s,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():Ai.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},Tp=[{litmus:$.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:ai},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:ai},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:ai},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:ai}}},{litmus:$.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:$.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:$.isObject,conversions:{RGBA_OBJ:{read:function(e){return $.isNumber(e.r)&&$.isNumber(e.g)&&$.isNumber(e.b)&&$.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return $.isNumber(e.r)&&$.isNumber(e.g)&&$.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return $.isNumber(e.h)&&$.isNumber(e.s)&&$.isNumber(e.v)&&$.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return $.isNumber(e.h)&&$.isNumber(e.s)&&$.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Ci=void 0,fr=void 0,Es=function(){fr=!1;var e=arguments.length>1?$.toArray(arguments):arguments[0];return $.each(Tp,function(t){if(t.litmus(e))return $.each(t.conversions,function(n,i){if(Ci=n.read(e),fr===!1&&Ci!==!1)return fr=Ci,Ci.conversionName=i,Ci.conversion=n,$.BREAK}),$.BREAK}),fr},_o=void 0,_r={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-s*t),l=n*(1-(1-s)*t),c=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),o=s-i,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-n)/o:t===s?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(_o=t*8)|e&~(255<<_o)}},Ap=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},zt=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Ut=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),dn=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},pn=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},mn=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},rt=function(){function r(){if(zt(this,r),this.__state=Es.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ut(r,[{key:"toString",value:function(){return ai(this)}},{key:"toHexString",value:function(){return ai(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function Hs(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(rt.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(rt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Ws(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(rt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(rt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}rt.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=_r.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")$.extend(r.__state,_r.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};rt.recalculateHSV=function(r){var e=_r.rgb_to_hsv(r.r,r.g,r.b);$.extend(r.__state,{s:e.s,v:e.v}),$.isNaN(e.h)?$.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};rt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Hs(rt.prototype,"r",2);Hs(rt.prototype,"g",1);Hs(rt.prototype,"b",0);Ws(rt.prototype,"h");Ws(rt.prototype,"s");Ws(rt.prototype,"v");Object.defineProperty(rt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(rt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=_r.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Un=function(){function r(e,t){zt(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Ut(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),Cp={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},nl={};$.each(Cp,function(r,e){$.each(r,function(t){nl[t]=e})});var Lp=/(\d+(\.\d+)?)px/;function kt(r){if(r==="0"||$.isUndefined(r))return 0;var e=r.match(Lp);return $.isNull(e)?0:parseFloat(e[1])}var U={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;$.isUndefined(s)&&(s=!0),$.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},o=nl[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;$.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}$.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),U},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),U},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return U},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return U},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return kt(t["border-left-width"])+kt(t["border-right-width"])+kt(t["padding-left"])+kt(t["padding-right"])+kt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return kt(t["border-top-width"])+kt(t["border-bottom-width"])+kt(t["padding-top"])+kt(t["padding-bottom"])+kt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},il=function(r){pn(e,r);function e(t,n){zt(this,e);var i=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return U.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Ut(e,[{key:"setValue",value:function(n){var i=dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Un),Pp=function(r){pn(e,r);function e(t,n,i){zt(this,e);var s=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=s;if(s.__select=document.createElement("select"),$.isArray(o)){var l={};$.each(o,function(c){l[c]=c}),o=l}return $.each(o,function(c,u){var d=document.createElement("option");d.innerHTML=u,d.setAttribute("value",c),a.__select.appendChild(d)}),s.updateDisplay(),U.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return Ut(e,[{key:"setValue",value:function(n){var i=dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return U.isActive(this.__select)?this:(this.__select.value=this.getValue(),dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Un),Dp=function(r){pn(e,r);function e(t,n){zt(this,e);var i=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),U.bind(i.__input,"keyup",o),U.bind(i.__input,"change",o),U.bind(i.__input,"blur",a),U.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Ut(e,[{key:"updateDisplay",value:function(){return U.isActive(this.__input)||(this.__input.value=this.getValue()),dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Un);function xo(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var rl=function(r){pn(e,r);function e(t,n,i){zt(this,e);var s=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,$.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=xo(s.__impliedStep),s}return Ut(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=xo(n),this}}]),e}(Un);function Rp(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var xr=function(r){pn(e,r);function e(t,n,i){zt(this,e);var s=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var _=parseFloat(o.__input.value);$.isNaN(_)||o.setValue(_)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function d(_){var p=a-_.clientY;o.setValue(o.getValue()+p*o.__impliedStep),a=_.clientY}function h(){U.unbind(window,"mousemove",d),U.unbind(window,"mouseup",h),c()}function m(_){U.bind(window,"mousemove",d),U.bind(window,"mouseup",h),a=_.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),U.bind(s.__input,"change",l),U.bind(s.__input,"blur",u),U.bind(s.__input,"mousedown",m),U.bind(s.__input,"keydown",function(_){_.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Ut(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Rp(this.getValue(),this.__precision),dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(rl);function vo(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var Ts=function(r){pn(e,r);function e(t,n,i,s,o){zt(this,e);var a=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),U.bind(a.__background,"mousedown",c),U.bind(a.__background,"touchstart",h),U.addClass(a.__background,"slider"),U.addClass(a.__foreground,"slider-fg");function c(p){document.activeElement.blur(),U.bind(window,"mousemove",u),U.bind(window,"mouseup",d),u(p)}function u(p){p.preventDefault();var f=l.__background.getBoundingClientRect();return l.setValue(vo(p.clientX,f.left,f.right,l.__min,l.__max)),!1}function d(){U.unbind(window,"mousemove",u),U.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(p){p.touches.length===1&&(U.bind(window,"touchmove",m),U.bind(window,"touchend",_),m(p))}function m(p){var f=p.touches[0].clientX,x=l.__background.getBoundingClientRect();l.setValue(vo(f,x.left,x.right,l.__min,l.__max))}function _(){U.unbind(window,"touchmove",m),U.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Ut(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",dn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(rl),sl=function(r){pn(e,r);function e(t,n,i){zt(this,e);var s=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,U.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),U.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Ut(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Un),As=function(r){pn(e,r);function e(t,n){zt(this,e);var i=mn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new rt(i.getValue()),i.__temp=new rt(0);var s=i;i.domElement=document.createElement("div"),U.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",U.bind(i.__input,"keydown",function(p){p.keyCode===13&&d.call(this)}),U.bind(i.__input,"blur",d),U.bind(i.__selector,"mousedown",function(){U.addClass(this,"drag").bind(window,"mouseup",function(){U.removeClass(s.__selector,"drag")})}),U.bind(i.__selector,"touchstart",function(){U.addClass(this,"drag").bind(window,"touchend",function(){U.removeClass(s.__selector,"drag")})});var o=document.createElement("div");$.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),$.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),$.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),$.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),$.extend(o.style,{width:"100%",height:"100%",background:"none"}),bo(o,"top","rgba(0,0,0,0)","#000"),$.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Op(i.__hue_field),$.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),U.bind(i.__saturation_field,"mousedown",a),U.bind(i.__saturation_field,"touchstart",a),U.bind(i.__field_knob,"mousedown",a),U.bind(i.__field_knob,"touchstart",a),U.bind(i.__hue_field,"mousedown",l),U.bind(i.__hue_field,"touchstart",l);function a(p){m(p),U.bind(window,"mousemove",m),U.bind(window,"touchmove",m),U.bind(window,"mouseup",c),U.bind(window,"touchend",c)}function l(p){_(p),U.bind(window,"mousemove",_),U.bind(window,"touchmove",_),U.bind(window,"mouseup",u),U.bind(window,"touchend",u)}function c(){U.unbind(window,"mousemove",m),U.unbind(window,"touchmove",m),U.unbind(window,"mouseup",c),U.unbind(window,"touchend",c),h()}function u(){U.unbind(window,"mousemove",_),U.unbind(window,"touchmove",_),U.unbind(window,"mouseup",u),U.unbind(window,"touchend",u),h()}function d(){var p=Es(this.value);p!==!1?(s.__color.__state=p,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function h(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function m(p){p.type.indexOf("touch")===-1&&p.preventDefault();var f=s.__saturation_field.getBoundingClientRect(),x=p.touches&&p.touches[0]||p,E=x.clientX,M=x.clientY,y=(E-f.left)/(f.right-f.left),S=1-(M-f.top)/(f.bottom-f.top);return S>1?S=1:S<0&&(S=0),y>1?y=1:y<0&&(y=0),s.__color.v=S,s.__color.s=y,s.setValue(s.__color.toOriginal()),!1}function _(p){p.type.indexOf("touch")===-1&&p.preventDefault();var f=s.__hue_field.getBoundingClientRect(),x=p.touches&&p.touches[0]||p,E=x.clientY,M=1-(E-f.top)/(f.bottom-f.top);return M>1?M=1:M<0&&(M=0),s.__color.h=M*360,s.setValue(s.__color.toOriginal()),!1}return i}return Ut(e,[{key:"updateDisplay",value:function(){var n=Es(this.getValue());if(n!==!1){var i=!1;$.each(rt.COMPONENTS,function(a){if(!$.isUndefined(n[a])&&!$.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&$.extend(this.__color.__state,n)}$.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;$.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,bo(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),$.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Un),Ip=["-moz-","-o-","-webkit-","-ms-",""];function bo(r,e,t,n){r.style.background="",$.each(Ip,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function Op(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Fp={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},Np=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,zp=function(e,t){var n=e[t];return $.isArray(arguments[2])||$.isObject(arguments[2])?new Pp(e,t,arguments[2]):$.isNumber(n)?$.isNumber(arguments[2])&&$.isNumber(arguments[3])?$.isNumber(arguments[4])?new Ts(e,t,arguments[2],arguments[3],arguments[4]):new Ts(e,t,arguments[2],arguments[3]):$.isNumber(arguments[4])?new xr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new xr(e,t,{min:arguments[2],max:arguments[3]}):$.isString(n)?new Dp(e,t):$.isFunction(n)?new sl(e,t,""):$.isBoolean(n)?new il(e,t):null};function Up(r){setTimeout(r,1e3/60)}var Bp=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Up,kp=function(){function r(){zt(this,r),this.backgroundElement=document.createElement("div"),$.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),U.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),$.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;U.bind(this.backgroundElement,"click",function(){e.hide()})}return Ut(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),$.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",U.unbind(t.domElement,"webkitTransitionEnd",i),U.unbind(t.domElement,"transitionend",i),U.unbind(t.domElement,"oTransitionEnd",i)};U.bind(this.domElement,"webkitTransitionEnd",n),U.bind(this.domElement,"transitionend",n),U.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-U.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-U.getHeight(this.domElement)/2+"px"}}]),r}(),Gp=Ep(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Fp.inject(Gp);var yo="dg",Mo=72,So=20,Ui="Default",Di=function(){try{return!!window.localStorage}catch{return!1}}(),Ri=void 0,wo=!0,ni=void 0,_s=!1,al=[],ke=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),U.addClass(this.domElement,yo),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=$.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=$.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),$.isUndefined(n.load)?n.load={preset:Ui}:n.preset&&(n.load.preset=n.preset),$.isUndefined(n.parent)&&n.hideable&&al.push(this),n.resizable=$.isUndefined(n.parent)&&n.resizable,n.autoPlace&&$.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Di&&localStorage.getItem(ii(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(h){t.parent?t.getRoot().preset=h:n.load.preset=h,Xp(this),t.revert()}},width:{get:function(){return n.width},set:function(h){n.width=h,Ps(t,h)}},name:{get:function(){return n.name},set:function(h){n.name=h,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(h){n.closed=h,n.closed?U.addClass(t.__ul,r.CLASS_CLOSED):U.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=h?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(h){Di&&(i=h,h?U.bind(window,"unload",s):U.unbind(window,"unload",s),localStorage.setItem(ii(t,"isLocal"),h))}}}),$.isUndefined(n.parent)){if(this.closed=n.closed||!1,U.addClass(this.domElement,r.CLASS_MAIN),U.makeSelectable(this.domElement,!1),Di&&i){t.useLocalStorage=!0;var a=localStorage.getItem(ii(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,U.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(U.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(U.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),U.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);U.addClass(l,"controller-name"),o=Xs(t,l);var c=function(h){return h.preventDefault(),t.closed=!t.closed,!1};U.addClass(this.__ul,r.CLASS_CLOSED),U.addClass(o,"title"),U.bind(o,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&($.isUndefined(n.parent)&&(wo&&(ni=document.createElement("div"),U.addClass(ni,yo),U.addClass(ni,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ni),wo=!1),ni.appendChild(this.domElement),U.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||Ps(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},U.bind(window,"resize",this.__resizeHandler),U.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),U.bind(this.__ul,"transitionend",this.__resizeHandler),U.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Wp(this),s=function(){Di&&localStorage.getItem(ii(t,"isLocal"))==="true"&&localStorage.setItem(ii(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var d=t.getRoot();d.width+=1,$.defer(function(){d.width-=1})}n.parent||u()};ke.toggleHide=function(){_s=!_s,$.each(al,function(r){r.domElement.style.display=_s?"none":""})};ke.CLASS_AUTO_PLACE="a";ke.CLASS_AUTO_PLACE_CONTAINER="ac";ke.CLASS_MAIN="main";ke.CLASS_CONTROLLER_ROW="cr";ke.CLASS_TOO_TALL="taller-than-window";ke.CLASS_CLOSED="closed";ke.CLASS_CLOSE_BUTTON="close-button";ke.CLASS_CLOSE_TOP="close-top";ke.CLASS_CLOSE_BOTTOM="close-bottom";ke.CLASS_DRAG="drag";ke.DEFAULT_WIDTH=245;ke.TEXT_CLOSED="Close Controls";ke.TEXT_OPEN="Open Controls";ke._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===Mo||r.keyCode===Mo)&&ke.toggleHide()};U.bind(window,"keydown",ke._keydownHandler,!1);$.extend(ke.prototype,{add:function(e,t){return Ii(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Ii(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;$.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ni.removeChild(this.domElement);var e=this;$.each(this.__folders,function(t){e.removeFolder(t)}),U.unbind(window,"keydown",ke._keydownHandler,!1),Eo(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new ke(t);this.__folders[e]=n;var i=Xs(this,n.domElement);return U.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Eo(e);var t=this;$.each(e.__folders,function(n){e.removeFolder(n)}),$.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=U.getOffset(e.__ul).top,n=0;$.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=U.getHeight(i))}),window.innerHeight-t-So<n?(U.addClass(e.domElement,ke.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-So+"px"):(U.removeClass(e.domElement,ke.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&$.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:$.debounce(function(){this.onResize()},50),remember:function(){if($.isUndefined(Ri)&&(Ri=new kp,Ri.domElement.innerHTML=Np),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;$.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Hp(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Ps(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=pr(this)),e.folders={},$.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=pr(this),Cs(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ui]=pr(this,!0)),this.load.remembered[e]=pr(this),this.preset=e,Ls(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){$.each(this.__controllers,function(t){this.getRoot().load.remembered?ol(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),$.each(this.__folders,function(t){t.revert(t)}),e||Cs(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&ll(this.__listening)},updateDisplay:function(){$.each(this.__controllers,function(e){e.updateDisplay()}),$.each(this.__folders,function(e){e.updateDisplay()})}});function Xs(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function Eo(r){U.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&U.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function Cs(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Vp(r,e,t){if(t.__li=e,t.__gui=r,$.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Ii(r,t.object,t.property,{before:a,factoryArgs:[$.toArray(arguments)]})}if($.isArray(o)||$.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Ii(r,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Ts){var n=new xr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});$.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=n[s];t[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),U.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof xr){var i=function(o){if($.isNumber(t.__min)&&$.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Ii(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=$.compose(i,t.min),t.max=$.compose(i,t.max)}else t instanceof il?(U.bind(e,"click",function(){U.fakeEvent(t.__checkbox,"click")}),U.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof sl?(U.bind(e,"click",function(){U.fakeEvent(t.__button,"click")}),U.bind(e,"mouseover",function(){U.addClass(t.__button,"hover")}),U.bind(e,"mouseout",function(){U.removeClass(t.__button,"hover")})):t instanceof As&&(U.addClass(e,"color"),t.updateDisplay=$.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=$.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&Cs(r.getRoot(),!0),s},t.setValue)}function ol(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[r.preset])o=s[r.preset];else if(s[Ui])o=s[Ui];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function Ii(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new As(e,t);else{var s=[e,t].concat(n.factoryArgs);i=zp.apply(r,s)}n.before instanceof Un&&(n.before=n.before.__li),ol(r,i),U.addClass(i.domElement,"c");var o=document.createElement("span");U.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=Xs(r,a,n.before);return U.addClass(l,ke.CLASS_CONTROLLER_ROW),i instanceof As?U.addClass(l,"color"):U.addClass(l,Ap(i.getValue())),Vp(r,l,i),r.__controllers.push(i),i}function ii(r,e){return document.location.href+"."+e}function Ls(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function To(r,e){e.style.display=r.useLocalStorage?"block":"none"}function Hp(r){var e=r.__save_row=document.createElement("li");U.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),U.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",U.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",U.addClass(n,"button"),U.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",U.addClass(i,"button"),U.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",U.addClass(s,"button"),U.addClass(s,"revert");var o=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?$.each(r.load.remembered,function(d,h){Ls(r,h,h===r.preset)}):Ls(r,Ui,!1),U.bind(o,"change",function(){for(var d=0;d<r.__preset_select.length;d++)r.__preset_select[d].innerHTML=r.__preset_select[d].value;r.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),Di){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(ii(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),To(r,a),U.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,To(r,a)})}var u=document.getElementById("dg-new-constructor");U.bind(u,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Ri.hide()}),U.bind(t,"click",function(){u.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Ri.show(),u.focus(),u.select()}),U.bind(n,"click",function(){r.save()}),U.bind(i,"click",function(){var d=prompt("Enter a new preset name.");d&&r.saveAs(d)}),U.bind(s,"click",function(){r.revert()})}function Wp(r){var e=void 0;r.__resize_handle=document.createElement("div"),$.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){U.removeClass(r.__closeButton,ke.CLASS_DRAG),U.unbind(window,"mousemove",t),U.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,U.addClass(r.__closeButton,ke.CLASS_DRAG),U.bind(window,"mousemove",t),U.bind(window,"mouseup",n),!1}U.bind(r.__resize_handle,"mousedown",i),U.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function Ps(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function pr(r,e){var t={};return $.each(r.__rememberedObjects,function(n,i){var s={},o=r.__rememberedObjectIndecesToControllers[i];$.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[i]=s}),t}function Xp(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function ll(r){r.length!==0&&Bp.call(window,function(){ll(r)}),$.each(r,function(e){e.updateDisplay()})}var qp=ke;const jp=""+new URL("bgm-68f52b5d.mp3",import.meta.url).href,Ds=document.querySelector(".play"),Rs=document.querySelector(".mute"),qs=new Audio(jp);qs.loop=!0;Rs.addEventListener("click",()=>{qs.play(),Rs.style.display="none",Ds.style.display="block"});Ds.addEventListener("click",()=>{qs.pause(),Rs.style.display="block",Ds.style.display="none"});const qi=new qp,cl=document.querySelector("canvas.webgl"),Bt=new pp,mt=new xp,Yp=mt.load("/textures/door/color.jpg"),$p=mt.load("/textures/door/alpha.jpg"),Zp=mt.load("/textures/door/ambientOcclusion.jpg"),Kp=mt.load("/textures/door/height.jpg"),Jp=mt.load("/textures/door/normal.jpg"),Qp=mt.load("/textures/door/metalness.jpg"),em=mt.load("/textures/door/roughness.jpg"),tm=mt.load("/textures/bricks/color.jpg"),nm=mt.load("/textures/bricks/ambientOcclusion.jpg"),im=mt.load("/textures/bricks/normal.jpg"),rm=mt.load("/textures/bricks/roughness.jpg"),Mr=mt.load("/textures/grass/color.jpg"),Sr=mt.load("/textures/grass/ambientOcclusion.jpg"),wr=mt.load("/textures/grass/normal.jpg"),Er=mt.load("/textures/grass/roughness.jpg");Mr.repeat.set(8,8);Sr.repeat.set(8,8);wr.repeat.set(8,8);Er.repeat.set(8,8);Mr.wrapS=Nt;Sr.wrapS=Nt;wr.wrapS=Nt;Er.wrapS=Nt;Mr.wrapT=Nt;Sr.wrapT=Nt;wr.wrapT=Nt;Er.wrapT=Nt;const gi=new si;Bt.add(gi);const Bi=new st(new zn(4,2.5,4),new mi({map:tm,aoMap:nm,normalMap:im,roughnessMap:rm}));Bi.castShadow=!0;Bi.geometry.setAttribute("uv2",new ct(Bi.geometry.attributes.uv.array,2));Bi.position.y=1.25;gi.add(Bi);const js=new st(new ks(3.5,1,4),new mi({color:"#b35f45"}));js.rotation.y=Math.PI*.25;js.position.y=2.5+.5;gi.add(js);const ki=new st(new Xi(2,2,100,100),new mi({map:Yp,transparent:!0,alphaMap:$p,aoMap:Zp,displacementMap:Kp,displacementScale:.1,normalMap:Jp,metalnessMap:Qp,roughnessMap:em}));ki.geometry.setAttribute("uv2",new ct(ki.geometry.attributes.uv.array,2));ki.position.y=1;ki.position.z=2+.01;gi.add(ki);const Tr=new Gs(1,16,16),Ar=new mi({color:"#89c854"}),Cr=new st(Tr,Ar);Cr.castShadow=!0;Cr.scale.set(.5,.5,.5);Cr.position.set(.8,.2,2.2);const Lr=new st(Tr,Ar);Lr.castShadow=!0;Lr.scale.set(.25,.25,.25);Lr.position.set(1.4,.1,2.1);const Pr=new st(Tr,Ar);Pr.castShadow=!0;Pr.scale.set(.4,.4,.4);Pr.position.set(-.8,.1,2.2);const Dr=new st(Tr,Ar);Dr.castShadow=!0;Dr.scale.set(.15,.15,.15);Dr.position.set(-1,.05,2.6);gi.add(Cr,Lr,Pr,Dr);const ul=new si;Bt.add(ul);const sm=new zn(.6,.8,.1),am=new mi({color:"#727272"});for(let r=0;r<50;r++){const e=Math.random()*Math.PI*2,t=3+Math.random()*6,n=Math.cos(e)*t,i=Math.sin(e)*t,s=new st(sm,am);s.castShadow=!0,s.position.set(n,.3,i),s.rotation.z=(Math.random()-.5)*.4,s.rotation.y=(Math.random()-.5)*.4,ul.add(s)}const fi=new st(new Xi(20,20),new mi({map:Mr,aoMap:Sr,normalMap:wr,roughnessMap:Er}));fi.receiveShadow=!0;fi.geometry.setAttribute("uv2",new ct(fi.geometry.attributes.uv.array,2));fi.rotation.x=-Math.PI*.5;fi.position.y=0;Bt.add(fi);const dl=new Mp("#b9d5ff",.3);qi.add(dl,"intensity").min(0).max(1).step(.001);Bt.add(dl);const Xt=new yp("#b9d5ff",.12);Xt.castShadow=!0;Xt.shadow.mapSize.width=256;Xt.shadow.mapSize.height=256;Xt.shadow.camera.far=15;Xt.position.set(4,5,-2);qi.add(Xt,"intensity").min(0).max(1).step(.001);qi.add(Xt.position,"x").min(-5).max(5).step(.001);qi.add(Xt.position,"y").min(-5).max(5).step(.001);qi.add(Xt.position,"z").min(-5).max(5).step(.001);Bt.add(Xt);const _i=new yr("#ff7d46",1,7);_i.castShadow=!0;_i.shadow.mapSize.width=256;_i.shadow.mapSize.height=256;_i.shadow.camera.far=7;_i.position.set(0,2.2,2.7);gi.add(_i);const ln=new yr("#ff00ff",3,3);ln.castShadow=!0;ln.shadow.mapSize.width=256;ln.shadow.mapSize.height=256;ln.shadow.camera.far=7;Bt.add(ln);const cn=new yr("#00ffff",3,3);cn.castShadow=!0;cn.shadow.mapSize.width=256;cn.shadow.mapSize.height=256;cn.shadow.camera.far=7;Bt.add(cn);const un=new yr("#ff7800",3,3);un.castShadow=!0;un.shadow.mapSize.width=256;un.shadow.mapSize.height=256;un.shadow.camera.far=7;Bt.add(un);const om=new Us("#262837",1,15);Bt.fog=om;const Ht={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Ht.width=window.innerWidth,Ht.height=window.innerHeight,hn.aspect=Ht.width/Ht.height,hn.updateProjectionMatrix(),fn.setSize(Ht.width,Ht.height),fn.setPixelRatio(Math.min(window.devicePixelRatio,2))});const hn=new wt(75,Ht.width/Ht.height,.1,100);hn.position.x=4;hn.position.y=2;hn.position.z=5;Bt.add(hn);const hl=new wp(hn,cl);hl.enableDamping=!0;const fn=new Qo({canvas:cl});fn.shadowMap.enabled=!0;fn.shadowMap.type=Co;fn.setClearColor("#262837");fn.setSize(Ht.width,Ht.height);fn.setPixelRatio(Math.min(window.devicePixelRatio,2));const lm=new Sp,fl=()=>{const r=lm.getElapsedTime(),e=r*.5;ln.position.x=Math.cos(e)*4,ln.position.z=Math.sin(e)*4,ln.position.y=Math.sin(r*3);const t=-r*.32;cn.position.x=Math.cos(t)*5,cn.position.z=Math.sin(t)*5,cn.position.y=Math.sin(r*4)+Math.sin(r*2.5);const n=-r*.18;un.position.x=Math.cos(n)*(7+Math.sin(r*.32)),un.position.z=Math.sin(n)*(7+Math.sin(r*.5)),un.position.y=Math.sin(r*4)+Math.sin(r*2.5),hl.update(),fn.render(Bt,hn),window.requestAnimationFrame(fl)};fl();
//# sourceMappingURL=index-4694424f.js.map
