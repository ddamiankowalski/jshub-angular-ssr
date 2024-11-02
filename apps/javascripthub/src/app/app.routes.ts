import { Route } from '@angular/router';
import { allArticleResolver, ArticleComponent, articleResolver, ArticlesListComponent } from '@javascripthub/articles';

export const appRoutes: Route[] = [
    {
        path: '',
        component: ArticlesListComponent,
        resolve: { articles: allArticleResolver }
    },
    {
        path: 'article/:id',
        component: ArticleComponent,
        resolve: { article: articleResolver }
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];