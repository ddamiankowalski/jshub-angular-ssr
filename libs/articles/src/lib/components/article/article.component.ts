import { AfterViewInit, ChangeDetectionStrategy, Component, computed, inject, ViewEncapsulation } from "@angular/core";
import { ArticleInfoComponent } from "../article-info/article-info.component";
import { ArticleSectionComponent } from "../article-section/article-section.component";
import { NgStyle } from "@angular/common";
import { ArticleAuthorComponent } from "../article-author/article-author.component";
import { Meta, Title } from "@angular/platform-browser";
import { ArticleNavigationComponent } from "../article-navigation/article-navigation.component";
import { ClassBinder } from "@javascripthub/utils";
import { ArticleService } from "../../services/article.service";
import { injectParams } from 'ngxtension/inject-params';
import { NavigationPage } from "@javascripthub/navigation";

@Component({
    standalone: true,
    selector: 'jshub-article',
    templateUrl: 'article.component.html',
    styleUrl: 'article.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [
        ArticleInfoComponent,
        ArticleSectionComponent,
        NgStyle,
        ArticleAuthorComponent,
        ArticleNavigationComponent
    ],
    providers: [ClassBinder]
})
export class ArticleComponent extends NavigationPage implements AfterViewInit {
    public routeParam = injectParams('id');

    public article = computed(() => {
        const all = this._article.all();
        return all.find(article => article._id === this.routeParam())
    })

    public url = computed(() => {
        const article = this.article();

        if(!article) {
            return '';
        }

        return `api/assets/${article.image}.webp`;
    });

    private _article = inject(ArticleService);
    private _classBinder = inject(ClassBinder);
    private _title = inject(Title);
    private _meta = inject(Meta);

    constructor() {
        super();
        this._classBinder.bind('jshub-article');
    }

    public ngAfterViewInit(): void {
        const article = this.article()

        if(article) {
            const title = article.title;

            this._title.setTitle(`jshub | ${title}`);
            this._meta.addTag({ name: "description", content: title });
        }
    }

    protected override _fadeOut(): Promise<Animation> {
      const keyframes = [
          { opacity: 1 },
          { opacity: 0 }
      ];

      const options = {
          duration: 250,
          iterations: 1,
          fill: 'forwards' as FillMode,
      }

      const animation = this._elementRef.nativeElement.animate(keyframes, options);
      return animation.finished;
    }
}
