var draw = SVG().addTo('#svgPane').size(600, 300);
var rectObjs = [];

UIkit.util.on('#refreshbtn', 'click', function () {
    refreshValues();
});

UIkit.util.on('#playbtn', 'click', function () {
    console.log('Play');
    bubbleSort();
});

UIkit.util.on('#deletebtn', 'click', function () {
    console.log('clear');
    $("#svgPane").empty();
});

document.onkeyup = function(e) {
    if (e.key == 'r') {
        refreshValues();
    } else if (e.key == 'p') {
        bubbleSort();
    }
};

function refreshValues() {
    const num = Math.floor(Math.random() * 10)  + 10;
    draw.clear();
    rectObjs = [];
    for (var i=0; i!=num; i++){
        const h = Math.floor(Math.random() * 300) + 1;
        var rect = draw.rect(10, h).fill('#80FF00').move(20 + i*20, 300-h);
        var rectObj = {value: h, rect: rect};
        rectObjs.push(rectObj);
    }
}

function bubbleSort() {
    for(var i=0; i!=rectObjs.length; ++i) {
        for(var j=i+1; j!=rectObjs.length; ++j) {
            if (rectObjs[i].value > rectObjs[j].value) {
                var temp = rectObjs[i];
                rectObjs[i] = rectObjs[j];
                rectObjs[j] = temp;
            }
        }
    }

    for (var i=0; i!=rectObjs.length; i++){
        var h = rectObjs[i].value;
        rectObjs[i].rect.move(20 + i*20, 300-h);
    }
}
