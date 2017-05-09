/**
 * Created by yingqitang on 5/8/17.
 */
/*The original code is from www.packtpub.com and modified by Yingqi Tang*/
var width = 800,
    height = 400;

var fill = d3.scale.category20();

d3.json('example.json', function (data) {
    var state = [];
    data.forEach(function(row){
        if (row.count > 0) state.push({text: row.state, size: Number(row.count)});
    });

    var state = state.sort(function(a,b){
        return (a.size < b.size)? 1:(a.size == b.size)? 0:-1
    }).slice(0,50);

    var stateScale = d3.scale.linear()
        .range([10,60])
        .domain([d3.min(state,function(d) { return d.size; }),
            d3.max(state,function(d) { return d.size; })
        ]);

    d3.layout.cloud().size([width, height])
        .words(state)
        .padding(0)
        .rotate(function() { return ~~(Math.random() * 2) * 90; })
        .font("Impact")
        .fontSize(function(d) { return stateScale(d.size); })
        .on("end", drawCloud)
        .start();
});


function drawCloud(words) {
    d3.select("#word-cloud").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate("+(width / 2)+","+(height / 2)+")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
}
