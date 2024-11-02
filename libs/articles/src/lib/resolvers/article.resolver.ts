import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "../interfaces/article";
import { ArticleService } from "../services/article.service";
import { tap } from "rxjs";

export const articleResolver: ResolveFn<Article> = (
    route: ActivatedRouteSnapshot,
) => {
    const article = inject(ArticleService);

    return inject(HttpClient).get<Article>(`api/article/${route.paramMap.get('id')}`).pipe(
        tap(response => article.setArticles([response]))
    );
}

export const allArticleResolver: ResolveFn<Article[]> = () => {
    const article = inject(ArticleService);

    return inject(HttpClient).get<Article[]>('api/article/all').pipe(
        tap(articles => article.setArticles(articles))
    );
}
