import {Injectable} from '@angular/core';

@Injectable()
export class ViewportService {

    private _editionMode = false;

    constructor() {
    }

    public toggleEditionMode(): boolean {
        return this._editionMode = !this._editionMode;
    }

    get editionMode(): boolean {
        return this._editionMode;
    }

    set editionMode(value: boolean) {
        this._editionMode = value;
    }
}
