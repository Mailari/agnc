import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from '../utils/card.module';

@Component({
  selector: 'app-services',
  template: `
    <div class="px-[14%] mt-20">
      <div class="flex md:flex-row flex-col items-center justify-center">
        <p class="md:w-[15vw] text-4xl font-light text-[#131B42]">Our Best Services</p>
        <p class="md:w-[70%] md:pl-[10%] py-10">
          A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always
          does one good.
        </p>
      </div>
      <div class="flex md:flex-row flex-col justify-between">
        <app-card *ngFor="let item of items" [card]="item"></app-card>
      </div>
      <div class="relative">
        <div class="px-[5%] mt-[20%] absolute flex md:flex-row flex-col ">
          <img class="md:w-[60%]" src="assets/b2.svg" alt="" />
          <div class="md:pl-[8%] flex flex-col justify-center">
            <p class="text-3xl font-light mb-2 text-[#131B42]">We had left the ground</p>
            <p class="text-xs tracking-loose py-5">
              I shall see the face of Mars, anyhow, and that will be a rare experience. It seems to me that a view of the heavenly bodies through a fine telescope, as well as a
              tour round the world, should form a part of a liberal education.
            </p>
            <div class="flex flex-row items-center" *ngFor="let item of comments">
              <img class="h-[3vh]" src="assets/r4.svg" alt="" />
              <p class="p-[1.5vh]">{{ item }}</p>
            </div>
            <button class="my-5"><span class="text-[#FB7846]   px-8 p-2 border-2 border-[#F87853] hover:border-green-200 text-xs rounded-md">Explore</span></button>
          </div>
        </div>
        <img class="md:ml-[-48vh] ml-[-10vh]" src="assets/o1.svg" alt="" />
      </div>
      <div class="md:hidden h-[80vh]"></div>
      <div class="relative bg-gradient-to-bl from-pink-200 via-purple-100 to-indigo-200 mx-[-20%] px-[17%] pt-[15%] my-[10%] py-[10%]">
        <p class="font-light text-5xl mb-[10vh] ">Features</p>
        <div class="flex flex-col md:flex-row flex-wrap justify-between md:mr-20">
          <app-card *ngFor="let feature of features" [card]="feature" [h]="true"></app-card>
        </div>
        <img class="absolute top-0 right-0 mt-[-20%] mr-[-20%]" src="assets/c1.svg" alt="" />
      </div>
    </div>
  `
})
export class ServicesComponent {
  items = [
    { image: 'assets/r1.svg', title: 'Marketing', description: 'Minuteness of the parts formed a great hindrance to my speed' },
    { image: 'assets/r2.svg', title: 'Design', description: 'Formed a great hindrance to my speed, contrary to my first' },
    { image: 'assets/r3.svg', title: 'Development', description: 'Great hindrance to my speed resolved, contrary to my first intention' }
  ];
  features = [
    { image: 'assets/f1.svg', title: 'Email Marketing', description: 'Minuteness of the parts formed a great hindrance to my speed' },
    { image: 'assets/f2.svg', title: 'User analytics ', description: 'Great hindrance to my speed resolved, contrary to my first intention' },
    { image: 'assets/f3.svg', title: 'Security', description: 'Minuteness of the parts formed a great hindrance to my speedt' },
    { image: 'assets/f4.svg', title: 'Integrations', description: 'Great hindrance to my speed resolved, contrary to my first intention' },
    { image: 'assets/f5.svg', title: 'Community', description: 'Great hindrance to my speed resolved, contrary to my first intention' },
    { image: 'assets/f6.svg', title: 'Support', description: 'Great hindrance to my speed resolved, contrary to my first intention' }
  ];

  comments = ['Truly it was a great journey', "I'm sure it was a great journey", 'I was so happy to be there'];
}

@NgModule({
  declarations: [ServicesComponent],
  exports: [ServicesComponent],
  imports: [CardModule, CommonModule, RouterModule.forChild([{ path: '', component: ServicesComponent }])]
})
export class ServicesModule {}
