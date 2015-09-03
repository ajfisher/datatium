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

function hour_session_chart() {
    // sets up the sessions by hour chart

    var width = 1200;
    var height = 500;
    var margin = 15; // overall margin value

    var dataset = null;

    var x = d3.scale.linear()
        .range([margin, width-(2*margin)]);
    var y = d3.scale.linear()
        .range([height-(2*margin), margin]);

    var deviceType = d3.scale.category10()

    var chart = d3.select(".timedevice")
        .attr("width", width)
        .attr("height", height);

    var xAxis = d3.svg.axis()
        .scale(x)
        .ticks(24);
   
    var line = d3.svg.line()
        .x(function(d) { return x(d.Hour); })
        .y(function(d) {return y(d.session_pct); })
        .interpolate("basis");


    d3.csv("/data/hour_visitation.csv", function(data){ 
        
        data.forEach(function(d) {
            d.Sessions = parseInt(d.Sessions.replace(",", ""));
            d.Hour = +d.Hour;
        });

        deviceType.domain(data.map(function(d) {return d.Device_type}));


        // get the totals for each of the device types
        var totals = {};

        d3.nest()
            .key(function(d){return d.Period})
            .key(function(d){return d.Device_type})
            .entries(data)
            .filter(function(d) {return d.key == "All days"})[0]
            .values.map(function(d) {
                return {
                    name: d.key,
                    total: d3.sum(d.values, function(g) {return g.Sessions}),
                }
            }).forEach(function(d) {
                totals[d.name] = d.total;
            });

        // update the dataset in order to get the % of sessions for the series
        data.forEach(function(d) {
            d.session_pct = d.Sessions / totals[d.Device_type];
        });

        // get the data just for All Days and by the device types as entities
        var dts = deviceType.domain().map(function(key){

            if (key != undefined) {
                return {
                    name: key,
                    values: data.filter(function(d){return d.Period == "All days"})
                        .filter(function(d) { return d.Device_type == key }),
                }
            }
        });

        dataset = data;
        x.domain(d3.extent(data, function(d) { return d.Hour; }));
        y.domain(d3.extent(data, function(d) { return d.session_pct; }));

        chart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + (height-2*margin) + ")")
            .call(xAxis);

        // add the three series
        dts.forEach(function(series) {
            chart.append("path")
                .datum(series)
                .attr("class", function(d) { return ("line " + d.name); })
                .attr("stroke", function(d) { return deviceType(d.name); })
                .attr("d", function(d) { return line(d.values); });

            chart.append("text")
                .datum(function(d) { return {
                    name: series.name, 
                    value: series.values[Math.round(series.values.length / 2)]
                }; })
                .attr("transform", function(d) {
                    return "translate(" + x(d.value.Hour) + "," + y(d.value.session_pct) + ")"; 
                })
                .attr("dy", "1em")
                .attr("class", "series_title")
                .text(function(d) { return d.name; });
        });
    }); // load


}
