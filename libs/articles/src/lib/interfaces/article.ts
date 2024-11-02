export type Article = {
    _id: string;
    title: string;
    image: string;
    likes: number;
    tags: string[];
    sections: ArticleSection[]
}

export type ArticleSection = {
    _id: string;
    category: SectionCategory;
    value: string;
    htmlId: string;
    navigatable: boolean;
    description?: string;
    sections: ArticleSection[];
}

export enum SectionCategory {
    Header = 'HEADER',
    Paragraph = 'PARAGRAPH',
    Code = 'CODE'
}