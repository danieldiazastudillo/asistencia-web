import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { WebViewsModule } from './web-views/web-views.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'asistencia-web'}),
    AppRoutingModule,
    CoreModule.forRoot(),
    HttpClientModule,
    ScrollToModule.forRoot(),
    WebViewsModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

