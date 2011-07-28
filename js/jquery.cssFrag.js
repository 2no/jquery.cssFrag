/**
 * jquery.cssFrag: Using (jQuery)CSS Selectors as Fragment Identifiers
 * Author: Kazunori Ninomiya
 * Email: Kazunori.Ninomiya@gmail.com
 * Version: 1.0.0
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 * Requires: jquery.js
 * Requires: jquery.ba-hashchange.js
 *      http://benalman.com/code/projects/jquery-hashchange/docs/files/jquery-ba-hashchange-js.html
 */
(function($, window, document, undefined)
{
    $(window).hashchange(function() {
        var matches = decodeURIComponent(location.hash).match(/css\((.+)\)/);
        if (matches) {
            try {
                var target = $("body").find(matches[1]); // avoiding XSS
                if (target.length) {
                    setTimeout(function() { // for IE6
                        target = target.eq(0);
                        var offset = target.offset();
                        var x = offset.left - $(window).width() + target.width();
                        var y = offset.top;
                        $("html, body").scrollLeft(x).scrollTop(y);
                        target.focus();
                    }, 1);
                }
            }
            catch (e) {}
        }
    });
}
)(jQuery, this, this.document);
