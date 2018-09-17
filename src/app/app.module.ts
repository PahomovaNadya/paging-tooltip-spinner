import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PaginatorModule} from 'primeng/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { NgbdTooltipTplcontent } from './components/tooltip-tplcontent'
import { FistComponent } from './components/first.component'
import { ReactionDirective } from './reaction.directive';


@NgModule({
  declarations: [
    AppComponent,
    FistComponent,
    NgbdTooltipTplcontent,
    ReactionDirective
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PaginatorModule,
    NgxSpinnerModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
