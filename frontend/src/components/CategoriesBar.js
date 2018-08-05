import React, {Component} from 'react'
import { Row } from 'react-easy-grid';
import Chip from 'material-ui/Chip';
import IconMenu from 'material-ui/IconMenu';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux'

import './App.css'

import { fetchTodos } from '../actions'

class CategoriesBar extends Component{

    componentDidMount(){
        this.props.loadCategories()
    }

    render(){
        return (
        <Row size={1} className="w3-round-xlarge">
            <Row size={90}>
            {
                this.props.categories.categories && (
                this.props.categories.categories.map (
                    c => (
                        <Chip key={c.name} style={ { margin: "12px", marginRight:"0px" }}>
                        {c.name}
                        </Chip>
                    )
                )
                )
            } 
            </Row>
            <Row size={5}>
                <IconMenu
                    iconButtonElement={<IconButton><ContentFilter /></IconButton>}
                    onChange={this.handleChangeMultiple}
                    >
                    <MenuItem value="1" primaryText="Vote Asc" />
                    <MenuItem value="2" primaryText="Vote Desc" />
                    <MenuItem value="3" primaryText="Date Asc" />
                    <MenuItem value="4" primaryText="Date Desc" />
                </IconMenu>
            </Row>
        </Row>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        loadCategories: () => dispatch(fetchTodos({})),
    }
}

function mapStateToProps ({ categories, posts }) {
    return {
        categories,
    }    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesBar)