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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./ui/main */ "./resources/js/ui/main.js");
/* LeftBar */


$(document).ready(function () {
  var leftblock = $('#leftblock');
  var midblock = $('#midblock').width();
  $(leftblock).resizable({
    handles: 'e',
    maxWidth: 600,
    minWidth: 300,
    resize: function resize(event, ui) {
      var currentWidth = ui.size.width;
      var padding = 12;
      $(this).width(currentWidth);
      $('#midblock').width(midblock - currentWidth - padding);
    },
    stop: function stop(event, ui) {
      var lbwidth = ui.size.width;
      var mbwidth = $('#midblock').width();
      $.cookie('lbw', lbwidth);
      $.cookie('mbw', mbwidth);
    }
  });
  $('#leftblock').width($.cookie('lbw'));
  $('#midblock').width($.cookie('mbw'));
  $('#leftblock').on('resize', function () {
    if ($('#leftblock').width() < 475) {
      $('.leftmenu-info').hide();
    } else {
      $('.leftmenu-info').show();
    }
  });
  $(window).on('load', function () {
    if ($('#leftblock').width() < 475) {
      $('.leftmenu-info').hide();
    } else {
      $('.leftmenu-info').show();
    }
  });
});

/***/ }),

/***/ "./resources/js/ui/main.js":
/*!*********************************!*\
  !*** ./resources/js/ui/main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* ------------------------------------------------------------------------------
*  # Main JS file
*  # The main js file is common for all demos
* ---------------------------------------------------------------------------- */
// CORE APP OBJECT
// ======================
var APP = function APP() {
  this.ASSETS_PATH = './assets/';
};

var APP = new APP(); // APP UI SETTINGS

APP.UI = {
  scrollTop: 0 // Minimal scrolling to show scrollTop button

}; // PAGE PRELOADING ANIMATION

$(window).on('load', function () {
  setTimeout(function () {
    $('.preloader-backdrop').fadeOut(200);
    $('body').addClass('has-animation');
  }, 0);
});
$(function () {
  // BACK TO TOP
  $(window).scroll(function () {
    if ($(this).scrollTop() > APP.UI.scrollTop) $('.to-top').fadeIn();else $('.to-top').fadeOut();
  });
  $('.to-top').click(function (e) {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  }); // QUICK SIDEBAR TOGGLE ACTION

  $('.quick-sidebar-toggler').click(function () {
    $('.quick-sidebar').backdrop();
  }); //  CHAT

  $('.chat-list [data-toggle="show-chat"]').click(function () {
    $(this).parents('.chat-panel').addClass('opened');
  });
  $('.messenger-return').click(function () {
    $(this).parents('.chat-panel').removeClass('opened');
  }); // LOGS

  $('.log-tabs a').click(function () {
    $(this).addClass('active').siblings().removeClass('active');

    if ($(this).attr('data-type') == 'all') {
      $('.logs-list li').show();
    } else {
      $('.logs-list li').hide().filter('[data-type="' + $(this).attr('data-type') + '"]').show();
    }
  }); // TOGGLE THEME-CONFIG BOX

  $('.theme-config-toggle').on('click', function () {
    $(this).parents('.theme-config').backdrop();
  }); // SEARCH BAR ACTION

  $('.js-search-toggler').click(function () {
    $('.search-top-bar').backdrop().find('.search-input').focus();
  });
  $('.input-search-close').click(function () {
    closeShined();
  }); // Activate Tooltips
  //$('[data-toggle="tooltip"]').tooltip();
  // Activate Popovers
  //$('[data-toggle="popover"]').popover();
  // Activate slimscroll

  $('.scroller').each(function () {
    $(this).slimScroll({
      height: $(this).attr('data-height') || '100%',
      color: $(this).attr('data-color') || '#71808f',
      railOpacity: '0.9',
      size: '4px'
    });
  });
  $('.slimScrollBar').hide(); // PANEL ACTIONS
  // ======================

  $('.ibox-collapse').click(function () {
    var ibox = $(this).closest('div.ibox');
    ibox.toggleClass('collapsed-mode').children('.ibox-body').slideToggle(200);
  });
  $('.ibox-remove').click(function () {
    $(this).closest('div.ibox').remove();
  });
  $('.fullscreen-link').click(function () {
    if ($('body').hasClass('fullscreen-mode')) {
      $('body').removeClass('fullscreen-mode');
      $(this).closest('div.ibox').removeClass('ibox-fullscreen');
      $(window).off('keydown', toggleFullscreen);
    } else {
      $('body').addClass('fullscreen-mode');
      $(this).closest('div.ibox').addClass('ibox-fullscreen');
      $(window).on('keydown', toggleFullscreen);
    }
  });

  function toggleFullscreen(e) {
    // pressing the ESC key - KEY_ESC = 27 
    if (e.which == 27) {
      $('body').removeClass('fullscreen-mode');
      $('.ibox-fullscreen').removeClass('ibox-fullscreen');
      $(window).off('keydown', toggleFullscreen);
    }
  } // Backdrop functional


  $.fn.backdrop = function () {
    $(this).toggleClass('shined');
    $('body').toggleClass('has-backdrop');
    return $(this);
  };

  $('.backdrop').click(closeShined);

  function closeShined() {
    $('body').removeClass('has-backdrop');
    $('.shined').removeClass('shined');
  } // Session timeout


  var idle_timer;

  (function () {
    $('#timeout-activate').click(function () {
      if (+$('#timeout-count').val()) {
        activate(+$('#timeout-count').val());
      }
    });
    $('#timeout-reset').click(function () {
      reset();
    });

    function reset() {
      $(document).idleTimer("destroy");
      if (idle_timer) clearTimeout(idle_timer);
      $('#session-dialog').modal('hide');
      $('.timeout-toggler').removeClass('active');
      $('#timeout-reset-box').hide();
      $('#timeout-activate-box').show();
    }

    function activate(count) {
      $('#session-dialog').modal('hide');
      $('#timeout-reset-box').show();
      $('#timeout-activate-box').hide();
      $(document).idleTimer(count * 60000);
      setTimeout(function () {
        $('.timeout-toggler').addClass('active');
      }, (count - 1) * 60000);
      $(document).on("idle.idleTimer", function (event, elem, obj) {
        // function you want to fire when the user goes idle
        toastr.warning('Your session is about to expire. The page will redirect after 15 seconds with no activity.', 'Session Timeout Notification', {
          "progressBar": true,
          "timeOut": 5000
        });
        idle_timer = setTimeout(timeOutHandler, 5000);
      });
      $(document).on("active.idleTimer", function (event, elem, obj, triggerevent) {
        // function you want to fire when the user becomes active again
        clearTimeout(idle_timer);
        $(document).idleTimer("reset");
        toastr.clear();
        toastr.success('You returned to the active mode.', 'You are back.');
      });

      function timeOutHandler() {
        reset();
        alert('Your session has expired. You can redirect this page or logout.');
      }
    }
  })();
  /*
  $('#timeout-form').validate({
      errorClass:"help-block",
      rules: {
          timeout_count: {required:true,digits:true},
      },
      highlight:function(e){$(e).closest(".form-group").addClass("has-error").closest('.timeout-modal').addClass("has-error");},
      unhighlight:function(e){$(e).closest(".form-group").removeClass("has-error").closest('.timeout-modal').removeClass("has-error");},
  });
  */
  // Pre Copy to clipboard


  if ($(".clipboard-copy").length > 0) {
    new Clipboard('.clipboard-copy', {
      target: function target(t) {
        return t.nextElementSibling;
      }
    }).on('success', function (e) {
      e.clearSelection();
      e.trigger.textContent = 'Copied';
      window.setTimeout(function () {
        e.trigger.textContent = 'Copy';
      }, 2000);
    });
  } // Print action


  $("[data-action='print']").click(function () {
    var target = $(this).attr('data-target');

    if ($(target).length) {
      $(target).printMe({
        path: ['assets/vendors/bootstrap/dist/css/bootstrap.min.css', 'assets/css/main.css']
      });
    }
  });
});

/***/ }),

/***/ "./resources/sass/admin/app.sass":
/*!***************************************!*\
  !*** ./resources/sass/admin/app.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/admin/app.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Soft\Development\OSPanel\domains\mattecms.local\mattecms\mattecms\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! D:\Soft\Development\OSPanel\domains\mattecms.local\mattecms\mattecms\resources\sass\admin\app.sass */"./resources/sass/admin/app.sass");


/***/ })

/******/ });