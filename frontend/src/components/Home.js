import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoriesBar from './CategoriesBar';
import ListPost from './ListPost';
import ContentHeader from './ContentHeader';
import { fetchPosts, fetchTodos } from '../actions'

import './App.css';


class Home extends Component {

  render() {
    console.log("props", this.props);
    return (

      <div>
        <ContentHeader/>
        
        {/* List Categoria  */}
        <CategoriesBar/>

        {/* List Posts  */}
        <ListPost/>
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
)(Home)