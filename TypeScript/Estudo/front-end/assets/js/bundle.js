/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/front.ts":
/*!**********************!*\
  !*** ./src/front.ts ***!
  \**********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//import './validate-form';
__webpack_require__(/*! ./video-player */ "./src/video-player.ts");


/***/ }),

/***/ "./src/video-player.ts":
/*!*****************************!*\
  !*** ./src/video-player.ts ***!
  \*****************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
        this.aumentarButton = videoPlayerElements.aumentarButton;
    }
    VideoPlayer.prototype.initEvents = function () {
        var _this = this;
        this.playButton.addEventListener('click', function () {
            _this.playToggle();
        });
        this.stopButton.addEventListener('click', function () {
            _this.stop();
        });
        this.aumentarButton.addEventListener('click', function () {
            _this.aumentarToggle();
        });
    };
    VideoPlayer.prototype.changeBtnTxt = function (botao, text) {
        var button;
        switch (botao) {
            case 'play':
                button = this.playButton;
                break;
            case 'aumentar':
                button = this.aumentarButton;
        }
        button.innerText = text;
    };
    VideoPlayer.prototype.playToggle = function () {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.changeBtnTxt('play', 'Pause');
        }
        else {
            this.videoPlayer.pause();
            this.changeBtnTxt('play', 'Play');
        }
    };
    VideoPlayer.prototype.aumentarToggle = function () {
        if (this.videoPlayer.width >= 640) {
            this.videoPlayer.width = 300;
            this.changeBtnTxt('aumentar', 'Aumentar');
        }
        else if (this.videoPlayer.width <= 300) {
            this.videoPlayer.width = 640;
            this.changeBtnTxt('aumentar', 'Diminuir');
        }
    };
    VideoPlayer.prototype.stop = function () {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.changeBtnTxt('play', 'Play');
    };
    return VideoPlayer;
}());
exports.default = VideoPlayer;
var videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
    aumentarButton: document.querySelector('.aumentar'),
});
videoPlayer.initEvents();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/front.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map