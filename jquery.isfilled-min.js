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
(function(e){e.fn.onScreen=function(){var t={top:e(window).scrollTop(),left:e(window).scrollLeft()};t.right=t.left+e(window).width();t.bottom=t.top+e(window).height();var n=this.offset();n.right=n.left+this.outerWidth();n.bottom=n.top+this.outerHeight();return!(t.right<n.left||t.left>n.right||t.bottom<n.top||t.top>n.bottom)}})(jQuery)