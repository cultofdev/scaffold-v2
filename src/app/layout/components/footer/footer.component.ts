import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from 'src/app/shared/services/communicator.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  collapsed: boolean;

  constructor(
    private communicatorService: CommunicatorService
  ) {}

  ngOnInit() {
    this.communicatorService.currentState.subscribe(state => this.collapsed = state);
  }
}
