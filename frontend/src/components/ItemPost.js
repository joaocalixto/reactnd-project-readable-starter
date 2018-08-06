import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from 'material-ui/Chip';
import { Col, Row } from 'react-easy-grid';
import { withRouter } from 'react-router-dom'

import moment from 'moment';

import './App.css'

class ItemPost extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          open: false,
          paperColor: "white",
          paperCursor: "auto"
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
      //this.props.history.push(`/post`)
  }



  render(){
        const {post} = this.props
        return (
            <Paper elevation={1} onClick={() => {this.navigate(post)} }style={{
                marginTop:30, padding: 20, 
                backgroundColor:this.state.paperColor, 
                cursor:this.state.paperCursor }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
                <Row size={1}>
                  <Col size={10} >
                    <Typography variant="headline" component="h3" style={{color:"#6a737c"}}>
                    {post.voteScore}
                    </Typography>
                    <Typography component="p" style={{textAlignVertical: "center"}}>
                      votes
                    </Typography>
                  </Col>
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
                </Row>
                <Row size={1}>
                  <Col style={ { marginRight:"0px" }}>
                  <Typography component="p">
                  {(
                    moment(post.timestamp).format('DD/MM/YYYY')
                  )}
                  </Typography>
                  <Typography component="p">
                    {post.author}
                  </Typography>
                  </Col>
                  
                </Row>
              </Paper>
        )
    }
}

export default withRouter(ItemPost)