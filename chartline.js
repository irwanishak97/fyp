var Temperature = [], Ph = [], Turbidity = [];
var firebase = new Firebase("fyp-lorawan.firebaseio.com/");

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

    Temperature = Temperature.slice(Temperature.length- 20, Temperature.length);
    Ph = Ph.slice(Ph.length- 20, Ph.length);
    Turbidity = Turbidity.slice(Turbidity.length- 20, Turbidity.length);

    drawGraphPh(Ph);
    drawGraphTemp(Temperature);
    drawGraphTurb(Turbidity);
});

function drawGraphPh(Ph){
    var labels = ['0m', '10m', '20m', '30m', '40m', '50m', '60m', '70m', '80m', '90m', '100m', '110m', '120m'];
    var ctx = document.getElementById("myChartPh").getContext('2d');
    var myChartPh = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
        {
            label: "Ph",
            labelString : "Ph",
            borderColor: 'rgb(0, 99, 132)',
            backgroundColor: 'rgb(0, 99, 132)',
            fill: false,
            data: Ph,
            yAxisID: "y-axis-temp",         
                
        }
    ]},
    options: {
        responsive: true,
        maintainAspectRatio: false,
        hoverMode: 'index',
        stacked: false,
        title:{
            display: true,  //display title
            text:'Ph Value'
        },
        // events: ['click'],
        scales: {
            yAxes: [{
                type: "linear", 
                display: true,
                position: "left",
                id: "y-axis-temp",
                ticks: {
                    beginAtZero:true,
                    suggestedMax: 50
                }
        
            }],
        }
    }
    });
}

function drawGraphTemp(Temperature){
    var labels = ['0m', '10m', '20m', '30m', '40m', '50m', '60m', '70m', '80m', '90m', '100m', '110m', '120m'];
    var ctx = document.getElementById("myChartTemp").getContext('2d');
    var myChartTemp = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
        {
            label: "Temperature [°C]",
            labelString : "°C",
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
            fill: false,
            data: Temperature,
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
            yAxes: [{
                type: "linear", 
                display: true,
                position: "left",
                id: "y-axis-temp",
                ticks: {
                    beginAtZero:true,
                    suggestedMax: 50
                }
        
            }],
        }
    }
    });
}


function drawGraphTurb(Turbidity){
    var labels = ['0m', '10m', '20m', '30m', '40m', '50m', '60m', '70m', '80m', '90m', '100m', '110m', '120m'];
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
            data: Turbidity,
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
            yAxes: [{
                type: "linear", 
                display: true,
                position: "left",
                id: "y-axis-temp",
                ticks: {
                    beginAtZero:true,
                    suggestedMax: 50
                }
        
            }],
        }
    }
    });
}