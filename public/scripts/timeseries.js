// Set graph dimensions
var width = 1000,
    height = 500,
    padding = 50;

// Set up axes
var x = d3.scale.ordinal().rangeRoundBands([0, width], [0.09]);
var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom")
  .tickFormat(d3.time.format("%Y"));

var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left")
  .ticks(10);

// Append our SVG to the HTML body
var svg = d3.select("body").append("svg")
  .attr("width", width + padding * 2)
  .attr("height", height + padding * 2)
  .append("g")
  .attr("transform", "translate(" + padding + "," + padding + ")");

var timeSeries = d3.json('firearms_discharge.json', function (error, data) {
  if (error) {
    console.log("ERROR: " + error);
  }

  var seriesData = [];
  var seriesNames = [];
  for (var i = 0; i < data.data.length; i++) {
    seriesNames.push(data.data[i][8]);
    for (var j = 9; j <= 19; j++) { //TODO: combine this with the date loop below!
      seriesData.push(data.data[i][j]);
    }
  }

  // Parse the date / time
  var parseDate = d3.time.format("%Y").parse;
  var years = [];
  for (var i = 9; i <= 19; i++) {
    year = data.meta.view.columns[i].name;
    year = parseDate(year);
    years.push(year);
  }

  x.domain(years); //TODO check this
  y.domain([0,d3.max(seriesData, function(d) { return d.value; })]);


  // Appending the axes to the graph
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis)   //calls the xAxis var I made up above
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("x", -25)
    .attr("transform", "rotate(-60)");

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .selectAll("text");


});
