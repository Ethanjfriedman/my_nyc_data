var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y").parse;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); });

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

<<<<<<< HEAD
d3.csv("adversarial.csv", function(error, data) {
  if (error) throw error;

  data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.value = +d.value;
  });

  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain(d3.extent(data, function(d) { return d.value; }));

=======
d3.json("firearms_discharge.json", function(error, data) {
  if (error) throw error;
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

    //FIXME
  x.domain(d3.extent(allSeries[0], function(d) { return d.date; }));
  y.domain(d3.extent(allSeries[0], function(d) { return d.value; }));

>>>>>>> 68041a3257760daac931e7bcf3d282176f093f68
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
<<<<<<< HEAD
      .text("Price ($)");

  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
});

=======
      .text("Number of incidents");

    for (var i = 0; i < allSeries.length; i++) {

      svg.append("path")
        .datum(allSeries[i])
        .attr("class", "line")
        .attr("d", line);
      }
});
>>>>>>> 68041a3257760daac931e7bcf3d282176f093f68
