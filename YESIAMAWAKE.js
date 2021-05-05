// ==UserScript==
// @name         YESIAMAWAKE
// @version      1.0.0
// @description  YES I AM AWAKE AND HERE
// @author       @memrearal
// @match        *://*/*
// @grant        none
// ==/UserScript==

Object.defineProperties(document.wrappedJSObject,{ 'hidden': {value: false}, 'visibilityState': {value: 'visible'} });
window.addEventListener( 'visibilitychange', evt => evt.stopImmediatePropagation(), true);
document.hasFocus = function () {return true;};
Object.defineProperty(document, "hidden", { value : false});
for (event_name of ["visibilitychange", "webkitvisibilitychange", "blur"]) {
  window.addEventListener(event_name, function(event) {
        event.stopImmediatePropagation();
    }, true);
}
