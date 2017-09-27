import {Component} from '@angular/core';
import {ViewportService} from './services/viewport.service';

@Component({
    selector: 'ez-viewport',
    templateUrl: './viewport.component.html',
    styleUrls: ['./viewport.component.scss']
})
export class ViewportComponent {


    private _vpService: ViewportService;

    public columns = [
        {},
        {}
    ];

    constructor(viewportService: ViewportService) {
        this._vpService = viewportService;
    }

    get edit(): boolean {
        return this._vpService.editionMode;
    }

    addColumn() {
        this.columns.push({});
    }

    removeColumn(col: any) {
        this.columns.splice(this.columns.indexOf(col), 1);
    }
}
