import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {EventBusService} from '../event-bus.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ModulesResolveService implements Resolve<any> {
    private _eb: EventBusService;

    constructor(eb: EventBusService) {
        this._eb = eb;
    }

    resolve(route: ActivatedRouteSnapshot) {

        return new Observable(o => {
            this._eb.send('modules.all', {}, (e, r) => {
                o.next(r.body);
                o.complete();
            });
        });
    }

}
