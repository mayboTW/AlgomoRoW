UIkit.util.on('#refreshbtn', 'click', function () {
    const num = Math.floor(Math.random() * 10)  + 1;
    $("#svgPane").empty();
    var draw = SVG().addTo('#svgPane').size(1000, 300);
    for (var i=0; i!=num; i++){
        const h = Math.floor(Math.random() * 100) + 1;
        var rect = draw.rect(10, h).fill('#80FF00').move(20 + i*20, 100-h);
    }
    console.log('#: ' + num);
});

UIkit.util.on('#deletebtn', 'click', function () {
    console.log('clear');
    $("#svgPane").empty();
});