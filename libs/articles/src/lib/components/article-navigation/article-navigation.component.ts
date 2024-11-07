import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { SectionNavigationService } from '../../services/section-navigation.service';
import { ClassBinder } from '@javascripthub/utils';
import { Article, ArticleSection } from '../../interfaces/article';

@Component({
  selector: 'jshub-article-navigation',
  standalone: true,
  templateUrl: './article-navigation.component.html',
  styleUrl: './article-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class ArticleNavigationComponent {
  public article = input.required<Article>();

  public sections = computed(() =>
    this.article().sections.filter((section) => section.navigatable)
  );

  public navigation = inject(SectionNavigationService);

  private _classBinder = inject(ClassBinder);

  constructor() {
    this._classBinder.bind('jshub-article-navigation');
  }

  public onSectionClick(section: ArticleSection): void {
    this.navigation.scrollInto(section);
  }
}
