// Assign data from data.js
var tableData = data;
var tbody = d3.select("tbody");

function buildtable(data){
// YOUR CODE HERE!
tbody.html("")
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}
// call build table with table data 
//we built a function that we can resuse above
var filter = d3.select("#filter-btn");

buildtable(tableData)
// Use D3 `.on` to attach a click handler for the upvote
filter.on("click", function() {
  // Select the current count
D3.preventdefault();
var inputElement = d3.select("#datetime");
// Get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue)});
var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
console.log(filteredData);
buildtable(filteredData)