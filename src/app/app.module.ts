import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './views/home/home.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { VideoPopperComponent } from './views/video-popper/video-popper.component';
import { ContactFormComponent } from './views/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoPopperComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'asistencia-web'}),
    AppRoutingModule,
    CoreModule.forRoot(),
    ScrollToModule.forRoot(),
    ReactiveFormsModule,
    NgxErrorsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
