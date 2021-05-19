
const contex2 = document.getElementById('myChart2').getContext('2d');

let chart = new Chart(contex2, {
    type: 'bar',
    data: {
        datasets: [
            {
                label: 'Absent',
                data: [78, 20, 40, 50],
                backgroundColor: "red"
            },
            {
                label: 'Late In',
                data: [22, 50, 34, 23],
                backgroundColor: "yellow"
            }

        ],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        scales: {
            y: {
                suggestedMin: 50,
                suggestedMax: 100
            }
        }
    }
});
