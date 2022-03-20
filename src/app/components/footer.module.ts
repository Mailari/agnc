import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="px-[15%] ">
      <hr class="h-[2px] bg-black" />
      <div class="flex flex-row justify-between md:text-sm text-[6px] font-bold items-center">
        <p class="md:py-4 ">Copyright © 2020 Laaqiq. All Rights Reserved.</p>
        <p>Terms Of Use Privacy Policy</p>
      </div>
    </div>
  `
})
export class FooterComponent {}

@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {}
