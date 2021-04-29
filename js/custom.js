var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx,{
    type: 'do',
    data:{
        labels: ["C", "C++", "PhP", "JavaScript", "Python", "Sql"],
        datasets:[{
            data: [15, 20, 34, 22, 12, 10],
            backgroundColor: [
                'indianred',
                'green',
                'blue',
                'yellow',
                'black',
                'aqua'
            ],
        }]
    }
});

function getChart(id, chartType){
    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx,{
        type: chartType,
        data:{
            labels: ["C", "C++", "PhP", "JavaScript", "Python", "Sql"],
            datasets:[{
                data: [15, 20, 34, 22, 12, 10],
                backgroundColor: [
                    'black',
                    'green',
                    'blue',
                    'yellow',
                    'white',
                    'aqua'
                ],
            }]
        }
    });
}