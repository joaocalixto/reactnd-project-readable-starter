import React, {Component} from 'react'
import { connect } from 'react-redux'
import { votePost, voteComment } from '../actions'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import './App.css'

class VotePost extends Component{

    constructor(props) {
        super(props);
        this.state = {
            comment: props.comment
        };
    }

    vote = (type) => {
        console.log("comment");
        this.props.vote(this.state.comment, type)

        if(type === 'upVote'){
            let upVote = ++this.state.comment.voteScore;
            console.log("upVote",upVote);
            this.setState({
                comment: {
                    ...this.state.comment,
                    voteScore: upVote 
                }
            })
        }else{
            let downVote = --this.state.comment.voteScore;
            console.log("downVote",downVote);
            this.setState({
                comment: {
                    ...this.state.comment,
                    voteScore: downVote 
                }
            })
        }
    }

    render(){
        return (
            <div>
                <IconButton aria-label="upvote" onClick={() => {this.vote("upVote")} }>
                    <KeyboardArrowUp/>
                </IconButton >
                <Typography variant="headline" component="h3" style={{color:"#6a737c", marginLeft:18}}>
                    {this.state.comment.voteScore}
                </Typography>
                <IconButton aria-label="downvote"  onClick={() => {this.vote("downVote")} }>
                    <KeyboardArrowDown/>
                </IconButton >
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
      vote: (comment, type) => dispatch(voteComment(comment, type)),
    }
  }
  
  function mapStateToProps ({ categories, posts, comments }) {
      return {
        comments
      }
  }
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(VotePost))

// export default VotePost