function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,r,i,f,u,a,c=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,u=setTimeout(h,t),l?y(e):f}function T(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=i}function h(){var e=v();if(T(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-a);return d?m(n,i-(e-c)):n}(e))}function w(e){return u=void 0,p&&o?y(e):(o=r=void 0,f)}function x(){var e=v(),n=T(e);if(o=arguments,r=this,a=e,n){if(void 0===u)return j(a);if(d)return u=setTimeout(h,t),y(a)}return void 0===u&&(u=setTimeout(h,t)),f}return t=g(t)||0,b(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},x.flush=function(){return void 0===u?f:w(v())},x}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");y.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,console.log("feedback-form-state")}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));const j={};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state")),t=document.querySelector(".feedback-form input"),n=document.querySelector(".feedback-form textarea");e&&(t.value=e.email,n.value=e.message)}();
//# sourceMappingURL=03-feedback.0163cf6c.js.map
