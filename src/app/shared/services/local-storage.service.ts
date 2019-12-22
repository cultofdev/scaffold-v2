import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getUserName() {
    return localStorage.getItem('username');
  }

  getAccessToken() {
    return localStorage.getItem('token');
  }
}
