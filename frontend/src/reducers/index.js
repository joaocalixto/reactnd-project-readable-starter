import { combineReducers } from 'redux';


import {
    FETCH_CATEGORIES,
    FETCH_POSTS,
    ADD_POST
} from '../actions'

function categories (state = {}, action) {
    switch (action.type) {
        case FETCH_CATEGORIES :
            // getCategories
            console.log("state cat", state);
        return {
            ...state,
            categories:action.todos.categories
        }
        
        default :
            return state
    }
}


function posts (state = {}, action){
    console.log("state post", state);
    switch (action.type) {
        case FETCH_POSTS :
            // getPosts
        return {
            ...state,
            posts:action.posts 
        }
        case ADD_POST:
        return {
            ...state,
            posts: state.posts.push(action.post)
        }
        default :
            return state
    }

}

export default combineReducers({
    categories,
    posts
})