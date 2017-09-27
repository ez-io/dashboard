import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'ez-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    data: any[];
    columnOptions: any[] = [{
        name: 'Updated',
        value: 'updated_at',
    }, {
        name: 'Created',
        value: 'created_at',
    }];
    sortKey: string = this.columnOptions[0].value;
    headers = {};
    pageSize = 5;

    ngOnInit(): void {
        this.columnOptions.forEach((option: any) => {
            this.headers[option.value] = 'asc';
        });
    }

    isASC(sortKey: string): boolean {
        return this.headers[sortKey] === 'asc';
    }

    sortBy(sortKey: string): void {
        let sortedData: any[];
        if (this.headers[sortKey] === 'asc') {
            this.headers[sortKey] = 'desc';
        } else {
            this.headers[sortKey] = 'asc';
        }

        this.data = sortedData;
    }

}
