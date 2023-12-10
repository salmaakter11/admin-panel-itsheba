// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


var ctx = document.getElementById('radialBarChart').getContext('2d');
var radialBarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        datasets: [{
            data: [70, 80, 60, 90, 75], // Your data values
            backgroundColor: 'rgba(85, 192, 192, 0.3)',
            borderColor: 'rgb(162, 103, 138)',
            borderWidth: 2,
        }],
    },
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 100, // Customize the maximum value as needed
                stepSize: 20, // Customize the step size as needed
            },
        },
    }
});