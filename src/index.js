var values;

UIkit.util.on('#refreshbtn', 'click', function () {
    refreshValues();
});

UIkit.util.on('#deletebtn', 'click', function () {
    console.log('clear');
    $("#svgPane").empty();
});

document.onkeyup = function(e) {
    if (e.shiftKey && e.which == 82) {
        refreshValues();
    }
};

function refreshValues() {
    const num = Math.floor(Math.random() * 10)  + 1;
    $("#svgPane").empty();
    values = [];
    var draw = SVG().addTo('#svgPane').size(1000, 300);
    for (var i=0; i!=num; i++){
        const h = Math.floor(Math.random() * 100) + 1;
        values.push(h);
        var rect = draw.rect(10, h).fill('#80FF00').move(20 + i*20, 100-h);
    }
    console.log('#: ' + num + ", Values: " + values);
}