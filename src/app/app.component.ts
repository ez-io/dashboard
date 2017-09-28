import {Component} from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {TdMediaService} from '@covalent/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ViewportService} from './base/viewport/services/viewport.service';
import {BaseService} from './base/services/base.service';

@Component({
    selector: 'ez-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    routes: Object[] = [{
        icon: 'home',
        route: '.',
        title: 'Home',
    }, {
        icon: 'library_books',
        route: 'manage',
        title: 'Manage',
    }, {
        icon: 'color_lens',
        route: '.',
        title: 'Style Guide',
    }, {
        icon: 'view_quilt',
        route: '.',
        title: 'Layouts',
    }, {
        icon: 'picture_in_picture',
        route: '.',
        title: 'Components & Addons',
    },
    ];
    usermenu: Object[] = [{
        icon: 'swap_horiz',
        route: '.',
        title: 'Switch account',
    }, {
        icon: 'tune',
        route: '.',
        title: 'Account settings',
    }, {
        icon: 'exit_to_app',
        route: '.',
        title: 'Sign out',
    },
    ];
    private _vpService: ViewportService;
    private _baseService: BaseService;

    get newModuleCount(): number {
        return this._baseService.uConfigModulesCount;
    }

    constructor(public media: TdMediaService, private _iconRegistry: MdIconRegistry,
                private _domSanitizer: DomSanitizer, vpService: ViewportService, baseService: BaseService) {
        this._baseService = baseService;
        this._vpService = vpService;
        this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
            this._domSanitizer.bypassSecurityTrustResourceUrl(
                'https://raw.githubusercontent.com/Teradata/covalent-quickstart/develop/src/assets/icons/covalent.svg'));

    }

    public toggleVpSettings(): void {
        this._vpService.toggleEditionMode();
    }

}
