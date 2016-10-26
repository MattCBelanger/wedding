import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Ng2PageScrollModule} from 'ng2-page-scroll/ng2-page-scroll';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, Ng2PageScrollModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
