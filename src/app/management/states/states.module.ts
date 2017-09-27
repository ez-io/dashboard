import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RootComponent} from './root/root.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {RouterModule, Routes} from '@angular/router';
import {MdButtonModule, MdCardModule, MdIconModule, MdListModule, MdMenuModule, MdSelectModule} from '@angular/material';
import {CovalentSearchModule} from '@covalent/core';
import {FormsModule} from '@angular/forms';

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
                component: ListComponent
            },
            {
                path: 'edit/:id',
                component: EditComponent
            }
        ]

    }
];

@NgModule({
    imports: [
        MdButtonModule,
        MdCardModule,
        FormsModule,
        CovalentSearchModule,
        MdListModule,
        MdMenuModule,
        MdIconModule,
        MdSelectModule,
        CommonModule,
        RouterModule.forChild(managementRoutes),
    ],
    declarations: [RootComponent, ListComponent, EditComponent]
})
export class StatesModule {
}
