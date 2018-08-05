import React, {Component} from 'react'
import {AppBar} from 'material-ui';

import './App.css'

class AppHeader extends Component{
   

    render(){
        return (
            <AppBar
                className="App2"
                title="My Udacity React Project"
                showMenuIconButton={false}
            />
        )
    }
}

export default AppHeader