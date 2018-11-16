import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { VideoPopperComponent } from './video-popper/video-popper.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AssistServicesComponent } from './assist-services/assist-services.component';
import { AssistStepsComponent } from './assist-steps/assist-steps.component';
import { NgxErrorsModule } from '@hackages/ngxerrors';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AssistAccordionComponent } from './assist-accordion/assist-accordion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FloatingFormComponent } from './floating-form/floating-form.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { LlamanosHolderComponent } from './llamanos-holder/llamanos-holder.component';
import { ModalServicesComponent } from './modal-services/modal-services.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgxErrorsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    NgbModule
  ],
  declarations: [
    AssistStepsComponent,
    AssistServicesComponent,
    ContactFormComponent,
    HomeComponent,
    JumbotronComponent,
    VideoPopperComponent,
    AssistAccordionComponent,
    FloatingFormComponent,
    EmergencyComponent,
    LlamanosHolderComponent,
    ModalServicesComponent
  ],
  exports: [
    AssistStepsComponent,
    AssistServicesComponent,
    ContactFormComponent,
    HomeComponent,
    JumbotronComponent,
    VideoPopperComponent,
    EmergencyComponent,
    LlamanosHolderComponent
  ],
  providers: [],
})
export class WebViewsModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: WebViewsModule
  ) {
    if (parentModule) {
      throw new Error(
        'WebViewsModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WebViewsModule,
      providers: []
    };
  }
 }
