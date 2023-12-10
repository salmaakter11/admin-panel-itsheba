// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myDhotChart2");
var myDhotChart2 = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Bangladesh", "Italy", "France", "Spain", "USA", "Argentina"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(39, 238, 245, 0.8)",
      borderColor: "rgba(2,117,216,1)",
      data: [13225, 5312, 6251, 7841, 2821, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 10
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
