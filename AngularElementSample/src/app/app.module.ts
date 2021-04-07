import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AngularElementSampleWebPartComponent } from './angular-element-sample-web-part/angular-element-sample-web-part.component';

@NgModule({
  declarations: [
    AngularElementSampleWebPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AngularElementSampleWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(AngularElementSampleWebPartComponent, { injector: this.injector });
    customElements.define('app-angular-element-sample-web-part', el);
  }
}
