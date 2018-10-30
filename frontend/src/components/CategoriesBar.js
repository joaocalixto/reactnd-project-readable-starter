import React, {Component} from 'react'
import { Row } from 'react-easy-grid';
import Chip from '@material-ui/core/Chip';
import IconMenu from 'material-ui/IconMenu';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBlankBox from '@material-ui/icons/CheckBoxOutlineBlank';


import './App.css'

import { fetchTodos, sort, filterAddCategoryPost, filterRemoveCategoryPost } from '../actions'

class CategoriesBar extends Component{

    componentDidMount(){
        this.props.loadCategories()
    }
    handleSort = (sort,event) => {
        console.log("sort byww ", sort);
        console.log("event ", event);
    
        this.props.sortCategories(sort)
    };

    handleDelete = (chip, event) => {
        console.log("chip", chip);
        if(!chip.selected)
            this.props.addFilter(chip.name)
        else{
            this.props.removeFilter(chip.name)
        }
    };

    isSelected = (selected) => {
        return selected ? <CheckBox /> : <CheckBlankBox />
    }

    render(){
        return (
            <Row size={100}>
                <Row size={85} className="w3-round-xlarge" style={{marginRight: 20, paddingBottom:5, paddingTop:5}}>
                    {
                        this.props.categories.categories && (
                        this.props.categories.categories.map (
                            c => (
                                <Chip deleteIcon={this.isSelected(c.selected)}  
                                    onDelete={this.handleDelete.bind(this,c)} variant="outlined" 
                                    label={c.name}
                                    key={c.name} style={ { margin: 10 }}/>
                            )
                        )
                        )
                    } 
                </Row>
                <Row size={5}>
                <Button variant="outlined" aria-label="sort" >
                    <IconMenu
                        iconButtonElement={<IconButton><ContentFilter /></IconButton>}
                        onChange={this.handleChangeMultiple}
                        >
                        <MenuItem value="voteAsc"  onClick={this.handleSort.bind(this, 'voteScore')} primaryText="Vote Asc" />
                        <MenuItem value="voteDesc" onClick={this.handleSort.bind(this, '-voteScore')} primaryText="Vote Desc" />
                        <MenuItem value="DateAsc"  onClick={this.handleSort.bind(this, 'timestamp')} primaryText="Date Asc" />
                        <MenuItem value="DateDesc" onClick={this.handleSort.bind(this, '-timestamp')} primaryText="Date Desc" />
                    </IconMenu>
                        Sort
                    </Button>
                </Row>
        </Row>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        loadCategories: () => dispatch(fetchTodos({})),
        sortCategories: (sortBy) => dispatch(sort(sortBy)),
        addFilter: (name) => dispatch(filterAddCategoryPost(name)),
        removeFilter: (name) => dispatch(filterRemoveCategoryPost(name)),
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