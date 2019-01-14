import {combineReducers} from 'redux';
import {items} from './items';
import ActiveItem from './item-active';

const allReducers = combineReducers ({
	items,
	active: ActiveItem
});

export default allReducers