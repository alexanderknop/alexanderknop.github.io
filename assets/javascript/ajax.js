function links_preprocess() {
	$('*').removeClass('current');

	$('a[href = "' + window.location.pathname + '"]').addClass('current');
}

$(function() {
	links_preprocess();
});

$(window).bind('popstate', function(event) {
	return load_data(location.pathname, 0);
});
