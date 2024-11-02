import { inject, Injectable, Signal, signal } from "@angular/core";
import { Article } from "../interfaces";
import { ArticleHttpService } from "./article-http.service";

@Injectable({ providedIn: 'root' })
export class ArticleService {
    private _articles = signal<Article[]>([]);

    private _httpArticle = inject(ArticleHttpService);

    get all(): Signal<Article[]> {
        return this._articles;
    }

    public setArticles(articles: Article[]): void {
        this._articles.set(articles);
    }

    public likeArticle(id: string): void {
        this._httpArticle.likeArticle$(id).subscribe(article => this._replaceArticle(article))
    }

    private _replaceArticle(added: Article): void {
        this._articles.update(articles => {
            const existing = articles.find(article => article._id === added._id);

            if(!existing) {
                return [...articles, added];
            } else {
                return articles.map(article => (article._id === added._id ? added : { ...article }));
            }
        })
    }
}