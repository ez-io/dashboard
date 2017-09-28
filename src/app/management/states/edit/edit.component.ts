import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventBusService} from '../../../base/services/event-bus.service';

@Component({
    selector: 'ez-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    public module: any;
    public deviceTypes: any;
    public newDevice: any;

    private _eb: EventBusService;

    constructor(route: ActivatedRoute, eb: EventBusService) {
        this.module = route.snapshot.data['module'];
        this.deviceTypes = route.snapshot.data['deviceTypes'];
        this._eb = eb;
        this.newDevice = {
            type: this.deviceTypes[0],
            id: null
        };
        console.log(this.module);
        console.log(this.deviceTypes);
    }

    ngOnInit() {
    }

    public addDevice(): void {
        if (!this.module.devices) {
            this.module.devices = [];
        }
        this.module.devices.push(this.newDevice);
        this.newDevice = {
            type: this.deviceTypes[0],
            id: null
        };
    }

    public save(): void {
        this._eb.send('modules.save', this.module, (e, d) => {
            if (!e) {
                console.log('ok');
            }
        });
    }

}
