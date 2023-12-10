// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Italy", "France", "Spain", "USA", "Argentina" ,"bangladesh" , "brazil"], 
    datasets: [{
      data: [12.21, 15.58, 7.00 ,11.25, 8.32 ,5.00 ,3.00 ],
      backgroundColor: ["#FFE4D6" , "#FACBEA", "#D988B9",
      "#B0578D", "#FFCF96","#CDFAD5"],
    }],
  },
});


 