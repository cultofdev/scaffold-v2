import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService,
    ) {}

    canActivate() {
        if(this.authService.isUserAuthenticated()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
