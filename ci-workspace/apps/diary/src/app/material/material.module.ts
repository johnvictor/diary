import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const modules = [
  MatButtonModule,
  MatInputModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})

export class MaterialModule { }
