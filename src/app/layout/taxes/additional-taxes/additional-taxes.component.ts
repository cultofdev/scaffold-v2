import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-additional-taxes',
  templateUrl: './additional-taxes.component.html',
  styleUrls: ['./additional-taxes.component.scss'],
  animations: [routerTransition()]
})
export class AdditionalTaxesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
