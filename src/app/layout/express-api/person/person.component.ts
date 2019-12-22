import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { TestService } from 'src/app/shared/services/test.service';
import { UrlEndpoint } from 'src/app/shared/util/url-endpoint';
import { Subscription, Subject, BehaviorSubject, of, Observable } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from '../../add/add.component';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  animations: [routerTransition()]
})
export class PersonComponent implements OnInit, OnDestroy {

  private searchKeyword: BehaviorSubject<String> = new BehaviorSubject('');

  public ngUnsubscribe = new Subject<void>();
  public busy: Subscription;

  public lstPerson;
  public lstPersonSliced;
  public lstPersonSlicedAndSearched;

  public editMode;

  private ngbModalRef: NgbModalRef;

  constructor(
    private testService: TestService,
    private messageService: MessageService,
    private ngbModal: NgbModal
  ) { }

  ngOnInit() {
  }

  search(keyword: string) {
    this.searchKeyword.next(keyword.trim().toUpperCase());
  }

  bindSearch(): void {
    this.lstPersonSlicedAndSearched = this.searchKeyword.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(keyword => keyword ? this.filterPerson(keyword) : of(this.lstPerson))
    ), catchError(error => {
      console.log(error);
      return of([]);
    });
  }

  filterPerson(keyword: any): Observable<any[]> {
    const filteredPerson = this.lstPerson.filter(person => person.first_nameAndlast_nameAndEmailAndGenderAndip_address.search(keyword) >= 0);
    return of(filteredPerson);
  }

  getPersons() {
    this.editMode = undefined;

    this.busy = this.testService.getPerson(UrlEndpoint.EXPRESS.PERSON.GET).pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe(objPersons => {
      objPersons.forEach(person => {
        person.first_nameAndlast_nameAndEmailAndGenderAndip_address = (person.first_name + person.last_name + person.email + person.gender + person.ip_address).toUpperCase();
      });

      // this.lstPerson = objPersons;
      this.bindSearch();

      this.lstPerson = objPersons;
      this.lstPersonSliced = this.lstPerson.slice(0, 10);
    });
  }

  openAddPersonWindow() {
    this.ngbModalRef = this.ngbModal.open(AddComponent, {size: 'lg', backdrop: 'static'});

    this.ngbModalRef.componentInstance.saveEvent.subscribe(
      () => {
        this.showSuccess('insert');
        this.getPersons();
      },
      () => {
        this.showError('insert');
      }
    );
  }

  update(item: any) {
    const data = {
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      gender: item.gender,
      ip_address: item.ip_address
    };

    this.testService.updatePerson(`${UrlEndpoint.EXPRESS.PERSON.DELETE}/${item.id}`, data).subscribe(
      () => {
        this.showSuccess('update');
        this.getPersons();
      },
      (error) => {
        this.showError('update');
      }
    );
  }

  delete(item: any) {
    this.testService.deletePerson(`${UrlEndpoint.EXPRESS.PERSON.DELETE}/${item.id}`).subscribe(
      () => {
        this.showSuccess('delete');
        this.getPersons();
      },
      () => {
        this.showError('delete');
      }
    );
  }

  edit(i: number) {
    this.editMode = i;
  }

  cancel() {
    this.editMode = undefined;
  }

  paginate(event: any) {
    this.lstPersonSliced = this.lstPerson.slice(event.first, event.first + event.rows);
  }

  showSuccess(type: string) {
    if(type === 'insert') {
      this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success!', detail: 'Person added successfully..' });
    } else if(type === 'update') {
      this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success!', detail: 'Person updated successfully..' });
    } else if(type === 'delete') {
      this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success!', detail: 'Person deleted successfully..' });
    }
  }

  showError(type: string) {
    if(type === 'insert') {
      this.messageService.add({ key: 'tc', severity: 'danger', summary: 'Error!', detail: 'An error was encountered while saving data..' });
    } else if(type === 'update') {
      this.messageService.add({ key: 'tc', severity: 'danger', summary: 'Error!', detail: 'An error was encountered while updating data..' });
    } else if(type === 'delete') {
      this.messageService.add({ key: 'tc', severity: 'danger', summary: 'Error!', detail: 'An error was encountered while deleting data..' });
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
