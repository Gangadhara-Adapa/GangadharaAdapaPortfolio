import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  private barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    legend:{
      lineDash: Array[22]
    },
    scales: {
      xAxes: [{
        gridLines: {
        },
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90
        }
      }],
      yAxes: [{
        gridLines: {
        },
        ticks: {
          beginAtZero: true,
          stepSize : 5,
          max:100,
          callback: function(dataLabel, index) {  // transform display 100000 > 1.0
            let newValue = dataLabel
            if(newValue == 25){
               return 'Bignner'
            }else if(newValue == 50){
              return 'Intermediate'
            }else if(newValue == 75){
              return 'Advance'
            }else if(newValue == 100){
              return 'Expert'
            }else{
              return ''
            }
         }
        }
      }]
    }
  };
  private colors:Array<any> = [
    // {
    //   backgroundColor: [
    //     'rgba(255, 99, 132, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(255, 206, 86, 0.2)',
    //     'rgba(0, 255, 0, 0.2)',
    //     'rgba(102, 0, 204, 0.2)',
    //     'rgba(255, 128, 0, 0.2)',
    //     'rgba(255, 99, 132, 0.2)',
    //     'rgba(54, 62, 235, 0.2)',
    //     'rgba(255, 206, 86, 0.2)',
    //     'rgba(0, 255, 27, 0.2)',
    //     'rgba(82, 0, 204, 0.2)',
    //     'rgba(2, 128, 69, 0.2)',
    //     'rgba(25, 79, 132, 0.2)',
    //     'rgba(254, 162, 235, 0.2)',
    //     'rgba(205, 206, 86, 0.2)',
    //     'rgba(0, 255, 0, 0.2)',
    //     'rgba(102, 0, 204, 0.2)',
    //     'rgba(95, 128, 0, 0.2)',
    //     'rgba(85, 99, 132, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(55, 506, 86, 0.2)',
    //     'rgba(0, 255, 0, 0.2)',
    //   ],
    //   borderColor:[
    //     'rgba(205, 29, 132, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(255, 206, 86, 0.2)',
    //     'rgba(0, 255, 0, 0.2)',
    //     'rgba(102, 0, 204, 0.2)',
    //     'rgba(255, 128, 0, 0.2)',
    //     'rgba(255, 99, 132, 0.2)',
    //     'rgba(54, 62, 235, 0.2)',
    //     'rgba(255, 206, 86, 0.2)',
    //     'rgba(0, 255, 27, 0.2)',
    //     'rgba(82, 0, 204, 0.2)',
    //     'rgba(2, 128, 69, 0.2)',
    //     'rgba(25, 79, 132, 0.2)',
    //     'rgba(254, 162, 235, 0.2)',
    //     'rgba(205, 206, 86, 0.2)',
    //     'rgba(0, 255, 0, 0.2)',
    //     'rgba(102, 0, 204, 0.2)',
    //     'rgba(95, 128, 0, 0.2)',
    //     'rgba(85, 99, 132, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(55, 506, 86, 0.2)',
    //     'rgba(0, 255, 0, 0.2)',
    //   ]
    // }
      
    
    {

      backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(0, 255, 0, 0.2)',
            'rgba(102, 0, 204, 0.2)',
            'rgba(255, 128, 0, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 62, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(0, 255, 27, 0.2)',
            'rgba(82, 0, 204, 0.2)',
            'rgba(2, 128, 69, 0.2)',
            'rgba(25, 79, 132, 0.2)',
            'rgba(254, 162, 235, 0.2)',
            'rgba(205, 206, 86, 0.2)',
            'rgba(0, 255, 0, 0.2)',
            'rgba(102, 0, 204, 0.2)',
            'rgba(95, 128, 0, 0.2)',
            'rgba(85, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(55, 506, 86, 0.2)',
            'rgba(0, 255, 0, 1)',
          ],
      borderColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(0, 255, 0, 0.2)',
        'rgba(102, 0, 204, 0.2)',
        'rgba(255, 128, 0, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 62, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(0, 255, 27, 0.2)',
        'rgba(82, 0, 204, 0.2)',
        'rgba(2, 128, 69, 0.2)',
        'rgba(25, 79, 132, 0.2)',
        'rgba(254, 162, 235, 0.2)',
        'rgba(205, 206, 86, 0.2)',
        'rgba(0, 255, 0, 0.2)',
        'rgba(102, 0, 204, 0.2)',
        'rgba(95, 128, 0, 0.2)',
        'rgba(85, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(55, 506, 86, 0.2)',
        'rgba(0, 255, 0, 0.2)',
      ],
      borderWidth: 1.5,
    }
    
    
  ];
  public barChartLabels: Array<any> = ['HTML', 'CSS3', 'SCSS', 'Bootstrap', 'Angular', 'Angular-CLI', 'Jquery','JavaScript','TypeScript','NodeJS',
                                    'ASP.Net MVC','ASP.Net Core','C#','Web API','LINQ','EntityFramework','Microsoft SQL Server','Agile Methodoloy',
                                    'Team Foundation Server','Visual Studio Team Services','GitHub'];//22
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartData: any[] = [
    { data: [95,95,90,85,87,80,86,95,88,89,83,80,95,90,86,90,80,78,75,70,76], label: 'Series A' }
   
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  // public randomize():void {
  //   // Only Change 3 values
  //   let data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40];
  //   let clone = JSON.parse(JSON.stringify(this.barChartData));
  //   clone[0].data = data;
  //   this.barChartData = clone;
  //   /**
  //    * (My guess), for Angular to recognize the change in the dataset
  //    * it has to change the dataset variable directly,
  //    * so one way around it, is to clone the data, change it and then
  //    * assign it;
  //    */
  // }

  ngOnInit() { }

}
