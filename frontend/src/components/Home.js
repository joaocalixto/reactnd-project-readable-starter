import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoriesBar from './CategoriesBar';
import ListPost from './ListPost';
import ContentHeader from './ContentHeader';
import { fetchPosts, fetchTodos } from '../actions'
import { withRouter } from 'react-router-dom'


import './App.css';


class Home extends Component {

  render() {
    const {category} = this.props.match.params;
    return (

      <div>
        <ContentHeader/>
        
        {/* List Categoria  */}
        <CategoriesBar category={category}/>

        {/* List Posts  */}
        <ListPost category={category}/>
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
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home))