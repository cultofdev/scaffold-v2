import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-tax-mapping',
  templateUrl: './tax-mapping.component.html',
  styleUrls: ['./tax-mapping.component.scss'],
  animations: [routerTransition()]
})
export class TaxMappingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
