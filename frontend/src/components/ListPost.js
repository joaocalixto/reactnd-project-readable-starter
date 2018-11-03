import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-easy-grid';
import ItemPost from './ItemPost'

import { fetchPosts } from '../actions'

import './App.css'

class ListPost extends Component{

    
    componentDidMount(){
        
        const category = this.props.category;
        this.props.loadPost(category)
    }

   

    handleClick = () => {
        console.log('Teste')
    }

    render(){
        console.log("posss", this.props.posts);
        return (
            <Col size={1}>
            {this.props.posts.showPosts && (
                this.props.posts.showPosts.map(post => (
                    <ItemPost key={post.id} post={post}/>
                ))
            )}
            </Col>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        loadPost: (category) => dispatch(fetchPosts(category)),
    }
}

function mapStateToProps ({ categories, posts }) {
    return {
        posts,
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPost)