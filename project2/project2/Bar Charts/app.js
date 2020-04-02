// Initializes the page with a default plot
function init() {
    data = [{
      x: ['Michigan', 'Texas', 'Missouri', 'Georgia', 'Pennsylvania'],
      y: [500, 460, 368, 351, 345], 
      type: "bar"}];
      
      var layout = {
        title: "Top Five States for Pneumonia & Influenza Deaths",
        xaxis: { title: "States"},
        yaxis: { title: "Deaths"}
      };
      
      Plotly.newPlot("plot", data, layout);
  }
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    var x = [];
    var y = [];
  
    if (dataset === 'dataset1') {
        x = ['Michigan', 'Texas', 'Missouri', 'Georgia', 'Pennsylvania'];
        y = [500, 460, 368, 351, 345];
    }
  
    if (dataset === 'dataset2') {
        x = ['California', 'Ohio', 'Illinois', 'Michigan', 'Maryland'];
        y = [1541.0, 509.0, 493.0, 385.0, 379.0];
    }

    if (dataset === 'dataset3') {
        x = ['Tennessee', 'Michigan', 'California', 'Indiana', 'Ohio'];
        y = [709.0, 434.0, 386.0, 350.0, 329.0];
    }

    if (dataset === 'dataset4') {
    x = ['California', 'Pennsylvania', 'Georgia', 'Ohio', 'Illinois'];
    y = [2091.0, 649.0, 575.0, 538.0, 532.0];
    }

    if (dataset === 'dataset5') {
    x = ['California', 'Illinois', 'Tennessee', 'North Carolina', 'Indiana'];
    y = [596.0, 429.0, 347.0, 335.0, 241.0];
    }

    if (dataset === 'dataset6') {
        x = ['California', 'Texas', 'Florida', 'Ohio', 'Indiana'];
        y = [1841.0, 1222.0, 702.0, 472.0, 314.0];
     }

     if (dataset === 'dataset7') {
        x = ['California', 'Ohio', 'Illinois', 'Georgia', 'New York'];
        y = [427.0, 375.0, 279.0, 274.0, 260.0];
     }

     if (dataset === 'dataset8') {
        x = ['New Jersey', 'Pennsylvania', 'Massachusetts', 'Maryland', 'Florida'];
        y = [274.0, 269.0, 228.0, 219.0, 212.0];
     }

     if (dataset === 'dataset9') {
        x = ['California', 'Texas', 'Maryland', 'North Carolina', 'Virginia'];
        y = [546.0, 480.0, 330.0, 320.0, 298.0];
     }


    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  
  init();