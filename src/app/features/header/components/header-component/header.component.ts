import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "src/app/utils/services/class-binder.service";

@Component({
    standalone: true,
    selector: 'jshub-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [ClassBinder]
})
export class HeaderComponent {
    private _classBinder = inject(ClassBinder);

    constructor() {
        this._classBinder.bind('jshub-header');
    }
}