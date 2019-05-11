//Say my name

// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 40,
  bottom: 60,
  left: 50
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from names.csv
/***
  d3.csv works similar to d3.json. The callback functions still takes two position arguments: (error, response).
****/
d3.csv("names.csv", function(error, namesData) {
  if (error) throw error;


  //  Parse the data
  // Format the data and convert to numerical and date values
  // =================================
  // Create a function to parse date and time
  var parseTime = d3.timeParse("%d-%b");

  // Format the data
  namesData.forEach(function(data) {
    data.Count = parseTime(data.Count);
    data.State = +data.State;
    data.Name = +data.Name;
  });

  // Step 5: Create Scales
  //= ============================================
  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(namesData, d => d.Count))
    .range([0, width]);

  var yLinearScale1 = d3.scaleLinear()
    .domain([0, d3.max(namesData, d => d.State)])
    .range([height, 0]);

  var yLinearScale2 = d3.scaleLinear()
    .domain([0, d3.max(namesData, d => d.Name)])
    .range([height, 0]);

   // Step 6: Create Axes
  // =============================================
  var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
  var leftAxis = d3.axisLeft(yLinearScale1);
  var rightAxis = d3.axisRight(yLinearScale2);

  // Step 7: Append the axes to the chartGroup
  // ==============================================
  // Add bottomAxis
  chartGroup.append("g").attr("transform", `translate(0, ${height})`).call(bottomAxis);

  // Add leftAxis to the left side of the display
  chartGroup.append("g").call(leftAxis);

  // Add rightAxis to the right side of the display
  chartGroup.append("g").attr("transform", `translate(${width}, 0)`).call(rightAxis);

// Add rightAxis to the right side of the display
chartGroup.append("g").attr("transform", `translate(${width}, 0)`).call(rightAxis);

// Step 8: Set up two line generators and append two SVG paths
// ==============================================
// Line generators for each line
var line1 = d3
  .line()
  .x(d => xTimeScale(d.Count))
  .y(d => yLinearScale1(d.State));

var line2 = d3
  .line()
  .x(d => xTimeScale(d.Count))
  .y(d => yLinearScale2(d.Name));


// Append a path for line1
chartGroup.append("path")
  .data([namesData])
  .attr("d", line1)
  .classed("line green", true);

// Append a path for line2
chartGroup.append("path")
  .data([namesData])
  .attr("d", line2)
  .classed("line orange", true);

   
});
