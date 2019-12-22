import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from 'src/app/shared/services/test.service';
import { Subject, Subscription } from 'rxjs';
import { UrlEndpoint } from 'src/app/shared/util/url-endpoint';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  animations: [routerTransition()]
})
export class AddressComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject<void>();

  public busy: Subscription;

  public lstAddress;

  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
  }

  getAddress() {
    this.busy = this.testService.getAddress(UrlEndpoint.EXPRESS.ADDRESS).pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe(objAddress => {
      this.lstAddress = objAddress;
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
