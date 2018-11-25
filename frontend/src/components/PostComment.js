import React, {Component} from 'react'
import { connect } from 'react-redux'
import Divider from '@material-ui/core/Divider';
import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import VoteComment from './VoteComment';
import { Col, Row } from 'react-easy-grid';
import Typography from '@material-ui/core/Typography';

import { fetchPosts } from '../actions'

import './App.css'

class PostComment extends Component{
    
    componentDidMount(){
        
    }
    handleClick = () => {
        console.log('Teste')
    }

    render() {
        const comments = this.props.comments;
        console.log("Coments inside = ",comments)
        return (
            
            <div>
                
                {comments != undefined && comments.length > 0 && (
                <div>
                    <Row id="commentsContainer">
                    <Row>
                        <Col size={2} >
                            <Typography component="p" 
                            style={{ marginTop:10}}> {comments.length} Comentarios </Typography>
                            <Divider style={{marginTop:10}}/>
                            <IconButton aria-label="Add to shopping cart" style={{marginTop:10}}>
                            <CommentIcon/>
                            </IconButton>
                        </Col>
                    </Row>
                </Row>
                {/* Coments */}
                <Row id="novos comentarios e lista">
                    <Col>
                        <Row style={{ marginLeft:7, backgroundColor:"#E1ECF4", paddingLeft:10, paddingRight:10}}>
                            <Col>
                                {  comments.map(comment => (
                                <Row style={{ marginBottom:5}}>
                                    <Col size={2} style={{ marginRight:20}}>
                                        <VoteComment comment={comment}/>
                                    </Col>
                                    <Col size={98} style={{ marginTop:18}}>
                                        <Typography variant="h4" gutterBottom> {comment.author} </Typography>
                                        <TextField
                                            id="outlined-multiline-flexible"
                                            disabled
                                            multiline
                                            rowsMax="4"
                                            value={comment.body}
                                            margin="normal"
                                            variant="outlined"
                                            />
                                        </Col>
                                    <Col size={5} style={{ paddingTop:20,paddingLeft:10,paddingRight:10}}>
                                        <a href="#" > Edit </a>
                                        <a href="#"> Delete </a>
                                    
                                    </Col>
                                </Row>
                                ))}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </div>)}
                
            </div>
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
)(PostComment)