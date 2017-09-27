import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewportComponent} from './viewport/viewport.component';
import {MdButtonModule, MdCardModule, MdIconModule, MdListModule} from '@angular/material';
import {CovalentLayoutModule, CovalentMediaModule} from '@covalent/core';
import {RouterModule} from '@angular/router';
import {DragulaModule} from 'ng2-dragula';
import {ViewportService} from './viewport/services/viewport.service';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        DragulaModule,
        CovalentMediaModule,
        CovalentLayoutModule,
        MdButtonModule,
        MdIconModule,
        MdCardModule,
        MdListModule
    ],
    declarations: [ViewportComponent],
    providers: [ViewportService],
    exports: [ViewportComponent]
})
export class BaseModule {
}
