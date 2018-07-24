import { combineReducers } from 'redux';

import {
    FETCH_CATEGORIES,
    FETCH_POSTS
} from '../actions'

function categories (state = {}, action) {
    switch (action.type) {
        case FETCH_CATEGORIES :
            // getCategories
        return state
        default :
            return state
    }
}

function posts (state = {}, action){

    switch (action.type) {
        case FETCH_POSTS :
            // getPosts
        return state
        default :
            return state
    }

}

export default combineReducers({
    categories,
    posts
})