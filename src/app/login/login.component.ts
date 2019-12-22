import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/model/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public overpane: boolean;

    constructor(
      public router: Router,
      private authService: AuthService,
      public user: User,
    ) {}

    ngOnInit() {}

    toggleOverlayPanel() {
        this.overpane = !this.overpane;
    }

    onLoggedin() {
        const params = {
            username: this.user.username,
            password: this.user.password,
        };

        this.authService.login(params).subscribe(
            () => {
                this.router.navigate(['/dashboard']);
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
