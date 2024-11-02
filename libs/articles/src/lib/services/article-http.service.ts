import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Article } from "../interfaces";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ArticleHttpService {
    private _http = inject(HttpClient);
    
    public likeArticle$(id: string): Observable<Article> {
        return this._http.post<Article>(`api/article/${id}/like`, {});
    }
}