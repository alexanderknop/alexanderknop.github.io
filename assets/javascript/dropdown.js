function addOnClick(path, buttons) {
    $(path).each(function(){
    	var menu = $(this);
    	$(this).children().each(function() {
    		var button = $(this).children(buttons);
    		var item = $(this);

    		button.off('click').click(function(event) {
    			var status = item.hasClass('hide');

    			menu.find('> *').removeClass('show');
    			menu.find('> *').addClass('hide');
    			$('.results').removeClass('show');
    			if(status) {

    				item.addClass('show');
    				item.removeClass('hide');
    			}
    		});
    	});
    });
}


function preprocess_menu(menu_path, items_path, buttons) {
    $(menu_path).find(items_path).addClass('hide');


    $(menu_path).each(function(){
    	var menu = $(this);
    	$(this).find(items_path).each(function() {
    		var button = $(this).children(buttons);
    		var item = $(this);

    		button.off('click').click(function(event) {
    			var status = item.hasClass('hide');

    			menu.find(items_path).removeClass('show');
    			menu.find(items_path).addClass('hide');
    			$('.results').removeClass('show');
    			if(status) {

    				item.addClass('show');
    				item.removeClass('hide');
    			}
    		});
    	});
    });
}

$(function(){
    preprocess_menu('nav', '> *', 'h1');
    preprocess_menu('main', '> .information > div, > .calendar, > .results', 'h2');
})
