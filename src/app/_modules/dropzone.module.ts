import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropzoneInputComponent } from '../_components/dropzone-input/dropzone-input.component';

@NgModule({
  declarations: [DropzoneInputComponent],
  exports: [DropzoneInputComponent],
  imports: [CommonModule],
})
export class DropzoneModule {}
