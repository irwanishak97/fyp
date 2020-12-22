// for chart 
var Temperature = [], Ph = [], Turbidity = [];
var firebase = new Firebase("fyp-lorawan.firebaseio.com/");
var count = 10; //for label

firebase.on('value', function(snapshot) {
    for(let i in snapshot.val().Temperature){
        Temperature.push(snapshot.val().Temperature[i]);
    }
    for(let i in snapshot.val().Ph){
        Ph.push(snapshot.val().Ph[i]);
    }
    for(let i in snapshot.val().Turbidity){
        Turbidity.push(snapshot.val().Turbidity[i]);
    }
   
    // TemperatureTest = Temperature.slice(0, Temperature.length); //slice(0, temperature.length);
    // console.log(TemperatureTest);
   
    Temperature = Temperature.slice(0, Temperature.length);
    Ph = Ph.slice(0, Ph.length);
    Turbidity = Turbidity.slice(0, Turbidity.length);

    drawGraphPh(Ph);
    drawGraphTemp(Temperature);
    drawGraphTurb(Turbidity);

    console.log(Ph);     //arrays of ph
    console.log(Ph[1]);
});

function drawGraphPh(Ph){
    
    var labels = [];
    var ctx = document.getElementById("myChartPh").getContext('2d');
    var myChartPh = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
        {
            label: "Ph value",
            labelString : "Ph",
            borderColor: 'rgb(0, 99, 132)',
            backgroundColor: 'rgb(0, 99, 132)',
            fill: false,
            lineTension: 0.5,
            data: [],
            yAxisID: "y-axis-temp",         
                
        }
    ]},
    options: {
        responsive: true,
        maintainAspectRatio: false,
        hoverMode: 'index',
        stacked: false,
        tooltips:{
            mode: 'nearest',
            intersect: true
        },
        title:{
            display: true,
            text:'Ph value'
        },
        scales: {
            xAxes:[{
                display: true,
                scaleLabel:{
                    display: true,
                    labelString: 'minutes'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Ph Value'
                },
                type: "linear", 
                display: true,
                position: "left",
                id: "y-axis-temp",
                ticks: {
                    beginAtZero:true,
                    suggestedMax: 14
                }
        
            }],
        }
    }
    });
    
    var minute = 0;
    var getData = function(){
        myChartPh.data.labels.push(++minute + "min");       /* push new labels */
        // console.log(Ph);
        for(var i=0;i<Ph.length; i++){          /* push new data */
            myChartPh.data.datasets[0].data.push(Ph[i]);
        }
        myChartPh.update();
    }   
    setInterval(getData, 5000);
    
    // update graph

    // updateConfigByMutating(myChartPh);
    // addData(myChartPh,labels,Ph);

    // function updateConfigByMutating(chart) {
    //     chart.options.title.text = 'new title';
    //     chart.update();
    // }

    // function addData(chart, label, data) {
    //     chart.data.labels.push(label);
    //     chart.data.datasets.forEach((dataset) => {
    //         dataset.data.push(data);
    //     });
    //     chart.update();
    // }

    // myChartPh.data.datasets[0].data[11] = 50;
    // myChartPh.data.labels[11] = '11';
    // myChartPh.update();
    
    // myChartPh.update({
    //     duration: 800,
    //     easing: 'easeOutBounce'
    // })

    //this for ajax
}


function drawGraphTemp(Temperature){
    var labels = [];
    var ctx = document.getElementById("myChartTemp").getContext('2d');
    var myChartTemp = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
        {
            label: "Temperature [°C]",
            labelString : "°C",
            borderColor: 'rgb(0, 99, 132)',
            backgroundColor: 'rgba(131, 215, 238, 1)',
            fill: false,
            data: [],
            yAxisID: "y-axis-temp",
        },
    ]},
    options: {
        responsive: true,
        maintainAspectRatio: false,
        hoverMode: 'index',
        stacked: false,
        title:{
            display: true,
            text:'Temperature'
        },

        scales: {
            xAxes:[{
                display: true,
                scaleLabel:{
                    display: true,
                    labelString: 'minutes'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Temperature'
                },
                type: "linear", 
                display: true,
                position: "left",
                id: "y-axis-temp",
                ticks: {
                    beginAtZero:true,
                    suggestedMax: 100
                }
        
            }],
        }
    }
    });
    var minute = 0;
    var getData = function() {
        myChartTemp.data.labels.push(++minute + "min");
        // console.log(Ph);
        for(var i=0;i<Temperature.length; i++){
            myChartTemp.data.datasets[0].data.push(Temperature[i]);
        }
        myChartTemp.update();
    }   
    setInterval(getData, 5000);
}


function drawGraphTurb(Turbidity){
    var labels = [];
    var ctx = document.getElementById("myChartTurb").getContext('2d');
    var myChartTurb = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
        {
            label: "Turbidity [NTU]",
            labelString : "Turbidity",
            borderColor: 'rgb(0, 99, 132)',
            backgroundColor: 'rgb(0, 99, 132)',
            fill: false,
            data: [],
            yAxisID: "y-axis-temp",         
                
        }
    ]},
    options: {
        responsive: true,
        maintainAspectRatio: false,
        hoverMode: 'index',
        stacked: false,
        title:{
            display: true,
            text:'Turbidity'
        },

        scales: {
            xAxes:[{
                display: true,
                scaleLabel:{
                    display: true,
                    labelString: 'minutes'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Turbidity'
                },
                type: "linear", 
                display: true,
                position: "left",
                id: "y-axis-temp",
                ticks: {
                    beginAtZero:true,
                    suggestedMax: 400
                }
        
            }],
        }
    }
    });

    var minute = 0;
    var getData = function() {
        myChartTurb.data.labels.push(++minute + "min");
        // console.log(Ph);
        for(var i=0;i<Turbidity.length; i++){
            myChartTurb.data.datasets[0].data.push(Turbidity[i]);
        }
        myChartTurb.update();
    }   
    setInterval(getData, 5000);
}