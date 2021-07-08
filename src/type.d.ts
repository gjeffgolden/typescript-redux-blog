interface IArticle {
    id: number;
    title: string;
    body: string;
};

interface ArticleState {
    articles: IArticle[];
};

interface ArticleAction {
    type: string;
    article: IArticle;
};

type DispatchType = (action: ArticleAction) => ArticleAction;