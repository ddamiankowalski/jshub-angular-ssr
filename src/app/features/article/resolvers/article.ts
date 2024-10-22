import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Article } from "../types/article";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export const articleResolver: ResolveFn<Article> = (
    route: ActivatedRouteSnapshot,
) => {
    return inject(HttpClient).get<Article>(`api/article/${route.paramMap.get('id')}`);
}