import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'ez-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    public modules = [];

    constructor(route: ActivatedRoute) {
        this.modules = route.snapshot.data['modules'];
    }

    ngOnInit(): void {
    }

}
