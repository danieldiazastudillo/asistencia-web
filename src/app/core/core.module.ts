import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ScrollToModule.forRoot(),
  ],
  exports: [HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, FooterComponent],
  providers: [],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
 }
