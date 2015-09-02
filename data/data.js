function barChart() {
//------ code to show D3 Bar Chart on First Slide-------
    var data = [44, 28, 15, 16, 23, 5];
    var width = 800;
    var barHeight = 32;
    var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, width]);
    var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", barHeight * data.length);
    var bar = chart.selectAll("g")
        .data(data)
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 5)
    bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", (barHeight-5) / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });
}

function hour_session_chart(objname, data_path ) {
    var width = 800;
    var height = 300;

    var color = d3.scale.category10();

    var x = d3.scale.linear()
        .range([0, width])
        .domain([0, 23]);
    var y = d3.scale.linear()
        .range([height, 0]);


    var chart = d3.select(".timedevice")
        .attr("width", width)
        .attr("height", height);

    d3.csv("/data/hour_visitation.csv", function(data) {
    
        var devices = color.domain().map(function(name) {
            return {
                name: name,
                values: data.map(function(d) {
                    return {date: d.Hour, sessions: d.Sessions};
                })
            };
        });

        //x.domain(d3.extent(data, function(d) { return d.Hour; }));
        var xAxis = d3.svg.axis()
            .scale(x)
            //.orient("bottom");

        var line = d3.svg.line()
            .interpolate("basis")
            .x(function(d) { return x(d.Hour); })
            .y(function(d) { return y(d.Sessions); });

        console.log(line);
        chart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + (height-100) + ")")
            .call(xAxis);

/**        chart.append("path")
            .attr("class", "line")
            .attr("d", function(d) { return line(d.values); })
            .style("stroke", function(d) { return color(d.name); });**/

    });

}
