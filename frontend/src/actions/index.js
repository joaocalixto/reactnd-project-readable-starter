
import * as CategoriesAPI from '../utils/CategoriesAPI'
import * as PostsAPI from '../utils/PostsAPI'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS = 'FETCH_POSTS'




export function fetchCategories (todos) {
    return {
        type: FETCH_CATEGORIES,
        todos
    }
}

export function getAll (posts) {
    return {
        type: FETCH_POSTS,
        posts
    }
}

export const fetchTodos = () => dispatch => (
    CategoriesAPI
        .getAll()
        .then(todos => dispatch(fetchCategories(todos)))
  );
export const fetchPosts = () => dispatch => (
    PostsAPI
        .getAll()
        .then(posts => dispatch(getAll(posts)))
);