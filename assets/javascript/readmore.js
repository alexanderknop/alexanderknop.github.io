function read_more_preprocess() {
    $('main .information').each(function(){
        if($(this).height() > 450) {

    		$(this).addClass('shortened');
            var information = $(this);
    		$(this).after('<div class = "view-more">view more</div>');

            $(this).next().click(function() {
                console.log('test');
    			information.toggleClass('shortened');

    			if($(this).text() == 'view more') {
    				$(this).text('view less');
    				$(this).addClass('view-less');
    			} else {
    				$(this).text('view more');
    				$(this).removeClass('view-less');
    			}
    		});

    	}
    });
};

$(read_more_preprocess);
