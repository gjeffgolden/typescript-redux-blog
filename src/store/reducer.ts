import * as actionTypes from './actionTypes';

const initialState: ArticleState = {
    articles: [
        {
            id: 1, 
            title: "Post 1",
            body: "Hello, world!"
        },
        {
            id: 2,
            title: "Post 2",
            body: "Goodbye, world!"
        }
    ]
}

export const articleReducer = (state = initialState, action: ArticleAction) => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body
            };
            return {...state, articles: state.articles.concat(newArticle)};
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles: IArticle[] = state.articles.filter(
                article => article.id !== action.article.id
            );
            return {...state, articles: updatedArticles};
    }
    return state;
}