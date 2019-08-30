import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPerson(url: string) {
    return this.httpClient.get(url);
  }
}
