
import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoriesBar from './CategoriesBar';
import ListPost from './ListPost';
import ContentHeader from './ContentHeader';
import AppHeader from './AppHeader';
import { Col, Row, Grid } from 'react-easy-grid';
import { fetchPosts, fetchTodos, addNewPost } from '../actions'
import TextField from '@material-ui/core/TextField';

import RaisedButton from 'material-ui/RaisedButton';
import TextareaAutosize from 'react-textarea-autosize';

import './App.css';

const uuid = require('uuid');



class PostForm extends Component {

    componentDidMount(){
        this.props.loadCategories()
        this.props.loadPost()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("target", this.title.value);
        let postObj = {
            id: uuid.v1(),
            title: this.title.value,
            body: this.body.value,
            timestamp: Date.now(),
            author: this.author.value,
            category: this.categorie.value
        }
        console.log("post", postObj);
        this.props.addPost(postObj)
    }

render() {
    return (
        
        <Row>
            <Col size={1}>
                    <h2>Create a Post</h2>
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>

                    <Row style={{margin:0}}>
                            <TextField
                            inputRef={el => this.title = el} 
                            id="title"
                            label="Title"
                            margin="normal"
                        />
                        </ Row>
                        <Row style={{marginTop:20}}>
                            <Col>
                                Body:
                                <TextareaAutosize style={{marginTop:20}}
                                    inputRef={el => this.body = el} 
                                    minRows={10}
                                    maxRows={6}
                                    defaultValue="Just a single line..."
                                    />
                                </Col>
                        </Row>
                        <Row style={{margin:0}}>
                            <TextField
                            inputRef={el => this.author = el} 
                            id="author"
                            label="Author"
                            margin="normal"
                            />
                        </ Row>
                        <Row style={{margin:0}}>
                            <TextField
                                inputRef={el => this.categorie = el} 
                                id="select-currency-native"
                                select
                                label="Categories"
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                    },
                                }}
                                helperText="Please select your categorie"
                                margin="normal"
                                >
                                
                                {
                                    this.props.categories.categories && (
                                        this.props.categories.categories.map(option => (
                                        <option key={option.name} value={option.path}>
                                        {option.path}
                                        </option>
                                )))}
                                </TextField>
                            </ Row>
                            
                            <RaisedButton label="Create" type="submit" primary={true} />

                    </form>
            </Col >
        </Row>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadCategories: () => dispatch(fetchTodos({})),
    loadPost: () => dispatch(fetchPosts({})),
    addPost: (post) => dispatch(addNewPost(post))
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
)(PostForm)