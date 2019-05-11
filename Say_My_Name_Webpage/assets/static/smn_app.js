// Get a reference to the table body and other elements
var tbody = d3.select("tbody");
//var datetimes = d3.select("#datetime");
var year = d3.select("#year")
var states = d3.select("#state");
var countries = d3.select("#title");
//var shapes = d3.select("#shape");
var row;

// Function to capitalize strings (mostly used for Names and States)
function capitalize_Words(str)
{return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

// Define the various input/select fields
var filteredData = data;

var stateinputElement = d3.select("#state"); 
var stateinputValue = stateinputElement.property("value").toUpperCase();
var url = "https://saymynameproject.herokuapp.com/api/home_state?home_state=" + stateinputValue
statedata = d3.json(url)  //Takes returned values and stores into the variable statedata

var yearinputElement = d3.select("#year");
var yearinputValue = yearinputElement.property("value");
var url = "https://saymynameproject.herokuapp.com/api/movie_year?movie_year=" + yearinputValue
yeardata = d3.json(url)  //Takes returned values and stores into the variable yeardata

var titleinputElement = d3.select("#title");
var titleinputValue = titleinputElement.property("value").toLowerCase();
var url = "https://saymynameproject.herokuapp.com/api/movie_title?movie_title=" + titleinputValue
titledata = d3.json(url)  //Takes returned values and stores into the variable titledata

var nameinputElement = d3.select("#your_name");
var nameinputValue = nameinputElement.property("value").toUpperCase();
var url = "https://saymynameproject.herokuapp.com/api/your_name?your_name=" + nameinputValue
namedata = d3.json(url)  //Takes returned values and stores into the variable namedata


//var dateinputElement = d3.select("#datetime");
//var dateinputValue = dateinputElement.property("value");
//var shapeinputElement = d3.select("#shape");
//var shapeinputValue = shapeinputElement.property("value").toLowerCase();

// Find a list of unique values from the data set
let uniqueyears = [...new Set(filteredData.map(item => item.year))];
let uniquestates = [...new Set(filteredData.map(item => item.state))].sort();
let uniquetitles = [...new Set(filteredData.map(item => item.title))];
let uniquenames = [...new Set(filteredData.map(item => item.names))].sort();

// Populate the dropdown options with the unique values
uniqueyears.forEach(entry => {
    option = year.append("option");
    option.append("value").text(entry);
});
uniquestates.forEach(entry => {
    option = states.append("option");
    option.append("value").text(entry.toUpperCase());
});
uniquetitles.forEach(entry => {
    option = titles.append("option");
    option.append("value").text(entry.toLowerCase());
});
uniquenames.forEach(entry => {
    option = names.append("option");
    option.append("value").text(capitalize_Words(entry));
});

// Set the initial drop down values to null
document.getElementById('year').value = '';
document.getElementById('your_name').value = '';
document.getElementById('state').value = '';
document.getElementById('title').value = '';
//document.getElementById('shape').value = '';

// Build the initial table with the unfiltered data set
data.forEach(entry => {
    row = tbody.append("tr");
    row.append("td").text(entry.year);
    row.append("td").text(capitalize_Words(entry.your_name));
    row.append("td").text(entry.state.toUpperCase());
    row.append("td").text(entry.title.toUpperCase());
    //row.append("td").text(capitalize_Words(entry.shape));
    //row.append("td").text(entry.durationMinutes);
    //row.append("td").text(entry.comments);
});

// Define the table filter and reset buttons
var fbutton = d3.select("#filter-btn");
var rbutton = d3.select("#reset-btn");

// Filter function that evaluates the values of drop downs and builds table accordingly
fbutton.on("click", function() {
    d3.event.preventDefault();
    var filteredData = data;
    var yearinputElement = d3.select("#year");
    var yearinputValue = yearinputElement.property("value");
    var nameinputElement = d3.select("#you_name");
    var nameinputValue = nameinputElement.property("value").toLowerCase();
    var stateinputElement = d3.select("#state");
    var stateinputValue = stateinputElement.property("value").toLowerCase();
    var titleinputElement = d3.select("#title");
    var titleinputValue = countryinputElement.property("value").toLowerCase();
    //var shapeinputElement = d3.select("#shape");
    //var shapeinputValue = shapeinputElement.property("value").toLowerCase();
    if (yearinputValue !== ""){
        filteredData = filteredData.filter(entry => entry.year === yearinputValue);
    };
    if (nameinputValue !== ""){
        filteredData = filteredData.filter(entry => entry.name === nameinputValue);
    };
    if (stateinputValue !== ""){
        filteredData = filteredData.filter(entry => entry.state === stateinputValue);
    };
    if (titleinputValue !== ""){
        filteredData = filteredData.filter(entry => entry.title === titleinputValue);
    };
    //if (shapeinputValue !== ""){
        //filteredData = filteredData.filter(entry => entry.shape === shapeinputValue);
    //};
    tbody.html("");
    filteredData.forEach(entry => {
        row = tbody.append("tr");
        row.append("td").text(entry.year);
        row.append("td").text(capitalize_Words(entry.name));
        row.append("td").text(entry.state.toUpperCase());
        row.append("td").text(entry.title.toUpperCase());
        //row.append("td").text(capitalize_Words(entry.shape));
        //row.append("td").text(entry.durationMinutes);
        //row.append("td").text(entry.comments);
    });
});

// Reset function that clears the drop downs and rebuilds the initial table
rbutton.on("click", function() {
    d3.event.preventDefault();
    document.getElementById('year').value = '';
    document.getElementById('your_name').value = '';
    document.getElementById('state').value = '';
    document.getElementById('title').value = '';
    //document.getElementById('shape').value = '';
    tbody.html("");
    data.forEach(entry => {
        row = tbody.append("tr");
        row.append("td").text(entry.year);
        row.append("td").text(capitalize_Words(entry.name));
        row.append("td").text(entry.state.toUpperCase());
        row.append("td").text(entry.title.toUpperCase());
        //row.append("td").text(capitalize_Words(entry.shape));
        //row.append("td").text(entry.durationMinutes);
        //row.append("td").text(entry.comments);
    });
});