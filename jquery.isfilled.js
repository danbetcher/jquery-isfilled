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
;(function($){
	$.fn.isFilled = function(value) {
        //Collect the input object
		var input = $(this);

        // Determine the type of form field
		var type = (input.prop('tagName').toLowerCase() == 'select')?'select':input.attr('type');
        
        // Ignore submit and button elements
		if ( jQuery.inArray(type,['button', 'submit']) >= 0 ) return undefined;

        // Handle the different types of elements and test their values
        if (type === 'checkbox' || type === 'radio') {
            // Check if it's filled...
			if ( input.is(':checked') && value === undefined ) return true;
            
            // Check if it matches the passed value...
			if ( value !== undefined && input.is(':checked') && input.val() === value ) return true;
        } else {
            // Check if it's filled...
			if ( input.val() != '' && value === undefined ) return true;
            
            // Check if it matches the passed value...
			if ( value !== undefined && input.val() != '' && input.val() === value ) return true;
        }
        
        return false;
	};
})(jQuery);