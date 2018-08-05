import { combineReducers } from 'redux';


import {
    FETCH_CATEGORIES,
    FETCH_POSTS
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

    switch (action.type) {
        case FETCH_POSTS :
            // getPosts
        console.log("state post", state);
        return {
            ...state,
            posts:action.posts 
        }
        default :
            return state
    }

}

export default combineReducers({
    categories,
    posts
})