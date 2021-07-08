import * as actionTypes from "./actionTypes";

export const addArticle = (article: IArticle) => {
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article
    };
    return dispatchAction(action)
};

export const removeArticle = (article: IArticle) => {
    const action: ArticleAction = {
        type: actionTypes.REMOVE_ARTICLE,
        article
    };
    return dispatchAction(action)
};

export const dispatchAction = (action: ArticleAction) => (dispatch: DispatchType) => dispatch(action);