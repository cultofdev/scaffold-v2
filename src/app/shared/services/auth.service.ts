import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject } from 'rxjs';

import { map } from 'rxjs/operators';
import { UrlEndpoint } from '../util/url-endpoint';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authState = new BehaviorSubject(false);

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
  ) { }

  validateToken() {
    if(this.localStorageService.getAccessToken()) {
      this.authState.next(true);
    }
  }

  login(params: any) {
    const data = {
      username: params.username,
      password: params.password,
    };

    return this.httpClient.post(UrlEndpoint.AUTH.LOGIN, data).pipe(
      map((result: any) => {
        const obj = Object.assign(result);

        localStorage.setItem('token', obj.token);

        this.authState.next(true);
      }
    ));
  }

  logout() {
    localStorage.clear();
    this.authState.next(false);
  }

  isUserAuthenticated() {
    return this.authState.value;
  }
}
