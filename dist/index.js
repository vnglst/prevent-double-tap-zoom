"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preLastTouchStartAt = 0;
var lastTouchStartAt = 0;
var delay = 500;
var preventDoubleTapZoom = function () {
    document.addEventListener('touchstart', function () {
        preLastTouchStartAt = lastTouchStartAt;
        lastTouchStartAt = +new Date();
    });
    document.addEventListener('touchend', function (event) {
        var touchEndAt = +new Date();
        var target = event.target;
        if (touchEndAt - preLastTouchStartAt < delay &&
            event &&
            target &&
            target.click) {
            event.preventDefault();
            target.click();
        }
    });
};
exports.default = preventDoubleTapZoom;
