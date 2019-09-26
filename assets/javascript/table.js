function update_height() {
	height = Math.max($('.current-list .list-data').height(),
			$('.current-name .lists').height(),
			$('.results .data').height());

	$('.results').height(height);
}

function preprocess_table() {
	if(window.matchMedia('(min-device-width: 768px)').matches) {
		$('.name:first-child').addClass('current-name');

		$('.name:first-child > .name-data > .lists > .list-title:first-child').addClass('current-list-title');
		list_title_text = $('.name:first-child > .name-data > .lists > .list-title:first-child').text().trim();
		$('.list[title = "' + list_title_text + '"]').addClass('current-list');

		update_height();

		$('.name-title').off('click').click(function(){
			$('.name').removeClass('current-name');
			$('.list-title').removeClass('current-list-title');
			$('.list').removeClass('current-list');


			$(this).parent().addClass('current-name');
			$(this).parent().find('.lists > .list-title:first-child').addClass('current-list-title');
			list_title_text = $(this).parent().find('.lists > .list-title:first-child').text().trim();
			$(this).parent().find('.list[title = "' + list_title_text + '"]').addClass('current-list');
			update_height();
		})

		$('.list-title').off('click').click(function(){
			$('.list-title').removeClass('current-list-title');
			$('.list').removeClass('current-list');

			$(this).addClass('current-list-title');
			list_title_text = $(this).text().trim();
			$(this).parent().siblings('.list[title = "' + list_title_text + '"]').addClass('current-list');

			update_height();
		})
	} else {
		$('.table-title a').off( "click").click(function() {
			$('.dropdown > *:has( > .table_title)').removeClass('show');
			$('.dropdown > *:has( > .table_title)').addClass('hide');
			$('.results').toggleClass('show');
			return false;
		});

		$('.table-title').off( "click").click(function() {
			$('.dropdown > *:has( > .table_title)').removeClass('show');
			$('.dropdown > *:has( > .table_title)').addClass('hide');
			$('.results').toggleClass('show');
		});

		$('.name-title').off('click').click(function() {
			var status = $(this).parent().hasClass('current-name');
			$('.name').removeClass('current-name');
                        $('.list-title').removeClass('current-list-title');
                        $('.list').removeClass('current-list');
			if(!status) {
				$(this).parent().addClass('current-name');
				$(this).parent().find('.lists > .list-title:first-child').addClass('current-list-title');
	                        list_title_text = $(this).parent().find('.lists > .list-title:first-child').text().trim();
        	                $(this).parent().find('.list[title = "' + list_title_text + '"]').addClass('current-list')
			}
		});
		$('.list-title').off('click').click(function(){
                        $('.list-title').removeClass('current-list-title');
                        $('.list').removeClass('current-list');

                        $(this).addClass('current-list-title');
                        list_title_text = $(this).text().trim();
                        $(this).parent().siblings('.list[title = "' + list_title_text + '"]').addClass('current-list');
                })
	}
};

$(preprocess_table);
