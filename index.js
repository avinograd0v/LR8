/**
 * Created by User on 13.12.2016.
 */
$(function() {
    var $from = $('.from');
    var $to = $('.to');
    var $fun = $('.fun');
    var $plot = $('.plot');
    var $graph = $('.graph');

    $plot.click(function(e) {
        e.preventDefault();

        var from = parseInt($from.val());
        var to = parseInt($to.val());
        var fun = $fun.val();

        const dx = 0.1;
        var points = [];

        for(var x = from; x<=to; x += dx) {
            if (x > to) {
                break;
            }
            var y = eval(fun);
            points.push([x,y]);
            $.plot($graph, [{label: fun, data: points}], {});
        }
    });
});