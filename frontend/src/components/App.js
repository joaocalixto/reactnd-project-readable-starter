import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppHeader from './AppHeader';
import { fetchPosts, fetchTodos } from '../actions'
import PostForm from './PostForm'
import Home from './Home'

import {Route, Switch} from 'react-router-dom';

import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        <AppHeader/>
          <div className="Content">
            <Switch>
              <Route exact path='/post' render={() => (
                <PostForm/>
              )}/>

              <Route path='/post/:id' component={PostForm}/>

              <Route exact path='/' render={() => (
                <Home/>
              )}/>

              <Route exact path='/:category' render={() => (
                <Home/>
              )}/>
            </Switch>
          </div>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadCategories: () => dispatch(fetchTodos({})),
    loadPost: () => dispatch(fetchPosts({}))
  }
}

function mapStateToProps ({ categories, posts }) {
  return {
    categories,
    posts
  }
  
}
// export default App;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)