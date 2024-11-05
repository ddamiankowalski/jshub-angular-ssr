import { ChangeDetectionStrategy, Component, inject, viewChildren, ViewEncapsulation } from "@angular/core";
import { ArticleTileComponent } from "../article-tile/article-tile.component";
import { JsonPipe } from "@angular/common";
import { Router } from "@angular/router";
import { Meta, Title } from "@angular/platform-browser";
import { ClassBinder } from "@javascripthub/utils";
import { ArticleService } from "../../services/article.service";

@Component({
    standalone: true,
    selector: 'jshub-articles-list',
    templateUrl: 'articles-list.component.html',
    styleUrl: 'articles-list.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ClassBinder],
    imports: [ArticleTileComponent, JsonPipe]
})
export class ArticlesListComponent {
    public article = inject(ArticleService)

    private _classBinder = inject(ClassBinder);
    private _router = inject(Router);
    private _title = inject(Title);
    private _meta = inject(Meta);

    private _tiles = viewChildren(ArticleTileComponent);

    constructor() {
        this._classBinder.bind('jshub-articles-list');

        this._title.setTitle(`jshub | articles`);
        this._meta.addTag({ name: "description", content: 'Damian Kowalski blog on JavaScript and Angular where you can learn about good code practices and new technology features.' });
    }

    public onArticleClick(id: string): void {
        const tiles = this._tiles();

        Promise.all(tiles.map((tile, index) => {
            if(tile.article()._id === id) {
                return tile.fade(index * 50 + 300)
            }

            return tile.fade(50)
        })).then(() => this._router.navigate(['/', 'article', id]))
    }
}
