import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import { itemsFetchData, select } from '../actions/index';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('https://jsonplaceholder.typicode.com/photos');
    }

	showList () {
		return this.props.items.map ((item) => {
			return (
				<div>
					<div onClick={() => this.props.select (item)} key={item.id}>{item.id}{' '}{item.title}</div>
				</div>
			);
		});
	}
	render () {
		return (
			<ol>
				{this.showList ()}
			</ol>
		);
	}
}


const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
	select: (item) => dispatch(select(item))
    };
};

function matchDispatchToProps (dispatch) {
	return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);