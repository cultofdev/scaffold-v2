import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  private collapsedState = new BehaviorSubject<boolean>(false);
  currentState = this.collapsedState.asObservable();

  constructor() { }

  changeState(collapsed: boolean) {
    this.collapsedState.next(collapsed);
  }
}
