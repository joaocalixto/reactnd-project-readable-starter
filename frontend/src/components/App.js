import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoriesBar from './CategoriesBar';
import ListPost from './ListPost';
import ContentHeader from './ContentHeader';
import AppHeader from './AppHeader';
import { fetchPosts, fetchTodos } from '../actions'

import './App.css';


class App extends Component {

  render() {
    console.log("props", this.props);
    return (

      <div>
        <AppHeader/>

        <div className="Content">
            {/* List Header  */}
            <ContentHeader/>
            
            {/* List Categoria  */}
            <CategoriesBar/>

            {/* List Posts  */}
            <ListPost/>
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