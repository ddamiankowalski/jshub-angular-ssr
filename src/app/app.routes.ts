import { Route } from '@angular/router';
import { NewsComponent } from './features/news/components/news/news.component';
import { newsResolver } from './features/news/resolvers/posts';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NewsComponent,
        resolve: { news: newsResolver }
    },
];