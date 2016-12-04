'use strict';

var data = 

drawLine();
drawBar();
drawDoughnut();



function drawLine() {
    var ctx = document.getElementById('chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            datasets: [{
                label: 'apples',
                data: [12, 19, 3, 17, 6, 3, 7],
                backgroundColor: "rgba(153,255,51,0.4)"
            }, {
                label: 'oranges',
                data: [2, 29, 5, 5, 2, 3, 10],
                backgroundColor: "rgba(255,153,0,0.4)"
            }, {
                label: 'pears',
                data: [10, 9, 5, 20, 0, 14, 18],
                backgroundColor: "rgba(200,0,0,0.4)"
            }]
        }
    });
}

function drawBar() {
    var ctx = document.getElementById('barChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            datasets: [{
                label: 'apples',
                data: [12, 19, 3, 17, 6, 3, 7],
                backgroundColor: "rgba(153,255,51,0.4)"
            }, {
                label: 'oranges',
                data: [2, 29, 5, 5, 2, 3, 10],
                backgroundColor: "rgba(255,153,0,0.4)"
            }, {
                label: 'pears',
                data: [10, 9, 5, 20, 0, 14, 18],
                backgroundColor: "rgba(200,0,0,0.4)"
            }]
        }
    });
}

function drawDoughnut() {
    var ctx = document.getElementById('doChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['apples', 'oranges', 'pears'],
            datasets: [{
                data: [60, 56, 76],
                backgroundColor: ["rgba(153,255,51,0.4)", "rgba(255,153,0,0.4)","rgba(200,0,0,0.4)"]
            }]
        }
    });
}
