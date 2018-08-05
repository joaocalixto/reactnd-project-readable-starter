import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-easy-grid';
import ItemPost from './ItemPost'

import { fetchPosts } from '../actions'

import './App.css'

class ListPost extends Component{

    componentDidMount(){
        this.props.loadPost()
    }
    handleClick = () => {
        console.log('Teste')
    }

    render(){
        return (
            <Col size={1}>
            {this.props.posts.posts && (
                this.props.posts.posts.map(post => (
                    <ItemPost key={post.id} post={post}/>
                ))
            )}
            </Col>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        loadPost: () => dispatch(fetchPosts({}))
    }
}

function mapStateToProps ({ categories, posts }) {
    return {
        posts
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPost)