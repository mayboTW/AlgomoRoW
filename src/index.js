var values;

UIkit.util.on('#refreshbtn', 'click', function () {
    refreshValues();
});

UIkit.util.on('#playbtn', 'click', function () {
    console.log('Play');
    $("#svgPane").empty();
    for(var i=0; i!=values.length; ++i) {
        for(var j=i+1; j!=values.length; ++j) {
            if (values[i] > values[j]) {
                var temp = values[i];
                values[i] = values[j];
                values[j] = temp;
            }
        }
    }

    var draw = SVG().addTo('#svgPane').size(1000, 300);
    for (var i=0; i!=values.length; i++){
        var h = values[i];
        var rect = draw.rect(10, h).fill('#80FF00').move(20 + i*20, 100-h);
    }
    console.log('#: ' + values.length + ", Values: " + values);
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
    const num = Math.floor(Math.random() * 10)  + 10;
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