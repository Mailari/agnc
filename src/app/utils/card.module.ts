import { Component, Input, NgModule } from '@angular/core';
@Component({
  selector: 'app-card',
  template: `
    <div class="flex flex-col justify-start m-10 ">
      <img class="h-[30vh] w-[30vh]" src="{{ card.image }}" alt="" />
      <h1 class="md:pl-[6vh] text-4xl font-light pb-8 ">{{ card.title }}</h1>
      <p class="md:pl-[6vh]">{{ card.description }}</p>
    </div>
  `
})
export class CardComponent {
  @Input() card: any = {};
}
@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class CardModule {}
