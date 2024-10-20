import { ResolveFn } from "@angular/router";
import { Article } from "../types/article";

export const articleResolver: ResolveFn<Article> = () => {
    return Promise.resolve({ uuid: '1' })
}