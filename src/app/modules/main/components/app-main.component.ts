import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KfAuthService } from 'kfhub_lib';

const DEFAULT_ROUTE_PATH = 'login';

@Component({
    selector: 'app-main',
    templateUrl: './app-main.component.html',
    styleUrls: ['./app-main.component.less']
})
export class AppMainComponent implements OnInit {
    constructor(
        private router: Router,
        private authService: KfAuthService,
    ) {}

    ngOnInit() {
        console.log('In ngOnInit of AppMainComponent...');
    }

    logout() {
        this.authService.removeSessionInfo().subscribe(() => {
            console.log('Removed Session Info', sessionStorage);
            sessionStorage.clear();
            console.log('Removed Session Info a second time', sessionStorage);
            this.router.navigate([DEFAULT_ROUTE_PATH]);
        });
    }
}
