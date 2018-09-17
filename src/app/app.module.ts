import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { WebViewsModule } from './web-views/web-views.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'asistencia-web'}),
    AppRoutingModule,
    CoreModule.forRoot(),
    ScrollToModule.forRoot(),
    WebViewsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

