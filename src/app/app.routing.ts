import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { RegisterComponent } from './register';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);