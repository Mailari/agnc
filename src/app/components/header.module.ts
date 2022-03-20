import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="flex flex-row p-1 justify-around px-[10%] items-center shadow-sm">
      <p class="text-3xl font-bold"><a routerLink="/about">AGNC</a></p>
      <nav class="list-none text-xs  flex-row hidden md:flex">
        <li class="px-5"><a routerLink="/about">About</a></li>
        <li class="px-5"><a routerLink="/services">Services</a></li>
        <li class="px-5"><a routerLink="/cases">Cases</a></li>
        <li class="px-5"><a routerLink="/blog">Blog</a></li>
        <li class="px-5"><a routerLink="/contact">contact</a></li>
      </nav>
      <button>
        <span class="bg-red-100 text-red-600 rounded-md p-2 text-xs">Contact Us</span>
      </button>
    </div>
  `
})
export class HeaderComponent {}

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [RouterModule]
})
export class HeaderModule {}
