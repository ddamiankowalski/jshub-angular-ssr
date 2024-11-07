import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@javascripthub/utils';
import { NgIcon } from '@ng-icons/core';
import { Article } from '../../interfaces';
import { ArticleService } from '../../services/article.service';

@Component({
  standalone: true,
  selector: 'jshub-article-info',
  templateUrl: 'article-info.component.html',
  styleUrl: 'article-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
  imports: [NgIcon],
})
export class ArticleInfoComponent {
  public article = input.required<Article>();

  private _classBinder = inject(ClassBinder);
  private _article = inject(ArticleService);

  constructor() {
    this._classBinder.bind('jshub-article-info');
  }

  public onLikeClick(): void {
    const article = this.article();
    this._article.likeArticle(article._id);
  }
}
