(()=>{var Vh="160",ws={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ig=0,Vd=1,Dg=2;var Ip=1,Gh=2,ti=3,On=0,Qt=1,Zt=2;var zt=0,Qs=1,nr=2,Gd=3,Wd=4,Wh=5,Gn=100,kg=101,Ug=102,Xd=103,qd=104,wr=200,Ng=201,Bg=202,Og=203,eh=204,th=205,gl=206,Fg=207,vl=208,zg=209,Hg=210,Vg=211,Gg=212,Wg=213,Xg=214,qg=0,jg=1,Yg=2,Do=3,$g=4,Zg=5,Kg=6,Jg=7,Dp=0,Qg=1,e0=2,Gi=0,Xh=1,qh=2,jh=3,Aa=4,t0=5,Yh=6,jd="attached",n0="detached",kp=300,ir=301,sr=302,fa=303,nh=304,xl=306,Fn=1e3,wn=1001,pa=1002,kt=1003,ko=1004;var aa=1005;var Rt=1006,$h=1007;var Ai=1008;var hi=1009,i0=1010,s0=1011,Zh=1012,Up=1013,Hi=1014,fn=1015,ct=1016,Np=1017,Bp=1018,Ei=1020,r0=1021,xn=1023,a0=1024,o0=1025,ds=1026,Wi=1027,Kh=1028,Op=1029,l0=1030,Fp=1031,zp=1033,vc=33776,xc=33777,yc=33778,_c=33779,Yd=35840,$d=35841,Zd=35842,Kd=35843,Hp=36196,Jd=37492,Qd=37496,ef=37808,tf=37809,nf=37810,sf=37811,rf=37812,af=37813,of=37814,lf=37815,cf=37816,hf=37817,uf=37818,df=37819,ff=37820,pf=37821,bc=36492,mf=36494,gf=36495,c0=36283,vf=36284,xf=36285,yf=36286,h0=2200,u0=2201,d0=2202,rr=2300,ps=2301,Mc=2302,$s=2400,Zs=2401,Uo=2402,Jh=2500,f0=2501,Vp=0,yl=1,Ra=2,Gp=3e3,fs=3001,p0=3200,Ca=3201,Qh=0,m0=1,Rn="",xt="srgb",It="srgb-linear",eu="display-p3",_l="display-p3-linear",No="linear",Et="srgb",Bo="rec709",Oo="p3";var Rs=7680;var _f=519,g0=512,v0=513,x0=514,Wp=515,y0=516,_0=517,b0=518,M0=519,ih=35044;var bf="300 es",sh=1035,Ti=2e3,Fo=2001,ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mf=1234567,oa=Math.PI/180,ar=180/Math.PI;function ni(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Yt(r,e,t){return Math.max(e,Math.min(t,r))}function tu(r,e){return(r%e+e)%e}function w0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function S0(r,e,t){return r!==e?(t-r)/(e-r):0}function la(r,e,t){return(1-t)*r+t*e}function T0(r,e,t,n){return la(r,e,1-Math.exp(-t*n))}function E0(r,e=1){return e-Math.abs(tu(r,e*2)-e)}function A0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function R0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function C0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function P0(r,e){return r+Math.random()*(e-r)}function L0(r){return r*(.5-Math.random())}function I0(r){r!==void 0&&(Mf=r);let e=Mf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function D0(r){return r*oa}function k0(r){return r*ar}function rh(r){return(r&r-1)===0&&r!==0}function U0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function N0(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*v,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*v,o*c);break;case"ZYZ":r.set(l*v,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function St(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var jn={DEG2RAD:oa,RAD2DEG:ar,generateUUID:ni,clamp:Yt,euclideanModulo:tu,mapLinear:w0,inverseLerp:S0,lerp:la,damp:T0,pingpong:E0,smoothstep:A0,smootherstep:R0,randInt:C0,randFloat:P0,randFloatSpread:L0,seededRandom:I0,degToRad:D0,radToDeg:k0,isPowerOfTwo:rh,ceilPowerOfTwo:U0,floorPowerOfTwo:zo,setQuaternionFromProperEuler:N0,normalize:St,denormalize:ci},te=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},at=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],v=n[8],x=i[0],m=i[3],p=i[6],y=i[1],g=i[4],_=i[7],E=i[2],w=i[5],T=i[8];return s[0]=a*x+o*y+l*E,s[3]=a*m+o*g+l*w,s[6]=a*p+o*_+l*T,s[1]=c*x+h*y+u*E,s[4]=c*m+h*g+u*w,s[7]=c*p+h*_+u*T,s[2]=d*x+f*y+v*E,s[5]=d*m+f*g+v*w,s[8]=d*p+f*_+v*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,v=t*u+n*d+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wc.makeScale(e,t)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wc=new at;function Xp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ma(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function B0(){let r=ma("canvas");return r.style.display="block",r}var wf={};function ca(r){r in wf||(wf[r]=!0,console.warn(r))}var Sf=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tf=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qa={[It]:{transfer:No,primaries:Bo,toReference:r=>r,fromReference:r=>r},[xt]:{transfer:Et,primaries:Bo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[_l]:{transfer:No,primaries:Oo,toReference:r=>r.applyMatrix3(Tf),fromReference:r=>r.applyMatrix3(Sf)},[eu]:{transfer:Et,primaries:Oo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Tf),fromReference:r=>r.applyMatrix3(Sf).convertLinearToSRGB()}},O0=new Set([It,_l]),ft={enabled:!0,_workingColorSpace:It,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!O0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=Qa[e].toReference,i=Qa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Qa[r].primaries},getTransfer:function(r){return r===Rn?No:Qa[r].transfer}};function er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Sc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Cs,Ho=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=ma("canvas")),Cs.width=e.width,Cs.height=e.height;let n=Cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ma("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=er(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(er(t[n]/255)*255):t[n]=er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},F0=0,Vo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Tc(i[a].image)):s.push(Tc(i[a]))}else s=Tc(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Tc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ho.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var z0=0,pn=class r extends ii{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=wn,i=wn,s=Rt,a=Ai,o=xn,l=hi,c=r.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=ni(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===fs?xt:Rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xt?fs:Gp}set encoding(e){ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fs?xt:Rn}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=kp;pn.DEFAULT_ANISOTROPY=1;var Ct=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],v=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(c+1)/2,_=(f+1)/2,E=(p+1)/2,w=(h+d)/4,T=(u+x)/4,C=(v+m)/4;return g>_&&g>E?g<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(g),i=w/n,s=T/n):_>E?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=w/i,s=C/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=T/s,i=C/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-v)*(m-v)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ah=class extends ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(ca("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fs?xt:Rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yt=class extends ah{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Go=class extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oh=class extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==v){let m=1-o,p=l*d+c*f+h*v+u*x,y=p>=0?1:-1,g=1-p*p;if(g>Number.EPSILON){let E=Math.sqrt(g),w=Math.atan2(E,p*y);m=Math.sin(m*w)/E,o=Math.sin(o*w)/E}let _=o*y;if(l=l*m+d*_,c=c*m+f*_,h=h*m+v*_,u=u*m+x*_,m===1-o){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],v=s[a+3];return e[t]=o*v+h*u+l*f-c*d,e[t+1]=l*v+h*d+c*u-o*f,e[t+2]=c*v+h*f+o*d-l*u,e[t+3]=h*v-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),v=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"YXZ":this._x=d*h*u+c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"ZXY":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u-d*f*v;break;case"ZYX":this._x=d*h*u-c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u+d*f*v;break;case"YZX":this._x=d*h*u+c*f*v,this._y=c*f*u+d*h*v,this._z=c*h*v-d*f*u,this._w=c*h*u-d*f*v;break;case"XZY":this._x=d*h*u-c*f*v,this._y=c*f*u-d*h*v,this._z=c*h*v+d*f*u,this._w=c*h*u+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ef.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ef.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ec=new S,Ef=new Lt,et=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),to.subVectors(this.max,Zr),Ps.subVectors(e.a,Zr),Ls.subVectors(e.b,Zr),Is.subVectors(e.c,Zr),Ni.subVectors(Ls,Ps),Bi.subVectors(Is,Ls),as.subVectors(Ps,Is);let t=[0,-Ni.z,Ni.y,0,-Bi.z,Bi.y,0,-as.z,as.y,Ni.z,0,-Ni.x,Bi.z,0,-Bi.x,as.z,0,-as.x,-Ni.y,Ni.x,0,-Bi.y,Bi.x,0,-as.y,as.x,0];return!Ac(t,Ps,Ls,Is,to)||(t=[1,0,0,0,1,0,0,0,1],!Ac(t,Ps,Ls,Is,to))?!1:(no.crossVectors(Ni,Bi),t=[no.x,no.y,no.z],Ac(t,Ps,Ls,Is,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new S,new S,new S,new S,new S,new S,new S,new S],Jn=new S,eo=new et,Ps=new S,Ls=new S,Is=new S,Ni=new S,Bi=new S,as=new S,Zr=new S,to=new S,no=new S,os=new S;function Ac(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){os.fromArray(r,s);let o=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var H0=new et,Kr=new S,Rc=new S,Sn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):H0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);let t=Kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Kr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Rc)),this.expandByPoint(Kr.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new S,Cc=new S,io=new S,Oi=new S,Pc=new S,so=new S,Lc=new S,si=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Cc.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Cc);let s=e.distanceTo(t)*.5,a=-this.direction.dot(io),o=Oi.dot(this.direction),l=-Oi.dot(io),c=Oi.lengthSq(),h=Math.abs(1-a*a),u,d,f,v;if(h>0)if(u=a*l-o,d=a*o-l,v=s*h,u>=0)if(d>=-v)if(d<=v){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Cc).addScaledVector(io,d),f}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),i=yi.dot(yi)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,i,s){Pc.subVectors(t,e),so.subVectors(n,e),Lc.crossVectors(Pc,so);let a=this.direction.dot(Lc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Oi.subVectors(this.origin,e);let l=o*this.direction.dot(so.crossVectors(Oi,so));if(l<0)return null;let c=o*this.direction.dot(Pc.cross(Oi));if(c<0||l+c>a)return null;let h=-o*Oi.dot(Lc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,f,v,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,f,v,x,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,f,v,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,f=a*u,v=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+v*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,v=c*h,x=c*u;t[0]=d+x*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-v,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,v=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,v=o*h,x=o*u;t[0]=l*h,t[4]=v*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,v=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=v*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+v,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,v=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-v,t[2]=v*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V0,e,G0)}lookAt(e,t,n){let i=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Fi.crossVectors(n,Nn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Fi.crossVectors(n,Nn)),Fi.normalize(),ro.crossVectors(Nn,Fi),i[0]=Fi.x,i[4]=ro.x,i[8]=Nn.x,i[1]=Fi.y,i[5]=ro.y,i[9]=Nn.y,i[2]=Fi.z,i[6]=ro.z,i[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],v=n[2],x=n[6],m=n[10],p=n[14],y=n[3],g=n[7],_=n[11],E=n[15],w=i[0],T=i[4],C=i[8],b=i[12],R=i[1],O=i[5],B=i[9],X=i[13],I=i[2],W=i[6],q=i[10],ie=i[14],se=i[3],Z=i[7],ne=i[11],ae=i[15];return s[0]=a*w+o*R+l*I+c*se,s[4]=a*T+o*O+l*W+c*Z,s[8]=a*C+o*B+l*q+c*ne,s[12]=a*b+o*X+l*ie+c*ae,s[1]=h*w+u*R+d*I+f*se,s[5]=h*T+u*O+d*W+f*Z,s[9]=h*C+u*B+d*q+f*ne,s[13]=h*b+u*X+d*ie+f*ae,s[2]=v*w+x*R+m*I+p*se,s[6]=v*T+x*O+m*W+p*Z,s[10]=v*C+x*B+m*q+p*ne,s[14]=v*b+x*X+m*ie+p*ae,s[3]=y*w+g*R+_*I+E*se,s[7]=y*T+g*O+_*W+E*Z,s[11]=y*C+g*B+_*q+E*ne,s[15]=y*b+g*X+_*ie+E*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],v=e[3],x=e[7],m=e[11],p=e[15];return v*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+x*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+m*(+t*c*u-t*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],v=e[12],x=e[13],m=e[14],p=e[15],y=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,g=v*d*c-h*m*c-v*l*f+a*m*f+h*l*p-a*d*p,_=h*x*c-v*u*c+v*o*f-a*x*f-h*o*p+a*u*p,E=v*u*l-h*x*l-v*o*d+a*x*d+h*o*m-a*u*m,w=t*y+n*g+i*_+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return e[0]=y*T,e[1]=(x*d*s-u*m*s-x*i*f+n*m*f+u*i*p-n*d*p)*T,e[2]=(o*m*s-x*l*s+x*i*c-n*m*c-o*i*p+n*l*p)*T,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*T,e[4]=g*T,e[5]=(h*m*s-v*d*s+v*i*f-t*m*f-h*i*p+t*d*p)*T,e[6]=(v*l*s-a*m*s-v*i*c+t*m*c+a*i*p-t*l*p)*T,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*f+t*l*f)*T,e[8]=_*T,e[9]=(v*u*s-h*x*s-v*n*f+t*x*f+h*n*p-t*u*p)*T,e[10]=(a*x*s-v*o*s+v*n*c-t*x*c-a*n*p+t*o*p)*T,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*f-t*o*f)*T,e[12]=E*T,e[13]=(h*x*i-v*u*i+v*n*d-t*x*d-h*n*m+t*u*m)*T,e[14]=(v*o*i-a*x*i-v*n*l+t*x*l+a*n*m-t*o*m)*T,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,v=s*u,x=a*h,m=a*u,p=o*u,y=l*c,g=l*h,_=l*u,E=n.x,w=n.y,T=n.z;return i[0]=(1-(x+p))*E,i[1]=(f+_)*E,i[2]=(v-g)*E,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(d+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(v+g)*T,i[9]=(m-y)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Ds.set(i[0],i[1],i[2]).length(),a=Ds.set(i[4],i[5],i[6]).length(),o=Ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);let c=1/s,h=1/a,u=1/o;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,t.setFromRotationMatrix(Qn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Ti){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,v;if(o===Ti)f=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Fo)f=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ti){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,f=(n+i)*h,v,x;if(o===Ti)v=(a+s)*u,x=-2*u;else if(o===Fo)v=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ds=new S,Qn=new Ue,V0=new S(0,0,0),G0=new S(1,1,1),Fi=new S,ro=new S,Nn=new S,Af=new Ue,Rf=new Lt,ms=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Af,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rf.setFromEuler(this),this.setFromQuaternion(Rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ms.DEFAULT_ORDER="XYZ";var ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},W0=0,Cf=new S,ks=new Lt,_i=new Ue,ao=new S,Jr=new S,X0=new S,q0=new Lt,Pf=new S(1,0,0),Lf=new S(0,1,0),If=new S(0,0,1),j0={type:"added"},Y0={type:"removed"},Vt=class r extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new S,t=new ms,n=new Lt,i=new S(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new at}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Pf,e)}rotateY(e){return this.rotateOnAxis(Lf,e)}rotateZ(e){return this.rotateOnAxis(If,e)}translateOnAxis(e,t){return Cf.copy(e).applyQuaternion(this.quaternion),this.position.add(Cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pf,e)}translateY(e){return this.translateOnAxis(Lf,e)}translateZ(e){return this.translateOnAxis(If,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ao.copy(e):ao.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Jr,ao,this.up):_i.lookAt(ao,Jr,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(_i),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(j0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,X0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Vt.DEFAULT_UP=new S(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new S,bi=new S,Ic=new S,Mi=new S,Us=new S,Ns=new S,Df=new S,Dc=new S,kc=new S,Uc=new S,oo=!1,Cn=class r{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ei.subVectors(i,t),bi.subVectors(n,t),Ic.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(bi),l=ei.dot(Ic),c=bi.dot(bi),h=bi.dot(Ic),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,v=(a*h-o*l)*d;return s.set(1-f-v,v,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,n,i,s,a,o,l){return oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oo=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),bi.subVectors(e,t),ei.cross(bi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ei.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return oo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oo=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Us.subVectors(i,n),Ns.subVectors(s,n),Dc.subVectors(e,n);let l=Us.dot(Dc),c=Ns.dot(Dc);if(l<=0&&c<=0)return t.copy(n);kc.subVectors(e,i);let h=Us.dot(kc),u=Ns.dot(kc);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Us,a);Uc.subVectors(e,s);let f=Us.dot(Uc),v=Ns.dot(Uc);if(v>=0&&f<=v)return t.copy(s);let x=f*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ns,o);let m=h*v-f*u;if(m<=0&&u-h>=0&&f-v>=0)return Df.subVectors(s,i),o=(u-h)/(u-h+(f-v)),t.copy(i).addScaledVector(Df,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Us,a).addScaledVector(Ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Nc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=tu(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Nc(a,s,e+1/3),this.g=Nc(a,s,e),this.b=Nc(a,s,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=qp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Sc(e.r),this.g=Sc(e.g),this.b=Sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return ft.fromWorkingColorSpace(vn.copy(this),e),Math.round(Yt(vn.r*255,0,255))*65536+Math.round(Yt(vn.g*255,0,255))*256+Math.round(Yt(vn.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(vn.copy(this),t);let n=vn.r,i=vn.g,s=vn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=xt){ft.fromWorkingColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,i=vn.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(lo);let n=la(zi.h,lo.h,t),i=la(zi.s,lo.s,t),s=la(zi.l,lo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new Se;Se.NAMES=qp;var $0=0,Tn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Qs,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eh&&(n.blendSrc=this.blendSrc),this.blendDst!==th&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_f&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ut=class extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Si=Z0();function Z0(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function K0(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Yt(r,-65504,65504),Si.floatView[0]=r;let e=Si.uint32View[0],t=e>>23&511;return Si.baseTable[t]+((e&8388607)>>Si.shiftTable[t])}function J0(r){let e=r>>10;return Si.uint32View[0]=Si.mantissaTable[Si.offsetTable[e]+(r&1023)]+Si.exponentTable[e],Si.floatView[0]}var Zi={toHalfFloat:K0,fromHalfFloat:J0},Jt=new S,co=new te,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ih,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ih&&(e.usage=this.usage),e}};var Wo=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xo=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Q0=0,Vn=new Ue,Bc=new Vt,Bs=new S,Bn=new et,Qr=new et,on=new S,Dt=class r extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xp(e)?Xo:Wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new et);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Qr.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Bn.min,Qr.min),Bn.expandByPoint(on),on.addVectors(Bn.max,Qr.max),Bn.expandByPoint(on)):(Bn.expandByPoint(Qr.min),Bn.expandByPoint(Qr.max))}Bn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)on.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(on));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)on.fromBufferAttribute(o,c),l&&(Bs.fromBufferAttribute(e,c),on.add(Bs)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new S,h[R]=new S;let u=new S,d=new S,f=new S,v=new te,x=new te,m=new te,p=new S,y=new S;function g(R,O,B){u.fromArray(i,R*3),d.fromArray(i,O*3),f.fromArray(i,B*3),v.fromArray(a,R*2),x.fromArray(a,O*2),m.fromArray(a,B*2),d.sub(u),f.sub(u),x.sub(v),m.sub(v);let X=1/(x.x*m.y-m.x*x.y);isFinite(X)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(X),y.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(X),c[R].add(p),c[O].add(p),c[B].add(p),h[R].add(y),h[O].add(y),h[B].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let R=0,O=_.length;R<O;++R){let B=_[R],X=B.start,I=B.count;for(let W=X,q=X+I;W<q;W+=3)g(n[W+0],n[W+1],n[W+2])}let E=new S,w=new S,T=new S,C=new S;function b(R){T.fromArray(s,R*3),C.copy(T);let O=c[R];E.copy(O),E.sub(T.multiplyScalar(T.dot(O))).normalize(),w.crossVectors(C,O);let X=w.dot(h[R])<0?-1:1;l[R*4]=E.x,l[R*4+1]=E.y,l[R*4+2]=E.z,l[R*4+3]=X}for(let R=0,O=_.length;R<O;++R){let B=_[R],X=B.start,I=B.count;for(let W=X,q=X+I;W<q;W+=3)b(n[W+0]),b(n[W+1]),b(n[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new S,s=new S,a=new S,o=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let d=0,f=e.count;d<f;d+=3){let v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[v++]=c[f++]}return new Ht(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kf=new Ue,ls=new si,ho=new Sn,Uf=new S,Os=new S,Fs=new S,zs=new S,Oc=new S,uo=new S,fo=new te,po=new te,mo=new te,Nf=new S,Bf=new S,Of=new S,go=new S,vo=new S,Ae=class extends Vt{constructor(e=new Dt,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Oc.fromBufferAttribute(u,e),a?uo.addScaledVector(Oc,h):uo.addScaledVector(Oc.sub(t),h))}t.add(uo)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),ls.copy(e.ray).recast(e.near),!(ho.containsPoint(ls.origin)===!1&&(ls.intersectSphere(ho,Uf)===null||ls.origin.distanceToSquared(Uf)>(e.far-e.near)**2))&&(kf.copy(s).invert(),ls.copy(e.ray).applyMatrix4(kf),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){let m=d[v],p=a[m.materialIndex],y=Math.max(m.start,f.start),g=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,E=g;_<E;_+=3){let w=o.getX(_),T=o.getX(_+1),C=o.getX(_+2);i=xo(this,p,e,n,c,h,u,w,T,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let v=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=v,p=x;m<p;m+=3){let y=o.getX(m),g=o.getX(m+1),_=o.getX(m+2);i=xo(this,a,e,n,c,h,u,y,g,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){let m=d[v],p=a[m.materialIndex],y=Math.max(m.start,f.start),g=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,E=g;_<E;_+=3){let w=_,T=_+1,C=_+2;i=xo(this,p,e,n,c,h,u,w,T,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let v=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=v,p=x;m<p;m+=3){let y=m,g=m+1,_=m+2;i=xo(this,a,e,n,c,h,u,y,g,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function ev(r,e,t,n,i,s,a,o){let l;if(e.side===Qt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===On,o),l===null)return null;vo.copy(o),vo.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(vo);return c<t.near||c>t.far?null:{distance:c,point:vo.clone(),object:r}}function xo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Os),r.getVertexPosition(l,Fs),r.getVertexPosition(c,zs);let h=ev(r,e,t,n,Os,Fs,zs,go);if(h){i&&(fo.fromBufferAttribute(i,o),po.fromBufferAttribute(i,l),mo.fromBufferAttribute(i,c),h.uv=Cn.getInterpolation(go,Os,Fs,zs,fo,po,mo,new te)),s&&(fo.fromBufferAttribute(s,o),po.fromBufferAttribute(s,l),mo.fromBufferAttribute(s,c),h.uv1=Cn.getInterpolation(go,Os,Fs,zs,fo,po,mo,new te),h.uv2=h.uv1),a&&(Nf.fromBufferAttribute(a,o),Bf.fromBufferAttribute(a,l),Of.fromBufferAttribute(a,c),h.normal=Cn.getInterpolation(go,Os,Fs,zs,Nf,Bf,Of,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new S,materialIndex:0};Cn.getNormal(Os,Fs,zs,u.normal),h.face=u}return h}var Pn=class r extends Dt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function v(x,m,p,y,g,_,E,w,T,C,b){let R=_/T,O=E/C,B=_/2,X=E/2,I=w/2,W=T+1,q=C+1,ie=0,se=0,Z=new S;for(let ne=0;ne<q;ne++){let ae=ne*O-X;for(let de=0;de<W;de++){let K=de*R-B;Z[x]=K*y,Z[m]=ae*g,Z[p]=I,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(de/T),u.push(1-ne/C),ie+=1}}for(let ne=0;ne<C;ne++)for(let ae=0;ae<T;ae++){let de=d+ae+W*ne,K=d+ae+W*(ne+1),re=d+(ae+1)+W*(ne+1),ye=d+(ae+1)+W*ne;l.push(de,K,ye),l.push(K,re,ye),se+=6}o.addGroup(f,se,b),f+=se,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function or(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(r){let e={};for(let t=0;t<r.length;t++){let n=or(r[t]);for(let i in n)e[i]=n[i]}return e}function tv(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function jp(r){return r.getRenderTarget()===null?r.outputColorSpace:ft.workingColorSpace}var ln={clone:or,merge:bn},nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ut=class extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nv,this.fragmentShader=iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qo=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},nn=class extends qo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(oa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hs=-90,Vs=1,lh=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new nn(Hs,Vs,e,t);i.layers=this.layers,this.add(i);let s=new nn(Hs,Vs,e,t);s.layers=this.layers,this.add(s);let a=new nn(Hs,Vs,e,t);a.layers=this.layers,this.add(a);let o=new nn(Hs,Vs,e,t);o.layers=this.layers,this.add(o);let l=new nn(Hs,Vs,e,t);l.layers=this.layers,this.add(l);let c=new nn(Hs,Vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},jo=class extends pn{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ch=class extends yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ca("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===fs?xt:Rn),this.texture=new jo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pn(5,5,5),s=new ut({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:zt});s.uniforms.tEquirect.value=t;let a=new Ae(i,s),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Rt),new lh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Fc=new S,sv=new S,rv=new at,Mn=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Fc.subVectors(n,t).cross(sv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rv.getNormalMatrix(e),i=this.coplanarPoint(Fc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new Sn,yo=new S,va=class{constructor(e=new Mn,t=new Mn,n=new Mn,i=new Mn,s=new Mn,a=new Mn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],v=i[9],x=i[10],m=i[11],p=i[12],y=i[13],g=i[14],_=i[15];if(n[0].setComponents(l-s,d-c,m-f,_-p).normalize(),n[1].setComponents(l+s,d+c,m+f,_+p).normalize(),n[2].setComponents(l+a,d+h,m+v,_+y).normalize(),n[3].setComponents(l-a,d-h,m-v,_-y).normalize(),n[4].setComponents(l-o,d-u,m-x,_-g).normalize(),t===Ti)n[5].setComponents(l+o,d+u,m+x,_+g).normalize();else if(t===Fo)n[5].setComponents(o,u,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(yo.x=i.normal.x>0?e.max.x:e.min.x,yo.y=i.normal.y>0?e.max.y:e.min.y,yo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function av(r,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,f=u.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=r.SHORT;else if(u instanceof Uint32Array)x=r.UNSIGNED_INT;else if(u instanceof Int32Array)x=r.INT;else if(u instanceof Int8Array)x=r.BYTE;else if(u instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:v,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,h,u){let d=h.array,f=h._updateRange,v=h.updateRanges;if(r.bindBuffer(u,c),f.count===-1&&v.length===0&&r.bufferSubData(u,0,d),v.length!==0){for(let x=0,m=v.length;x<m;x++){let p=v[x];t?r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var gs=class r extends Dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],v=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let g=0;g<c;g++){let _=g*u-s;v.push(_,-y,0),x.push(0,0,1),m.push(g/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let g=y+c*p,_=y+c*(p+1),E=y+1+c*(p+1),w=y+1+c*p;f.push(g,_,w),f.push(_,E,w)}this.setIndex(f),this.setAttribute("position",new ot(v,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},ov=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
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
#endif`,cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fv=`#ifdef USE_AOMAP
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
#endif`,pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_v=`#ifdef USE_IRIDESCENCE
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
#endif`,bv=`#ifdef USE_BUMPMAP
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
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pv=`#define PI 3.141592653589793
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
} // validated`,Lv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Iv=`vec3 transformedNormal = objectNormal;
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
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ov=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Fv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yv=`#ifdef USE_GRADIENTMAP
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
}`,$v=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qv=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,ex=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ax=`struct PhysicalMaterial {
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,ox=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ux=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vx=`#if defined( USE_POINTS_UV )
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
#endif`,xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_x=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bx=`#ifdef USE_MORPHNORMALS
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
#endif`,Mx=`#ifdef USE_MORPHTARGETS
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
#endif`,wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cx=`#ifdef USE_NORMALMAP
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
#endif`,Px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ux=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Xx=`float getShadowMask() {
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
}`,qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jx=`#ifdef USE_SKINNING
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
#endif`,Yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qx=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ey=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ty=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oy=`uniform sampler2D t2D;
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`#include <common>
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
}`,fy=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,py=`#define DISTANCE
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
}`,my=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_y=`#include <common>
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
}`,by=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,My=`#define LAMBERT
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
}`,wy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Sy=`#define MATCAP
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
}`,Ty=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ey=`#define NORMAL
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
}`,Ay=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,Ry=`#define PHONG
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
}`,Cy=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
}`,Py=`#define STANDARD
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
}`,Ly=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Iy=`#define TOON
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
}`,Dy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ky=`uniform float size;
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
}`,Uy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ny=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,By=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Oy=`uniform float rotation;
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
}`,Fy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,nt={alphahash_fragment:ov,alphahash_pars_fragment:lv,alphamap_fragment:cv,alphamap_pars_fragment:hv,alphatest_fragment:uv,alphatest_pars_fragment:dv,aomap_fragment:fv,aomap_pars_fragment:pv,batching_pars_vertex:mv,batching_vertex:gv,begin_vertex:vv,beginnormal_vertex:xv,bsdfs:yv,iridescence_fragment:_v,bumpmap_pars_fragment:bv,clipping_planes_fragment:Mv,clipping_planes_pars_fragment:wv,clipping_planes_pars_vertex:Sv,clipping_planes_vertex:Tv,color_fragment:Ev,color_pars_fragment:Av,color_pars_vertex:Rv,color_vertex:Cv,common:Pv,cube_uv_reflection_fragment:Lv,defaultnormal_vertex:Iv,displacementmap_pars_vertex:Dv,displacementmap_vertex:kv,emissivemap_fragment:Uv,emissivemap_pars_fragment:Nv,colorspace_fragment:Bv,colorspace_pars_fragment:Ov,envmap_fragment:Fv,envmap_common_pars_fragment:zv,envmap_pars_fragment:Hv,envmap_pars_vertex:Vv,envmap_physical_pars_fragment:ex,envmap_vertex:Gv,fog_vertex:Wv,fog_pars_vertex:Xv,fog_fragment:qv,fog_pars_fragment:jv,gradientmap_pars_fragment:Yv,lightmap_fragment:$v,lightmap_pars_fragment:Zv,lights_lambert_fragment:Kv,lights_lambert_pars_fragment:Jv,lights_pars_begin:Qv,lights_toon_fragment:tx,lights_toon_pars_fragment:nx,lights_phong_fragment:ix,lights_phong_pars_fragment:sx,lights_physical_fragment:rx,lights_physical_pars_fragment:ax,lights_fragment_begin:ox,lights_fragment_maps:lx,lights_fragment_end:cx,logdepthbuf_fragment:hx,logdepthbuf_pars_fragment:ux,logdepthbuf_pars_vertex:dx,logdepthbuf_vertex:fx,map_fragment:px,map_pars_fragment:mx,map_particle_fragment:gx,map_particle_pars_fragment:vx,metalnessmap_fragment:xx,metalnessmap_pars_fragment:yx,morphcolor_vertex:_x,morphnormal_vertex:bx,morphtarget_pars_vertex:Mx,morphtarget_vertex:wx,normal_fragment_begin:Sx,normal_fragment_maps:Tx,normal_pars_fragment:Ex,normal_pars_vertex:Ax,normal_vertex:Rx,normalmap_pars_fragment:Cx,clearcoat_normal_fragment_begin:Px,clearcoat_normal_fragment_maps:Lx,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Dx,opaque_fragment:kx,packing:Ux,premultiplied_alpha_fragment:Nx,project_vertex:Bx,dithering_fragment:Ox,dithering_pars_fragment:Fx,roughnessmap_fragment:zx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:Gx,shadowmap_vertex:Wx,shadowmask_pars_fragment:Xx,skinbase_vertex:qx,skinning_pars_vertex:jx,skinning_vertex:Yx,skinnormal_vertex:$x,specularmap_fragment:Zx,specularmap_pars_fragment:Kx,tonemapping_fragment:Jx,tonemapping_pars_fragment:Qx,transmission_fragment:ey,transmission_pars_fragment:ty,uv_pars_fragment:ny,uv_pars_vertex:iy,uv_vertex:sy,worldpos_vertex:ry,background_vert:ay,background_frag:oy,backgroundCube_vert:ly,backgroundCube_frag:cy,cube_vert:hy,cube_frag:uy,depth_vert:dy,depth_frag:fy,distanceRGBA_vert:py,distanceRGBA_frag:my,equirect_vert:gy,equirect_frag:vy,linedashed_vert:xy,linedashed_frag:yy,meshbasic_vert:_y,meshbasic_frag:by,meshlambert_vert:My,meshlambert_frag:wy,meshmatcap_vert:Sy,meshmatcap_frag:Ty,meshnormal_vert:Ey,meshnormal_frag:Ay,meshphong_vert:Ry,meshphong_frag:Cy,meshphysical_vert:Py,meshphysical_frag:Ly,meshtoon_vert:Iy,meshtoon_frag:Dy,points_vert:ky,points_frag:Uy,shadow_vert:Ny,shadow_frag:By,sprite_vert:Oy,sprite_frag:Fy},we={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},li={basic:{uniforms:bn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:bn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Se(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:bn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:bn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:bn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Se(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:bn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:bn([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:bn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:bn([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:bn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:bn([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:bn([we.common,we.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:bn([we.lights,we.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};li.physical={uniforms:bn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var _o={r:0,b:0,g:0};function zy(r,e,t,n,i,s,a){let o=new Se(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function v(m,p){let y=!1,g=p.isScene===!0?p.background:null;g&&g.isTexture&&(g=(p.backgroundBlurriness>0?t:e).get(g)),g===null?x(o,l):g&&g.isColor&&(x(g,1),y=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),g&&(g.isCubeTexture||g.mapping===xl)?(h===void 0&&(h=new Ae(new Pn(1,1,1),new ut({name:"BackgroundCubeMaterial",uniforms:or(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ft.getTransfer(g.colorSpace)!==Et,(u!==g||d!==g.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=g,d=g.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Ae(new gs(2,2),new ut({name:"BackgroundMaterial",uniforms:or(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ft.getTransfer(g.colorSpace)!==Et,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||d!==g.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=g,d=g.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(_o,jp(r)),n.buffers.color.setClear(_o.r,_o.g,_o.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:v}}function Hy(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null),c=l,h=!1;function u(I,W,q,ie,se){let Z=!1;if(a){let ne=x(ie,q,W);c!==ne&&(c=ne,f(c.object)),Z=p(I,ie,q,se),Z&&y(I,ie,q,se)}else{let ne=W.wireframe===!0;(c.geometry!==ie.id||c.program!==q.id||c.wireframe!==ne)&&(c.geometry=ie.id,c.program=q.id,c.wireframe=ne,Z=!0)}se!==null&&t.update(se,r.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,C(I,W,q,ie),se!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(se).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function v(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function x(I,W,q){let ie=q.wireframe===!0,se=o[I.id];se===void 0&&(se={},o[I.id]=se);let Z=se[W.id];Z===void 0&&(Z={},se[W.id]=Z);let ne=Z[ie];return ne===void 0&&(ne=m(d()),Z[ie]=ne),ne}function m(I){let W=[],q=[],ie=[];for(let se=0;se<i;se++)W[se]=0,q[se]=0,ie[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:q,attributeDivisors:ie,object:I,attributes:{},index:null}}function p(I,W,q,ie){let se=c.attributes,Z=W.attributes,ne=0,ae=q.getAttributes();for(let de in ae)if(ae[de].location>=0){let re=se[de],ye=Z[de];if(ye===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(ye=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(ye=I.instanceColor)),re===void 0||re.attribute!==ye||ye&&re.data!==ye.data)return!0;ne++}return c.attributesNum!==ne||c.index!==ie}function y(I,W,q,ie){let se={},Z=W.attributes,ne=0,ae=q.getAttributes();for(let de in ae)if(ae[de].location>=0){let re=Z[de];re===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(re=I.instanceColor));let ye={};ye.attribute=re,re&&re.data&&(ye.data=re.data),se[de]=ye,ne++}c.attributes=se,c.attributesNum=ne,c.index=ie}function g(){let I=c.newAttributes;for(let W=0,q=I.length;W<q;W++)I[W]=0}function _(I){E(I,0)}function E(I,W){let q=c.newAttributes,ie=c.enabledAttributes,se=c.attributeDivisors;q[I]=1,ie[I]===0&&(r.enableVertexAttribArray(I),ie[I]=1),se[I]!==W&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),se[I]=W)}function w(){let I=c.newAttributes,W=c.enabledAttributes;for(let q=0,ie=W.length;q<ie;q++)W[q]!==I[q]&&(r.disableVertexAttribArray(q),W[q]=0)}function T(I,W,q,ie,se,Z,ne){ne===!0?r.vertexAttribIPointer(I,W,q,se,Z):r.vertexAttribPointer(I,W,q,ie,se,Z)}function C(I,W,q,ie){if(n.isWebGL2===!1&&(I.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let se=ie.attributes,Z=q.getAttributes(),ne=W.defaultAttributeValues;for(let ae in Z){let de=Z[ae];if(de.location>=0){let K=se[ae];if(K===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){let re=K.normalized,ye=K.itemSize,ge=t.get(K);if(ge===void 0)continue;let Ee=ge.buffer,Ne=ge.type,Ve=ge.bytesPerElement,Be=n.isWebGL2===!0&&(Ne===r.INT||Ne===r.UNSIGNED_INT||K.gpuType===Up);if(K.isInterleavedBufferAttribute){let Qe=K.data,J=Qe.stride,Bt=K.offset;if(Qe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<de.locationSize;Fe++)E(de.location+Fe,Qe.meshPerAttribute);I.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let Fe=0;Fe<de.locationSize;Fe++)_(de.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let Fe=0;Fe<de.locationSize;Fe++)T(de.location+Fe,ye/de.locationSize,Ne,re,J*Ve,(Bt+ye/de.locationSize*Fe)*Ve,Be)}else{if(K.isInstancedBufferAttribute){for(let Qe=0;Qe<de.locationSize;Qe++)E(de.location+Qe,K.meshPerAttribute);I.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Qe=0;Qe<de.locationSize;Qe++)_(de.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,Ee);for(let Qe=0;Qe<de.locationSize;Qe++)T(de.location+Qe,ye/de.locationSize,Ne,re,ye*Ve,ye/de.locationSize*Qe*Ve,Be)}}else if(ne!==void 0){let re=ne[ae];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(de.location,re);break;case 3:r.vertexAttrib3fv(de.location,re);break;case 4:r.vertexAttrib4fv(de.location,re);break;default:r.vertexAttrib1fv(de.location,re)}}}}w()}function b(){B();for(let I in o){let W=o[I];for(let q in W){let ie=W[q];for(let se in ie)v(ie[se].object),delete ie[se];delete W[q]}delete o[I]}}function R(I){if(o[I.id]===void 0)return;let W=o[I.id];for(let q in W){let ie=W[q];for(let se in ie)v(ie[se].object),delete ie[se];delete W[q]}delete o[I.id]}function O(I){for(let W in o){let q=o[W];if(q[I.id]===void 0)continue;let ie=q[I.id];for(let se in ie)v(ie[se].object),delete ie[se];delete q[I.id]}}function B(){X(),h=!0,c!==l&&(c=l,f(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:X,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:O,initAttributes:g,enableAttribute:_,disableUnusedAttributes:w}}function Vy(r,e,t,n){let i=n.isWebGL2,s;function a(h){s=h}function o(h,u){r.drawArrays(s,h,u),t.update(u,s,1)}function l(h,u,d){if(d===0)return;let f,v;if(i)f=r,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](s,h,u,d),t.update(u,s,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<d;v++)this.render(h[v],u[v]);else{f.multiDrawArraysWEBGL(s,h,0,u,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x];t.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Gy(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,_=a||e.has("OES_texture_float"),E=g&&_,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:_,floatVertexTextures:E,maxSamples:w}}function Wy(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Mn,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let v=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||v===null||v.length===0||s&&!m)s?h(null):c();else{let y=s?0:n,g=y*4,_=p.clippingState||null;l.value=_,_=h(v,d,g,f);for(let E=0;E!==g;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,v){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,v!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let g=0,_=f;g!==x;++g,_+=4)a.copy(u[g]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Xy(r){let e=new WeakMap;function t(a,o){return o===fa?a.mapping=ir:o===nh&&(a.mapping=sr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===fa||o===nh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ch(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Xi=class extends qo{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ks=4,Ff=[.125,.215,.35,.446,.526,.582],us=20,zc=new Xi,zf=new Se,Hc=null,Vc=0,Gc=0,hs=(1+Math.sqrt(5))/2,Gs=1/hs,Hf=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,hs,Gs),new S(0,hs,-Gs),new S(Gs,0,hs),new S(-Gs,0,hs),new S(hs,Gs,0),new S(-hs,Gs,0)],lr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc,Vc,Gc),e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:ct,format:xn,colorSpace:It,depthBuffer:!1},i=Vf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vf(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qy(s)),this._blurMaterial=jy(s,e,t)}return i}_compileMaterial(e){let t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,zc)}_sceneToCubeUV(e,t,n,i){let o=new nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zf),h.toneMapping=Gi,h.autoClear=!1;let f=new Ut({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new Ae(new Pn,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(zf),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let g=this._cubeSize;bo(i,y*g,p>2?g:0,g,g),h.setRenderTarget(i),x&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ir||e.mapping===sr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gf());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;bo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,zc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Hf[(i-1)%Hf.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ae(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*us-1),x=s/v,m=isFinite(s)?1+Math.floor(h*x):us;m>us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);let p=[],y=0;for(let T=0;T<us;++T){let C=T/x,b=Math.exp(-C*C/2);p.push(b),T===0?y+=b:T<m&&(y+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-n;let _=this._sizeLods[i],E=3*_*(i>g-Ks?i-g+Ks:0),w=4*(this._cubeSize-_);bo(t,E,w,3*_,2*_),l.setRenderTarget(t),l.render(u,zc)}};function qy(r){let e=[],t=[],n=[],i=r,s=r-Ks+1+Ff.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Ks?l=Ff[a-r+Ks-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,v=6,x=3,m=2,p=1,y=new Float32Array(x*v*f),g=new Float32Array(m*v*f),_=new Float32Array(p*v*f);for(let w=0;w<f;w++){let T=w%3*2/3-1,C=w>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(b,x*v*w),g.set(d,m*v*w);let R=[w,w,w,w,w,w];_.set(R,p*v*w)}let E=new Dt;E.setAttribute("position",new Ht(y,x)),E.setAttribute("uv",new Ht(g,m)),E.setAttribute("faceIndex",new Ht(_,p)),e.push(E),i>Ks&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vf(r,e,t){let n=new yt(r,e,t);return n.texture.mapping=xl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function jy(r,e,t){let n=new Float32Array(us),i=new S(0,1,0);return new ut({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nu(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Gf(){return new ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Wf(){return new ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function nu(){return`

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
	`}function Yy(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===fa||l===nh,h=l===ir||l===sr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new lr(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new lr(r));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $y(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zy(r,e,t,n){let i={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let v in d.attributes)e.remove(d.attributes[v]);for(let v in d.morphAttributes){let x=d.morphAttributes[v];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let v in d)e.update(d[v],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let v in f){let x=f[v];for(let m=0,p=x.length;m<p;m++)e.update(x[m],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,v=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let g=0,_=y.length;g<_;g+=3){let E=y[g+0],w=y[g+1],T=y[g+2];d.push(E,w,w,T,T,E)}}else if(v!==void 0){let y=v.array;x=v.version;for(let g=0,_=y.length/3-1;g<_;g+=3){let E=g+0,w=g+1,T=g+2;d.push(E,w,w,T,T,E)}}else return;let m=new(Xp(d)?Xo:Wo)(d,1);m.version=x;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ky(r,e,t,n){let i=n.isWebGL2,s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,v){r.drawElements(s,v,o,f*l),t.update(v,s,1)}function u(f,v,x){if(x===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,v,o,f*l,x),t.update(v,s,x)}function d(f,v,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,v[p]);else{m.multiDrawElementsWEBGL(s,v,0,o,f,0,x);let p=0;for(let y=0;y<x;y++)p+=v[y];t.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Jy(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qy(r,e){return r[0]-e[0]}function e_(r,e){return Math.abs(e[1])-Math.abs(r[1])}function t_(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new Ct,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=f!==void 0?f.length:0,x=s.get(h);if(x===void 0||x.count!==v){let I=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],C=0;y===!0&&(C=1),g===!0&&(C=2),_===!0&&(C=3);let b=h.attributes.position.count*C,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let O=new Float32Array(b*R*4*v),B=new Go(O,b,R,v);B.type=fn,B.needsUpdate=!0;let X=C*4;for(let W=0;W<v;W++){let q=E[W],ie=w[W],se=T[W],Z=b*R*4*W;for(let ne=0;ne<q.count;ne++){let ae=ne*X;y===!0&&(a.fromBufferAttribute(q,ne),O[Z+ae+0]=a.x,O[Z+ae+1]=a.y,O[Z+ae+2]=a.z,O[Z+ae+3]=0),g===!0&&(a.fromBufferAttribute(ie,ne),O[Z+ae+4]=a.x,O[Z+ae+5]=a.y,O[Z+ae+6]=a.z,O[Z+ae+7]=0),_===!0&&(a.fromBufferAttribute(se,ne),O[Z+ae+8]=a.x,O[Z+ae+9]=a.y,O[Z+ae+10]=a.z,O[Z+ae+11]=se.itemSize===4?a.w:1)}}x={count:v,texture:B,size:new te(b,R)},s.set(h,x),h.addEventListener("dispose",I)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,v=n[h.id];if(v===void 0||v.length!==f){v=[];for(let g=0;g<f;g++)v[g]=[g,0];n[h.id]=v}for(let g=0;g<f;g++){let _=v[g];_[0]=g,_[1]=d[g]}v.sort(e_);for(let g=0;g<8;g++)g<f&&v[g][1]?(o[g][0]=v[g][0],o[g][1]=v[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(Qy);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let g=0;g<8;g++){let _=o[g],E=_[0],w=_[1];E!==Number.MAX_SAFE_INTEGER&&w?(x&&h.getAttribute("morphTarget"+g)!==x[E]&&h.setAttribute("morphTarget"+g,x[E]),m&&h.getAttribute("morphNormal"+g)!==m[E]&&h.setAttribute("morphNormal"+g,m[E]),i[g]=w,p+=w):(x&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),m&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),i[g]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function n_(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var cr=class extends pn{constructor(e,t,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:ds,h!==ds&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ds&&(n=Hi),n===void 0&&h===Wi&&(n=Ei),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$p=new pn,Zp=new cr(1,1);Zp.compareFunction=Wp;var Kp=new Go,Jp=new oh,Qp=new jo,Xf=[],qf=[],jf=new Float32Array(16),Yf=new Float32Array(9),$f=new Float32Array(4);function Sr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Xf[i];if(s===void 0&&(s=new Float32Array(i),Xf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function rn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function bl(r,e){let t=qf[e];t===void 0&&(t=new Int32Array(e),qf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function i_(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function s_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}function r_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}function a_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}function o_(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;$f.set(n),r.uniformMatrix2fv(this.addr,!1,$f),rn(t,n)}}function l_(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Yf.set(n),r.uniformMatrix3fv(this.addr,!1,Yf),rn(t,n)}}function c_(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;jf.set(n),r.uniformMatrix4fv(this.addr,!1,jf),rn(t,n)}}function h_(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function u_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}function d_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}function f_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}function p_(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function m_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}function g_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}function v_(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}function x_(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?Zp:$p;t.setTexture2D(e||s,i)}function y_(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jp,i)}function __(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qp,i)}function b_(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kp,i)}function M_(r){switch(r){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return a_;case 35674:return o_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return b_}}function w_(r,e){r.uniform1fv(this.addr,e)}function S_(r,e){let t=Sr(e,this.size,2);r.uniform2fv(this.addr,t)}function T_(r,e){let t=Sr(e,this.size,3);r.uniform3fv(this.addr,t)}function E_(r,e){let t=Sr(e,this.size,4);r.uniform4fv(this.addr,t)}function A_(r,e){let t=Sr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function R_(r,e){let t=Sr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function C_(r,e){let t=Sr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function P_(r,e){r.uniform1iv(this.addr,e)}function L_(r,e){r.uniform2iv(this.addr,e)}function I_(r,e){r.uniform3iv(this.addr,e)}function D_(r,e){r.uniform4iv(this.addr,e)}function k_(r,e){r.uniform1uiv(this.addr,e)}function U_(r,e){r.uniform2uiv(this.addr,e)}function N_(r,e){r.uniform3uiv(this.addr,e)}function B_(r,e){r.uniform4uiv(this.addr,e)}function O_(r,e,t){let n=this.cache,i=e.length,s=bl(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||$p,s[a])}function F_(r,e,t){let n=this.cache,i=e.length,s=bl(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Jp,s[a])}function z_(r,e,t){let n=this.cache,i=e.length,s=bl(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Qp,s[a])}function H_(r,e,t){let n=this.cache,i=e.length,s=bl(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Kp,s[a])}function V_(r){switch(r){case 5126:return w_;case 35664:return S_;case 35665:return T_;case 35666:return E_;case 35674:return A_;case 35675:return R_;case 35676:return C_;case 5124:case 35670:return P_;case 35667:case 35671:return L_;case 35668:case 35672:return I_;case 35669:case 35673:return D_;case 5125:return k_;case 36294:return U_;case 36295:return N_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return H_}}var hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M_(t.type)}},uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V_(t.type)}},dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function Zf(r,e){r.seq.push(e),r.map[e.id]=e}function G_(r,e,t){let n=r.name,i=n.length;for(Wc.lastIndex=0;;){let s=Wc.exec(n),a=Wc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Zf(t,c===void 0?new hh(o,r,e):new uh(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new dh(o),Zf(t,u)),t=u}}}var tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);G_(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Kf(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var W_=37297,X_=0;function q_(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function j_(r){let e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(r),n;switch(e===t?n="":e===Oo&&t===Bo?n="LinearDisplayP3ToLinearSRGB":e===Bo&&t===Oo&&(n="LinearSRGBToLinearDisplayP3"),r){case It:case _l:return[n,"LinearTransferOETF"];case xt:case eu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Jf(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+q_(r.getShaderSource(e),a)}else return i}function Y_(r,e){let t=j_(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $_(r,e){let t;switch(e){case Xh:t="Linear";break;case qh:t="Reinhard";break;case jh:t="OptimizedCineon";break;case Aa:t="ACESFilmic";break;case Yh:t="AgX";break;case t0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Z_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function K_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Js).join(`
`)}function J_(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q_(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Js(r){return r!==""}function Qf(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ep(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(r){return r.replace(eb,nb)}var tb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nb(r,e){let t=nt[e];if(t===void 0){let n=tb.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fh(t)}var ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tp(r){return r.replace(ib,sb)}function sb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function np(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ip?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function ab(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ir:case sr:e="ENVMAP_TYPE_CUBE";break;case xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ob(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function lb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Dp:e="ENVMAP_BLENDING_MULTIPLY";break;case Qg:e="ENVMAP_BLENDING_MIX";break;case e0:e="ENVMAP_BLENDING_ADD";break}return e}function cb(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hb(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=rb(t),c=ab(t),h=ob(t),u=lb(t),d=cb(t),f=t.isWebGL2?"":Z_(t),v=K_(t),x=J_(s),m=i.createProgram(),p,y,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Js).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Js).join(`
`),y.length>0&&(y+=`
`)):(p=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),y=[f,np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?nt.tonemapping_pars_fragment:"",t.toneMapping!==Gi?$_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Y_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),a=fh(a),a=Qf(a,t),a=ep(a,t),o=fh(o),o=Qf(o,t),o=ep(o,t),a=tp(a),o=tp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let _=g+p+a,E=g+y+o,w=Kf(i,i.VERTEX_SHADER,_),T=Kf(i,i.FRAGMENT_SHADER,E);i.attachShader(m,w),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function C(B){if(r.debug.checkShaderErrors){let X=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(w).trim(),W=i.getShaderInfoLog(T).trim(),q=!0,ie=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,w,T);else{let se=Jf(i,w,"vertex"),Z=Jf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+se+`
`+Z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(I===""||W==="")&&(ie=!1);ie&&(B.diagnostics={runnable:q,programLog:X,vertexShader:{log:I,prefix:p},fragmentShader:{log:W,prefix:y}})}i.deleteShader(w),i.deleteShader(T),b=new tr(i,m),R=Q_(i,m)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(m,W_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}var ub=0,ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mh(e),t.set(e,n)),n}},mh=class{constructor(e){this.id=ub++,this.code=e,this.usedTimes=0}};function db(r,e,t,n,i,s,a){let o=new ga,l=new ph,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function m(b,R,O,B,X){let I=B.fog,W=X.geometry,q=b.isMeshStandardMaterial?B.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),se=ie&&ie.mapping===xl?ie.image.height:null,Z=v[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ne=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=ne!==void 0?ne.length:0,de=0;W.morphAttributes.position!==void 0&&(de=1),W.morphAttributes.normal!==void 0&&(de=2),W.morphAttributes.color!==void 0&&(de=3);let K,re,ye,ge;if(Z){let Wt=li[Z];K=Wt.vertexShader,re=Wt.fragmentShader}else K=b.vertexShader,re=b.fragmentShader,l.update(b),ye=l.getVertexShaderID(b),ge=l.getFragmentShaderID(b);let Ee=r.getRenderTarget(),Ne=X.isInstancedMesh===!0,Ve=X.isBatchedMesh===!0,Be=!!b.map,Qe=!!b.matcap,J=!!ie,Bt=!!b.aoMap,Fe=!!b.lightMap,Xe=!!b.bumpMap,De=!!b.normalMap,gt=!!b.displacementMap,$e=!!b.emissiveMap,D=!!b.metalnessMap,P=!!b.roughnessMap,$=b.anisotropy>0,fe=b.clearcoat>0,he=b.iridescence>0,pe=b.sheen>0,ke=b.transmission>0,be=$&&!!b.anisotropyMap,Le=fe&&!!b.clearcoatMap,Oe=fe&&!!b.clearcoatNormalMap,qe=fe&&!!b.clearcoatRoughnessMap,ce=he&&!!b.iridescenceMap,it=he&&!!b.iridescenceThicknessMap,Ke=pe&&!!b.sheenColorMap,We=pe&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,Re=!!b.specularColorMap,F=!!b.specularIntensityMap,oe=ke&&!!b.transmissionMap,Me=ke&&!!b.thicknessMap,Ce=!!b.gradientMap,j=!!b.alphaMap,G=b.alphaTest>0,ve=!!b.alphaHash,Te=!!b.extensions,Ye=!!W.attributes.uv1,Ge=!!W.attributes.uv2,st=!!W.attributes.uv3,rt=Gi;return b.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(rt=r.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:re,defines:b.defines,customVertexShaderID:ye,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ve,instancing:Ne,instancingColor:Ne&&X.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:It,map:Be,matcap:Qe,envMap:J,envMapMode:J&&ie.mapping,envMapCubeUVHeight:se,aoMap:Bt,lightMap:Fe,bumpMap:Xe,normalMap:De,displacementMap:d&&gt,emissiveMap:$e,normalMapObjectSpace:De&&b.normalMapType===m0,normalMapTangentSpace:De&&b.normalMapType===Qh,metalnessMap:D,roughnessMap:P,anisotropy:$,anisotropyMap:be,clearcoat:fe,clearcoatMap:Le,clearcoatNormalMap:Oe,clearcoatRoughnessMap:qe,iridescence:he,iridescenceMap:ce,iridescenceThicknessMap:it,sheen:pe,sheenColorMap:Ke,sheenRoughnessMap:We,specularMap:Pe,specularColorMap:Re,specularIntensityMap:F,transmission:ke,transmissionMap:oe,thicknessMap:Me,gradientMap:Ce,opaque:b.transparent===!1&&b.blending===Qs,alphaMap:j,alphaTest:G,alphaHash:ve,combine:b.combine,mapUv:Be&&x(b.map.channel),aoMapUv:Bt&&x(b.aoMap.channel),lightMapUv:Fe&&x(b.lightMap.channel),bumpMapUv:Xe&&x(b.bumpMap.channel),normalMapUv:De&&x(b.normalMap.channel),displacementMapUv:gt&&x(b.displacementMap.channel),emissiveMapUv:$e&&x(b.emissiveMap.channel),metalnessMapUv:D&&x(b.metalnessMap.channel),roughnessMapUv:P&&x(b.roughnessMap.channel),anisotropyMapUv:be&&x(b.anisotropyMap.channel),clearcoatMapUv:Le&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:We&&x(b.sheenRoughnessMap.channel),specularMapUv:Pe&&x(b.specularMap.channel),specularColorMapUv:Re&&x(b.specularColorMap.channel),specularIntensityMapUv:F&&x(b.specularIntensityMap.channel),transmissionMapUv:oe&&x(b.transmissionMap.channel),thicknessMapUv:Me&&x(b.thicknessMap.channel),alphaMapUv:j&&x(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(De||$),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Ye,vertexUv2s:Ge,vertexUv3s:st,pointsUvs:X.isPoints===!0&&!!W.attributes.uv&&(Be||j),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:de,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Be&&b.map.isVideoTexture===!0&&ft.getTransfer(b.map.colorSpace)===Et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Zt,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Te&&b.extensions.derivatives===!0,extensionFragDepth:Te&&b.extensions.fragDepth===!0,extensionDrawBuffers:Te&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Te&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(let O in b.defines)R.push(O),R.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(y(R,b),g(R,b),R.push(r.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function y(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function g(b,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),b.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function _(b){let R=v[b.type],O;if(R){let B=li[R];O=ln.clone(B.uniforms)}else O=b.uniforms;return O}function E(b,R){let O;for(let B=0,X=c.length;B<X;B++){let I=c[B];if(I.cacheKey===R){O=I,++O.usedTimes;break}}return O===void 0&&(O=new hb(r,R,b,s),c.push(O)),O}function w(b){if(--b.usedTimes===0){let R=c.indexOf(b);c[R]=c[c.length-1],c.pop(),b.destroy()}}function T(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:C}}function fb(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function pb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ip(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sp(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,v,x,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:v,renderOrder:u.renderOrder,z:x,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,v,x,m){let p=a(u,d,f,v,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,v,x,m){let p=a(u,d,f,v,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||pb),n.length>1&&n.sort(d||ip),i.length>1&&i.sort(d||ip)}function h(){for(let u=e,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function mb(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new sp,r.set(n,[a])):i>=s.length?(a=new sp,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function gb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Se};break;case"SpotLight":t={position:new S,direction:new S,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new S,halfWidth:new S,halfHeight:new S};break}return r[e.id]=t,t}}}function vb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var xb=0;function yb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _b(r,e){let t=new gb,n=vb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new S);let s=new S,a=new Ue,o=new Ue;function l(h,u){let d=0,f=0,v=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let x=0,m=0,p=0,y=0,g=0,_=0,E=0,w=0,T=0,C=0,b=0;h.sort(yb);let R=u===!0?Math.PI:1;for(let B=0,X=h.length;B<X;B++){let I=h[B],W=I.color,q=I.intensity,ie=I.distance,se=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=W.r*q*R,f+=W.g*q*R,v+=W.b*q*R;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],q);b++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*R),I.castShadow){let ne=I.shadow,ae=n.get(I);ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,i.directionalShadow[x]=ae,i.directionalShadowMap[x]=se,i.directionalShadowMatrix[x]=I.shadow.matrix,_++}i.directional[x]=Z,x++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(W).multiplyScalar(q*R),Z.distance=ie,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[p]=Z;let ne=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,ne.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[p]=ne.matrix,I.castShadow){let ae=n.get(I);ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,i.spotShadow[p]=ae,i.spotShadowMap[p]=se,w++}p++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(W).multiplyScalar(q),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=Z,y++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*R),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let ne=I.shadow,ae=n.get(I);ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,ae.shadowCameraNear=ne.camera.near,ae.shadowCameraFar=ne.camera.far,i.pointShadow[m]=ae,i.pointShadowMap[m]=se,i.pointShadowMatrix[m]=I.shadow.matrix,E++}i.point[m]=Z,m++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(q*R),Z.groundColor.copy(I.groundColor).multiplyScalar(q*R),i.hemi[g]=Z,g++}}y>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=v;let O=i.hash;(O.directionalLength!==x||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==y||O.hemiLength!==g||O.numDirectionalShadows!==_||O.numPointShadows!==E||O.numSpotShadows!==w||O.numSpotMaps!==T||O.numLightProbes!==b)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,O.directionalLength=x,O.pointLength=m,O.spotLength=p,O.rectAreaLength=y,O.hemiLength=g,O.numDirectionalShadows=_,O.numPointShadows=E,O.numSpotShadows=w,O.numSpotMaps=T,O.numLightProbes=b,i.version=xb++)}function c(h,u){let d=0,f=0,v=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,g=h.length;y<g;y++){let _=h[y];if(_.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(_.isSpotLight){let E=i.spot[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),v++}else if(_.isRectAreaLight){let E=i.rectArea[x];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(_.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function rp(r,e){let t=new _b(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function bb(r,e){let t=new WeakMap;function n(s,a=0){let o=t.get(s),l;return o===void 0?(l=new rp(r,e),t.set(s,[l])):a>=o.length?(l=new rp(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var vs=class extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=p0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gh=class extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
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
}`;function Sb(r,e,t){let n=new va,i=new te,s=new te,a=new Ct,o=new vs({depthPacking:Ca}),l=new gh,c={},h=t.maxTextureSize,u={[On]:Qt,[Qt]:On,[Zt]:Zt},d=new ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Mb,fragmentShader:wb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let v=new Dt;v.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ae(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ip;let p=this.type;this.render=function(w,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=r.getRenderTarget(),R=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),B=r.state;B.setBlending(zt),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=p!==ti&&this.type===ti,I=p===ti&&this.type!==ti;for(let W=0,q=w.length;W<q;W++){let ie=w[W],se=ie.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;i.copy(se.mapSize);let Z=se.getFrameExtents();if(i.multiply(Z),s.copy(se.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,se.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,se.mapSize.y=s.y)),se.map===null||X===!0||I===!0){let ae=this.type!==ti?{minFilter:kt,magFilter:kt}:{};se.map!==null&&se.map.dispose(),se.map=new yt(i.x,i.y,ae),se.map.texture.name=ie.name+".shadowMap",se.camera.updateProjectionMatrix()}r.setRenderTarget(se.map),r.clear();let ne=se.getViewportCount();for(let ae=0;ae<ne;ae++){let de=se.getViewport(ae);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),B.viewport(a),se.updateMatrices(ie,ae),n=se.getFrustum(),_(T,C,se.camera,ie,this.type)}se.isPointLightShadow!==!0&&this.type===ti&&y(se,C),se.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(b,R,O)};function y(w,T){let C=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yt(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,C,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,C,f,x,null)}function g(w,T,C,b){let R=null,O=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)R=O;else if(R=C.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let B=R.uuid,X=T.uuid,I=c[B];I===void 0&&(I={},c[B]=I);let W=I[X];W===void 0&&(W=R.clone(),I[X]=W,T.addEventListener("dispose",E)),R=W}if(R.visible=T.visible,R.wireframe=T.wireframe,b===ti?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:u[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=r.properties.get(R);B.light=C}return R}function _(w,T,C,b,R){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===ti)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let X=e.update(w),I=w.material;if(Array.isArray(I)){let W=X.groups;for(let q=0,ie=W.length;q<ie;q++){let se=W[q],Z=I[se.materialIndex];if(Z&&Z.visible){let ne=g(w,Z,b,R);w.onBeforeShadow(r,w,T,C,X,ne,se),r.renderBufferDirect(C,null,X,ne,w,se),w.onAfterShadow(r,w,T,C,X,ne,se)}}}else if(I.visible){let W=g(w,I,b,R);w.onBeforeShadow(r,w,T,C,X,W,null),r.renderBufferDirect(C,null,X,W,w,null),w.onAfterShadow(r,w,T,C,X,W,null)}}let B=w.children;for(let X=0,I=B.length;X<I;X++)_(B[X],T,C,b,R)}function E(w){w.target.removeEventListener("dispose",E);for(let C in c){let b=c[C],R=w.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function Tb(r,e,t){let n=t.isWebGL2;function i(){let G=!1,ve=new Ct,Te=null,Ye=new Ct(0,0,0,0);return{setMask:function(Ge){Te!==Ge&&!G&&(r.colorMask(Ge,Ge,Ge,Ge),Te=Ge)},setLocked:function(Ge){G=Ge},setClear:function(Ge,st,rt,Ot,Wt){Wt===!0&&(Ge*=Ot,st*=Ot,rt*=Ot),ve.set(Ge,st,rt,Ot),Ye.equals(ve)===!1&&(r.clearColor(Ge,st,rt,Ot),Ye.copy(ve))},reset:function(){G=!1,Te=null,Ye.set(-1,0,0,0)}}}function s(){let G=!1,ve=null,Te=null,Ye=null;return{setTest:function(Ge){Ge?Ve(r.DEPTH_TEST):Be(r.DEPTH_TEST)},setMask:function(Ge){ve!==Ge&&!G&&(r.depthMask(Ge),ve=Ge)},setFunc:function(Ge){if(Te!==Ge){switch(Ge){case qg:r.depthFunc(r.NEVER);break;case jg:r.depthFunc(r.ALWAYS);break;case Yg:r.depthFunc(r.LESS);break;case Do:r.depthFunc(r.LEQUAL);break;case $g:r.depthFunc(r.EQUAL);break;case Zg:r.depthFunc(r.GEQUAL);break;case Kg:r.depthFunc(r.GREATER);break;case Jg:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Te=Ge}},setLocked:function(Ge){G=Ge},setClear:function(Ge){Ye!==Ge&&(r.clearDepth(Ge),Ye=Ge)},reset:function(){G=!1,ve=null,Te=null,Ye=null}}}function a(){let G=!1,ve=null,Te=null,Ye=null,Ge=null,st=null,rt=null,Ot=null,Wt=null;return{setTest:function(ht){G||(ht?Ve(r.STENCIL_TEST):Be(r.STENCIL_TEST))},setMask:function(ht){ve!==ht&&!G&&(r.stencilMask(ht),ve=ht)},setFunc:function(ht,jt,Hn){(Te!==ht||Ye!==jt||Ge!==Hn)&&(r.stencilFunc(ht,jt,Hn),Te=ht,Ye=jt,Ge=Hn)},setOp:function(ht,jt,Hn){(st!==ht||rt!==jt||Ot!==Hn)&&(r.stencilOp(ht,jt,Hn),st=ht,rt=jt,Ot=Hn)},setLocked:function(ht){G=ht},setClear:function(ht){Wt!==ht&&(r.clearStencil(ht),Wt=ht)},reset:function(){G=!1,ve=null,Te=null,Ye=null,Ge=null,st=null,rt=null,Ot=null,Wt=null}}}let o=new i,l=new s,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},v=new WeakMap,x=[],m=null,p=!1,y=null,g=null,_=null,E=null,w=null,T=null,C=null,b=new Se(0,0,0),R=0,O=!1,B=null,X=null,I=null,W=null,q=null,ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,Z=0,ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ne)[1]),se=Z>=1):ne.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),se=Z>=2);let ae=null,de={},K=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),ye=new Ct().fromArray(K),ge=new Ct().fromArray(re);function Ee(G,ve,Te,Ye){let Ge=new Uint8Array(4),st=r.createTexture();r.bindTexture(G,st),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<Te;rt++)n&&(G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY)?r.texImage3D(ve,0,r.RGBA,1,1,Ye,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(ve+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return st}let Ne={};Ne[r.TEXTURE_2D]=Ee(r.TEXTURE_2D,r.TEXTURE_2D,1),Ne[r.TEXTURE_CUBE_MAP]=Ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ne[r.TEXTURE_2D_ARRAY]=Ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ne[r.TEXTURE_3D]=Ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ve(r.DEPTH_TEST),l.setFunc(Do),$e(!1),D(Vd),Ve(r.CULL_FACE),De(zt);function Ve(G){d[G]!==!0&&(r.enable(G),d[G]=!0)}function Be(G){d[G]!==!1&&(r.disable(G),d[G]=!1)}function Qe(G,ve){return f[G]!==ve?(r.bindFramebuffer(G,ve),f[G]=ve,n&&(G===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ve),G===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ve)),!0):!1}function J(G,ve){let Te=x,Ye=!1;if(G)if(Te=v.get(ve),Te===void 0&&(Te=[],v.set(ve,Te)),G.isWebGLMultipleRenderTargets){let Ge=G.texture;if(Te.length!==Ge.length||Te[0]!==r.COLOR_ATTACHMENT0){for(let st=0,rt=Ge.length;st<rt;st++)Te[st]=r.COLOR_ATTACHMENT0+st;Te.length=Ge.length,Ye=!0}}else Te[0]!==r.COLOR_ATTACHMENT0&&(Te[0]=r.COLOR_ATTACHMENT0,Ye=!0);else Te[0]!==r.BACK&&(Te[0]=r.BACK,Ye=!0);Ye&&(t.isWebGL2?r.drawBuffers(Te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Te))}function Bt(G){return m!==G?(r.useProgram(G),m=G,!0):!1}let Fe={[Gn]:r.FUNC_ADD,[kg]:r.FUNC_SUBTRACT,[Ug]:r.FUNC_REVERSE_SUBTRACT};if(n)Fe[Xd]=r.MIN,Fe[qd]=r.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&(Fe[Xd]=G.MIN_EXT,Fe[qd]=G.MAX_EXT)}let Xe={[wr]:r.ZERO,[Ng]:r.ONE,[Bg]:r.SRC_COLOR,[eh]:r.SRC_ALPHA,[Hg]:r.SRC_ALPHA_SATURATE,[vl]:r.DST_COLOR,[gl]:r.DST_ALPHA,[Og]:r.ONE_MINUS_SRC_COLOR,[th]:r.ONE_MINUS_SRC_ALPHA,[zg]:r.ONE_MINUS_DST_COLOR,[Fg]:r.ONE_MINUS_DST_ALPHA,[Vg]:r.CONSTANT_COLOR,[Gg]:r.ONE_MINUS_CONSTANT_COLOR,[Wg]:r.CONSTANT_ALPHA,[Xg]:r.ONE_MINUS_CONSTANT_ALPHA};function De(G,ve,Te,Ye,Ge,st,rt,Ot,Wt,ht){if(G===zt){p===!0&&(Be(r.BLEND),p=!1);return}if(p===!1&&(Ve(r.BLEND),p=!0),G!==Wh){if(G!==y||ht!==O){if((g!==Gn||w!==Gn)&&(r.blendEquation(r.FUNC_ADD),g=Gn,w=Gn),ht)switch(G){case Qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nr:r.blendFunc(r.ONE,r.ONE);break;case Gd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Gd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,E=null,T=null,C=null,b.set(0,0,0),R=0,y=G,O=ht}return}Ge=Ge||ve,st=st||Te,rt=rt||Ye,(ve!==g||Ge!==w)&&(r.blendEquationSeparate(Fe[ve],Fe[Ge]),g=ve,w=Ge),(Te!==_||Ye!==E||st!==T||rt!==C)&&(r.blendFuncSeparate(Xe[Te],Xe[Ye],Xe[st],Xe[rt]),_=Te,E=Ye,T=st,C=rt),(Ot.equals(b)===!1||Wt!==R)&&(r.blendColor(Ot.r,Ot.g,Ot.b,Wt),b.copy(Ot),R=Wt),y=G,O=!1}function gt(G,ve){G.side===Zt?Be(r.CULL_FACE):Ve(r.CULL_FACE);let Te=G.side===Qt;ve&&(Te=!Te),$e(Te),G.blending===Qs&&G.transparent===!1?De(zt):De(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),o.setMask(G.colorWrite);let Ye=G.stencilWrite;c.setTest(Ye),Ye&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ve(r.SAMPLE_ALPHA_TO_COVERAGE):Be(r.SAMPLE_ALPHA_TO_COVERAGE)}function $e(G){B!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),B=G)}function D(G){G!==Ig?(Ve(r.CULL_FACE),G!==X&&(G===Vd?r.cullFace(r.BACK):G===Dg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Be(r.CULL_FACE),X=G}function P(G){G!==I&&(se&&r.lineWidth(G),I=G)}function $(G,ve,Te){G?(Ve(r.POLYGON_OFFSET_FILL),(W!==ve||q!==Te)&&(r.polygonOffset(ve,Te),W=ve,q=Te)):Be(r.POLYGON_OFFSET_FILL)}function fe(G){G?Ve(r.SCISSOR_TEST):Be(r.SCISSOR_TEST)}function he(G){G===void 0&&(G=r.TEXTURE0+ie-1),ae!==G&&(r.activeTexture(G),ae=G)}function pe(G,ve,Te){Te===void 0&&(ae===null?Te=r.TEXTURE0+ie-1:Te=ae);let Ye=de[Te];Ye===void 0&&(Ye={type:void 0,texture:void 0},de[Te]=Ye),(Ye.type!==G||Ye.texture!==ve)&&(ae!==Te&&(r.activeTexture(Te),ae=Te),r.bindTexture(G,ve||Ne[G]),Ye.type=G,Ye.texture=ve)}function ke(){let G=de[ae];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function be(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function F(G){ye.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),ye.copy(G))}function oe(G){ge.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),ge.copy(G))}function Me(G,ve){let Te=u.get(ve);Te===void 0&&(Te=new WeakMap,u.set(ve,Te));let Ye=Te.get(G);Ye===void 0&&(Ye=r.getUniformBlockIndex(ve,G.name),Te.set(G,Ye))}function Ce(G,ve){let Ye=u.get(ve).get(G);h.get(ve)!==Ye&&(r.uniformBlockBinding(ve,Ye,G.__bindingPointIndex),h.set(ve,Ye))}function j(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ae=null,de={},f={},v=new WeakMap,x=[],m=null,p=!1,y=null,g=null,_=null,E=null,w=null,T=null,C=null,b=new Se(0,0,0),R=0,O=!1,B=null,X=null,I=null,W=null,q=null,ye.set(0,0,r.canvas.width,r.canvas.height),ge.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ve,disable:Be,bindFramebuffer:Qe,drawBuffers:J,useProgram:Bt,setBlending:De,setMaterial:gt,setFlipSided:$e,setCullFace:D,setLineWidth:P,setPolygonOffset:$,setScissorTest:fe,activeTexture:he,bindTexture:pe,unbindTexture:ke,compressedTexImage2D:be,compressedTexImage3D:Le,texImage2D:Pe,texImage3D:Re,updateUBOMapping:Me,uniformBlockBinding:Ce,texStorage2D:Ke,texStorage3D:We,texSubImage2D:Oe,texSubImage3D:qe,compressedTexSubImage2D:ce,compressedTexSubImage3D:it,scissor:F,viewport:oe,reset:j}}function Eb(r,e,t,n,i,s,a){let o=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(D,P){return f?new OffscreenCanvas(D,P):ma("canvas")}function x(D,P,$,fe){let he=1;if((D.width>fe||D.height>fe)&&(he=fe/Math.max(D.width,D.height)),he<1||P===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){let pe=P?zo:Math.floor,ke=pe(he*D.width),be=pe(he*D.height);u===void 0&&(u=v(ke,be));let Le=$?v(ke,be):u;return Le.width=ke,Le.height=be,Le.getContext("2d").drawImage(D,0,0,ke,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+ke+"x"+be+")."),Le}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function m(D){return rh(D.width)&&rh(D.height)}function p(D){return o?!1:D.wrapS!==wn||D.wrapT!==wn||D.minFilter!==kt&&D.minFilter!==Rt}function y(D,P){return D.generateMipmaps&&P&&D.minFilter!==kt&&D.minFilter!==Rt}function g(D){r.generateMipmap(D)}function _(D,P,$,fe,he=!1){if(o===!1)return P;if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=P;if(P===r.RED&&($===r.FLOAT&&(pe=r.R32F),$===r.HALF_FLOAT&&(pe=r.R16F),$===r.UNSIGNED_BYTE&&(pe=r.R8)),P===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(pe=r.R8UI),$===r.UNSIGNED_SHORT&&(pe=r.R16UI),$===r.UNSIGNED_INT&&(pe=r.R32UI),$===r.BYTE&&(pe=r.R8I),$===r.SHORT&&(pe=r.R16I),$===r.INT&&(pe=r.R32I)),P===r.RG&&($===r.FLOAT&&(pe=r.RG32F),$===r.HALF_FLOAT&&(pe=r.RG16F),$===r.UNSIGNED_BYTE&&(pe=r.RG8)),P===r.RGBA){let ke=he?No:ft.getTransfer(fe);$===r.FLOAT&&(pe=r.RGBA32F),$===r.HALF_FLOAT&&(pe=r.RGBA16F),$===r.UNSIGNED_BYTE&&(pe=ke===Et?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function E(D,P,$){return y(D,$)===!0||D.isFramebufferTexture&&D.minFilter!==kt&&D.minFilter!==Rt?Math.log2(Math.max(P.width,P.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?P.mipmaps.length:1}function w(D){return D===kt||D===ko||D===aa?r.NEAREST:r.LINEAR}function T(D){let P=D.target;P.removeEventListener("dispose",T),b(P),P.isVideoTexture&&h.delete(P)}function C(D){let P=D.target;P.removeEventListener("dispose",C),O(P)}function b(D){let P=n.get(D);if(P.__webglInit===void 0)return;let $=D.source,fe=d.get($);if(fe){let he=fe[P.__cacheKey];he.usedTimes--,he.usedTimes===0&&R(D),Object.keys(fe).length===0&&d.delete($)}n.remove(D)}function R(D){let P=n.get(D);r.deleteTexture(P.__webglTexture);let $=D.source,fe=d.get($);delete fe[P.__cacheKey],a.memory.textures--}function O(D){let P=D.texture,$=n.get(D),fe=n.get(P);if(fe.__webglTexture!==void 0&&(r.deleteTexture(fe.__webglTexture),a.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray($.__webglFramebuffer[he]))for(let pe=0;pe<$.__webglFramebuffer[he].length;pe++)r.deleteFramebuffer($.__webglFramebuffer[he][pe]);else r.deleteFramebuffer($.__webglFramebuffer[he]);$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer[he])}else{if(Array.isArray($.__webglFramebuffer))for(let he=0;he<$.__webglFramebuffer.length;he++)r.deleteFramebuffer($.__webglFramebuffer[he]);else r.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&r.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let he=0;he<$.__webglColorRenderbuffer.length;he++)$.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer($.__webglColorRenderbuffer[he]);$.__webglDepthRenderbuffer&&r.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let he=0,pe=P.length;he<pe;he++){let ke=n.get(P[he]);ke.__webglTexture&&(r.deleteTexture(ke.__webglTexture),a.memory.textures--),n.remove(P[he])}n.remove(P),n.remove(D)}let B=0;function X(){B=0}function I(){let D=B;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),B+=1,D}function W(D){let P=[];return P.push(D.wrapS),P.push(D.wrapT),P.push(D.wrapR||0),P.push(D.magFilter),P.push(D.minFilter),P.push(D.anisotropy),P.push(D.internalFormat),P.push(D.format),P.push(D.type),P.push(D.generateMipmaps),P.push(D.premultiplyAlpha),P.push(D.flipY),P.push(D.unpackAlignment),P.push(D.colorSpace),P.join()}function q(D,P){let $=n.get(D);if(D.isVideoTexture&&gt(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){let fe=D.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye($,D,P);return}}t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+P)}function ie(D,P){let $=n.get(D);if(D.version>0&&$.__version!==D.version){ye($,D,P);return}t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+P)}function se(D,P){let $=n.get(D);if(D.version>0&&$.__version!==D.version){ye($,D,P);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+P)}function Z(D,P){let $=n.get(D);if(D.version>0&&$.__version!==D.version){ge($,D,P);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+P)}let ne={[Fn]:r.REPEAT,[wn]:r.CLAMP_TO_EDGE,[pa]:r.MIRRORED_REPEAT},ae={[kt]:r.NEAREST,[ko]:r.NEAREST_MIPMAP_NEAREST,[aa]:r.NEAREST_MIPMAP_LINEAR,[Rt]:r.LINEAR,[$h]:r.LINEAR_MIPMAP_NEAREST,[Ai]:r.LINEAR_MIPMAP_LINEAR},de={[g0]:r.NEVER,[M0]:r.ALWAYS,[v0]:r.LESS,[Wp]:r.LEQUAL,[x0]:r.EQUAL,[b0]:r.GEQUAL,[y0]:r.GREATER,[_0]:r.NOTEQUAL};function K(D,P,$){if($?(r.texParameteri(D,r.TEXTURE_WRAP_S,ne[P.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ne[P.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ne[P.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ae[P.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ae[P.minFilter])):(r.texParameteri(D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(P.wrapS!==wn||P.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(D,r.TEXTURE_MAG_FILTER,w(P.magFilter)),r.texParameteri(D,r.TEXTURE_MIN_FILTER,w(P.minFilter)),P.minFilter!==kt&&P.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,de[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let fe=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===kt||P.minFilter!==aa&&P.minFilter!==Ai||P.type===fn&&e.has("OES_texture_float_linear")===!1||o===!1&&P.type===ct&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(r.texParameterf(D,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function re(D,P){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,P.addEventListener("dispose",T));let fe=P.source,he=d.get(fe);he===void 0&&(he={},d.set(fe,he));let pe=W(P);if(pe!==D.__cacheKey){he[pe]===void 0&&(he[pe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,$=!0),he[pe].usedTimes++;let ke=he[D.__cacheKey];ke!==void 0&&(he[D.__cacheKey].usedTimes--,ke.usedTimes===0&&R(P)),D.__cacheKey=pe,D.__webglTexture=he[pe].texture}return $}function ye(D,P,$){let fe=r.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(fe=r.TEXTURE_2D_ARRAY),P.isData3DTexture&&(fe=r.TEXTURE_3D);let he=re(D,P),pe=P.source;t.bindTexture(fe,D.__webglTexture,r.TEXTURE0+$);let ke=n.get(pe);if(pe.version!==ke.__version||he===!0){t.activeTexture(r.TEXTURE0+$);let be=ft.getPrimaries(ft.workingColorSpace),Le=P.colorSpace===Rn?null:ft.getPrimaries(P.colorSpace),Oe=P.colorSpace===Rn||be===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let qe=p(P)&&m(P.image)===!1,ce=x(P.image,qe,!1,i.maxTextureSize);ce=$e(P,ce);let it=m(ce)||o,Ke=s.convert(P.format,P.colorSpace),We=s.convert(P.type),Pe=_(P.internalFormat,Ke,We,P.colorSpace,P.isVideoTexture);K(fe,P,it);let Re,F=P.mipmaps,oe=o&&P.isVideoTexture!==!0&&Pe!==Hp,Me=ke.__version===void 0||he===!0,Ce=E(P,ce,it);if(P.isDepthTexture)Pe=r.DEPTH_COMPONENT,o?P.type===fn?Pe=r.DEPTH_COMPONENT32F:P.type===Hi?Pe=r.DEPTH_COMPONENT24:P.type===Ei?Pe=r.DEPTH24_STENCIL8:Pe=r.DEPTH_COMPONENT16:P.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===ds&&Pe===r.DEPTH_COMPONENT&&P.type!==Zh&&P.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Hi,We=s.convert(P.type)),P.format===Wi&&Pe===r.DEPTH_COMPONENT&&(Pe=r.DEPTH_STENCIL,P.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Ei,We=s.convert(P.type))),Me&&(oe?t.texStorage2D(r.TEXTURE_2D,1,Pe,ce.width,ce.height):t.texImage2D(r.TEXTURE_2D,0,Pe,ce.width,ce.height,0,Ke,We,null));else if(P.isDataTexture)if(F.length>0&&it){oe&&Me&&t.texStorage2D(r.TEXTURE_2D,Ce,Pe,F[0].width,F[0].height);for(let j=0,G=F.length;j<G;j++)Re=F[j],oe?t.texSubImage2D(r.TEXTURE_2D,j,0,0,Re.width,Re.height,Ke,We,Re.data):t.texImage2D(r.TEXTURE_2D,j,Pe,Re.width,Re.height,0,Ke,We,Re.data);P.generateMipmaps=!1}else oe?(Me&&t.texStorage2D(r.TEXTURE_2D,Ce,Pe,ce.width,ce.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce.width,ce.height,Ke,We,ce.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,ce.width,ce.height,0,Ke,We,ce.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){oe&&Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Pe,F[0].width,F[0].height,ce.depth);for(let j=0,G=F.length;j<G;j++)Re=F[j],P.format!==xn?Ke!==null?oe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Re.width,Re.height,ce.depth,Ke,Re.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Pe,Re.width,Re.height,ce.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,Re.width,Re.height,ce.depth,Ke,We,Re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,Pe,Re.width,Re.height,ce.depth,0,Ke,We,Re.data)}else{oe&&Me&&t.texStorage2D(r.TEXTURE_2D,Ce,Pe,F[0].width,F[0].height);for(let j=0,G=F.length;j<G;j++)Re=F[j],P.format!==xn?Ke!==null?oe?t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,Re.width,Re.height,Ke,Re.data):t.compressedTexImage2D(r.TEXTURE_2D,j,Pe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?t.texSubImage2D(r.TEXTURE_2D,j,0,0,Re.width,Re.height,Ke,We,Re.data):t.texImage2D(r.TEXTURE_2D,j,Pe,Re.width,Re.height,0,Ke,We,Re.data)}else if(P.isDataArrayTexture)oe?(Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Pe,ce.width,ce.height,ce.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ke,We,ce.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,ce.width,ce.height,ce.depth,0,Ke,We,ce.data);else if(P.isData3DTexture)oe?(Me&&t.texStorage3D(r.TEXTURE_3D,Ce,Pe,ce.width,ce.height,ce.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ke,We,ce.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,ce.width,ce.height,ce.depth,0,Ke,We,ce.data);else if(P.isFramebufferTexture){if(Me)if(oe)t.texStorage2D(r.TEXTURE_2D,Ce,Pe,ce.width,ce.height);else{let j=ce.width,G=ce.height;for(let ve=0;ve<Ce;ve++)t.texImage2D(r.TEXTURE_2D,ve,Pe,j,G,0,Ke,We,null),j>>=1,G>>=1}}else if(F.length>0&&it){oe&&Me&&t.texStorage2D(r.TEXTURE_2D,Ce,Pe,F[0].width,F[0].height);for(let j=0,G=F.length;j<G;j++)Re=F[j],oe?t.texSubImage2D(r.TEXTURE_2D,j,0,0,Ke,We,Re):t.texImage2D(r.TEXTURE_2D,j,Pe,Ke,We,Re);P.generateMipmaps=!1}else oe?(Me&&t.texStorage2D(r.TEXTURE_2D,Ce,Pe,ce.width,ce.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ke,We,ce)):t.texImage2D(r.TEXTURE_2D,0,Pe,Ke,We,ce);y(P,it)&&g(fe),ke.__version=pe.version,P.onUpdate&&P.onUpdate(P)}D.__version=P.version}function ge(D,P,$){if(P.image.length!==6)return;let fe=re(D,P),he=P.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+$);let pe=n.get(he);if(he.version!==pe.__version||fe===!0){t.activeTexture(r.TEXTURE0+$);let ke=ft.getPrimaries(ft.workingColorSpace),be=P.colorSpace===Rn?null:ft.getPrimaries(P.colorSpace),Le=P.colorSpace===Rn||ke===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Oe=P.isCompressedTexture||P.image[0].isCompressedTexture,qe=P.image[0]&&P.image[0].isDataTexture,ce=[];for(let j=0;j<6;j++)!Oe&&!qe?ce[j]=x(P.image[j],!1,!0,i.maxCubemapSize):ce[j]=qe?P.image[j].image:P.image[j],ce[j]=$e(P,ce[j]);let it=ce[0],Ke=m(it)||o,We=s.convert(P.format,P.colorSpace),Pe=s.convert(P.type),Re=_(P.internalFormat,We,Pe,P.colorSpace),F=o&&P.isVideoTexture!==!0,oe=pe.__version===void 0||fe===!0,Me=E(P,it,Ke);K(r.TEXTURE_CUBE_MAP,P,Ke);let Ce;if(Oe){F&&oe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,Re,it.width,it.height);for(let j=0;j<6;j++){Ce=ce[j].mipmaps;for(let G=0;G<Ce.length;G++){let ve=Ce[G];P.format!==xn?We!==null?F?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,G,0,0,ve.width,ve.height,We,ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,G,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,G,0,0,ve.width,ve.height,We,Pe,ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,G,Re,ve.width,ve.height,0,We,Pe,ve.data)}}}else{Ce=P.mipmaps,F&&oe&&(Ce.length>0&&Me++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,Re,ce[0].width,ce[0].height));for(let j=0;j<6;j++)if(qe){F?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ce[j].width,ce[j].height,We,Pe,ce[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Re,ce[j].width,ce[j].height,0,We,Pe,ce[j].data);for(let G=0;G<Ce.length;G++){let Te=Ce[G].image[j].image;F?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,G+1,0,0,Te.width,Te.height,We,Pe,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,G+1,Re,Te.width,Te.height,0,We,Pe,Te.data)}}else{F?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,We,Pe,ce[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Re,We,Pe,ce[j]);for(let G=0;G<Ce.length;G++){let ve=Ce[G];F?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,G+1,0,0,We,Pe,ve.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,G+1,Re,We,Pe,ve.image[j])}}}y(P,Ke)&&g(r.TEXTURE_CUBE_MAP),pe.__version=he.version,P.onUpdate&&P.onUpdate(P)}D.__version=P.version}function Ee(D,P,$,fe,he,pe){let ke=s.convert($.format,$.colorSpace),be=s.convert($.type),Le=_($.internalFormat,ke,be,$.colorSpace);if(!n.get(P).__hasExternalTextures){let qe=Math.max(1,P.width>>pe),ce=Math.max(1,P.height>>pe);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,pe,Le,qe,ce,P.depth,0,ke,be,null):t.texImage2D(he,pe,Le,qe,ce,0,ke,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),De(P)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,he,n.get($).__webglTexture,0,Xe(P)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,fe,he,n.get($).__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(D,P,$){if(r.bindRenderbuffer(r.RENDERBUFFER,D),P.depthBuffer&&!P.stencilBuffer){let fe=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if($||De(P)){let he=P.depthTexture;he&&he.isDepthTexture&&(he.type===fn?fe=r.DEPTH_COMPONENT32F:he.type===Hi&&(fe=r.DEPTH_COMPONENT24));let pe=Xe(P);De(P)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pe,fe,P.width,P.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,fe,P.width,P.height)}else r.renderbufferStorage(r.RENDERBUFFER,fe,P.width,P.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,D)}else if(P.depthBuffer&&P.stencilBuffer){let fe=Xe(P);$&&De(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,r.DEPTH24_STENCIL8,P.width,P.height):De(P)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,r.DEPTH24_STENCIL8,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,D)}else{let fe=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let he=0;he<fe.length;he++){let pe=fe[he],ke=s.convert(pe.format,pe.colorSpace),be=s.convert(pe.type),Le=_(pe.internalFormat,ke,be,pe.colorSpace),Oe=Xe(P);$&&De(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,Le,P.width,P.height):De(P)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Oe,Le,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,Le,P.width,P.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(D,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),q(P.depthTexture,0);let fe=n.get(P.depthTexture).__webglTexture,he=Xe(P);if(P.depthTexture.format===ds)De(P)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0);else if(P.depthTexture.format===Wi)De(P)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Be(D){let P=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!P.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ve(P.__webglFramebuffer,D)}else if($){P.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer[fe]),P.__webglDepthbuffer[fe]=r.createRenderbuffer(),Ne(P.__webglDepthbuffer[fe],D,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=r.createRenderbuffer(),Ne(P.__webglDepthbuffer,D,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(D,P,$){let fe=n.get(D);P!==void 0&&Ee(fe.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&Be(D)}function J(D){let P=D.texture,$=n.get(D),fe=n.get(P);D.addEventListener("dispose",C),D.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture()),fe.__version=P.version,a.memory.textures++);let he=D.isWebGLCubeRenderTarget===!0,pe=D.isWebGLMultipleRenderTargets===!0,ke=m(D)||o;if(he){$.__webglFramebuffer=[];for(let be=0;be<6;be++)if(o&&P.mipmaps&&P.mipmaps.length>0){$.__webglFramebuffer[be]=[];for(let Le=0;Le<P.mipmaps.length;Le++)$.__webglFramebuffer[be][Le]=r.createFramebuffer()}else $.__webglFramebuffer[be]=r.createFramebuffer()}else{if(o&&P.mipmaps&&P.mipmaps.length>0){$.__webglFramebuffer=[];for(let be=0;be<P.mipmaps.length;be++)$.__webglFramebuffer[be]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(pe)if(i.drawBuffers){let be=D.texture;for(let Le=0,Oe=be.length;Le<Oe;Le++){let qe=n.get(be[Le]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&D.samples>0&&De(D)===!1){let be=pe?P:[P];$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Le=0;Le<be.length;Le++){let Oe=be[Le];$.__webglColorRenderbuffer[Le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Le]);let qe=s.convert(Oe.format,Oe.colorSpace),ce=s.convert(Oe.type),it=_(Oe.internalFormat,qe,ce,Oe.colorSpace,D.isXRRenderTarget===!0),Ke=Xe(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,it,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,$.__webglColorRenderbuffer[Le])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),K(r.TEXTURE_CUBE_MAP,P,ke);for(let be=0;be<6;be++)if(o&&P.mipmaps&&P.mipmaps.length>0)for(let Le=0;Le<P.mipmaps.length;Le++)Ee($.__webglFramebuffer[be][Le],D,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Le);else Ee($.__webglFramebuffer[be],D,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(P,ke)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){let be=D.texture;for(let Le=0,Oe=be.length;Le<Oe;Le++){let qe=be[Le],ce=n.get(qe);t.bindTexture(r.TEXTURE_2D,ce.__webglTexture),K(r.TEXTURE_2D,qe,ke),Ee($.__webglFramebuffer,D,qe,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,0),y(qe,ke)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(o?be=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(be,fe.__webglTexture),K(be,P,ke),o&&P.mipmaps&&P.mipmaps.length>0)for(let Le=0;Le<P.mipmaps.length;Le++)Ee($.__webglFramebuffer[Le],D,P,r.COLOR_ATTACHMENT0,be,Le);else Ee($.__webglFramebuffer,D,P,r.COLOR_ATTACHMENT0,be,0);y(P,ke)&&g(be),t.unbindTexture()}D.depthBuffer&&Be(D)}function Bt(D){let P=m(D)||o,$=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let fe=0,he=$.length;fe<he;fe++){let pe=$[fe];if(y(pe,P)){let ke=D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,be=n.get(pe).__webglTexture;t.bindTexture(ke,be),g(ke),t.unbindTexture()}}}function Fe(D){if(o&&D.samples>0&&De(D)===!1){let P=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],$=D.width,fe=D.height,he=r.COLOR_BUFFER_BIT,pe=[],ke=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=n.get(D),Le=D.isWebGLMultipleRenderTargets===!0;if(Le)for(let Oe=0;Oe<P.length;Oe++)t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Oe=0;Oe<P.length;Oe++){pe.push(r.COLOR_ATTACHMENT0+Oe),D.depthBuffer&&pe.push(ke);let qe=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(qe===!1&&(D.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),Le&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,be.__webglColorRenderbuffer[Oe]),qe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ke]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ke])),Le){let ce=n.get(P[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ce,0)}r.blitFramebuffer(0,0,$,fe,0,0,$,fe,he,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Le)for(let Oe=0;Oe<P.length;Oe++){t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,be.__webglColorRenderbuffer[Oe]);let qe=n.get(P[Oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function Xe(D){return Math.min(i.maxSamples,D.samples)}function De(D){let P=n.get(D);return o&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function gt(D){let P=a.render.frame;h.get(D)!==P&&(h.set(D,P),D.update())}function $e(D,P){let $=D.colorSpace,fe=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===sh||$!==It&&$!==Rn&&(ft.getTransfer($)===Et?o===!1?e.has("EXT_sRGB")===!0&&fe===xn?(D.format=sh,D.minFilter=Rt,D.generateMipmaps=!1):P=Ho.sRGBToLinear(P):(fe!==xn||he!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),P}this.allocateTextureUnit=I,this.resetTextureUnits=X,this.setTexture2D=q,this.setTexture2DArray=ie,this.setTexture3D=se,this.setTextureCube=Z,this.rebindTextures=Qe,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=De}function Ab(r,e,t){let n=t.isWebGL2;function i(s,a=Rn){let o,l=ft.getTransfer(a);if(s===hi)return r.UNSIGNED_BYTE;if(s===Np)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Bp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===i0)return r.BYTE;if(s===s0)return r.SHORT;if(s===Zh)return r.UNSIGNED_SHORT;if(s===Up)return r.INT;if(s===Hi)return r.UNSIGNED_INT;if(s===fn)return r.FLOAT;if(s===ct)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===r0)return r.ALPHA;if(s===xn)return r.RGBA;if(s===a0)return r.LUMINANCE;if(s===o0)return r.LUMINANCE_ALPHA;if(s===ds)return r.DEPTH_COMPONENT;if(s===Wi)return r.DEPTH_STENCIL;if(s===sh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Kh)return r.RED;if(s===Op)return r.RED_INTEGER;if(s===l0)return r.RG;if(s===Fp)return r.RG_INTEGER;if(s===zp)return r.RGBA_INTEGER;if(s===vc||s===xc||s===yc||s===_c)if(l===Et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===vc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===vc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===yc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_c)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yd||s===$d||s===Zd||s===Kd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Yd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$d)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jd||s===Qd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Jd)return l===Et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Qd)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ef||s===tf||s===nf||s===sf||s===rf||s===af||s===of||s===lf||s===cf||s===hf||s===uf||s===df||s===ff||s===pf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ef)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tf)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nf)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sf)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rf)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===af)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===of)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lf)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cf)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hf)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===uf)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===df)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ff)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pf)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bc||s===mf||s===gf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===bc)return l===Et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===c0||s===vf||s===xf||s===yf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===bc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===vf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ei?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var vh=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Mt=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rb={type:"move"},ha=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rb)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xh=class extends ii{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,v=null,x=t.getContextAttributes(),m=null,p=null,y=[],g=[],_=new te,E=null,w=new nn;w.layers.enable(1),w.viewport=new Ct;let T=new nn;T.layers.enable(2),T.viewport=new Ct;let C=[w,T],b=new vh;b.layers.enable(1),b.layers.enable(2);let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=y[K];return re===void 0&&(re=new ha,y[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=y[K];return re===void 0&&(re=new ha,y[K]=re),re.getGripSpace()},this.getHand=function(K){let re=y[K];return re===void 0&&(re=new ha,y[K]=re),re.getHandSpace()};function B(K){let re=g.indexOf(K.inputSource);if(re===-1)return;let ye=y[re];ye!==void 0&&(ye.update(K.inputSource,K.frame,c||a),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",I);for(let K=0;K<y.length;K++){let re=g[K];re!==null&&(g[K]=null,y[K].disconnect(re))}R=null,O=null,e.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",X),i.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let re={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new yt(f.framebufferWidth,f.framebufferHeight,{format:xn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let re=null,ye=null,ge=null;x.depth&&(ge=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=x.stencil?Wi:ds,ye=x.stencil?Ei:Hi);let Ee={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new yt(d.textureWidth,d.textureHeight,{format:xn,type:hi,depthTexture:new cr(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ne=e.properties.get(p);Ne.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(K){for(let re=0;re<K.removed.length;re++){let ye=K.removed[re],ge=g.indexOf(ye);ge>=0&&(g[ge]=null,y[ge].disconnect(ye))}for(let re=0;re<K.added.length;re++){let ye=K.added[re],ge=g.indexOf(ye);if(ge===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=g.length){g.push(ye),ge=Ne;break}else if(g[Ne]===null){g[Ne]=ye,ge=Ne;break}if(ge===-1)break}let Ee=y[ge];Ee&&Ee.connect(ye)}}let W=new S,q=new S;function ie(K,re,ye){W.setFromMatrixPosition(re.matrixWorld),q.setFromMatrixPosition(ye.matrixWorld);let ge=W.distanceTo(q),Ee=re.projectionMatrix.elements,Ne=ye.projectionMatrix.elements,Ve=Ee[14]/(Ee[10]-1),Be=Ee[14]/(Ee[10]+1),Qe=(Ee[9]+1)/Ee[5],J=(Ee[9]-1)/Ee[5],Bt=(Ee[8]-1)/Ee[0],Fe=(Ne[8]+1)/Ne[0],Xe=Ve*Bt,De=Ve*Fe,gt=ge/(-Bt+Fe),$e=gt*-Bt;re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX($e),K.translateZ(gt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let D=Ve+gt,P=Be+gt,$=Xe-$e,fe=De+(ge-$e),he=Qe*Be/P*D,pe=J*Be/P*D;K.projectionMatrix.makePerspective($,fe,he,pe,D,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function se(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;b.near=T.near=w.near=K.near,b.far=T.far=w.far=K.far,(R!==b.near||O!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,O=b.far);let re=K.parent,ye=b.cameras;se(b,re);for(let ge=0;ge<ye.length;ge++)se(ye[ge],re);ye.length===2?ie(b,w,T):b.projectionMatrix.copy(w.projectionMatrix),Z(K,b,re)};function Z(K,re,ye){ye===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ar*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)};let ne=null;function ae(K,re){if(h=re.getViewerPose(c||a),v=re,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ge=!1;ye.length!==b.cameras.length&&(b.cameras.length=0,ge=!0);for(let Ee=0;Ee<ye.length;Ee++){let Ne=ye[Ee],Ve=null;if(f!==null)Ve=f.getViewport(Ne);else{let Qe=u.getViewSubImage(d,Ne);Ve=Qe.viewport,Ee===0&&(e.setRenderTargetTextures(p,Qe.colorTexture,d.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(p))}let Be=C[Ee];Be===void 0&&(Be=new nn,Be.layers.enable(Ee),Be.viewport=new Ct,C[Ee]=Be),Be.matrix.fromArray(Ne.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ne.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Ee===0&&(b.matrix.copy(Be.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ge===!0&&b.cameras.push(Be)}}for(let ye=0;ye<y.length;ye++){let ge=g[ye],Ee=y[ye];ge!==null&&Ee!==void 0&&Ee.update(ge,re,c||a)}ne&&ne(K,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),v=null}let de=new Yp;de.setAnimationLoop(ae),this.setAnimationLoop=function(K){ne=K},this.dispose=function(){}}};function Cb(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,g,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,g):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let g=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*g,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,g){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=g*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pb(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,g){let _=g.program;n.uniformBlockBinding(y,_)}function c(y,g){let _=i[y.id];_===void 0&&(v(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));let E=g.program;n.updateUBOMapping(y,E);let w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function h(y){let g=u();y.__bindingPointIndex=g;let _=r.createBuffer(),E=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let g=i[y.id],_=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let w=0,T=_.length;w<T;w++){let C=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,R=C.length;b<R;b++){let O=C[b];if(f(O,w,b,E)===!0){let B=O.__offset,X=Array.isArray(O.value)?O.value:[O.value],I=0;for(let W=0;W<X.length;W++){let q=X[W],ie=x(q);typeof q=="number"||typeof q=="boolean"?(O.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,B+I,O.__data)):q.isMatrix3?(O.__data[0]=q.elements[0],O.__data[1]=q.elements[1],O.__data[2]=q.elements[2],O.__data[3]=0,O.__data[4]=q.elements[3],O.__data[5]=q.elements[4],O.__data[6]=q.elements[5],O.__data[7]=0,O.__data[8]=q.elements[6],O.__data[9]=q.elements[7],O.__data[10]=q.elements[8],O.__data[11]=0):(q.toArray(O.__data,I),I+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,g,_,E){let w=y.value,T=g+"_"+_;if(E[T]===void 0)return typeof w=="number"||typeof w=="boolean"?E[T]=w:E[T]=w.clone(),!0;{let C=E[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return E[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function v(y){let g=y.uniforms,_=0,E=16;for(let T=0,C=g.length;T<C;T++){let b=Array.isArray(g[T])?g[T]:[g[T]];for(let R=0,O=b.length;R<O;R++){let B=b[R],X=Array.isArray(B.value)?B.value:[B.value];for(let I=0,W=X.length;I<W;I++){let q=X[I],ie=x(q),se=_%E;se!==0&&E-se<ie.boundary&&(_+=E-se),B.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=ie.storage}}}let w=_%E;return w>0&&(_+=E-w),y.__size=_,y.__cache={},this}function x(y){let g={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function m(y){let g=y.target;g.removeEventListener("dispose",m);let _=a.indexOf(g.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[g.id]),delete i[g.id],delete s[g.id]}function p(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}var xa=class{constructor(e={}){let{canvas:t=B0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),v=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;let g=this,_=!1,E=0,w=0,T=null,C=-1,b=null,R=new Ct,O=new Ct,B=null,X=new Se(0),I=0,W=t.width,q=t.height,ie=1,se=null,Z=null,ne=new Ct(0,0,W,q),ae=new Ct(0,0,W,q),de=!1,K=new va,re=!1,ye=!1,ge=null,Ee=new Ue,Ne=new te,Ve=new S,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return T===null?ie:1}let J=n;function Bt(M,k){for(let N=0;N<M.length;N++){let z=M[N],H=t.getContext(z,k);if(H!==null)return H}return null}try{let M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vh}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",ve,!1),J===null){let k=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&k.shift(),J=Bt(k,M),J===null)throw Bt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Fe,Xe,De,gt,$e,D,P,$,fe,he,pe,ke,be,Le,Oe,qe,ce,it,Ke,We,Pe,Re,F,oe;function Me(){Fe=new $y(J),Xe=new Gy(J,Fe,e),Fe.init(Xe),Re=new Ab(J,Fe,Xe),De=new Tb(J,Fe,Xe),gt=new Jy(J),$e=new fb,D=new Eb(J,Fe,De,$e,Xe,Re,gt),P=new Xy(g),$=new Yy(g),fe=new av(J,Xe),F=new Hy(J,Fe,fe,Xe),he=new Zy(J,fe,gt,F),pe=new n_(J,he,fe,gt),Ke=new t_(J,Xe,D),qe=new Wy($e),ke=new db(g,P,$,Fe,Xe,F,qe),be=new Cb(g,$e),Le=new mb,Oe=new bb(Fe,Xe),it=new zy(g,P,$,De,pe,d,l),ce=new Sb(g,pe,Xe),oe=new Pb(J,gt,Xe,De),We=new Vy(J,Fe,gt,Xe),Pe=new Ky(J,Fe,gt,Xe),gt.programs=ke.programs,g.capabilities=Xe,g.extensions=Fe,g.properties=$e,g.renderLists=Le,g.shadowMap=ce,g.state=De,g.info=gt}Me();let Ce=new xh(g,J);this.xr=Ce,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let M=Fe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Fe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(W,q,!1))},this.getSize=function(M){return M.set(W,q)},this.setSize=function(M,k,N=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,q=k,t.width=Math.floor(M*ie),t.height=Math.floor(k*ie),N===!0&&(t.style.width=M+"px",t.style.height=k+"px"),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(W*ie,q*ie).floor()},this.setDrawingBufferSize=function(M,k,N){W=M,q=k,ie=N,t.width=Math.floor(M*N),t.height=Math.floor(k*N),this.setViewport(0,0,M,k)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(ne)},this.setViewport=function(M,k,N,z){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,k,N,z),De.viewport(R.copy(ne).multiplyScalar(ie).floor())},this.getScissor=function(M){return M.copy(ae)},this.setScissor=function(M,k,N,z){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,k,N,z),De.scissor(O.copy(ae).multiplyScalar(ie).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(M){De.setScissorTest(de=M)},this.setOpaqueSort=function(M){se=M},this.setTransparentSort=function(M){Z=M},this.getClearColor=function(M){return M.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(M=!0,k=!0,N=!0){let z=0;if(M){let H=!1;if(T!==null){let Q=T.texture.format;H=Q===zp||Q===Fp||Q===Op}if(H){let Q=T.texture.type,Y=Q===hi||Q===Hi||Q===Zh||Q===Ei||Q===Np||Q===Bp,ee=it.getClearColor(),le=it.getClearAlpha(),ue=ee.r,me=ee.g,xe=ee.b;Y?(f[0]=ue,f[1]=me,f[2]=xe,f[3]=le,J.clearBufferuiv(J.COLOR,0,f)):(v[0]=ue,v[1]=me,v[2]=xe,v[3]=le,J.clearBufferiv(J.COLOR,0,v))}else z|=J.COLOR_BUFFER_BIT}k&&(z|=J.DEPTH_BUFFER_BIT),N&&(z|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Le.dispose(),Oe.dispose(),$e.dispose(),P.dispose(),$.dispose(),pe.dispose(),F.dispose(),oe.dispose(),ke.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Wt),Ce.removeEventListener("sessionend",ht),ge&&(ge.dispose(),ge=null),jt.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let M=gt.autoReset,k=ce.enabled,N=ce.autoUpdate,z=ce.needsUpdate,H=ce.type;Me(),gt.autoReset=M,ce.enabled=k,ce.autoUpdate=N,ce.needsUpdate=z,ce.type=H}function ve(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Te(M){let k=M.target;k.removeEventListener("dispose",Te),Ye(k)}function Ye(M){Ge(M),$e.remove(M)}function Ge(M){let k=$e.get(M).programs;k!==void 0&&(k.forEach(function(N){ke.releaseProgram(N)}),M.isShaderMaterial&&ke.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,N,z,H,Q){k===null&&(k=Be);let Y=H.isMesh&&H.matrixWorld.determinant()<0,ee=A(M,k,N,z,H);De.setMaterial(z,Y);let le=N.index,ue=1;if(z.wireframe===!0){if(le=he.getWireframeAttribute(N),le===void 0)return;ue=2}let me=N.drawRange,xe=N.attributes.position,_e=me.start*ue,Ie=(me.start+me.count)*ue;Q!==null&&(_e=Math.max(_e,Q.start*ue),Ie=Math.min(Ie,(Q.start+Q.count)*ue)),le!==null?(_e=Math.max(_e,0),Ie=Math.min(Ie,le.count)):xe!=null&&(_e=Math.max(_e,0),Ie=Math.min(Ie,xe.count));let ze=Ie-_e;if(ze<0||ze===1/0)return;F.setup(H,z,ee,N,le);let mt,Ze=We;if(le!==null&&(mt=fe.get(le),Ze=Pe,Ze.setIndex(mt)),H.isMesh)z.wireframe===!0?(De.setLineWidth(z.wireframeLinewidth*Qe()),Ze.setMode(J.LINES)):Ze.setMode(J.TRIANGLES);else if(H.isLine){let je=z.linewidth;je===void 0&&(je=1),De.setLineWidth(je*Qe()),H.isLineSegments?Ze.setMode(J.LINES):H.isLineLoop?Ze.setMode(J.LINE_LOOP):Ze.setMode(J.LINE_STRIP)}else H.isPoints?Ze.setMode(J.POINTS):H.isSprite&&Ze.setMode(J.TRIANGLES);if(H.isBatchedMesh)Ze.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Ze.renderInstances(_e,ze,H.count);else if(N.isInstancedBufferGeometry){let je=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,bt=Math.min(N.instanceCount,je);Ze.renderInstances(_e,ze,bt)}else Ze.render(_e,ze)};function st(M,k,N){M.transparent===!0&&M.side===Zt&&M.forceSinglePass===!1?(M.side=Qt,M.needsUpdate=!0,tt(M,k,N),M.side=On,M.needsUpdate=!0,tt(M,k,N),M.side=Zt):tt(M,k,N)}this.compile=function(M,k,N=null){N===null&&(N=M),m=Oe.get(N),m.init(),y.push(m),N.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),M!==N&&M.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(g._useLegacyLights);let z=new Set;return M.traverse(function(H){let Q=H.material;if(Q)if(Array.isArray(Q))for(let Y=0;Y<Q.length;Y++){let ee=Q[Y];st(ee,N,H),z.add(ee)}else st(Q,N,H),z.add(Q)}),y.pop(),m=null,z},this.compileAsync=function(M,k,N=null){let z=this.compile(M,k,N);return new Promise(H=>{function Q(){if(z.forEach(function(Y){$e.get(Y).currentProgram.isReady()&&z.delete(Y)}),z.size===0){H(M);return}setTimeout(Q,10)}Fe.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let rt=null;function Ot(M){rt&&rt(M)}function Wt(){jt.stop()}function ht(){jt.start()}let jt=new Yp;jt.setAnimationLoop(Ot),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(M){rt=M,Ce.setAnimationLoop(M),M===null?jt.stop():jt.start()},Ce.addEventListener("sessionstart",Wt),Ce.addEventListener("sessionend",ht),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(k),k=Ce.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,k,T),m=Oe.get(M,y.length),m.init(),y.push(m),Ee.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(Ee),ye=this.localClippingEnabled,re=qe.init(this.clippingPlanes,ye),x=Le.get(M,p.length),x.init(),p.push(x),Hn(M,k,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(se,Z),this.info.render.frame++,re===!0&&qe.beginShadows();let N=m.state.shadowsArray;if(ce.render(N,M,k),re===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(x,M),m.setupLights(g._useLegacyLights),k.isArrayCamera){let z=k.cameras;for(let H=0,Q=z.length;H<Q;H++){let Y=z[H];rs(x,M,Y,Y.viewport)}}else rs(x,M,k);T!==null&&(D.updateMultisampleRenderTarget(T),D.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(g,M,k),F.resetDefaultState(),C=-1,b=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Hn(M,k,N,z){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)N=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){z&&Ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ee);let Y=pe.update(M),ee=M.material;ee.visible&&x.push(M,Y,ee,N,Ve.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){let Y=pe.update(M),ee=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ve.copy(M.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),Ve.copy(Y.boundingSphere.center)),Ve.applyMatrix4(M.matrixWorld).applyMatrix4(Ee)),Array.isArray(ee)){let le=Y.groups;for(let ue=0,me=le.length;ue<me;ue++){let xe=le[ue],_e=ee[xe.materialIndex];_e&&_e.visible&&x.push(M,Y,_e,N,Ve.z,xe)}}else ee.visible&&x.push(M,Y,ee,N,Ve.z,null)}}let Q=M.children;for(let Y=0,ee=Q.length;Y<ee;Y++)Hn(Q[Y],k,N,z)}function rs(M,k,N,z){let H=M.opaque,Q=M.transmissive,Y=M.transparent;m.setupLightsView(N),re===!0&&qe.setGlobalState(g.clippingPlanes,N),Q.length>0&&gc(H,Q,k,N),z&&De.viewport(R.copy(z)),H.length>0&&oi(H,k,N),Q.length>0&&oi(Q,k,N),Y.length>0&&oi(Y,k,N),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function gc(M,k,N,z){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;let Q=Xe.isWebGL2;ge===null&&(ge=new yt(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")?ct:hi,minFilter:Ai,samples:Q?4:0})),g.getDrawingBufferSize(Ne),Q?ge.setSize(Ne.x,Ne.y):ge.setSize(zo(Ne.x),zo(Ne.y));let Y=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor(X),I=g.getClearAlpha(),I<1&&g.setClearColor(16777215,.5),g.clear();let ee=g.toneMapping;g.toneMapping=Gi,oi(M,N,z),D.updateMultisampleRenderTarget(ge),D.updateRenderTargetMipmap(ge);let le=!1;for(let ue=0,me=k.length;ue<me;ue++){let xe=k[ue],_e=xe.object,Ie=xe.geometry,ze=xe.material,mt=xe.group;if(ze.side===Zt&&_e.layers.test(z.layers)){let Ze=ze.side;ze.side=Qt,ze.needsUpdate=!0,ki(_e,N,z,Ie,ze,mt),ze.side=Ze,ze.needsUpdate=!0,le=!0}}le===!0&&(D.updateMultisampleRenderTarget(ge),D.updateRenderTargetMipmap(ge)),g.setRenderTarget(Y),g.setClearColor(X,I),g.toneMapping=ee}function oi(M,k,N){let z=k.isScene===!0?k.overrideMaterial:null;for(let H=0,Q=M.length;H<Q;H++){let Y=M[H],ee=Y.object,le=Y.geometry,ue=z===null?Y.material:z,me=Y.group;ee.layers.test(N.layers)&&ki(ee,k,N,le,ue,me)}}function ki(M,k,N,z,H,Q){M.onBeforeRender(g,k,N,z,H,Q),M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(g,k,N,z,M,Q),H.transparent===!0&&H.side===Zt&&H.forceSinglePass===!1?(H.side=Qt,H.needsUpdate=!0,g.renderBufferDirect(N,k,z,H,M,Q),H.side=On,H.needsUpdate=!0,g.renderBufferDirect(N,k,z,H,M,Q),H.side=Zt):g.renderBufferDirect(N,k,z,H,M,Q),M.onAfterRender(g,k,N,z,H,Q)}function tt(M,k,N){k.isScene!==!0&&(k=Be);let z=$e.get(M),H=m.state.lights,Q=m.state.shadowsArray,Y=H.state.version,ee=ke.getParameters(M,H.state,Q,k,N),le=ke.getProgramCacheKey(ee),ue=z.programs;z.environment=M.isMeshStandardMaterial?k.environment:null,z.fog=k.fog,z.envMap=(M.isMeshStandardMaterial?$:P).get(M.envMap||z.environment),ue===void 0&&(M.addEventListener("dispose",Te),ue=new Map,z.programs=ue);let me=ue.get(le);if(me!==void 0){if(z.currentProgram===me&&z.lightsStateVersion===Y)return Ja(M,ee),me}else ee.uniforms=ke.getUniforms(M),M.onBuild(N,ee,g),M.onBeforeCompile(ee,g),me=ke.acquireProgram(ee,le),ue.set(le,me),z.uniforms=ee.uniforms;let xe=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(xe.clippingPlanes=qe.uniform),Ja(M,ee),z.needsLights=V(M),z.lightsStateVersion=Y,z.needsLights&&(xe.ambientLightColor.value=H.state.ambient,xe.lightProbe.value=H.state.probe,xe.directionalLights.value=H.state.directional,xe.directionalLightShadows.value=H.state.directionalShadow,xe.spotLights.value=H.state.spot,xe.spotLightShadows.value=H.state.spotShadow,xe.rectAreaLights.value=H.state.rectArea,xe.ltc_1.value=H.state.rectAreaLTC1,xe.ltc_2.value=H.state.rectAreaLTC2,xe.pointLights.value=H.state.point,xe.pointLightShadows.value=H.state.pointShadow,xe.hemisphereLights.value=H.state.hemi,xe.directionalShadowMap.value=H.state.directionalShadowMap,xe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,xe.spotShadowMap.value=H.state.spotShadowMap,xe.spotLightMatrix.value=H.state.spotLightMatrix,xe.spotLightMap.value=H.state.spotLightMap,xe.pointShadowMap.value=H.state.pointShadowMap,xe.pointShadowMatrix.value=H.state.pointShadowMatrix),z.currentProgram=me,z.uniformsList=null,me}function $r(M){if(M.uniformsList===null){let k=M.currentProgram.getUniforms();M.uniformsList=tr.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function Ja(M,k){let N=$e.get(M);N.outputColorSpace=k.outputColorSpace,N.batching=k.batching,N.instancing=k.instancing,N.instancingColor=k.instancingColor,N.skinning=k.skinning,N.morphTargets=k.morphTargets,N.morphNormals=k.morphNormals,N.morphColors=k.morphColors,N.morphTargetsCount=k.morphTargetsCount,N.numClippingPlanes=k.numClippingPlanes,N.numIntersection=k.numClipIntersection,N.vertexAlphas=k.vertexAlphas,N.vertexTangents=k.vertexTangents,N.toneMapping=k.toneMapping}function A(M,k,N,z,H){k.isScene!==!0&&(k=Be),D.resetTextureUnits();let Q=k.fog,Y=z.isMeshStandardMaterial?k.environment:null,ee=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:It,le=(z.isMeshStandardMaterial?$:P).get(z.envMap||Y),ue=z.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,me=!!N.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),xe=!!N.morphAttributes.position,_e=!!N.morphAttributes.normal,Ie=!!N.morphAttributes.color,ze=Gi;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ze=g.toneMapping);let mt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ze=mt!==void 0?mt.length:0,je=$e.get(z),bt=m.state.lights;if(re===!0&&(ye===!0||M!==b)){let Xt=M===b&&z.id===C;qe.setState(z,M,Xt)}let He=!1;z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==bt.state.version||je.outputColorSpace!==ee||H.isBatchedMesh&&je.batching===!1||!H.isBatchedMesh&&je.batching===!0||H.isInstancedMesh&&je.instancing===!1||!H.isInstancedMesh&&je.instancing===!0||H.isSkinnedMesh&&je.skinning===!1||!H.isSkinnedMesh&&je.skinning===!0||H.isInstancedMesh&&je.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&je.instancingColor===!1&&H.instanceColor!==null||je.envMap!==le||z.fog===!0&&je.fog!==Q||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==qe.numPlanes||je.numIntersection!==qe.numIntersection)||je.vertexAlphas!==ue||je.vertexTangents!==me||je.morphTargets!==xe||je.morphNormals!==_e||je.morphColors!==Ie||je.toneMapping!==ze||Xe.isWebGL2===!0&&je.morphTargetsCount!==Ze)&&(He=!0):(He=!0,je.__version=z.version);let Tt=je.currentProgram;He===!0&&(Tt=tt(z,k,H));let yn=!1,Ft=!1,dt=!1,Je=Tt.getUniforms(),dn=je.uniforms;if(De.useProgram(Tt.program)&&(yn=!0,Ft=!0,dt=!0),z.id!==C&&(C=z.id,Ft=!0),yn||b!==M){Je.setValue(J,"projectionMatrix",M.projectionMatrix),Je.setValue(J,"viewMatrix",M.matrixWorldInverse);let Xt=Je.map.cameraPosition;Xt!==void 0&&Xt.setValue(J,Ve.setFromMatrixPosition(M.matrixWorld)),Xe.logarithmicDepthBuffer&&Je.setValue(J,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Je.setValue(J,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Ft=!0,dt=!0)}if(H.isSkinnedMesh){Je.setOptional(J,H,"bindMatrix"),Je.setOptional(J,H,"bindMatrixInverse");let Xt=H.skeleton;Xt&&(Xe.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Je.setValue(J,"boneTexture",Xt.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Je.setOptional(J,H,"batchingTexture"),Je.setValue(J,"batchingTexture",H._matricesTexture,D));let vi=N.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0&&Xe.isWebGL2===!0)&&Ke.update(H,N,Tt),(Ft||je.receiveShadow!==H.receiveShadow)&&(je.receiveShadow=H.receiveShadow,Je.setValue(J,"receiveShadow",H.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(dn.envMap.value=le,dn.flipEnvMap.value=le.isCubeTexture&&le.isRenderTargetTexture===!1?-1:1),Ft&&(Je.setValue(J,"toneMappingExposure",g.toneMappingExposure),je.needsLights&&L(dn,dt),Q&&z.fog===!0&&be.refreshFogUniforms(dn,Q),be.refreshMaterialUniforms(dn,z,ie,q,ge),tr.upload(J,$r(je),dn,D)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(tr.upload(J,$r(je),dn,D),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Je.setValue(J,"center",H.center),Je.setValue(J,"modelViewMatrix",H.modelViewMatrix),Je.setValue(J,"normalMatrix",H.normalMatrix),Je.setValue(J,"modelMatrix",H.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Xt=z.uniformsGroups;for(let Ui=0,Lg=Xt.length;Ui<Lg;Ui++)if(Xe.isWebGL2){let Hd=Xt[Ui];oe.update(Hd,Tt),oe.bind(Hd,Tt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tt}function L(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function V(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,k,N){$e.get(M.texture).__webglTexture=k,$e.get(M.depthTexture).__webglTexture=N;let z=$e.get(M);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=N===void 0,z.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,k){let N=$e.get(M);N.__webglFramebuffer=k,N.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(M,k=0,N=0){T=M,E=k,w=N;let z=!0,H=null,Q=!1,Y=!1;if(M){let le=$e.get(M);le.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(J.FRAMEBUFFER,null),z=!1):le.__webglFramebuffer===void 0?D.setupRenderTarget(M):le.__hasExternalTextures&&D.rebindTextures(M,$e.get(M.texture).__webglTexture,$e.get(M.depthTexture).__webglTexture);let ue=M.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(Y=!0);let me=$e.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(me[k])?H=me[k][N]:H=me[k],Q=!0):Xe.isWebGL2&&M.samples>0&&D.useMultisampledRTT(M)===!1?H=$e.get(M).__webglMultisampledFramebuffer:Array.isArray(me)?H=me[N]:H=me,R.copy(M.viewport),O.copy(M.scissor),B=M.scissorTest}else R.copy(ne).multiplyScalar(ie).floor(),O.copy(ae).multiplyScalar(ie).floor(),B=de;if(De.bindFramebuffer(J.FRAMEBUFFER,H)&&Xe.drawBuffers&&z&&De.drawBuffers(M,H),De.viewport(R),De.scissor(O),De.setScissorTest(B),Q){let le=$e.get(M.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+k,le.__webglTexture,N)}else if(Y){let le=$e.get(M.texture),ue=k||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,le.__webglTexture,N||0,ue)}C=-1},this.readRenderTargetPixels=function(M,k,N,z,H,Q,Y){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=$e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Y!==void 0&&(ee=ee[Y]),ee){De.bindFramebuffer(J.FRAMEBUFFER,ee);try{let le=M.texture,ue=le.format,me=le.type;if(ue!==xn&&Re.convert(ue)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let xe=me===ct&&(Fe.has("EXT_color_buffer_half_float")||Xe.isWebGL2&&Fe.has("EXT_color_buffer_float"));if(me!==hi&&Re.convert(me)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(me===fn&&(Xe.isWebGL2||Fe.has("OES_texture_float")||Fe.has("WEBGL_color_buffer_float")))&&!xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-z&&N>=0&&N<=M.height-H&&J.readPixels(k,N,z,H,Re.convert(ue),Re.convert(me),Q)}finally{let le=T!==null?$e.get(T).__webglFramebuffer:null;De.bindFramebuffer(J.FRAMEBUFFER,le)}}},this.copyFramebufferToTexture=function(M,k,N=0){let z=Math.pow(2,-N),H=Math.floor(k.image.width*z),Q=Math.floor(k.image.height*z);D.setTexture2D(k,0),J.copyTexSubImage2D(J.TEXTURE_2D,N,0,0,M.x,M.y,H,Q),De.unbindTexture()},this.copyTextureToTexture=function(M,k,N,z=0){let H=k.image.width,Q=k.image.height,Y=Re.convert(N.format),ee=Re.convert(N.type);D.setTexture2D(N,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,N.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,N.unpackAlignment),k.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,z,M.x,M.y,H,Q,Y,ee,k.image.data):k.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,z,M.x,M.y,k.mipmaps[0].width,k.mipmaps[0].height,Y,k.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,z,M.x,M.y,Y,ee,k.image),z===0&&N.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(M,k,N,z,H=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Q=M.max.x-M.min.x+1,Y=M.max.y-M.min.y+1,ee=M.max.z-M.min.z+1,le=Re.convert(z.format),ue=Re.convert(z.type),me;if(z.isData3DTexture)D.setTexture3D(z,0),me=J.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)D.setTexture2DArray(z,0),me=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,z.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,z.unpackAlignment);let xe=J.getParameter(J.UNPACK_ROW_LENGTH),_e=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Ie=J.getParameter(J.UNPACK_SKIP_PIXELS),ze=J.getParameter(J.UNPACK_SKIP_ROWS),mt=J.getParameter(J.UNPACK_SKIP_IMAGES),Ze=N.isCompressedTexture?N.mipmaps[H]:N.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,Ze.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ze.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,M.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,M.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,M.min.z),N.isDataTexture||N.isData3DTexture?J.texSubImage3D(me,H,k.x,k.y,k.z,Q,Y,ee,le,ue,Ze.data):N.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(me,H,k.x,k.y,k.z,Q,Y,ee,le,Ze.data)):J.texSubImage3D(me,H,k.x,k.y,k.z,Q,Y,ee,le,ue,Ze),J.pixelStorei(J.UNPACK_ROW_LENGTH,xe),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,_e),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Ie),J.pixelStorei(J.UNPACK_SKIP_ROWS,ze),J.pixelStorei(J.UNPACK_SKIP_IMAGES,mt),H===0&&z.generateMipmaps&&J.generateMipmap(me),De.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?D.setTextureCube(M,0):M.isData3DTexture?D.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?D.setTexture2DArray(M,0):D.setTexture2D(M,0),De.unbindTexture()},this.resetState=function(){E=0,w=0,T=null,De.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===eu?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===_l?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xt?fs:Gp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fs?xt:It}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},yh=class extends xa{};yh.prototype.isWebGL1Renderer=!0;var Yo=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var hr=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ur=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ih,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new S,xs=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ys=class extends Tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ws,ea=new S,Xs=new S,qs=new S,js=new te,ta=new te,em=new Ue,Mo=new S,na=new S,wo=new S,ap=new te,Xc=new te,op=new te,dr=class extends Vt{constructor(e=new ys){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new Dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ur(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new xs(n,3,0,!1)),Ws.setAttribute("uv",new xs(n,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),em.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;So(Mo.set(-.5,-.5,0),qs,a,Xs,i,s),So(na.set(.5,-.5,0),qs,a,Xs,i,s),So(wo.set(.5,.5,0),qs,a,Xs,i,s),ap.set(0,0),Xc.set(1,0),op.set(1,1);let o=e.ray.intersectTriangle(Mo,na,wo,!1,ea);if(o===null&&(So(na.set(-.5,.5,0),qs,a,Xs,i,s),Xc.set(0,1),o=e.ray.intersectTriangle(Mo,wo,na,!1,ea),o===null))return;let l=e.ray.origin.distanceTo(ea);l<e.near||l>e.far||t.push({distance:l,point:ea.clone(),uv:Cn.getInterpolation(ea,Mo,na,wo,ap,Xc,op,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function So(r,e,t,n,i,s){js.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ta.x=s*js.x-i*js.y,ta.y=i*js.x+s*js.y):ta.copy(js),r.copy(e),r.x+=ta.x,r.y+=ta.y,r.applyMatrix4(em)}var lp=new S,cp=new Ct,hp=new Ct,Lb=new S,up=new Ue,To=new S,qc=new Sn,dp=new Ue,jc=new si,$o=class extends Ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jd,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new et),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingBox.expandByPoint(To)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingSphere.expandByPoint(To)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qc.copy(this.boundingSphere),qc.applyMatrix4(i),e.ray.intersectsSphere(qc)!==!1&&(dp.copy(i).invert(),jc.copy(e.ray).applyMatrix4(dp),!(this.boundingBox!==null&&jc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===n0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;cp.fromBufferAttribute(i.attributes.skinIndex,e),hp.fromBufferAttribute(i.attributes.skinWeight,e),lp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=hp.getComponent(s);if(a!==0){let o=cp.getComponent(s);up.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Lb.copy(lp).applyMatrix4(up),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ya=class extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ui=class extends pn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=kt,h=kt,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fp=new Ue,Ib=new Ue,Zo=class r{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Ib;fp.multiplyMatrices(o,t[s]),fp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ui(t,e,e,xn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new ya),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},_s=class extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ys=new Ue,pp=new Ue,Eo=[],mp=new et,Db=new Ue,ia=new Ae,sa=new Sn,Ko=class extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _s(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Db)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new et),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),mp.copy(e.boundingBox).applyMatrix4(Ys),this.boundingBox.union(mp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ys),sa.copy(e.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sa.copy(this.boundingSphere),sa.applyMatrix4(n),e.ray.intersectsSphere(sa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ys),pp.multiplyMatrices(n,Ys),ia.matrixWorld=pp,ia.raycast(e,Eo);for(let a=0,o=Eo.length;a<o;a++){let l=Eo[a];l.instanceId=s,l.object=this,t.push(l)}Eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _s(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var _a=class extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gp=new S,vp=new S,xp=new Ue,Yc=new si,Ao=new Sn,fr=class extends Vt{constructor(e=new Dt,t=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)gp.fromBufferAttribute(t,i-1),vp.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=gp.distanceTo(vp);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(i),Ao.radius+=s,e.ray.intersectsSphere(Ao)===!1)return;xp.copy(i).invert(),Yc.copy(e.ray).applyMatrix4(xp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new S,h=new S,u=new S,d=new S,f=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){let p=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count);for(let g=p,_=y-1;g<_;g+=f){let E=v.getX(g),w=v.getX(g+1);if(c.fromBufferAttribute(m,E),h.fromBufferAttribute(m,w),Yc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let g=p,_=y-1;g<_;g+=f){if(c.fromBufferAttribute(m,g),h.fromBufferAttribute(m,g+1),Yc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},yp=new S,_p=new S,Jo=class extends fr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)yp.fromBufferAttribute(t,i),_p.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yp.distanceTo(_p);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Qo=class extends fr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ba=class extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bp=new Ue,_h=new si,Ro=new Sn,Co=new S,el=class extends Vt{constructor(e=new Dt,t=new ba){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=s,e.ray.intersectsSphere(Ro)===!1)return;bp.copy(i).invert(),_h.copy(e.ray).applyMatrix4(bp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let v=d,x=f;v<x;v++){let m=c.getX(v);Co.fromBufferAttribute(u,m),Mp(Co,m,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let v=d,x=f;v<x;v++)Co.fromBufferAttribute(u,v),Mp(Co,v,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Mp(r,e,t,n,i,s,a){let o=_h.distanceSqToPoint(r);if(o<t){let l=new S;_h.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var pr=class extends pn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new te:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,i=[],s=[],a=[],o=new S,l=new Ue;for(let f=0;f<=e;f++){let v=f/e;i[f]=this.getTangentAt(v,new S)}s[0]=new S,a[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(Yt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,v))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Yt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(i[v],f*v)),a[v].crossVectors(i[v],s[v])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ma=class extends Wn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new te,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bh=class extends Ma{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function iu(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var Po=new S,$c=new iu,Zc=new iu,Kc=new iu,wa=class extends Wn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(Po.subVectors(i[0],i[1]).add(i[0]),c=Po);let u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Po.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Po),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),$c.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,v,x,m),Zc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,v,x,m),Kc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,v,x,m)}else this.curveType==="catmullrom"&&($c.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Zc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Kc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set($c.calc(l),Zc.calc(l),Kc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wp(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function kb(r,e){let t=1-r;return t*t*e}function Ub(r,e){return 2*(1-r)*r*e}function Nb(r,e){return r*r*e}function ua(r,e,t,n){return kb(r,e)+Ub(r,t)+Nb(r,n)}function Bb(r,e){let t=1-r;return t*t*t*e}function Ob(r,e){let t=1-r;return 3*t*t*r*e}function Fb(r,e){return 3*(1-r)*r*r*e}function zb(r,e){return r*r*r*e}function da(r,e,t,n,i){return Bb(r,e)+Ob(r,t)+Fb(r,n)+zb(r,i)}var tl=class extends Wn{constructor(e=new te,t=new te,n=new te,i=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new te){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(da(e,i.x,s.x,a.x,o.x),da(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mh=class extends Wn{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(da(e,i.x,s.x,a.x,o.x),da(e,i.y,s.y,a.y,o.y),da(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nl=class extends Wn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wh=class extends Wn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends Wn{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ua(e,i.x,s.x,a.x),ua(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sh=class extends Wn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ua(e,i.x,s.x,a.x),ua(e,i.y,s.y,a.y),ua(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(wp(o,l.x,c.x,h.x,u.x),wp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new te().fromArray(i))}return this}},Sp=Object.freeze({__proto__:null,ArcCurve:bh,CatmullRomCurve3:wa,CubicBezierCurve:tl,CubicBezierCurve3:Mh,EllipseCurve:Ma,LineCurve:nl,LineCurve3:wh,QuadraticBezierCurve:il,QuadraticBezierCurve3:Sh,SplineCurve:sl}),Th=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Sp[i.type]().fromJSON(i))}return this}},Eh=class extends Th{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new nl(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new il(this.currentPoint.clone(),new te(e,t),new te(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new tl(this.currentPoint.clone(),new te(e,t),new te(n,i),new te(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new sl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Ma(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ah=class r extends Dt{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Yt(i,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new S,d=new te,f=new S,v=new S,x=new S,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(v)}for(let y=0;y<=t;y++){let g=n+y*h*i,_=Math.sin(g),E=Math.cos(g);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*_,u.y=e[w].y,u.z=e[w].x*E,a.push(u.x,u.y,u.z),d.x=y/t,d.y=w/(e.length-1),o.push(d.x,d.y);let T=l[3*w+0]*_,C=l[3*w+1],b=l[3*w+0]*E;c.push(T,C,b)}}for(let y=0;y<t;y++)for(let g=0;g<e.length-1;g++){let _=g+y*e.length,E=_,w=_+e.length,T=_+e.length+1,C=_+1;s.push(E,w,C),s.push(T,C,w)}this.setIndex(s),this.setAttribute("position",new ot(a,3)),this.setAttribute("uv",new ot(o,2)),this.setAttribute("normal",new ot(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},bs=class r extends Ah{constructor(e=1,t=1,n=4,i=8){let s=new Eh;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Ri=class r extends Dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new S,h=new te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},di=class r extends Dt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],v=0,x=[],m=n/2,p=0;y(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function y(){let _=new S,E=new S,w=0,T=(t-e)/n;for(let C=0;C<=s;C++){let b=[],R=C/s,O=R*(t-e)+e;for(let B=0;B<=i;B++){let X=B/i,I=X*l+o,W=Math.sin(I),q=Math.cos(I);E.x=O*W,E.y=-R*n+m,E.z=O*q,u.push(E.x,E.y,E.z),_.set(W,T,q).normalize(),d.push(_.x,_.y,_.z),f.push(X,1-R),b.push(v++)}x.push(b)}for(let C=0;C<i;C++)for(let b=0;b<s;b++){let R=x[b][C],O=x[b+1][C],B=x[b+1][C+1],X=x[b][C+1];h.push(R,O,X),h.push(O,B,X),w+=6}c.addGroup(p,w,0),p+=w}function g(_){let E=v,w=new te,T=new S,C=0,b=_===!0?e:t,R=_===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),v++;let O=v;for(let B=0;B<=i;B++){let I=B/i*l+o,W=Math.cos(I),q=Math.sin(I);T.x=b*q,T.y=m*R,T.z=b*W,u.push(T.x,T.y,T.z),d.push(0,R,0),w.x=W*.5+.5,w.y=q*.5*R+.5,f.push(w.x,w.y),v++}for(let B=0;B<i;B++){let X=E+B,I=O+B;_===!0?h.push(I,I+1,X):h.push(I+1,I,X),C+=3}c.addGroup(p,C,_===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ms=class r extends di{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rh=class r extends Dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(s.slice(),3)),this.setAttribute("uv",new ot(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let g=new S,_=new S,E=new S;for(let w=0;w<t.length;w+=3)f(t[w+0],g),f(t[w+1],_),f(t[w+2],E),l(g,_,E,y)}function l(y,g,_,E){let w=E+1,T=[];for(let C=0;C<=w;C++){T[C]=[];let b=y.clone().lerp(_,C/w),R=g.clone().lerp(_,C/w),O=w-C;for(let B=0;B<=O;B++)B===0&&C===w?T[C][B]=b:T[C][B]=b.clone().lerp(R,B/O)}for(let C=0;C<w;C++)for(let b=0;b<2*(w-C)-1;b++){let R=Math.floor(b/2);b%2===0?(d(T[C][R+1]),d(T[C+1][R]),d(T[C][R])):(d(T[C][R+1]),d(T[C+1][R+1]),d(T[C+1][R]))}}function c(y){let g=new S;for(let _=0;_<s.length;_+=3)g.x=s[_+0],g.y=s[_+1],g.z=s[_+2],g.normalize().multiplyScalar(y),s[_+0]=g.x,s[_+1]=g.y,s[_+2]=g.z}function h(){let y=new S;for(let g=0;g<s.length;g+=3){y.x=s[g+0],y.y=s[g+1],y.z=s[g+2];let _=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(_,1-E)}v(),u()}function u(){for(let y=0;y<a.length;y+=6){let g=a[y+0],_=a[y+2],E=a[y+4],w=Math.max(g,_,E),T=Math.min(g,_,E);w>.9&&T<.1&&(g<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,g){let _=y*3;g.x=e[_+0],g.y=e[_+1],g.z=e[_+2]}function v(){let y=new S,g=new S,_=new S,E=new S,w=new te,T=new te,C=new te;for(let b=0,R=0;b<s.length;b+=9,R+=6){y.set(s[b+0],s[b+1],s[b+2]),g.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),w.set(a[R+0],a[R+1]),T.set(a[R+2],a[R+3]),C.set(a[R+4],a[R+5]),E.copy(y).add(g).add(_).divideScalar(3);let O=m(E);x(w,R+0,y,O),x(T,R+2,g,O),x(C,R+4,_,O)}}function x(y,g,_,E){E<0&&y.x===1&&(a[g]=y.x-1),_.x===0&&_.z===0&&(a[g]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}};var Sa=class r extends Rh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var rl=class r extends Dt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new S,v=new te;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=s+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),v.x=(f.x/t+1)/2,v.y=(f.y/t+1)/2,h.push(v.x,v.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,g=y,_=y+n+1,E=y+n+2,w=y+1;o.push(g,_,w),o.push(_,E,w)}}this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var En=class r extends Dt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new S,d=new S,f=[],v=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],g=p/n,_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let w=E/t;u.x=-e*Math.cos(i+w*s)*Math.sin(a+g*o),u.y=e*Math.cos(a+g*o),u.z=e*Math.sin(i+w*s)*Math.sin(a+g*o),v.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+_,1-g),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let g=h[p][y+1],_=h[p][y],E=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&f.push(g,_,w),(p!==n-1||l<Math.PI)&&f.push(_,E,w)}this.setIndex(f),this.setAttribute("position",new ot(v,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var al=class r extends Dt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new S,u=new S,d=new S;for(let f=0;f<=n;f++)for(let v=0;v<=i;v++){let x=v/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(v/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let v=1;v<=i;v++){let x=(i+1)*f+v-1,m=(i+1)*(f-1)+v-1,p=(i+1)*(f-1)+v,y=(i+1)*f+v;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ol=class extends ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_t=class extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xn=class extends _t{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ll=class extends Tn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Lo(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Hb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Vb(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tp(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function tm(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var qi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ch=class extends qi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$s,endingEnd:$s}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zs:s=e,o=2*t-n;break;case Uo:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zs:a=e,l=2*n-t;break;case Uo:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-t)/(i-t),x=v*v,m=x*v,p=-d*m+2*d*x-d*v,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*v+1,g=(-1-f)*m+(1.5+f)*x+.5*v,_=f*m-f*x;for(let E=0;E!==o;++E)s[E]=p*a[h+E]+y*a[c+E]+g*a[l+E]+_*a[u+E];return s}},cl=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Ph=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lo(t,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lo(e.times,Array),values:Lo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ch(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case ps:t=this.InterpolantFactoryMethodLinear;break;case Mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return ps;case this.InterpolantFactoryMethodSmooth:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Hb(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mc,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let v=0;v!==n;++v){let x=t[u+v];if(x!==t[d+v]||x!==t[f+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=ps;var ji=class extends qn{};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=rr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends qn{};hl.prototype.ValueTypeName="color";var Ci=class extends qn{};Ci.prototype.ValueTypeName="number";var Lh=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Lt.slerpFlat(s,0,a,c-o,a,c,l);return s}},fi=class extends qn{InterpolantFactoryMethodLinear(e){return new Lh(this.times,this.values,this.getValueSize(),e)}};fi.prototype.ValueTypeName="quaternion";fi.prototype.DefaultInterpolation=ps;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends qn{};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=rr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends qn{};Pi.prototype.ValueTypeName="vector";var mr=class{constructor(e,t=-1,n,i=Jh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Wb(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(qn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=Vb(l);l=Tp(l,1,h),c=Tp(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ci(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,v,x){if(f.length!==0){let m=[],p=[];tm(f,m,p,v),m.length!==0&&x.push(new u(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let x=0;x<d[v].morphTargets.length;x++)f[d[v].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let y=0;y!==d[v].morphTargets.length;++y){let g=d[v];m.push(g.time),p.push(g.morphTarget===x?1:0)}i.push(new Ci(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(Pi,f+".position",d,"pos",i),n(fi,f+".quaternion",d,"rot",i),n(Pi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Gb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ci;case"vector":case"vector2":case"vector3":case"vector4":return Pi;case"color":return hl;case"quaternion":return fi;case"bool":case"boolean":return ji;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Wb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Gb(r.type);if(r.times===void 0){let t=[],n=[];tm(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Vi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Ih=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],v=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return v}return null}}},Xb=new Ih,pi=class{constructor(e){this.manager=e!==void 0?e:Xb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi={},Dh=class extends Error{constructor(e,t){super(e),this.response=t}},gr=class extends pi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Vi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:i});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=wi[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,v=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:g,value:_})=>{if(g)p.close();else{x+=_.byteLength;let E=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:f});for(let w=0,T=h.length;w<T;w++){let C=h[w];C.onProgress&&C.onProgress(E)}p.enqueue(_),y()}})}}});return new Response(m)}else throw new Dh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(v=>f.decode(v))}}}).then(c=>{Vi.add(e,c);let h=wi[e];delete wi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=wi[e];if(h===void 0)throw this.manager.itemError(e),c;delete wi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var kh=class extends pi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Vi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=ma("img");function l(){h(),Vi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var vr=class extends pi{constructor(e){super(e)}load(e,t,n,i){let s=this,a=new ui,o=new gr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:wn,a.wrapT=c.wrapT!==void 0?c.wrapT:wn,a.magFilter=c.magFilter!==void 0?c.magFilter:Rt,a.minFilter=c.minFilter!==void 0?c.minFilter:Rt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Ai),c.mipmapCount===1&&(a.minFilter=Rt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}},ul=class extends pi{constructor(e){super(e)}load(e,t,n,i){let s=new pn,a=new kh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},xr=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},dl=class extends xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Jc=new Ue,Ep=new S,Ap=new S,Ta=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ep),Ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ap),t.updateMatrixWorld(),Jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Uh=class extends Ta{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ar*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},fl=class extends xr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Uh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Rp=new Ue,ra=new S,Qc=new S,Nh=class extends Ta{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ra.setFromMatrixPosition(e.matrixWorld),n.position.copy(ra),Qc.copy(n.position),Qc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Qc),n.updateMatrixWorld(),i.makeTranslation(-ra.x,-ra.y,-ra.z),Rp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rp)}},yr=class extends xr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Bh=class extends Ta{constructor(){super(new Xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_r=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Bh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $i=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var pl=class extends pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Vi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Vi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Vi.add(e,l),s.manager.itemStart(e)}};var br=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Cp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Cp(){return(typeof performance>"u"?Date:performance).now()}var Oh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Lt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let a=this._workIndex*s;Lt.multiplyQuaternionsFlat(e,a,e,t,e,n),Lt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},su="\\[\\]\\.:\\/",qb=new RegExp("["+su+"]","g"),ru="[^"+su+"]",jb="[^"+su.replace("\\.","")+"]",Yb=/((?:WC+[\/:])*)/.source.replace("WC",ru),$b=/(WCOD+)?/.source.replace("WCOD",jb),Zb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),Kb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),Jb=new RegExp("^"+Yb+$b+Zb+Kb+"$"),Qb=["material","materials","bones","map"],Fh=class{constructor(e,t,n){let i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qb,"")}static parseTrackName(e){let t=Jb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Qb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Fh;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zh=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:$s,endingEnd:$s};for(let c=0;c!==a;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=u0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case f0:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Jh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,a=n===d0;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===h0){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Zs,i.endingEnd=Zs):(e?i.endingStart=this.zeroSlopeAtStart?Zs:$s:i.endingStart=Uo,t?i.endingEnd=this.zeroSlopeAtEnd?Zs:$s:i.endingEnd=Uo)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}},eM=new Float32Array(1),ml=class extends ii{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=i[u],f=d.name,v=h[f];if(v!==void 0)++v.referenceCount,a[u]=v;else{if(v=a[u],v!==void 0){v._cacheIndex===null&&(++v.referenceCount,this._addInactiveBinding(v,l,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;v=new Oh(At.create(n,f,x),d.ValueTypeName,d.getValueSize()),++v.referenceCount,this._addInactiveBinding(v,l,f),a[u]=v}o[u].resultBuffer=v.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new cl(new Float32Array(2),new Float32Array(2),1,eM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,a=typeof e=="string"?mr.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Jh),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new zh(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?mr.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Mr=class{constructor(e,t,n=0,i=1/0){this.ray=new si(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ga,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Hh(e,this,n,t),n.sort(Pp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Hh(e[i],this,n,t);return n.sort(Pp),n}};function Pp(r,e){return r.distance-e.distance}function Hh(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)Hh(i[s],e,t,!0)}}var Ea=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Lp=new S,Io=new S,Ln=class{constructor(e=new S,t=new S){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Lp.subVectors(e,this.start),Io.subVectors(this.end,this.start);let n=Io.dot(Io),s=Io.dot(Lp)/n;return t&&(s=Yt(s,0,1)),s}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);var mi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var an=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},tM=new Xi(-1,1,1,-1,0,1),au=class extends Dt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}},nM=new au,In=class{constructor(e){this._mesh=new Ae(nM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ml=class extends an{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ln.clone(e.uniforms),this.material=new ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new In(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Pa=class extends an{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},wl=class extends an{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Sl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new te);this._width=n.width,this._height=n.height,t=new yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ct}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ml(mi),this.copyPass.material.blending=zt,this.clock=new br}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Pa!==void 0&&(a instanceof Pa?n=!0:a instanceof wl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tl=class extends an{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Se}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var nm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Tr=class r extends an{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new Se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new yt(s,a,{type:ct}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new yt(s,a,{type:ct});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new yt(s,a,{type:ct});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}let o=nm;this.highPassUniforms=ln.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ut({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new te(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=mi;this.copyUniforms=ln.clone(h.uniforms),this.blendMaterial=new ut({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:nr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Se,this.oldClearAlpha=1,this.basic=new Ut,this.fsQuad=new In(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new te(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Tr.BlurDirectionX=new te(1,0);Tr.BlurDirectionY=new te(0,1);var im={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var El=class extends an{constructor(){super();let e=im;this.uniforms=ln.clone(e.uniforms),this.material=new ol({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new In(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Aa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Er=class r extends an{constructor(e,t,n,i){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=i!==void 0?i:[],this.visibleEdgeColor=new Se(1,1,1),this.hiddenEdgeColor=new Se(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256);let s=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new yt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new vs,this.depthMaterial.side=Zt,this.depthMaterial.depthPacking=Ca,this.depthMaterial.blending=zt,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=Zt,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new yt(this.resolution.x,this.resolution.y,{type:ct}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new yt(s,a,{type:ct}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new yt(s,a,{type:ct}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new yt(Math.round(s/2),Math.round(a/2),{type:ct}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new yt(s,a,{type:ct}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new yt(Math.round(s/2),Math.round(a/2),{type:ct}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;let o=4,l=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(s,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(s/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this.getOverlayMaterial();let c=mi;this.copyUniforms=ln.clone(c.uniforms),this.materialCopy=new ut({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:zt,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Se,this.oldClearAlpha=1,this.fsQuad=new In(null),this.tempPulseColor1=new Se,this.tempPulseColor2=new Se,this.textureMatrix=new Ue;function h(u,d){let f=d.isPerspectiveCamera?"perspective":"orthographic";return u.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),i=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,i),this.renderTargetBlurBuffer1.setSize(n,i),this.renderTargetEdgeBuffer1.setSize(n,i),this.separableBlurMaterial1.uniforms.texSize.value.set(n,i),n=Math.round(n/2),i=Math.round(i/2),this.renderTargetBlurBuffer2.setSize(n,i),this.renderTargetEdgeBuffer2.setSize(n,i),this.separableBlurMaterial2.uniforms.texSize.value.set(n,i)}changeVisibilityOfSelectedObjects(e){let t=this._visibilityCache;function n(i){i.isMesh&&(e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e))}for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(n)}changeVisibilityOfNonSelectedObjects(e){let t=this._visibilityCache,n=[];function i(a){a.isMesh&&n.push(a)}for(let a=0;a<this.selectedObjects.length;a++)this.selectedObjects[a].traverse(i);function s(a){if(a.isMesh||a.isSprite){let o=!1;for(let l=0;l<n.length;l++)if(n[l].id===a.id){o=!0;break}if(o===!1){let l=a.visible;(e===!1||t.get(a)===!0)&&(a.visible=e),t.set(a,l)}}else(a.isPoints||a.isLine)&&(e===!0?a.visible=t.get(a):(t.set(a,a.visible),a.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,i,s){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,s&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);let o=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=o,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){let l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=r.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new ut({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new te(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif
					
					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new ut({uniforms:{maskTexture:{value:null},texSize:{value:new te(.5,.5)},visibleEdgeColor:{value:new S(1,1,1)},hiddenEdgeColor:{value:new S(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new ut({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new ut({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:nr,depthTest:!1,depthWrite:!1,transparent:!0})}};Er.BlurDirectionX=new te(1,0);Er.BlurDirectionY=new te(0,1);var La={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ue},cameraProjectionMatrixInverse:{value:new Ue},cameraWorldMatrix:{value:new Ue},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new S(-1,-1,-1)},sceneBoxMax:{value:new S(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0, totalWeight = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ia={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Al={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function sm(r=5){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=iM(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new S(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let s=new ui(i,e,e);return s.wrapS=Fn,s.wrapT=Fn,s.needsUpdate=!0,s}function iM(r){let e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),s=e-1;for(let a=1;a<=t;){if(i===-1&&s===e?(s=e-2,i=0):(s===e&&(s=0),i<0&&(i=e-1)),n[i*e+s]!==0){s-=2,i++;continue}else n[i*e+s]=a++;s++,i--}return n}var Da={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:ou(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraProjectionMatrixInverse:{value:new Ue},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function ou(r,e,t){let n=sM(r,e,t),i="vec3[SAMPLES](";for(let s=0;s<r;s++){let a=n[s];i+=`vec3(${a.x}, ${a.y}, ${a.z})${s<r-1?",":")"}`}return i}function sM(r,e,t){let n=[];for(let i=0;i<r;i++){let s=2*Math.PI*e*i/r,a=Math.pow(i/(r-1),t);n.push(new S(Math.cos(s),Math.sin(s),a))}return n}var Rl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}noise(e,t){let n,i,s,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,v=e-d,x=t-f,m,p;v>x?(m=1,p=0):(m=0,p=1);let y=v-m+h,g=x-p+h,_=v-1+2*h,E=x-1+2*h,w=l&255,T=c&255,C=this.perm[w+this.perm[T]]%12,b=this.perm[w+m+this.perm[T+p]]%12,R=this.perm[w+1+this.perm[T+1]]%12,O=.5-v*v-x*x;O<0?n=0:(O*=O,n=O*O*this.dot(this.grad3[C],v,x));let B=.5-y*y-g*g;B<0?i=0:(B*=B,i=B*B*this.dot(this.grad3[b],y,g));let X=.5-_*_-E*E;return X<0?s=0:(X*=X,s=X*X*this.dot(this.grad3[R],_,E)),70*(n+i+s)}noise3d(e,t,n){let i,s,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),f=1/6,v=(h+u+d)*f,x=h-v,m=u-v,p=d-v,y=e-x,g=t-m,_=n-p,E,w,T,C,b,R;y>=g?g>=_?(E=1,w=0,T=0,C=1,b=1,R=0):y>=_?(E=1,w=0,T=0,C=1,b=0,R=1):(E=0,w=0,T=1,C=1,b=0,R=1):g<_?(E=0,w=0,T=1,C=0,b=1,R=1):y<_?(E=0,w=1,T=0,C=0,b=1,R=1):(E=0,w=1,T=0,C=1,b=1,R=0);let O=y-E+f,B=g-w+f,X=_-T+f,I=y-C+2*f,W=g-b+2*f,q=_-R+2*f,ie=y-1+3*f,se=g-1+3*f,Z=_-1+3*f,ne=h&255,ae=u&255,de=d&255,K=this.perm[ne+this.perm[ae+this.perm[de]]]%12,re=this.perm[ne+E+this.perm[ae+w+this.perm[de+T]]]%12,ye=this.perm[ne+C+this.perm[ae+b+this.perm[de+R]]]%12,ge=this.perm[ne+1+this.perm[ae+1+this.perm[de+1]]]%12,Ee=.6-y*y-g*g-_*_;Ee<0?i=0:(Ee*=Ee,i=Ee*Ee*this.dot3(this.grad3[K],y,g,_));let Ne=.6-O*O-B*B-X*X;Ne<0?s=0:(Ne*=Ne,s=Ne*Ne*this.dot3(this.grad3[re],O,B,X));let Ve=.6-I*I-W*W-q*q;Ve<0?a=0:(Ve*=Ve,a=Ve*Ve*this.dot3(this.grad3[ye],I,W,q));let Be=.6-ie*ie-se*se-Z*Z;return Be<0?o=0:(Be*=Be,o=Be*Be*this.dot3(this.grad3[ge],ie,se,Z)),32*(i+s+a+o)}noise4d(e,t,n,i){let s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,f,v,x=(e+t+n+i)*l,m=Math.floor(e+x),p=Math.floor(t+x),y=Math.floor(n+x),g=Math.floor(i+x),_=(m+p+y+g)*c,E=m-_,w=p-_,T=y-_,C=g-_,b=e-E,R=t-w,O=n-T,B=i-C,X=b>R?32:0,I=b>O?16:0,W=R>O?8:0,q=b>B?4:0,ie=R>B?2:0,se=O>B?1:0,Z=X+I+W+q+ie+se,ne=a[Z][0]>=3?1:0,ae=a[Z][1]>=3?1:0,de=a[Z][2]>=3?1:0,K=a[Z][3]>=3?1:0,re=a[Z][0]>=2?1:0,ye=a[Z][1]>=2?1:0,ge=a[Z][2]>=2?1:0,Ee=a[Z][3]>=2?1:0,Ne=a[Z][0]>=1?1:0,Ve=a[Z][1]>=1?1:0,Be=a[Z][2]>=1?1:0,Qe=a[Z][3]>=1?1:0,J=b-ne+c,Bt=R-ae+c,Fe=O-de+c,Xe=B-K+c,De=b-re+2*c,gt=R-ye+2*c,$e=O-ge+2*c,D=B-Ee+2*c,P=b-Ne+3*c,$=R-Ve+3*c,fe=O-Be+3*c,he=B-Qe+3*c,pe=b-1+4*c,ke=R-1+4*c,be=O-1+4*c,Le=B-1+4*c,Oe=m&255,qe=p&255,ce=y&255,it=g&255,Ke=o[Oe+o[qe+o[ce+o[it]]]]%32,We=o[Oe+ne+o[qe+ae+o[ce+de+o[it+K]]]]%32,Pe=o[Oe+re+o[qe+ye+o[ce+ge+o[it+Ee]]]]%32,Re=o[Oe+Ne+o[qe+Ve+o[ce+Be+o[it+Qe]]]]%32,F=o[Oe+1+o[qe+1+o[ce+1+o[it+1]]]]%32,oe=.6-b*b-R*R-O*O-B*B;oe<0?h=0:(oe*=oe,h=oe*oe*this.dot4(s[Ke],b,R,O,B));let Me=.6-J*J-Bt*Bt-Fe*Fe-Xe*Xe;Me<0?u=0:(Me*=Me,u=Me*Me*this.dot4(s[We],J,Bt,Fe,Xe));let Ce=.6-De*De-gt*gt-$e*$e-D*D;Ce<0?d=0:(Ce*=Ce,d=Ce*Ce*this.dot4(s[Pe],De,gt,$e,D));let j=.6-P*P-$*$-fe*fe-he*he;j<0?f=0:(j*=j,f=j*j*this.dot4(s[Re],P,$,fe,he));let G=.6-pe*pe-ke*ke-be*be-Le*Le;return G<0?v=0:(G*=G,v=G*G*this.dot4(s[F],pe,ke,be,Le)),27*(h+u+d+f+v)}};var Ar=class r extends an{constructor(e,t,n,i,s,a,o){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=sm(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new yt(this.width,this.height,{type:ct}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ut({defines:Object.assign({},La.defines),uniforms:ln.clone(La.uniforms),vertexShader:La.vertexShader,fragmentShader:La.fragmentShader,blending:zt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ll,this.normalMaterial.blending=zt,this.pdMaterial=new ut({defines:Object.assign({},Da.defines),uniforms:ln.clone(Da.uniforms),vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ut({defines:Object.assign({},Ia.defines),uniforms:ln.clone(Ia.uniforms),vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader,blending:zt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ut({uniforms:ln.clone(mi.uniforms),vertexShader:mi.vertexShader,fragmentShader:mi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:vl,blendDst:wr,blendEquation:Gn,blendSrcAlpha:gl,blendDstAlpha:wr,blendEquationAlpha:Gn}),this.blendMaterial=new ut({uniforms:ln.clone(Al.uniforms),vertexShader:Al.vertexShader,fragmentShader:Al.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Wh,blendSrc:vl,blendDst:wr,blendEquation:Gn,blendSrcAlpha:gl,blendDstAlpha:wr,blendEquationAlpha:Gn}),this.fsQuad=new In(null),this.originalClearColor=new Se,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new cr,this.depthTexture.format=Wi,this.depthTexture.type=Ei,this.normalRenderTarget=new yt(this.width,this.height,{minFilter:kt,magFilter:kt,type:ct,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=ou(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,s){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,i,s){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){let t=new Rl,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let s=new ui(i,e,e,xn,hi);return s.wrapS=Fn,s.wrapT=Fn,s.needsUpdate=!0,s}};Ar.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var rm={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var Cl=class extends an{constructor(e,t,n){super(),this.scene=e,this.camera=t;let i=n.focus!==void 0?n.focus:1,s=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new yt(1,1,{minFilter:kt,magFilter:kt,type:ct}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new vs,this.materialDepth.depthPacking=Ca,this.materialDepth.blending=zt;let o=rm,l=ln.clone(o.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=i,l.aspect.value=t.aspect,l.aperture.value=s,l.maxblur.value=a,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new ut({defines:Object.assign({},o.defines),uniforms:l,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=l,this.fsQuad=new In(this.materialBokeh),this._oldClearColor=new Se}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);let i=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(i),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}};var Pl=class extends hr{constructor(e=null){super();let t=new Pn;t.deleteAttribute("uv");let n=new _t({side:Qt}),i=new _t,s=5;e!==null&&e._useLegacyLights===!1&&(s=900);let a=new yr(16777215,s,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Ae(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new Ae(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Ae(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Ae(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Ae(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new Ae(t,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new Ae(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let v=new Ae(t,Rr(50));v.position.set(-16.116,14.37,8.208),v.scale.set(.1,2.428,2.739),this.add(v);let x=new Ae(t,Rr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Ae(t,Rr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new Ae(t,Rr(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new Ae(t,Rr(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let g=new Ae(t,Rr(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Rr(r){let e=new Ut;return e.color.setScalar(r),e}var Li=["cinematic","ultra","high","balanced","performance"],Cr={cinematic:{label:"Cinematic Maximum",pixelRatio:2,msaa:4,shadow:4096,softShadow:!1,ao:!0,bloom:!0,dof:!0,aniso:16},ultra:{label:"Ultra",pixelRatio:1.75,msaa:4,shadow:4096,softShadow:!1,ao:!0,bloom:!0,dof:!0,aniso:8},high:{label:"High",pixelRatio:1.5,msaa:4,shadow:2048,softShadow:!1,ao:!1,bloom:!0,dof:!1,aniso:8},balanced:{label:"Balanced",pixelRatio:1.25,msaa:2,shadow:1024,softShadow:!1,ao:!1,bloom:!1,dof:!1,aniso:4},performance:{label:"Performance",pixelRatio:1,msaa:0,shadow:0,softShadow:!1,ao:!1,bloom:!1,dof:!1,aniso:1}};function am(){let r={webgl2:!1,webgpu:"gpu"in navigator,gpu:"unknown",maxTexture:0,dpr:window.devicePixelRatio||1,memory:navigator.deviceMemory||null,touch:matchMedia("(pointer: coarse)").matches,software:!1,screen:`${screen.width}\xD7${screen.height}`};try{let t=document.createElement("canvas").getContext("webgl2");if(t){r.webgl2=!0,r.maxTexture=t.getParameter(t.MAX_TEXTURE_SIZE);let n=t.getExtension("WEBGL_debug_renderer_info");r.gpu=n?t.getParameter(n.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER),r.software=/swiftshader|llvmpipe|software|basic render/i.test(r.gpu),t.getExtension("WEBGL_lose_context")?.loseContext()}}catch{}return r}function om(r){return r.software?"performance":r.touch?r.memory&&r.memory>=8?"high":"balanced":r.memory&&r.memory<=4?"balanced":"cinematic"}var Ll=class{constructor(e,t){this.caps=t,this.renderer=new xa({canvas:e,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.renderer.outputColorSpace=xt,this.renderer.toneMapping=Aa,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.scene=new hr,this.camera=new nn(62,1,.05,5e3),this.presetName="cinematic",this.auto=!0,this.fpsSamples=[],this.lastDrop=0,this.onAutoChange=null,this.dofActive=!1;let n=new lr(this.renderer);this.defaultEnv=n.fromScene(new Pl(this.renderer),.04).texture,this.pmrem=n,this.scene.environment=this.defaultEnv,window.addEventListener("resize",()=>this.resize())}setEnvironmentTexture(e,t){let n=this.pmrem.fromEquirectangular(e).texture;this.scene.environment=n,t&&(this.scene.background=e,this.scene.backgroundBlurriness=0)}apply(e,{manual:t=!1}={}){Cr[e]||(e="balanced"),t&&(this.auto=!1),this.presetName=e;let n=Cr[e],i=this.renderer;i.setPixelRatio(Math.min(n.pixelRatio,this.caps.dpr||1)),i.shadowMap.enabled=n.shadow>0,i.shadowMap.type=n.softShadow?ti:Gh,this.scene.traverse(s=>{if(s.isLight&&s.shadow&&s.castShadow&&(s.shadow.mapSize.set(n.shadow||512,n.shadow||512),s.shadow.map?.dispose(),s.shadow.map=null,n.softShadow&&(s.shadow.radius=6,s.shadow.blurSamples=12)),s.isMesh&&s.material)for(let a of[].concat(s.material)){for(let o of["map","normalMap","roughnessMap","metalnessMap","emissiveMap","aoMap"])a[o]&&(a[o].anisotropy=Math.min(n.aniso,i.capabilities.getMaxAnisotropy()),a[o].needsUpdate=!0);a.needsUpdate=!0}}),this.buildComposer(),this.resize()}buildComposer(){let e=Cr[this.presetName],t=this.renderer.getSize(new te);this.composer?.dispose?.();let n=new yt(Math.max(1,t.x),Math.max(1,t.y),{type:ct,samples:e.msaa}),i=new Sl(this.renderer,n);if(i.addPass(new Tl(this.scene,this.camera)),e.ao){let s=new Ar(this.scene,this.camera,t.x,t.y);s.output=Ar.OUTPUT.Default,s.blendIntensity=.85,i.addPass(s)}this.outline=new Er(new te(t.x,t.y),this.scene,this.camera),this.outline.edgeStrength=3.2,this.outline.edgeGlow=.6,this.outline.edgeThickness=1.2,this.outline.visibleEdgeColor.set("#ffd98a"),this.outline.hiddenEdgeColor.set("#5a4a8a"),i.addPass(this.outline),e.bloom?(this.bloom=new Tr(new te(t.x,t.y),.22,.5,1),i.addPass(this.bloom)):this.bloom=null,e.dof?(this.bokeh=new Cl(this.scene,this.camera,{focus:12,aperture:12e-5,maxblur:.006}),this.bokeh.enabled=this.dofActive,i.addPass(this.bokeh)):this.bokeh=null,i.addPass(new El),this.composer=i}setDof(e,t){this.dofActive=e,this.bokeh&&(this.bokeh.enabled=e,t&&(this.bokeh.uniforms.focus.value=t))}setHighlight(e){this.outline&&(this.outline.selectedObjects=e||[])}resize(){let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.composer?.setSize(e,t)}trackFps(e,t){if(!this.auto||e<=0||(this.fpsSamples.push(1/e),this.fpsSamples.length<150))return;let n=this.fpsSamples.reduce((s,a)=>s+a,0)/this.fpsSamples.length;this.fpsSamples.length=0;let i=Li.indexOf(this.presetName);n<26&&i<Li.length-1&&t-this.lastDrop>5&&(this.lastDrop=t,this.apply(Li[i+1]),this.onAutoChange?.(this.presetName,n))}render(){this.composer.render()}snapshot(){return this.render(),this.renderer.domElement.toDataURL("image/jpeg",.92)}};function lu(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Dt,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let v=0;v<f.count;++v)u.push(f.getX(v)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=lm(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let v=lm(f);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function lm(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}let a=new e(s),o=0;for(let c=0;c<r.length;++c)a.set(r[c].array,o),o+=r[c].array.length;let l=new Ht(a,t,n);return i!==void 0&&(l.gpuType=i),l}function cu(r,e){if(e===Vp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ra||e===yl){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Ra)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Il=class extends pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=$i.extractUrlBase(e);a=$i.resolveURL(c,this.path)}else a=$i.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new gr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===fm){try{a[lt.KHR_BINARY_GLTF]=new Pu(e)}catch(u){i&&i(u);return}s=JSON.parse(a[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Bu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case lt.KHR_MATERIALS_UNLIT:a[u]=new pu;break;case lt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Lu(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:a[u]=new Iu;break;case lt.KHR_MESH_QUANTIZATION:a[u]=new Du;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function rM(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fu=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],It);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new _r(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new yr(h),c.distance=u;break;case"spot":c=new fl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Qi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},pu=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ut}extendParams(e,t,n){let i=[];e.color=new Se(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],It),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,xt))}return Promise.all(i)}},mu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},gu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(o,o)}return Promise.all(s)}},vu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},xu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],It)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,xt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},yu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},_u=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(o[0],o[1],o[2],It),Promise.all(s)}},bu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Mu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(o[0],o[1],o[2],It),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,xt)),Promise.all(s)}},wu=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},Su=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},Tu=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Eu=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Au=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ru=class{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Cu=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Yn.TRIANGLES&&c.mode!==Yn.TRIANGLE_STRIP&&c.mode!==Yn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let v of u){let x=new Ue,m=new S,p=new Lt,y=new S(1,1,1),g=new Ko(v.geometry,v.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),g.setMatrixAt(_,x.compose(m,p,y));for(let _ in l)if(_==="_COLOR_0"){let E=l[_];g.instanceColor=new _s(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&v.geometry.setAttribute(_,l[_]);Vt.prototype.copy.call(g,v),this.parser.assignFinalMaterial(g),f.push(g)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},fm="glTF",ka=12,cm={JSON:1313821514,BIN:5130562},Pu=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ka),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ka,s=new DataView(e,ka),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===cm.JSON){let c=new Uint8Array(e,ka+a,o);this.content=n.decode(c)}else if(l===cm.BIN){let c=ka+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Lu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Uu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Uu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Pr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let v in f.attributes){let x=f.attributes[v],m=l[v];m!==void 0&&(x.normalized=m)}u(f)},o,c,It,d)})})}},Iu=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Du=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},Dl=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,v=e*c,x=v-c,m=-2*f+3*d,p=f-d,y=1-m,g=p-d+u;for(let _=0;_!==o;_++){let E=a[x+_+o],w=a[x+_+l]*h,T=a[v+_+o],C=a[v+_]*h;s[_]=y*E+g*w+m*T+p*C}return s}},aM=new Lt,ku=class extends Dl{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return aM.fromArray(s).normalize().toArray(s),s}},Yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hm={9728:kt,9729:Rt,9984:ko,9985:$h,9986:aa,9987:Ai},um={33071:wn,33648:pa,10497:Fn},hu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oM={CUBICSPLINE:void 0,LINEAR:ps,STEP:rr},uu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new _t({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:On})),r.DefaultMaterial}function Ts(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cM(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function hM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uM(r){let e,t=r.extensions&&r.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+du(t.attributes):e=r.indices+":"+du(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+du(r.targets[n]);return e}function du(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Nu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var fM=new Ue,Bu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new ul(this.options.manager):this.textureLoader=new pl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ts(s,o,i),Qi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load($i.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=hu[i.type],o=Pr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ht(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=hu[i.type],c=Pr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,g=t.cache.get(y);g||(x=new c(o,p*f,i.count*f/h),g=new ur(x,f/h),t.cache.add(y,g)),m=new xs(g,l,d%f/h,v)}else o===null?x=new c(i.count*l):x=new c(o,d,i.count*l),m=new Ht(x,l,v);if(i.sparse!==void 0){let p=hu.SCALAR,y=Pr[i.sparse.indices.componentType],g=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,E=new y(a[1],g,i.sparse.count*p),w=new c(a[2],_,i.sparse.count*l);o!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized));for(let T=0,C=E.length;T<C;T++){let b=E[T];if(m.setX(b,w[T*l]),l>=2&&m.setY(b,w[T*l+1]),l>=3&&m.setZ(b,w[T*l+2]),l>=4&&m.setW(b,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=hm[d.magFilter]||Rt,h.minFilter=hm[d.minFilter]||Ai,h.wrapS=um[d.wrapS]||Fn,h.wrapT=um[d.wrapT]||Fn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let v=d;t.isImageBitmapLoader===!0&&(v=function(x){let m=new pn(x);m.needsUpdate=!0,d(m)}),t.load($i.resolveURL(u,s.path),v,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||dM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ba,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new _a,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return _t}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){let u=i[lt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],It),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,xt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Zt);let h=s.alphaMode||uu.OPAQUE;if(h===uu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===uu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Ut&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new te(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Ut&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Ut){let u=s.emissiveFactor;o.emissive=new Se().setRGB(u[0],u[1],u[2],It)}return s.emissiveTexture!==void 0&&a!==Ut&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,xt)),Promise.all(c).then(function(){let u=new a(o);return s.name&&(u.name=s.name),Qi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ts(i,u,s),u})}createUniqueName(e){let t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return dm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=uM(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=dm(new Dt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?lM(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,v=h.length;f<v;f++){let x=h[f],m=a[f],p,y=c[f];if(m.mode===Yn.TRIANGLES||m.mode===Yn.TRIANGLE_STRIP||m.mode===Yn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new $o(x,y):new Ae(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Yn.TRIANGLE_STRIP?p.geometry=cu(p.geometry,yl):m.mode===Yn.TRIANGLE_FAN&&(p.geometry=cu(p.geometry,Ra));else if(m.mode===Yn.LINES)p=new Jo(x,y);else if(m.mode===Yn.LINE_STRIP)p=new fr(x,y);else if(m.mode===Yn.LINE_LOOP)p=new Qo(x,y);else if(m.mode===Yn.POINTS)p=new el(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&hM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Qi(p,s),m.extensions&&Ts(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,v=u.length;f<v;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Ts(i,u[0],s),u[0];let d=new Mt;s.extensions&&Ts(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,v=u.length;f<v;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(jn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Xi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ue;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Zo(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],v=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[v.input]:v.input,y=i.parameters!==void 0?i.parameters[v.output]:v.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(v),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],v=u[2],x=u[3],m=u[4],p=[];for(let y=0,g=d.length;y<g;y++){let _=d[y],E=f[y],w=v[y],T=x[y],C=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let b=n._createAnimationTracks(_,E,w,T,C);if(b)for(let R=0;R<b.length;R++)p.push(b[R])}return new mr(s,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,fM)});for(let f=0,v=u.length;f<v;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new ya:c.length>1?h=new Mt:c.length===1?h=c[0]:h=new Vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Qi(h,s),s.extensions&&Ts(n,h,s),s.matrix!==void 0){let u=new Ue;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Mt;n.name&&(s.name=i.createUniqueName(n.name)),Qi(s,n),n.extensions&&Ts(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Tn||d instanceof pn)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,l=[];Ji[s.path]===Ji.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Ji[s.path]){case Ji.weights:c=Ci;break;case Ji.rotation:c=fi;break;case Ji.position:case Ji.scale:c=Pi;break;default:switch(n.itemSize){case 1:c=Ci;break;case 2:case 3:default:c=Pi;break}break}let h=i.interpolation!==void 0?oM[i.interpolation]:ps,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let v=new c(l[d]+"."+Ji[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Nu(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof fi?ku:Dl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function pM(r,e,t){let n=e.attributes,i=new et;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new S(l[0],l[1],l[2]),new S(c[0],c[1],c[2])),o.normalized){let h=Nu(Pr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new S,l=new S;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,v=d.max;if(f!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),d.normalized){let x=Nu(Pr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Sn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function dm(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=Uu[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return ft.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),Qi(r,e),pM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?cM(r,e.targets,t):r})}var kl=class extends vr{constructor(e){super(e),this.type=ct}parse(e){let a=function(C,b){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(b||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(b||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(b||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(b||""))}},h=`
`,u=function(C,b,R){b=b||1024;let B=C.pos,X=-1,I=0,W="",q=String.fromCharCode.apply(null,new Uint16Array(C.subarray(B,B+128)));for(;0>(X=q.indexOf(h))&&I<b&&B<C.byteLength;)W+=q,I+=q.length,B+=128,q+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(B,B+128)));return-1<X?(R!==!1&&(C.pos+=I+X+1),W+q.slice(0,X)):!1},d=function(C){let b=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,X=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,I={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},W,q;for((C.pos>=C.byteLength||!(W=u(C)))&&a(1,"no header found"),(q=W.match(b))||a(3,"bad initial token"),I.valid|=1,I.programtype=q[1],I.string+=W+`
`;W=u(C),W!==!1;){if(I.string+=W+`
`,W.charAt(0)==="#"){I.comments+=W+`
`;continue}if((q=W.match(R))&&(I.gamma=parseFloat(q[1])),(q=W.match(O))&&(I.exposure=parseFloat(q[1])),(q=W.match(B))&&(I.valid|=2,I.format=q[1]),(q=W.match(X))&&(I.valid|=4,I.height=parseInt(q[1],10),I.width=parseInt(q[2],10)),I.valid&2&&I.valid&4)break}return I.valid&2||a(3,"missing format specifier"),I.valid&4||a(3,"missing image size specifier"),I},f=function(C,b,R){let O=b;if(O<8||O>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);O!==(C[2]<<8|C[3])&&a(3,"wrong scanline width");let B=new Uint8Array(4*b*R);B.length||a(4,"unable to allocate buffer space");let X=0,I=0,W=4*O,q=new Uint8Array(4),ie=new Uint8Array(W),se=R;for(;se>0&&I<C.byteLength;){I+4>C.byteLength&&a(1),q[0]=C[I++],q[1]=C[I++],q[2]=C[I++],q[3]=C[I++],(q[0]!=2||q[1]!=2||(q[2]<<8|q[3])!=O)&&a(3,"bad rgbe scanline format");let Z=0,ne;for(;Z<W&&I<C.byteLength;){ne=C[I++];let de=ne>128;if(de&&(ne-=128),(ne===0||Z+ne>W)&&a(3,"bad scanline data"),de){let K=C[I++];for(let re=0;re<ne;re++)ie[Z++]=K}else ie.set(C.subarray(I,I+ne),Z),Z+=ne,I+=ne}let ae=O;for(let de=0;de<ae;de++){let K=0;B[X]=ie[de+K],K+=O,B[X+1]=ie[de+K],K+=O,B[X+2]=ie[de+K],K+=O,B[X+3]=ie[de+K],X+=4}se--}return B},v=function(C,b,R,O){let B=C[b+3],X=Math.pow(2,B-128)/255;R[O+0]=C[b+0]*X,R[O+1]=C[b+1]*X,R[O+2]=C[b+2]*X,R[O+3]=1},x=function(C,b,R,O){let B=C[b+3],X=Math.pow(2,B-128)/255;R[O+0]=Zi.toHalfFloat(Math.min(C[b+0]*X,65504)),R[O+1]=Zi.toHalfFloat(Math.min(C[b+1]*X,65504)),R[O+2]=Zi.toHalfFloat(Math.min(C[b+2]*X,65504)),R[O+3]=Zi.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=d(m),y=p.width,g=p.height,_=f(m.subarray(m.pos),y,g),E,w,T;switch(this.type){case fn:T=_.length/4;let C=new Float32Array(T*4);for(let R=0;R<T;R++)v(_,R*4,C,R*4);E=C,w=fn;break;case ct:T=_.length/4;let b=new Uint16Array(T*4);for(let R=0;R<T;R++)x(_,R*4,b,R*4);E=b,w=ct;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:y,height:g,data:E,header:p.string,gamma:p.gamma,exposure:p.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){switch(a.type){case fn:case ct:a.colorSpace=It,a.minFilter=Rt,a.magFilter=Rt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,i)}};var pm=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))},mM=function(r){return new Worker(r)};try{URL.revokeObjectURL(pm(""))}catch{pm=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},mM=function(e){return new Worker(e,{type:"module"})}}var $n=Uint8Array,es=Uint16Array,zu=Uint32Array,mm=new $n([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),gm=new $n([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),gM=new $n([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),vm=function(r,e){for(var t=new es(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new zu(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return[t,i]},xm=vm(mm,2),ym=xm[0],vM=xm[1];ym[28]=258,vM[258]=28;var _m=vm(gm,0),xM=_m[0],ES=_m[1],Hu=new es(32768);for(vt=0;vt<32768;++vt)Ii=(vt&43690)>>>1|(vt&21845)<<1,Ii=(Ii&52428)>>>2|(Ii&13107)<<2,Ii=(Ii&61680)>>>4|(Ii&3855)<<4,Hu[vt]=((Ii&65280)>>>8|(Ii&255)<<8)>>>1;var Ii,vt,Ua=function(r,e,t){for(var n=r.length,i=0,s=new es(e);i<n;++i)++s[r[i]-1];var a=new es(e);for(i=0;i<e;++i)a[i]=a[i-1]+s[i-1]<<1;var o;if(t){o=new es(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=e-r[i],u=a[r[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[Hu[u]>>>l]=c}else for(o=new es(n),i=0;i<n;++i)r[i]&&(o[i]=Hu[a[r[i]-1]++]>>>15-r[i]);return o},Na=new $n(288);for(vt=0;vt<144;++vt)Na[vt]=8;var vt;for(vt=144;vt<256;++vt)Na[vt]=9;var vt;for(vt=256;vt<280;++vt)Na[vt]=7;var vt;for(vt=280;vt<288;++vt)Na[vt]=8;var vt,bm=new $n(32);for(vt=0;vt<32;++vt)bm[vt]=5;var vt;var yM=Ua(Na,9,1);var _M=Ua(bm,5,1),Ou=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},ri=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Fu=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},bM=function(r){return(r/8|0)+(r&7&&1)},MM=function(r,e,t){(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length);var n=new(r instanceof es?es:r instanceof zu?zu:$n)(t-e);return n.set(r.subarray(e,t)),n},wM=function(r,e,t){var n=r.length;if(!n||t&&!t.l&&n<5)return e||new $n(0);var i=!e||t,s=!t||t.i;t||(t={}),e||(e=new $n(n*3));var a=function(ge){var Ee=e.length;if(ge>Ee){var Ne=new $n(Math.max(Ee*2,ge));Ne.set(e),e=Ne}},o=t.f||0,l=t.p||0,c=t.b||0,h=t.l,u=t.d,d=t.m,f=t.n,v=n*8;do{if(!h){t.f=o=ri(r,l,1);var x=ri(r,l+1,3);if(l+=3,x)if(x==1)h=yM,u=_M,d=9,f=5;else if(x==2){var g=ri(r,l,31)+257,_=ri(r,l+10,15)+4,E=g+ri(r,l+5,31)+1;l+=14;for(var w=new $n(E),T=new $n(19),C=0;C<_;++C)T[gM[C]]=ri(r,l+C*3,7);l+=_*3;for(var b=Ou(T),R=(1<<b)-1,O=Ua(T,b,1),C=0;C<E;){var B=O[ri(r,l,R)];l+=B&15;var m=B>>>4;if(m<16)w[C++]=m;else{var X=0,I=0;for(m==16?(I=3+ri(r,l,3),l+=2,X=w[C-1]):m==17?(I=3+ri(r,l,7),l+=3):m==18&&(I=11+ri(r,l,127),l+=7);I--;)w[C++]=X}}var W=w.subarray(0,g),q=w.subarray(g);d=Ou(W),f=Ou(q),h=Ua(W,d,1),u=Ua(q,f,1)}else throw"invalid block type";else{var m=bM(l)+4,p=r[m-4]|r[m-3]<<8,y=m+p;if(y>n){if(s)throw"unexpected EOF";break}i&&a(c+p),e.set(r.subarray(m,y),c),t.b=c+=p,t.p=l=y*8;continue}if(l>v){if(s)throw"unexpected EOF";break}}i&&a(c+131072);for(var ie=(1<<d)-1,se=(1<<f)-1,Z=l;;Z=l){var X=h[Fu(r,l)&ie],ne=X>>>4;if(l+=X&15,l>v){if(s)throw"unexpected EOF";break}if(!X)throw"invalid length/literal";if(ne<256)e[c++]=ne;else if(ne==256){Z=l,h=null;break}else{var ae=ne-254;if(ne>264){var C=ne-257,de=mm[C];ae=ri(r,l,(1<<de)-1)+ym[C],l+=de}var K=u[Fu(r,l)&se],re=K>>>4;if(!K)throw"invalid distance";l+=K&15;var q=xM[re];if(re>3){var de=gm[re];q+=Fu(r,l)&(1<<de)-1,l+=de}if(l>v){if(s)throw"unexpected EOF";break}i&&a(c+131072);for(var ye=c+ae;c<ye;c+=4)e[c]=e[c-q],e[c+1]=e[c+1-q],e[c+2]=e[c+2-q],e[c+3]=e[c+3-q];c=ye}}t.l=h,t.p=Z,t.b=c,h&&(o=1,t.m=d,t.d=u,t.n=f)}while(!o);return c==e.length?e:MM(e,0,c)};var SM=new $n(0);var TM=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Ba(r,e){return wM((TM(r),r.subarray(2,-4)),e)}var EM=typeof TextDecoder<"u"&&new TextDecoder,AM=0;try{EM.decode(SM,{stream:!0}),AM=1}catch{}var Ul=class extends vr{constructor(e){super(e),this.type=ct}parse(e){let b=Math.pow(2.7182818,2.2);function R(A,L){let V=0;for(let k=0;k<65536;++k)(k==0||A[k>>3]&1<<(k&7))&&(L[V++]=k);let M=V-1;for(;V<65536;)L[V++]=0;return M}function O(A){for(let L=0;L<16384;L++)A[L]={},A[L].len=0,A[L].lit=0,A[L].p=null}let B={l:0,c:0,lc:0};function X(A,L,V,M,k){for(;V<A;)L=L<<8|Re(M,k),V+=8;V-=A,B.l=L>>V&(1<<A)-1,B.c=L,B.lc=V}let I=new Array(59);function W(A){for(let V=0;V<=58;++V)I[V]=0;for(let V=0;V<65537;++V)I[A[V]]+=1;let L=0;for(let V=58;V>0;--V){let M=L+I[V]>>1;I[V]=L,L=M}for(let V=0;V<65537;++V){let M=A[V];M>0&&(A[V]=M|I[M]++<<6)}}function q(A,L,V,M,k,N){let z=L,H=0,Q=0;for(;M<=k;M++){if(z.value-L.value>V)return!1;X(6,H,Q,A,z);let Y=B.l;if(H=B.c,Q=B.lc,N[M]=Y,Y==63){if(z.value-L.value>V)throw new Error("Something wrong with hufUnpackEncTable");X(8,H,Q,A,z);let ee=B.l+6;if(H=B.c,Q=B.lc,M+ee>k+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ee--;)N[M++]=0;M--}else if(Y>=59){let ee=Y-59+2;if(M+ee>k+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ee--;)N[M++]=0;M--}}W(N)}function ie(A){return A&63}function se(A){return A>>6}function Z(A,L,V,M){for(;L<=V;L++){let k=se(A[L]),N=ie(A[L]);if(k>>N)throw new Error("Invalid table entry");if(N>14){let z=M[k>>N-14];if(z.len)throw new Error("Invalid table entry");if(z.lit++,z.p){let H=z.p;z.p=new Array(z.lit);for(let Q=0;Q<z.lit-1;++Q)z.p[Q]=H[Q]}else z.p=new Array(1);z.p[z.lit-1]=L}else if(N){let z=0;for(let H=1<<14-N;H>0;H--){let Q=M[(k<<14-N)+z];if(Q.len||Q.p)throw new Error("Invalid table entry");Q.len=N,Q.lit=L,z++}}}return!0}let ne={c:0,lc:0};function ae(A,L,V,M){A=A<<8|Re(V,M),L+=8,ne.c=A,ne.lc=L}let de={c:0,lc:0};function K(A,L,V,M,k,N,z,H,Q){if(A==L){M<8&&(ae(V,M,k,N),V=ne.c,M=ne.lc),M-=8;let Y=V>>M;if(Y=new Uint8Array([Y])[0],H.value+Y>Q)return!1;let ee=z[H.value-1];for(;Y-- >0;)z[H.value++]=ee}else if(H.value<Q)z[H.value++]=A;else return!1;de.c=V,de.lc=M}function re(A){return A&65535}function ye(A){let L=re(A);return L>32767?L-65536:L}let ge={a:0,b:0};function Ee(A,L){let V=ye(A),k=ye(L),N=V+(k&1)+(k>>1),z=N,H=N-k;ge.a=z,ge.b=H}function Ne(A,L){let V=re(A),M=re(L),k=V-(M>>1)&65535,N=M+k-32768&65535;ge.a=N,ge.b=k}function Ve(A,L,V,M,k,N,z){let H=z<16384,Q=V>k?k:V,Y=1,ee,le;for(;Y<=Q;)Y<<=1;for(Y>>=1,ee=Y,Y>>=1;Y>=1;){le=0;let ue=le+N*(k-ee),me=N*Y,xe=N*ee,_e=M*Y,Ie=M*ee,ze,mt,Ze,je;for(;le<=ue;le+=xe){let bt=le,He=le+M*(V-ee);for(;bt<=He;bt+=Ie){let Tt=bt+_e,yn=bt+me,Ft=yn+_e;H?(Ee(A[bt+L],A[yn+L]),ze=ge.a,Ze=ge.b,Ee(A[Tt+L],A[Ft+L]),mt=ge.a,je=ge.b,Ee(ze,mt),A[bt+L]=ge.a,A[Tt+L]=ge.b,Ee(Ze,je),A[yn+L]=ge.a,A[Ft+L]=ge.b):(Ne(A[bt+L],A[yn+L]),ze=ge.a,Ze=ge.b,Ne(A[Tt+L],A[Ft+L]),mt=ge.a,je=ge.b,Ne(ze,mt),A[bt+L]=ge.a,A[Tt+L]=ge.b,Ne(Ze,je),A[yn+L]=ge.a,A[Ft+L]=ge.b)}if(V&Y){let Tt=bt+me;H?Ee(A[bt+L],A[Tt+L]):Ne(A[bt+L],A[Tt+L]),ze=ge.a,A[Tt+L]=ge.b,A[bt+L]=ze}}if(k&Y){let bt=le,He=le+M*(V-ee);for(;bt<=He;bt+=Ie){let Tt=bt+_e;H?Ee(A[bt+L],A[Tt+L]):Ne(A[bt+L],A[Tt+L]),ze=ge.a,A[Tt+L]=ge.b,A[bt+L]=ze}}ee=Y,Y>>=1}return le}function Be(A,L,V,M,k,N,z,H,Q){let Y=0,ee=0,le=z,ue=Math.trunc(M.value+(k+7)/8);for(;M.value<ue;)for(ae(Y,ee,V,M),Y=ne.c,ee=ne.lc;ee>=14;){let xe=Y>>ee-14&16383,_e=L[xe];if(_e.len)ee-=_e.len,K(_e.lit,N,Y,ee,V,M,H,Q,le),Y=de.c,ee=de.lc;else{if(!_e.p)throw new Error("hufDecode issues");let Ie;for(Ie=0;Ie<_e.lit;Ie++){let ze=ie(A[_e.p[Ie]]);for(;ee<ze&&M.value<ue;)ae(Y,ee,V,M),Y=ne.c,ee=ne.lc;if(ee>=ze&&se(A[_e.p[Ie]])==(Y>>ee-ze&(1<<ze)-1)){ee-=ze,K(_e.p[Ie],N,Y,ee,V,M,H,Q,le),Y=de.c,ee=de.lc;break}}if(Ie==_e.lit)throw new Error("hufDecode issues")}}let me=8-k&7;for(Y>>=me,ee-=me;ee>0;){let xe=L[Y<<14-ee&16383];if(xe.len)ee-=xe.len,K(xe.lit,N,Y,ee,V,M,H,Q,le),Y=de.c,ee=de.lc;else throw new Error("hufDecode issues")}return!0}function Qe(A,L,V,M,k,N){let z={value:0},H=V.value,Q=Pe(L,V),Y=Pe(L,V);V.value+=4;let ee=Pe(L,V);if(V.value+=4,Q<0||Q>=65537||Y<0||Y>=65537)throw new Error("Something wrong with HUF_ENCSIZE");let le=new Array(65537),ue=new Array(16384);O(ue);let me=M-(V.value-H);if(q(A,V,me,Q,Y,le),ee>8*(M-(V.value-H)))throw new Error("Something wrong with hufUncompress");Z(le,Q,Y,ue),Be(le,ue,A,V,ee,Y,N,k,z)}function J(A,L,V){for(let M=0;M<V;++M)L[M]=A[L[M]]}function Bt(A){for(let L=1;L<A.length;L++){let V=A[L-1]+A[L]-128;A[L]=V}}function Fe(A,L){let V=0,M=Math.floor((A.length+1)/2),k=0,N=A.length-1;for(;!(k>N||(L[k++]=A[V++],k>N));)L[k++]=A[M++]}function Xe(A){let L=A.byteLength,V=new Array,M=0,k=new DataView(A);for(;L>0;){let N=k.getInt8(M++);if(N<0){let z=-N;L-=z+1;for(let H=0;H<z;H++)V.push(k.getUint8(M++))}else{let z=N;L-=2;let H=k.getUint8(M++);for(let Q=0;Q<z+1;Q++)V.push(H)}}return V}function De(A,L,V,M,k,N){let z=new DataView(N.buffer),H=V[A.idx[0]].width,Q=V[A.idx[0]].height,Y=3,ee=Math.floor(H/8),le=Math.ceil(H/8),ue=Math.ceil(Q/8),me=H-(le-1)*8,xe=Q-(ue-1)*8,_e={value:0},Ie=new Array(Y),ze=new Array(Y),mt=new Array(Y),Ze=new Array(Y),je=new Array(Y);for(let He=0;He<Y;++He)je[He]=L[A.idx[He]],Ie[He]=He<1?0:Ie[He-1]+le*ue,ze[He]=new Float32Array(64),mt[He]=new Uint16Array(64),Ze[He]=new Uint16Array(le*64);for(let He=0;He<ue;++He){let Tt=8;He==ue-1&&(Tt=xe);let yn=8;for(let dt=0;dt<le;++dt){dt==le-1&&(yn=me);for(let Je=0;Je<Y;++Je)mt[Je].fill(0),mt[Je][0]=k[Ie[Je]++],gt(_e,M,mt[Je]),$e(mt[Je],ze[Je]),D(ze[Je]);Y==3&&P(ze);for(let Je=0;Je<Y;++Je)$(ze[Je],Ze[Je],dt*64)}let Ft=0;for(let dt=0;dt<Y;++dt){let Je=V[A.idx[dt]].type;for(let dn=8*He;dn<8*He+Tt;++dn){Ft=je[dt][dn];for(let vi=0;vi<ee;++vi){let Xt=vi*64+(dn&7)*8;z.setUint16(Ft+0*2*Je,Ze[dt][Xt+0],!0),z.setUint16(Ft+1*2*Je,Ze[dt][Xt+1],!0),z.setUint16(Ft+2*2*Je,Ze[dt][Xt+2],!0),z.setUint16(Ft+3*2*Je,Ze[dt][Xt+3],!0),z.setUint16(Ft+4*2*Je,Ze[dt][Xt+4],!0),z.setUint16(Ft+5*2*Je,Ze[dt][Xt+5],!0),z.setUint16(Ft+6*2*Je,Ze[dt][Xt+6],!0),z.setUint16(Ft+7*2*Je,Ze[dt][Xt+7],!0),Ft+=8*2*Je}}if(ee!=le)for(let dn=8*He;dn<8*He+Tt;++dn){let vi=je[dt][dn]+8*ee*2*Je,Xt=ee*64+(dn&7)*8;for(let Ui=0;Ui<yn;++Ui)z.setUint16(vi+Ui*2*Je,Ze[dt][Xt+Ui],!0)}}}let bt=new Uint16Array(H);z=new DataView(N.buffer);for(let He=0;He<Y;++He){V[A.idx[He]].decoded=!0;let Tt=V[A.idx[He]].type;if(V[He].type==2)for(let yn=0;yn<Q;++yn){let Ft=je[He][yn];for(let dt=0;dt<H;++dt)bt[dt]=z.getUint16(Ft+dt*2*Tt,!0);for(let dt=0;dt<H;++dt)z.setFloat32(Ft+dt*2*Tt,j(bt[dt]),!0)}}}function gt(A,L,V){let M,k=1;for(;k<64;)M=L[A.value],M==65280?k=64:M>>8==255?k+=M&255:(V[k]=M,k++),A.value++}function $e(A,L){L[0]=j(A[0]),L[1]=j(A[1]),L[2]=j(A[5]),L[3]=j(A[6]),L[4]=j(A[14]),L[5]=j(A[15]),L[6]=j(A[27]),L[7]=j(A[28]),L[8]=j(A[2]),L[9]=j(A[4]),L[10]=j(A[7]),L[11]=j(A[13]),L[12]=j(A[16]),L[13]=j(A[26]),L[14]=j(A[29]),L[15]=j(A[42]),L[16]=j(A[3]),L[17]=j(A[8]),L[18]=j(A[12]),L[19]=j(A[17]),L[20]=j(A[25]),L[21]=j(A[30]),L[22]=j(A[41]),L[23]=j(A[43]),L[24]=j(A[9]),L[25]=j(A[11]),L[26]=j(A[18]),L[27]=j(A[24]),L[28]=j(A[31]),L[29]=j(A[40]),L[30]=j(A[44]),L[31]=j(A[53]),L[32]=j(A[10]),L[33]=j(A[19]),L[34]=j(A[23]),L[35]=j(A[32]),L[36]=j(A[39]),L[37]=j(A[45]),L[38]=j(A[52]),L[39]=j(A[54]),L[40]=j(A[20]),L[41]=j(A[22]),L[42]=j(A[33]),L[43]=j(A[38]),L[44]=j(A[46]),L[45]=j(A[51]),L[46]=j(A[55]),L[47]=j(A[60]),L[48]=j(A[21]),L[49]=j(A[34]),L[50]=j(A[37]),L[51]=j(A[47]),L[52]=j(A[50]),L[53]=j(A[56]),L[54]=j(A[59]),L[55]=j(A[61]),L[56]=j(A[35]),L[57]=j(A[36]),L[58]=j(A[48]),L[59]=j(A[49]),L[60]=j(A[57]),L[61]=j(A[58]),L[62]=j(A[62]),L[63]=j(A[63])}function D(A){let L=.5*Math.cos(.7853975),V=.5*Math.cos(3.14159/16),M=.5*Math.cos(3.14159/8),k=.5*Math.cos(3*3.14159/16),N=.5*Math.cos(5*3.14159/16),z=.5*Math.cos(3*3.14159/8),H=.5*Math.cos(7*3.14159/16),Q=new Array(4),Y=new Array(4),ee=new Array(4),le=new Array(4);for(let ue=0;ue<8;++ue){let me=ue*8;Q[0]=M*A[me+2],Q[1]=z*A[me+2],Q[2]=M*A[me+6],Q[3]=z*A[me+6],Y[0]=V*A[me+1]+k*A[me+3]+N*A[me+5]+H*A[me+7],Y[1]=k*A[me+1]-H*A[me+3]-V*A[me+5]-N*A[me+7],Y[2]=N*A[me+1]-V*A[me+3]+H*A[me+5]+k*A[me+7],Y[3]=H*A[me+1]-N*A[me+3]+k*A[me+5]-V*A[me+7],ee[0]=L*(A[me+0]+A[me+4]),ee[3]=L*(A[me+0]-A[me+4]),ee[1]=Q[0]+Q[3],ee[2]=Q[1]-Q[2],le[0]=ee[0]+ee[1],le[1]=ee[3]+ee[2],le[2]=ee[3]-ee[2],le[3]=ee[0]-ee[1],A[me+0]=le[0]+Y[0],A[me+1]=le[1]+Y[1],A[me+2]=le[2]+Y[2],A[me+3]=le[3]+Y[3],A[me+4]=le[3]-Y[3],A[me+5]=le[2]-Y[2],A[me+6]=le[1]-Y[1],A[me+7]=le[0]-Y[0]}for(let ue=0;ue<8;++ue)Q[0]=M*A[16+ue],Q[1]=z*A[16+ue],Q[2]=M*A[48+ue],Q[3]=z*A[48+ue],Y[0]=V*A[8+ue]+k*A[24+ue]+N*A[40+ue]+H*A[56+ue],Y[1]=k*A[8+ue]-H*A[24+ue]-V*A[40+ue]-N*A[56+ue],Y[2]=N*A[8+ue]-V*A[24+ue]+H*A[40+ue]+k*A[56+ue],Y[3]=H*A[8+ue]-N*A[24+ue]+k*A[40+ue]-V*A[56+ue],ee[0]=L*(A[ue]+A[32+ue]),ee[3]=L*(A[ue]-A[32+ue]),ee[1]=Q[0]+Q[3],ee[2]=Q[1]-Q[2],le[0]=ee[0]+ee[1],le[1]=ee[3]+ee[2],le[2]=ee[3]-ee[2],le[3]=ee[0]-ee[1],A[0+ue]=le[0]+Y[0],A[8+ue]=le[1]+Y[1],A[16+ue]=le[2]+Y[2],A[24+ue]=le[3]+Y[3],A[32+ue]=le[3]-Y[3],A[40+ue]=le[2]-Y[2],A[48+ue]=le[1]-Y[1],A[56+ue]=le[0]-Y[0]}function P(A){for(let L=0;L<64;++L){let V=A[0][L],M=A[1][L],k=A[2][L];A[0][L]=V+1.5747*k,A[1][L]=V-.1873*M-.4682*k,A[2][L]=V+1.8556*M}}function $(A,L,V){for(let M=0;M<64;++M)L[V+M]=Zi.toHalfFloat(fe(A[M]))}function fe(A){return A<=1?Math.sign(A)*Math.pow(Math.abs(A),2.2):Math.sign(A)*Math.pow(b,Math.abs(A)-1)}function he(A){return new DataView(A.array.buffer,A.offset.value,A.size)}function pe(A){let L=A.viewer.buffer.slice(A.offset.value,A.offset.value+A.size),V=new Uint8Array(Xe(L)),M=new Uint8Array(V.length);return Bt(V),Fe(V,M),new DataView(M.buffer)}function ke(A){let L=A.array.slice(A.offset.value,A.offset.value+A.size),V=Ba(L),M=new Uint8Array(V.length);return Bt(V),Fe(V,M),new DataView(M.buffer)}function be(A){let L=A.viewer,V={value:A.offset.value},M=new Uint16Array(A.width*A.scanlineBlockSize*(A.channels*A.type)),k=new Uint8Array(8192),N=0,z=new Array(A.channels);for(let xe=0;xe<A.channels;xe++)z[xe]={},z[xe].start=N,z[xe].end=z[xe].start,z[xe].nx=A.width,z[xe].ny=A.lines,z[xe].size=A.type,N+=z[xe].nx*z[xe].ny*z[xe].size;let H=G(L,V),Q=G(L,V);if(Q>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(H<=Q)for(let xe=0;xe<Q-H+1;xe++)k[xe+H]=F(L,V);let Y=new Uint16Array(65536),ee=R(k,Y),le=Pe(L,V);Qe(A.array,L,V,le,M,N);for(let xe=0;xe<A.channels;++xe){let _e=z[xe];for(let Ie=0;Ie<z[xe].size;++Ie)Ve(M,_e.start+Ie,_e.nx,_e.size,_e.ny,_e.nx*_e.size,ee)}J(Y,M,N);let ue=0,me=new Uint8Array(M.buffer.byteLength);for(let xe=0;xe<A.lines;xe++)for(let _e=0;_e<A.channels;_e++){let Ie=z[_e],ze=Ie.nx*Ie.size,mt=new Uint8Array(M.buffer,Ie.end*2,ze*2);me.set(mt,ue),ue+=ze*2,Ie.end+=ze}return new DataView(me.buffer)}function Le(A){let L=A.array.slice(A.offset.value,A.offset.value+A.size),V=Ba(L),M=A.lines*A.channels*A.width,k=A.type==1?new Uint16Array(M):new Uint32Array(M),N=0,z=0,H=new Array(4);for(let Q=0;Q<A.lines;Q++)for(let Y=0;Y<A.channels;Y++){let ee=0;switch(A.type){case 1:H[0]=N,H[1]=H[0]+A.width,N=H[1]+A.width;for(let le=0;le<A.width;++le){let ue=V[H[0]++]<<8|V[H[1]++];ee+=ue,k[z]=ee,z++}break;case 2:H[0]=N,H[1]=H[0]+A.width,H[2]=H[1]+A.width,N=H[2]+A.width;for(let le=0;le<A.width;++le){let ue=V[H[0]++]<<24|V[H[1]++]<<16|V[H[2]++]<<8;ee+=ue,k[z]=ee,z++}break}}return new DataView(k.buffer)}function Oe(A){let L=A.viewer,V={value:A.offset.value},M=new Uint8Array(A.width*A.lines*(A.channels*A.type*2)),k={version:oe(L,V),unknownUncompressedSize:oe(L,V),unknownCompressedSize:oe(L,V),acCompressedSize:oe(L,V),dcCompressedSize:oe(L,V),rleCompressedSize:oe(L,V),rleUncompressedSize:oe(L,V),rleRawSize:oe(L,V),totalAcUncompressedCount:oe(L,V),totalDcUncompressedCount:oe(L,V),acCompression:oe(L,V)};if(k.version<2)throw new Error("EXRLoader.parse: "+ki.compression+" version "+k.version+" is unsupported");let N=new Array,z=G(L,V)-2;for(;z>0;){let _e=qe(L.buffer,V),Ie=F(L,V),ze=Ie>>2&3,mt=(Ie>>4)-1,Ze=new Int8Array([mt])[0],je=F(L,V);N.push({name:_e,index:Ze,type:je,compression:ze}),z-=_e.length+3}let H=ki.channels,Q=new Array(A.channels);for(let _e=0;_e<A.channels;++_e){let Ie=Q[_e]={},ze=H[_e];Ie.name=ze.name,Ie.compression=0,Ie.decoded=!1,Ie.type=ze.pixelType,Ie.pLinear=ze.pLinear,Ie.width=A.width,Ie.height=A.lines}let Y={idx:new Array(3)};for(let _e=0;_e<A.channels;++_e){let Ie=Q[_e];for(let ze=0;ze<N.length;++ze){let mt=N[ze];Ie.name==mt.name&&(Ie.compression=mt.compression,mt.index>=0&&(Y.idx[mt.index]=_e),Ie.offset=_e)}}let ee,le,ue;if(k.acCompressedSize>0)switch(k.acCompression){case 0:ee=new Uint16Array(k.totalAcUncompressedCount),Qe(A.array,L,V,k.acCompressedSize,ee,k.totalAcUncompressedCount);break;case 1:let _e=A.array.slice(V.value,V.value+k.totalAcUncompressedCount),Ie=Ba(_e);ee=new Uint16Array(Ie.buffer),V.value+=k.totalAcUncompressedCount;break}if(k.dcCompressedSize>0){let _e={array:A.array,offset:V,size:k.dcCompressedSize};le=new Uint16Array(ke(_e).buffer),V.value+=k.dcCompressedSize}if(k.rleRawSize>0){let _e=A.array.slice(V.value,V.value+k.rleCompressedSize),Ie=Ba(_e);ue=Xe(Ie.buffer),V.value+=k.rleCompressedSize}let me=0,xe=new Array(Q.length);for(let _e=0;_e<xe.length;++_e)xe[_e]=new Array;for(let _e=0;_e<A.lines;++_e)for(let Ie=0;Ie<Q.length;++Ie)xe[Ie].push(me),me+=Q[Ie].width*A.type*2;De(Y,xe,Q,ee,le,M);for(let _e=0;_e<Q.length;++_e){let Ie=Q[_e];if(!Ie.decoded)switch(Ie.compression){case 2:let ze=0,mt=0;for(let Ze=0;Ze<A.lines;++Ze){let je=xe[_e][ze];for(let bt=0;bt<Ie.width;++bt){for(let He=0;He<2*Ie.type;++He)M[je++]=ue[mt+He*Ie.width*Ie.height];mt++}ze++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(M.buffer)}function qe(A,L){let V=new Uint8Array(A),M=0;for(;V[L.value+M]!=0;)M+=1;let k=new TextDecoder().decode(V.slice(L.value,L.value+M));return L.value=L.value+M+1,k}function ce(A,L,V){let M=new TextDecoder().decode(new Uint8Array(A).slice(L.value,L.value+V));return L.value=L.value+V,M}function it(A,L){let V=We(A,L),M=Pe(A,L);return[V,M]}function Ke(A,L){let V=Pe(A,L),M=Pe(A,L);return[V,M]}function We(A,L){let V=A.getInt32(L.value,!0);return L.value=L.value+4,V}function Pe(A,L){let V=A.getUint32(L.value,!0);return L.value=L.value+4,V}function Re(A,L){let V=A[L.value];return L.value=L.value+1,V}function F(A,L){let V=A.getUint8(L.value);return L.value=L.value+1,V}let oe=function(A,L){let V;return"getBigInt64"in DataView.prototype?V=Number(A.getBigInt64(L.value,!0)):V=A.getUint32(L.value+4,!0)+Number(A.getUint32(L.value,!0)<<32),L.value+=8,V};function Me(A,L){let V=A.getFloat32(L.value,!0);return L.value+=4,V}function Ce(A,L){return Zi.toHalfFloat(Me(A,L))}function j(A){let L=(A&31744)>>10,V=A&1023;return(A>>15?-1:1)*(L?L===31?V?NaN:1/0:Math.pow(2,L-15)*(1+V/1024):6103515625e-14*(V/1024))}function G(A,L){let V=A.getUint16(L.value,!0);return L.value+=2,V}function ve(A,L){return j(G(A,L))}function Te(A,L,V,M){let k=V.value,N=[];for(;V.value<k+M-1;){let z=qe(L,V),H=We(A,V),Q=F(A,V);V.value+=3;let Y=We(A,V),ee=We(A,V);N.push({name:z,pixelType:H,pLinear:Q,xSampling:Y,ySampling:ee})}return V.value+=1,N}function Ye(A,L){let V=Me(A,L),M=Me(A,L),k=Me(A,L),N=Me(A,L),z=Me(A,L),H=Me(A,L),Q=Me(A,L),Y=Me(A,L);return{redX:V,redY:M,greenX:k,greenY:N,blueX:z,blueY:H,whiteX:Q,whiteY:Y}}function Ge(A,L){let V=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],M=F(A,L);return V[M]}function st(A,L){let V=Pe(A,L),M=Pe(A,L),k=Pe(A,L),N=Pe(A,L);return{xMin:V,yMin:M,xMax:k,yMax:N}}function rt(A,L){let V=["INCREASING_Y"],M=F(A,L);return V[M]}function Ot(A,L){let V=Me(A,L),M=Me(A,L);return[V,M]}function Wt(A,L){let V=Me(A,L),M=Me(A,L),k=Me(A,L);return[V,M,k]}function ht(A,L,V,M,k){if(M==="string"||M==="stringvector"||M==="iccProfile")return ce(L,V,k);if(M==="chlist")return Te(A,L,V,k);if(M==="chromaticities")return Ye(A,V);if(M==="compression")return Ge(A,V);if(M==="box2i")return st(A,V);if(M==="lineOrder")return rt(A,V);if(M==="float")return Me(A,V);if(M==="v2f")return Ot(A,V);if(M==="v3f")return Wt(A,V);if(M==="int")return We(A,V);if(M==="rational")return it(A,V);if(M==="timecode")return Ke(A,V);if(M==="preview")return V.value+=k,"skipped";V.value+=k}function jt(A,L,V){let M={};if(A.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");M.version=A.getUint8(4);let k=A.getUint8(5);M.spec={singleTile:!!(k&2),longName:!!(k&4),deepFormat:!!(k&8),multiPart:!!(k&16)},V.value=8;let N=!0;for(;N;){let z=qe(L,V);if(z==0)N=!1;else{let H=qe(L,V),Q=Pe(A,V),Y=ht(A,L,V,H,Q);Y===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${H}'.`):M[z]=Y}}if(k&-5)throw console.error("THREE.EXRHeader:",M),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return M}function Hn(A,L,V,M,k){let N={size:0,viewer:L,array:V,offset:M,width:A.dataWindow.xMax-A.dataWindow.xMin+1,height:A.dataWindow.yMax-A.dataWindow.yMin+1,channels:A.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:A.channels[0].pixelType,uncompress:null,getter:null,format:null,colorSpace:It};switch(A.compression){case"NO_COMPRESSION":N.lines=1,N.uncompress=he;break;case"RLE_COMPRESSION":N.lines=1,N.uncompress=pe;break;case"ZIPS_COMPRESSION":N.lines=1,N.uncompress=ke;break;case"ZIP_COMPRESSION":N.lines=16,N.uncompress=ke;break;case"PIZ_COMPRESSION":N.lines=32,N.uncompress=be;break;case"PXR24_COMPRESSION":N.lines=16,N.uncompress=Le;break;case"DWAA_COMPRESSION":N.lines=32,N.uncompress=Oe;break;case"DWAB_COMPRESSION":N.lines=256,N.uncompress=Oe;break;default:throw new Error("EXRLoader.parse: "+A.compression+" is unsupported")}if(N.scanlineBlockSize=N.lines,N.type==1)switch(k){case fn:N.getter=ve,N.inputSize=2;break;case ct:N.getter=G,N.inputSize=2;break}else if(N.type==2)switch(k){case fn:N.getter=Me,N.inputSize=4;break;case ct:N.getter=Ce,N.inputSize=4}else throw new Error("EXRLoader.parse: unsupported pixelType "+N.type+" for "+A.compression+".");N.blockCount=(A.dataWindow.yMax+1)/N.scanlineBlockSize;for(let H=0;H<N.blockCount;H++)oe(L,M);N.outputChannels=N.channels==3?4:N.channels;let z=N.width*N.height*N.outputChannels;switch(k){case fn:N.byteArray=new Float32Array(z),N.channels<N.outputChannels&&N.byteArray.fill(1,0,z);break;case ct:N.byteArray=new Uint16Array(z),N.channels<N.outputChannels&&N.byteArray.fill(15360,0,z);break;default:console.error("THREE.EXRLoader: unsupported type: ",k);break}return N.bytesPerLine=N.width*N.inputSize*N.channels,N.outputChannels==4?(N.format=xn,N.colorSpace=It):(N.format=Kh,N.colorSpace=Rn),N}let rs=new DataView(e),gc=new Uint8Array(e),oi={value:0},ki=jt(rs,e,oi),tt=Hn(ki,rs,gc,oi,this.type),$r={value:0},Ja={R:0,G:1,B:2,A:3,Y:0};for(let A=0;A<tt.height/tt.scanlineBlockSize;A++){let L=Pe(rs,oi);tt.size=Pe(rs,oi),tt.lines=L+tt.scanlineBlockSize>tt.height?tt.height-L:tt.scanlineBlockSize;let M=tt.size<tt.lines*tt.bytesPerLine?tt.uncompress(tt):he(tt);oi.value+=tt.size;for(let k=0;k<tt.scanlineBlockSize;k++){let N=k+A*tt.scanlineBlockSize;if(N>=tt.height)break;for(let z=0;z<tt.channels;z++){let H=Ja[ki.channels[z].name];for(let Q=0;Q<tt.width;Q++){$r.value=(k*(tt.channels*tt.width)+z*tt.width+Q)*tt.inputSize;let Y=(tt.height-1-N)*(tt.width*tt.outputChannels)+Q*tt.outputChannels+H;tt.byteArray[Y]=tt.getter(M,$r)}}}}return{header:ki,width:tt.width,height:tt.height,data:tt.byteArray,format:tt.format,colorSpace:tt.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=Rt,a.magFilter=Rt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,n,i)}};var Mm=Math.pow(2,-24),Nl=Symbol("SKIP_GENERATION");function CM(r){return r.index?r.index.count:r.attributes.position.count}function gi(r){return CM(r)/3}function PM(r,e=ArrayBuffer){return r>65535?new Uint32Array(new e(4*r)):new Uint16Array(new e(2*r))}function wm(r,e){if(!r.index){let t=r.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=PM(t,n);r.setIndex(new Ht(i,1));for(let s=0;s<t;s++)i[s]=s}}function Vu(r){let e=gi(r),t=r.drawRange,n=t.start/3,i=(t.start+t.count)/3,s=Math.max(0,n),a=Math.min(e,i)-s;return[{offset:Math.floor(s),count:Math.floor(a)}]}function Gu(r){if(!r.groups||!r.groups.length)return Vu(r);let e=[],t=new Set,n=r.drawRange,i=n.start/3,s=(n.start+n.count)/3;for(let o of r.groups){let l=o.start/3,c=(o.start+o.count)/3;t.add(Math.max(i,l)),t.add(Math.min(s,c))}let a=Array.from(t.values()).sort((o,l)=>o-l);for(let o=0;o<a.length-1;o++){let l=a[o],c=a[o+1];e.push({offset:Math.floor(l),count:Math.floor(c-l)})}return e}function Sm(r){if(r.groups.length===0)return!1;let e=gi(r),t=Gu(r).sort((s,a)=>s.offset-a.offset),n=t[t.length-1];n.count=Math.min(e-n.offset,n.count);let i=0;return t.forEach(({count:s})=>i+=s),e!==i}function Bl(r,e,t,n,i){let s=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,f=1/0,v=-1/0,x=-1/0,m=-1/0;for(let p=e*6,y=(e+t)*6;p<y;p+=6){let g=r[p+0],_=r[p+1],E=g-_,w=g+_;E<s&&(s=E),w>l&&(l=w),g<u&&(u=g),g>v&&(v=g);let T=r[p+2],C=r[p+3],b=T-C,R=T+C;b<a&&(a=b),R>c&&(c=R),T<d&&(d=T),T>x&&(x=T);let O=r[p+4],B=r[p+5],X=O-B,I=O+B;X<o&&(o=X),I>h&&(h=I),O<f&&(f=O),O>m&&(m=O)}n[0]=s,n[1]=a,n[2]=o,n[3]=l,n[4]=c,n[5]=h,i[0]=u,i[1]=d,i[2]=f,i[3]=v,i[4]=x,i[5]=m}function Tm(r,e=null,t=null,n=null){let i=r.attributes.position,s=r.index?r.index.array:null,a=gi(r),o=i.normalized,l;e===null?(l=new Float32Array(a*6*4),t=0,n=a):(l=e,t=t||0,n=n||a);let c=i.array,h=i.offset||0,u=3;i.isInterleavedBufferAttribute&&(u=i.data.stride);let d=["getX","getY","getZ"];for(let f=t;f<t+n;f++){let v=f*3,x=f*6,m=v+0,p=v+1,y=v+2;s&&(m=s[m],p=s[p],y=s[y]),o||(m=m*u+h,p=p*u+h,y=y*u+h);for(let g=0;g<3;g++){let _,E,w;o?(_=i[d[g]](m),E=i[d[g]](p),w=i[d[g]](y)):(_=c[m+g],E=c[p+g],w=c[y+g]);let T=_;E<T&&(T=E),w<T&&(T=w);let C=_;E>C&&(C=E),w>C&&(C=w);let b=(C-T)/2,R=g*2;l[x+R+0]=T+b,l[x+R+1]=b+(Math.abs(T)+b)*Mm}}return l}function wt(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function Wu(r){let e=-1,t=-1/0;for(let n=0;n<3;n++){let i=r[n+3]-r[n];i>t&&(t=i,e=n)}return e}function Xu(r,e){e.set(r)}function qu(r,e,t){let n,i;for(let s=0;s<3;s++){let a=s+3;n=r[s],i=e[s],t[s]=n<i?n:i,n=r[a],i=e[a],t[a]=n>i?n:i}}function Oa(r,e,t){for(let n=0;n<3;n++){let i=e[r+2*n],s=e[r+2*n+1],a=i-s,o=i+s;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Lr(r){let e=r[3]-r[0],t=r[4]-r[1],n=r[5]-r[2];return 2*(e*t+t*n+n*e)}var Di=32,IM=(r,e)=>r.candidate-e.candidate,ts=new Array(Di).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Ol=new Float32Array(6);function Rm(r,e,t,n,i,s){let a=-1,o=0;if(s===0)a=Wu(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(s===1)a=Wu(r),a!==-1&&(o=DM(t,n,i,a));else if(s===2){let l=Lr(r),c=1.25*i,h=n*6,u=(n+i)*6;for(let d=0;d<3;d++){let f=e[d],m=(e[d+3]-f)/Di;if(i<Di/4){let p=[...ts];p.length=i;let y=0;for(let _=h;_<u;_+=6,y++){let E=p[y];E.candidate=t[_+2*d],E.count=0;let{bounds:w,leftCacheBounds:T,rightCacheBounds:C}=E;for(let b=0;b<3;b++)C[b]=1/0,C[b+3]=-1/0,T[b]=1/0,T[b+3]=-1/0,w[b]=1/0,w[b+3]=-1/0;Oa(_,t,w)}p.sort(IM);let g=i;for(let _=0;_<g;_++){let E=p[_];for(;_+1<g&&p[_+1].candidate===E.candidate;)p.splice(_+1,1),g--}for(let _=h;_<u;_+=6){let E=t[_+2*d];for(let w=0;w<g;w++){let T=p[w];E>=T.candidate?Oa(_,t,T.rightCacheBounds):(Oa(_,t,T.leftCacheBounds),T.count++)}}for(let _=0;_<g;_++){let E=p[_],w=E.count,T=i-E.count,C=E.leftCacheBounds,b=E.rightCacheBounds,R=0;w!==0&&(R=Lr(C)/l);let O=0;T!==0&&(O=Lr(b)/l);let B=1+1.25*(R*w+O*T);B<c&&(a=d,c=B,o=E.candidate)}}else{for(let g=0;g<Di;g++){let _=ts[g];_.count=0,_.candidate=f+m+g*m;let E=_.bounds;for(let w=0;w<3;w++)E[w]=1/0,E[w+3]=-1/0}for(let g=h;g<u;g+=6){let w=~~((t[g+2*d]-f)/m);w>=Di&&(w=Di-1);let T=ts[w];T.count++,Oa(g,t,T.bounds)}let p=ts[Di-1];Xu(p.bounds,p.rightCacheBounds);for(let g=Di-2;g>=0;g--){let _=ts[g],E=ts[g+1];qu(_.bounds,E.rightCacheBounds,_.rightCacheBounds)}let y=0;for(let g=0;g<Di-1;g++){let _=ts[g],E=_.count,w=_.bounds,C=ts[g+1].rightCacheBounds;E!==0&&(y===0?Xu(w,Ol):qu(w,Ol,Ol)),y+=E;let b=0,R=0;y!==0&&(b=Lr(Ol)/l);let O=i-y;O!==0&&(R=Lr(C)/l);let B=1+1.25*(b*y+R*O);B<c&&(a=d,c=B,o=_.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:a,pos:o}}function DM(r,e,t,n){let i=0;for(let s=e,a=e+t;s<a;s++)i+=r[s*6+n*2];return i/t}var Ir=class{constructor(){this.boundingData=new Float32Array(6)}};function Cm(r,e,t,n,i,s){let a=n,o=n+i-1,l=s.pos,c=s.axis*2;for(;;){for(;a<=o&&t[a*6+c]<l;)a++;for(;a<=o&&t[o*6+c]>=l;)o--;if(a<o){for(let h=0;h<3;h++){let u=e[a*3+h];e[a*3+h]=e[o*3+h],e[o*3+h]=u}for(let h=0;h<6;h++){let u=t[a*6+h];t[a*6+h]=t[o*6+h],t[o*6+h]=u}a++,o--}else return a}}function Pm(r,e,t,n,i,s){let a=n,o=n+i-1,l=s.pos,c=s.axis*2;for(;;){for(;a<=o&&t[a*6+c]<l;)a++;for(;a<=o&&t[o*6+c]>=l;)o--;if(a<o){let h=r[a];r[a]=r[o],r[o]=h;for(let u=0;u<6;u++){let d=t[a*6+u];t[a*6+u]=t[o*6+u],t[o*6+u]=d}a++,o--}else return a}}function qt(r,e){return e[r+15]===65535}function Kt(r,e){return e[r+6]}function en(r,e){return e[r+14]}function cn(r){return r+8}function hn(r,e){return e[r+6]}function Fl(r,e){return e[r+7]}var Lm,Fa,zl,Im,kM=Math.pow(2,32);function Hl(r){return"count"in r?1:1+Hl(r.left)+Hl(r.right)}function Dm(r,e,t){return Lm=new Float32Array(t),Fa=new Uint32Array(t),zl=new Uint16Array(t),Im=new Uint8Array(t),ju(r,e)}function ju(r,e){let t=r/4,n=r/2,i="count"in e,s=e.boundingData;for(let a=0;a<6;a++)Lm[t+a]=s[a];if(i)if(e.buffer){let a=e.buffer;Im.set(new Uint8Array(a),r);for(let o=r,l=r+a.byteLength;o<l;o+=32){let c=o/2;qt(c,zl)||(Fa[o/4+6]+=t)}return r+a.byteLength}else{let a=e.offset,o=e.count;return Fa[t+6]=a,zl[n+14]=o,zl[n+15]=65535,r+32}else{let a=e.left,o=e.right,l=e.splitAxis,c;if(c=ju(r+32,a),c/4>kM)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Fa[t+6]=c/4,c=ju(c,o),Fa[t+7]=l,c}}function UM(r,e){let t=(r.index?r.index.count:r.attributes.position.count)/3,n=t>2**16,i=n?4:2,s=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),a=n?new Uint32Array(s):new Uint16Array(s);for(let o=0,l=a.length;o<l;o++)a[o]=o;return a}function NM(r,e,t,n,i){let{maxDepth:s,verbose:a,maxLeafTris:o,strategy:l,onProgress:c,indirect:h}=i,u=r._indirectBuffer,d=r.geometry,f=d.index?d.index.array:null,v=h?Pm:Cm,x=gi(d),m=new Float32Array(6),p=!1,y=new Ir;return Bl(e,t,n,y.boundingData,m),_(y,t,n,m),y;function g(E){c&&c(E/x)}function _(E,w,T,C=null,b=0){if(!p&&b>=s&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(d))),T<=o||b>=s)return g(w+T),E.offset=w,E.count=T,E;let R=Rm(E.boundingData,C,e,w,T,l);if(R.axis===-1)return g(w+T),E.offset=w,E.count=T,E;let O=v(u,f,e,w,T,R);if(O===w||O===w+T)g(w+T),E.offset=w,E.count=T;else{E.splitAxis=R.axis;let B=new Ir,X=w,I=O-w;E.left=B,Bl(e,X,I,B.boundingData,m),_(B,X,I,m,b+1);let W=new Ir,q=O,ie=T-I;E.right=W,Bl(e,q,ie,W.boundingData,m),_(W,q,ie,m,b+1)}return E}}function km(r,e){let t=r.geometry;e.indirect&&(r._indirectBuffer=UM(t,e.useSharedArrayBuffer),Sm(t)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),r._indirectBuffer||wm(t,e);let n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Tm(t),s=e.indirect?Vu(t):Gu(t);r._roots=s.map(a=>{let o=NM(r,i,a.offset,a.count,e),l=Hl(o),c=new n(32*l);return Dm(0,o,c),c})}var Dn=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let s=0,a=e.length;s<a;s++){let l=e[s][t];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let s=0,a=t.length;s<a;s++){let o=t[s],l=e.dot(o);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}};Dn.prototype.setFromBox=function(){let r=new S;return function(t,n){let i=n.min,s=n.max,a=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){r.x=i.x*l+s.x*(1-l),r.y=i.y*c+s.y*(1-c),r.z=i.z*h+s.z*(1-h);let u=t.dot(r);a=Math.min(u,a),o=Math.max(u,o)}this.min=a,this.max=o}}();var t1=function(){let r=new Dn;return function(t,n){let i=t.points,s=t.satAxes,a=t.satBounds,o=n.points,l=n.satAxes,c=n.satBounds;for(let h=0;h<3;h++){let u=a[h],d=s[h];if(r.setFromPoints(d,o),u.isSeparated(r))return!1}for(let h=0;h<3;h++){let u=c[h],d=l[h];if(r.setFromPoints(d,i),u.isSeparated(r))return!1}}}();var BM=function(){let r=new S,e=new S,t=new S;return function(i,s,a){let o=i.start,l=r,c=s.start,h=e;t.subVectors(o,c),r.subVectors(i.end,i.start),e.subVectors(s.end,s.start);let u=t.dot(h),d=h.dot(l),f=h.dot(h),v=t.dot(l),m=l.dot(l)*f-d*d,p,y;m!==0?p=(u*d-v*f)/m:p=0,y=(u+p*d)/f,a.x=p,a.y=y}}(),Ha=function(){let r=new te,e=new S,t=new S;return function(i,s,a,o){BM(i,s,r);let l=r.x,c=r.y;if(l>=0&&l<=1&&c>=0&&c<=1){i.at(l,a),s.at(c,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),i.closestPointToPoint(o,!0,a);return}else if(c>=0&&c<=1){l<0?i.at(0,a):i.at(1,a),s.closestPointToPoint(a,!0,o);return}else{let h;l<0?h=i.start:h=i.end;let u;c<0?u=s.start:u=s.end;let d=e,f=t;if(i.closestPointToPoint(u,!0,e),s.closestPointToPoint(h,!0,t),d.distanceToSquared(u)<=f.distanceToSquared(h)){a.copy(d),o.copy(u);return}else{a.copy(h),o.copy(f);return}}}}(),Um=function(){let r=new S,e=new S,t=new Mn,n=new Ln;return function(s,a){let{radius:o,center:l}=s,{a:c,b:h,c:u}=a;if(n.start=c,n.end=h,n.closestPointToPoint(l,!0,r).distanceTo(l)<=o||(n.start=c,n.end=u,n.closestPointToPoint(l,!0,r).distanceTo(l)<=o)||(n.start=h,n.end=u,n.closestPointToPoint(l,!0,r).distanceTo(l)<=o))return!0;let x=a.getPlane(t);if(Math.abs(x.distanceToPoint(l))<=o){let p=x.projectPoint(l,e);if(a.containsPoint(p))return!0}return!1}}();var OM=1e-15;function Yu(r){return Math.abs(r)<OM}var mn=class extends Cn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new S),this.satBounds=new Array(4).fill().map(()=>new Dn),this.points=[this.a,this.b,this.c],this.sphere=new Sn,this.plane=new Mn,this.needsUpdate=!0}intersectsSphere(e){return Um(e,this)}update(){let e=this.a,t=this.b,n=this.c,i=this.points,s=this.satAxes,a=this.satBounds,o=s[0],l=a[0];this.getNormal(o),l.setFromPoints(o,i);let c=s[1],h=a[1];c.subVectors(e,t),h.setFromPoints(c,i);let u=s[2],d=a[2];u.subVectors(t,n),d.setFromPoints(u,i);let f=s[3],v=a[3];f.subVectors(n,e),v.setFromPoints(f,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}};mn.prototype.closestPointToSegment=function(){let r=new S,e=new S,t=new Ln;return function(i,s=null,a=null){let{start:o,end:l}=i,c=this.points,h,u=1/0;for(let d=0;d<3;d++){let f=(d+1)%3;t.start.copy(c[d]),t.end.copy(c[f]),Ha(t,i,r,e),h=r.distanceToSquared(e),h<u&&(u=h,s&&s.copy(r),a&&a.copy(e))}return this.closestPointToPoint(o,r),h=o.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),a&&a.copy(o)),this.closestPointToPoint(l,r),h=l.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),a&&a.copy(l)),Math.sqrt(u)}}();mn.prototype.intersectsTriangle=function(){let r=new mn,e=new Array(3),t=new Array(3),n=new Dn,i=new Dn,s=new S,a=new S,o=new S,l=new S,c=new S,h=new Ln,u=new Ln,d=new Ln,f=new S;function v(x,m,p){let y=x.points,g=0,_=-1;for(let E=0;E<3;E++){let{start:w,end:T}=h;w.copy(y[E]),T.copy(y[(E+1)%3]),h.delta(a);let C=Yu(m.distanceToPoint(w));if(Yu(m.normal.dot(a))&&C){p.copy(h),g=2;break}let b=m.intersectLine(h,f);if(!b&&C&&f.copy(w),(b||C)&&!Yu(f.distanceTo(T))){if(g<=1)(g===1?p.start:p.end).copy(f),C&&(_=g);else if(g>=2){(_===1?p.start:p.end).copy(f),g=2;break}if(g++,g===2&&_===-1)break}}return g}return function(m,p=null,y=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(r.copy(m),r.update(),m=r);let g=this.plane,_=m.plane;if(Math.abs(g.normal.dot(_.normal))>1-1e-10){let E=this.satBounds,w=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let b=0;b<4;b++){let R=E[b],O=w[b];if(n.setFromPoints(O,t),R.isSeparated(n))return!1}let T=m.satBounds,C=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let b=0;b<4;b++){let R=T[b],O=C[b];if(n.setFromPoints(O,e),R.isSeparated(n))return!1}for(let b=0;b<4;b++){let R=w[b];for(let O=0;O<4;O++){let B=C[O];if(s.crossVectors(R,B),n.setFromPoints(s,e),i.setFromPoints(s,t),n.isSeparated(i))return!1}}return p&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{let E=v(this,_,u);if(E===1&&m.containsPoint(u.end))return p&&(p.start.copy(u.end),p.end.copy(u.end)),!0;if(E!==2)return!1;let w=v(m,g,d);if(w===1&&this.containsPoint(d.end))return p&&(p.start.copy(d.end),p.end.copy(d.end)),!0;if(w!==2)return!1;if(u.delta(o),d.delta(l),o.dot(l)<0){let X=d.start;d.start=d.end,d.end=X}let T=u.start.dot(o),C=u.end.dot(o),b=d.start.dot(o),R=d.end.dot(o),O=C<b,B=T<R;return T!==R&&b!==C&&O===B?!1:(p&&(c.subVectors(u.start,d.start),c.dot(o)>0?p.start.copy(u.start):p.start.copy(d.start),c.subVectors(u.end,d.end),c.dot(o)<0?p.end.copy(u.end):p.end.copy(d.end)),!0)}}}();mn.prototype.distanceToPoint=function(){let r=new S;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}();mn.prototype.distanceToTriangle=function(){let r=new S,e=new S,t=["a","b","c"],n=new Ln,i=new Ln;return function(a,o=null,l=null){let c=o||l?n:null;if(this.intersectsTriangle(a,c))return(o||l)&&(o&&c.getCenter(o),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let d,f=t[u],v=a[f];this.closestPointToPoint(v,r),d=v.distanceToSquared(r),d<h&&(h=d,o&&o.copy(r),l&&l.copy(v));let x=this[f];a.closestPointToPoint(x,r),d=x.distanceToSquared(r),d<h&&(h=d,o&&o.copy(x),l&&l.copy(r))}for(let u=0;u<3;u++){let d=t[u],f=t[(u+1)%3];n.set(this[d],this[f]);for(let v=0;v<3;v++){let x=t[v],m=t[(v+1)%3];i.set(a[x],a[m]),Ha(n,i,r,e);let p=r.distanceToSquared(e);p<h&&(h=p,o&&o.copy(r),l&&l.copy(e))}}return Math.sqrt(h)}}();var $t=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new S,this.max=new S,this.matrix=new Ue,this.invMatrix=new Ue,this.points=new Array(8).fill().map(()=>new S),this.satAxes=new Array(3).fill().map(()=>new S),this.satBounds=new Array(3).fill().map(()=>new Dn),this.alignedSatBounds=new Array(3).fill().map(()=>new Dn),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};$t.prototype.update=function(){return function(){let e=this.matrix,t=this.min,n=this.max,i=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){let d=1*c|2*h|4*u,f=i[d];f.x=c?n.x:t.x,f.y=h?n.y:t.y,f.z=u?n.z:t.z,f.applyMatrix4(e)}let s=this.satBounds,a=this.satAxes,o=i[0];for(let c=0;c<3;c++){let h=a[c],u=s[c],d=1<<c,f=i[d];h.subVectors(o,f),u.setFromPoints(h,i)}let l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();$t.prototype.intersectsBox=function(){let r=new Dn;return function(t){this.needsUpdate&&this.update();let n=t.min,i=t.max,s=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(r.min=n.x,r.max=i.x,o[0].isSeparated(r)||(r.min=n.y,r.max=i.y,o[1].isSeparated(r))||(r.min=n.z,r.max=i.z,o[2].isSeparated(r)))return!1;for(let l=0;l<3;l++){let c=a[l],h=s[l];if(r.setFromBox(c,t),h.isSeparated(r))return!1}return!0}}();$t.prototype.intersectsTriangle=function(){let r=new mn,e=new Array(3),t=new Dn,n=new Dn,i=new S;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(r.copy(a),r.update(),a=r);let o=this.satBounds,l=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let d=0;d<3;d++){let f=o[d],v=l[d];if(t.setFromPoints(v,e),f.isSeparated(t))return!1}let c=a.satBounds,h=a.satAxes,u=this.points;for(let d=0;d<3;d++){let f=c[d],v=h[d];if(t.setFromPoints(v,u),f.isSeparated(t))return!1}for(let d=0;d<3;d++){let f=l[d];for(let v=0;v<4;v++){let x=h[v];if(i.crossVectors(f,x),t.setFromPoints(i,e),n.setFromPoints(i,u),t.isSeparated(n))return!1}}return!0}}();$t.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();$t.prototype.distanceToPoint=function(){let r=new S;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}}();$t.prototype.distanceToBox=function(){let r=["x","y","z"],e=new Array(12).fill().map(()=>new Ln),t=new Array(12).fill().map(()=>new Ln),n=new S,i=new S;return function(a,o=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||c)&&(a.getCenter(i),this.closestPointToPoint(i,n),a.closestPointToPoint(n,i),l&&l.copy(n),c&&c.copy(i)),0;let h=o*o,u=a.min,d=a.max,f=this.points,v=1/0;for(let m=0;m<8;m++){let p=f[m];i.copy(p).clamp(u,d);let y=p.distanceToSquared(i);if(y<v&&(v=y,l&&l.copy(p),c&&c.copy(i),y<h))return Math.sqrt(y)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){let g=(m+1)%3,_=(m+2)%3,E=p<<g|y<<_,w=1<<m|p<<g|y<<_,T=f[E],C=f[w];e[x].set(T,C);let R=r[m],O=r[g],B=r[_],X=t[x],I=X.start,W=X.end;I[R]=u[R],I[O]=p?u[O]:d[O],I[B]=y?u[B]:d[O],W[R]=d[R],W[O]=p?u[O]:d[O],W[B]=y?u[B]:d[O],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){i.x=m?d.x:u.x,i.y=p?d.y:u.y,i.z=y?d.z:u.z,this.closestPointToPoint(i,n);let g=i.distanceToSquared(n);if(g<v&&(v=g,l&&l.copy(n),c&&c.copy(i),g<h))return Math.sqrt(g)}for(let m=0;m<12;m++){let p=e[m];for(let y=0;y<12;y++){let g=t[y];Ha(p,g,n,i);let _=n.distanceToSquared(i);if(_<v&&(v=_,l&&l.copy(n),c&&c.copy(i),_<h))return Math.sqrt(_)}}return Math.sqrt(v)}}();var ns=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}};var $u=class extends ns{constructor(){super(()=>new mn)}},An=new $u;var Zu=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},pt=new Zu;var is,kr,Dr=[],Gl=new ns(()=>new et);function Nm(r,e,t,n,i,s){is=Gl.getPrimitive(),kr=Gl.getPrimitive(),Dr.push(is,kr),pt.setBuffer(r._roots[e]);let a=Ku(0,r.geometry,t,n,i,s);pt.clearBuffer(),Gl.releasePrimitive(is),Gl.releasePrimitive(kr),Dr.pop(),Dr.pop();let o=Dr.length;return o>0&&(kr=Dr[o-1],is=Dr[o-2]),a}function Ku(r,e,t,n,i=null,s=0,a=0){let{float32Array:o,uint16Array:l,uint32Array:c}=pt,h=r*2;if(qt(h,l)){let d=Kt(r,c),f=en(h,l);return wt(r,o,is),n(d,f,!1,a,s+r,is)}else{let R=function(B){let{uint16Array:X,uint32Array:I}=pt,W=B*2;for(;!qt(W,X);)B=cn(B),W=B*2;return Kt(B,I)},O=function(B){let{uint16Array:X,uint32Array:I}=pt,W=B*2;for(;!qt(W,X);)B=hn(B,I),W=B*2;return Kt(B,I)+en(W,X)},d=cn(r),f=hn(r,c),v=d,x=f,m,p,y,g;if(i&&(y=is,g=kr,wt(v,o,y),wt(x,o,g),m=i(y),p=i(g),p<m)){v=f,x=d;let B=m;m=p,p=B,y=g}y||(y=is,wt(v,o,y));let _=qt(v*2,l),E=t(y,_,m,a+1,s+v),w;if(E===2){let B=R(v),I=O(v)-B;w=n(B,I,!0,a+1,s+v,y)}else w=E&&Ku(v,e,t,n,i,s,a+1);if(w)return!0;g=kr,wt(x,o,g);let T=qt(x*2,l),C=t(g,T,p,a+1,s+x),b;if(C===2){let B=R(x),I=O(x)-B;b=n(B,I,!0,a+1,s+x,g)}else b=C&&Ku(x,e,t,n,i,s,a+1);return!!b}}var Va=new S,Qu=new S;function Bm(r,e,t={},n=0,i=1/0){let s=n*n,a=i*i,o=1/0,l=null;if(r.shapecast({boundsTraverseOrder:h=>(Va.copy(e).clamp(h.min,h.max),Va.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<o&&d<a,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,Va);let d=e.distanceToSquared(Va);return d<o&&(Qu.copy(Va),o=d,l=u),d<s}}),o===1/0)return null;let c=Math.sqrt(o);return t.point?t.point.copy(Qu):t.point=Qu.clone(),t.distance=c,t.faceIndex=l,t}var Ur=new S,Nr=new S,Br=new S,Wl=new te,Xl=new te,ql=new te,Om=new S,Fm=new S,zm=new S,jl=new S;function zM(r,e,t,n,i,s){let a;return s===Qt?a=r.intersectTriangle(n,t,e,!0,i):a=r.intersectTriangle(e,t,n,s!==Zt,i),a===null?null:{distance:r.origin.distanceTo(i),point:i.clone()}}function HM(r,e,t,n,i,s,a,o,l){Ur.fromBufferAttribute(e,s),Nr.fromBufferAttribute(e,a),Br.fromBufferAttribute(e,o);let c=zM(r,Ur,Nr,Br,jl,l);if(c){n&&(Wl.fromBufferAttribute(n,s),Xl.fromBufferAttribute(n,a),ql.fromBufferAttribute(n,o),c.uv=Cn.getInterpolation(jl,Ur,Nr,Br,Wl,Xl,ql,new te)),i&&(Wl.fromBufferAttribute(i,s),Xl.fromBufferAttribute(i,a),ql.fromBufferAttribute(i,o),c.uv1=Cn.getInterpolation(jl,Ur,Nr,Br,Wl,Xl,ql,new te)),t&&(Om.fromBufferAttribute(t,s),Fm.fromBufferAttribute(t,a),zm.fromBufferAttribute(t,o),c.normal=Cn.getInterpolation(jl,Ur,Nr,Br,Om,Fm,zm,new S),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let h={a:s,b:a,c:o,normal:new S,materialIndex:0};Cn.getNormal(Ur,Nr,Br,h.normal),c.face=h,c.faceIndex=s}return c}function Or(r,e,t,n,i){let s=n*3,a=s+0,o=s+1,l=s+2,c=r.index;r.index&&(a=c.getX(a),o=c.getX(o),l=c.getX(l));let{position:h,normal:u,uv:d,uv1:f}=r.attributes,v=HM(t,h,u,d,f,a,o,l,e);return v?(v.faceIndex=n,i&&i.push(v),v):null}function Pt(r,e,t,n){let i=r.a,s=r.b,a=r.c,o=e,l=e+1,c=e+2;t&&(o=t.getX(o),l=t.getX(l),c=t.getX(c)),i.x=n.getX(o),i.y=n.getY(o),i.z=n.getZ(o),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),a.x=n.getX(c),a.y=n.getY(c),a.z=n.getZ(c)}function Hm(r,e,t,n,i,s){let{geometry:a,_indirectBuffer:o}=r;for(let l=n,c=n+i;l<c;l++)Or(a,e,t,l,s)}function Vm(r,e,t,n,i){let{geometry:s,_indirectBuffer:a}=r,o=1/0,l=null;for(let c=n,h=n+i;c<h;c++){let u;u=Or(s,e,t,c),u&&u.distance<o&&(l=u,o=u.distance)}return l}function Gm(r,e,t,n,i,s,a){let{geometry:o}=t,{index:l}=o,c=o.attributes.position;for(let h=r,u=e+r;h<u;h++){let d;if(d=h,Pt(a,d*3,l,c),a.needsUpdate=!0,n(a,d,i,s))return!0}return!1}function Wm(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position,s,a,o,l,c=0,h=r._roots;for(let d=0,f=h.length;d<f;d++)s=h[d],a=new Uint32Array(s),o=new Uint16Array(s),l=new Float32Array(s),u(0,c),c+=s.byteLength;function u(d,f,v=!1){let x=d*2;if(o[x+15]===65535){let p=a[d+6],y=o[x+14],g=1/0,_=1/0,E=1/0,w=-1/0,T=-1/0,C=-1/0;for(let b=3*p,R=3*(p+y);b<R;b++){let O=n[b],B=i.getX(O),X=i.getY(O),I=i.getZ(O);B<g&&(g=B),B>w&&(w=B),X<_&&(_=X),X>T&&(T=X),I<E&&(E=I),I>C&&(C=I)}return l[d+0]!==g||l[d+1]!==_||l[d+2]!==E||l[d+3]!==w||l[d+4]!==T||l[d+5]!==C?(l[d+0]=g,l[d+1]=_,l[d+2]=E,l[d+3]=w,l[d+4]=T,l[d+5]=C,!0):!1}else{let p=d+8,y=a[d+6],g=p+f,_=y+f,E=v,w=!1,T=!1;e?E||(w=e.has(g),T=e.has(_),E=!w&&!T):(w=!0,T=!0);let C=E||w,b=E||T,R=!1;C&&(R=u(p,f,E));let O=!1;b&&(O=u(y,f,E));let B=R||O;if(B)for(let X=0;X<3;X++){let I=p+X,W=y+X,q=l[I],ie=l[I+3],se=l[W],Z=l[W+3];l[d+X]=q<se?q:se,l[d+X+3]=ie>Z?ie:Z}return B}}}var Xm=new et;function Zn(r,e,t,n){return wt(r,e,Xm),t.intersectBox(Xm,n)}function qm(r,e,t,n,i,s){let{geometry:a,_indirectBuffer:o}=r;for(let l=n,c=n+i;l<c;l++){let h=o?o[l]:l;Or(a,e,t,h,s)}}function jm(r,e,t,n,i){let{geometry:s,_indirectBuffer:a}=r,o=1/0,l=null;for(let c=n,h=n+i;c<h;c++){let u;u=Or(s,e,t,a?a[c]:c),u&&u.distance<o&&(l=u,o=u.distance)}return l}function Ym(r,e,t,n,i,s,a){let{geometry:o}=t,{index:l}=o,c=o.attributes.position;for(let h=r,u=e+r;h<u;h++){let d;if(d=t.resolveTriangleIndex(h),Pt(a,d*3,l,c),a.needsUpdate=!0,n(a,d,i,s))return!0}return!1}var $m=new S;function Zm(r,e,t,n,i){pt.setBuffer(r._roots[e]),ed(0,r,t,n,i),pt.clearBuffer()}function ed(r,e,t,n,i){let{float32Array:s,uint16Array:a,uint32Array:o}=pt,l=r*2;if(qt(l,a)){let h=Kt(r,o),u=en(l,a);Hm(e,t,n,h,u,i)}else{let h=cn(r);Zn(h,s,n,$m)&&ed(h,e,t,n,i);let u=hn(r,o);Zn(u,s,n,$m)&&ed(u,e,t,n,i)}}var Km=new S,VM=["x","y","z"];function Jm(r,e,t,n){pt.setBuffer(r._roots[e]);let i=td(0,r,t,n);return pt.clearBuffer(),i}function td(r,e,t,n){let{float32Array:i,uint16Array:s,uint32Array:a}=pt,o=r*2;if(qt(o,s)){let c=Kt(r,a),h=en(o,s);return Vm(e,t,n,c,h)}else{let c=Fl(r,a),h=VM[c],d=n.direction[h]>=0,f,v;d?(f=cn(r),v=hn(r,a)):(f=hn(r,a),v=cn(r));let m=Zn(f,i,n,Km)?td(f,e,t,n):null;if(m){let g=m.point[h];if(d?g<=i[v+c]:g>=i[v+c+3])return m}let y=Zn(v,i,n,Km)?td(v,e,t,n):null;return m&&y?m.distance<=y.distance?m:y:m||y||null}}var Yl=new et,Fr=new mn,zr=new mn,Ga=new Ue,Qm=new $t,$l=new $t;function eg(r,e,t,n){pt.setBuffer(r._roots[e]);let i=nd(0,r,t,n);return pt.clearBuffer(),i}function nd(r,e,t,n,i=null){let{float32Array:s,uint16Array:a,uint32Array:o}=pt,l=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Qm.set(t.boundingBox.min,t.boundingBox.max,n),i=Qm),qt(l,a)){let h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,v=t.attributes.position,x=Kt(r,o),m=en(l,a);if(Ga.copy(n).invert(),t.boundsTree)return wt(r,s,$l),$l.matrix.copy(Ga),$l.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>$l.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let g=x*3,_=(m+x)*3;g<_;g+=3)if(Pt(zr,g,u,d),zr.needsUpdate=!0,y.intersectsTriangle(zr))return!0;return!1}});for(let p=x*3,y=(m+x)*3;p<y;p+=3){Pt(Fr,p,u,d),Fr.a.applyMatrix4(Ga),Fr.b.applyMatrix4(Ga),Fr.c.applyMatrix4(Ga),Fr.needsUpdate=!0;for(let g=0,_=f.count;g<_;g+=3)if(Pt(zr,g,f,v),zr.needsUpdate=!0,Fr.intersectsTriangle(zr))return!0}}else{let h=r+8,u=o[r+6];return wt(h,s,Yl),!!(i.intersectsBox(Yl)&&nd(h,e,t,n,i)||(wt(u,s,Yl),i.intersectsBox(Yl)&&nd(u,e,t,n,i)))}}var Zl=new Ue,id=new $t,Wa=new $t,GM=new S,WM=new S,XM=new S,qM=new S;function tg(r,e,t,n={},i={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),id.set(e.boundingBox.min,e.boundingBox.max,t),id.needsUpdate=!0;let o=r.geometry,l=o.attributes.position,c=o.index,h=e.attributes.position,u=e.index,d=An.getPrimitive(),f=An.getPrimitive(),v=GM,x=WM,m=null,p=null;i&&(m=XM,p=qM);let y=1/0,g=null,_=null;return Zl.copy(t).invert(),Wa.matrix.copy(Zl),r.shapecast({boundsTraverseOrder:E=>id.distanceToBox(E),intersectsBounds:(E,w,T)=>T<y&&T<a?(w&&(Wa.min.copy(E.min),Wa.max.copy(E.max),Wa.needsUpdate=!0),!0):!1,intersectsRange:(E,w)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:C=>Wa.distanceToBox(C),intersectsBounds:(C,b,R)=>R<y&&R<a,intersectsRange:(C,b)=>{for(let R=C,O=C+b;R<O;R++){Pt(f,3*R,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let B=E,X=E+w;B<X;B++){Pt(d,3*B,c,l),d.needsUpdate=!0;let I=d.distanceToTriangle(f,v,m);if(I<y&&(x.copy(v),p&&p.copy(m),y=I,g=B,_=R),I<s)return!0}}}});{let T=gi(e);for(let C=0,b=T;C<b;C++){Pt(f,3*C,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let R=E,O=E+w;R<O;R++){Pt(d,3*R,c,l),d.needsUpdate=!0;let B=d.distanceToTriangle(f,v,m);if(B<y&&(x.copy(v),p&&p.copy(m),y=B,g=R,_=C),B<s)return!0}}}}}),An.releasePrimitive(d),An.releasePrimitive(f),y===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=y,n.faceIndex=g,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Zl),x.applyMatrix4(Zl),i.distance=x.sub(i.point).length(),i.faceIndex=_),n)}function ng(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position,s,a,o,l,c=0,h=r._roots;for(let d=0,f=h.length;d<f;d++)s=h[d],a=new Uint32Array(s),o=new Uint16Array(s),l=new Float32Array(s),u(0,c),c+=s.byteLength;function u(d,f,v=!1){let x=d*2;if(o[x+15]===65535){let p=a[d+6],y=o[x+14],g=1/0,_=1/0,E=1/0,w=-1/0,T=-1/0,C=-1/0;for(let b=p,R=p+y;b<R;b++){let O=3*r.resolveTriangleIndex(b);for(let B=0;B<3;B++){let X=O+B;X=n?n[X]:X;let I=i.getX(X),W=i.getY(X),q=i.getZ(X);I<g&&(g=I),I>w&&(w=I),W<_&&(_=W),W>T&&(T=W),q<E&&(E=q),q>C&&(C=q)}}return l[d+0]!==g||l[d+1]!==_||l[d+2]!==E||l[d+3]!==w||l[d+4]!==T||l[d+5]!==C?(l[d+0]=g,l[d+1]=_,l[d+2]=E,l[d+3]=w,l[d+4]=T,l[d+5]=C,!0):!1}else{let p=d+8,y=a[d+6],g=p+f,_=y+f,E=v,w=!1,T=!1;e?E||(w=e.has(g),T=e.has(_),E=!w&&!T):(w=!0,T=!0);let C=E||w,b=E||T,R=!1;C&&(R=u(p,f,E));let O=!1;b&&(O=u(y,f,E));let B=R||O;if(B)for(let X=0;X<3;X++){let I=p+X,W=y+X,q=l[I],ie=l[I+3],se=l[W],Z=l[W+3];l[d+X]=q<se?q:se,l[d+X+3]=ie>Z?ie:Z}return B}}}var ig=new S;function sg(r,e,t,n,i){pt.setBuffer(r._roots[e]),sd(0,r,t,n,i),pt.clearBuffer()}function sd(r,e,t,n,i){let{float32Array:s,uint16Array:a,uint32Array:o}=pt,l=r*2;if(qt(l,a)){let h=Kt(r,o),u=en(l,a);qm(e,t,n,h,u,i)}else{let h=cn(r);Zn(h,s,n,ig)&&sd(h,e,t,n,i);let u=hn(r,o);Zn(u,s,n,ig)&&sd(u,e,t,n,i)}}var rg=new S,jM=["x","y","z"];function ag(r,e,t,n){pt.setBuffer(r._roots[e]);let i=rd(0,r,t,n);return pt.clearBuffer(),i}function rd(r,e,t,n){let{float32Array:i,uint16Array:s,uint32Array:a}=pt,o=r*2;if(qt(o,s)){let c=Kt(r,a),h=en(o,s);return jm(e,t,n,c,h)}else{let c=Fl(r,a),h=jM[c],d=n.direction[h]>=0,f,v;d?(f=cn(r),v=hn(r,a)):(f=hn(r,a),v=cn(r));let m=Zn(f,i,n,rg)?rd(f,e,t,n):null;if(m){let g=m.point[h];if(d?g<=i[v+c]:g>=i[v+c+3])return m}let y=Zn(v,i,n,rg)?rd(v,e,t,n):null;return m&&y?m.distance<=y.distance?m:y:m||y||null}}var Kl=new et,Hr=new mn,Vr=new mn,Xa=new Ue,og=new $t,Jl=new $t;function lg(r,e,t,n){pt.setBuffer(r._roots[e]);let i=ad(0,r,t,n);return pt.clearBuffer(),i}function ad(r,e,t,n,i=null){let{float32Array:s,uint16Array:a,uint32Array:o}=pt,l=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),og.set(t.boundingBox.min,t.boundingBox.max,n),i=og),qt(l,a)){let h=e.geometry,u=h.index,d=h.attributes.position,f=t.index,v=t.attributes.position,x=Kt(r,o),m=en(l,a);if(Xa.copy(n).invert(),t.boundsTree)return wt(r,s,Jl),Jl.matrix.copy(Xa),Jl.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>Jl.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let g=x,_=m+x;g<_;g++)if(Pt(Vr,3*e.resolveTriangleIndex(g),u,d),Vr.needsUpdate=!0,y.intersectsTriangle(Vr))return!0;return!1}});for(let p=x,y=m+x;p<y;p++){let g=e.resolveTriangleIndex(p);Pt(Hr,3*g,u,d),Hr.a.applyMatrix4(Xa),Hr.b.applyMatrix4(Xa),Hr.c.applyMatrix4(Xa),Hr.needsUpdate=!0;for(let _=0,E=f.count;_<E;_+=3)if(Pt(Vr,_,f,v),Vr.needsUpdate=!0,Hr.intersectsTriangle(Vr))return!0}}else{let h=r+8,u=o[r+6];return wt(h,s,Kl),!!(i.intersectsBox(Kl)&&ad(h,e,t,n,i)||(wt(u,s,Kl),i.intersectsBox(Kl)&&ad(u,e,t,n,i)))}}var Ql=new Ue,od=new $t,qa=new $t,YM=new S,$M=new S,ZM=new S,KM=new S;function cg(r,e,t,n={},i={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),od.set(e.boundingBox.min,e.boundingBox.max,t),od.needsUpdate=!0;let o=r.geometry,l=o.attributes.position,c=o.index,h=e.attributes.position,u=e.index,d=An.getPrimitive(),f=An.getPrimitive(),v=YM,x=$M,m=null,p=null;i&&(m=ZM,p=KM);let y=1/0,g=null,_=null;return Ql.copy(t).invert(),qa.matrix.copy(Ql),r.shapecast({boundsTraverseOrder:E=>od.distanceToBox(E),intersectsBounds:(E,w,T)=>T<y&&T<a?(w&&(qa.min.copy(E.min),qa.max.copy(E.max),qa.needsUpdate=!0),!0):!1,intersectsRange:(E,w)=>{if(e.boundsTree){let T=e.boundsTree;return T.shapecast({boundsTraverseOrder:C=>qa.distanceToBox(C),intersectsBounds:(C,b,R)=>R<y&&R<a,intersectsRange:(C,b)=>{for(let R=C,O=C+b;R<O;R++){let B=T.resolveTriangleIndex(R);Pt(f,3*B,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let X=E,I=E+w;X<I;X++){let W=r.resolveTriangleIndex(X);Pt(d,3*W,c,l),d.needsUpdate=!0;let q=d.distanceToTriangle(f,v,m);if(q<y&&(x.copy(v),p&&p.copy(m),y=q,g=X,_=R),q<s)return!0}}}})}else{let T=gi(e);for(let C=0,b=T;C<b;C++){Pt(f,3*C,u,h),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let R=E,O=E+w;R<O;R++){let B=r.resolveTriangleIndex(R);Pt(d,3*B,c,l),d.needsUpdate=!0;let X=d.distanceToTriangle(f,v,m);if(X<y&&(x.copy(v),p&&p.copy(m),y=X,g=R,_=C),X<s)return!0}}}}}),An.releasePrimitive(d),An.releasePrimitive(f),y===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=y,n.faceIndex=g,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Ql),x.applyMatrix4(Ql),i.distance=x.sub(i.point).length(),i.faceIndex=_),n)}function hg(){return typeof SharedArrayBuffer<"u"}var ja=new pt.constructor,ec=new pt.constructor,ss=new ns(()=>new et),Gr=new et,Wr=new et,ld=new et,cd=new et,hd=!1;function ug(r,e,t,n){if(hd)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");hd=!0;let i=r._roots,s=e._roots,a,o=0,l=0,c=new Ue().copy(t).invert();for(let h=0,u=i.length;h<u;h++){ja.setBuffer(i[h]),l=0;let d=ss.getPrimitive();wt(0,ja.float32Array,d),d.applyMatrix4(c);for(let f=0,v=s.length;f<v&&(ec.setBuffer(s[h]),a=ai(0,0,t,c,n,o,l,0,0,d),ec.clearBuffer(),l+=s[f].length,!a);f++);if(ss.releasePrimitive(d),ja.clearBuffer(),o+=i[h].length,a)break}return hd=!1,a}function ai(r,e,t,n,i,s=0,a=0,o=0,l=0,c=null,h=!1){let u,d;h?(u=ec,d=ja):(u=ja,d=ec);let f=u.float32Array,v=u.uint32Array,x=u.uint16Array,m=d.float32Array,p=d.uint32Array,y=d.uint16Array,g=r*2,_=e*2,E=qt(g,x),w=qt(_,y),T=!1;if(w&&E)h?T=i(Kt(e,p),en(e*2,y),Kt(r,v),en(r*2,x),l,a+e,o,s+r):T=i(Kt(r,v),en(r*2,x),Kt(e,p),en(e*2,y),o,s+r,l,a+e);else if(w){let C=ss.getPrimitive();wt(e,m,C),C.applyMatrix4(t);let b=cn(r),R=hn(r,v);wt(b,f,Gr),wt(R,f,Wr);let O=C.intersectsBox(Gr),B=C.intersectsBox(Wr);T=O&&ai(e,b,n,t,i,a,s,l,o+1,C,!h)||B&&ai(e,R,n,t,i,a,s,l,o+1,C,!h),ss.releasePrimitive(C)}else{let C=cn(e),b=hn(e,p);wt(C,m,ld),wt(b,m,cd);let R=c.intersectsBox(ld),O=c.intersectsBox(cd);if(R&&O)T=ai(r,C,t,n,i,s,a,o,l+1,c,h)||ai(r,b,t,n,i,s,a,o,l+1,c,h);else if(R)if(E)T=ai(r,C,t,n,i,s,a,o,l+1,c,h);else{let B=ss.getPrimitive();B.copy(ld).applyMatrix4(t);let X=cn(r),I=hn(r,v);wt(X,f,Gr),wt(I,f,Wr);let W=B.intersectsBox(Gr),q=B.intersectsBox(Wr);T=W&&ai(C,X,n,t,i,a,s,l,o+1,B,!h)||q&&ai(C,I,n,t,i,a,s,l,o+1,B,!h),ss.releasePrimitive(B)}else if(O)if(E)T=ai(r,b,t,n,i,s,a,o,l+1,c,h);else{let B=ss.getPrimitive();B.copy(cd).applyMatrix4(t);let X=cn(r),I=hn(r,v);wt(X,f,Gr),wt(I,f,Wr);let W=B.intersectsBox(Gr),q=B.intersectsBox(Wr);T=W&&ai(b,X,n,t,i,a,s,l,o+1,B,!h)||q&&ai(b,I,n,t,i,a,s,l,o+1,B,!h),ss.releasePrimitive(B)}}return T}var tc=new $t,dg=new et,JM={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0},nc=class r{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,i=e._roots,s=e._indirectBuffer,a=n.getIndex(),o;return t.cloneBuffers?o={roots:i.map(l=>l.slice()),index:a.array.slice(),indirectBuffer:s?s.slice():null}:o={roots:i,index:a.array,indirectBuffer:s},o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};let{index:i,roots:s,indirectBuffer:a}=e,o=new r(t,{...n,[Nl]:!0});if(o._roots=s,o._indirectBuffer=a||null,n.setIndex){let l=t.getIndex();if(l===null){let c=new Ht(e.index,1,!1);t.setIndex(c)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...JM,[Nl]:!1},t),t.useSharedArrayBuffer&&!hg())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Nl]||(km(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new et)));let{_indirectBuffer:n}=this;this.resolveTriangleIndex=t.indirect?i=>n[i]:i=>i}refit(e=null){return(this.indirect?ng:Wm)(this,e)}traverse(e,t=0){let n=this._roots[t],i=new Uint32Array(n),s=new Uint16Array(n);a(0);function a(o,l=0){let c=o*2,h=s[c+15]===65535;if(h){let u=i[o+6],d=s[c+14];e(l,h,new Float32Array(n,o*4,6),u,d)}else{let u=o+32/4,d=i[o+6],f=i[o+7];e(l,h,new Float32Array(n,o*4,6),f)||(a(u,l+1),a(d,l+1))}}}raycast(e,t=On){let n=this._roots,i=this.geometry,s=[],a=t.isMaterial,o=Array.isArray(t),l=i.groups,c=a?t.side:t,h=this.indirect?sg:Zm;for(let u=0,d=n.length;u<d;u++){let f=o?t[l[u].materialIndex].side:c,v=s.length;if(h(this,u,f,e,s),o){let x=l[u].materialIndex;for(let m=v,p=s.length;m<p;m++)s[m].face.materialIndex=x}}return s}raycastFirst(e,t=On){let n=this._roots,i=this.geometry,s=t.isMaterial,a=Array.isArray(t),o=null,l=i.groups,c=s?t.side:t,h=this.indirect?ag:Jm;for(let u=0,d=n.length;u<d;u++){let f=a?t[l[u].materialIndex].side:c,v=h(this,u,f,e);v!=null&&(o==null||v.distance<o.distance)&&(o=v,a&&(v.face.materialIndex=l[u].materialIndex))}return o}intersectsGeometry(e,t){let n=!1,i=this._roots,s=this.indirect?lg:eg;for(let a=0,o=i.length;a<o&&(n=s(this,a,e,t),!n);a++);return n}shapecast(e){let t=An.getPrimitive(),n=this.indirect?Ym:Gm,{boundsTraverseOrder:i,intersectsBounds:s,intersectsRange:a,intersectsTriangle:o}=e;if(a&&o){let u=a;a=(d,f,v,x,m)=>u(d,f,v,x,m)?!0:n(d,f,this,o,v,x,t)}else a||(o?a=(u,d,f,v)=>n(u,d,this,o,f,v,t):a=(u,d,f)=>f);let l=!1,c=0,h=this._roots;for(let u=0,d=h.length;u<d;u++){let f=h[u];if(l=Nm(this,u,s,a,i,c),l)break;c+=f.byteLength}return An.releasePrimitive(t),l}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:s}=n,a=An.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?v=>{let x=this.resolveTriangleIndex(v);Pt(a,x*3,o,l)}:v=>{Pt(a,v*3,o,l)},h=An.getPrimitive(),u=e.geometry.index,d=e.geometry.attributes.position,f=e.indirect?v=>{let x=e.resolveTriangleIndex(v);Pt(h,x*3,u,d)}:v=>{Pt(h,v*3,u,d)};if(s){let v=(x,m,p,y,g,_,E,w)=>{for(let T=p,C=p+y;T<C;T++){f(T),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let b=x,R=x+m;b<R;b++)if(c(b),a.needsUpdate=!0,s(a,h,b,T,g,_,E,w))return!0}return!1};if(i){let x=i;i=function(m,p,y,g,_,E,w,T){return x(m,p,y,g,_,E,w,T)?!0:v(m,p,y,g,_,E,w,T)}}else i=v}return ug(this,e,t,i)}intersectsBox(e,t){return tc.set(e.min,e.max,t),tc.needsUpdate=!0,this.shapecast({intersectsBounds:n=>tc.intersectsBox(n),intersectsTriangle:n=>tc.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},s=0,a=1/0){return(this.indirect?cg:tg)(this,e,t,n,i,s,a)}closestPointToPoint(e,t={},n=0,i=1/0){return Bm(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{wt(0,new Float32Array(n),dg),e.union(dg)}),e}};function ud(r,e,t){return r===null||(r.point.applyMatrix4(e.matrixWorld),r.distance=r.point.distanceTo(t.ray.origin),r.object=e,r.distance<t.near||r.distance>t.far)?null:r}var dd=new si,fg=new Ue,QM=Ae.prototype.raycast;function fd(r,e){if(this.geometry.boundsTree){if(this.material===void 0)return;fg.copy(this.matrixWorld).invert(),dd.copy(r.ray).applyMatrix4(fg);let t=this.geometry.boundsTree;if(r.firstHitOnly===!0){let n=ud(t.raycastFirst(dd,this.material),this,r);n&&e.push(n)}else{let n=t.raycast(dd,this.material);for(let i=0,s=n.length;i<s;i++){let a=ud(n[i],this,r);a&&e.push(a)}}}else QM.call(this,r,e)}function pd(r){return this.boundsTree=new nc(this,r),this.boundsTree}function md(){this.boundsTree=null}var pg=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var mg=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`;var TE=`
	${pg}
	${mg}
`;function Xr(r){let e=r>>>0,t=()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return t.int=n=>Math.floor(t()*n),t.range=(n,i)=>n+t()*(i-n),t.pick=n=>n[Math.floor(t()*n.length)],t.shuffle=n=>{let i=n.slice();for(let s=i.length-1;s>0;s--){let a=Math.floor(t()*(s+1));[i[s],i[a]]=[i[a],i[s]]}return i},t}function tw(r){let e=2166136261;for(let t=0;t<r.length;t++)e^=r.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}var zn=(r,e,t)=>Math.max(e,Math.min(t,r));function U(r,e={},...t){let n=document.createElement(r);for(let[i,s]of Object.entries(e||{}))s==null||s===!1||(i==="class"?n.className=s:i==="style"&&typeof s=="object"?Object.assign(n.style,s):i.startsWith("on")&&typeof s=="function"?n.addEventListener(i.slice(2),s):i==="html"?n.innerHTML=s:n.setAttribute(i,s===!0?"":s));for(let i of t.flat(1/0))i==null||i===!1||n.append(i instanceof Node?i:document.createTextNode(String(i)));return n}var kn={get(r,e){try{let t=localStorage.getItem("100dreams:"+r);return t==null?e:JSON.parse(t)}catch{return e}},set(r,e){try{localStorage.setItem("100dreams:"+r,JSON.stringify(e))}catch{}}};function gd(r){return r=Math.max(0,Math.ceil(r)),`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`}function un(r,e=2){return Number(r).toLocaleString("id-ID",{maximumFractionDigits:e})}function ic(){let r=new Date;return tw(`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}`)}function vd(r){return String(r).replace(/\s/g,"_").replace(/[\[\]\.:\/]/g,"")}var gg=()=>matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;Dt.prototype.computeBoundsTree=pd;Dt.prototype.disposeBoundsTree=md;Ae.prototype.raycast=fd;var nw="varying vec3 vDir; void main(){ vDir = normalize((modelMatrix*vec4(position,1.0)).xyz - cameraPosition); gl_Position = projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }",iw=`uniform vec3 top; uniform vec3 mid; uniform vec3 low; uniform float stars; uniform float time; varying vec3 vDir;
float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
void main(){ float y = vDir.y; vec3 c = y>0.0 ? mix(mid, top, pow(y,0.55)) : mix(mid, low, pow(-y,0.6));
 vec3 q = floor(vDir*260.0); float s = step(0.9975, h(q)) * smoothstep(0.05,0.4,y) * stars; s *= 0.6+0.4*sin(time*2.0+h(q)*40.0);
 gl_FragColor = vec4(c + vec3(s), 1.0); }`,sc=class{constructor(e){this.app=e,this.root=new Mt,this.dynamic=new Mt,this.dynamic.name="__dreams_dynamic",this.colliders=[],this.byName=new Map,this.meta=new Map,this.doors=[],this.mixers=[],this.clips=[],this.bounds=new et,this.center=new S,this.size=new S,this.ray=new Mr,this.ray.firstHitOnly=!0}async load(e,t,n){let i=new Il;n?.(.1,"Membaca geometri dunia");let s=await new Promise((c,h)=>i.parse(e,"",c,h));this.gltf=s,this.root.add(s.scene),this.app.scene.add(this.root,this.dynamic),n?.(.45,"Menyiapkan material dan cahaya");for(let c of t.objects||[])this.meta.set(vd(c.name),c);let a=0,o=t.environment||{},l=jn.clamp((o.strength??1)*(o.hdri?1.35:1),.2,1.8);if(s.scene.updateMatrixWorld(!0),s.scene.traverse(c=>{if(c.name&&this.byName.set(c.name,c),c.isLight&&(a++,c.intensity=(c.intensity??1)*(c.isDirectionalLight?1.5:1.15),(c.isDirectionalLight||c.isSpotLight&&a<=4)&&(c.castShadow=!0,c.shadow.bias=-4e-4,c.shadow.normalBias=.02)),c.isMesh){c.castShadow=!0,c.receiveShadow=!0;for(let h of[].concat(c.material))h.transparent&&h.opacity<1&&(c.castShadow=!1),h.map&&(h.map.colorSpace=xt),"envMapIntensity"in h&&(h.envMapIntensity=.45*l)}}),this.bounds.setFromObject(s.scene,!0),this.bounds.isEmpty()&&this.bounds.set(new S(-5,0,-5),new S(5,3,5)),this.bounds.getCenter(this.center),this.bounds.getSize(this.size),this.radius=Math.max(4,this.size.length()/2),this.floorY=this.bounds.min.y,this.showcase=Math.max(this.size.x,this.size.y,this.size.z)<3,(a===0||!t.lights?.some(c=>c.type==="SUN"))&&this.addDefaultLights(a===0),this.fitShadowCameras(),this.setupSky(t.environment||{}),n?.(.65,"Membangun sistem tabrakan"),this.buildColliders(t),this.addSafetyFloor(),this.setupDoors(),n?.(.8,"Menghidupkan animasi"),s.animations?.length){let c=new ml(s.scene);this.mixers.push(c),this.clips=s.animations;for(let h of s.animations)/walk|run/i.test(h.name)&&s.animations.length>1||c.clipAction(h).play();this.mainMixer=c}return this.cameras=s.cameras||[],s}addDefaultLights(e){let t=new dl(14673663,3814182,e?.9:.35);t.name="__dreams_hemi";let n=new _r(16773596,e?3.2:1.2);n.name="__dreams_sun",n.position.copy(this.center).add(new S(.6,1,.45).normalize().multiplyScalar(this.radius*2)),n.target.position.copy(this.center),n.castShadow=!0,n.shadow.bias=-4e-4,n.shadow.normalBias=.02,this.app.scene.add(t,n,n.target),this.sun=n}fitShadowCameras(){let e=new et;this.gltf.scene.traverse(s=>{if(s.isMesh){let a=new et().setFromObject(s),o=a.getSize(new S);Math.max(o.x,o.z)<this.radius*.8&&e.union(a)}});let t=e.isEmpty()?this.radius:e.getSize(new S).length()/2,n=Math.min(this.radius*1.3,t*1.5+8),i=e.isEmpty()?this.center:e.getCenter(new S);this.app.scene.traverse(s=>{if(s.isDirectionalLight&&s.castShadow){let a=s.shadow.camera;a.left=-n,a.right=n,a.top=n,a.bottom=-n,a.near=.1,a.far=n*6;let o=s.position.clone().sub(s.target.getWorldPosition(new S)).normalize();s.target.parent==null&&this.app.scene.add(s.target),s.target.position.copy(i),s.position.copy(i).addScaledVector(o,n*2.5),s.target.updateMatrixWorld(),s.shadow.bias=-5e-4,s.shadow.normalBias=.04,a.updateProjectionMatrix(),this.sun||(this.sun=s)}})}setupSky(e){let t=e.color?new Se().fromArray(e.color):null,n=new Se("#1d2a5e"),i=new Se("#8a7fb8"),s=new Se("#2a2440");if(t){let l=t.r*.3+t.g*.59+t.b*.11;i.lerp(t.clone().convertLinearToSRGB(),.55),l>.4&&n.lerp(new Se("#6c8fd8"),.7)}let a=t?t.r*.3+t.g*.59+t.b*.11:0;this.skyUniforms={top:{value:n},mid:{value:i},low:{value:s},stars:{value:a>.12?0:1},time:{value:0}};let o=new Ae(new En(1,32,16),new ut({uniforms:this.skyUniforms,vertexShader:nw,fragmentShader:iw,side:Qt,depthWrite:!1}));o.scale.setScalar(4e3),o.frustumCulled=!1,o.renderOrder=-1,o.name="__dreams_sky",this.sky=o,this.app.scene.add(o),this.app.scene.fog=new Yo(i.clone().multiplyScalar(.6),.22/Math.max(this.radius*8,60))}async loadEnvironmentMap(e,t){let i=(t==="exr"?new Ul:new kl).parse(e),s=new ui(i.data,i.width,i.height,i.format,i.type);s.mapping=fa,s.colorSpace=It,s.minFilter=Rt,s.magFilter=Rt,s.generateMipmaps=!1,s.flipY=!0,s.needsUpdate=!0,this.app.renderer.setEnvironmentTexture(s,!0),this.sky.visible=!1,this.app.scene.fog=null}buildColliders(e){let t=new Set(["character","animal","light","camera","water"]);this.gltf.scene.traverse(n=>{if(!n.isMesh)return;let i=null,s=n;for(;s&&!i;)i=this.meta.get(s.name),s=s.parent;n.userData.dreamsMeta=i,!(i&&(t.has(i.role)||i.collide===!1))&&(n.geometry.boundsTree||n.geometry.computeBoundsTree(),this.colliders.push(n))})}addSafetyFloor(){let e=this.castDown(this.center.x,this.center.z,this.bounds.max.y+5,1e4),t=Math.max(this.size.x,this.size.z)*3+60,n=new Ri(t/2,64);n.rotateX(-Math.PI/2);let i=new _t({color:"#2c2a44",roughness:.55,metalness:.15,transparent:!0,opacity:.92}),s=new Ae(n,i);s.position.set(this.center.x,this.floorY-.02,this.center.z),s.receiveShadow=!0,s.name="__dreams_floor",s.geometry.computeBoundsTree(),this.app.scene.add(s),this.colliders.push(s),this.safetyFloor=s,this.groundY=e?e.point.y:this.floorY}setupDoors(){for(let[e,t]of this.meta){if(t.role!=="door")continue;let n=this.byName.get(e);if(!n)continue;let i=new et().setFromObject(n),s=i.getSize(new S),a=new Mt,o=s.x>=s.z;a.position.set(o?i.min.x:(i.min.x+i.max.x)/2,i.min.y,o?(i.min.z+i.max.z)/2:i.min.z),n.parent.add(a),a.updateMatrixWorld(!0),a.attach(n),this.doors.push({name:e,node:n,pivot:a,open:!1,angle:0,target:0,meta:t})}}setBaguaVisible(e){if(this.bagua){this.bagua.visible=e;for(let[t,n]of this.meta)if(n.role==="roof"){let i=this.byName.get(t);i&&(i.visible=!e)}}}toggleDoor(e){e.open=!e.open,e.target=e.open?-Math.PI*.55:0,this.app.audio?.sfx(e.open?"open":"close")}update(e,t){for(let n of this.mixers)n.update(e);this.skyUniforms&&(this.skyUniforms.time.value=t);for(let n of this.doors)Math.abs(n.angle-n.target)>.001&&(n.angle+=(n.target-n.angle)*Math.min(1,e*5),n.pivot.rotation.y=n.angle,n.pivot.updateMatrixWorld(!0))}isDoorBlocking(e){for(let t of this.doors){if(!t.open)continue;let n=e;for(;n;){if(n===t.node)return!1;n=n.parent}}return!0}raycast(e,t,n,i=[]){this.ray.set(e,t),this.ray.far=n;let s=this.ray.intersectObjects(this.colliders.concat(i),!1);for(let a of s)if(this.isDoorBlocking(a.object))return a;return null}castDown(e,t,n,i=200,s=[]){return this.raycast(new S(e,n,t),new S(0,-1,0),i,s)}sample(e,t={}){let n=this.bounds.max.y+2,i=this.showcase?8:2,s=t.near,a=t.radius;for(let h=0;h<80;h++){let u,d;if(s&&a){let m=e()*Math.PI*2,p=Math.sqrt(e())*a;u=s.x+Math.cos(m)*p,d=s.z+Math.sin(m)*p}else u=e.range(this.bounds.min.x-i,this.bounds.max.x+i),d=e.range(this.bounds.min.z-i,this.bounds.max.z+i);let f=this.castDown(u,d,n,n-this.floorY+50);if(!f||f.face&&f.face.normal&&this.worldNormalY(f)<.7)continue;let v=f.point.clone();if(t.sameLevel!=null&&Math.abs(v.y-t.sameLevel)>3.2||t.minDist&&t.from&&v.distanceTo(t.from)<t.minDist)continue;let x=this.raycast(v.clone().add(new S(0,.1,0)),new S(0,1,0),30);if(!(x&&x.distance<1.9)&&!(t.interior&&!x))return v}let o=e()*Math.PI*2,l=(s?a||6:this.radius)*Math.sqrt(e()),c=s||this.center;return new S(c.x+Math.cos(o)*l,this.groundY,c.z+Math.sin(o)*l)}worldNormalY(e){return e.face.normal.clone().transformDirection(e.object.matrixWorld).y}spawnPoint(e){let t=[...this.byName.values()].find(c=>/^(spawn|playerstart|player_start|start)$/i.test(c.name));if(t){let c=t.getWorldPosition(new S),h=this.castDown(c.x,c.z,c.y+1.5,50);return h?h.point:c}let n=new et;for(let c of e.objects||[]){if(["terrain","plant","light","camera","water"].includes(c.role))continue;let h=new S().fromArray(c.center),u=new S().fromArray(c.dims).multiplyScalar(.5);n.union(new et(h.clone().sub(u),h.clone().add(u)))}let i=n.isEmpty()?this.bounds:n,s=i.getCenter(new S),a=i.getSize(new S);this.focus=s;let o=new S(s.x,0,i.max.z+(this.showcase?4:Math.min(7,a.z*.4+3))),l=this.castDown(o.x,o.z,this.bounds.max.y+2,1e4);return l?l.point:new S(o.x,this.groundY,o.z)}metaFor(e){let t=e;for(;t;){let n=this.meta.get(t.name);if(n)return{meta:n,node:this.byName.get(t.name)||t};t=t.parent}return null}nodeFor(e){return this.byName.get(vd(e.name))}worldPos(e){let t=this.nodeFor(e);if(t){let n=new et().setFromObject(t);return n.isEmpty()?t.getWorldPosition(new S):n.getCenter(new S)}return new S().fromArray(e.center||[0,0,0])}buildBaguaOverlay(e){if(!e?.grid)return null;let t=new Mt;t.name="__dreams_bagua";let{min:n,max:i,cells:s}=e.grid,a=(i[0]-n[0])/3,o=(i[1]-n[1])/3,l=this.groundY+.03;for(let c of s){let h=n[0]+a*(c.col+.5),u=n[1]+o*(c.row+.5),d=new Ae(new gs(a*.97,o*.97),new Ut({color:c.color,transparent:!0,opacity:.16,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(h,l,u);let f=document.createElement("canvas");f.width=512,f.height=256;let v=f.getContext("2d");v.fillStyle="rgba(15,18,40,0.72)",v.fillRect(0,0,512,256),v.fillStyle="#ffe2a6",v.font="600 54px Figtree, system-ui, sans-serif",v.textAlign="center",v.fillText(c.label,256,110),v.fillStyle="#c9cdf5",v.font="400 36px Figtree, system-ui, sans-serif",v.fillText(c.sub,256,175);let x=new pr(f);x.colorSpace=xt;let m=new dr(new ys({map:x,depthTest:!1,transparent:!0,toneMapped:!1,fog:!1})),p=Math.max(1.6,Math.min(a,o)*.75);m.scale.set(p,p/2,1),m.position.set(h,l+Math.min(2.2,p*.6),u),m.renderOrder=10,t.add(d,m)}return t.visible=!1,this.app.scene.add(t),this.bagua=t,t}};var vg={type:"change"},xd={type:"start"},xg={type:"end"},rc=new si,yg=new Mn,sw=Math.cos(70*jn.DEG2RAD),ac=class extends ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",Oe),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vg),n.update(),s=i.NONE},this.update=function(){let F=new S,oe=new Lt().setFromUnitVectors(e.up,new S(0,1,0)),Me=oe.clone().invert(),Ce=new S,j=new Lt,G=new S,ve=2*Math.PI;return function(Ye=null){let Ge=n.object.position;F.copy(Ge).sub(n.target),F.applyQuaternion(oe),o.setFromVector3(F),n.autoRotate&&s===i.NONE&&B(R(Ye)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let st=n.minAzimuthAngle,rt=n.maxAzimuthAngle;isFinite(st)&&isFinite(rt)&&(st<-Math.PI?st+=ve:st>Math.PI&&(st-=ve),rt<-Math.PI?rt+=ve:rt>Math.PI&&(rt-=ve),st<=rt?o.theta=Math.max(st,Math.min(rt,o.theta)):o.theta=o.theta>(st+rt)/2?Math.max(st,o.theta):Math.min(rt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=ne(o.radius):o.radius=ne(o.radius*c),F.setFromSpherical(o),F.applyQuaternion(Me),Ge.copy(n.target).add(F),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ot=!1;if(n.zoomToCursor&&w){let Wt=null;if(n.object.isPerspectiveCamera){let ht=F.length();Wt=ne(ht*c);let jt=ht-Wt;n.object.position.addScaledVector(_,jt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let ht=new S(E.x,E.y,0);ht.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ot=!0;let jt=new S(E.x,E.y,0);jt.unproject(n.object),n.object.position.sub(jt).add(ht),n.object.updateMatrixWorld(),Wt=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Wt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Wt).add(n.object.position):(rc.origin.copy(n.object.position),rc.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(rc.direction))<sw?e.lookAt(n.target):(yg.setFromNormalAndCoplanarPoint(n.object.up,n.target),rc.intersectPlane(yg,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ot=!0);return c=1,w=!1,Ot||Ce.distanceToSquared(n.object.position)>a||8*(1-j.dot(n.object.quaternion))>a||G.distanceToSquared(n.target)>0?(n.dispatchEvent(vg),Ce.copy(n.object.position),j.copy(n.object.quaternion),G.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",it),n.domElement.removeEventListener("pointerdown",D),n.domElement.removeEventListener("pointercancel",$),n.domElement.removeEventListener("wheel",pe),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",$),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Oe),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,a=1e-6,o=new Ea,l=new Ea,c=1,h=new S,u=new te,d=new te,f=new te,v=new te,x=new te,m=new te,p=new te,y=new te,g=new te,_=new S,E=new te,w=!1,T=[],C={},b=!1;function R(F){return F!==null?2*Math.PI/60*n.autoRotateSpeed*F:2*Math.PI/60/60*n.autoRotateSpeed}function O(F){let oe=Math.abs(F*.01);return Math.pow(.95,n.zoomSpeed*oe)}function B(F){l.theta-=F}function X(F){l.phi-=F}let I=function(){let F=new S;return function(Me,Ce){F.setFromMatrixColumn(Ce,0),F.multiplyScalar(-Me),h.add(F)}}(),W=function(){let F=new S;return function(Me,Ce){n.screenSpacePanning===!0?F.setFromMatrixColumn(Ce,1):(F.setFromMatrixColumn(Ce,0),F.crossVectors(n.object.up,F)),F.multiplyScalar(Me),h.add(F)}}(),q=function(){let F=new S;return function(Me,Ce){let j=n.domElement;if(n.object.isPerspectiveCamera){let G=n.object.position;F.copy(G).sub(n.target);let ve=F.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),I(2*Me*ve/j.clientHeight,n.object.matrix),W(2*Ce*ve/j.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(Me*(n.object.right-n.object.left)/n.object.zoom/j.clientWidth,n.object.matrix),W(Ce*(n.object.top-n.object.bottom)/n.object.zoom/j.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ie(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(F,oe){if(!n.zoomToCursor)return;w=!0;let Me=n.domElement.getBoundingClientRect(),Ce=F-Me.left,j=oe-Me.top,G=Me.width,ve=Me.height;E.x=Ce/G*2-1,E.y=-(j/ve)*2+1,_.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function ne(F){return Math.max(n.minDistance,Math.min(n.maxDistance,F))}function ae(F){u.set(F.clientX,F.clientY)}function de(F){Z(F.clientX,F.clientX),p.set(F.clientX,F.clientY)}function K(F){v.set(F.clientX,F.clientY)}function re(F){d.set(F.clientX,F.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let oe=n.domElement;B(2*Math.PI*f.x/oe.clientHeight),X(2*Math.PI*f.y/oe.clientHeight),u.copy(d),n.update()}function ye(F){y.set(F.clientX,F.clientY),g.subVectors(y,p),g.y>0?ie(O(g.y)):g.y<0&&se(O(g.y)),p.copy(y),n.update()}function ge(F){x.set(F.clientX,F.clientY),m.subVectors(x,v).multiplyScalar(n.panSpeed),q(m.x,m.y),v.copy(x),n.update()}function Ee(F){Z(F.clientX,F.clientY),F.deltaY<0?se(O(F.deltaY)):F.deltaY>0&&ie(O(F.deltaY)),n.update()}function Ne(F){let oe=!1;switch(F.code){case n.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,n.keyPanSpeed),oe=!0;break;case n.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,-n.keyPanSpeed),oe=!0;break;case n.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(n.keyPanSpeed,0),oe=!0;break;case n.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(-n.keyPanSpeed,0),oe=!0;break}oe&&(F.preventDefault(),n.update())}function Ve(F){if(T.length===1)u.set(F.pageX,F.pageY);else{let oe=Re(F),Me=.5*(F.pageX+oe.x),Ce=.5*(F.pageY+oe.y);u.set(Me,Ce)}}function Be(F){if(T.length===1)v.set(F.pageX,F.pageY);else{let oe=Re(F),Me=.5*(F.pageX+oe.x),Ce=.5*(F.pageY+oe.y);v.set(Me,Ce)}}function Qe(F){let oe=Re(F),Me=F.pageX-oe.x,Ce=F.pageY-oe.y,j=Math.sqrt(Me*Me+Ce*Ce);p.set(0,j)}function J(F){n.enableZoom&&Qe(F),n.enablePan&&Be(F)}function Bt(F){n.enableZoom&&Qe(F),n.enableRotate&&Ve(F)}function Fe(F){if(T.length==1)d.set(F.pageX,F.pageY);else{let Me=Re(F),Ce=.5*(F.pageX+Me.x),j=.5*(F.pageY+Me.y);d.set(Ce,j)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let oe=n.domElement;B(2*Math.PI*f.x/oe.clientHeight),X(2*Math.PI*f.y/oe.clientHeight),u.copy(d)}function Xe(F){if(T.length===1)x.set(F.pageX,F.pageY);else{let oe=Re(F),Me=.5*(F.pageX+oe.x),Ce=.5*(F.pageY+oe.y);x.set(Me,Ce)}m.subVectors(x,v).multiplyScalar(n.panSpeed),q(m.x,m.y),v.copy(x)}function De(F){let oe=Re(F),Me=F.pageX-oe.x,Ce=F.pageY-oe.y,j=Math.sqrt(Me*Me+Ce*Ce);y.set(0,j),g.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),ie(g.y),p.copy(y);let G=(F.pageX+oe.x)*.5,ve=(F.pageY+oe.y)*.5;Z(G,ve)}function gt(F){n.enableZoom&&De(F),n.enablePan&&Xe(F)}function $e(F){n.enableZoom&&De(F),n.enableRotate&&Fe(F)}function D(F){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",$)),Ke(F),F.pointerType==="touch"?qe(F):fe(F))}function P(F){n.enabled!==!1&&(F.pointerType==="touch"?ce(F):he(F))}function $(F){We(F),T.length===0&&(n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",$)),n.dispatchEvent(xg),s=i.NONE}function fe(F){let oe;switch(F.button){case 0:oe=n.mouseButtons.LEFT;break;case 1:oe=n.mouseButtons.MIDDLE;break;case 2:oe=n.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case ws.DOLLY:if(n.enableZoom===!1)return;de(F),s=i.DOLLY;break;case ws.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enablePan===!1)return;K(F),s=i.PAN}else{if(n.enableRotate===!1)return;ae(F),s=i.ROTATE}break;case ws.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enableRotate===!1)return;ae(F),s=i.ROTATE}else{if(n.enablePan===!1)return;K(F),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(xd)}function he(F){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;re(F);break;case i.DOLLY:if(n.enableZoom===!1)return;ye(F);break;case i.PAN:if(n.enablePan===!1)return;ge(F);break}}function pe(F){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(F.preventDefault(),n.dispatchEvent(xd),Ee(ke(F)),n.dispatchEvent(xg))}function ke(F){let oe=F.deltaMode,Me={clientX:F.clientX,clientY:F.clientY,deltaY:F.deltaY};switch(oe){case 1:Me.deltaY*=16;break;case 2:Me.deltaY*=100;break}return F.ctrlKey&&!b&&(Me.deltaY*=10),Me}function be(F){F.key==="Control"&&(b=!0,document.addEventListener("keyup",Le,{passive:!0,capture:!0}))}function Le(F){F.key==="Control"&&(b=!1,document.removeEventListener("keyup",Le,{passive:!0,capture:!0}))}function Oe(F){n.enabled===!1||n.enablePan===!1||Ne(F)}function qe(F){switch(Pe(F),T.length){case 1:switch(n.touches.ONE){case Ss.ROTATE:if(n.enableRotate===!1)return;Ve(F),s=i.TOUCH_ROTATE;break;case Ss.PAN:if(n.enablePan===!1)return;Be(F),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ss.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;J(F),s=i.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Bt(F),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(xd)}function ce(F){switch(Pe(F),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Fe(F),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Xe(F),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;gt(F),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;$e(F),n.update();break;default:s=i.NONE}}function it(F){n.enabled!==!1&&F.preventDefault()}function Ke(F){T.push(F.pointerId)}function We(F){delete C[F.pointerId];for(let oe=0;oe<T.length;oe++)if(T[oe]==F.pointerId){T.splice(oe,1);return}}function Pe(F){let oe=C[F.pointerId];oe===void 0&&(oe=new te,C[F.pointerId]=oe),oe.set(F.pageX,F.pageY)}function Re(F){let oe=F.pointerId===T[0]?T[1]:T[0];return C[oe]}n.domElement.addEventListener("contextmenu",it),n.domElement.addEventListener("pointerdown",D),n.domElement.addEventListener("pointercancel",$),n.domElement.addEventListener("wheel",pe,{passive:!1}),document.addEventListener("keydown",be,{passive:!0,capture:!0}),this.update()}};var oc=class{constructor(e){this.canvas=e,this.keys=new Set,this.pressed=new Set,this.look={x:0,y:0},this.joy={x:0,y:0,active:!1},this.mouse=new te(0,0),this.clicked=!1,this.enabled=!0,addEventListener("keydown",t=>{t.target.closest?.("input,textarea,select")||(this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code),(t.code==="Space"||t.code==="ArrowLeft"||t.code==="ArrowRight"||t.code==="ArrowUp"||t.code==="ArrowDown")&&t.preventDefault())}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),e.addEventListener("mousemove",t=>{this.mouse.set(t.clientX/innerWidth*2-1,-(t.clientY/innerHeight)*2+1),document.pointerLockElement===e?(this.look.x+=t.movementX,this.look.y+=t.movementY):t.buttons&2&&(this.look.x+=t.movementX,this.look.y+=t.movementY)}),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("click",()=>{this.clicked=!0})}down(...e){return this.enabled&&e.some(t=>this.keys.has(t))}hit(...e){return this.enabled&&e.some(t=>this.pressed.has(t))}axis(){let e=(this.down("KeyD")?1:0)-(this.down("KeyA")?1:0),t=(this.down("KeyW")?1:0)-(this.down("KeyS")?1:0);return this.joy.active&&(e=this.joy.x,t=this.joy.y),{x:e,y:t}}endFrame(){this.pressed.clear(),this.look.x=0,this.look.y=0,this.clicked=!1}buildTouch(e,t){let n=U("div",{class:"joy","aria-hidden":"true"},U("div",{class:"joy-knob"})),i=n.firstChild,s=null,a=0,o=0;n.addEventListener("pointerdown",x=>{s=x.pointerId,n.setPointerCapture(s);let m=n.getBoundingClientRect();a=m.left+m.width/2,o=m.top+m.height/2,this.joy.active=!0,l(x)});let l=x=>{if(x.pointerId!==s)return;let m=zn((x.clientX-a)/52,-1,1),p=zn((x.clientY-o)/52,-1,1);this.joy.x=m,this.joy.y=-p,i.style.transform=`translate(${m*38}px,${p*38}px)`};n.addEventListener("pointermove",l);let c=x=>{x.pointerId===s&&(s=null,this.joy.active=!1,this.joy.x=this.joy.y=0,i.style.transform="")};n.addEventListener("pointerup",c),n.addEventListener("pointercancel",c);let h=null,u=0,d=0;this.canvas.addEventListener("pointerdown",x=>{x.pointerType==="touch"&&(h=x.pointerId,u=x.clientX,d=x.clientY,this.mouse.set(x.clientX/innerWidth*2-1,-(x.clientY/innerHeight)*2+1))}),this.canvas.addEventListener("pointermove",x=>{x.pointerId===h&&(this.look.x+=(x.clientX-u)*1.6,this.look.y+=(x.clientY-d)*1.6,u=x.clientX,d=x.clientY)}),this.canvas.addEventListener("pointerup",x=>{x.pointerId===h&&(h=null)});let f=(x,m,p)=>U("button",{class:"touch-btn "+p,type:"button","aria-label":x,onpointerdown:y=>{y.preventDefault(),this.keys.add(m),this.pressed.add(m),t?.(m)},onpointerup:()=>this.keys.delete(m),onpointercancel:()=>this.keys.delete(m)},x),v=U("div",{class:"touch"},n,U("div",{class:"touch-btns"},f("Lompat","Space","jump"),f("Aksi","KeyE","act"),f("Lari","ShiftLeft","run")));return e.append(v),v}},_g=new S(0,1,0),lc=class{constructor(e){this.app=e,this.camera=e.camera,this.pos=new S,this.vel=new S,this.yaw=0,this.pitch=-.05,this.height=1.65,this.radius=.32,this.step=.45,this.onGround=!1,this.gravity=18,this.jumpSpeed=5.6,this.walk=3.4,this.run=6.8,this.mode="first",this.speedScale=1,this.frozen=!1,this.avatar=this.makeAvatar(),this.avatar.visible=!1,e.scene.add(this.avatar),this.orbit=new ac(this.camera,e.renderer.renderer.domElement),this.orbit.enabled=!1,this.orbit.enableDamping=!0,this.orbit.keys={},this.cine={t:0,curve:null}}makeAvatar(){let e=new Mt;e.name="__dreams_avatar";let t=new _t({color:"#cfd6ff",roughness:.35,metalness:.1,emissive:"#3b2f7a",emissiveIntensity:.25}),n=new Ae(new bs(.28,.85,6,16),t);n.position.y=.72,n.castShadow=!0;let i=new Ae(new En(.2,24,16),t);i.position.y=1.47,i.castShadow=!0;let s=new Ae(new En(.13,16,8,0,Math.PI),new _t({color:"#ffcf7a",emissive:"#ffb347",emissiveIntensity:1.6}));return s.position.set(0,1.49,-.11),s.rotation.y=Math.PI,e.add(n,i,s),e}place(e,t){this.pos.copy(e),this.vel.set(0,0,0),t!=null&&(this.yaw=t)}lookAt(e){let t=e.clone().sub(this.pos);this.yaw=Math.atan2(-t.x,-t.z)}setMode(e){this.mode=e,this.orbit.enabled=e==="orbit",this.avatar.visible=e==="third",e==="orbit"&&(this.orbit.target.copy(this.app.world.center),this.camera.position.copy(this.app.world.center).add(new S(1,.7,1).normalize().multiplyScalar(this.app.world.radius*1.4))),e==="cinematic"&&this.buildCinematicPath(),this.app.renderer.setDof(e==="cinematic")}buildCinematicPath(){let e=this.app.world,t=[];for(let s of e.cameras||[])t.push(s.getWorldPosition(new S));let n=e.showcase?e.radius*1.6:e.radius*.9,i=e.showcase?e.size.y*.8+.6:Math.max(2.5,e.size.y*.6);for(let s=0;s<8;s++){let a=s/8*Math.PI*2;t.push(new S(e.center.x+Math.cos(a)*n,e.floorY+i+Math.sin(a*2)*i*.25,e.center.z+Math.sin(a)*n))}this.cine.curve=new wa(t,!0,"centripetal"),this.cine.t=0}forward(){return new S(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}update(e,t){let n=t.look;if(this.mode!=="orbit"&&this.mode!=="cinematic"&&t.enabled){let h=((t.down("ArrowRight")?1:0)-(t.down("ArrowLeft")?1:0))*1.8*e;h&&(this.yaw-=h)}if(this.mode!=="orbit"&&this.mode!=="cinematic"&&(this.yaw-=n.x*.0022,this.pitch=zn(this.pitch-n.y*.0022,-1.45,1.45),t.down("KeyQ")&&this.mode==="free"&&(this.pos.y-=6*e)),this.mode==="orbit"){this.orbit.update();return}if(this.mode==="cinematic"){this.cine.t=(this.cine.t+e*.012)%1;let h=this.cine.curve.getPointAt(this.cine.t);this.camera.position.copy(h),this.camera.lookAt(this.app.world.center),this.app.renderer.setDof(!0,h.distanceTo(this.app.world.center));return}let i=this.frozen?{x:0,y:0}:t.axis(),a=(t.down("ShiftLeft","ShiftRight")?this.run:this.walk)*this.speedScale,o=this.forward(),l=new S().crossVectors(o,_g),c=new S().addScaledVector(o,i.y).addScaledVector(l,i.x);if(c.lengthSq()>1&&c.normalize(),this.mode==="free"){let h=new S(0,0,-1).applyEuler(new ms(this.pitch,this.yaw,0,"YXZ")),u=new S().addScaledVector(h,i.y).addScaledVector(l,i.x).multiplyScalar(a*2.2*e);t.down("Space")&&(u.y+=a*1.5*e),this.pos.add(u),this.applyCamera();return}this.vel.x=c.x*a,this.vel.z=c.z*a,!this.frozen&&this.onGround&&t.hit("Space")&&(this.vel.y=this.jumpSpeed,this.onGround=!1,this.app.audio?.sfx("jump")),this.vel.y-=this.gravity*e,this.moveHorizontal(this.vel.x*e,this.vel.z*e),this.moveVertical(e),this.pos.y<this.app.world.floorY-60&&(this.place(this.app.spawn.clone(),this.yaw),this.app.ui?.toast("Kamu jatuh keluar dunia. Kembali ke titik awal.")),this.applyCamera()}moveHorizontal(e,t){let n=this.app.world,i=this.app.extraColliders,s=Math.hypot(e,t);if(s<1e-6)return;let a=new S(e/s,0,t/s),o=null;for(let d of[this.step+.08,1,this.height-.1]){let f=this.pos.clone();f.y+=d;let v=n.raycast(f,a,s+this.radius,i);v&&(!o||v.distance<o.distance)&&(o=v)}if(!o){this.pos.addScaledVector(a,s);return}let l=o.face?o.face.normal.clone().transformDirection(o.object.matrixWorld):a.clone().negate();if(l.y=0,l.lengthSq()<1e-4)return;l.normalize(),l.dot(a)>0&&l.negate();let c=Math.max(0,o.distance-this.radius);this.pos.addScaledVector(a,c);let h=a.clone().addScaledVector(l,-a.dot(l)).multiplyScalar(s-c),u=h.length();u>1e-4&&this.moveHorizontalOnce(h.divideScalar(u),u)}moveHorizontalOnce(e,t){let n=this.app.world,i=this.app.extraColliders;for(let s of[this.step+.08,1,this.height-.1]){let a=this.pos.clone();if(a.y+=s,n.raycast(a,e,t+this.radius,i))return}this.pos.addScaledVector(e,t)}moveVertical(e){let t=this.app.world,n=this.app.extraColliders,i=this.pos.clone();i.y+=this.step+.4;let s=t.raycast(i,new S(0,-1,0),50,n),a=s?s.point.y:-1/0,o=this.pos.y+this.vel.y*e;if(this.vel.y<=0&&o<=a+.001)this.pos.y=a,this.vel.y=0,this.onGround=!0,this.groundObject=s.object;else if(this.vel.y<=0&&this.onGround&&this.pos.y-a<this.step&&this.pos.y-a>0)this.pos.y=a,this.vel.y=0;else{if(this.vel.y>0){let l=this.pos.clone();l.y+=this.height-.1,t.raycast(l,_g,this.vel.y*e+.15,n)&&(this.vel.y=0)}this.pos.y+=this.vel.y*e,this.onGround=!1}}applyCamera(){let e=this.pos.clone();e.y+=this.height-.08;let t=new Lt().setFromEuler(new ms(this.pitch,this.yaw,0,"YXZ"));if(this.mode==="free"||this.mode==="first")this.camera.position.copy(this.mode==="free"?this.pos:e),this.camera.quaternion.copy(t),this.avatar.visible=!1;else if(this.mode==="third"){this.avatar.position.copy(this.pos),this.avatar.rotation.y=this.yaw;let n=new S(0,0,1).applyQuaternion(t),i=e.clone().add(new S(0,.25,0)),s=this.app.world.raycast(i,n,4.2,this.app.extraColliders),a=s?Math.max(.6,s.distance-.25):4;this.camera.position.copy(i).addScaledVector(n,a),this.camera.quaternion.copy(t)}}};var bg=["#f2c26b","#9aa7ff","#7fd6c2","#f29bb5","#c3a6ff","#ffd9a0"],cc=class{constructor(e,{node:t,meta:n,kind:i,procedural:s=!1}){this.app=e,this.node=t,this.meta=n||{name:t.name,role:i},this.kind=i,this.procedural=s,this.name=this.meta.label||this.meta.name,this.home=t.position.clone(),this.baseY=t.position.y,this.baseRotY=t.rotation.y,this.target=null,this.wait=1+Math.random()*2,this.speed=i==="animal"?1.1:.9,this.behavior=this.meta.behavior||(i==="animal"?"roam":"idle"),this.roamRadius=this.meta.roamRadius||(i==="animal"?3.5:2.5),this.phase=Math.random()*10,this.override=null,this.lines=this.meta.dialogue&&this.meta.dialogue.length?this.meta.dialogue:null,this.walkAction=null,this.bobAmp=0,this.lastGreet=-99,this.pose=null}worldPosition(){return this.node.getWorldPosition(new S)}setWorldPosition(e){let t=this.node.parent,n=t?t.worldToLocal(e.clone()):e.clone();this.node.position.copy(n),this.baseY=n.y,this.pose&&(this.pose.baseY=n.y)}faceWorld(e){if(e.lengthSq()<1e-6)return;let t=Math.atan2(e.x,e.z),n=this.node.parent?this.node.parent.getWorldQuaternion(new Lt):new Lt,i=new Lt().setFromAxisAngle(new S(0,1,0),t+(this.meta.forwardOffset||0)),s=n.invert().multiply(i);this.node.quaternion.slerp(s,.12)}update(e,t){let n=this.app.world,i=this.worldPosition(),s=!1;if(this.override)s=this.override(e,this)===!0;else if(this.behavior==="roam"){if(this.target){let l=this.target.clone().sub(i);l.y=0,l.length()<.2?(this.target=null,this.wait=1.5+Math.random()*3):(this.stepToward(this.target,e),s=!0)}else if(this.wait-=e,this.wait<=0){let l=this.node.parent?this.node.parent.localToWorld(this.home.clone()):this.home.clone();this.target=n.sample(this.app.rng,{near:l,radius:this.roamRadius,sameLevel:l.y})}}let o=this.app.player.pos.clone().sub(i);if(o.y=0,!s&&!this.override&&o.length()<4.5&&this.faceWorld(o),this.walkAction&&(this.walkAction.weight+=((s?1:0)-this.walkAction.weight)*Math.min(1,e*4)),this.procedural||!this.hasClips){let l=s?.06:.015;this.bobAmp+=(l-this.bobAmp)*Math.min(1,e*3),this.node.position.y=this.baseY+Math.abs(Math.sin(t*(s?9:2)+this.phase))*this.bobAmp}this.pose&&this.updatePose(e),o.length()<3&&t-this.lastGreet>25&&(this.lastGreet=t,this.app.ui?.bubble(this,this.greeting()))}stepToward(e,t,n=this.speed){let i=this.worldPosition(),s=e.clone().sub(i);s.y=0;let a=s.length();if(a<.001)return;s.divideScalar(a);let o=Math.min(a,n*t),l=i.clone().addScaledVector(s,o),c=this.app.world.castDown(l.x,l.z,l.y+1.2,4);if(c&&Math.abs(c.point.y-i.y)<.7)l.y=c.point.y+(this.meta.groundOffset||0);else if(!c)return;this.setWorldPosition(l),this.baseY=this.node.position.y,this.faceWorld(s)}greeting(){return this.lines?this.lines[0]:this.kind==="animal"?`${this.name} menoleh ke arahmu.`:`Halo, aku ${this.name}. Tekan E untuk bicara.`}talk(){return this.kind==="animal"?[`${this.name}`,this.meta.description||"Belum ada data hewan ini. Tambahkan lewat panel Object Override di Blender."]:this.lines?this.lines:[`Aku ${this.name}.`,this.meta.description||"Dunia ini dibangun dari project Blender. Silakan jelajahi setiap sudutnya.","Kalau bosan, coba tombol Kejutkan aku di dok bawah."]}playPose(e,t=.9){this.pose={name:e,t:0,dur:t,baseQ:this.node.quaternion.clone(),baseY:this.baseY}}updatePose(e){let t=this.pose;t.t+=e;let n=Math.min(1,t.t/t.dur),i=Math.sin(n*Math.PI),s=this.node;s.quaternion.copy(t.baseQ),t.name==="jump"&&(s.position.y=t.baseY+i*.9),t.name==="spin"&&s.quaternion.multiply(new Lt().setFromAxisAngle(new S(0,1,0),n*Math.PI*2)),t.name==="bow"&&s.quaternion.multiply(new Lt().setFromAxisAngle(new S(1,0,0),i*.6)),t.name==="wave"&&s.quaternion.multiply(new Lt().setFromAxisAngle(new S(0,0,1),Math.sin(n*Math.PI*4)*.25)),n>=1&&(s.quaternion.copy(t.baseQ),s.position.y=t.baseY,this.pose=null)}},hc=class{constructor(e){this.app=e,this.list=[],this.procedural=[]}init(){let e=this.app.world;for(let[t,n]of e.meta){if(n.role!=="character"&&n.role!=="animal")continue;let i=e.byName.get(t);if(!i)continue;let s=new cc(this.app,{node:i,meta:n,kind:n.role});s.hasClips=(n.clips||[]).length>0;let a=(n.clips||[]).find(l=>/walk|run/i.test(l)),o=a&&e.clips.find(l=>l.name===a);o&&e.mainMixer&&(s.walkAction=e.mainMixer.clipAction(o),s.walkAction.play(),s.walkAction.weight=0),this.list.push(s)}}of(e){return this.list.concat(this.procedural).filter(t=>e==="any"||t.kind===e)}ensure(e,t,n){let s=this.of(e==="any"?"any":e).slice(0,t),a=0;for(;s.length<t;){let o=e==="any"?a%2?"animal":"character":e,l=this.app.world.sample(n,{near:this.app.world.center,radius:this.app.world.radius*.9});s.push(this.spawnProcedural(o,l,a++))}return s}spawnProcedural(e,t,n=0){let i=bg[(this.procedural.length+n)%bg.length],s=new _t({color:i,roughness:.45,metalness:.05,emissive:i,emissiveIntensity:.12}),a=new Mt;if(e==="animal"){let u=new Ae(new bs(.22,.5,4,12),s);u.rotation.x=Math.PI/2,u.position.y=.42;let d=new Ae(new En(.17,16,12),s);d.position.set(0,.6,.42),a.add(u,d);for(let[v,x]of[[-.14,.2],[.14,.2],[-.14,-.2],[.14,-.2]]){let m=new Ae(new di(.045,.04,.32,8),s);m.position.set(v,.16,x),a.add(m)}let f=new Ae(new Ms(.06,.14,8),s);f.position.set(.08,.78,.42),a.add(f,f.clone().translateX(-.16))}else{let u=new Ae(new bs(.24,.8,4,12),s);u.position.y=.66;let d=new Ae(new En(.19,20,14),s);d.position.y=1.38;let f=new Ae(new En(.035,8,6),new Ut({color:"#1a1d3a"}));f.position.set(.07,1.42,.16),a.add(u,d,f,f.clone().translateX(-.14))}a.traverse(u=>{u.isMesh&&(u.castShadow=!0)});let o=e==="animal"?["Kelinci Mimpi","Rusa Bintang","Rubah Senja","Burung Fajar","Kucing Bulan","Kura Embun"]:["Pengembara Lila","Penjaga Aru","Pelukis Nara","Pemandu Sora","Penyair Bima","Penjelajah Kai"],l=o[this.procedural.length%o.length];a.name="__dreams_actor_"+this.procedural.length,a.position.copy(t),this.app.world.dynamic.add(a);let c={name:a.name,label:l,role:e,generated:!0,description:"Aktor prosedural yang ditambahkan 100 DREAMS karena scene belum punya "+(e==="animal"?"hewan":"karakter")+"."},h=new cc(this.app,{node:a,meta:c,kind:e,procedural:!0});return h.behavior="roam",this.procedural.push(h),h}removeProcedural(){for(let e of this.procedural)e.node.parent?.remove(e.node),e.node.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose?.())});this.procedural.length=0}update(e,t){for(let n of this.list)n.update(e,t);for(let n of this.procedural)n.update(e,t)}nearest(e,t=3){let n=null,i=t;for(let s of this.of("any")){let a=s.worldPosition().distanceTo(e);a<i&&(i=a,n=s)}return n}};var uc=class{constructor(){this.ctx=null,this.vol=kn.get("vol",{master:.7,ambient:.5,sfx:.8}),this.started=!1}start(){if(this.started)return;try{let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t}catch{return}this.started=!0;let e=this.ctx;this.master=e.createGain(),this.master.connect(e.destination),this.ambientGain=e.createGain(),this.ambientGain.connect(this.master),this.sfxGain=e.createGain(),this.sfxGain.connect(this.master),this.applyVolume(),this.startAmbient()}applyVolume(){this.ctx&&(this.master.gain.value=this.vol.master,this.ambientGain.gain.value=this.vol.ambient*.22,this.sfxGain.gain.value=this.vol.sfx*.5,kn.set("vol",this.vol))}set(e,t){this.vol[e]=t,this.applyVolume()}startAmbient(){let e=this.ctx,t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=900,t.Q.value=.4,t.connect(this.ambientGain);let n=[[220,277.18,329.63,415.3],[196,246.94,293.66,369.99],[174.61,220,261.63,329.63],[207.65,261.63,311.13,392]],i=n[0].map(()=>{let c=e.createOscillator();c.type="sine";let h=e.createOscillator();h.type="triangle",h.detune.value=6;let u=e.createGain();return u.gain.value=.18,c.connect(u),h.connect(u),u.connect(t),c.start(),h.start(),{o:c,o2:h,g:u}}),s=e.createOscillator();s.frequency.value=.05;let a=e.createGain();a.gain.value=380,s.connect(a),a.connect(t.frequency),s.start();let o=0,l=()=>{let c=n[o++%n.length],h=e.currentTime;i.forEach((u,d)=>{u.o.frequency.setTargetAtTime(c[d]/(d===0?2:1),h,2.5),u.o2.frequency.setTargetAtTime(c[d]/(d===0?2:1),h,2.5)})};l(),this.ambientTimer=setInterval(l,9e3)}tone(e,t,n="sine",i=0,s=.6){if(!this.ctx)return;let a=this.ctx,o=a.currentTime+i,l=a.createOscillator(),c=a.createGain();l.type=n,l.frequency.setValueAtTime(e,o),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(s,o+.015),c.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c),c.connect(this.sfxGain),l.start(o),l.stop(o+t+.05)}sfx(e){if(!this.ctx)return;let t=(n,i,s,a,o)=>this.tone(n,i,s,a,o);switch(e){case"collect":t(880,.12,"triangle"),t(1318.5,.18,"triangle",.07);break;case"good":t(659.25,.14,"sine"),t(987.77,.22,"sine",.09);break;case"bad":t(196,.25,"sawtooth",0,.25),t(155.56,.3,"sawtooth",.08,.2);break;case"win":[523.25,659.25,783.99,1046.5].forEach((n,i)=>t(n,.4,"triangle",i*.11));break;case"lose":[392,329.63,261.63].forEach((n,i)=>t(n,.45,"sine",i*.16,.4));break;case"jump":t(440,.1,"sine",0,.25);break;case"click":t(1200,.05,"square",0,.12);break;case"open":t(260,.3,"triangle",0,.2);break;case"close":t(200,.25,"triangle",0,.2);break;case"shutter":t(2400,.04,"square",0,.2),t(1600,.06,"square",.05,.15);break;case"pad0":case"pad1":case"pad2":case"pad3":case"pad4":case"pad5":t([329.63,392,440,523.25,587.33,659.25][+e.slice(3)],.35,"sine");break;default:t(700,.08)}}};var Nt=r=>r.label||r.name;function Gt(r,e,t){let n=[e,...r.shuffle([...new Set(t.filter(s=>s!==e))]).slice(0,3)];if(n.length<2)return null;let i=r.shuffle(n);return{options:i,answer:i.indexOf(e)}}function Kn(r,e,t=""){let n=new Set([e]),i=e<6?[1,2,3,-1,-2,4]:[Math.ceil(e*.25),Math.ceil(e*.5),-Math.ceil(e*.3),Math.ceil(e*.8)];for(let o of r.shuffle(i)){if(n.size>=4)break;e+o>=0&&n.add(e+o)}let s=e+5;for(;n.size<4;)n.add(s++);let a=r.shuffle([...n]).map(o=>`${o}${t}`);return{options:a,answer:a.indexOf(`${e}${t}`)}}function Mg(r,e,t,n){let i=r.data,s=(i.objects||[]).filter(g=>!["light","camera"].includes(g.role)&&g.maxDim>.02),a=s.filter(g=>!/^(cube|plane|sphere|cylinder|object|mesh)(\.\d+)?$/i.test(g.name)),o=a.length>=4?a:s,l=g=>s.filter(_=>_.role===g),c=i.fengshui||{},h=r.world.center,u=(g,_)=>Math.hypot(g.center[0]-_.x,g.center[2]-_.z),d={size(){let g=n.shuffle(o).slice(0,4);if(g.length<3)return null;let _=g.reduce((w,T)=>w.dims[1]>T.dims[1]?w:T);if(g.filter(w=>Math.abs(w.dims[1]-_.dims[1])<.05).length>1)return null;let E=Gt(n,Nt(_),g.map(Nt));return E&&{key:"size"+_.name,q:"Objek mana yang paling tinggi?",...E}},wide(){let g=n.shuffle(o).slice(0,4);if(g.length<3)return null;let _=T=>Math.max(T.dims[0],T.dims[2]),E=g.reduce((T,C)=>_(T)>_(C)?T:C);if(g.filter(T=>Math.abs(_(T)-_(E))<.05).length>1)return null;let w=Gt(n,Nt(E),g.map(Nt));return w&&{key:"wide"+E.name,q:"Objek mana yang paling lebar?",...w}},height(){let g=n.pick(o);if(!g)return null;let _=g.dims[1],E=C=>`${un(C,C<1?2:1)} m`,w=[_*.4,_*2.2,_*3.5,_*.15].map(E),T=Gt(n,E(_),w);return T&&{key:"h"+g.name,q:`Berapa kira-kira tinggi \u201C${Nt(g)}\u201D?`,...T}},material(){let g=n.pick(o.filter(w=>w.materials?.length));if(!g)return null;let _=[...new Set((i.materials||[]).map(w=>w.name))].filter(w=>!g.materials.includes(w));if(_.length<1)return null;let E=Gt(n,g.materials[0],_);return E&&{key:"m"+g.name,q:`Material apa yang dipakai \u201C${Nt(g)}\u201D?`,...E}},category(){let g=n.pick(o.filter(w=>w.roleLabel));if(!g)return null;let _=[...new Set(s.map(w=>w.roleLabel).filter(Boolean)),"Kendaraan","Tanaman","Perabot","Bangunan","Hewan"],E=Gt(n,g.roleLabel,_);return E&&{key:"c"+g.name,q:`\u201C${Nt(g)}\u201D termasuk kategori apa?`,...E,note:g.roleSource==="auto"?"Kategori ditentukan otomatis oleh 100 DREAMS dari nama dan bentuk objek.":null}},collection(){let g=n.pick(o.filter(w=>w.collection)),_=[...new Set(s.map(w=>w.collection).filter(Boolean))];if(!g||_.length<2)return null;let E=Gt(n,g.collection,_);return E&&{key:"col"+g.name,q:`\u201C${Nt(g)}\u201D berada di koleksi Blender apa?`,...E}},count(){let g=[...new Set(s.map(T=>T.role))].filter(T=>T&&!["other"].includes(T)),_=n.pick(g);if(!_)return null;let E=l(_).length,w=l(_)[0].roleLabel.toLowerCase();return{key:"cnt"+_,q:`Ada berapa objek kategori ${w} di dunia ini?`,...Kn(n,E)}},nearCenter(){let g=n.shuffle(o).slice(0,4);if(g.length<3)return null;let _=g.reduce((w,T)=>u(w,h)<u(T,h)?w:T),E=Gt(n,Nt(_),g.map(Nt));return E&&{key:"nc"+_.name,q:"Objek mana yang paling dekat dengan pusat dunia?",...E}},highest(){let g=n.shuffle(o).slice(0,4);if(g.length<3)return null;let _=T=>T.center[1]+T.dims[1]/2,E=g.reduce((T,C)=>_(T)>_(C)?T:C),w=Gt(n,Nt(E),g.map(Nt));return w&&{key:"hi"+E.name,q:"Puncak objek mana yang posisinya paling tinggi?",...w}},pairDist(){let g=n.shuffle(o).slice(0,2);if(g.length<2)return null;let _=Math.hypot(g[0].center[0]-g[1].center[0],g[0].center[2]-g[1].center[2]),E=T=>`${un(T,1)} m`,w=Gt(n,E(_),[_*.3,_*2.4,_*4+2,_*.6+5].map(E));return w&&{key:"pd"+g[0].name+g[1].name,q:`Berapa jarak mendatar antara \u201C${Nt(g[0])}\u201D dan \u201C${Nt(g[1])}\u201D?`,...w}},animalCount(){return{key:"ac",q:"Ada berapa hewan di dunia ini (dari project Blender)?",...Kn(n,l("animal").length)}},animalBig(){let g=l("animal");if(g.length<2)return null;let _=T=>T.dims[0]*T.dims[1]*T.dims[2],E=g.reduce((T,C)=>_(T)>_(C)?T:C),w=Gt(n,Nt(E),g.map(Nt));return w&&{key:"ab",q:"Hewan mana yang ukurannya paling besar?",...w}},animalNear(){let g=n.pick(l("animal")),_=n.pick(o.filter(C=>C.role!=="animal"));if(!g||!_)return null;let E=l("animal");if(E.length<2)return null;let w=E.reduce((C,b)=>u(C,{x:_.center[0],z:_.center[2]})<u(b,{x:_.center[0],z:_.center[2]})?C:b),T=Gt(n,Nt(w),E.map(Nt));return T&&{key:"an"+_.name,q:`Hewan mana yang paling dekat dengan \u201C${Nt(_)}\u201D?`,...T}},animalFact(){let g=n.pick(l("animal").filter(_=>_.habitat||_.diet||_.scientific));if(!g)return null;if(g.scientific){let _=l("animal").map(w=>w.scientific).filter(Boolean),E=Gt(n,g.scientific,_.concat(["Felis catus","Canis lupus familiaris","Equus caballus","Bos taurus"]));return E&&{key:"sci"+g.name,q:`Nama ilmiah \u201C${Nt(g)}\u201D (sesuai data project)?`,...E}}if(g.habitat){let _=Gt(n,g.habitat,["Hutan","Padang rumput","Gurun","Laut","Rawa","Pegunungan"]);return _&&{key:"hab"+g.name,q:`Habitat \u201C${Nt(g)}\u201D menurut data project?`,..._}}return null},charCount(){return{key:"cc",q:"Ada berapa karakter di dunia ini (dari project Blender)?",...Kn(n,l("character").length)}},charNear(){let g=l("character"),_=n.pick(o.filter(T=>T.role!=="character"));if(g.length<2||!_)return null;let E=g.reduce((T,C)=>u(T,{x:_.center[0],z:_.center[2]})<u(C,{x:_.center[0],z:_.center[2]})?T:C),w=Gt(n,Nt(E),g.map(Nt));return w&&{key:"chn"+_.name,q:`Siapa yang berada paling dekat dengan \u201C${Nt(_)}\u201D?`,...w}},charCollection(){let g=n.pick(l("character").filter(w=>w.collection)),_=[...new Set(s.map(w=>w.collection).filter(Boolean))];if(!g||_.length<2)return null;let E=Gt(n,g.collection,_);return E&&{key:"chc"+g.name,q:`Di koleksi apa karakter \u201C${Nt(g)}\u201D berada?`,...E}},doors(){return{key:"door",q:"Berapa jumlah pintu yang terdeteksi di dunia ini?",...Kn(n,l("door").length)}},windows(){return{key:"win",q:"Berapa jumlah jendela yang terdeteksi?",...Kn(n,l("window").length)}},walls(){return{key:"wall",q:"Berapa banyak objek dinding yang terdeteksi?",...Kn(n,l("wall").length)}},footprint(){let g=r.world.size,_=Math.round(g.x*g.z),E=T=>`${T} m\xB2`,w=Gt(n,E(_),[Math.round(_*.4),Math.round(_*2.1)+3,Math.round(_*3.4)+7,Math.round(_*.7)+1].map(E));return w&&{key:"fp",q:"Berapa luas kotak tapak (lebar \xD7 panjang) seluruh dunia ini?",...w}},plants(){return{key:"pl",q:"Ada berapa objek tanaman di dunia ini?",...Kn(n,l("plant").length)}},water(){let g=l("water").length;return{key:"wa",q:"Apakah ada objek air di dunia ini?",...Gt(n,g>0?"Ada":"Tidak ada",["Ada","Tidak ada"])}},lights(){return{key:"li",q:"Berapa jumlah lampu dalam project Blender ini?",...Kn(n,(i.lights||[]).length)}},lightType(){let g=i.lights||[];if(!g.length)return null;let _=g.reduce((T,C)=>T.energy>C.energy?T:C),E={SUN:"Matahari",POINT:"Titik",SPOT:"Sorot",AREA:"Area"},w=Gt(n,E[_.type]||_.type,Object.values(E));return w&&{key:"lt",q:`Lampu \u201C${_.name}\u201D (yang terkuat) bertipe apa?`,...w}},blender(){if(!i.blender)return null;let g=Gt(n,i.blender,["3.6.0","4.1.0","4.2.3","5.0.1","2.93.0","4.5.0"]);return g&&{key:"bv",q:"Dunia ini dibuat dengan Blender versi berapa?",...g}},sceneName(){if(!i.scene)return null;let g=Gt(n,i.scene,["Scene","World","Main","Level 1","Collection"]);return g&&{key:"sn",q:"Apa nama scene Blender asal dunia ini?",...g}},matCount(){return{key:"mc",q:"Berapa jumlah material yang dipakai di dunia ini?",...Kn(n,(i.materials||[]).length)}},animCount(){return{key:"anc",q:"Berapa jumlah animasi yang dibawa dari Blender?",...Kn(n,(i.animations||[]).length)}},colCount(){return{key:"clc",q:"Berapa jumlah koleksi Blender dalam dunia ini?",...Kn(n,(i.collections||[]).length)}},fsElement(){if(!c.dominant)return null;let g=Gt(n,c.dominant,["Kayu","Api","Tanah","Logam","Air"]);return g&&{key:"fse",q:"Menurut analisis material, unsur (Wu Xing) apa yang paling dominan?",...g,note:"Pemetaan warna dan material ke lima unsur adalah kerangka tradisional, bukan pengukuran ilmiah."}},fsTaiqi(){return c.taiqi?{key:"fst",q:"Bagaimana kondisi pusat ruang (Tai Qi) menurut analisis?",...Gt(n,c.taiqi.clear?"Lapang":"Terisi objek",["Lapang","Terisi objek"])}:null},fsDoor(){if(!c.door?.sector)return null;let g=(c.grid?.cells||[]).map(E=>E.label),_=Gt(n,c.door.sector,g);return _&&{key:"fsd",q:`Pintu utama \u201C${c.door.name}\u201D berada di sektor bagua mana?`,..._}},fsYin(){if(!c.yinyang)return null;let g=Gt(n,c.yinyang.verdict,["Condong Yang (terang)","Condong Yin (redup)","Seimbang"]);return g&&{key:"fsy",q:"Keseimbangan Yin\u2013Yang ruang ini cenderung\u2026",...g}}},f={size:["size","wide","height"],material:["material","material","matCount"],category:["category","count"],collection:["collection","colCount"],geometry:["height","wide","size","pairDist","footprint"],spatial:["nearCenter","highest","pairDist","size"],animal:["animalCount","animalBig","animalNear","animalFact"],character:["charCount","charNear","charCollection","nearCenter"],architecture:["doors","windows","walls","footprint","highest"],nature:["plants","water","animalCount","count"],environment:["lights","lightType","water","plants"],project:["blender","sceneName","matCount","animCount","colCount"],fengshui:["fsElement","fsTaiqi","fsDoor","fsYin","doors","windows"]};f.mixed=[...new Set(Object.values(f).flat())];let v=f[e]||f.mixed,x=f.mixed,m=[],p=new Set;for(let g=0;m.length<t&&g<t*40;g++){let _=g<t*25?v:x,E=d[n.pick(_)],w=E&&E();!w||w.answer<0||p.has(w.key)||(p.add(w.key),m.push(w))}let y=0;for(;m.length<t;){let g=(i.stats?.objects||s.length)+y++;m.push({key:"obj"+y,q:"Berapa total objek yang dianalisis dari project Blender ini?",...Kn(n,i.stats?.objects||s.length)})}return m}var wg={move:"WASD atau joystick untuk bergerak, Shift untuk lari, Spasi untuk lompat, mouse atau geser layar untuk melihat. Esc untuk jeda.",aim:"Bergerak seperti biasa. Arahkan tanda bidik atau kursor ke objek lalu klik atau tekan E. H untuk petunjuk arah. Esc untuk jeda.",overlay:"Klik atau ketuk pilihan di panel permainan. Esc untuk jeda.",photo:"Bergerak dan bidik objek. Tekan P atau tombol Foto untuk memotret. Esc untuk jeda.",carry:"Arahkan ke balok lalu tekan E untuk mengambil, E lagi untuk meletakkan. R memutar. F menilai tata letak. Esc untuk jeda.",studio:"Geser slider di panel sampai cocok dengan target. Hasil terlihat langsung di dunia. Esc untuk jeda.",talk:"Bergerak ke karakter lalu tekan E untuk bicara. Esc untuk jeda.",slowmo:"Bergerak seperti biasa. Tahan Q untuk memperlambat waktu bagi pemburu selama energi masih ada. Esc untuk jeda."},Un="#ffd27a",$a="#9aa7ff",qr="#7fe0c4",Bd="#ff8fb1",Sg="#ff5d6c",jr=(r,e=2.2)=>new _t({color:r,emissive:r,emissiveIntensity:e,roughness:.25,metalness:.1});function Es(r,e,t=.28){let n=new Ae(new Sa(t,1),jr(e)),i=new Ae(new En(t*1.9,16,12),new Ut({color:e,transparent:!0,opacity:.13,depthWrite:!1}));return n.add(i),r.group.add(n),n}function Ka(r,e,t=7){let n=new Ae(new di(.05,.22,t,12,1,!0),new Ut({color:e,transparent:!0,opacity:.22,depthWrite:!1,side:Zt}));return n.position.y=t/2,n}function Tg(r,e,t=1.3){let n=new Ae(new al(t,.09,12,48),jr(e,1.8));return r.group.add(n),n}function Yr(r,e="#fff6df",t=.9){let n=document.createElement("canvas");n.width=256,n.height=128;let i=n.getContext("2d");i.fillStyle="rgba(20,22,52,0.78)",i.beginPath(),i.roundRect(8,8,240,112,40),i.fill(),i.fillStyle=e,i.font="700 64px Figtree, system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(r,128,68);let s=new pr(n);s.colorSpace=xt;let a=new dr(new ys({map:s,depthTest:!1,transparent:!0,toneMapped:!1,fog:!1}));return a.scale.set(t,t/2,1),a.renderOrder=20,a}function rw(r,e=qr){let t=new Mt,n=Tg(r,e,1.2);n.position.y=1.3,t.add(n);let i=new Ae(new Ri(1.1,32),new Ut({color:e,transparent:!0,opacity:.25,side:Zt,depthWrite:!1}));return i.position.y=1.3,t.add(i,Ka(r,e,10)),r.group.add(t),t}function Ya(r,e,t=1.2){let n=new Ae(new rl(t*.82,t,40),new Ut({color:e,transparent:!0,opacity:.75,side:Zt,depthWrite:!1}));n.rotation.x=-Math.PI/2;let i=new Ae(new Ri(t*.82,40),new Ut({color:e,transparent:!0,opacity:.12,depthWrite:!1,side:Zt}));i.rotation.x=-Math.PI/2;let s=new Mt;return s.add(n,i),r.group.add(s),s}function Od(r,e,t){let n=r.playerCenter().distanceTo(e),i=zn(1-n/t,0,1),s=i>.85?"Membara":i>.65?"Panas":i>.4?"Hangat":i>.2?"Sejuk":"Dingin";r.setMeter(i,`${s} \xB7 ${un(n,0)} m`)}function Eg(r,e){let t=r.player,n=e.clone().sub(t.pos),i=Math.hypot(n.x,n.z),s=Math.atan2(-n.x,-n.z)-t.yaw,a=Math.atan2(Math.sin(s),Math.cos(s)),o=Math.abs(a)<.4?"di depanmu":Math.abs(a)>2.7?"di belakangmu":a>0?"di sebelah kiri":"di sebelah kanan",l=n.y>2?", lebih tinggi":n.y<-2?", lebih rendah":"";return`${o}, sekitar ${un(i,0)} m${l}`}var Za=class{constructor(e,t,n,i="chase"){this.ctx=e,this.speed=n,this.mode=i,this.list=[],this.scale=1,this.center=e.player.pos.clone();for(let s=0;s<t;s++){let a=new Ae(new Sa(.42,0),jr(Sg,2.6));this.respawn(a,s),e.group.add(a);let o=e.rng()*Math.PI*2;a.userData.v=new S(Math.cos(o),0,Math.sin(o)).multiplyScalar(n),this.list.push(a)}}respawn(e){let t=this.ctx.player.pos,n=this.ctx.rng()*Math.PI*2,i=11+this.ctx.rng()*6;e.position.set(t.x+Math.cos(n)*i,t.y+.9,t.z+Math.sin(n)*i)}update(e){let t=this.ctx.playerCenter();for(let n of this.list){if(this.mode==="bounce"){n.position.addScaledVector(n.userData.v,e*this.scale);let i=n.position.clone().sub(this.center);if(i.y=0,i.length()>14){let s=i.normalize();n.userData.v.reflect(s),n.position.addScaledVector(s,-.2)}n.position.y=t.y}else{let i=t.clone().sub(n.position);i.length()>40&&this.respawn(n),n.position.addScaledVector(i.normalize(),this.speed*e*this.scale)}n.rotation.x+=e*2,n.rotation.y+=e*3,n.position.distanceTo(t)<.85&&(this.ctx.loseLife("Terkena pemburu"),this.respawn(n))}}},tn=class{constructor(e){this.ctx=e,this.p=e.p,this.rng=e.rng}setup(){}update(){}dispose(){}},yd=class extends tn{static objective(e){return`Kumpulkan ${e.count} ${e.ordered?"rune berurutan":"kristal"}${e.exit?", lalu masuk ke portal keluar":""}.`}static rules(e){let t=[`Waktu ${e.time} detik. Waktu habis berarti kalah.`,"Sentuh kristal untuk mengambilnya. Tiap kristal bernilai 100 poin."];return e.ordered&&t.push("Hanya rune dengan nomor berikutnya yang bisa diambil."),e.hidden&&t.push("Kristal kecil dan redup. Indikator panas-dingin menunjukkan jarak ke kristal terdekat."),e.hazards&&t.push(`${e.hazards} pemburu mengejar. Tiga kali terkena berarti kalah.`),e.slowmo&&t.push("Tahan Q untuk memperlambat pemburu; energi pulih saat tidak dipakai."),e.dimension&&t.push("Warna dunia bergeser selama permainan."),t}static get controls(){return"move"}setup(){let{ctx:e,p:t}=this;t.hazards&&(e.lives=e.maxLives=3);let n=e.points(t.count,{interior:t.interior,sameLevel:t.interior?void 0:e.player.pos.y});if(this.tokens=n.map((i,s)=>{let a=t.ordered?$a:t.hidden?Un:[Un,qr,Bd,$a][s%4],o=Es(e,a,t.hidden?.17:.28);if(o.position.copy(i).add(new S(0,t.hidden?.35:1,0)),t.hidden||o.add(Ka(e,a,6)),t.ordered){let l=Yr(String(s+1));l.position.y=.7,o.add(l)}return o.userData.i=s,o}),this.got=0,this.next=0,t.hazards&&(this.haz=new Za(e,t.hazards,3.2)),this.energy=1,t.dimension){let i=e.world.skyUniforms,s=i&&[i.top.value.clone(),i.mid.value.clone(),i.low.value.clone()];i&&(i.top.value.set("#0f3b3a"),i.mid.value.set("#d26bff"),i.low.value.set("#081a2a"));let a=e.app.renderer.renderer.toneMappingExposure;e.app.renderer.renderer.toneMappingExposure=a*1.15,e.onDispose(()=>{i&&(i.top.value.copy(s[0]),i.mid.value.copy(s[1]),i.low.value.copy(s[2])),e.app.renderer.renderer.toneMappingExposure=a})}}update(e,t){let{ctx:n,p:i}=this,s=performance.now()/1e3;for(let a of this.tokens)a.visible&&(a.rotation.y+=e*1.6,a.position.y+=Math.sin(s*2+a.userData.i)*.002);if(this.exitPortal){if(this.exitPortal.children[0].rotation.z+=e,n.near(this.exitPortal.position.clone().add(new S(0,1.3,0)),1.6))return n.win()}else{for(let a of this.tokens){if(!a.visible)continue;let o=!i.ordered||a.userData.i===this.next;if(i.ordered&&(a.material.emissiveIntensity=a.userData.i===this.next?3:.5),o&&n.near(a.position,1.35)&&(a.visible=!1,this.got++,this.next++,n.addScore(100),n.sfx("collect"),this.got>=this.tokens.length))if(i.exit)this.exitPortal=rw(n),this.exitPortal.position.copy(n.stage.origin),n.toast("Semua terkumpul. Portal keluar terbuka di titik awal.");else return n.win()}if(i.hidden){let a=this.tokens.filter(o=>o.visible);if(a.length){let o=a.reduce((l,c)=>l.position.distanceTo(n.playerCenter())<c.position.distanceTo(n.playerCenter())?l:c);Od(n,o.position,n.world.radius)}}}if(n.setProgress(`${i.ordered?"Rune":"Kristal"} ${this.got}/${this.tokens.length}${this.exitPortal?" \xB7 menuju portal":""}`),this.haz){if(i.slowmo){let a=t.down("KeyQ")&&this.energy>0;this.energy=zn(this.energy+(a?-.35:.12)*e,0,1),this.haz.scale=a?.25:1,i.hidden||n.setMeter(this.energy,a?"Waktu melambat":"Energi waktu")}this.haz.update(e)}}autoplay(e){this.ctx.godMode=!0;for(let t of this.tokens.slice().sort((n,i)=>n.userData.i-i.userData.i))this.ctx.teleport(t.position.clone().add(new S(0,-.9,0))),e(1);this.exitPortal&&(this.ctx.teleport(this.exitPortal.position.clone().add(new S(0,.4,0))),e(1))}},_d=class extends tn{static objective(e){return`Temukan dan tunjuk ${e.count} objek sesuai petunjuk.`}static rules(e){return[`Waktu ${e.time} detik.`,"Jawaban benar bernilai 150 poin.",`Salah tunjuk memotong ${e.penalty||10} detik.`,"Tekan H untuk petunjuk arah (mengurangi 50 poin)."]}static get controls(){return"aim"}setup(){let{ctx:e,p:t}=this,n;if(t.filter==="character"||t.filter==="animal"){let a=e.app.actors.ensure(t.filter,t.count,this.rng);n=a.map(o=>o.meta),this.actorNodes=new Map(a.map(o=>[o.meta.name,o.node]))}else n=e.objects(t.filter);n.length||(n=e.objects("all")),this.clues=[];let i=new Set,s=t.clue==="mixed"?["name","material","category","size"]:[t.clue];for(let a of this.rng.shuffle(n)){if(this.clues.length>=t.count)break;let o=this.rng.pick(s),l=this.makeClue(o,a,n);!l||i.has(l.key)||(i.add(l.key),this.clues.push(l))}!this.clues.length&&n.length&&this.clues.push(this.makeClue("name",n[0],n)),this.i=0,this.pool=n,this.clueT=0}makeClue(e,t,n){let i=s=>s.label||s.name;if(e==="material"&&t.materials?.[0]){let s=t.materials[0];return{key:"mat:"+s,text:`Objek yang memakai material \u201C${s}\u201D`,test:a=>a.materials?.includes(s),target:t}}if(e==="category"&&t.role&&t.roleLabel){let s=t.role;return{key:"role:"+s,text:`Sebuah objek kategori ${t.roleLabel.toLowerCase()}`,test:a=>a.role===s,target:t}}if(e==="size"){let s=t.dims[1];return{key:"size:"+t.name,text:`Objek setinggi kira-kira ${un(s,1)} m${t.collection?` di koleksi \u201C${t.collection}\u201D`:""}`,test:a=>a===t||Math.abs(a.dims[1]-s)<Math.max(.15,s*.08)&&a.collection===t.collection,target:t}}return{key:"name:"+t.name,text:`Temukan \u201C${i(t)}\u201D`,test:s=>s===t||s.name===t.name,target:t}}get current(){return this.clues[this.i]}update(e,t){let{ctx:n}=this,i=this.current;if(!i)return n.win();this.clueT+=e,n.setProgress(`Petunjuk ${this.i+1}/${this.clues.length}: ${i.text}`),t.hit("KeyH")&&(n.addScore(-50),this.hintOn=!0),this.hintOn&&n.setHint("Petunjuk: "+Eg(n,this.posOf(i.target)))}posOf(e){let t=this.actorNodes?.get(e.name);return t?t.getWorldPosition(new S):this.ctx.world.worldPos(e)}onPick(e){let{ctx:t,p:n}=this,i=this.current;if(!i||!e)return;let s=e.actor?.meta||t.world.metaFor(e.object)?.meta;if(!s){let a=e.object;for(;a&&!s;){for(let[o,l]of this.actorNodes||[])l===a&&(s=this.pool.find(c=>c.name===o));a=a.parent}}s&&i.test(s)?(t.addScore(150),t.sfx("good"),t.toast(`Benar: ${s.label||s.name}`),this.i++,this.hintOn=!1,t.setHint(""),this.i>=this.clues.length&&t.win()):(t.sfx("bad"),t.stage.time-=n.penalty||10,t.toast(s?`Bukan itu (${s.label||s.name}). \u2212${n.penalty||10} detik.`:`Tidak ada objek di situ. \u2212${n.penalty||10} detik.`))}autoplay(e){for(;this.current&&this.ctx.stage.status==="playing";){let t=this.current.target,n=this.actorNodes?.get(t.name)||this.ctx.world.nodeFor(t),i=null;n.traverse(s=>{!i&&s.isMesh&&(i=s)}),this.onPick({object:i||n,actor:this.actorNodes?.has(t.name)?{meta:t}:null}),e(1)}}},bd=class extends tn{static objective(e){return e.talk?`Bicara dengan ${e.count} karakter.`:e.rival?`Lewati ${e.count} gerbang sebelum rivalmu.`:`Lewati ${e.count} gerbang secara berurutan.`}static rules(e){let t=[`Waktu ${e.time} detik.`,"Gerbang aktif bersinar terang; gerbang berikutnya tampak redup.","Tiap gerbang bernilai 100 poin."];return e.timeBonus&&t.push(`Setiap gerbang menambah ${e.timeBonus} detik.`),e.rival&&t.push("Jika rival menyelesaikan semua gerbang lebih dulu, kamu kalah."),e.hazards&&t.push(`${e.hazards} pemburu mengejar. Tiga kali terkena berarti kalah.`),e.talk&&t.push("Mendekat lalu tekan E untuk berbicara."),t}static get controls(){return"move"}setup(){let{ctx:e,p:t}=this;this.actors=null;let n;if(t.anchor==="character"||t.anchor==="animal")this.actors=e.app.actors.ensure(t.anchor,t.count,this.rng),n=this.actors.map(o=>o.worldPosition());else if(t.anchor==="landmark")for(n=e.objects("large").slice(0,t.count).map(l=>{let c=e.world.worldPos(l),h=e.world.sample(this.rng,{near:c,radius:Math.max(2,l.maxDim*.7)});return h.meta=l,h});n.length<t.count;)n.push(e.world.sample(this.rng));else n=e.points(t.count,{sameLevel:e.player.pos.y});let i=[],s=e.player.pos.clone(),a=n.slice();for(;a.length;){let o=0;a.forEach((l,c)=>{l.distanceTo(s)<a[o].distanceTo(s)&&(o=c)}),s=a[o],i.push(a.splice(o,1)[0])}if(this.gates=i.map((o,l)=>{let c=new Mt,h=Tg(e,l===0?Un:$a);if(h.position.y=1.4,c.add(h),c.add(Ka(e,l===0?Un:$a,8)),c.position.copy(o),e.group.add(c),o.meta){let u=Yr(String(l+1));u.position.y=3,c.add(u)}return c.userData={i:l,meta:o.meta,actor:this.actors?this.actors[this.actors.findIndex(u=>u.worldPosition().distanceTo(o)<.01)]:null},c}),this.idx=0,t.hazards&&(e.lives=e.maxLives=3,this.haz=new Za(e,t.hazards,3)),t.rival){this.rival=e.app.actors.ensure("character",1,this.rng)[0];let o=e.player.pos.clone().add(new S(1.5,0,0)),l=this.rival.worldPosition();this.rival.setWorldPosition(o),this.rivalIdx=0,this.rival.override=(c,h)=>{let u=this.gates[this.rivalIdx];if(!u)return!1;let d=u.position,f=h.worldPosition(),v=d.clone().sub(f);v.y=0;let x=3.3*(e.session.difficulty||1);if(v.length()<.6)return this.rivalIdx++,this.rivalIdx>=this.gates.length&&!e.test&&e.lose("Rival tiba lebih dulu"),!1;v.normalize();let m=f.addScaledVector(v,Math.min(x*c,v.length()+1)),p=e.world.castDown(m.x,m.z,m.y+3,8);return p&&(m.y=p.point.y),h.setWorldPosition(m),h.faceWorld(v),!0},e.onDispose(()=>{this.rival.override=null,this.rival.procedural||this.rival.setWorldPosition(l)})}}update(e,t){let{ctx:n,p:i}=this,s=this.gates[this.idx];this.gates.forEach((o,l)=>{o.visible=l>=this.idx&&l<=this.idx+1;let c=o.children[0];c.material.emissiveIntensity=l===this.idx?2.4:.6,c.lookAt(n.app.camera.position.x,o.position.y+1.4,n.app.camera.position.z),c.rotation.z+=e}),s.userData.actor&&s.position.copy(s.userData.actor.worldPosition());let a=s.position.clone().add(new S(0,1,0));i.talk?n.near(a,2.6)&&t.hit("KeyE")?(n.app.ui.bubble(s.userData.actor,s.userData.actor.talk()[0]),this.pass()):n.near(a,2.6)?n.setHint("Tekan E untuk bicara"):n.setHint(""):n.near(a,1.8)&&(this.pass(),s.userData.meta&&!n.test&&n.toast(`Landmark: ${s.userData.meta.label||s.userData.meta.name}`),s.userData.actor&&i.anchor==="animal"&&n.app.ui.infoFor(s.userData.actor.meta)),n.setProgress(`Gerbang ${this.idx}/${this.gates.length}${this.rival?` \xB7 rival ${this.rivalIdx}/${this.gates.length}`:""}`),this.haz?.update(e)}pass(){let{ctx:e,p:t}=this;this.idx++,e.addScore(100),e.sfx("collect"),t.timeBonus&&e.addTime(t.timeBonus),this.idx>=this.gates.length&&e.win()}autoplay(e){for(this.ctx.godMode=!0;this.idx<this.gates.length&&this.ctx.stage.status==="playing";){let t=this.gates[this.idx];this.ctx.teleport(t.position.clone().add(new S(0,.1,0))),this.p.talk&&this.ctx.app.input.pressed.add("KeyE"),e(1)}}},Md=class extends tn{static objective(e){return`Tetap dalam radius ${e.radius} m dari target selama total ${e.hold} detik.`}static rules(e){return[`Batas waktu ${e.time} detik.`,`Jika lebih dari ${e.maxAway} m selama 6 detik berturut-turut, jejak hilang dan kamu kalah.`,"Skor bertambah 10 per detik saat berada dekat target."]}static get controls(){return"move"}setup(){let{ctx:e,p:t}=this;this.target=e.app.actors.ensure(t.target,1,this.rng)[0];let n=this.target.worldPosition(),i=n.y;this.held=0,this.away=0,this.dest=null,this.marker=Es(e,Un,.12),this.target.override=(s,a)=>{let o=a.worldPosition();return(!this.dest||o.distanceTo(this.dest)<.6)&&(this.dest=e.world.sample(this.rng,{near:o,radius:10,sameLevel:i})),a.stepToward(this.dest,s,1.7*(e.session.difficulty||1)),a.worldPosition().distanceTo(o)<.001&&(this.dest=null),!0},e.onDispose(()=>{this.target.override=null,this.target.procedural||this.target.setWorldPosition(n)})}update(e){let{ctx:t,p:n}=this,i=this.target.worldPosition();this.marker.position.copy(i).add(new S(0,2.3,0));let s=t.playerCenter().distanceTo(i.clone().add(new S(0,.9,0)));if(s<n.radius)this.held+=e,this.away=0,t.addScore(10*e);else if(s>n.maxAway){if(this.away+=e,this.away>6)return t.lose("Jejak hilang")}else this.away=0;t.setMeter(this.held/n.hold,`Dekat target ${un(this.held,0)}/${n.hold} dtk`),t.setProgress(`${this.target.name}${this.away>0?` \xB7 menjauh ${un(6-this.away,0)} dtk`:""}`),this.held>=n.hold&&t.win()}autoplay(e){let t=0;for(;this.ctx.stage.status==="playing"&&t++<4e3;)this.ctx.teleport(this.target.worldPosition().add(new S(.6,0,0))),e(1)}},wd=class extends tn{static objective(e){return`Bertahan hidup selama ${e.time} detik.`}static rules(e){let t=[`${e.count} pemburu ${e.mode==="bounce"?"memantul di arena":"mengejarmu"}.`,`${e.lives} nyawa. Nyawa habis berarti kalah.`,"Skor 10 per detik bertahan."];return e.energy&&t.push("Energi berkurang terus. Ambil sel energi hijau; energi nol berarti kalah."),t}static get controls(){return"move"}setup(){let{ctx:e,p:t}=this;if(e.lives=e.maxLives=t.lives||3,this.haz=new Za(e,t.count,t.speed||4,t.mode||"chase"),this.energy=1,this.cells=[],t.energy)for(let n=0;n<3;n++)this.spawnCell()}spawnCell(){let e=Es(this.ctx,qr,.25);e.position.copy(this.ctx.world.sample(this.rng,{near:this.ctx.player.pos,radius:12,sameLevel:this.ctx.player.pos.y})).add(new S(0,.9,0)),this.cells.push(e)}onTimeout(){return"win"}update(e){let{ctx:t,p:n}=this;if(this.haz.update(e),t.addScore(10*e),n.energy){this.energy-=e/25;for(let i of this.cells)i.visible&&t.near(i.position,1.3)&&(i.visible=!1,this.energy=Math.min(1,this.energy+.35),t.addScore(50),t.sfx("collect"),this.spawnCell());if(t.setMeter(this.energy,"Energi"),this.energy<=0)return t.lose("Energi habis")}t.setProgress(`Nyawa ${"\u25CF".repeat(Math.max(0,t.lives))}${"\u25CB".repeat(Math.max(0,t.maxLives-t.lives))}`)}autoplay(e){this.ctx.godMode=!0;let t=0;for(;this.ctx.stage.status==="playing"&&t++<6e3;){if(this.p.energy&&this.energy<.5){let n=this.cells.find(i=>i.visible);n&&this.ctx.teleport(n.position.clone().add(new S(0,-.9,0)))}e(1),this.ctx.stage.time-=.5}}testLose(){let e=this.ctx;e.godMode=!1;for(let t=0;t<5&&e.stage.status==="playing";t++)e.invuln=0,e.loseLife("Uji")}},Sd=class extends tn{static objective(e){return`Kenai ${e.count} target sebelum menghilang.`}static rules(e){return[`Waktu ${e.time} detik.`,`Target hilang setelah ${e.life} detik.`,`Total ${e.misses} kali meleset atau target lolos berarti kalah.`,"Tiap target bernilai 80 poin, ditambah bonus kecepatan."]}static get controls(){return"aim"}setup(){this.hits=0,this.miss=0,this.active=[],this.cool=0}spawn(){let{ctx:e}=this,t=e.world.sample(this.rng,{near:e.player.pos,radius:14,sameLevel:e.player.pos.y}),n=new Mt,i=new Ae(new Ri(.45,32),jr(Un,1.4)),s=new Ae(new Ri(.2,32),jr(Sg,2));s.position.z=.01,n.add(i,s),n.position.copy(t).add(new S(0,1.2+this.rng()*1.6,0)),n.lookAt(e.playerCenter()),n.userData={t:0,target:!0},e.group.add(n),this.active.push(n)}update(e){let{ctx:t,p:n}=this;this.cool-=e,this.active.length<3&&this.cool<=0&&(this.spawn(),this.cool=.6);for(let i of this.active.slice()){i.userData.t+=e;let s=i.userData.t/n.life;i.scale.setScalar(s<.1?s*10:1-Math.max(0,s-.85)*4),s>=1&&(this.remove(i),this.miss++,t.sfx("bad"))}t.setProgress(`Kena ${this.hits}/${n.count} \xB7 meleset ${this.miss}/${n.misses}`),this.miss>=n.misses&&t.lose("Terlalu banyak meleset")}remove(e){this.active.splice(this.active.indexOf(e),1),e.parent?.remove(e)}onPick(e){let{ctx:t,p:n}=this,i=e?.object;for(;i&&!i.userData?.target;)i=i.parent;i&&this.active.includes(i)?(this.hits++,t.addScore(80+Math.round((1-i.userData.t/n.life)*40)),t.sfx("good"),this.remove(i),this.hits>=n.count&&t.win()):(this.miss++,t.sfx("bad"),this.miss>=n.misses&&t.lose("Terlalu banyak meleset"))}autoplay(e){let t=0;for(;this.ctx.stage.status==="playing"&&t++<500;){e(1);let n=this.active[0];n&&this.onPick({object:n.children[0]})}}},Td=class extends tn{static objective(e){return`Ulangi urutan sampai panjangnya ${e.length}.`}static rules(){return["Perhatikan urutan yang menyala, lalu ulangi dengan mengetuk tombol.","Urutan bertambah satu setiap ronde. Tiap langkah benar bernilai 20 poin.","Tiga kesalahan berarti kalah."]}static get controls(){return"overlay"}setup(){let{ctx:e,p:t}=this;e.lives=e.maxLives=3;let n=e.app.data;if(t.pads==="colors"){let s=(n.palette||[]).slice(0,6),a=["#ffd27a","#9aa7ff","#7fe0c4","#ff8fb1","#c3a6ff","#ffb37a"];this.pads=[0,1,2,3,4,5].map(o=>({label:"",color:s[o]||a[o]}))}else t.pads==="objects"?this.pads=this.rng.shuffle(e.objects("notable")).slice(0,4).map((s,a)=>({label:s.label||s.name,color:["#ffd27a","#9aa7ff","#7fe0c4","#ff8fb1"][a]})):t.pads==="animals"?(this.actors=e.app.actors.ensure("animal",4,this.rng),this.pads=this.actors.map((s,a)=>({label:s.name,color:["#ffd27a","#9aa7ff","#7fe0c4","#ff8fb1"][a]}))):(this.actor=e.app.actors.ensure("character",1,this.rng)[0],this.pads=["jump","spin","bow","wave"].map((s,a)=>({label:{jump:"Lompat",spin:"Putar",bow:"Membungkuk",wave:"Goyang"}[s],pose:s,color:["#ffd27a","#9aa7ff","#7fe0c4","#ff8fb1"][a]})));for(;this.pads.length<4;)this.pads.push({label:"",color:["#ffd27a","#9aa7ff","#7fe0c4","#ff8fb1"][this.pads.length]});this.seq=Array.from({length:t.length},()=>this.rng.int(this.pads.length)),this.round=3,this.phase="show",this.showI=0,this.showT=-.6,this.inputI=0;let i=e.overlay("seq");this.statusEl=U("p",{class:"g-status"},"Perhatikan\u2026"),this.btns=this.pads.map((s,a)=>U("button",{class:"pad",type:"button",style:{"--pad":s.color},onclick:()=>this.press(a)},s.label)),i.append(this.statusEl,U("div",{class:"pads"},this.btns))}flash(e){let t=this.btns[e];t.classList.add("lit"),setTimeout(()=>t.classList.remove("lit"),320),this.ctx.sfx("pad"+e%6),this.pads[e].pose&&this.actor&&this.actor.playPose(this.pads[e].pose,.8),this.actors?.[e]&&this.actors[e].playPose("jump",.6)}update(e){let{ctx:t}=this;this.phase==="show"&&(this.showT+=e,this.showT>=.75&&(this.showT=0,this.showI<this.round?(this.flash(this.seq[this.showI]),this.showI++):(this.phase="input",this.inputI=0,this.statusEl.textContent="Giliranmu"))),t.setProgress(`Panjang urutan ${this.round}/${this.p.length} \xB7 nyawa ${t.lives}`)}press(e){let{ctx:t}=this;if(!(this.phase!=="input"||t.stage.status!=="playing"))if(this.flash(e),e===this.seq[this.inputI]){if(this.inputI++,t.addScore(20),this.inputI>=this.round){if(this.round>=this.p.length)return t.win();this.round++,this.phase="show",this.showI=0,this.showT=-.8,this.statusEl.textContent="Bagus. Perhatikan lagi\u2026"}}else t.loseLife("Salah urutan"),t.stage.status==="playing"&&(this.phase="show",this.showI=0,this.showT=-.8,this.statusEl.textContent="Salah. Urutan diulang\u2026")}autoplay(e){let t=0;for(;this.ctx.stage.status==="playing"&&t++<3e3;)this.phase==="input"?this.press(this.seq[this.inputI]):e(1)}},aw=["M50 10 L90 90 L10 90 Z","M10 10 H90 V90 H10 Z","M50 8 A42 42 0 1 1 49.9 8 Z","M50 5 L61 38 L95 38 L67 58 L78 92 L50 71 L22 92 L33 58 L5 38 L39 38 Z","M50 5 L95 50 L50 95 L5 50 Z","M30 10 H70 L95 50 L70 90 H30 L5 50 Z","M10 35 H35 V10 H65 V35 H90 V65 H65 V90 H35 V65 H10 Z","M50 10 C80 10 95 40 70 60 L50 90 L30 60 C5 40 20 10 50 10 Z"],Ed=class extends tn{static objective(e){return`Temukan ${e.pairs} pasang kartu.`}static rules(e){return[`Maksimal ${e.flips} kali membalik pasangan.`,"Pasangan cocok bernilai 120 poin.",`Waktu ${e.time} detik.`]}static get controls(){return"overlay"}setup(){let{ctx:e,p:t}=this,n=[];t.source==="objects"&&(n=[...new Set(e.objects("notable").map(l=>l.label||l.name))]),t.source==="materials"&&(n=[...new Set((e.app.data.materials||[]).map(l=>l.name))]),t.source==="animals"&&(n=e.app.actors.ensure("animal",t.pairs,this.rng).map(l=>l.name)),t.source==="characters"&&(n=e.app.actors.ensure("character",t.pairs,this.rng).map(l=>l.name)),n=[...new Set(n)],n.length<t.pairs&&t.source!=="shapes"&&(n=n.concat([...new Set((e.app.data.materials||[]).map(l=>l.name))].filter(l=>!n.includes(l))));let i=t.source==="shapes"||n.length<t.pairs?this.rng.shuffle(aw).slice(0,t.pairs).map((l,c)=>({svg:l,key:"s"+c})).concat(this.rng.shuffle(n).slice(0,0)):this.rng.shuffle(n).slice(0,t.pairs).map(l=>({text:l,key:l})),s=this.rng.shuffle(i.concat(i).map((l,c)=>({...l,id:c})));this.deck=s,this.open=[],this.matched=0,this.flips=0,this.lock=0;let a=e.overlay("pairs"),o=Math.ceil(Math.sqrt(s.length));this.cards=s.map((l,c)=>U("button",{class:"card",type:"button","aria-label":"Kartu tertutup",onclick:()=>this.flip(c)},U("span",{class:"back"}),U("span",{class:"front",html:l.svg?`<svg viewBox="0 0 100 100" aria-hidden="true"><path d="${l.svg}"/></svg>`:""},l.text||""))),a.append(U("div",{class:"cards",style:{gridTemplateColumns:`repeat(${o}, 1fr)`}},this.cards))}flip(e){let{ctx:t,p:n}=this;if(this.lock>0||t.stage.status!=="playing")return;let i=this.deck[e];if(!(i.done||this.open.includes(e))&&(this.cards[e].classList.add("up"),this.cards[e].setAttribute("aria-label",i.text||"Bentuk"),this.open.push(e),t.sfx("click"),this.open.length===2)){this.flips++;let[s,a]=this.open.map(o=>this.deck[o]);if(s.key===a.key){if(s.done=a.done=!0,this.open.forEach(o=>this.cards[o].classList.add("done")),this.open=[],this.matched++,t.addScore(120),t.sfx("good"),this.matched>=n.pairs)return t.win()}else this.lock=.8;this.flips>=n.flips&&this.matched<n.pairs&&t.lose("Jatah membalik habis")}}update(e){this.lock>0&&(this.lock-=e,this.lock<=0&&(this.open.forEach(t=>{this.cards[t].classList.remove("up"),this.cards[t].setAttribute("aria-label","Kartu tertutup")}),this.open=[])),this.ctx.setProgress(`Pasangan ${this.matched}/${this.p.pairs} \xB7 balik ${this.flips}/${this.p.flips}`)}autoplay(e){let t={};this.deck.forEach((n,i)=>{var s;return(t[s=n.key]||(t[s]=[])).push(i)});for(let[,[n,i]]of Object.entries(t)){if(this.ctx.stage.status!=="playing")break;this.flip(n),this.flip(i),e(1)}}},Ad=class extends tn{static objective(e){return`Jawab benar ${e.count} pertanyaan.`}static rules(e){return[`${e.lives} nyawa; jawaban salah mengurangi satu.`,"Semua pertanyaan dibuat dari data nyata dunia ini.","Jawaban benar bernilai 100 poin.",`Waktu ${e.time} detik.`]}static get controls(){return"overlay"}setup(){let{ctx:e,p:t}=this;e.lives=e.maxLives=t.lives||3,this.qs=Mg(e.app,t.topic,t.count+t.lives+2,this.rng),this.i=0,this.correct=0,this.o=e.overlay("quiz"),this.render()}render(){let e=this.qs[this.i];this.o.replaceChildren(),e&&(this.o.append(U("p",{class:"g-q"},e.q),U("div",{class:"opts"},e.options.map((t,n)=>U("button",{type:"button",class:"opt",onclick:()=>this.answer(n)},t)))),e.note&&this.o.append(U("p",{class:"g-note"},e.note)))}answer(e){let{ctx:t,p:n}=this,i=this.qs[this.i];if(!(!i||t.stage.status!=="playing")){if(e===i.answer?(this.correct++,t.addScore(100),t.sfx("good"),t.toast("Benar")):(t.toast(`Jawaban benar: ${i.options[i.answer]}`),t.loseLife("Salah")),this.i++,this.correct>=n.count)return t.win();if(t.stage.status==="playing"){if(this.i>=this.qs.length)return t.lose("Pertanyaan habis");this.render()}}}update(){this.ctx.setProgress(`Benar ${this.correct}/${this.p.count} \xB7 nyawa ${this.ctx.lives}`)}autoplay(e){let t=0;for(;this.ctx.stage.status==="playing"&&t++<100;)this.answer(this.qs[this.i].answer),e(1)}},Rd=class extends tn{static objective(e){return`Ambil ${e.count} foto bagus dari target yang diminta.`}static rules(e){return["Target harus terlihat, cukup besar, dan tidak terhalang.",e.composition?"Nilai tertinggi jika target berada di titik sepertiga bingkai.":"Nilai tertinggi jika target tepat di tengah bingkai.","Foto bernilai 50 ke atas diterima.",`Waktu ${e.time} detik.`]}static get controls(){return"photo"}setup(){let{ctx:e,p:t}=this,n;if(t.filter==="animal"||t.filter==="character"){let i=e.app.actors.ensure(t.filter,t.count,this.rng);this.targets=i.map(s=>({name:s.name,node:s.node}))}else n=this.rng.shuffle(e.objects("notable")).slice(0,t.count),this.targets=n.map(i=>({name:i.label||i.name,node:e.world.nodeFor(i)}));this.i=0,this.done=0,e.app.ui.showFrame(!0),e.onDispose(()=>e.app.ui.showFrame(!1)),e.app.ui.shutter(()=>this.shoot())}evaluate(){let{ctx:e,p:t}=this,n=this.targets[this.i];if(!n)return null;let i=e.app.camera;i.updateMatrixWorld();let s=new et().setFromObject(n.node),a=s.getCenter(new S),o=s.getSize(new S).length()/2,l=a.clone().project(i);if(l.z>1||Math.abs(l.x)>1||Math.abs(l.y)>1)return{score:0,why:"Target di luar bingkai"};let c=i.position.distanceTo(a),h=o/(Math.tan(jn.degToRad(i.fov/2))*c),u=a.clone().sub(i.position).normalize(),d=e.world.raycast(i.position,u,c-o*.6),f=!1;if(d){let p=d.object;for(f=!0;p;){if(p===n.node){f=!1;break}p=p.parent}}if(f)return{score:0,why:"Target terhalang objek lain"};let v;t.composition?v=Math.min(...[[-1/3,-1/3],[1/3,-1/3],[-1/3,1/3],[1/3,1/3]].map(([p,y])=>Math.hypot(l.x-p,l.y-y))):v=Math.hypot(l.x,l.y);let x=h<.06?.2:h>.9?.5:h<.15?.65:1;return{score:Math.round(zn(1-v/.9,0,1)*60+x*40),why:h<.15?"Terlalu kecil, mendekatlah":v>.35?"Kurang pas posisinya":"Komposisi bagus"}}shoot(){let{ctx:e}=this;if(e.stage.status!=="playing")return;e.sfx("shutter"),e.app.ui.flash();let t=this.evaluate();t&&(t.score>=50?(e.test||e.session.photos.push({src:e.app.renderer.snapshot(),name:this.targets[this.i].name,score:t.score}),e.addScore(t.score*2),e.toast(`Foto ${t.score}/100: ${t.why}`),this.i++,this.done++,this.done>=this.targets.length&&e.win()):e.toast(`Foto ${t.score}/100: ${t.why}`))}update(e,t){let n=this.targets[this.i];n&&(t.hit("KeyP")&&this.shoot(),this.ctx.setProgress(`Foto ${this.done}/${this.targets.length}: ${n.name}`),t.hit("KeyH")&&(this.hintOn=!0),this.hintOn&&this.ctx.setHint(Eg(this.ctx,n.node.getWorldPosition(new S))))}autoplay(e){let{ctx:t}=this,n=t.app.camera;t.app.player.setMode("free");let i=0;for(;t.stage.status==="playing"&&i++<50;){let s=this.targets[this.i],a=new et().setFromObject(s.node),o=a.getCenter(new S),l=Math.max(.3,a.getSize(new S).length()/2),c=l/(Math.tan(jn.degToRad(n.fov/2))*.4),h=null;for(let d=0;d<16;d++){let f=d/16*Math.PI*2,v=o.clone().add(new S(Math.cos(f)*c,l*.3+.4,Math.sin(f)*c));n.position.copy(v),n.lookAt(o),this.p.composition&&(n.rotateY(-n.fov*.0058*n.aspect),n.rotateX(n.fov*.0058)),n.updateMatrixWorld();let x=this.evaluate();if(x&&(!h||x.score>h.s)&&(h={s:x.score,pos:v.clone(),q:n.quaternion.clone()}),x&&x.score>=70)break}n.position.copy(h.pos),n.quaternion.copy(h.q),n.updateMatrixWorld(),t.app.player.pos.copy(h.pos);let u=this.done;this.shoot(),this.done===u&&(this.i=(this.i+1)%this.targets.length),n.updateMatrixWorld()}t.app.player.setMode("first")}},Cd=class extends tn{static objective(e){return`Panjat platform sampai suar setinggi ${e.height} m.`}static rules(e){let t=["Jatuh dari menara mengurangi satu nyawa dan mengembalikanmu ke titik simpan terakhir.","Tiga nyawa. Setiap platform kelima adalah titik simpan.",`Waktu ${e.time} detik.`];return e.gravity&&t.push("Gravitasi jauh lebih ringan dari biasa."),e.gravityCycle&&t.push("Gravitasi berganti ringan dan berat setiap 6 detik."),t}static get controls(){return"move"}setup(){let{ctx:e,p:t}=this;e.lives=e.maxLives=3;let n=e.player;e.stage.returnTo={pos:n.pos.clone(),yaw:n.yaw};let i=e.world,s=new S(i.bounds.max.x+10,i.groundY,i.center.z),a=i.castDown(s.x,s.z,i.bounds.max.y+5,1e4);a&&(s.y=a.point.y),this.base=s;let o=t.gravity||1;n.gravity=18*o,n.jumpSpeed=5.6;let l=t.gravityCycle?26/18:o,c=Math.min(.75/Math.max(.35,l)*.9,1.6),h=Math.ceil(t.height/c)+1,u=[];this.plats=[];let d=0,f=s.y+.4;for(let p=0;p<h;p++){d+=.75+this.rng()*.25;let y=3.2,g=new S(s.x+Math.cos(d)*y,f,s.z+Math.sin(d)*y),_=p%5===0,E=new di(_?1.1:.85,_?1.1:.85,.3,24);E.translate(g.x,g.y-.15,g.z),u.push(E),this.plats.push({pos:g,ckpt:_}),f+=c}let v=new Ae(lu(u),new _t({color:t.dreamy?"#c3a6ff":"#8f9cff",roughness:.35,metalness:.25,emissive:"#3a2f8a",emissiveIntensity:.35}));u.forEach(p=>p.dispose()),v.castShadow=v.receiveShadow=!0,v.geometry.computeBoundsTree(),e.group.add(v),e.addCollider(v),this.mesh=v;let x=this.plats[this.plats.length-1].pos;this.beacon=new Mt,this.beacon.add(Ka(e,Un,12));let m=Es(e,Un,.4);m.position.y=1.2,this.beacon.add(m),this.beacon.position.copy(x),e.group.add(this.beacon),this.save=this.plats[0].pos.clone(),e.teleport(this.save.clone().add(new S(0,.05,0)),x),this.cycle=0,this.highest=0}update(e){let{ctx:t,p:n}=this,i=t.player;if(n.gravityCycle){this.cycle+=e;let a=Math.floor(this.cycle/6)%2===1;i.gravity=a?26:9,t.setMeter(a?1:.35,a?"Gravitasi berat":"Gravitasi ringan")}this.plats.forEach((a,o)=>{a.ckpt&&i.onGround&&i.pos.distanceTo(a.pos)<1.3&&this.save.copy(a.pos),i.onGround&&i.pos.distanceTo(a.pos)<1.2&&(this.highest=Math.max(this.highest,o))}),i.onGround&&i.groundObject===this.mesh&&(this.started=!0),(this.started&&i.onGround&&i.groundObject!==this.mesh||i.pos.y<this.base.y-3)&&(i.place(this.save.clone().add(new S(0,.05,0))),t.invuln=0,t.loseLife("Jatuh")),t.setProgress(`Ketinggian ${un(Math.max(0,i.pos.y-this.base.y),1)} / ${n.height} m`),t.near(this.beacon.position.clone().add(new S(0,1,0)),1.6)&&(t.addScore(this.highest*10),t.win())}autoplay(e){for(let t of this.plats){if(this.ctx.stage.status!=="playing")return;this.ctx.teleport(t.pos.clone().add(new S(0,.02,0))),e(2)}this.ctx.teleport(this.beacon.position.clone()),e(1)}},Pd=class extends tn{static objective(e){return e.levels>1?`Selesaikan ${e.levels} lapis labirin.`:"Temukan jalan keluar labirin."}static rules(e){return["Labirin dibangun di samping dunia. Suar emas menandai pintu keluar.",e.levels>1?"Setiap lapis lebih besar dari sebelumnya.":"Kamu kembali ke dunia setelah selesai.",`Waktu ${e.time} detik.`]}static get controls(){return"move"}setup(){let e=this.ctx.player;this.ctx.stage.returnTo={pos:e.pos.clone(),yaw:e.yaw},this.level=0,this.build(this.p.size)}build(e){let{ctx:t}=this;if(this.mesh){for(let x of[this.mesh,this.floor])t.removeCollider(x),x.parent.remove(x),x.geometry.dispose();this.exit.parent.remove(this.exit)}let n=t.world,i=2.6,s=2.8,a=new S(n.bounds.max.x+16+e*i,n.groundY,n.center.z-e*i/2),o=Array.from({length:e},()=>Array(e).fill(!1)),l={h:Array.from({length:e+1},()=>Array(e).fill(!0)),v:Array.from({length:e},()=>Array(e+1).fill(!0))},c=[[0,0]];for(o[0][0]=!0;c.length;){let[x,m]=c[c.length-1],p=[[x-1,m],[x+1,m],[x,m-1],[x,m+1]].filter(([_,E])=>_>=0&&E>=0&&_<e&&E<e&&!o[_][E]);if(!p.length){c.pop();continue}let[y,g]=this.rng.pick(p);o[y][g]=!0,y!==x?l.h[Math.max(y,x)][m]=!1:l.v[x][Math.max(g,m)]=!1,c.push([y,g])}l.v[e-1][e]=!1;let h=[],u=(x,m,p,y)=>{let g=new Pn(p,s,y);g.translate(a.x+x,a.y+s/2,a.z+m),h.push(g)};for(let x=0;x<=e;x++)for(let m=0;m<e;m++)l.h[x][m]&&u(m*i+i/2,x*i,i+.3,.3);for(let x=0;x<e;x++)for(let m=0;m<=e;m++)l.v[x][m]&&u(m*i,x*i+i/2,.3,i+.3);let d=new Ae(lu(h),new _t({color:"#cbb89a",roughness:.8}));h.forEach(x=>x.dispose()),d.castShadow=d.receiveShadow=!0,d.geometry.computeBoundsTree();let f=new Ae(new Pn(e*i+2,.2,e*i+2),new _t({color:"#5a5070",roughness:.9}));f.position.set(a.x+e*i/2,a.y-.1,a.z+e*i/2),f.receiveShadow=!0,f.geometry.computeBoundsTree(),t.group.add(d,f),t.addCollider(d),t.addCollider(f),this.mesh=d,this.floor=f,this.exit=new Mt,this.exit.add(Ka(t,Un,9)),this.exit.position.set(a.x+e*i+.9,a.y,a.z+(e-.5)*i),t.group.add(this.exit);let v=new S(a.x+i/2,a.y+.05,a.z+i/2);t.teleport(v,this.exit.position),this.n=e}update(){let{ctx:e,p:t}=this;if(e.setProgress(`Lapis ${this.level+1}/${t.levels||1} \xB7 ${this.n}\xD7${this.n}`),e.near(this.exit.position.clone().add(new S(0,.9,0)),1.5)){if(this.level++,e.addScore(150*this.level),e.sfx("good"),this.level>=(t.levels||1))return e.win();this.build(this.n+2),e.addTime(30)}}autoplay(e){let t=0;for(;this.ctx.stage.status==="playing"&&t++<10;)this.ctx.teleport(this.exit.position.clone()),e(1)}},Ld=class extends tn{static objective(e){return{lightsout:"Matikan semua cahaya di papan.",slide:"Susun ubin kembali menjadi 1 sampai 8.",pattern:`Jawab benar ${e.rounds} deret.`,dials:"Samakan semua roda dengan kode target."}[e.kind]}static rules(e){return{lightsout:["Mengetuk satu sel membalik sel itu dan empat tetangganya.","Setiap papan pasti punya solusi.",`Waktu ${e.time} detik.`],slide:["Ketuk ubin di samping ruang kosong untuk menggesernya.","Teka-teki dibuat dari posisi selesai, jadi pasti bisa dipecahkan.",`Waktu ${e.time} detik.`],pattern:["Pilih angka berikutnya dari deret.","Tiga kesalahan berarti kalah.",`Waktu ${e.time} detik.`],dials:["Setiap tuas menaikkan roda pasangannya satu angka (0 sampai 5, berputar).","Kode pasti bisa dicapai.",`Waktu ${e.time} detik.`]}[e.kind]}static get controls(){return"overlay"}setup(){let{ctx:e,p:t}=this;this.o=e.overlay("logic "+t.kind),this.moves=0,this[t.kind+"Setup"]()}lightsoutSetup(){let e=this.p.size;this.n=e,this.board=Array(e*e).fill(0),this.sol=new Set;let t=6+this.rng.int(e*2);for(let n=0;n<t;n++){let i=this.rng.int(e*e);this.toggle(i),this.sol.has(i)?this.sol.delete(i):this.sol.add(i)}this.board.every(n=>!n)&&(this.toggle(0),this.sol.add(0)),this.cells=this.board.map((n,i)=>U("button",{type:"button",class:"lo","aria-label":"Sel "+(i+1),onclick:()=>this.loPress(i)})),this.o.append(U("div",{class:"lo-grid",style:{gridTemplateColumns:`repeat(${e},1fr)`}},this.cells)),this.loPaint()}toggle(e){let t=this.n,n=Math.floor(e/t),i=e%t;for(let[s,a]of[[n,i],[n-1,i],[n+1,i],[n,i-1],[n,i+1]])s>=0&&a>=0&&s<t&&a<t&&(this.board[s*t+a]^=1)}loPaint(){this.cells.forEach((e,t)=>{e.classList.toggle("on",!!this.board[t]),e.setAttribute("aria-pressed",String(!!this.board[t]))})}loPress(e){this.ctx.stage.status==="playing"&&(this.toggle(e),this.moves++,this.ctx.sfx("click"),this.loPaint(),this.board.every(t=>!t)&&(this.ctx.addScore(Math.max(100,600-this.moves*10)),this.ctx.win()))}slideSetup(){this.n=3,this.tiles=[1,2,3,4,5,6,7,8,0],this.path=[];let t=8,n=-1;for(let i=0;i<60;i++){let s=Math.floor(t/3),a=t%3,o=[[s-1,a],[s+1,a],[s,a-1],[s,a+1]].filter(([c,h])=>c>=0&&h>=0&&c<3&&h<3).map(([c,h])=>c*3+h).filter(c=>c!==n),l=this.rng.pick(o);this.tiles[t]=this.tiles[l],this.tiles[l]=0,this.path.push(t),n=t,t=l}this.grid=U("div",{class:"slide-grid"}),this.o.append(this.grid),this.slidePaint()}slidePaint(){this.grid.replaceChildren(...this.tiles.map((e,t)=>U("button",{type:"button",class:"tile"+(e?"":" blank"),"aria-label":e?"Ubin "+e:"Kosong",onclick:()=>this.slideTap(t)},e||"")))}slideTap(e){if(this.ctx.stage.status!=="playing")return;let t=this.tiles.indexOf(0),n=3;Math.abs(Math.floor(t/n)-Math.floor(e/n))+Math.abs(t%n-e%n)===1&&(this.tiles[t]=this.tiles[e],this.tiles[e]=0,this.moves++,this.ctx.sfx("click"),this.slidePaint(),this.tiles.join()==="1,2,3,4,5,6,7,8,0"&&(this.ctx.addScore(Math.max(100,700-this.moves*5)),this.ctx.win()))}patternSetup(){this.ctx.lives=this.ctx.maxLives=3,this.round=0,this.patternNext()}patternNext(){let e=this.rng,t=e.int(5),n,i=1+e.int(9),s=2+e.int(7);if(t===0)n=Array.from({length:6},(l,c)=>i+s*c);else if(t===1)n=Array.from({length:6},(l,c)=>i*(2+s%2)**c);else if(t===2)for(n=[i,i+1];n.length<6;)n.push(n[n.length-1]+n[n.length-2]);else t===3?n=Array.from({length:6},(l,c)=>(c+i)*(c+i)):n=Array.from({length:6},(l,c)=>i+(c%2?s*Math.ceil(c/2):-c/2+s*(c/2)));let a=n.pop(),o=new Set([a]);for(;o.size<4;)o.add(a+(e.int(9)-4)*(1+e.int(3))||a+7);this.cur={seq:n,ans:a,options:e.shuffle([...o])},this.o.replaceChildren(U("p",{class:"g-q seq-q"},n.join(", ")+", ?"),U("div",{class:"opts"},this.cur.options.map(l=>U("button",{type:"button",class:"opt",onclick:()=>this.patternAnswer(l)},String(l)))))}patternAnswer(e){let{ctx:t,p:n}=this;if(t.stage.status==="playing"){if(e===this.cur.ans){if(this.round++,t.addScore(100),t.sfx("good"),this.round>=n.rounds)return t.win()}else if(t.toast(`Jawaban: ${this.cur.ans}`),t.loseLife("Salah"),t.stage.status!=="playing")return;this.patternNext()}}dialsSetup(){let e=this.p.size;this.n=e,this.target=Array.from({length:e},()=>this.rng.int(6)),this.dials=this.target.slice(),this.sol=[];for(let t=0;t<8+this.rng.int(6);t++){let n=this.rng.int(e);this.lever(n,-1),this.sol.push(n)}this.dials.join()===this.target.join()&&(this.lever(0,-1),this.sol.push(0)),this.dEls=this.dials.map(()=>U("span",{class:"dial"})),this.o.append(U("p",{class:"g-q"},"Kode target: ",U("strong",{},this.target.join(" "))),U("div",{class:"dials"},this.dEls),U("div",{class:"levers"},Array.from({length:e},(t,n)=>U("button",{type:"button",class:"opt",onclick:()=>this.leverPress(n)},`Tuas ${n+1} (roda ${n+1} & ${(n+1)%e+1})`)))),this.dialsPaint()}lever(e,t=1){for(let n of[e,(e+1)%this.n])this.dials[n]=(this.dials[n]+t+6)%6}dialsPaint(){this.dEls.forEach((e,t)=>{e.textContent=this.dials[t],e.classList.toggle("ok",this.dials[t]===this.target[t])})}leverPress(e){this.ctx.stage.status==="playing"&&(this.lever(e,1),this.moves++,this.ctx.sfx("click"),this.dialsPaint(),this.dials.join()===this.target.join()&&(this.ctx.addScore(Math.max(100,600-this.moves*15)),this.ctx.win()))}update(){let{p:e,ctx:t}=this;t.setProgress(e.kind==="pattern"?`Deret ${this.round}/${e.rounds} \xB7 nyawa ${t.lives}`:`Langkah ${this.moves}`)}autoplay(e){let{p:t}=this;if(t.kind==="lightsout")for(let n of[...this.sol])this.loPress(n);if(t.kind==="slide")for(let n of this.path.slice().reverse())this.slideTap(n);if(t.kind==="pattern")for(;this.ctx.stage.status==="playing";)this.patternAnswer(this.cur.ans);if(t.kind==="dials")for(let n of this.sol)this.leverPress(n);e(1)}},Id=class extends tn{static objective(e){return{zones:`Letakkan ${e.count} benda ke zona berwarna yang sama.`,tower:`Tumpuk balok sampai menara ${e.goal} m.`,fengshui:"Tata perabot sampai skor Form School mencapai 70."}[e.mode]}static rules(e){return e.mode==="fengshui"?["Tekan F untuk menilai. Penilaian memakai prinsip Form School:","posisi komando: menghadap pintu, tidak segaris langsung dengan pintu, punggung dekat dinding;","pusat ruang (Tai Qi) lapang; jalur dari pintu ke pusat tidak terhalang.","Ini kerangka tradisional, bukan klaim ilmiah.",`Waktu ${e.time} detik.`]:e.mode==="tower"?["Letakkan balok di atas balok lain untuk menumpuk.",`Tujuan: puncak menara setinggi ${e.goal} m dari tanah.`,`Waktu ${e.time} detik.`]:["Benda yang diletakkan di zona yang tepat terkunci dan bernilai 120 poin.",`Waktu ${e.time} detik.`]}static get controls(){return"carry"}setup(){let{ctx:e,p:t}=this,n=e.player,i=n.pos.y,s=[Un,$a,qr,Bd,"#c3a6ff","#ffb37a"];this.items=[],this.zones=[],this.held=null;let a=(l,c)=>{let h;if(c==="trees"){h=new Mt;let u=new Ae(new di(.08,.1,.6,8),new _t({color:"#7a5a3a"}));u.position.y=.3;let d=new Ae(new Ms(.45,1.1,10),new _t({color:s[l%s.length],roughness:.6}));d.position.y=1.1,h.add(u,d)}else if(t.mode==="fengshui"){let u=[["Ranjang",1.4,.5,2],["Meja kerja",1.2,.75,.6],["Sofa",1.8,.8,.8],["Lemari",1,1.9,.5],["Kursi baca",.7,.9,.7]][l%5];h=new Ae(new Pn(u[1],u[2],u[3]),new _t({color:s[l%s.length],roughness:.55})),h.geometry.translate(0,u[2]/2,0);let d=new Ae(new Ms(.12,.3,8),jr("#ffffff",1));d.rotation.x=Math.PI/2,d.position.set(0,u[2]+.15,u[3]/2),h.add(d);let f=Yr(u[0],"#fff6df",1.3);f.position.y=u[2]+.6,h.add(f),h.userData.size=[u[1],u[2],u[3]],h.userData.name=u[0]}else h=new Ae(new Pn(.7,.5,.7),new _t({color:t.mode==="tower"?"#e8dcc6":s[l%s.length],roughness:.5})),h.geometry.translate(0,.25,0);return h.traverse(u=>{u.isMesh&&(u.castShadow=u.receiveShadow=!0)}),h.userData.item=!0,h.userData.i=l,e.group.add(h),h};if(t.mode==="fengshui")return this.setupRoom(a);let o=e.points(t.mode==="tower"?1:t.count,{near:n.pos,radius:14,sameLevel:i,minDist:3.5});if(t.mode!=="tower")o.forEach((l,c)=>{let h=Ya(e,s[c%s.length],1.1);h.position.copy(l).add(new S(0,.04,0)),h.userData.i=c,this.zones.push(h)});else{this.towerSpot=o[0];let l=Ya(e,Un,1.3);l.position.copy(o[0]).add(new S(0,.04,0)),this.zones.push(l)}for(let l=0;l<t.count;l++){let c=a(l,t.props),h=l/t.count*Math.PI*2,u=n.pos.clone().add(new S(Math.cos(h)*2.6,0,Math.sin(h)*2.6)),d=e.world.castDown(u.x,u.z,u.y+2,6,e.app.extraColliders);c.position.copy(d?d.point:u),this.items.push(c),t.mode==="tower"&&(c.geometry.computeBoundsTree(),e.addCollider(c))}}setupRoom(e){let{ctx:t,p:n}=this,i=t.world,s=new S(i.bounds.min.x-10,i.groundY,i.center.z),a=i.castDown(s.x,s.z,i.bounds.max.y+5,1e4);a&&(s.y=a.point.y),this.room={c:s,hw:3.5,hd:3.5,door:s.clone().add(new S(0,0,3.5))};let o=new _t({color:"#d9cdb8",roughness:.8}),l=[],c=(x,m,p,y)=>{let g=new Ae(new Pn(p,1.2,y),o);g.position.set(s.x+x,s.y+.6,s.z+m),g.castShadow=g.receiveShadow=!0,g.geometry.computeBoundsTree(),t.group.add(g),t.addCollider(g),l.push(g)};c(0,-3.5,7.2,.2),c(-3.5,0,.2,7.2),c(3.5,0,.2,7.2),c(-2.25,3.5,2.7,.2),c(2.25,3.5,2.7,.2);let h=new Ae(new Pn(7,.1,7),new _t({color:"#6e5a48",roughness:.7}));h.position.set(s.x,s.y-.04,s.z),h.receiveShadow=!0,h.geometry.computeBoundsTree(),t.group.add(h),t.addCollider(h),Ya(t,qr,.8).position.copy(this.room.door).add(new S(0,.05,.6)),Ya(t,Un,1).position.copy(s).add(new S(0,.05,0));let f=Yr("Pintu","#c9ffef",1.2);f.position.copy(this.room.door).add(new S(0,2.2,0)),t.group.add(f);for(let x=0;x<n.count;x++){let m=e(x);m.position.copy(s).add(new S(-2+x%3*2,0,1.6+Math.floor(x/3)*-1.6+.2)),this.items.push(m)}let v=t.player;t.stage.returnTo={pos:v.pos.clone(),yaw:v.yaw},t.teleport(this.room.door.clone().add(new S(0,0,1.6)),s)}pickUp(e){e.userData.locked||(this.held=e,this.ctx.removeCollider(e),this.ctx.sfx("click"))}dropAt(e){let{ctx:t,p:n}=this,i=this.held;if(!i)return;let s=t.world.castDown(e.x,e.z,e.y+6,12,t.app.extraColliders);if(i.position.set(e.x,s?s.point.y:e.y,e.z),this.held=null,t.sfx("click"),n.mode==="tower"){i.geometry.boundsTree||i.geometry.computeBoundsTree(),t.addCollider(i),i.updateMatrixWorld(),this.checkTower();return}if(n.mode==="zones"){let a=this.zones[i.userData.i];a&&Math.hypot(i.position.x-a.position.x,i.position.z-a.position.z)<1&&(i.userData.locked=!0,i.position.x=a.position.x,i.position.z=a.position.z,t.addScore(120),t.sfx("good"),this.items.every(o=>o.userData.locked)&&t.win())}}towerHeight(){let e=this.towerSpot.y,t=0;for(let n of this.items)Math.hypot(n.position.x-this.towerSpot.x,n.position.z-this.towerSpot.z)<2.2&&n!==this.held&&(t=Math.max(t,n.position.y+.5-e));return t}checkTower(){let e=this.towerHeight();this.ctx.setMeter(e/this.p.goal,`Tinggi menara ${un(e,1)} m`),e>=this.p.goal-.01&&(this.ctx.addScore(e*60),this.ctx.win())}evaluateRoom(){let{ctx:e}=this,t=this.room,n=[],i=0,s=t.door,a=t.c,o=0,l=this.items.filter(u=>["Ranjang","Meja kerja","Sofa"].includes(u.userData.name));for(let u of l){let d=new S(0,0,1).applyQuaternion(u.quaternion),f=s.clone().sub(u.position);f.y=0;let v=f.length();f.normalize();let x=d.dot(f)>.5,p=Math.abs(u.position.x-s.x)<.9,y=u.position.clone().addScaledVector(d,-(u.userData.size[2]/2+.05)),g=Math.min(Math.abs(y.x-(a.x-t.hw)),Math.abs(y.x-(a.x+t.hw)),Math.abs(y.z-(a.z-t.hd)))<.7,_=(x?10:0)+(p?0:6)+(g?6:0);o+=_,x||n.push(`${u.userData.name} belum menghadap ke arah pintu.`),p&&n.push(`${u.userData.name} segaris langsung dengan pintu; geser ke samping.`),g||n.push(`${u.userData.name} belum bersandar ke dinding padat.`)}return i+=l.length?o/(l.length*22)*55:55,this.items.every(u=>Math.hypot(u.position.x-a.x,u.position.z-a.z)>1.2)?i+=25:n.push("Pusat ruang (Tai Qi) belum lapang."),this.items.every(u=>!(Math.abs(u.position.x-a.x)<.9&&u.position.z>a.z&&u.position.z<s.z+.2))?i+=20:n.push("Jalur dari pintu ke pusat ruang terhalang."),i=Math.round(i),{score:i,notes:n}}update(e,t){let{ctx:n,p:i}=this,s=n.player;if(this.held){let a=s.forward(),o=s.pos.clone().addScaledVector(a,1.8);this.held.position.set(o.x,s.pos.y+1,o.z),t.hit("KeyR")&&(this.held.rotation.y+=Math.PI/2),t.hit("KeyE")&&this.dropAt(o)}else if(t.hit("KeyE")){let o=n.app.pick()?.object;for(;o&&!o.userData?.item;)o=o.parent;if(o&&this.items.includes(o)&&o.position.distanceTo(s.pos)<5)this.pickUp(o);else{let l=this.items.filter(c=>!c.userData.locked).sort((c,h)=>c.position.distanceTo(s.pos)-h.position.distanceTo(s.pos))[0];l&&l.position.distanceTo(s.pos)<2.5&&this.pickUp(l)}}i.mode==="fengshui"&&t.hit("KeyF")&&this.judge(),i.mode==="zones"&&n.setProgress(`Terpasang ${this.items.filter(a=>a.userData.locked).length}/${this.items.length}${this.held?" \xB7 membawa benda":""}`),i.mode==="tower"&&(n.setProgress(`Balok ${this.items.length}${this.held?" \xB7 membawa balok":""}`),this.ctx.setMeter(this.towerHeight()/i.goal,`Tinggi menara ${un(this.towerHeight(),1)} m`)),i.mode==="fengshui"&&n.setProgress("Tekan F untuk menilai tata letak")}judge(){let e=this.evaluateRoom();this.lastEval=e,this.ctx.app.ui.fengshuiResult(e),e.score>=70?(this.ctx.addScore(e.score*5),this.ctx.win()):this.ctx.sfx("bad")}autoplay(e){let{p:t,ctx:n}=this;if(t.mode==="zones")for(let i of this.items)this.pickUp(i),this.dropAt(this.zones[i.userData.i].position.clone()),e(1);if(t.mode==="tower")for(let i of this.items){if(n.stage.status!=="playing")break;this.pickUp(i),this.dropAt(this.towerSpot.clone().add(new S(0,.1,0))),e(1)}if(t.mode==="fengshui"){let{c:i,hw:s,hd:a}=this.room,o=[[-s+1.1,-a+1.3],[s-1.1,-a+1.3],[-s+.6,.6],[s-.6,.9],[s-.6,-.6]];this.items.forEach((l,c)=>{let[h,u]=o[c%o.length];this.pickUp(l);let d=i.clone().add(new S(h,0,u));this.dropAt(d);let f=this.room.door.clone().sub(l.position);if(l.rotation.y=Math.atan2(f.x,f.z),["Ranjang","Meja kerja","Sofa"].includes(l.userData.name)){let v=new S(Math.sin(l.rotation.y),0,Math.cos(l.rotation.y)),x=l.position.clone().addScaledVector(v,-(l.userData.size[2]/2)),m=i.z-a,p=Math.sign(h)*s+i.x,y=x.z-m,g=x.x-p;Math.abs(y)<Math.abs(g)?l.position.z-=y-.1:l.position.x-=g-.1*Math.sign(g)}}),this.judge(),e(1)}}},Dd=class extends tn{static objective(e){return{color:`Cocokkan ${e.rounds} warna target.`,material:`Cocokkan ${e.rounds} material target.`,light:`Cocokkan ${e.rounds} pengaturan cahaya target.`}[e.kind]}static rules(e){return[{color:"Atur rona, saturasi, dan kecerahan. Cocok jika selisih warna cukup kecil.",material:"Atur roughness dan metalness bola kiri agar sama dengan bola target di kanan.",light:e.mood?"Atur arah, ketinggian, dan suhu warna matahari sesuai suasana target.":"Atur arah dan ketinggian matahari sampai panah bayangan cocok dengan target."}[e.kind],"Tekan Cek setiap kali kamu yakin. Ronde cocok bernilai 150 poin.",`Waktu ${e.time} detik.`]}static get controls(){return"studio"}setup(){let{ctx:e,p:t}=this;this.round=0,this.o=e.overlay("studio");let n=e.player,i=n.forward(),s=n.pos.clone().addScaledVector(i,2.6).add(new S(0,1.2,0)),a=new S().crossVectors(i,new S(0,1,0));if(t.kind!=="light")this.mine=new Ae(new En(.45,48,32),new _t({color:"#888",roughness:.5,metalness:0})),this.goal=new Ae(new En(.45,48,32),new _t({color:"#888",roughness:.5,metalness:0})),this.mine.position.copy(s).addScaledVector(a,-.6),this.goal.position.copy(s).addScaledVector(a,.6),e.group.add(this.mine,this.goal);else{let o=e.world.sun;this.sun=o;let l={pos:o.position.clone(),color:o.color.clone(),int:o.intensity};e.onDispose(()=>{o.position.copy(l.pos),o.color.copy(l.color),o.intensity=l.int}),this.post=new Ae(new di(.06,.06,1.6,12),new _t({color:"#fff3dd"}));let c=n.pos.clone().addScaledVector(i,3);this.post.position.copy(c).add(new S(0,.8,0)),this.post.castShadow=!0,this.arrowT=new Ae(new gs(.12,2.2),new Ut({color:Un,transparent:!0,opacity:.85,depthWrite:!1})),this.arrowT.rotation.x=-Math.PI/2,this.arrowT.position.copy(c).add(new S(0,.03,0)),e.group.add(this.post,this.arrowT)}this.newRound()}newRound(){let{ctx:e,p:t}=this,n=this.rng;this.o.replaceChildren();let i=s=>s.map(([a,o,l,c,h])=>{let u=U("input",{type:"range",min:l,max:c,step:h,value:this.val[a],"aria-label":o,oninput:d=>{this.setValue(a,+d.target.value)}});return this.inputs[a]=u,U("label",{class:"sl"},U("span",{},o),u)});if(this.inputs={},t.kind==="color"){let s=e.app.data.palette?.length?e.app.data.palette:["#c96f4a","#4a7fc9","#62b38a","#d9b44a"],a=new Se(n.pick(s)),o={};a.getHSL(o),o.s<.15&&(o.s=.35+n()*.4,a.setHSL(o.h,o.s,zn(o.l,.25,.75))),this.target={h:Math.round(o.h*360),s:Math.round(o.s*100),l:Math.round(zn(o.l,.15,.85)*100)},this.val={h:(this.target.h+120+n.int(120))%360,s:50,l:50},this.goal.material.color.setHSL(this.target.h/360,this.target.s/100,this.target.l/100),this.o.append(U("div",{class:"swatches"},this.sw=U("span",{class:"sw"}),U("span",{class:"sw",style:{background:`hsl(${this.target.h} ${this.target.s}% ${this.target.l}%)`}})),...i([["h","Rona",0,359,1],["s","Saturasi",0,100,1],["l","Kecerahan",0,100,1]]))}else if(t.kind==="material"){this.target={r:Math.round(n()*10)/10,m:Math.round(n()*10)/10},this.val={r:.5,m:this.target.m>.5?0:1};let s=new Se(n.pick(["#c9a14a","#b8c4d6","#c96f4a","#7fa8c9"]));this.goal.material.color.copy(s),this.mine.material.color.copy(s),this.goal.material.roughness=this.target.r,this.goal.material.metalness=this.target.m,this.o.append(U("p",{class:"g-note"},"Kiri: buatanmu. Kanan: target."),...i([["r","Roughness",0,1,.05],["m","Metalness",0,1,.05]]))}else{let s=[["Fajar sejuk",7500],["Siang netral",5500],["Senja hangat",3200]];this.target={az:n.int(360),el:20+n.int(50),k:t.mood?n.pick(s):null},this.val={az:(this.target.az+150)%360,el:60,k:5500};let a=[["az","Arah matahari",0,359,1],["el","Ketinggian",10,80,1]];t.mood&&a.push(["k","Suhu warna (K)",2500,9e3,100]),this.o.append(U("p",{class:"g-note"},t.mood?`Suasana target: ${this.target.k[0]}. Panah emas menunjukkan arah bayangan target.`:"Panah emas di tanah menunjukkan arah bayangan target."),...i(a)),this.arrowT.rotation.z=jn.degToRad(this.target.az)}this.o.append(U("button",{type:"button",class:"btn-primary",onclick:()=>this.check()},"Cek")),this.apply()}setValue(e,t){this.val[e]=t,this.inputs[e]&&(this.inputs[e].value=t),this.apply()}apply(){let{p:e}=this;if(e.kind==="color"&&(this.mine.material.color.setHSL(this.val.h/360,this.val.s/100,this.val.l/100),this.sw&&(this.sw.style.background=`hsl(${this.val.h} ${this.val.s}% ${this.val.l}%)`)),e.kind==="material"&&(this.mine.material.roughness=this.val.r,this.mine.material.metalness=this.val.m),e.kind==="light"){let t=jn.degToRad(this.val.az),n=jn.degToRad(this.val.el),i=this.ctx.world.radius*2,s=new S(-Math.sin(t)*Math.cos(n),Math.sin(n),-Math.cos(t)*Math.cos(n));this.sun.position.copy(this.post.position).addScaledVector(s,i),this.sun.target.position.copy(this.post.position),this.sun.target.updateMatrixWorld(),e.mood&&this.sun.color.copy(ow(this.val.k))}}matched(){let{p:e,val:t,target:n}=this;if(e.kind==="color"){let s=new Se().setHSL(t.h/360,t.s/100,t.l/100),a=new Se().setHSL(n.h/360,n.s/100,n.l/100);return Math.hypot(s.r-a.r,s.g-a.g,s.b-a.b)<.09}return e.kind==="material"?Math.abs(t.r-n.r)<=.1&&Math.abs(t.m-n.m)<=.1:Math.abs((t.az-n.az+540)%360-180)<=8&&Math.abs(t.el-n.el)<=6&&(!e.mood||Math.abs(t.k-n.k[1])<=600)}check(){let{ctx:e,p:t}=this;if(e.stage.status==="playing")if(this.matched()){if(this.round++,e.addScore(150),e.sfx("good"),this.round>=t.rounds)return e.win();this.newRound()}else e.sfx("bad"),e.toast("Belum cocok. Perhatikan lagi targetnya.")}update(){this.ctx.setProgress(`Ronde ${this.round+1}/${this.p.rounds}`)}autoplay(e){for(;this.ctx.stage.status==="playing";){let t=this.target;this.p.kind==="color"&&(this.setValue("h",t.h),this.setValue("s",t.s),this.setValue("l",t.l)),this.p.kind==="material"&&(this.setValue("r",t.r),this.setValue("m",t.m)),this.p.kind==="light"&&(this.setValue("az",t.az),this.setValue("el",t.el),t.k&&this.setValue("k",t.k[1])),this.check(),e(1)}}};function ow(r){let e=r/100,t,n,i;return e<=66?(t=255,n=99.47*Math.log(e)-161.12,i=e<=19?0:138.52*Math.log(e-10)-305.04):(t=329.7*(e-60)**-.1332,n=288.12*(e-60)**-.0755,i=255),new Se(zn(t,0,255)/255,zn(n,0,255)/255,zn(i,0,255)/255)}var kd=class extends tn{static objective(e){return`Temukan ${e.count} penghuni yang tersesat dan antar ke zona aman.`}static rules(e){return["Dekati yang tersesat; ia akan mengikutimu.","Bawa ke lingkaran hijau di titik awal.","Tiap penyelamatan bernilai 250 poin.",`Waktu ${e.time} detik.`]}static get controls(){return"move"}setup(){let{ctx:e,p:t}=this;this.lost=e.app.actors.ensure(t.target,t.count,this.rng),this.zone=Ya(e,qr,2),this.zone.position.copy(e.player.pos).add(new S(0,.05,0));let n=e.points(this.lost.length,{minDist:Math.min(10,e.world.radius*.6),sameLevel:e.player.pos.y});this.saved=0,this.lost.forEach((i,s)=>{let a=i.worldPosition();i.rescue={state:"lost"},i.setWorldPosition(n[s]);let o=Es(e,Bd,.14);i.rescue.mark=o,i.override=(l,c)=>{if(o.position.copy(c.worldPosition()).add(new S(0,2.2,0)),c.rescue.state==="follow"){let u=e.player.pos.clone().sub(c.worldPosition());u.y=0;let d=u.length();if(d>1.6){let f=c.worldPosition().addScaledVector(u.clone().divideScalar(d),Math.min(d-1.5,(7.2+Math.max(0,d-6)*.8)*l)),v=e.world.castDown(f.x,f.z,f.y+2.5,6);return v&&(f.y=v.point.y),c.setWorldPosition(f),c.faceWorld(u),!0}}return!1},e.onDispose(()=>{i.override=null,i.procedural||i.setWorldPosition(a),delete i.rescue})})}update(){let{ctx:e}=this;for(let n of this.lost){let i=n.rescue;i&&(i.state==="lost"&&e.near(n.worldPosition().add(new S(0,.9,0)),2.4)&&(i.state="follow",e.sfx("good"),e.app.ui.bubble(n,"Terima kasih! Aku ikut kamu.")),i.state==="follow"&&n.worldPosition().distanceTo(this.zone.position)<2.2&&(i.state="safe",i.mark.visible=!1,this.saved++,e.addScore(250),e.sfx("collect")))}e.setProgress(`Selamat ${this.saved}/${this.lost.length}${this.lost.some(n=>n.rescue?.state==="follow")?" \xB7 ada yang mengikutimu":""}`);let t=this.lost.find(n=>n.rescue?.state==="lost");t?Od(e,t.worldPosition(),e.world.radius*1.5):e.setMeter(null),this.saved>=this.lost.length&&e.win()}autoplay(e){for(let t of this.lost){this.ctx.teleport(t.worldPosition()),e(1),this.ctx.teleport(this.zone.position.clone());let n=0;for(;t.rescue?.state==="follow"&&n++<1500;)e(1)}e(1)}},Ud=class extends tn{static objective(e){return e.target==="beacon"?"Temukan suar tersembunyi.":"Temukan siapa yang bersembunyi."}static rules(e){let t=["Indikator panas-dingin menunjukkan seberapa dekat kamu.","Ditemukan jika jaraknya kurang dari 2 m.",`Waktu ${e.time} detik. Sisa waktu menjadi bonus.`];return e.dark&&t.push("Dunia meredup selama permainan."),t}static get controls(){return"move"}setup(){let{ctx:e,p:t}=this,n=e.points(1,{interior:this.rng()<.5,minDist:Math.min(14,e.world.radius*.7)})[0];if(t.target==="beacon")this.obj=Es(e,Un,.2),this.obj.position.copy(n).add(new S(0,.4,0)),this.posFn=()=>this.obj.position;else{let i=e.app.actors.ensure(t.target,1,this.rng)[0];this.actor=i;let s=i.worldPosition();i.setWorldPosition(n),i.override=()=>!1,e.onDispose(()=>{i.override=null,i.procedural||i.setWorldPosition(s)}),this.posFn=()=>i.worldPosition().add(new S(0,.6,0))}if(t.dark){let i=e.app.renderer.renderer,s=i.toneMappingExposure;i.toneMappingExposure=s*.35,e.onDispose(()=>{i.toneMappingExposure=s})}}update(){let{ctx:e}=this,t=this.posFn();Od(e,t,e.world.radius*1.6),e.setProgress(this.actor?`Mencari ${this.actor.name}`:"Mencari suar"),e.near(t,2)&&(e.addScore(200),this.actor&&e.app.ui.bubble(this.actor,"Ketahuan!"),e.win())}autoplay(e){this.ctx.teleport(this.posFn().clone().add(new S(.3,-.6,0))),e(1)}},Nd=class extends tn{static objective(e){return`Antar ${e.count} makanan ke hewan yang lapar.`}static rules(){return["Ambil makanan (bola jingga) dengan menyentuhnya; kamu hanya bisa membawa satu.","Antar ke hewan dengan meter lapar terendah.","Jika meter lapar satu hewan habis, kamu kalah."]}static get controls(){return"move"}setup(){let{ctx:e}=this;this.animals=e.app.actors.ensure("animal",3,this.rng),this.hunger=this.animals.map((t,n)=>1-n*.12),this.bars=this.animals.map(t=>{let n=Yr("","#fff",1.2);return e.group.add(n),n}),this.food=[];for(let t=0;t<2;t++)this.spawnFood();this.carry=null,this.fed=0}spawnFood(){let e=Es(this.ctx,"#ffb37a",.22);e.position.copy(this.ctx.world.sample(this.rng,{near:this.ctx.player.pos,radius:10,sameLevel:this.ctx.player.pos.y})).add(new S(0,.8,0)),this.food.push(e)}update(e){let{ctx:t,p:n}=this;if(this.animals.forEach((i,s)=>{this.hunger[s]-=e/45;let a=i.worldPosition(),o=this.bars[s];o.position.copy(a).add(new S(0,1.9,0));let l=Math.round(Math.max(0,this.hunger[s])*100);if(o.userData.pct!==l){o.userData.pct=l;let c=Yr(`${l}%`,l<30?"#ff8f8f":"#c9ffef",1.2);o.material.map.dispose(),o.material.map=c.material.map,o.material.needsUpdate=!0}this.carry&&t.near(a.clone().add(new S(0,.6,0)),2.2)&&(this.carry.parent?.remove(this.carry),this.carry=null,this.hunger[s]=1,this.fed++,t.addScore(150),t.sfx("good"),i.playPose("jump",.6),this.fed>=n.count&&t.win()),this.hunger[s]<=0&&t.lose(`${i.name} terlalu lapar`)}),!this.carry){for(let i of this.food)if(i.parent&&t.near(i.position,1.3)){this.carry=i,this.food.splice(this.food.indexOf(i),1),t.sfx("collect"),this.spawnFood();break}}this.carry&&this.carry.position.copy(t.player.pos).add(new S(0,2.1,0)),t.setProgress(`Diberi makan ${this.fed}/${n.count}${this.carry?" \xB7 membawa makanan":""}`)}autoplay(e){let t=0;for(;this.ctx.stage.status==="playing"&&t++<60;){this.carry||(this.ctx.teleport(this.food[0].position.clone().add(new S(0,-.9,0))),e(1));let n=this.hunger.indexOf(Math.min(...this.hunger));this.ctx.teleport(this.animals[n].worldPosition()),e(1)}}},As={collect:yd,find:_d,race:bd,follow:Md,dodge:wd,targets:Sd,sequence:Td,pairs:Ed,quiz:Ad,photo:Rd,platform:Cd,maze:Pd,logic:Ld,arrange:Id,studio:Dd,rescue:kd,hideseek:Ud,feed:Nd};for(let r of Object.values(As))r.controlsKey=r.controls;for(let[r,e]of Object.entries(As))e.mechName=r;var lw=new Set(["gauntlet","hotseat"]),Ag={easy:.8,normal:1,hard:1.25};function cw(r,e){let t=JSON.parse(JSON.stringify(r));if(t.time&&(t.time=Math.round(t.time/e)),e>1){for(let n of["count","length","pairs"])t[n]&&(t[n]=t[n]+1);t.speed&&(t.speed*=1.15)}if(e<1){for(let n of["count","length","pairs"])t[n]&&t[n]>3&&(t[n]=t[n]-1);t.speed&&(t.speed*=.85)}return t}var Fd=class{constructor(e,t,n,i){this.engine=e,this.app=e.app,this.session=t,this.p=n,this.stageDef=i,this.rng=t.rng,this.test=t.test,this._stage=t.stage,this.group=new Mt,this.group.name="__dreams_game",this.app.world.dynamic.add(this.group),this.colliders=[],this.disposers=[],this.lives=n.lives||0,this.maxLives=this.lives,this.invuln=0,this.godMode=!1,this.overlayEl=null,this.progress="",this.meterValue=null,this.meterLabel="",this.hint=""}get player(){return this.app.player}get world(){return this.app.world}get stage(){return this._stage}addScore(e){this.stage.score=Math.max(0,this.stage.score+Math.round(e))}addTime(e){this.stage.time+=e,this.app.ui.toast(`+${e} detik`)}win(){this.engine.winStage()}lose(e){this.engine.loseStage(e)}setProgress(e){this.progress=e}setMeter(e,t){this.meterValue=e,this.meterLabel=t||""}setHint(e){this.hint=e}sfx(e){this.app.audio.sfx(e)}toast(e){this.app.ui.toast(e)}onDispose(e){this.disposers.push(e)}addCollider(e){this.colliders.push(e),this.app.extraColliders.push(e)}removeCollider(e){let t=this.colliders.indexOf(e);t>=0&&this.colliders.splice(t,1),t=this.app.extraColliders.indexOf(e),t>=0&&this.app.extraColliders.splice(t,1)}loseLife(e="Terkena"){this.godMode||this.invuln>0||(this.lives-=1,this.invuln=1.5,this.sfx("bad"),this.toast(`${e}. Nyawa tersisa ${Math.max(0,this.lives)}.`),this.lives<=0&&this.lose("Nyawa habis"))}playerCenter(){return this.app.player.pos.clone().add(new S(0,.9,0))}near(e,t){return this.playerCenter().distanceTo(e)<t}teleport(e,t){this.app.player.place(e.clone()),t&&this.app.player.lookAt(t)}overlay(e=""){return this.overlayEl||(this.overlayEl=this.app.ui.gameOverlay(e)),this.overlayEl}pickable(){return this.app.ui}points(e,t={}){let n=[],i=t.minDist??Math.max(2.5,Math.min(12,this.world.radius/Math.sqrt(e+1)));for(let s=0;s<e;s++){let a=null;for(let o=0;o<12;o++){let l=this.world.sample(this.rng,t),c=Math.min(1/0,...n.map(h=>h.distanceTo(l)),this.player.pos.distanceTo(l)*1.5);if(c>=i){a=l;break}(!a||c>a.d)&&(a=l,a.d=c)}n.push(a.clone())}return n}objects(e="all"){let t=this.world,n=[...t.meta.values()].filter(a=>t.nodeFor(a)&&!["light","camera","terrain"].includes(a.role)&&a.maxDim>.05),i=n.filter(a=>!["wall","floor","roof","building","terrain"].includes(a.role)),s=a=>a.dims[0]*a.dims[1]*a.dims[2];switch(e){case"character":return n.filter(a=>a.role==="character");case"animal":return n.filter(a=>a.role==="animal");case"small":{let a=i.filter(o=>o.maxDim<1.4);return a.length>=3?a:i}case"large":return n.slice().sort((a,o)=>s(o)-s(a)).slice(0,Math.max(6,Math.ceil(n.length*.25)));case"notable":return i.length>=3?i:n;default:return n}}},dc=class{constructor(e,t){this.app=e,this.catalog=t,this.byId=new Map(t.games.map(n=>[n.id,n])),this.base=t.games.filter(n=>!lw.has(n.mech)),this.active=null,this.stats=kn.get("stats",{plays:0,wins:0,best:{},history:[],achievements:[],catsWon:[]})}rulesFor(e,t){return As[e].rules?.(t)||[]}objectiveFor(e,t){return As[e].objective?.(t)||""}controlsFor(e){return wg[As[e].controls||"move"]}buildStages(e,t){let n=e.p;if(e.mech==="gauntlet"){let i;return n.stages?i=n.stages.slice():n.categories?i=n.categories.map(s=>t.pick(this.base.filter(a=>a.cat===s)).id):n.distinct?i=t.shuffle([...new Set(this.base.map(a=>a.cat))]).slice(0,n.random).map(a=>t.pick(this.base.filter(o=>o.cat===a)).id):i=t.shuffle(this.base).slice(0,n.random).map(s=>s.id),i.map(s=>{let a=this.byId.get(s);return{mech:a.mech,p:a.p,title:a.title,id:s}})}return e.mech==="hotseat"?Array.from({length:n.players},(i,s)=>({mech:n.inner.mech,p:n.inner.p,title:`Giliran pemain ${s+1}`,player:s})):[{mech:e.mech,p:e.p,title:e.title,id:e.id}]}start(e,t={}){let n=this.byId.get(e);if(!n)throw new Error("Game tidak ditemukan: "+e);this.stop(!0);let i=t.seed??(n.p.daily?ic():Math.random()*2**31>>>0),s=Xr(i),a=t.difficulty??1;return this.active={def:n,seed:i,rng:s,stages:this.buildStages(n,s),idx:0,total:0,playerScores:[],status:"playing",test:!!t.test,difficulty:a,photos:[],startedAt:performance.now(),source:t.source||"library"},this.app.actors.removeProcedural(),this.app.ui.gameStarted(this.active),this.beginStage(),this.active}beginStage(){let e=this.active,t=e.stages[e.idx],n=cw(t.p,e.difficulty),i=As[t.mech];e.stage={st:t,p:n,time:n.time||180,limit:n.time||180,score:0,status:"ready",ctx:null,mech:null};let s=new Fd(this,e,n,t);e.stage.ctx=s,e.stage.origin=this.app.player.pos.clone(),e.stage.originYaw=this.app.player.yaw;let a=new i(s);if(e.stage.mech=a,a.setup(),e.test){e.stage.status="playing";return}this.app.ui.stageIntro(e,{title:e.stages.length>1?`${e.def.title}: ${t.title}`:e.def.title,objective:this.objectiveFor(t.mech,n),rules:this.rulesFor(t.mech,n),controls:this.controlsFor(t.mech),stageInfo:e.stages.length>1?`Babak ${e.idx+1} dari ${e.stages.length}`:""},()=>this.go())}pick(e){let t=this.active?.stage;return t?.status==="playing"&&t.mech.onPick?(t.mech.onPick(e),!0):!1}wantsPick(){let e=this.active?.stage;return!!(e?.status==="playing"&&e.mech.onPick)}go(){this.active?.stage?.status==="ready"&&(this.active.stage.status="playing",this.app.audio.sfx("click"))}pause(){let e=this.active?.stage;e?.status==="playing"&&(e.status="paused",this.app.ui.paused(!0))}resume(){let e=this.active?.stage;e?.status==="paused"&&(e.status="playing",this.app.ui.paused(!1))}togglePause(){let e=this.active?.stage;e&&(e.status==="paused"?this.resume():this.pause())}update(e,t){let n=this.active;if(!n||!n.stage)return;let i=n.stage;if(i.status==="playing"){if(t.hit("Escape")){this.pause();return}if(i.time-=e,i.ctx.invuln=Math.max(0,i.ctx.invuln-e),i.time<=0){i.time=0,(i.mech.onTimeout?i.mech.onTimeout():"lose")==="win"?this.winStage():this.loseStage("Waktu habis");return}try{i.mech.update(e,t)}catch(s){console.error(s),this.loseStage("Galat: "+s.message)}n.test||this.app.ui.hud(n)}}cleanupStage(){let e=this.active?.stage;if(!e||e.cleaned)return;e.cleaned=!0;let t=e.ctx;try{e.mech.dispose?.()}catch(i){console.error(i)}for(let i of t.disposers.reverse())try{i()}catch(s){console.error(s)}for(let i of t.colliders){let s=this.app.extraColliders.indexOf(i);s>=0&&this.app.extraColliders.splice(s,1)}t.group.parent?.remove(t.group),t.group.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&[].concat(i.material).forEach(s=>{s.map?.dispose(),s.dispose()})}),t.overlayEl?.remove(),this.app.ui.clearGameOverlay(),this.app.renderer.setHighlight([]);let n=this.app.player;n.gravity=18,n.speedScale=1,n.frozen=!1,n.jumpSpeed=5.6,e.returnTo&&n.place(e.returnTo.pos,e.returnTo.yaw)}winStage(){let e=this.active,t=e?.stage;if(!t||t.status==="won"||t.status==="lost")return;t.status="won";let n=Math.round(Math.max(0,t.time))*2;t.score+=n+100,t.bonus=n,this.cleanupStage(),this.app.audio.sfx(e.stages.length>1&&e.idx<e.stages.length-1?"good":"win"),this.afterStage(!0)}loseStage(e){let n=this.active?.stage;!n||n.status==="won"||n.status==="lost"||(n.status="lost",n.reason=e,this.cleanupStage(),this.app.audio.sfx("lose"),this.afterStage(!1,e))}afterStage(e,t){let n=this.active,i=n.def.mech==="hotseat";n.total+=e||i?n.stage.score:0,i&&n.playerScores.push({player:n.idx+1,score:n.stage.score,won:e});let s=n.idx<n.stages.length-1;if((e||i)&&s){if(n.idx+=1,n.test){this.beginStage();return}this.app.ui.interstitial(n,e,t,()=>this.beginStage());return}n.status=e||i?"won":"lost",n.reason=t,n.duration=(performance.now()-n.startedAt)/1e3,n.test||this.record(n),n.test||this.app.ui.complete(n)}record(e){let t=this.stats;t.plays+=1;let n=e.def.id,i=t.best[n]||0;e.newBest=e.status==="won"&&e.total>i,e.newBest&&(t.best[n]=e.total),e.status==="won"&&(t.wins+=1,t.catsWon.includes(e.def.cat)||t.catsWon.push(e.def.cat)),t.history.unshift({id:n,title:e.def.title,status:e.status,score:e.total,seed:e.seed,at:Date.now(),source:e.source}),t.history=t.history.slice(0,40);let s=[],a=(o,l,c)=>{l&&!t.achievements.includes(o)&&(t.achievements.push(o),s.push(c))};a("first-win",t.wins>=1,"Mimpi pertama: menang sekali"),a("ten-wins",t.wins>=10,"Pemimpi tangguh: 10 kemenangan"),a("all-cats",t.catsWon.length>=10,"Penjelajah sepuluh dunia: menang di semua kategori"),a("flawless",e.status==="won"&&e.stage?.ctx?.maxLives>0&&e.stage.ctx.lives===e.stage.ctx.maxLives,"Tanpa luka: menang tanpa kehilangan nyawa"),a("fifty-plays",t.plays>=50,"Lima puluh mimpi dimainkan"),a("dreams-100",Object.keys(t.best).length>=100,"Seratus mimpi: semua game pernah dimenangkan"),e.unlocked=s,kn.set("stats",t)}restart(){let e=this.active;if(!e)return;let{def:t,seed:n,difficulty:i,source:s,test:a}=e;this.start(t.id,{seed:n,difficulty:i,source:s,test:a})}stop(e=!1){this.active&&(this.active.stage&&!["won","lost"].includes(this.active.stage.status)&&this.cleanupStage(),this.active=null,this.app.actors.removeProcedural(),e||this.app.ui.gameEnded())}selftest(e){let t=this.app,n=1/30,i=(h=1)=>{for(let u=0;u<h;u++)t.step(n,!0)},s={id:e,ok:!1,checks:[]},a=(h,u)=>{if(s.checks.push([h,!!u]),!u)throw new Error(h)},o=()=>({dyn:t.world.dynamic.children.length,col:t.extraColliders.length,scene:t.scene.children.length}),l=t.spawn.clone();t.player.place(l);let c=o();try{let h=this.start(e,{test:!0,seed:12345});a("mulai: status bermain",h.stage.status==="playing"),i(5),a("berjalan tanpa galat",["playing","won"].includes(h.stage.status)||h.idx>0);let u=h.stage.time;this.pause(),i(10),a("jeda menghentikan waktu",h.stage.status==="paused"&&h.stage.time===u),this.resume(),a("lanjut",h.stage.status==="playing");let d=0;for(;h.status==="playing"&&d++<h.stages.length+2;){let m=h.stage;if(m.mech.autoplay(i),i(2),h.status==="playing"&&h.stage===m&&m.status==="playing")throw new Error(`babak ${h.idx+1} tidak selesai lewat jalur menang`)}a("kondisi menang tercapai",h.status==="won"),a("skor tercatat",h.total>0),this.restart();let f=this.active;a("ulang: bermain lagi",f.stage.status==="playing"&&f.idx===0);let v=f.stage;v.mech.testLose?v.mech.testLose():(v.time=1e-4,i(2)),f.def.mech==="hotseat"?a("kalah giliran: lanjut ke pemain berikutnya",f.idx===1||f.status!=="playing"):a("kondisi kalah tercapai",f.status==="lost"),this.stop(!0),i(1);let x=o();a("pembersihan tanpa sisa objek",x.dyn===c.dyn&&x.col===c.col&&x.scene===c.scene),s.ok=!0}catch(h){s.error=h.message+(h.stack?" @ "+h.stack.split(`
`)[0]:"");try{this.stop(!0)}catch{}}return t.player.place(l),s}selftestAll(e){let t=[];for(let n of this.catalog.games){let i=this.selftest(n.id);t.push(i),e?.(i,t.length)}return t}};var Rg=[["Normal",1],["Sulit",1.25],["Sangat sulit",1.45]],fc=class{constructor(e){this.app=e,this.state=kn.get("rand",{streak:0,best:0}),this.infiniteMode=!1,this.infiniteCount=0}level(){return Rg[Math.min(Rg.length-1,Math.floor(this.state.streak/3))]}levelLabel(){let[e]=this.level();return`${e} (beruntun ${this.state.streak})`}pick({category:e="all",seed:t}={}){let n=this.app.games,i=t??Math.random()*2**31>>>0,s=Xr(i),a=n.base.filter(o=>e==="all"||o.cat===e);return{def:s.pick(a.length?a:n.base),seed:i}}surprise(e={}){let{def:t,seed:n}=this.pick(e),[i,s]=this.level();return this.app.ui.toast(`Tantangan: ${t.title} \xB7 ${i} \xB7 seed ${n}`),this.app.games.start(t.id,{seed:n,difficulty:s,source:"randomizer"})}infinite(){this.infiniteMode=!0,this.infiniteCount=0,this.surprise()}recordResult(e){e.status==="won"?(this.state.streak+=1,this.state.best=Math.max(this.state.best,this.state.streak)):this.state.streak=0,kn.set("rand",this.state),this.infiniteMode&&(e.status==="won"?(this.infiniteCount+=1,this.app.ui.toast(`Tantangan tanpa akhir: ${this.infiniteCount} selesai. Berikutnya dalam 3 detik.`),setTimeout(()=>{this.infiniteMode&&(this.app.games.stop(!0),this.surprise())},3e3)):(this.app.ui.toast(`Tantangan tanpa akhir berakhir setelah ${this.infiniteCount} kemenangan.`),this.infiniteMode=!1))}history(){return this.app.games.stats.history.filter(e=>e.source==="randomizer")}};var hw={explore:"M12 3l7 4v10l-7 4-7-4V7z M12 3v18 M5 7l7 4 7-4",map:"M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z M9 3v15 M15 6v15",object:"M4 7l8-4 8 4-8 4z M4 7v10l8 4 8-4V7 M12 11v10",people:"M9 11a4 4 0 100-8 4 4 0 000 8z M2 21c0-4 3-7 7-7s7 3 7 7 M17 3.5a4 4 0 010 7.5 M22 21c0-3-1.6-5.4-4-6.5",games:"M6 9h4 M8 7v4 M15 8h.01 M18 11h.01 M7 4h10a5 5 0 015 5v3a5 5 0 01-5 5l-2.5-2h-5L7 17a5 5 0 01-5-5V9a5 5 0 015-5z",dice:"M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z M8 8h.01 M16 8h.01 M12 12h.01 M8 16h.01 M16 16h.01",bagua:"M12 2l7 3 3 7-3 7-7 3-7-3-3-7 3-7z M12 8a4 4 0 100 8 4 4 0 000-8z",gear:"M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z",help:"M12 22a10 10 0 100-20 10 10 0 000 20z M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3 M12 17h.01",full:"M8 3H5a2 2 0 00-2 2v3 M21 8V5a2 2 0 00-2-2h-3 M3 16v3a2 2 0 002 2h3 M16 21h3a2 2 0 002-2v-3",close:"M18 6L6 18 M6 6l12 12",pause:"M8 5v14 M16 5v14"},pc=r=>{let e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("aria-hidden","true"),e.innerHTML=hw[r].split(" M").map((t,n)=>`<path d="${n?"M"+t:t}"/>`).join(""),e},mc=class{constructor(e){this.app=e,this.root=document.getElementById("ui"),this.bubbles=[],this.toasts=U("div",{class:"toasts",role:"status","aria-live":"polite"}),this.root.append(this.toasts)}loader(e){this.load=U("div",{class:"loader"},U("div",{class:"loader-inner"},U("p",{class:"kicker"},"100 DREAMS"),U("h1",{class:"world-title"},e),U("div",{class:"bar",role:"progressbar","aria-valuemin":0,"aria-valuemax":100},this.barFill=U("span")),this.loadText=U("p",{class:"load-text"},"Menyiapkan\u2026"))),this.root.append(this.load)}progress(e,t){this.barFill.style.width=`${Math.round(e*100)}%`,this.load.querySelector(".bar").setAttribute("aria-valuenow",Math.round(e*100)),t&&(this.loadText.textContent=t)}loadError(e,t){this.load.querySelector(".loader-inner").append(U("div",{class:"load-error"},U("p",{},`Dunia gagal dimuat: ${e.message||e}`),U("p",{class:"muted"},location.protocol==="file:"&&this.app.data.glbUrl?"Paket multi-file perlu dibuka lewat server lokal. Jalankan \u201CStart World\u201D di folder hasil, atau tombol OPEN HTML WORLD di Blender.":"Coba muat ulang. Jika terus gagal, pilih mode Performance."),U("div",{class:"row"},U("button",{class:"btn-primary",type:"button",onclick:()=>location.reload()},"Muat ulang"),U("button",{class:"btn",type:"button",onclick:()=>{kn.set("preset","performance"),location.reload()}},"Muat ulang dalam mode Performance"))))}entry(e,t){let n=e,i=n.stats||{},s=(n.objects||[]).filter(l=>l.role==="character").length,a=(n.objects||[]).filter(l=>l.role==="animal").length,o=this.load.querySelector(".loader-inner");o.querySelector(".bar").remove(),this.loadText.remove(),o.append(U("p",{class:"entry-meta"},`${i.objects??n.objects.length} objek, ${s} karakter, ${a} hewan, 100 game`),U("div",{class:"row entry-actions"},U("button",{class:"btn-primary big",type:"button",onclick:()=>t("first")},"Masuk ke dunia"),U("button",{class:"btn",type:"button",onclick:()=>t("orbit")},"Lihat dari luar")),U("p",{class:"muted small"},`Grafis: ${Cr[this.app.renderer.presetName].label}${this.app.renderer.auto?" (otomatis menyesuaikan perangkat)":""}`)),o.querySelector(".btn-primary").focus()}hideLoader(){this.load.classList.add("gone"),setTimeout(()=>this.load.remove(),900)}build(){let e=this.app;this.crosshair=U("div",{class:"crosshair","aria-hidden":"true"}),this.prompt=U("div",{class:"prompt","aria-live":"polite"}),this.info=U("aside",{class:"info","aria-live":"polite"}),this.panel=U("section",{class:"panel",role:"dialog","aria-modal":"false","aria-labelledby":"panel-title"}),this.hudEl=U("div",{class:"hud"}),this.gameLayer=U("div",{class:"game-layer"}),this.modal=U("div",{class:"modal-wrap"}),this.frame=U("div",{class:"photo-frame","aria-hidden":"true"},U("span"),U("span"),U("span"),U("span")),this.flashEl=U("div",{class:"flash","aria-hidden":"true"});let t=[["first","Orang pertama"],["third","Orang ketiga"],["free","Kamera bebas"],["orbit","Orbit"],["cinematic","Sinematik"]];this.modeSel=U("div",{class:"modes",role:"radiogroup","aria-label":"Mode kamera"},t.map(([i,s])=>U("button",{type:"button",role:"radio","data-mode":i,onclick:()=>this.setMode(i)},s))),this.title=U("header",{class:"topbar"},U("h2",{class:"brand"},e.data.name),this.modeSel);let n=(i,s,a,o="")=>U("button",{type:"button",class:"dock-btn "+o,onclick:a,"aria-label":s},pc(i),U("span",{},s));this.dock=U("nav",{class:"dock","aria-label":"Navigasi utama"},n("map","Peta",()=>this.openMap()),n("object","Objek",()=>this.openObjects()),n("people","Penghuni",()=>this.openPeople()),n("games","Game",()=>this.openLibrary()),n("dice","Kejutkan aku",()=>this.openRandomizer(),"accent"),n("bagua","Feng Shui",()=>this.openFengShui()),n("gear","Pengaturan",()=>this.openSettings()),n("help","Bantuan",()=>this.openHelp()),n("full","Layar penuh",()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.())),this.root.append(this.title,this.crosshair,this.prompt,this.info,this.frame,this.flashEl,this.hudEl,this.gameLayer,this.dock,this.panel,this.modal),gg()&&(this.touch=e.input.buildTouch(this.root),this.root.classList.add("is-touch")),addEventListener("keydown",i=>{i.code==="Escape"&&this.panel.classList.contains("open")&&!e.games.active&&this.closePanel(),i.code==="KeyM"&&!i.target.closest("input")&&this.openMap(),i.code==="KeyG"&&!i.target.closest("input")&&this.openLibrary()}),this.setMode(e.player.mode,!0)}setMode(e,t){this.app.player.setMode(e),this.modeSel.querySelectorAll("button").forEach(n=>n.setAttribute("aria-checked",String(n.dataset.mode===e))),this.root.dataset.mode=e,t||this.toast({first:"Klik dunia untuk mengunci mouse. Esc untuk melepas.",third:"Kamera di belakang avatarmu.",free:"Terbang bebas: Spasi naik, Q turun, tembus dinding.",orbit:"Seret untuk memutar, gulir untuk zoom.",cinematic:"Kamera melintas otomatis dengan kedalaman bidang."}[e])}toast(e){if(!e)return;let t=U("div",{class:"toast"},e);for(this.toasts.append(t),setTimeout(()=>t.classList.add("out"),2600),setTimeout(()=>t.remove(),3200);this.toasts.children.length>3;)this.toasts.firstChild.remove()}setPrompt(e){this.prompt.textContent=e||"",this.prompt.classList.toggle("show",!!e)}infoFor(e,t){if(!e){this.info.classList.remove("open"),this.info.replaceChildren();return}let n=e.dims||[0,0,0],i=[["Kategori",e.roleLabel||e.role],["Dimensi",`${un(n[0])} \xD7 ${un(n[1])} \xD7 ${un(n[2])} m`],e.materials?.length&&["Material",e.materials.join(", ")],e.colors?.length&&["Warna",U("span",{class:"chips"},e.colors.map(a=>U("i",{class:"swatch",style:{background:a},title:a})))],e.collection&&["Koleksi",e.collection],e.parent&&["Induk",e.parent],e.scientific&&["Nama ilmiah",e.scientific],e.habitat&&["Habitat",e.habitat],e.diet&&["Makanan",e.diet],e.related?.length&&["Di dekatnya",e.related.join(", ")]].filter(Boolean),s=e.description?U("p",{},e.description):e.descriptionDraft?U("p",{class:"draft"},U("span",{class:"tag"},"Draf otomatis, belum diverifikasi")," ",e.descriptionDraft):null;this.info.replaceChildren(U("button",{class:"x",type:"button","aria-label":"Tutup info",onclick:()=>this.infoFor(null)},pc("close")),U("h3",{},e.label||e.name),s,U("dl",{},i.flatMap(([a,o])=>[U("dt",{},a),U("dd",{},o)])),e.roleSource==="auto"?U("p",{class:"muted small"},"Kategori dikenali otomatis. Koreksi lewat panel Object Override di Blender."):null,t?U("button",{class:"btn small",type:"button",onclick:()=>this.app.inspect(t)},"Periksa dari dekat"):null),this.info.classList.add("open")}bubble(e,t){if(!e||!t)return;let n=U("div",{class:"bubble"},U("strong",{},e.name),U("span",{},t));this.root.append(n);let i={actor:e,el:n,until:performance.now()+4500};this.bubbles.push(i)}dialogue(e){let t=e.talk(),n=0,i=U("div",{class:"dialogue",role:"dialog","aria-label":`Percakapan dengan ${e.name}`}),s=()=>{i.replaceChildren(U("strong",{},e.name),U("p",{},t[n]),U("button",{class:"btn small",type:"button",onclick:()=>{n++,n>=t.length?(i.remove(),this.dialogBox=null):s()}},n<t.length-1?"Lanjut":"Selesai")),i.querySelector("button").focus()};this.dialogBox?.remove(),this.dialogBox=i,this.root.append(i),s(),e.kind==="animal"&&this.infoFor(e.meta)}syncLayers(){this.root.classList.toggle("modal-open",this.modal.childElementCount>0),this.root.classList.toggle("overlay-open",this.gameLayer.childElementCount>0)}updateBubbles(){this.syncLayers();let e=performance.now(),t=this.app.camera;this.bubbles=this.bubbles.filter(n=>{if(e>n.until)return n.el.remove(),!1;let i=n.actor.worldPosition().add(new S(0,2.1,0)).project(t),s=i.z<1&&Math.abs(i.x)<1.1&&Math.abs(i.y)<1.1;return n.el.style.opacity=s?1:0,n.el.style.transform=`translate(${(i.x*.5+.5)*innerWidth}px, ${(-i.y*.5+.5)*innerHeight}px) translate(-50%, -100%)`,!0})}openPanel(e,t,n=!1){this.app.releasePointer(),this.panel.replaceChildren(U("div",{class:"panel-head"},U("h2",{id:"panel-title"},e),U("button",{class:"x",type:"button","aria-label":"Tutup panel",onclick:()=>this.closePanel()},pc("close"))),U("div",{class:"panel-body"},t)),this.panel.classList.toggle("wide",n),this.panel.classList.add("open"),this.root.classList.add("panel-open"),this.panel.querySelector(".x").focus()}closePanel(){this.panel.classList.remove("open"),this.root.classList.remove("panel-open"),this.mapLoop=!1}openMap(){let e=this.app.world,t=this.app.data,n=U("canvas",{class:"map",width:720,height:720,"aria-label":"Peta dunia dari atas. Klik untuk berpindah."}),i=Math.max(e.size.x,e.size.z)*.08+2,s=e.bounds.min.x-i,a=e.bounds.min.z-i,o=Math.max(e.size.x,e.size.z)+i*2,l=(d,f)=>[(d-s)/o*720,(f-a)/o*720],c={wall:"#b9b2d6",floor:"#4a456e",building:"#c9c1ea",furniture:"#f2c46d",character:"#ff8fb1",animal:"#7fe0c4",plant:"#8fd48a",door:"#ffffff",water:"#6fa8ff",vehicle:"#ffb37a"},h=()=>{if(!this.mapLoop)return;let d=n.getContext("2d");d.fillStyle="#15183a",d.fillRect(0,0,720,720);let f=(t.objects||[]).slice().sort((p,y)=>p.center[1]-p.dims[1]/2-(y.center[1]-y.dims[1]/2));for(let p of f){if(["light","camera"].includes(p.role))continue;let[y,g]=l(p.center[0]-p.dims[0]/2,p.center[2]-p.dims[2]/2),_=p.dims[0]/o*720,E=p.dims[2]/o*720;d.fillStyle=c[p.role]||"#8a86b0",d.globalAlpha=p.role==="floor"||p.role==="terrain"?.35:.8,d.fillRect(y,g,Math.max(2,_),Math.max(2,E))}d.globalAlpha=1;for(let p of this.app.actors.of("any")){let y=p.worldPosition(),[g,_]=l(y.x,y.z);d.fillStyle=p.kind==="animal"?"#7fe0c4":"#ff8fb1",d.beginPath(),d.arc(g,_,6,0,7),d.fill()}let v=this.app.player.pos,[x,m]=l(v.x,v.z);d.save(),d.translate(x,m),d.rotate(-this.app.player.yaw),d.fillStyle="#fff",d.beginPath(),d.moveTo(0,-13),d.lineTo(8,9),d.lineTo(0,4),d.lineTo(-8,9),d.fill(),d.restore(),requestAnimationFrame(h)};n.addEventListener("click",d=>{let f=n.getBoundingClientRect(),v=s+(d.clientX-f.left)/f.width*o,x=a+(d.clientY-f.top)/f.height*o,m=e.castDown(v,x,e.bounds.max.y+2,1e4);m&&(["orbit","cinematic"].includes(this.app.player.mode)&&this.setMode("first",!0),this.app.player.place(m.point),this.toast("Berpindah ke titik di peta."))});let u=U("div",{class:"legend"},Object.entries({furniture:"Perabot",character:"Karakter",animal:"Hewan",plant:"Tanaman",door:"Pintu",wall:"Dinding"}).map(([d,f])=>U("span",{},U("i",{style:{background:c[d]}}),f)));this.openPanel("Peta dunia",[n,u,U("p",{class:"muted small"},"Klik peta untuk berpindah ke titik itu. Tombol pintas: M.")]),this.mapLoop=!0,h()}openObjects(){let e=this.app.data,t=U("ul",{class:"list"}),n=(i="")=>{let s=(e.objects||[]).filter(a=>!["light","camera"].includes(a.role)&&(a.label||a.name).toLowerCase().includes(i.toLowerCase())).slice(0,300);t.replaceChildren(...s.map(a=>U("li",{},U("button",{type:"button",onclick:()=>{let o=this.app.world.nodeFor(a);this.infoFor(a,o),o&&this.app.inspect(o)}},U("span",{class:"li-title"},a.label||a.name),U("span",{class:"li-sub"},`${a.roleLabel||a.role} \xB7 ${un(a.dims[1],1)} m`)))))};n(),this.openPanel("Objek di dunia ini",[U("input",{type:"search",class:"search",placeholder:"Cari objek","aria-label":"Cari objek",oninput:i=>n(i.target.value)}),t])}openPeople(){let e=this.app.actors.list,t=(n,i)=>{let s=e.filter(a=>a.kind===n);return[U("h3",{},i),s.length?U("ul",{class:"list"},s.map(a=>U("li",{},U("button",{type:"button",onclick:()=>{this.app.goTo(a.worldPosition()),this.infoFor(a.meta),this.closePanel()}},U("span",{class:"li-title"},a.name),U("span",{class:"li-sub"},a.meta.description||a.meta.descriptionDraft||(n==="animal"?"Hewan":"Karakter")))))):U("p",{class:"muted"},`Project ini belum punya ${n==="animal"?"hewan":"karakter"}. Game yang membutuhkannya memakai aktor prosedural berlabel.`)]};this.openPanel("Penghuni dunia",[...t("character","Karakter"),...t("animal","Hewan")])}openLibrary(e="all"){let t=this.app.games,n=t.catalog.categories,i=U("div",{class:"lib"}),s="",a=()=>{let l=t.catalog.games.filter(c=>(e==="all"||c.cat===e)&&c.title.toLowerCase().includes(s.toLowerCase()));i.replaceChildren(...l.map(c=>U("button",{type:"button",class:"game-card","data-cat":c.cat,onclick:()=>this.gameDetail(c)},U("span",{class:"gnum"},String(c.no)),U("span",{class:"gtitle"},c.title),U("span",{class:"gpitch"},c.pitch),t.stats.best[c.id]?U("span",{class:"gbest"},`Rekor ${t.stats.best[c.id]}`):null)))},o=U("div",{class:"chips-row",role:"tablist"},[["all","Semua"]].concat(Object.entries(n)).map(([l,c])=>U("button",{type:"button",role:"tab",class:"chip","aria-selected":String(l===e),onclick:h=>{e=l,o.querySelectorAll(".chip").forEach(u=>u.setAttribute("aria-selected","false")),h.currentTarget.setAttribute("aria-selected","true"),a()}},c)));a(),this.openPanel("100 game",[U("input",{type:"search",class:"search",placeholder:"Cari game","aria-label":"Cari game",oninput:l=>{s=l.target.value,a()}}),o,i,U("p",{class:"muted small"},`${t.stats.wins} kemenangan dari ${t.stats.plays} permainan. Tombol pintas: G.`)],!0)}gameDetail(e){let t=this.app.games,i=t.buildStages(e,()=>.5)[0],s=e.mech==="gauntlet"&&e.p.stages?U("p",{},"Babak: "+e.p.stages.map(l=>t.byId.get(l).title).join(", ")):e.mech==="gauntlet"?U("p",{},`Babak dipilih acak (${e.p.random})${e.p.daily?" dengan seed hari ini":""}.`):null,a="normal",o=U("div",{class:"seg",role:"radiogroup","aria-label":"Tingkat kesulitan"},Object.entries({easy:"Mudah",normal:"Normal",hard:"Sulit"}).map(([l,c])=>U("button",{type:"button",role:"radio","aria-checked":String(l===a),onclick:h=>{a=l,o.querySelectorAll("button").forEach(u=>u.setAttribute("aria-checked","false")),h.currentTarget.setAttribute("aria-checked","true")}},c)));this.openPanel(`${e.no}. ${e.title}`,[U("p",{class:"lead"},e.pitch),e.mech==="hotseat"?U("p",{},"Mode lokal: dua pemain bergantian di perangkat yang sama. Tidak ada multiplayer online."):null,s,e.mech!=="gauntlet"?[U("h3",{},"Tujuan"),U("p",{},t.objectiveFor(i.mech,i.p)),U("h3",{},"Aturan"),U("ul",{class:"bul"},t.rulesFor(i.mech,i.p).map(l=>U("li",{},l))),U("h3",{},"Kontrol"),U("p",{},t.controlsFor(i.mech))]:null,U("h3",{},"Kesulitan"),o,U("div",{class:"row"},U("button",{class:"btn-primary",type:"button",onclick:()=>{this.closePanel(),t.start(e.id,{difficulty:Ag[a]})}},"Main"),U("button",{class:"btn",type:"button",onclick:()=>this.openLibrary(e.cat)},"Kembali ke daftar"))])}openRandomizer(){let e=this.app.games,t=this.app.randomizer,n="all",i=U("select",{"aria-label":"Kategori",onchange:o=>{n=o.target.value}},U("option",{value:"all"},"Semua kategori"),Object.entries(e.catalog.categories).map(([o,l])=>U("option",{value:o},l))),s=U("input",{type:"number",inputmode:"numeric",placeholder:"Seed (opsional)","aria-label":"Seed tantangan"}),a=t.history().slice(0,8);this.openPanel("Dream Randomizer",[U("p",{class:"lead"},"Tekan sekali, tantangan langsung dimulai. Kesulitan naik setiap tiga kemenangan beruntun dari Randomizer."),U("button",{class:"btn-primary big surprise",type:"button",onclick:()=>{this.closePanel(),t.surprise({category:n,seed:s.value?+s.value:void 0})}},"Kejutkan aku"),U("div",{class:"row"},i,s),U("p",{class:"muted small"},`Tingkat saat ini: ${t.levelLabel()}. Seed yang sama menghasilkan tantangan yang sama.`),U("div",{class:"row"},U("button",{class:"btn",type:"button",onclick:()=>{this.closePanel(),e.start("daily-challenge",{seed:ic(),source:"randomizer"})}},"Tantangan harian"),U("button",{class:"btn",type:"button",onclick:()=>{this.closePanel(),t.infinite()}},"Tantangan tanpa akhir")),U("h3",{},"Riwayat"),a.length?U("ul",{class:"list"},a.map(o=>U("li",{},U("button",{type:"button",onclick:()=>{this.closePanel(),e.start(o.id,{seed:o.seed,source:"randomizer"})}},U("span",{class:"li-title"},o.title),U("span",{class:"li-sub"},`${o.status==="won"?"Menang":"Kalah"} \xB7 ${o.score} poin \xB7 seed ${o.seed} \xB7 main ulang`))))):U("p",{class:"muted"},"Belum ada riwayat."),U("h3",{},"Pencapaian"),U("p",{},e.stats.achievements.length?`${e.stats.achievements.length} terbuka`:"Belum ada. Menangkan game pertamamu.")])}gameStarted(e){this.app.releasePointer(),this.closePanel(),this.root.classList.add("in-game"),this.hudEl.classList.remove("on"),this.hudEl.replaceChildren(),this.hudBuilt=!1}gameEnded(){this.root.classList.remove("in-game"),this.hudEl.classList.remove("on"),this.hudEl.replaceChildren(),this.modal.replaceChildren(),this.clearGameOverlay(),this.showFrame(!1)}stageIntro(e,t,n){this.modal.replaceChildren(U("div",{class:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"m-title"},t.stageInfo?U("p",{class:"kicker"},t.stageInfo):null,U("h2",{id:"m-title"},t.title),U("p",{class:"lead"},t.objective),U("h3",{},"Aturan"),U("ul",{class:"bul"},t.rules.map(i=>U("li",{},i))),U("h3",{},"Kontrol"),U("p",{},t.controls),U("p",{class:"muted small"},`Seed ${e.seed}`),U("div",{class:"row"},U("button",{class:"btn-primary",type:"button",onclick:()=>{this.modal.replaceChildren(),n(),this.app.lockPointer()}},"Mulai"),U("button",{class:"btn",type:"button",onclick:()=>this.app.games.stop()},"Batal")))),this.modal.querySelector(".btn-primary").focus()}hud(e){let t=e.stage,n=t.ctx;this.hudBuilt||(this.h={title:U("strong"),time:U("span",{class:"h-time"}),score:U("span",{class:"h-score"}),prog:U("p",{class:"h-prog"}),meter:U("div",{class:"meter"},U("span")),meterL:U("span",{class:"meter-l"}),hint:U("p",{class:"h-hint"})},this.hudEl.replaceChildren(U("div",{class:"hud-top"},this.h.title,this.h.time,this.h.score,U("button",{class:"x",type:"button","aria-label":"Jeda",onclick:()=>this.app.games.togglePause()},pc("pause"))),this.h.prog,U("div",{class:"meter-row"},this.h.meter,this.h.meterL),this.h.hint),this.hudBuilt=!0,this.hudEl.classList.add("on")),this.h.title.textContent=e.stages.length>1?`${e.def.title} \xB7 ${e.idx+1}/${e.stages.length}`:e.def.title,this.h.time.textContent=gd(t.time),this.h.time.classList.toggle("low",t.time<15),this.h.score.textContent=`${e.total+t.score} poin`,this.h.prog.textContent=n.progress;let i=n.meterValue;this.h.meter.parentElement.style.display=i==null?"none":"",i!=null&&(this.h.meter.firstChild.style.width=`${Math.round(Math.max(0,Math.min(1,i))*100)}%`,this.h.meterL.textContent=n.meterLabel),this.h.hint.textContent=n.hint}paused(e){if(!e){this.modal.replaceChildren(),this.app.lockPointer();return}this.app.releasePointer(),this.modal.replaceChildren(U("div",{class:"modal small",role:"dialog","aria-modal":"true","aria-label":"Jeda"},U("h2",{},"Dijeda"),U("div",{class:"col"},U("button",{class:"btn-primary",type:"button",onclick:()=>this.app.games.resume()},"Lanjutkan"),U("button",{class:"btn",type:"button",onclick:()=>this.app.games.restart()},"Ulangi dari awal"),U("button",{class:"btn",type:"button",onclick:()=>this.app.games.stop()},"Keluar dari game")))),this.modal.querySelector(".btn-primary").focus()}interstitial(e,t,n,i){this.app.releasePointer();let s=e.def.mech==="hotseat";this.modal.replaceChildren(U("div",{class:"modal small",role:"dialog","aria-modal":"true"},U("h2",{},s?`Pemain ${e.idx} selesai`:"Babak selesai"),U("p",{},s?`${t?"Berhasil":"Gagal: "+n}. Skor ${e.playerScores[e.playerScores.length-1].score}.`:`Total sementara ${e.total} poin.`),U("p",{},s?`Serahkan perangkat ke pemain ${e.idx+1}.`:`Berikutnya: ${e.stages[e.idx].title}`),U("button",{class:"btn-primary",type:"button",onclick:()=>{this.modal.replaceChildren(),i()}},"Lanjut"))),this.modal.querySelector("button").focus()}complete(e){this.app.releasePointer();let t=this.app.games,n=e.status==="won",i=e.def.mech==="hotseat",s=n?"Kamu berhasil":"Belum berhasil",a=n?`${e.total} poin dalam ${gd(e.duration)}`:e.reason||"Coba lagi";if(i){let o=e.playerScores.reduce((c,h)=>h.score>c.score?h:c);s=e.playerScores.filter(c=>c.score===o.score).length>1?"Seri":`Pemain ${o.player} menang`,a=e.playerScores.map(c=>`Pemain ${c.player}: ${c.score}`).join(" \xB7 ")}this.modal.replaceChildren(U("div",{class:"modal",role:"dialog","aria-modal":"true","aria-labelledby":"c-title"},U("p",{class:"kicker"},e.def.title),U("h2",{id:"c-title",class:n?"win":"lose"},s),U("p",{class:"lead"},a),e.newBest?U("p",{class:"badge"},"Rekor baru"):U("p",{class:"muted"},`Rekor: ${t.stats.best[e.def.id]||0}`),e.unlocked?.length?U("ul",{class:"bul"},e.unlocked.map(o=>U("li",{},"Pencapaian: "+o))):null,e.photos?.length?U("div",{class:"gallery"},e.photos.map(o=>U("figure",{},U("img",{src:o.src,alt:`Foto ${o.name}`}),U("figcaption",{},`${o.name} \xB7 ${o.score}`)))):null,U("p",{class:"muted small"},`Seed ${e.seed}`),U("div",{class:"row"},U("button",{class:"btn-primary",type:"button",onclick:()=>t.restart()},"Main lagi"),U("button",{class:"btn",type:"button",onclick:()=>{t.stop(),this.openLibrary(e.def.cat)}},"Game lain"),U("button",{class:"btn",type:"button",onclick:()=>t.stop()},"Kembali ke dunia")))),e.source==="randomizer"&&this.app.randomizer.recordResult(e),this.modal.querySelector(".btn-primary").focus()}gameOverlay(e){let t=U("div",{class:"g-overlay "+e});return this.gameLayer.append(t),this.app.releasePointer(),t}clearGameOverlay(){this.gameLayer.replaceChildren(),this.shutterBtn?.remove(),this.shutterBtn=null}showFrame(e){this.frame.classList.toggle("show",e)}shutter(e){this.shutterBtn?.remove(),this.shutterBtn=U("button",{class:"shutter",type:"button","aria-label":"Foto",onclick:e},"Foto"),this.root.append(this.shutterBtn)}flash(){this.flashEl.classList.remove("go"),this.flashEl.offsetWidth,this.flashEl.classList.add("go")}fengshuiResult(e){this.toast(`Skor tata letak ${e.score}/100`),this.gameLayer.querySelector(".fs-res")?.remove(),e.notes.length&&this.gameLayer.append(U("div",{class:"g-overlay fs-res"},U("p",{class:"g-q"},`Skor ${e.score}/100`),U("ul",{class:"bul"},e.notes.slice(0,5).map(t=>U("li",{},t))),U("button",{class:"btn small",type:"button",onclick:t=>{t.currentTarget.parentElement.remove(),this.app.lockPointer()}},"Tutup")))}openFengShui(){let e=this.app.data.fengshui||{},t=this.app.world.bagua,n=e.elements||{},i=[["Kayu","#7fbf6a"],["Api","#ff7a5c"],["Tanah","#d9b36a"],["Logam","#cfd6e6"],["Air","#5c8dff"]],s={P1:"Prioritas tinggi",P2:"Penting",P3:"Disarankan",P4:"Penyempurnaan"};this.openPanel("Feng Shui",[U("p",{class:"lead"},e.summary||"Analisis belum tersedia."),U("p",{class:"muted small"},"Feng Shui disajikan sebagai kerangka tradisional dan bahan pertimbangan desain, bukan klaim ilmiah atau jaminan hasil. Temuan bertanda \u201CObjektif\u201D adalah faktor lingkungan yang dapat diukur."),t?U("button",{class:"btn",type:"button",onclick:a=>{this.app.world.setBaguaVisible(!t.visible),t.visible&&(this.setMode("orbit",!0),this.app.player.orbit.target.copy(this.app.world.focus||this.app.world.center)),a.currentTarget.textContent=t.visible?"Sembunyikan peta bagua":"Tampilkan peta bagua di lantai"}},t.visible?"Sembunyikan peta bagua":"Tampilkan peta bagua di lantai"):null,U("h3",{},"Metode"),U("p",{},e.method||"\u2014"),U("h3",{},"Lima unsur dari material"),U("div",{class:"elements"},i.map(([a,o])=>U("div",{class:"el-row"},U("span",{},a),U("div",{class:"el-bar"},U("i",{style:{width:`${Math.round((n[a]||0)*100)}%`,background:o}})),U("span",{class:"num"},`${Math.round((n[a]||0)*100)}%`)))),e.yinyang?[U("h3",{},"Yin dan Yang"),U("p",{},`${e.yinyang.verdict}. ${e.yinyang.detail}`)]:null,U("h3",{},"Temuan dan saran"),U("ol",{class:"findings"},(e.findings||[]).map(a=>U("li",{"data-p":a.priority},U("span",{class:"fp"},`${a.priority} \xB7 ${s[a.priority]||""} \xB7 ${a.type==="objective"?"Objektif":"Tradisi"}`),U("strong",{},a.title),U("p",{},a.text)))),U("p",{class:"muted small"},"100 DREAMS tidak mengubah scene Blender kamu. Semua saran bersifat opsional.")])}openSettings(){let e=this.app.renderer,t=this.app.audio,n=e.caps,i=U("div",{class:"seg wrap",role:"radiogroup","aria-label":"Preset grafis"},Li.map(l=>U("button",{type:"button",role:"radio","aria-checked":String(e.presetName===l),onclick:c=>{e.apply(l,{manual:!0}),kn.set("preset",l),i.querySelectorAll("button").forEach(h=>h.setAttribute("aria-checked","false")),c.currentTarget.setAttribute("aria-checked","true"),s.checked=!1}},Cr[l].label))),s=U("input",{type:"checkbox",checked:e.auto,onchange:l=>{e.auto=l.target.checked}}),a=(l,c)=>U("label",{class:"sl"},U("span",{},c),U("input",{type:"range",min:0,max:1,step:.05,value:t.vol[l],oninput:h=>{t.start(),t.set(l,+h.target.value)}})),o=U("div",{class:"diag"});this.openPanel("Pengaturan",[U("h3",{},"Grafis"),i,U("label",{class:"check"},s,U("span",{},"Turunkan kualitas otomatis bila frame rate di bawah 26 FPS")),U("dl",{class:"caps"},[["GPU",n.gpu],["WebGL2",n.webgl2?"Ya":"Tidak"],["WebGPU",n.webgpu?"Terdeteksi (rendering tetap WebGL2 demi stabilitas)":"Tidak tersedia"],["Tekstur maks",n.maxTexture?`${n.maxTexture} px`:"\u2014"],["Layar",`${n.screen} @${n.dpr}x`],["Memori",n.memory?`${n.memory} GB`:"Tidak terbaca"]].flatMap(([l,c])=>[U("dt",{},l),U("dd",{},c)])),U("h3",{},"Audio"),a("master","Volume utama"),a("ambient","Musik suasana"),a("sfx","Efek suara"),U("h3",{},"Diagnostik"),U("p",{class:"muted small"},"Menjalankan pengujian otomatis pada ke-100 game: mulai, jeda, jalur menang, jalur kalah, ulang, dan pembersihan memori."),U("button",{class:"btn",type:"button",onclick:()=>this.runDiagnostics(o)},"Jalankan uji 100 game"),o])}runDiagnostics(e){e.replaceChildren(U("p",{},"Menguji\u2026"));let t=this.app.player.pos.clone(),n=this.app.player.mode;setTimeout(()=>{let i=performance.now(),s=this.app.games.selftestAll(),a=s.filter(o=>o.ok).length;this.app.player.setMode(n),this.app.player.place(t),e.replaceChildren(U("p",{class:a===100?"win":"lose"},`${a}/100 game lulus semua pemeriksaan (${un((performance.now()-i)/1e3,1)} detik).`),U("ul",{class:"diag-list"},s.filter(o=>!o.ok).map(o=>U("li",{},`${o.id}: ${o.error}`))))},50)}openHelp(){this.openPanel("Bantuan dan kontrol",[U("dl",{class:"keys"},[["W A S D","Bergerak"],["Mouse / geser layar","Melihat sekeliling (klik dunia untuk mengunci mouse)"],["Shift","Lari"],["Spasi","Lompat (naik di kamera bebas)"],["E","Interaksi: pintu, bicara, periksa objek"],["Klik","Pilih objek dan lihat informasinya"],["M","Peta"],["G","Perpustakaan game"],["Esc","Lepas mouse atau jeda game"]].flatMap(([e,t])=>[U("dt",{},U("kbd",{},e)),U("dd",{},t)])),U("p",{},"Di ponsel: joystick kiri untuk bergerak, geser sisi kanan untuk melihat, tombol Lompat, Aksi, dan Lari di kanan bawah."),U("h3",{},"Tentang dunia ini"),U("p",{},`Dibangun otomatis oleh 100 DREAMS dari scene \u201C${this.app.data.scene}\u201D (Blender ${this.app.data.blender}) pada ${new Date(this.app.data.exportedAt).toLocaleString("id-ID")}.`),this.app.data.fidelity?.length?[U("h3",{},"Catatan kesetiaan visual"),U("ul",{class:"bul"},this.app.data.fidelity.slice(0,12).map(e=>U("li",{},e)))]:null])}};var Cg={version:1,categories:{exploration:"Eksplorasi",puzzle:"Teka-teki",character:"Karakter",animal:"Hewan",action:"Aksi",creative:"Kreatif",education:"Edukasi",adventure:"Petualangan",social:"Sosial & Kompetisi",special:"Spesial"},games:[{no:1,id:"hidden-treasure-hunt",title:"Hidden Treasure Hunt",cat:"exploration",mech:"collect",p:{count:6,time:180,hidden:!0},pitch:"Enam harta kecil tersembunyi di sudut dunia. Temukan semuanya sebelum waktu habis."},{no:2,id:"secret-room-discovery",title:"Secret Room Discovery",cat:"exploration",mech:"collect",p:{count:3,time:240,hidden:!0,interior:!0,exit:!0},pitch:"Kunci rahasia ada di dalam ruangan beratap. Kumpulkan, lalu buka portal keluar."},{no:3,id:"world-explorer",title:"World Explorer",cat:"exploration",mech:"race",p:{count:5,time:240,anchor:"landmark"},pitch:"Kunjungi lima landmark terbesar dunia ini secara berurutan."},{no:4,id:"object-detective",title:"Object Detective",cat:"exploration",mech:"find",p:{count:5,time:240,clue:"mixed"},pitch:"Petunjuk berupa material, ukuran, atau kategori. Tunjuk objek yang cocok."},{no:5,id:"landmark-challenge",title:"Landmark Challenge",cat:"exploration",mech:"find",p:{count:4,time:180,clue:"name",filter:"large"},pitch:"Cari landmark yang namanya disebut, secepat mungkin."},{no:6,id:"mystery-path",title:"Mystery Path",cat:"exploration",mech:"collect",p:{count:8,time:200,ordered:!0},pitch:"Rune bernomor harus disentuh berurutan. Salah urut tidak dihitung."},{no:7,id:"hidden-object-finder",title:"Hidden Object Finder",cat:"exploration",mech:"find",p:{count:6,time:240,clue:"name",filter:"small"},pitch:"Objek-objek kecil disebut namanya. Temukan dan tunjuk."},{no:8,id:"time-exploration",title:"Time Exploration",cat:"exploration",mech:"race",p:{count:6,time:60,timeBonus:15},pitch:"Waktu awal singkat; setiap gerbang menambah 15 detik."},{no:9,id:"world-collector",title:"World Collector",cat:"exploration",mech:"collect",p:{count:15,time:300},pitch:"Lima belas kristal tersebar. Kumpulkan semuanya."},{no:10,id:"ultimate-explorer",title:"Ultimate Explorer",cat:"exploration",mech:"gauntlet",p:{stages:["hidden-treasure-hunt","object-detective","mystery-path"]},pitch:"Tiga ujian eksplorasi berturut-turut tanpa jeda."},{no:11,id:"logic-chamber",title:"Logic Chamber",cat:"puzzle",mech:"logic",p:{kind:"lightsout",size:5,time:300},pitch:"Menekan satu sel membalik sel itu dan tetangganya. Matikan semua cahaya."},{no:12,id:"shape-matching",title:"Shape Matching",cat:"puzzle",mech:"pairs",p:{source:"shapes",pairs:6,flips:30,time:180},pitch:"Pasangkan bentuk-bentuk geometris yang sama."},{no:13,id:"color-sequence",title:"Color Sequence",cat:"puzzle",mech:"sequence",p:{pads:"colors",length:6,time:240},pitch:"Warna diambil dari material dunia ini. Ulangi urutannya."},{no:14,id:"object-arrangement",title:"Object Arrangement",cat:"puzzle",mech:"arrange",p:{mode:"zones",count:4,time:240},pitch:"Pindahkan setiap balok ke zona yang warnanya sama."},{no:15,id:"pattern-detective",title:"Pattern Detective",cat:"puzzle",mech:"logic",p:{kind:"pattern",rounds:6,time:180},pitch:"Tebak angka berikutnya dalam deret."},{no:16,id:"memory-challenge",title:"Memory Challenge",cat:"puzzle",mech:"pairs",p:{source:"objects",pairs:8,flips:40,time:240},pitch:"Kartu memori berisi nama-nama objek dunia ini."},{no:17,id:"spatial-puzzle",title:"Spatial Puzzle",cat:"puzzle",mech:"logic",p:{kind:"slide",size:3,time:300},pitch:"Geser ubin sampai urutannya kembali 1 sampai 8."},{no:18,id:"light-and-shadow-puzzle",title:"Light and Shadow Puzzle",cat:"puzzle",mech:"studio",p:{kind:"light",rounds:3,time:240},pitch:"Atur arah dan ketinggian matahari sampai bayangan cocok dengan target."},{no:19,id:"mechanical-puzzle",title:"Mechanical Puzzle",cat:"puzzle",mech:"logic",p:{kind:"dials",size:4,time:300},pitch:"Setiap tuas memutar beberapa roda sekaligus. Samakan kode target."},{no:20,id:"master-puzzle",title:"Master Puzzle",cat:"puzzle",mech:"gauntlet",p:{stages:["logic-chamber","pattern-detective","spatial-puzzle"]},pitch:"Tiga teka-teki terberat berturut-turut."},{no:21,id:"npc-conversation-quest",title:"NPC Conversation Quest",cat:"character",mech:"race",p:{count:3,time:240,anchor:"character",talk:!0},pitch:"Datangi tiga karakter dan ajak bicara dengan tombol E."},{no:22,id:"character-memory",title:"Character Memory",cat:"character",mech:"pairs",p:{source:"characters",pairs:6,flips:30,time:180},pitch:"Pasangkan kartu nama karakter."},{no:23,id:"follow-the-character",title:"Follow the Character",cat:"character",mech:"follow",p:{target:"character",hold:30,radius:4,maxAway:6,time:120},pitch:"Tetap dekat karakter yang berjalan selama 30 detik total."},{no:24,id:"character-racing",title:"Character Racing",cat:"character",mech:"race",p:{count:6,time:150,rival:!0},pitch:"Balapan melawan karakter melewati enam gerbang. Jangan sampai kalah."},{no:25,id:"character-hide-and-seek",title:"Character Hide and Seek",cat:"character",mech:"hideseek",p:{target:"character",time:150},pitch:"Seorang karakter bersembunyi. Ikuti indikator panas-dingin."},{no:26,id:"dialogue-detective",title:"Dialogue Detective",cat:"character",mech:"quiz",p:{topic:"character",count:5,lives:3,time:240},pitch:"Pertanyaan tentang siapa berada di mana dalam dunia ini."},{no:27,id:"character-collection",title:"Character Collection",cat:"character",mech:"find",p:{count:4,time:200,clue:"name",filter:"character"},pitch:"Temukan dan tunjuk setiap karakter yang disebut."},{no:28,id:"animation-challenge",title:"Animation Challenge",cat:"character",mech:"sequence",p:{pads:"poses",length:5,time:240},pitch:"Karakter memperagakan gerakan. Ulangi urutannya."},{no:29,id:"character-rescue",title:"Character Rescue",cat:"character",mech:"rescue",p:{target:"character",count:1,time:200},pitch:"Temukan karakter yang tersesat dan antar ke zona aman."},{no:30,id:"ultimate-character-quest",title:"Ultimate Character Quest",cat:"character",mech:"gauntlet",p:{stages:["npc-conversation-quest","character-hide-and-seek","character-rescue"]},pitch:"Tiga misi karakter berturut-turut."},{no:31,id:"animal-discovery",title:"Animal Discovery",cat:"animal",mech:"find",p:{count:4,time:200,clue:"name",filter:"animal"},pitch:"Cari dan tunjuk setiap hewan yang disebut."},{no:32,id:"animal-matching",title:"Animal Matching",cat:"animal",mech:"pairs",p:{source:"animals",pairs:6,flips:30,time:180},pitch:"Pasangkan kartu nama hewan."},{no:33,id:"animal-rescue",title:"Animal Rescue",cat:"animal",mech:"rescue",p:{target:"animal",count:2,time:240},pitch:"Dua hewan tersesat. Antar mereka pulang ke zona aman."},{no:34,id:"animal-memory",title:"Animal Memory",cat:"animal",mech:"sequence",p:{pads:"animals",length:6,time:240},pitch:"Hewan menyala bergantian. Ulangi urutannya."},{no:35,id:"habitat-explorer",title:"Habitat Explorer",cat:"animal",mech:"race",p:{count:4,time:240,anchor:"animal"},pitch:"Kunjungi habitat setiap hewan dan baca kartunya."},{no:36,id:"animal-feeding-challenge",title:"Animal Feeding Challenge",cat:"animal",mech:"feed",p:{count:5,time:180},pitch:"Ambil makanan, antar ke hewan sebelum mereka lapar."},{no:37,id:"animal-tracking",title:"Animal Tracking",cat:"animal",mech:"follow",p:{target:"animal",hold:25,radius:5,maxAway:8,time:120},pitch:"Ikuti jejak hewan tanpa kehilangan jejaknya."},{no:38,id:"animal-quiz",title:"Animal Quiz",cat:"animal",mech:"quiz",p:{topic:"animal",count:5,lives:3,time:240},pitch:"Pertanyaan berdasarkan hewan yang benar-benar ada di dunia ini."},{no:39,id:"animal-photography",title:"Animal Photography",cat:"animal",mech:"photo",p:{filter:"animal",count:4,time:240},pitch:"Bidik setiap hewan di tengah bingkai dan tekan P."},{no:40,id:"wildlife-adventure",title:"Wildlife Adventure",cat:"animal",mech:"gauntlet",p:{stages:["animal-tracking","animal-feeding-challenge","animal-photography"]},pitch:"Petualangan satwa tiga babak."},{no:41,id:"obstacle-runner",title:"Obstacle Runner",cat:"action",mech:"race",p:{count:8,time:120,hazards:6},pitch:"Delapan gerbang, enam bola rintangan yang memburu."},{no:42,id:"survival-arena",title:"Survival Arena",cat:"action",mech:"dodge",p:{time:60,count:8,speed:4,lives:3},pitch:"Bertahan 60 detik dari pemburu cahaya."},{no:43,id:"platform-challenge",title:"Platform Challenge",cat:"action",mech:"platform",p:{height:18,time:180},pitch:"Lompat dari platform ke platform sampai suar di puncak."},{no:44,id:"speed-run",title:"Speed Run",cat:"action",mech:"race",p:{count:10,time:100},pitch:"Sepuluh gerbang, seratus detik."},{no:45,id:"dodge-challenge",title:"Dodge Challenge",cat:"action",mech:"dodge",p:{time:45,count:12,speed:5.5,lives:3,mode:"bounce"},pitch:"Dua belas bola memantul. Bertahan 45 detik."},{no:46,id:"target-practice",title:"Target Practice",cat:"action",mech:"targets",p:{count:15,time:90,life:3.5,misses:8},pitch:"Tembak 15 target sebelum menghilang."},{no:47,id:"time-attack",title:"Time Attack",cat:"action",mech:"collect",p:{count:10,time:60},pitch:"Sepuluh kristal dalam 60 detik."},{no:48,id:"escape-room",title:"Escape Room",cat:"action",mech:"collect",p:{count:3,time:240,hidden:!0,interior:!0,exit:!0},pitch:"Cari tiga kunci tersembunyi lalu kabur lewat portal."},{no:49,id:"collect-and-survive",title:"Collect and Survive",cat:"action",mech:"collect",p:{count:10,time:150,hazards:6},pitch:"Kumpulkan kristal sambil menghindari pemburu."},{no:50,id:"ultimate-action-challenge",title:"Ultimate Action Challenge",cat:"action",mech:"gauntlet",p:{stages:["survival-arena","platform-challenge","target-practice"]},pitch:"Tiga ujian refleks berturut-turut."},{no:51,id:"interior-designer",title:"Interior Designer",cat:"creative",mech:"arrange",p:{mode:"fengshui",count:4,time:300},pitch:"Tata perabot. Skor dinilai dari prinsip Form School: posisi komando, jalur, pusat lapang."},{no:52,id:"object-placement",title:"Object Placement",cat:"creative",mech:"arrange",p:{mode:"zones",count:5,time:240},pitch:"Letakkan lima objek ke zonanya masing-masing."},{no:53,id:"world-builder",title:"World Builder",cat:"creative",mech:"arrange",p:{mode:"tower",count:12,goal:6,time:240},pitch:"Tumpuk balok sampai menara setinggi 6 meter."},{no:54,id:"color-studio",title:"Color Studio",cat:"creative",mech:"studio",p:{kind:"color",rounds:3,time:240},pitch:"Racik warna sampai cocok dengan palet target dari dunia ini."},{no:55,id:"material-designer",title:"Material Designer",cat:"creative",mech:"studio",p:{kind:"material",rounds:3,time:240},pitch:"Atur roughness dan metalness sampai bola material cocok dengan target."},{no:56,id:"creative-photography",title:"Creative Photography",cat:"creative",mech:"photo",p:{filter:"any",count:5,time:300,composition:!0},pitch:"Foto lima objek. Nilai tambah untuk komposisi sepertiga."},{no:57,id:"furniture-arrangement",title:"Furniture Arrangement",cat:"creative",mech:"arrange",p:{mode:"fengshui",count:5,time:300,props:"furniture"},pitch:"Atur lima perabot dengan prinsip Feng Shui Form School."},{no:58,id:"landscape-creator",title:"Landscape Creator",cat:"creative",mech:"arrange",p:{mode:"zones",count:6,time:240,props:"trees"},pitch:"Tanam enam pohon di lahan yang ditandai."},{no:59,id:"lighting-designer",title:"Lighting Designer",cat:"creative",mech:"studio",p:{kind:"light",rounds:3,time:240,mood:!0},pitch:"Atur matahari dan suhu cahaya sesuai suasana target."},{no:60,id:"master-creator",title:"Master Creator",cat:"creative",mech:"gauntlet",p:{stages:["color-studio","material-designer","world-builder"]},pitch:"Tiga tantangan kreatif berturut-turut."},{no:61,id:"architecture-explorer",title:"Architecture Explorer",cat:"education",mech:"quiz",p:{topic:"architecture",count:5,lives:3,time:240},pitch:"Pertanyaan tentang pintu, jendela, dan struktur dunia ini."},{no:62,id:"object-knowledge",title:"Object Knowledge",cat:"education",mech:"quiz",p:{topic:"category",count:6,lives:3,time:240},pitch:"Tebak kategori objek-objek di dunia ini."},{no:63,id:"material-science",title:"Material Science",cat:"education",mech:"quiz",p:{topic:"material",count:5,lives:3,time:240},pitch:"Objek ini memakai material apa?"},{no:64,id:"geometry-challenge",title:"Geometry Challenge",cat:"education",mech:"quiz",p:{topic:"geometry",count:6,lives:3,time:240},pitch:"Bandingkan tinggi, lebar, dan jarak objek."},{no:65,id:"nature-knowledge",title:"Nature Knowledge",cat:"education",mech:"quiz",p:{topic:"nature",count:5,lives:3,time:240},pitch:"Tanaman, air, dan hewan yang ada di dunia ini."},{no:66,id:"spatial-awareness",title:"Spatial Awareness",cat:"education",mech:"quiz",p:{topic:"spatial",count:6,lives:3,time:240},pitch:"Mana yang paling tinggi, paling dekat, paling jauh?"},{no:67,id:"history-explorer",title:"History Explorer",cat:"education",mech:"quiz",p:{topic:"project",count:5,lives:3,time:240},pitch:"Riwayat pembuatan dunia ini: versi Blender, koleksi, dan aset."},{no:68,id:"environment-quiz",title:"Environment Quiz",cat:"education",mech:"quiz",p:{topic:"environment",count:5,lives:3,time:240},pitch:"Cahaya, langit, dan lingkungan dunia ini."},{no:69,id:"design-intelligence",title:"Design Intelligence",cat:"education",mech:"quiz",p:{topic:"fengshui",count:5,lives:3,time:240},pitch:"Pertanyaan dari analisis Feng Shui dunia ini (kerangka tradisional)."},{no:70,id:"knowledge-master",title:"Knowledge Master",cat:"education",mech:"quiz",p:{topic:"mixed",count:10,lives:2,time:360},pitch:"Sepuluh pertanyaan campuran, hanya dua nyawa."},{no:71,id:"lost-in-the-world",title:"Lost in the World",cat:"adventure",mech:"hideseek",p:{target:"beacon",time:150},pitch:"Suar pulang ada di suatu tempat. Hanya ada indikator panas-dingin."},{no:72,id:"ancient-mystery",title:"Ancient Mystery",cat:"adventure",mech:"collect",p:{count:4,time:240,hidden:!0,ordered:!0},pitch:"Empat rune kuno, harus berurutan dan tersembunyi."},{no:73,id:"secret-mission",title:"Secret Mission",cat:"adventure",mech:"find",p:{count:3,time:180,clue:"material",penalty:20},pitch:"Target dikenali dari materialnya. Salah tunjuk memotong 20 detik."},{no:74,id:"treasure-expedition",title:"Treasure Expedition",cat:"adventure",mech:"collect",p:{count:5,time:300,exit:!0},pitch:"Lima harta, lalu kembali lewat portal."},{no:75,id:"lost-civilization",title:"Lost Civilization",cat:"adventure",mech:"maze",p:{size:9,levels:1,time:180},pitch:"Labirin kota kuno muncul di samping dunia. Temukan pintu keluar."},{no:76,id:"the-hidden-kingdom",title:"The Hidden Kingdom",cat:"adventure",mech:"collect",p:{count:5,time:300,hidden:!0,interior:!0},pitch:"Lima mahkota tersembunyi di ruang-ruang beratap."},{no:77,id:"rescue-mission",title:"Rescue Mission",cat:"adventure",mech:"rescue",p:{target:"any",count:2,time:260},pitch:"Dua penghuni dunia tersesat. Bawa mereka pulang."},{no:78,id:"the-great-journey",title:"The Great Journey",cat:"adventure",mech:"race",p:{count:8,time:300,anchor:"landmark"},pitch:"Perjalanan melintasi delapan landmark."},{no:79,id:"mystery-adventure",title:"Mystery Adventure",cat:"adventure",mech:"hideseek",p:{target:"beacon",time:120,dark:!0},pitch:"Dunia meredup. Temukan suar dengan indikator panas-dingin."},{no:80,id:"ultimate-world-adventure",title:"Ultimate World Adventure",cat:"adventure",mech:"gauntlet",p:{stages:["treasure-expedition","lost-civilization","rescue-mission"]},pitch:"Petualangan agung tiga babak."},{no:81,id:"multiplayer-treasure-hunt",title:"Multiplayer Treasure Hunt",cat:"social",mech:"hotseat",p:{players:2,inner:{mech:"collect",p:{count:8,time:90}}},pitch:"Dua pemain bergantian di perangkat yang sama. Skor tertinggi menang."},{no:82,id:"time-trial-competition",title:"Time Trial Competition",cat:"social",mech:"hotseat",p:{players:2,inner:{mech:"race",p:{count:6,time:90}}},pitch:"Adu waktu tempuh enam gerbang, bergantian."},{no:83,id:"object-race",title:"Object Race",cat:"social",mech:"hotseat",p:{players:2,inner:{mech:"find",p:{count:4,time:120,clue:"name"}}},pitch:"Adu cepat menemukan objek, bergantian."},{no:84,id:"knowledge-battle",title:"Knowledge Battle",cat:"social",mech:"hotseat",p:{players:2,inner:{mech:"quiz",p:{topic:"mixed",count:6,lives:3,time:180}}},pitch:"Duel kuis dua pemain, bergantian."},{no:85,id:"photo-challenge",title:"Photo Challenge",cat:"social",mech:"hotseat",p:{players:2,inner:{mech:"photo",p:{filter:"any",count:3,time:150,composition:!0}}},pitch:"Adu foto terbaik, bergantian."},{no:86,id:"explorer-competition",title:"Explorer Competition",cat:"social",mech:"hotseat",p:{players:2,inner:{mech:"collect",p:{count:8,time:150,hidden:!0}}},pitch:"Adu menemukan harta tersembunyi, bergantian."},{no:87,id:"puzzle-duel",title:"Puzzle Duel",cat:"social",mech:"hotseat",p:{players:2,inner:{mech:"logic",p:{kind:"lightsout",size:4,time:180}}},pitch:"Teka-teki yang sama, siapa paling cepat."},{no:88,id:"creative-competition",title:"Creative Competition",cat:"social",mech:"hotseat",p:{players:2,inner:{mech:"studio",p:{kind:"color",rounds:2,time:180}}},pitch:"Adu ketepatan meracik warna."},{no:89,id:"daily-challenge",title:"Daily Challenge",cat:"social",mech:"gauntlet",p:{random:3,daily:!0},pitch:"Tiga tantangan yang sama untuk semua orang hari ini (seed tanggal)."},{no:90,id:"world-champion",title:"World Champion",cat:"social",mech:"gauntlet",p:{random:5},pitch:"Lima tantangan acak untuk gelar juara dunia."},{no:91,id:"random-world-challenge",title:"Random World Challenge",cat:"special",mech:"gauntlet",p:{random:1},pitch:"Satu tantangan acak dari 80 game dasar."},{no:92,id:"infinite-maze",title:"Infinite Maze",cat:"special",mech:"maze",p:{size:7,levels:5,time:300},pitch:"Setiap pintu keluar membuka labirin yang lebih besar. Lima lapis."},{no:93,id:"dream-simulator",title:"Dream Simulator",cat:"special",mech:"platform",p:{height:24,time:200,gravity:.35,dreamy:!0},pitch:"Gravitasi seperti mimpi. Melayang ke puncak."},{no:94,id:"gravity-challenge",title:"Gravity Challenge",cat:"special",mech:"platform",p:{height:16,time:180,gravityCycle:!0},pitch:"Gravitasi berganti ringan dan berat setiap 6 detik."},{no:95,id:"time-manipulation",title:"Time Manipulation",cat:"special",mech:"collect",p:{count:10,time:150,hazards:8,slowmo:!0},pitch:"Tahan Q untuk memperlambat pemburu. Energi terbatas."},{no:96,id:"mini-world-survival",title:"Mini World Survival",cat:"special",mech:"dodge",p:{time:90,count:6,speed:3.5,lives:3,energy:!0},pitch:"Energi terus berkurang. Ambil sel energi sambil menghindar."},{no:97,id:"secret-dimension",title:"Secret Dimension",cat:"special",mech:"collect",p:{count:6,time:240,hidden:!0,dimension:!0},pitch:"Dunia berubah warna. Temukan enam gerbang dimensi."},{no:98,id:"ultimate-random-quest",title:"Ultimate Random Quest",cat:"special",mech:"gauntlet",p:{random:4},pitch:"Empat tantangan acak dengan seed yang bisa diulang."},{no:99,id:"master-of-the-world",title:"Master of the World",cat:"special",mech:"gauntlet",p:{random:4,categories:["exploration","puzzle","action","education"]},pitch:"Satu tantangan dari empat kategori berbeda."},{no:100,id:"the-100-dreams-challenge",title:"The 100 Dreams Challenge",cat:"special",mech:"gauntlet",p:{random:5,distinct:!0},pitch:"Lima tantangan dari lima kategori berbeda. Ujian terakhir."}]};var zd=class{constructor(){this.data=JSON.parse(document.getElementById("dreams-data").textContent),this.canvas=document.getElementById("world"),this.caps=am(),this.rng=Xr(1234567),this.extraColliders=[],this.ui=new mc(this),this.ui.loader(this.data.name),this.hoverT=0,this.clock=new br}async boot(){if(!this.caps.webgl2)throw new Error("Browser ini tidak mendukung WebGL2. Gunakan Chrome, Edge, Firefox, atau Safari versi terbaru.");let e=this.renderer=new Ll(this.canvas,this.caps);this.scene=e.scene,this.camera=e.camera;let t=kn.get("preset",null),n=this.data.defaultPreset||"cinematic",i=om(this.caps),s=t||Li[Math.max(Li.indexOf(n),Li.indexOf(i))];t&&(e.auto=!1),e.onAutoChange=(o,l)=>this.ui.toast(`Kualitas grafis diturunkan ke ${o} (rata-rata ${Math.round(l)} FPS) agar tetap mulus.`);let a=await this.loadAsset("dreams-glb",this.data.glbUrl,o=>this.ui.progress(o*.5,"Memuat dunia"));if(this.audio=new uc,this.world=new sc(this),await this.world.load(a,this.data,(o,l)=>this.ui.progress(.5+o*.4,l)),this.data.environment?.hdri)try{let o=await this.loadAsset("dreams-env",this.data.environment.hdriUrl,()=>{});await this.world.loadEnvironmentMap(o,this.data.environment.hdri)}catch(o){console.warn("HDRI gagal dimuat, memakai langit prosedural",o)}this.input=new oc(this.canvas),this.player=new lc(this),this.spawn=this.world.spawnPoint(this.data),this.player.place(this.spawn),this.player.lookAt(this.world.focus||this.world.center),this.player.mode=this.world.showcase?"orbit":"first",this.actors=new hc(this),this.actors.init(),this.world.buildBaguaOverlay(this.data.fengshui),this.games=new dc(this,Cg),this.randomizer=new fc(this),e.apply(s),this.ui.progress(1,"Siap"),this.ui.build(),this.bindInteraction(),window.__DREAMS__=this,window.__DREAMS_TEST__=()=>this.games.selftestAll(),this.loop(),document.documentElement.dataset.ready="1"}async loadAsset(e,t,n){let i=document.getElementById(e);if(i&&i.textContent.trim().length>10){n(.3);let f=await(await fetch("data:application/octet-stream;base64,"+i.textContent.trim())).arrayBuffer();return n(1),i.textContent="",f}if(!t)throw new Error("Aset dunia tidak ditemukan di dalam HTML.");let s=await fetch(t);if(!s.ok)throw new Error(`Gagal memuat ${t} (${s.status})`);let a=+s.headers.get("content-length")||0;if(!s.body||!a){let d=await s.arrayBuffer();return n(1),d}let o=s.body.getReader(),l=[],c=0;for(;;){let{done:d,value:f}=await o.read();if(d)break;l.push(f),c+=f.length,n(c/a)}let h=new Uint8Array(c),u=0;for(let d of l)h.set(d,u),u+=d.length;return h.buffer}enter(e){this.audio.start(),this.ui.hideLoader(),this.ui.setMode(e,!0),e==="first"&&this.lockPointer(),this.ui.toast("Selamat datang. Tekan G untuk 100 game, M untuk peta.")}lockPointer(){["first","third","free"].includes(this.player.mode)&&!this.ui.root.classList.contains("is-touch")&&this.canvas.requestPointerLock?.()?.catch?.(()=>{})}releasePointer(){document.pointerLockElement&&document.exitPointerLock()}bindInteraction(){this.raycaster=new Mr,this.ui.entry(this.data,e=>this.enter(e))}pick(e){let t=document.pointerLockElement===this.canvas,n=!e&&(t||["first","third"].includes(this.player.mode)&&!this.ui.root.classList.contains("is-touch"))?new te(0,0):this.input.mouse;this.raycaster.setFromCamera(n,this.camera),this.raycaster.far=400;let i=this.raycaster.intersectObjects([this.world.root,this.world.dynamic],!0);for(let s of i){let a=s.object,o=!1;for(;a;){if(a.name==="__dreams_avatar"||a.isSprite){o=!0;break}a=a.parent}if(o||!s.object.visible)continue;let l=this.actors.of("any").find(c=>{let h=s.object;for(;h;){if(h===c.node)return!0;h=h.parent}return!1});return{...s,actor:l}}return null}inspect(e){let t=new et().setFromObject(e),n=t.getCenter(new S),i=Math.max(.4,t.getSize(new S).length()/2);this.ui.setMode("orbit",!0),this.player.orbit.target.copy(n);let s=this.camera.position.clone().sub(n).normalize();s.lengthSq()<.1&&s.set(1,.6,1).normalize(),this.camera.position.copy(n).addScaledVector(s,i*2.6+.6),this.ui.toast("Mode orbit: seret untuk memutar objek. Pilih mode Orang pertama untuk kembali berjalan.")}goTo(e){let t=this.world.sample(this.rng,{near:e,radius:2.5,sameLevel:e.y});["orbit","cinematic"].includes(this.player.mode)&&this.ui.setMode("first",!0),this.player.place(t),this.player.lookAt(e)}step(e,t=!1){let n=this.clock.elapsedTime,i=!t&&this.ui.modal.childElementCount>0;this.input.enabled=!i,i||this.player.update(e,this.input),this.actors.update(e,n),this.world.update(e,n),this.games.update(e,this.input),t||this.interact(e),this.input.endFrame()}interact(e){let t=!!this.games.active,n=this.input;if(this.hoverT+=e,this.hoverT>.12){this.hoverT=0;let i=this.pick(),s=null,a="";if(i){let o=this.world.doors.find(l=>{let c=i.object;for(;c;){if(c===l.node)return!0;c=c.parent}return!1});if(i.actor&&i.distance<4)s=i.actor.node,a=`E: bicara dengan ${i.actor.name}`;else if(o&&i.distance<3.5)s=o.node,a=`E: ${o.open?"tutup":"buka"} pintu`;else{let l=this.world.metaFor(i.object);l&&i.distance<30&&!["floor","terrain","wall"].includes(l.meta.role)&&(s=l.node,t||(a=`Klik: info ${l.meta.label||l.meta.name}`))}this.hover={h:i,door:o,target:s}}else this.hover=null;this.renderer.setHighlight(s?[s]:[]),(!t||!this.games.active?.stage||this.games.active.stage.status==="playing")&&this.ui.setPrompt(a)}if(n.clicked){let i=document.pointerLockElement===this.canvas;if(this.games.wantsPick())!i&&["first","third","free"].includes(this.player.mode)&&!this.ui.root.classList.contains("is-touch")?this.lockPointer():this.games.pick(this.pick());else if(!i&&["first","third","free"].includes(this.player.mode)&&!this.ui.root.classList.contains("is-touch"))this.lockPointer();else if(!t){let s=this.pick(),a=s&&(s.actor?{meta:s.actor.meta,node:s.actor.node}:this.world.metaFor(s.object));this.ui.infoFor(a?.meta,a?.node)}}if(n.hit("KeyE")){if(this.games.wantsPick())this.games.pick(this.pick());else if(this.hover?.door&&this.hover.h.distance<3.5)this.world.toggleDoor(this.hover.door);else if(this.hover?.h.actor&&this.hover.h.distance<4&&!t)this.ui.dialogue(this.hover.h.actor);else if(!t){let i=this.actors.nearest(this.player.pos,2.5);i&&this.ui.dialogue(i)}}}loop(){let e=()=>{requestAnimationFrame(e);let t=Math.min(.05,this.clock.getDelta());this.step(t),this.renderer.trackFps(t,this.clock.elapsedTime),this.renderer.render(),this.ui.updateBubbles()};e()}},Pg=new zd;Pg.boot().catch(r=>{console.error(r),Pg.ui.loadError(r)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.6.9
  *)
*/
