function getChart(id, chartType){
    var myChart = new Chart(id,{
        type: chartType,
        data:{
            labels: ["C", "C++", "PHP", "JavaScript", "Python", "Sql"],
            datasets:[{
                data: [15, 20, 34, 22, 12, 10],
                backgroundColor: [
                    'black',
                    'green',
                    'blue',
                    'yellow',
                    'red',
                    'aqua'
                ],
            }]
        }
    });
}

var typeArr = ["bar", "pie", "line", "polarArea", "doughnut"];

for(ptr=0; ptr<=5; ptr++){
    var ctx = document.getElementById('myChart'+(ptr+1)).getContext('2d');
    getChart(ctx, typeArr[ptr]);
}

/*var ctx1 = document.getElementById('myChart1').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var ctx3 = document.getElementById('myChart3').getContext('2d');
var ctx4 = document.getElementById('myChart4').getContext('2d');
var ctx5 = document.getElementById('myChart5').getContext('2d');

var chart1 = getChart(ctx1, "bar");
var chart2 = getChart(ctx2, "pie");
var chart3 = getChart(ctx3, "line");
var chart4 = getChart(ctx4, "polarArea");
var chart5 = getChart(ctx5, "doughnut");*/