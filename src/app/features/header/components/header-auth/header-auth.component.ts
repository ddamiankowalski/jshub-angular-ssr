import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "src/app/utils/services/class-binder.service";

@Component({
    standalone: true,
    selector: 'jshub-header-auth',
    templateUrl: 'header-auth.component.html',
    styleUrl: 'header-auth.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderAuthComponent {
    private _classBinder = inject(ClassBinder);

    constructor() {
        this._classBinder.bind('jshub-header-auth');
    }
}