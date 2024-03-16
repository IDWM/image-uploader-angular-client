import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostService } from './_services/post.service';
import { Post } from './_models/post';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TextInputComponent } from './_components/text-input/text-input.component';
import { DropzoneModule } from './_modules/dropzone.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    DropzoneModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  posts$: Observable<Post[]> = new Observable<Post[]>();
  fileSelected: boolean = false;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadPosts();
  }

  initializeForm(): void {
    this.formGroup = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
      image: [null, Validators.required],
    });
  }

  loadPosts(): void {
    this.posts$ = this.postService.getPosts();
  }

  uploadPost(): void {
    if (this.formGroup.valid) {
      const formData = new FormData();
      formData.append('title', this.formGroup.value.title);
      formData.append('description', this.formGroup.value.description);
      formData.append('image', this.formGroup.value.image);

      this.loading = true;

      this.postService.createPost(formData).subscribe(() => {
        this.cancelUpload();
        this.loadPosts();
        this.loading = false;
      });
    }
  }

  cancelUpload(): void {
    this.formGroup.reset();
    this.fileSelected = false;
  }

  onFileSelected(file: File): void {
    this.formGroup.patchValue({ image: file });
    this.fileSelected = true;
  }
}
