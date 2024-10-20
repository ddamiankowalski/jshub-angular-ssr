import { Route } from '@angular/router';
import { NewsComponent } from './features/news/components/news/news.component';
import { newsResolver } from './features/news/resolvers/posts';
import { ArticleComponent } from './features/article/components/article/article.component';
import { articleResolver } from './features/article/resolvers/article';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NewsComponent,
        resolve: { news: newsResolver }
    },
    {
        path: 'article/:id',
        component: ArticleComponent,
        resolve: { articleInfo: articleResolver }
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];