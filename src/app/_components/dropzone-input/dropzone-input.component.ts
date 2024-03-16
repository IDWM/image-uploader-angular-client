import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropzone-input',
  templateUrl: './dropzone-input.component.html',
  styleUrls: ['./dropzone-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropzoneInputComponent),
      multi: true,
    },
  ],
})
export class DropzoneInputComponent implements ControlValueAccessor {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() type: string = 'file';
  @Input() accept: string = '*/*';
  @Input() multiple: boolean = false;
  @Output() fileSelected = new EventEmitter<File>();
  file: File | null = null;

  fileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      if (this.file) {
        this.fileSelected.emit(this.file);
      }
    }
  }

  writeValue(_obj: any): void {}
  registerOnChange(_fn: any): void {}
  registerOnTouched(_fn: any): void {}
  setDisabledState?(_isDisabled: boolean): void {}
}
