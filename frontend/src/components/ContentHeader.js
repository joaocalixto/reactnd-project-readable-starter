import React, {Component} from 'react'
import './App.css'
import { Col, Row } from 'react-easy-grid';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom'

class ContentHeader extends Component{

    navigate = () => {
        console.log("oncline");
        this.props.history.push(`/post`)
    }

    render(){
        return (
        <Row size={1}>
            <Col size={95}>
                <h2>Post</h2>
            </Col>
            <Col size={5} style={ { justifyContent: "center" } }>
                <RaisedButton primary={true} label="New" onClick={() => {this.navigate()}}/>
            </Col>
        </Row >
        )
    }
}

export default withRouter(ContentHeader)