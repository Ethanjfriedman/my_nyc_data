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

d3.csv("Firearms_Discharge_Report.csv", function(error, data) {
  if (error) throw error;
  console.log(data);
  // var maxY = d3.max(data.data, function(d) {
  //   return parseInt(d[10]);
  // })
  //
  // var seriesNames = [];
  // var dates = [];
  // var seriesValues = []
  // for (var i = 0; i < data.data.length; i++) {
  //   seriesNames.push(data.data[i][8]);
  //   }
  //
  // for (var i = 9; i < data.meta.view.columns.length; i++) {
  //   dates.push(data.meta.view.columns[i].name);
  //   seriesValues.push(parseInt(data.data[0][i]));
  // }
  //
  // x.domain(d3.extent(dates, function(d) { return parseDate(d); })); //should be the years
  // y.domain([0, maxY]);

  debugger;
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
      .text("Number of incidents");


  svg.append("path")
      .datum(seriesValues, dates)
      .attr("class", "line")
      .attr('stroke', 'green')
      .attr("d", line);


});

// d3.json('firearms_discharge.json', function(error, data) {
//   if (error) throw error;
//   var graphData = [];
//   var dates = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];
//
//   for (var i = 0; i < data.data.length; i++) {
//     var dataValues = [];
//     for (var j = 9; j <= 19; j++) {
//       dataValues.push(data.data[i][j]);
//     }
//     var graphSeries = {
//       date: dates,
//       value: dataValues
//     }
//     graphData.push(graphSeries)
//   }
//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis);
//
//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 6)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Number of incidents");
//
// for (var i = 0; i < 6; i++) {
//   graphData[i].value.forEach(function(d) {
//     d.value = +d.value;
//   });
//   x.domain(d3.extent(graphData[i], function(d) { return d.date; }));
//   y.domain(d3.extent(graphData[i], function(d) { return d.value; }));
//
//   svg.append("path")
//       .datum(graphData[i])
//       .attr("class", "line")
//       .attr('stroke', 'green')
//       .attr("d", line);
// }
//
//
//
//   console.log(graphData);
// });




//
// d3.json('firearms_discharge.json', function(error, data) {
//   if (error) throw error;
//
//   x.domain(d3.extent(data, function(d) { return d.date; }));
//   y.domain(d3.extent(data, function(d) { return d.value; }));
// })
//
