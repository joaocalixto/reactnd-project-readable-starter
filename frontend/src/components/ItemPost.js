import React, {Component} from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from 'material-ui/Chip';
import { Col, Row } from 'react-easy-grid';
import { withRouter } from 'react-router-dom'



import VotePost from './VotePost';
import moment from 'moment';

import './App.css'

class ItemPost extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          open: false,
          paperColor: "white",
          paperCursor: "auto",
        };
      }

      mouseEnter = () =>{
        console.log('mouse enter')
        this.setState({
          paperColor: "#EBEBEB",
          paperCursor: "pointer"
        })
    };
    
    mouseLeave = () => {
        console.log('mouse leave')
        this.setState({
          paperColor: "white",
          paperCursor: "auto"
        })
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
        return (
            <Paper elevation={1} style={{
                marginTop:30, padding: 20, 
                
                }} >
                <Row size={1} >
                  <Col size={10} >
                    <VotePost post={post}/>
                  </Col>
                  <Row size={100} onClick={() => {this.navigate(post)} } onMouseEnter={this.mouseEnter} 
                  onMouseLeave={this.mouseLeave} 
                  style={{backgroundColor:this.state.paperColor, 
                  cursor:this.state.paperCursor, marginRight:20 }}>
                    <Col size={95}>
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
                  
                  </Row>
                  <Row size={10}>
                  <Col size={1}>
                    <Row size={90}>
                      {post.deleted == false ? (
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