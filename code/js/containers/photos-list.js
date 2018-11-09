import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class PhotosList extends Component {
	
	showList () {
		return this.props.photos.map ((photo) => {
			return (
				<div>
					<div onClick={() => this.props.select (photo)} key={photo.id}>{photo.id}{' '}{photo.title}</div>
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

function mapStateToProps (state) {
	return {
		photos: state.photos	
	};
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PhotosList);