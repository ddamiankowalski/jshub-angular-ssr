import { ResolveFn } from "@angular/router";
import { News } from "../types/news";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, of } from "rxjs";

export const newsResolver: ResolveFn<News[]> = () => {
    return inject(HttpClient).get<News[]>('api/article/all').pipe(catchError((err) => {
        console.log(err);
        return of([])
    }));
}