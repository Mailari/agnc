import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FooterModule } from './components/footer.module';
import { HeaderModule } from './components/header.module';

@Component({
  selector: 'app-root',
  template: `
    <div class="">
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {
  title = 'agnc';
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule,FooterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
