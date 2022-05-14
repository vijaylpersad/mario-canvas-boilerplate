/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.png":
/*!****************************!*\
  !*** ./src/background.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/hills.png":
/*!***********************!*\
  !*** ./src/hills.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mario_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mario_platform.png */ "./src/mario_platform.png");
/* harmony import */ var _background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../background.png */ "./src/background.png");
/* harmony import */ var _hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hills.png */ "./src/hills.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 //console.log(platform)

var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576; //16:9 aspect ratio

var gravity = 0.5; //to create any sort of player or art on canvas create a class is a good start

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.height = 30;
    this.width = 30;
  } //method to define how player looks:


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'red';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    } //need to create an update function - method to change player property over time

  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x; //establishing a floor and factoring gravity into fall

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        //if player is higher than bottom of screen, keep building velocity, else velocity = 0
        this.velocity.y += gravity;
      } //else this.velocity.y = 0

    }
  }]);

  return Player;
}(); //build platforms for player to jump onto and avoid pit of death


var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      //  c.fillStyle = 'blue'
      //  c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}(); //background stuff


var genericObject = /*#__PURE__*/function () {
  function genericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, genericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(genericObject, [{
    key: "draw",
    value: function draw() {
      //  c.fillStyle = 'blue'
      //  c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return genericObject;
}(); //create a function to take argument of image source so we don't have to keep calling on specific srcs around. DRY


function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_mario_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var genericObjects = [new genericObject({
  x: -1,
  //where we want it to start
  y: -1,
  image: createImage(_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
}), new genericObject({
  x: -1,
  y: -1,
  image: createImage(_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
})];
var player = new Player(); //const platform = new Platform()

var platforms = [new Platform({
  x: -1,
  y: 470,
  image: platformImage
}), new Platform({
  x: platformImage.width + 200,
  y: 200,
  image: platformImage
}), new Platform({
  x: platformImage.width * 2 + 400,
  y: 470,
  image: platformImage
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}; //player.update()

var scrollOffset = 0; //when player dies we are going to call function restart to reset player back to start position

function restart() {
  platformImage = createImage(_mario_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  genericObjects = [new genericObject({
    x: -1,
    //where we want it to start
    y: -1,
    image: createImage(_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new genericObject({
    x: -1,
    y: -1,
    image: createImage(_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  })];
  player = new Player(); //const platform = new Platform()

  platforms = [new Platform({
    x: -1,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width + 200,
    y: 200,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 400,
    y: 470,
    image: platformImage
  })]; //player.update()

  scrollOffset = 0;
} //need animation funciton to loop player update


function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height); //white background for playable area
  //platform.draw()
  //draw background first:

  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0; //set player velocity to zero and start moving platform backwards to create illusion of movement

    if (keys.right.pressed) {
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
        scrollOffset += 5;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= 3;
      });
    } else if (keys.left.pressed) {
      platforms.forEach(function (platform) {
        platform.position.x += 5;
        scrollOffset -= 5;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += 3;
      });
    }
  } //if player is on top of platform, don't fall anymore -- colloision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); //win condition

  if (scrollOffset > 9400) {
    console.log('winner');
  } //lose condition


  if (player.position.y > canvas.height) {
    console.log('you lose');
    restart();
  }

  player.update();
}

animate();
addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;
  //object destructuring of keyboard event to retrieve keyCode
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right'); //player.velocity.x = 5

      keys.right.pressed = true;
      break;

    case 87:
      console.log('up');
      player.velocity.y -= 20;
      break;
  }
});
addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;
  //object destructuring of keyboard event to retrieve keyCode
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right'); //player.velocity.x = 0

      keys.right.pressed = false;
      break;

    case 87:
      console.log('up');
      player.velocity.y -= 0;
      break;
  }
});

/***/ }),

/***/ "./src/mario_platform.png":
/*!********************************!*\
  !*** ./src/mario_platform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "abfd1ce5f662f8cde0ddcdf35cf855f8.png");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map