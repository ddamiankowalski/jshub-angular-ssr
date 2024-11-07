import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { NgStyle } from '@angular/common';
import { ClassBinder } from '@javascripthub/utils';
import { Article } from '../../interfaces';
import { ArticleHttpService } from '../../services/article-http.service';

@Component({
  standalone: true,
  selector: 'jshub-article-tile',
  templateUrl: 'article-tile.component.html',
  styleUrl: 'article-tile.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClassBinder],
  imports: [NgIconComponent, NgStyle],
})
export class ArticleTileComponent {
  public articleClick = output<string>();
  public article = input.required<Article>();

  public url = computed(() => {
    const article = this.article();
    return `api/assets/${article.image}.webp`;
  });

  private _classBinder = inject(ClassBinder);
  private _elementRef = inject(ElementRef);
  private _articleHttp = inject(ArticleHttpService);

  private get _nativeElement(): HTMLElement {
    return this._elementRef.nativeElement;
  }

  constructor() {
    this._classBinder.bind('jshub-article-tile');
  }

  public onArticleClick(): void {
    this.articleClick.emit(this.article()._id);
  }

  public onLikeClick(): void {
    const article = this.article();
    this._articleHttp.likeArticle$(article._id);
  }

  public fade(delay = 0): Promise<Animation> {
    const keyframes = [{ opacity: 1 }, { opacity: 0 }];

    const options = {
      duration: 250,
      iterations: 1,
      fill: 'forwards' as FillMode,
      delay,
    };

    const animation = this._nativeElement.animate(keyframes, options);
    return animation.finished;
  }
}
