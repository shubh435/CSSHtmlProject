function plot(type) {
    const exp = document.getElementById("equation").value;
    const xValues = [];
    const yValues = [];
    let mode = "lines";
    if (type == "scatter") {mode = "markers"}
    
    // Generate values
    for (let x = 0; x <= 10; x += 1) {
      xValues.push(x);
      yValues.push(eval(exp));
    }
    
    // Display using Plotly
    const data = [{x:xValues, y:yValues, mode:mode, type:"scatter"}];
    const layout = {title: "y = " + exp};
    Plotly.newPlot("myPlot", data, layout);
    }