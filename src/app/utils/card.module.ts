import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
@Component({
  selector: 'app-card',
  template: `
    <div class="flex-1 mb-[5vh] md:m-2 w-[33vh] ">
      <img class="object-cover h-[{{ !h ? '30vh' : '5vh' }}]" src="{{ card.image }}" alt="" />
      <h1 class=" text-2xl font-light py-5 ">{{ card.title }}</h1>
      <p class="text-xs md:w-[80%] w-full">{{ card.description }}</p>
    </div>
  `
})
export class CardComponent {
  @Input() card: any = {};
  @Input() h: boolean = false;
}
@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [CommonModule]
})
export class CardModule {}
