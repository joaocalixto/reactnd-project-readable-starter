
import * as CategoriesAPI from '../utils/CategoriesAPI'
import * as PostsAPI from '../utils/PostsAPI'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POST = 'ADD_POST'


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

export function addPost (post) {
    return {
        type: ADD_POST,
        post
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
export const addNewPost = (post) => dispatch => (
    PostsAPI
        .add(post)
        .then(newPost => dispatch(addPost(newPost)))
);