import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewportComponent} from './viewport/viewport.component';
import {MdButtonModule, MdCardModule, MdIconModule, MdListModule} from '@angular/material';
import {CovalentLayoutModule, CovalentMediaModule} from '@covalent/core';
import {RouterModule} from '@angular/router';
import {DragulaModule} from 'ng2-dragula';
import {ViewportService} from './viewport/services/viewport.service';
import {EventBusService} from './services/event-bus.service';
import {BaseService} from './services/base.service';
import {ModuleResolveService} from "app/base/services/resolves/module-resolve.service";
import {DeviceResolveService} from './services/resolves/device-resolve.service';
import {ModulesResolveService} from './services/resolves/modules-resolve.service';

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
    providers: [ViewportService, EventBusService, BaseService, ModuleResolveService, ModulesResolveService, DeviceResolveService],
    exports: [ViewportComponent]
})
export class BaseModule {
    constructor(base: BaseService) {
    }
}
