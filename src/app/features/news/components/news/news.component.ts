import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "src/app/utils/services/class-binder.service";

@Component({
    standalone: true,
    selector: 'jshub-news',
    templateUrl: 'news.component.html',
    styleUrl: 'news.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ClassBinder]
})
export class NewsComponent {
    private _classBinder = inject(ClassBinder);

    constructor() {
        this._classBinder.bind('jshub-news');
    }
}