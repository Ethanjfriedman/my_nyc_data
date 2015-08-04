
                function InitChart() {
                 
d3.json("firearms_discharge.json", function(error, data) {
    var parseDate = d3.time.format("%Y").parse;

  var dates = ["2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012"];
  var adversarialConflict = [];
  var allSeries = [];
  for (var q = 0; q < data.data.length; q++) {
    var dataSeries = [];
    for (var i = 9; i <= 19; i++) {
      var dataPoint={};
      dataPoint.date = parseDate(dates[i - 9]);
      dataPoint.value = data.data[q][i];
      dataPoint.value = +dataPoint.value;
      dataSeries.push(dataPoint);
    }
    allSeries.push(dataSeries);
  }
  debugger;
   data = allSeries[0];
   data2 = allSeries[1];



                    var vis = d3.select("#visualisation"),
                        WIDTH = 1000,
                        HEIGHT = 500,
                        MARGINS = {
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 50
                        },
                        xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2000, 2010]),
                        yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134, 215]),
                        xAxis = d3.svg.axis()
                        .scale(xScale),
                        yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left");
                    
                    vis.append("svg:g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                        .call(xAxis);
                    vis.append("svg:g")
                        .attr("class", "y axis")
                        .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                        .call(yAxis);
                    var lineGen = d3.svg.line()
                        .x(function(d) {
                            return xScale(d.date);
                        })
                        .y(function(d) {
                            return yScale(d.value);
                        })
                        .interpolate("basis");
                    vis.append('svg:path')
                        .attr('d', lineGen(data))
                        .attr('stroke', 'green')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none');
                    vis.append('svg:path')
                        .attr('d', lineGen(data2))
                        .attr('stroke', 'blue')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none');
                    })
                }
                InitChart();

                console.log('ugh')