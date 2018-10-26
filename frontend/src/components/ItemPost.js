import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from 'material-ui/Chip';
import { Col, Row } from 'react-easy-grid';
import { withRouter } from 'react-router-dom'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';



import moment from 'moment';

import './App.css'

class ItemPost extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          open: false,
          paperColor: "white",
          paperCursor: "auto",
          votes: false
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
      if(!this.state.votes){
        debugger
        this.props.history.push(`/post/${post.id}`)
      }
      //this.props.history.push(`/post`)
  }
  test = () => {
    this.setState({
      votes: true
    })
    console.log("asdasd");
}



  render(){
        const {post} = this.props
        return (
            <Paper elevation={1}  style={{
                marginTop:30, padding: 20, 
                
                }} >
                <Row size={1} >
                  <Col size={10} >
                    <IconButton aria-label="upvote" onClick={() => {this.test()} }>
                      <KeyboardArrowUp/>
                    </IconButton >
                    <Typography variant="headline" component="h3" style={{color:"#6a737c", marginLeft:18}}>
                    {post.voteScore}
                    </Typography>
                    <IconButton aria-label="downvote">
                      <KeyboardArrowDown/>
                    </IconButton >
                  </Col>
                  <Row size={100} onClick={() => {this.navigate(post)} } onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={{backgroundColor:this.state.paperColor, cursor:this.state.paperCursor }}>
                  <Col size={95}>
                    <Typography variant="headline" component="h3">
                      {post.title}
                    </Typography>
                    <Typography component="p">
                    {post.body}
                    </Typography>
                    <Chip style={ { margin: "12px", marginRight:"0px" }}>
                              React
                    </Chip>
                  </Col>
                  <Col size={1}>
                    <Row size={90}>
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

export default withRouter(ItemPost)