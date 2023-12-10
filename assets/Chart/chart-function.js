// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
const xValues = [];
const yValues = [];
generateData("Math.sin(x)", 4, 15, .5);

    new Chart("myFunctionChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          pointRadius: 3,
          borderColor: "rgba(0,0,255,0.5)",
          data: yValues
        }]
      },    
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Function Chart",
          fontSize: 20
        }
      }
    });
    function generateData(value, i1, i2, step = 2) {
      for (let x = i1; x <= i2; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
      }
    }

