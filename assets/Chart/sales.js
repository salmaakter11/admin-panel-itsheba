// Sales Overview
var data = {
                                     
    datasets: [
      {
        label: 'Incoming Amount',
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Adjust color as needed
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [10000, 12000, 15000, 8000, 20000]
      },
      {
        label: 'Due Amount',
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Adjust color as needed
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [2000, 4000, 6000, 3000, 8000]
      },
      {
        label: 'Paid Amount',
        backgroundColor: 'rgba(255, 205, 86, 0.6)', // Adjust color as needed
        borderColor: 'rgba(255, 205, 86, 1)',
        borderWidth: 1,
        data: [8000, 8000, 9000, 5000, 12000]
      }
    ]
  };


  // Create legend
  var legendHtml = '<ul class="list-inline">';
  data.datasets.forEach(dataset => {
    legendHtml += `<li class="list-inline-item mr-2">
                      <span style="background-color:${dataset.backgroundColor}; border: 1px solid ${dataset.borderColor}; display:inline-block; width:25px; height:15px;"></span>
                      ${dataset.label}
                  </li>`;
  });
  legendHtml += '</ul>';
  document.getElementById('legend').innerHTML = legendHtml;


//   Purchase and Expenses
  var data = {
                                     
    datasets: [
      {
        label: 'Incoming Amount',
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Adjust color as needed
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [10000, 12000, 15000, 8000, 20000]
      },
      {
        label: 'Due Amount',
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Adjust color as needed
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [2000, 4000, 6000, 3000, 8000]
      },
      {
        label: 'Paid Amount',
        backgroundColor: 'rgba(255, 205, 86, 0.6)', // Adjust color as needed
        borderColor: 'rgba(255, 205, 86, 1)',
        borderWidth: 1,
        data: [8000, 8000, 9000, 5000, 12000]
      }
    ]
  };


  // Create legend
  var legend2Html = '<ul class="list-inline">';
  data.datasets.forEach(dataset => {
    legend2Html += `<li class="list-inline-item mr-2">
                      <span style="background-color:${dataset.backgroundColor}; border: 1px solid ${dataset.borderColor}; display:inline-block; width:25px; height:15px;"></span>
                      ${dataset.label}
                  </li>`;
  });
  legend2Html += '</ul>';
  document.getElementById('legend2').innerHTML = legend2Html;