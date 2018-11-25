import React, {Component} from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from 'material-ui/Chip';
import { Col, Row } from 'react-easy-grid';
import { withRouter } from 'react-router-dom'


import * as CommentsAPI from '../utils/CommentsAPI'
import VotePost from './VotePost';
import PostComment from './PostComment';

import moment from 'moment';

import './App.css'

class ItemPost extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          open: false,
          paperColor: "white",
          paperCursor: "auto",
          comments: [],
        };
      }

      mouseEnter = () =>{
        console.log('mouse enter')
        this.setState({
          paperColor: "#EBEBEB",
          paperCursor: "pointer"
        })
    };
    componentDidMount(){
      CommentsAPI.get(this.props.post.id).then(comments =>  
        {
          this.setState({comments})
        }
      );
    }

    mouseLeave = () => {
        console.log('mouse leave')
        this.setState({
          paperColor: "white",
          paperCursor: "auto"
        })
    }

    componentWillReceiveProps(props) {
      console.log("recive props");
      this.refreshShoeList();
    }


    navigate = (post) => {
      console.log("post navigate", post);
      this.props.history.push(`/post/${post.id}`)
    }
    delete = (post) => {
      this.props.delete(post)
    }
  render(){
        const {post} = this.props
        console.log("comments", this.state.comments);
        return (
            <Paper elevation={1} style={{
                marginTop:30, padding: 20, 
                
                }} >
                <Row style={{  minHeight:150 }}>
                  <Col size={10} >
                    <VotePost post={post}/>
                  </Col>
                  <Col size={100}>
                      <Col size={90} onClick={() => {this.navigate(post)} } onMouseEnter={this.mouseEnter} 
                      onMouseLeave={this.mouseLeave} 
                      style={{backgroundColor:this.state.paperColor, 
                      cursor:this.state.paperCursor, marginRight:20 }}> 
                      <Typography variant="headline" component="h3">
                          {post.title}
                      </Typography>
                      <Typography component="p">
                        {post.body}
                      </Typography>
                      <Chip style={ { margin: "12px", marginRight:"0px" }}>
                          {post.category}
                      </Chip>
                    </Col>
                  </Col>
                  <Row size={10}>
                    <Col size={1}>
                      <Row size={90}>
                        {post.deleted === false ? (
                          <a href="#" onClick={() => {this.delete(post)} }> Delete </a>
                          )
                          :
                          (
                            "Deleted :("
                          )
                        }
                      </Row>
                      <div style={{backgroundColor:"#E1ECF4", padding:20}}>
                        <Typography component="p">
                          {(
                            moment(post.timestamp).format('DD/MM/YYYY')
                          )}
                        </Typography>
                        <Typography component="p">
                          {post.author}
                        </Typography>
                      </div>
                    </Col>
                  </Row>
                </Row>
                {/* Coment */}
                  <PostComment comments={this.state.comments}/>
              </Paper>
        )
    }
}



function mapDispatchToProps (dispatch) {
  return {
    delete: (post) => dispatch(deletePost(post)),
  }
}

function mapStateToProps ({ categories, posts }) {
    return {
        posts
    }
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPost))

// export default VotePost

//export default withRouter(ItemPost)