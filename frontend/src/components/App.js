import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import {AppBar} from 'material-ui';
import { Col, Row, Grid } from 'react-easy-grid';
import Chip from 'material-ui/Chip';
import { connect } from 'react-redux'


import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { fetchCategories, fetchPosts } from '../actions'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    console.log("props", this.props);
    return (

      <div>
        <AppBar
          className="App2"
          title="My Udacity React Project"
          showMenuIconButton={false}
        />
        <div className="Content">
          <Grid>
            {/* List Header  */}
            <Row size={1}>
                <Col size={95}>
                  <h2>Post</h2>
                </Col>
                <Col size={5} style={ { justifyContent: "center" } }>
                  <RaisedButton primary={true} label="New" />
                </Col>
            </Row >
            
            {/* List Categoria  */}
            <Row size={1} className="w3-round-xlarge">
              <Row size={90}>
                <Chip style={ { margin: "12px", marginRight:"0px" }}>
                  Cat 1
                </Chip>
                <Chip style={ { margin: "12px" }}>
                Cat 2
                </Chip>
                <Chip style={ { margin: "12px" }}>
                Cat 2
                </Chip>
                <Chip style={ { margin: "12px" }}>
                Cat 2
                </Chip>
                <Chip style={ { margin: "12px" }}>
                Cat 2
                </Chip>
                </Row>
                <Row size={10} style={ {margin:"12px"}}>
                <RaisedButton
                      onClick={this.handleClick}
                      label="FF"
                />
                    <Popover
                      open={this.state.open}
                      anchorEl={this.state.anchorEl}
                      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                      targetOrigin={{horizontal: 'left', vertical: 'top'}}
                      onRequestClose={this.handleRequestClose}
                    >
                      <Menu>
                        <MenuItem primaryText="Vote Asc" />
                        <MenuItem primaryText="Vote Desc" />
                        <MenuItem primaryText="Date Asc" />
                        <MenuItem primaryText="Date Desc" />
                      </Menu>
                    </Popover>
                </Row>
            </Row>
            {/* List Posts  */}
            <Row size={1}>
            <Card style={{marginTop:30}}>
              <CardTitle title="Titulo da postagem" subtitle="23 votes" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
            </Row>
            <Row size={1}>
            <Card style={{marginTop:30}}>
              <CardTitle title="Titulo da postagem" subtitle="23 votes" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
            </Row>
          </Grid>
        </div>
        
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadCategories: () => dispatch(fetchCategories()),
    loadPost: () => dispatch(fetchPosts())
  }
}


// export default App;
export default connect(
  null,
  mapDispatchToProps
)(App)