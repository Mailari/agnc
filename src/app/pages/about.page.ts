import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="h-full mt-[-15%]  pt-[15%] bg-gradient-to-bl from-red-200 to-blue-100 ">
      <div class="flex md:flex-row px-[10%] flex-col justify-center items-center">
        <div class="md:w-[30vw] ">
          <p class="text-2xl text-orange-400 py-5">Creative Agency</p>
          <p class="text-4xl font-light tracking-widest md:w-[22vw]">We Make Websites.</p>
          <br />
          <p>The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime.</p>
          <button class="mt-5 ">
            <span class="bg-orange-400 rounded-md text-white  py-2 px-3">Explore Our Work</span>
          </button>
        </div>
        <img class="h-[55vh]  " src="/assets/b.svg" alt="" />
      </div>
    </div>
    <div class="flex flex-col justify-center my-10 px-[15%] ">
      <img class="text-center" src="assets/cs.svg" alt="" />
      <div class="h-[20vh]"></div>
    </div>
  `
})
export class AboutComponent {}

@NgModule({
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule {}
