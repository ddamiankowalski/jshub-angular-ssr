import { Route } from '@angular/router';
import { NewsComponent } from './features/news/components/news/news.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NewsComponent
    }
];
