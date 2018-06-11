import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

import { KfAuthService, KfRoutesService, KfAuthGuardService as AuthGuard } from 'kfhub_lib';
import { AppMainComponent } from './modules/main/components/app-main.component';

const INITIAL_ROUTE_PATH = 'main';
const DEFAULT_ROUTE_PATH = 'login';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private authService: KfAuthService,
        private routesService: KfRoutesService,
    ) {}

    ngOnInit() {
        this.router.resetConfig(this.getRoutes());
    }

    getRoutes(): Route[] {
        const routes: Route[] = [];
        routes.push(this.getInitialRoute());
        routes.push(...this.getKFRoutes());
        routes.push(...this.getAppRoutes());
        routes.push(this.getDefaultRoute());
        console.log('routes', routes);
        return routes;
    }

    getInitialRoute(): Route {
        return { path: '', redirectTo: INITIAL_ROUTE_PATH, pathMatch: 'full' };
    }

    getDefaultRoute(): Route {
        return { path: '**', redirectTo: DEFAULT_ROUTE_PATH, pathMatch: 'full' };
    }

    getKFRoutes(): Route[] {
        return this.routesService.getRoutes();
    }

    getAppRoutes(): Route[] {
        return [
            { path: INITIAL_ROUTE_PATH, component: AppMainComponent, canActivate: [ AuthGuard ] }
        ];
    }
}
