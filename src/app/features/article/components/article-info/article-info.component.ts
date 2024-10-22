import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "../../../../utils/services/class-binder.service";
import { NgIcon } from "@ng-icons/core";

@Component({
    standalone: true,
    selector: 'jshub-article-info',
    templateUrl: 'article-info.component.html',
    styleUrl: 'article-info.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [ClassBinder],
    imports: [NgIcon]
})
export class ArticleInfoComponent {
    private _classBinder = inject(ClassBinder);

    constructor() {
        this._classBinder.bind('jshub-article-info');
    }
}