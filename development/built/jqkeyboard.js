/**
 * jqKeyboard - jQuery-based virtual keyboard
 * @version v0.1.0
 * @link https://github.com/hAWKdv/jqKeyboard#readme
 * @license MIT
 * @build 8
 */
/* globals -jqKeyboard */
var jqKeyboard = (function($) {
    "use strict";

        // CONSTANTS
    var CUST_CONT_START_OFFSET = 10,
        NORM_BTN_CLASS = "normal",
        SHFT_BTN_CLASS = "shift-b",
        SPEC_BTN_CLASS = "special",
        BUTTON_CLASS = "jqk-btn",
        LANG_BTN_CLASS = "jqk-lang-btn",
        SELECTED_ITEM_CLASS = "selected",
        HIDE_CLASS = "jqk-hide",
        BASE_ID = "jq-keyboard",
        LANG_CONT_ID = "jqk-lang-cont",
        LNG_CLASS_POSTFIX = "-lang",
        CONT_START_POINT = 0,
        LAYOUTS_LIMIT = 3,

        // MODULES
        Visualization = {},
        EventManager = {},
        Helpers = {},
        Effects = {},
        Core = {};

//







    return {
        init: Core.init
    };
}(jQuery));