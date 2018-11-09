import React from 'react';
import PhotosList from '../containers/photos-list';
import Details from '../containers/details';

const divStyle = {
  float: 'right',
  width: '50%',
  height: '100%',
  position: 'fixed',
  top: '0px',
  right: '0px'
};

const WebPage = () => (
	<div>
		<h3>Товары:</h3>
		<PhotosList/>
		<div style={divStyle}>
		<Details/>
		</div>
	</div>
);

export default WebPage;