import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-tax-receipt',
  templateUrl: './tax-receipt.component.html',
  styleUrls: ['./tax-receipt.component.scss'],
  animations: [routerTransition()]
})
export class TaxReceiptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
