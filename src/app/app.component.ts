import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { IPatient } from './patient';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UsersService, 
    NgbTooltipConfig
  ]
})  

export class AppComponent {
  isCollapsed: boolean;
  patientInfoN: IPatient[] = [];
  patientInfoD: IPatient[] = [];
  countArrPage: number = 3;
  countArr: number = 100;
  itensCount: string[] = ["1","3","6","9","12","15","18","20"];
  isDivVisible = false;

  constructor(config: NgbTooltipConfig, private usersService: UsersService, private spinner: NgxSpinnerService) {
    config.placement = 'bottom';
    config.container = 'body';
    config.triggers = 'hover';
    this.isCollapsed = true;
  }
  ngOnInit(){
    this.usersService.getJSON().subscribe(patientInfo =>{ 
      this.patientInfoD = patientInfo.patientInfo;
      this.countArr = patientInfo.patientInfo.length;
      //this.patientInfoN = this.workPaginator(patientInfo.patientInfo, 0, this.countArrPage);
    });
    this.spinner.show();
 
    setTimeout(() => {
        this.spinner.hide();
        this.patientInfoN = this.workPaginator(this.patientInfoD, 0, this.countArrPage);
        console.log(document.getElementsByClassName("bootomLine"));
        this.isDivVisible = true;
        //document.getElementsByClassName("bootomLine").style.visibility = "visible";
        //document.getElementsByClassName("bootomLine").show();
    }, 3000);
  }

  workPaginator(obj: IPatient[], start, count): IPatient[] {
    let newPatientArr: Array<IPatient> = [];
    let i=0;
    let numSrt = +start + (+count);
    obj.forEach((job) => {
      if ( i >= +start && i < numSrt) {
        newPatientArr.push(obj[i]);
      }
      i++;
    }); 
    return newPatientArr;
  }
  paginate(event) {
    console.log(event);
    this.patientInfoN = this.workPaginator(this.patientInfoD, event.first, event.rows);
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }
  selectItemCount(event){
    console.log(event);
    this.countArrPage = event;
    this.patientInfoN = this.workPaginator(this.patientInfoD, 0, event);
  }
}