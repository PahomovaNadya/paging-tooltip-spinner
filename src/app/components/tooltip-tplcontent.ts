import { Component,Input } from '@angular/core';

@Component({
  selector: 'ngbd-tooltip-tplcontent',
  templateUrl: './tooltip-tplcontent.html'
})
export class NgbdTooltipTplcontent {
  @Input() mrnParam: string;
  @Input() commentParam: string;
}