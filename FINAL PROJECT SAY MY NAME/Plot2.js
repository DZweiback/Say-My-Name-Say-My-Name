
d3.csv("BabyNames_States.csv", function(error, BabyData) {
  if (error) throw error;

  console.log(BabyData);


function init() {
  data = [{
    x: [1988, 1994, 2004,2008, 2012, 2017],
    y: [4, 7, 10, 12, 17, 20] }];
    
  const LINE = document.getElementById("plot");
  Plotly.plot("plot", data);
}

function updatePlotly(newx, newy) {
  const LINE = document.getElementById("plot");

  // Note the extra brackets around 'newx' and 'newy'
  Plotly.restyle(LINE, "x", [newx]);
  Plotly.restyle(LINE, "y", [newy]);
}

function getData(dataset) {

  // Initialize empty arrays to contain our axes
  var x = [];
  var y = [];

  // Fill the x and y arrays as a function of the selected dataset
  switch (dataset) {
  case "Chelsea":
    x = [1988, 1994, 2004,2008, 2012,  2017];
    y = [4, 7, 10, 12, 17, 20];
    break;
  case "John":
    x = [1988, 1994, 2004,2008, 2012,  2017];
    y = [4, 7, 10, 12, 17, 20];
    break;
  case "Obama":
    x = [1988, 1994, 2004,2008, 2012, 2017];
    y = [4, 7, 10, 12, 17, 20];
    break;
  default:
    x = [1, 2, 3, 4, 5, 6];
    y = [1, 2, 3, 4, 5, 6];
    break;
}

updatePlotly(x, y);
}

init();