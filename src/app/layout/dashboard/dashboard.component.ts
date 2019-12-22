import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    // lineChart1
    public lineChart1Data: Array<any> = [
    {
        data: [65, 59, 84, 84, 51, 55, 40],
        label: 'Series A'
    }
    ];
    public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChart1Options: any = {
    tooltips: {
        enabled: false
    },
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
        gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
        },
        ticks: {
            fontSize: 2,
            fontColor: 'transparent',
        }

        }],
        yAxes: [{
        display: false,
        ticks: {
            display: false,
            min: 40 - 5,
            max: 84 + 5,
        }
        }],
    },
    elements: {
        line: {
        borderWidth: 1
        },
        point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
        },
    },
    legend: {
        display: false
    }
    };
    public lineChart1Colours: Array<any> = [
    {
        backgroundColor: 'rgba(255,255,255,0)',
        borderColor: 'rgba(255,255,255,.55)'
    }
    ];
    public lineChart1Legend = false;
    public lineChart1Type = 'line';

    // main chart
    public mainChartElements = 27;
    public mainChartData1: Array<number> = [];
    public mainChartData2: Array<number> = [];
    public mainChartData3: Array<number> = [];

    public mainChartData: Array<any> = [
    {
        data: this.mainChartData1,
        label: 'Current'
    },
    {
        data: this.mainChartData2,
        label: 'Previous'
    },
    {
        data: this.mainChartData3,
        label: 'BEP'
    }
    ];
    /* tslint:disable:max-line-length */
    public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    /* tslint:enable:max-line-length */
    public mainChartOptions: any = {
    tooltips: {
        enabled: false,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
        labelColor: function(tooltipItem, chart) {
            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
        gridLines: {
            drawOnChartArea: false,
        },
        ticks: {
            callback: function(value: any) {
            return value.charAt(0);
            }
        }
        }],
        yAxes: [{
        ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
            max: 250
        }
        }]
    },
    elements: {
        line: {
        borderWidth: 2
        },
        point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
        }
    },
    legend: {
        display: false
    }
    };
    public mainChartColours: Array<any> = [
    { // brandInfo
        backgroundColor: 'rgba(0,0,0,.7)',
        borderColor: 'rgba(0,0,0,.55)',
        pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
        backgroundColor: 'transparent',
        borderColor: 'rgba(0,0,0,.55)',
        pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
        backgroundColor: 'transparent',
        borderColor: 'rgba(0,0,0,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5]
    }
    ];
    public mainChartLegend = false;
    public mainChartType = 'line';

    constructor() {}

    ngOnInit() {}
}
