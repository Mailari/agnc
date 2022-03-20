import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: ` <h1 class="pt-[10vh] text-center">404 Page Not Found</h1> `
})
export class NotFoundComponent {}

@NgModule({
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent]
})
export class NotFoundPage {}
