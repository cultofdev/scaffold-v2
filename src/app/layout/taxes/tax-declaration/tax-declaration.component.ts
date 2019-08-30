import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { TestService } from 'src/app/shared/services/test.service';
import { UrlEndpoint } from 'src/app/shared/util/url-endpoint';

@Component({
  selector: 'app-tax-declaration',
  templateUrl: './tax-declaration.component.html',
  styleUrls: ['./tax-declaration.component.scss'],
  animations: [routerTransition()]
})
export class TaxDeclarationComponent implements OnInit {
  public lstPerson;

  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    this.getPerson();
  }

  getPerson() {
    this.lstPerson = this.testService.getPerson(UrlEndpoint.EXPRESS.PERSON);
  }

}
