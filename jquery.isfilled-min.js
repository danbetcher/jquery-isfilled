/*
 *	jQuery Is Filled Plugin
 *
 *	Copyright (c) Dan Betcher
 *	https://www.twitter.com/danbetcher
 *
 *	Documentation:
 *	https://github.com/danbetcher/jquery-isfilled
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */
!function(e){e.fn.isFilled=function(i){var r=e(this),t="select"==r.prop("tagName").toLowerCase()?"select":r.attr("type");if(jQuery.inArray(t,["button","submit"])>=0)return void 0;if("checkbox"===t||"radio"===t){if(r.is(":checked")&&void 0===i)return!0;if(void 0!==i&&r.is(":checked")&&r.val()===i)return!0}else{if(""!=r.val()&&void 0===i)return!0;if(void 0!==i&&""!=r.val()&&r.val()===i)return!0}return!1}}(jQuery);