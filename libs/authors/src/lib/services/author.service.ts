import { inject, Injectable } from '@angular/core';
import { Author } from '../interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthorService {
  private _http = inject(HttpClient);

  public getAll$(): Observable<Author[]> {
    return this._http.get<Author[]>('api/author/all');
  }
}
