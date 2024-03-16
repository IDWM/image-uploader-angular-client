import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../_models/post';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createPost(formData: FormData): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/post`, formData);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + '/post');
  }
}
