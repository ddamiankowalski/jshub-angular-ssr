import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "src/app/utils/services/class-binder.service";

@Component({
    standalone: true,
    selector: 'jshub-header-menu',
    templateUrl: 'header-menu.component.html',
    styleUrl: 'header-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [ClassBinder]
})
export class HeaderMenuComponent {
    public items = [
        'Tutorials',
        'Articles',
        'ECMAScript',
        'Angular'
    ];

    private _classBinder = inject(ClassBinder);

    constructor() {
        this._classBinder.bind('jshub-header-menu');
    }
}