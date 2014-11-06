/*! https://github.com/danbetcher/jquery-isfilled by @danbetcher */
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