export const select = (photo) => {

	return {
		type: "PHOTO_SELECTED",
		payload: photo
	}
};