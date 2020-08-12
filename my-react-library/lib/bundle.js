'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var react__default = _interopDefault(react);
var core = require('@emotion/core');
var framerMotion = require('framer-motion');

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "13j9o15-Switch",
  styles: "width:100px;height:50px;background:whitesmoke;border-radius:50px;position:relative;;label:Switch;"
} : {
  name: "13j9o15-Switch",
  styles: "width:100px;height:50px;background:whitesmoke;border-radius:50px;position:relative;;label:Switch;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmMiLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5jb25zdCBTd2l0Y2ggPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGhhbmRsZU9udGFwID0gKCk9PntcbiAgICBzZXRTdGF0ZSghc3RhdGUpXG4gIH1cblxuICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICBsZWZ0OiB7IGxlZnQ6MCxyaWdodDondW5zZXQnIH0sXG4gICAgcmlnaHQ6IHsgbGVmdDondW5zZXQnLHJpZ2h0OjAgfSxcbiAgfVxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IFxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgXG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGB9XG4gICAgICBvblRhcD17aGFuZGxlT250YXB9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgIGNsYXNzTmFtZT1cImJhbGxcIiBcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJveWFsYmx1ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIGB9XG4gICAgICAgIGluaXRpYWw9XCJyaWdodFwiXG4gICAgICAgIGFuaW1hdGU9e3N0YXRlP1wibGVmdFwiOlwicmlnaHRcIn1cbiAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cbiAgICAgID5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59OyBcblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoOyJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "1eod5me-Switch",
  styles: "width:50px;height:50px;background:royalblue;border-radius:50%;position:absolute;;label:Switch;"
} : {
  name: "1eod5me-Switch",
  styles: "width:50px;height:50px;background:royalblue;border-radius:50%;position:absolute;;label:Switch;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmdCIiwiZmlsZSI6IlN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y3NzfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgU3dpdGNoID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBoYW5kbGVPbnRhcCA9ICgpPT57XG4gICAgc2V0U3RhdGUoIXN0YXRlKVxuICB9XG5cbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgbGVmdDogeyBsZWZ0OjAscmlnaHQ6J3Vuc2V0JyB9LFxuICAgIHJpZ2h0OiB7IGxlZnQ6J3Vuc2V0JyxyaWdodDowIH0sXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIFxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBgfVxuICAgICAgb25UYXA9e2hhbmRsZU9udGFwfVxuICAgID5cbiAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICBjbGFzc05hbWU9XCJiYWxsXCIgXG4gICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBgfVxuICAgICAgICBpbml0aWFsPVwicmlnaHRcIlxuICAgICAgICBhbmltYXRlPXtzdGF0ZT9cImxlZnRcIjpcInJpZ2h0XCJ9XG4gICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XG4gICAgICA+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTsgXG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDsiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Switch = function Switch() {
  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleOntap = function handleOntap() {
    setState(!state);
  };

  var variants = {
    left: {
      left: 0,
      right: 'unset'
    },
    right: {
      left: 'unset',
      right: 0
    }
  };
  return core.jsx(framerMotion.motion.div, {
    className: "container",
    css: _ref,
    onTap: handleOntap
  }, core.jsx(framerMotion.motion.div, {
    className: "ball",
    css: _ref2,
    initial: "right",
    animate: state ? "left" : "right",
    variants: variants,
    transition: {
      duration: 0.2
    }
  }));
};

exports.Switch = Switch;
