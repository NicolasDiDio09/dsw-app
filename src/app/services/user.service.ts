/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getUserByCredentials(email: string, password: string): Observable<JSON> {
    const body = { email: email, password: password };
    return this.http.post<JSON>(this.API + 'login', body);
  }

  saveUser(user: User): Observable<JSON> {
    return this.http.post<JSON>(this.API, user);
  }

  updateUser(user: User): Observable<JSON> {
    return this.http.put<JSON>(this.API, user);
  }
}
