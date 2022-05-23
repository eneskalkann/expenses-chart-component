// importing data.json file

var xmlhttp = new XMLHttpRequest();
var url = "./js/data.json"
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        day = data.day_amount.map(function(elem){
            return elem.day
        })
        amount = data.day_amount.map(function(elem){
            return elem.amount
        })
        //console.log(amount)

// using chart.js

        const ctx = document.getElementById('canvas').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: day,
                datasets: [{
                    label: 'Amount',
                    data: amount,
                    backgroundColor: [
                        'hsl(10, 79%, 65%)',
                        'hsl(10, 79%, 65%)',
                        'hsl(186, 34%, 60%)',
                        'hsl(10, 79%, 65%)',
                        'hsl(10, 79%, 65%)',
                        'hsl(10, 79%, 65%)',
                        'hsl(10, 79%, 65%)'
                    ],
                    borderRadius: 7,
                }]
            },
            options: {
                plugins: {  
                    legend: {
                        display: false
                    },
                    tooltip:{
                        titleFont:{
                            size:15,
                        },
                        bodyFont: {
                            size: 18
                        },
                        yAlign : 'bottom',
                        displayColors: false,
                        backgroundColor : 'hsl(25, 47%, 15%)'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks:{
                            display:false,
                        },
                        grid:{
                            borderColor:'green',
                            drawOnChartArea : false,
                            borderWidth : 3,
                            drawBorder: false,
                        }
                    },
                    x: {
                        grid : {
                            drawBorder: false,
                            drawOnChartArea : false,
                            display : false,
                            lineWidth: 5
                        }
                    }
                }
            }
        });
    }
}


