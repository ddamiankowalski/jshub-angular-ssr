import { ChangeDetectionStrategy, Component, computed, inject, ViewEncapsulation } from "@angular/core";
import { ClassBinder } from "../../../../utils/services/class-binder.service";
import { injectRouteData } from "ngxtension/inject-route-data";
import { ArticleInfoComponent } from "../article-info/article-info.component";
import { ArticleSectionComponent } from "../article-section/article-section.component";

@Component({
    standalone: true,
    selector: 'jshub-article',
    templateUrl: 'article.component.html',
    styleUrl: 'article.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [ArticleInfoComponent, ArticleSectionComponent],
    providers: [ClassBinder]
})
export class ArticleComponent {
    public routeData = injectRouteData();
    public article = computed(() => this.routeData()['article'])

    private _classBinder = inject(ClassBinder);

    constructor() {
        this._classBinder.bind('jshub-article')
    }
}