import { ResolveFn } from "@angular/router";
import { News } from "../types/news";

export const newsResolver: ResolveFn<News[]> = () => {
    return Promise.resolve([
        { uuid: '1' },
        { uuid: '2' },
        { uuid: '3' }
    ])
}