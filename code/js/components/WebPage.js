import React from 'react';
import ItemList from '../containers/item';
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
		<ItemList/>
		<div style={divStyle}>
			<Details/>
		</div>
	</div>
);

export default WebPage;