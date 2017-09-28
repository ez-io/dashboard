import {Injectable} from '@angular/core';
import {EventBusService} from './event-bus.service';

@Injectable()
export class BaseService {
    private _eb: EventBusService;

    private _unconfigModules = [];

    get uConfigModulesCount(): number {
        return this._unconfigModules.length;
    }

    get uDefinedModules(): any[] {
        return this._unconfigModules;
    }

    constructor(eb: EventBusService) {
        this._eb = eb;

        this._eb.open.subscribe((err) => {
            this._eb.registerHandler('module.new', (e, data) => {
                if (!e) {
                    this._unconfigModules.push(data.body);
                }
            });
            this._eb.publish('init', '');
        });
        this._eb.connect('http://localhost:8080/eventbus');
    }

}
