import {
  ChangeDetectionStrategy,
  Component,
  inject,
  viewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { ArticleTileComponent } from '../article-tile/article-tile.component';
import { Meta, Title } from '@angular/platform-browser';
import { ClassBinder } from '@javascripthub/utils';
import { ArticleService } from '../../services/article.service';
import { NavigationPage } from '@javascripthub/navigation';

@Component({
  standalone: true,
  selector: 'jshub-articles-list',
  templateUrl: 'articles-list.component.html',
  styleUrl: 'articles-list.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder],
  imports: [ArticleTileComponent],
})
export class ArticlesListComponent extends NavigationPage {
  public article = inject(ArticleService);

  protected override _route = '';

  private _classBinder = inject(ClassBinder);
  private _title = inject(Title);
  private _meta = inject(Meta);

  private _tiles = viewChildren(ArticleTileComponent);

  constructor() {
    super();

    this._classBinder.bind('jshub-articles-list');
    this._setMeta();
  }

  public onArticleClick(id: string): void {
    this._navigation.navigate(['/', 'article', id], id);
  }

  protected override _fadeOut(args: unknown[]): Promise<Animation[]> {
    const tiles = this._tiles();
    const [id] = args;

    return Promise.all(
      tiles.map((tile, index) => {
        if (tile.article()._id === id) {
          return tile.fade(index * 50 + 300);
        }

        return tile.fade(50);
      }),
    );
  }

  private _setMeta(): void {
    this._title.setTitle(`jshub | articles`);
    this._meta.addTag({
      name: 'description',
      content:
        'Explore JavaScript Hub, your ultimate destination for in-depth articles, tutorials, and tips on JavaScript development. Stay updated with the latest trends and enhance your coding skills today!',
    });
  }
}
