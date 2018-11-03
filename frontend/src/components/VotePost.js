import React, {Component} from 'react'
import { connect } from 'react-redux'
import { votePost } from '../actions'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import './App.css'

class VotePost extends Component{

    vote = (post, type) => {
        console.log("post");
        this.props.vote(post, type)
    }

    render(){
        const {post} = this.props
        
        return (
            <div>
                <IconButton aria-label="upvote" onClick={() => {this.vote(post, "upVote")} }>
                    <KeyboardArrowUp/>
                </IconButton >
                <Typography variant="headline" component="h3" style={{color:"#6a737c", marginLeft:18}}>
                    {post.voteScore}
                </Typography>
                <IconButton aria-label="downvote"  onClick={() => {this.vote(post, "downVote")} }>
                    <KeyboardArrowDown/>
                </IconButton >
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
      vote: (post, type) => dispatch(votePost(post, type)),
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
  )(VotePost))

// export default VotePost