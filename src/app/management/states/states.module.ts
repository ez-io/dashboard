import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootComponent} from './root/root.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {RouterModule, Routes} from '@angular/router';
import {MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule, MdSelectModule, MdTableModule} from '@angular/material';
import {CovalentSearchModule} from '@covalent/core';
import {FormsModule} from '@angular/forms';
import {BaseModule} from '../../base/base.module';
import {ModuleResolveService} from '../../base/services/resolves/module-resolve.service';
import {DeviceResolveService} from '../../base/services/resolves/device-resolve.service';
import {ModulesResolveService} from '../../base/services/resolves/modules-resolve.service';

const managementRoutes: Routes = [
    {
        path: 'manage', redirectTo: 'manage/list', pathMatch: 'full'
    },
    {
        path: 'manage',
        component: RootComponent,
        children: [
            {
                path: 'list',
                component: ListComponent,
                resolve: {'modules': ModulesResolveService}
            },
            {
                path: 'edit/:id',
                component: EditComponent,
                resolve: {'module': ModuleResolveService, 'deviceTypes': DeviceResolveService}
            }
        ]

    }
];

@NgModule({
    imports: [
        BaseModule,
        MdButtonModule,
        MdCardModule,
        FormsModule,
        MdTableModule,
        CovalentSearchModule,
        MdListModule,
        MdMenuModule,
        MdIconModule,
        MdSelectModule,
        CommonModule,
        MdInputModule,
        RouterModule.forChild(managementRoutes),
    ],
    declarations: [RootComponent, ListComponent, EditComponent]
})
export class StatesModule {
}
