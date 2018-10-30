
import * as CategoriesAPI from '../utils/CategoriesAPI'
import * as PostsAPI from '../utils/PostsAPI'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POST = 'ADD_POST'
export const SORT_POST = 'SORT_POST'
export const VOTE_POST = 'VOTE_POST'
export const DELETE_POST = 'DELETE_POST'

export const FILTER_ADD_CATEGORY_POST = 'FILTER_ADD_CATEGORY_POST'
export const FILTER_ADD_CATEGORY = 'FILTER_ADD_CATEGORY'

export const FILTER_REMOVE_CATEGORY_POST = 'FILTER_REMOVE_CATEGORY_POST'
export const FILTER_REMOVE_CATEGORY = 'FILTER_REMOVE_CATEGORY'

export function filterRemoveCategoryPosts (name) {
    return {
        type: FILTER_REMOVE_CATEGORY_POST,
        name
    }
}
export function filterRemoveCategories (name) {
    return {
        type: FILTER_REMOVE_CATEGORY,
        name
    }
}
export function filterAddCategoryPosts (name) {
    return {
        type: FILTER_ADD_CATEGORY_POST,
        name
    }
}
export function filterAddCategories (name) {
    return {
        type: FILTER_ADD_CATEGORY,
        name
    }
}

export function deletePosts (post) {
    return {
        type: DELETE_POST,
        post
    }
}

export function votePosts (post) {
    return {
        type: VOTE_POST,
        post
    }
}

export function sortPosts (sortBy) {
    return {
        type: SORT_POST,
        sortBy
    }
}

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
export const sort = (sortby) => dispatch => (
    dispatch(sortPosts(sortby))
);
export const filterAddCategoryPost = (name) => {
    //dispatch(filterAddCategoryPosts(name)).then(dispatch(filterAddCategories(name)) 
    return dispatch => {
        dispatch(filterAddCategoryPosts(name))
        dispatch(filterAddCategories(name))
    }   
};
export const filterRemoveCategoryPost = (name) => {
    // dispatch(filterRemoveCategoryPosts(name)).then(filterRemoveCategories(name)) 
    return dispatch => {
        dispatch(filterRemoveCategoryPosts(name))
        dispatch(filterRemoveCategories(name))
    } 
};

export const votePost = (post,type) => dispatch => (
    PostsAPI
        .vote(post, type)
        .then(post => dispatch(votePosts(post)))
  );

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
export const deletePost = (post) => dispatch => (
    PostsAPI
        .deletePost(post)
        .then(newPost => dispatch(deletePosts(newPost)))
);