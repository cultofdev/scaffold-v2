import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TestService } from 'src/app/shared/services/test.service';
import { Person } from 'src/app/shared/model/person';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UrlEndpoint } from 'src/app/shared/util/url-endpoint';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Output() saveEvent = new EventEmitter;

  constructor(
    private testService: TestService,
    public ngbActiveModal: NgbActiveModal,
    public person: Person,
  ) {
  }

  ngOnInit() {
    this.person.id = undefined;
    this.person.firstName = undefined;
    this.person.lastName = undefined;
    this.person.email = undefined;
    this.person.gender = undefined;
    this.person.ipAddress = undefined;
  }

  save() {
    const param = {
      id: 3000,
      first_name: this.person.firstName,
      last_name: this.person.lastName,
      email: this.person.email,
      gender: this.person.gender,
      ip_address: this.person.ipAddress
    };

    this.testService.savePerson(UrlEndpoint.EXPRESS.PERSON.SAVE, param).subscribe(
      () => {
        this.saveEvent.next();
        this.ngbActiveModal.close();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
