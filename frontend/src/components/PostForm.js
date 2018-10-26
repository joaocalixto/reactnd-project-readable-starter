
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Col, Row } from 'react-easy-grid';
import { fetchPosts, fetchTodos, addNewPost } from '../actions'
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TextareaAutosize from 'react-textarea-autosize';
import { withRouter } from 'react-router-dom'

import './App.css';

const uuid = require('uuid');

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          post: {}
        };
      }

componentDidMount(){
    this.props.loadCategories()
    this.props.loadPost().then(t => {
        
        if(this.props.match.params.id){
            const {id} = this.props.match.params;
            let post = t.posts.filter(p => (p.id === id));
            if(post.length > 0) post = post[0]

            console.log("post did mount", post);
            this.setState({
                post
            })
        }
    })
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
     console.log("post render", this.props.posts.posts);
     console.log("id render", this.props.match.params.id);
    return (
        <Row>
          
            <Col size={1}>
                    <h2>Create a Post</h2>
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>

                    <Row style={{margin:0}}>
                    
                        <TextField style={{width:300}}
                            inputRef={el => this.title = el} 
                            id="title"
                            label="Title"
                            value={this.state.post ? this.state.post.title : ""}
                            margin="normal"
                        />
                        </ Row>
                        <Row style={{marginTop:20}}>
                            <Col>
                                Body:
                                <TextareaAutosize style={{marginTop:20}}
                                    inputRef={el => this.body = el} 
                                    minRows={10}
                                    value={this.state.post ? this.state.post.body : ""}
                                    maxRows={6}
                                    defaultValue="Write your post..."
                                    />
                                </Col>
                        </Row>
                        <Row style={{margin:0}}>
                            <TextField
                            inputRef={el => this.author = el} 
                            id="author"
                            value={this.state.post ? this.state.post.author : ""}
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
                                value={this.state.post ? this.state.post.category : ""}
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
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm))