function preprocess_calendar() {
    $('.calendar tr:nth-child(n + 3)').addClass('hide');
    $('.calendar tr').each(function() {
        first = $(this).children('*:first-child').text();
        last = $(this).children('*:last-child').text();
        $(this).prepend('<td> <div class = "left"/>' + first + ' - ' +
            last + '<div class = "right"/></td>');
        var week = $(this);

        $(this).find('.right').click(function(event) {
            if(week.next().length == 0) {
                return false;
            }
            week.addClass('hide');
            week.next().removeClass('hide');
        });

        $(this).find('.left').click(function(event) {
            if(week.prevAll().length == 1) {
                return false;
            }
            week.addClass('hide');
            week.prev().removeClass('hide');
        });
    });
}

$(preprocess_calendar);
