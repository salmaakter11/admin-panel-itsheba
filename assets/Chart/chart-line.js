// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myLineChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June" ,"july" , "Aug" , "sep" , "oct" , "Nov" , "dec"],
    datasets: [{
      label: "Revenue",
      
      borderColor: "pink",
      data: [125,  1000, 2000, 5000, 4400, 7000, 14984  , 12000, 11984 , 4400, 5000, 14984],
    }, {
    data: [1600,1700,6700,1900,9000,7000,1000,14000,6000,7000 ,4000,5000,6000,7000],
    label: "Revenue",
    
    borderColor: "blue",
    // fill: false
      
    }
],
 
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 20
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 20
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
