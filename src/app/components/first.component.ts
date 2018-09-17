import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FistComponent {
  @Input() item
  
  dateCheck() {
    let dateB = new Date(this.item.dateOfBirth);
    let dateN = (new Date(Date.parse(Date())));
    let delta=dateN.getTime()-dateB.getTime();
    let patYear = Math.floor(delta/1000/60/60/24/365);
    let patYearStr = "";
    if (patYear<=0) {
      patYear = (dateN.getMonth()+1) - (dateB.getMonth()+1);
      if(patYear<=0) {
        patYear = dateN.getDate() - dateB.getDate();
        if(patYear < 0){
          patYearStr = "11 Month";
        }
      }
    }
    if(patYearStr == ""){ patYearStr = patYear + " years" }
    return patYearStr;
  }
  genderCheck() {
    let genderB = this.item.gender;
    if(genderB.charAt(0).toLowerCase() == "f"){
      genderB = "blueText";
    }
    else if(genderB.charAt(0).toLowerCase() == "m"){
      genderB = "orangText";
    }
    return genderB;
  }
}
