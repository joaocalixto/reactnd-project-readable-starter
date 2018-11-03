import { combineReducers } from 'redux';
import sortBy from 'sort-by'

import {
    FETCH_CATEGORIES,
    FETCH_POSTS,
    ADD_POST,
    SORT_POST,
    VOTE_POST,
    DELETE_POST,
    FILTER_ADD_CATEGORY_POST,
    FILTER_REMOVE_CATEGORY_POST,
    FILTER_ADD_CATEGORY,
    FILTER_REMOVE_CATEGORY,
    VOTE_COMMENT
} from '../actions'

function categories (state = {}, action) {
    switch (action.type) {
        case FETCH_CATEGORIES :
        return {
            ...state,
            categories:action.todos.categories.map(category => (
                {
                    ...category,
                    selected: true
                }
            ))
        }
        case FILTER_ADD_CATEGORY:
        return {
            ...state,
            categories:state.categories.map(category => {
                if(category.name === action.name) return ({
                    ...category,
                    selected: true
                })
                else return category})
        }
        case FILTER_REMOVE_CATEGORY:
        return {
            ...state,
            categories:state.categories.map(category => {
                if(category.name === action.name) return ({
                    ...category,
                    selected: false
                })
                else return category})
        }

        default :
            return state
    }
}

function comments (state = {}, action) {
    switch (action.type) {
        
        default :
            return state
    }
}



function posts (state = {}, action){
    let showPosts
    switch (action.type) {
        case FETCH_POSTS :
            // getPosts
        return {
            ...state,
            posts:action.posts,
            showPosts: action.posts
        }
        case ADD_POST:
        return {
            ...state,
            posts: state.posts.push(action.post)
        }
        case SORT_POST:
        return {
            ...state,
            showPosts: state.showPosts.sort(sortBy(action.sortBy)),
            sortBy: action.sortBy
        }
        case VOTE_POST:
        return {
            ...state,
            posts: state.posts.map(post => {
                if(post.id === action.post.id) return action.post
                else return post
            }),
            showPosts: state.showPosts.map(post => {
                if(post.id === action.post.id) return action.post
                else return post
            })
        }
        case DELETE_POST:
        return {
            ...state,
            posts: state.posts.map(post => {
                if(post.id === action.post.id) return action.post
                else return post
            })
        }
        case FILTER_ADD_CATEGORY_POST:
        showPosts = addCatPost(state, action.name)
        return {
            ...state,
            showPosts,
        }
        case FILTER_REMOVE_CATEGORY_POST:
        showPosts = removeCatPost(state, action.name)
        return {
            ...state,
            showPosts
        }
        default :
            return state
    }

}

function addCatPost(state, name){
    let returned
    returned = state.showPosts
    returned = returned.concat(state.posts.filter(post => post.category === name))
    
    return returned
}

function removeCatPost(state, name){
    let returned
    if(!state.showPosts){
        returned = state.posts
    }else{
        returned = state.showPosts
    }
    returned = returned.filter(post => post.category !== name)
    return returned
}

export default combineReducers({
    categories,
    posts,
    comments
})