import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
})
export class ChartjsComponent implements OnInit {
  constructor() {}

  // line
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'CA Année 2022',
        borderColor: 'black',
      },
      {
        data: [60, 59, 30, 81, 16, 55, 40],
        label: 'CA Année 2021',
        borderColor: 'orange'
      },
    ],
  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y:{
        beginAtZero: true
      }
    }
  };
  lineChartLegend = true;
  // bar
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Ventes payées' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Ventes impayées' }
    ]
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      y:{
        beginAtZero: true
      }
    }
  };
  // pie doughnutChart
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {}
}
