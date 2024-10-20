import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "../../../../utils/services/class-binder.service";
import { NgIconComponent } from "@ng-icons/core";

@Component({
    standalone: true,
    selector: 'jshub-news-tile',
    templateUrl: 'news-tile.component.html',
    styleUrl: 'news-tile.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ClassBinder],
    imports: [NgIconComponent]
})
export class NewsTileComponent {
    private _classBinder = inject(ClassBinder);

    constructor() {
        this._classBinder.bind('jshub-news-tile');
    }
}