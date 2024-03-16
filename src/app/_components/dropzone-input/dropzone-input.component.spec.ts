import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropzoneInputComponent } from './dropzone-input.component';

describe('DropzoneInputComponent', () => {
  let component: DropzoneInputComponent;
  let fixture: ComponentFixture<DropzoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropzoneInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropzoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
