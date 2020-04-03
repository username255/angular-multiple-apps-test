import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [UiComponent],
  imports: [
    MatCardModule
  ],
  exports: [UiComponent]
})
export class UiModule { }
