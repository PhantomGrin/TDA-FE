function drawChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Running', 'Waiting', 'Blocked'],
            datasets: [{
            data: [23, 4, 5],
            backgroundColor: [
                'rgba(40, 167, 69, 0.3)',
                'rgba(255, 193, 7, 0.3)',
                'rgba(220, 53, 69, 0.3)'
            ],
            borderColor: [
                'rgba(40, 167, 69, 0.8)',
                'rgba(255, 193, 7, 0.8)',
                'rgba(220, 53, 69, 0.8)'
            ],
            borderWidth: 1
        }]
            },
        options: {
            responsive: true,
            legend: {
                position: 'left',
            },
            
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
}