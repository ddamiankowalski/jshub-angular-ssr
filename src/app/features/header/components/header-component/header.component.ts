import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "src/app/utils/services/class-binder.service";
import { HeaderMenuComponent } from "../header-menu/header-menu.component";
import { HeaderLogoComponent } from "../header-logo/header-logo.component";

@Component({
    standalone: true,
    selector: 'jshub-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [ClassBinder],
    imports: [HeaderLogoComponent ,HeaderMenuComponent]
})
export class HeaderComponent {
    private _classBinder = inject(ClassBinder);

    constructor() {
        this._classBinder.bind('jshub-header');
    }
}