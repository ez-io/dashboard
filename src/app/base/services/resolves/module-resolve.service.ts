import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {BaseService} from '../base.service';
import {EventBusService} from '../event-bus.service';

@Injectable()
export class ModuleResolveService implements Resolve<any> {
    private _bs: BaseService;
    private _eb: EventBusService;

    constructor(bs: BaseService, eb: EventBusService) {
        this._bs = bs;
        this._eb = eb;
    }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.params['id'];

        return new Observable(o => {
            if (+id === 0) {
                o.next(this._bs.uDefinedModules[0]);
                o.complete();
            } else {
                this._eb.send('module.' + id + '.load', {}, (e, r) => {
                    o.next(r);
                    o.complete();
                });
            }
        });
    }
}
