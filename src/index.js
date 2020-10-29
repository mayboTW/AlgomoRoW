var rectColor = '#80FF00';
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
        var rect = draw.rect(10, h).fill(rectColor).move(20 + i*20, 300-h);
        var rectObj = {value: h, rect: rect};
        rectObjs.push(rectObj);
    }
}

function bubbleSort() {
    var color1 = '#81F7F3';
    var color2 = '#FA58F4';
    var timeline = new SVG.Timeline();
    var swapCount = 0;
    for(var i=0; i!=rectObjs.length; ++i) {
        for(var j=i+1; j!=rectObjs.length; ++j) {
            var value1 = rectObjs[i].value;
            var value2 = rectObjs[j].value;
            if (value1 > value2) {
                rectObjs[i].value = value2;
                rectObjs[j].value = value1;

                const rect1 = rectObjs[i].rect;
                const rect2 = rectObjs[j].rect;

                rect1.timeline(timeline)
                rect2.timeline(timeline)

                rect1.animate(500, swapCount*3000, 'absolute').attr({ fill: color1 })
                    .animate(2000, swapCount*3000, 'absolute')
                    .attr({ height: value2, fill: color2, y: 300 - value2 })
                    .animate(0, swapCount*3000 + 2500, 'absolute').attr({ fill: rectColor });

                
                rect2.animate(500, swapCount*3000, 'absolute').attr({ fill: color2 })
                    .animate(2000, swapCount*3000, 'absolute')
                    .attr({ height: value1, fill: color1, y: 300 - value1 })
                    .animate(0, swapCount*3000 + 2000, 'absolute').attr({ fill: rectColor });

                ++swapCount;
            }
        }
    }
}
