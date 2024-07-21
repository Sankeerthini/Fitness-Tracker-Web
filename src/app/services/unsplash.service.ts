// src/app/services/unsplash.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private accessKey = 'woI15aYWpg7K0mvUnw2ZDcU74IYLui9Rv1JRL8U0TSA'; // Replace with your Unsplash access key

  constructor(private http: HttpClient) { }

  getPhotoById(photoId: string): Observable<string> {
    const url = `https://api.unsplash.com/photos/${photoId}?client_id=${this.accessKey}`;
    return this.http.get<any>(url).pipe(
      map(response => response.urls.regular)
    );
  }
}
