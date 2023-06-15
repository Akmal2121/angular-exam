import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IphoneComponent } from './components/iphone/iphone.component';
import { AllCatComponent } from './components/allCategory/allCat.component';

const routes: Routes = [
  {
    path: '',
    component: IphoneComponent,
  },
  {
    path: 'allCategory',
    component: AllCatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
