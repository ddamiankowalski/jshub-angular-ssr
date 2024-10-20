import { ChangeDetectionStrategy, Component, computed, inject, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "../../../../utils/services/class-binder.service";
import { injectRouteData } from "ngxtension/inject-route-data";

@Component({
    standalone: true,
    selector: 'jshub-article',
    templateUrl: 'article.component.html',
    styleUrl: 'article.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ArticleComponent {
    public routeData = injectRouteData();
    public articleInfo = computed(() => this.routeData()['articleInfo'])

    private _classBinder = inject(ClassBinder);

    constructor() {
        this._classBinder.bind('jshub-article')
    }
}