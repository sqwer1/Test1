import {combineReducers} from 'redux';
import PhotosReducers from './photos';
import ActivePhoto from './photos-active';


const allReducers = combineReducers ({
	photos: PhotosReducers,
	active: ActivePhoto
});

export default allReducers