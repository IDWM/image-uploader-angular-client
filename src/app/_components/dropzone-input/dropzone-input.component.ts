import { CommonModule } from '@angular/common';
import { Component, Input, Self } from '@angular/core';
import {
  ReactiveFormsModule,
  ControlValueAccessor,
  NgControl,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dropzone-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dropzone-input.component.html',
  styleUrl: './dropzone-input.component.css',
})
export class DropzoneInputComponent implements ControlValueAccessor {
  @Input() id: string = '';
  @Input() label: string = '';
  type: string = 'file';

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  writeValue(_obj: any): void {}
  registerOnChange(_fn: any): void {}
  registerOnTouched(_fn: any): void {}
  setDisabledState?(_isDisabled: boolean): void {}

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }
}
