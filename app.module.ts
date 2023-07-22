import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { AddSectionComponent } from './add-section/add-section.component';
import { AccordianComponent } from './accordian/accordian.component';
import { AnimateModule } from 'primeng/animate';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccoService } from 'src/share/service/acc.service';

@NgModule({
  declarations: [
    AppComponent,
    AddSectionComponent,
    AccordianComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    AnimateModule
   
    
  ],
  providers: [AccoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
