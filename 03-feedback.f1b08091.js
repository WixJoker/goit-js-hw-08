!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,v=c||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return v.Date.now()};function b(e,t,n){var r,a,o,u,f,l,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=a;return r=a=void 0,c=t,u=e.apply(i,n)}function O(e){return c=e,f=setTimeout(j,t),s?b(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=o}function j(){var e=p();if(S(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-l);return v?g(n,o-(e-c)):n}(e))}function h(e){return f=void 0,d&&r?b(e):(r=a=void 0,u)}function w(){var e=p(),n=S(e);if(r=arguments,a=this,l=e,n){if(void 0===f)return O(l);if(v)return f=setTimeout(j,t),b(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=T(t)||0,y(n)&&(s=!!n.leading,o=(v="maxWait"in n)?m(T(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=a=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):o.test(t)?NaN:+t}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),b(e,t,{leading:r,maxWait:t,trailing:a})};var O,S,j=document.querySelector(".feedback-form"),h="feedback-form-state";j.addEventListener("input",e(t)((function(e){var t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value;w[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify({email:t,message:n}))})),500),(S=localStorage.getItem(h))&&(j.elements.email.value=JSON.parse(S).email,j.elements.message.value=JSON.parse(S).message,w[O.target.name]=O.target.value,w=JSON.parse(S));var w={};j.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value;if(""===t||""===n)return alert("Заполните все поля");var r=localStorage.getItem(h),i=JSON.parse(r);console.log(i),localStorage.removeItem(h),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.f1b08091.js.map
