import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPerson(url: string): any {
    return this.httpClient.get(url);
  }

  savePerson(url: string, data: any) {
    return this.httpClient.post(url, data);
  }

  updatePerson(url: string, data: any) {
    return this.httpClient.put(url, data);
  }

  deletePerson(url: string) {
    return this.httpClient.delete(url);
  }

  getAddress(url: string) {
    return this.httpClient.get(url);
  }

  saveAddress(url: string, data: any) {
    return this.httpClient.post(url, data);
  }

  updateAddress(url: string, data: any) {
    return this.httpClient.put(url, data);
  }

  deleteAddress(url: string) {
    return this.httpClient.delete(url);
  }

  getStock(url: string) {
    return this.httpClient.get(url);
  }

  saveStock(url: string, data: any) {
    return this.httpClient.post(url, data);
  }

  updateStock(url: string, data: any) {
    return this.httpClient.put(url, data);
  }

  deleteStock(url: string) {
    return this.httpClient.delete(url);
  }

  getCar(url: string) {
    return this.httpClient.get(url);
  }

  saveCar(url: string, data: any) {
    return this.httpClient.post(url, data);
  }

  updateCar(url: string, data: any) {
    return this.httpClient.put(url, data);
  }

  deleteCar(url: string) {
    return this.httpClient.delete(url);
  }
}
