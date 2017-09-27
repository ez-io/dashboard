import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CovalentLayoutModule, CovalentMediaModule, CovalentMenuModule} from '@covalent/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdIconModule, MdMenuModule, MdButtonModule, MdListModule, MdToolbarModule, MdTooltipModule} from '@angular/material';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BaseModule} from './base/base.module';
import {ViewportComponent} from './base/viewport/viewport.component';
import {ManagementModule} from './management/management.module';

const appRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ViewportComponent
            },
            {
                path: '', redirectTo: 'login', pathMatch: 'full'
            }
        ]
    },
    // {path: '**', component: PageNotFoundComponent}
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BaseModule,
        ManagementModule,

        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        MdMenuModule,
        MdButtonModule,
        MdListModule,
        MdIconModule,
        MdToolbarModule,
        MdTooltipModule,
        CovalentMediaModule,
        CovalentMenuModule,
        CovalentLayoutModule,

        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
