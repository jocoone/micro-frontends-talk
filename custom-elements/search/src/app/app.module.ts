import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { WikipediaService } from './wikipedia.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbTypeaheadModule,
  ],
  providers: [WikipediaService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    const myElement = createCustomElement(AppComponent, { injector });
    customElements.define('bednet-search', myElement);
  }
  ngDoBootstrap() {}
}
