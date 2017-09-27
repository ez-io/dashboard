import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CovalentLayoutModule, CovalentMediaModule, CovalentMenuModule} from '@covalent/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdIconModule, MdMenuModule, MdButtonModule, MdListModule, MdToolbarModule, MdTooltipModule} from '@angular/material';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BaseModule} from './base/base.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BaseModule,
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

        RouterModule.forRoot([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
