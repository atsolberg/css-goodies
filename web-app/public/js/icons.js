(function($) {
    'use strict';

    var container = $('.icons-container'),
        colClasses = {
            0: 'one',
            1: 'two',
            2: 'three',
            3: 'four nogutter'
        };

    $.ajax({
        url: '/icons.json',
        dataType: 'json'
    }).done(function(rows) {
        rows.forEach(function(row) {
            var rowContainer = $('<div>').addClass('column-6-6-6-6 clearfix');

            row.forEach(function(icon, i) {
                var colClass = colClasses[i];
                var column = $('<div>').addClass('column ' + colClass);
                var well = $('<div>').addClass('well tac');
                well.append($('<div>').append($('<i>').addClass('icon ' + icon)));
                well.append($('<div>').text(icon));

                column.append(well);
                rowContainer.append(column);
            });

            container.append(rowContainer);
        });
    });
})(window.jQuery);