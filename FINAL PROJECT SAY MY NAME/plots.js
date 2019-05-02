// Part 1
var trace1 = {
  x: ["State", "Gender", "Year", "Name", "ID" 
      
],
  y: ["CA", "VA",
],
  type: "bar"
};

var data = [trace1];

var layout = {
  title: "'Bar' Chart",
  xaxis: { title: "Gender"},
  yaxis: { title: " By State"}
};

Plotly.newPlot("plot1", data, layout);

// Part 2 - Line Chart
trace1.type = "line";

var data = [trace1];

var layout = {
  title: "'Line' Graph",
  xaxis: { title: "Boys"},
  yaxis: { title: "by State"}
};

// Part 2 - Line Chart
trace1.type = "line";

var data = [trace1];

var layout = {
  title: "'Line' Graph",
  xaxis: { title: "Girls"},
  yaxis: { title: "by State"}
};
Plotly.newPlot("plot2", data, layout);

// Part 3 - Broken Pie Chart
trace1.type = "pie";

var data = [trace1];

var layout = {
  title: "'Pie' Chart",
};

Plotly.newPlot("plot3", data, layout);

/*

  Can someone look here and let us know? https://plot.ly/javascript/pie-charts/ 
*/

// Part 4 - Working Pie Chart
var trace1 = {

  Labels: ["State", "Gender", "Year", "Name", "ID",
        
  ],
  Values: ["CA", "VA"],
    
  type: "Pie"
  };
  
  
  var data = [trace1];
  
  var layout = {
    title: "'Pie' Chart",
  };
  
  Plotly.newPlot("plot4", data, layout);

