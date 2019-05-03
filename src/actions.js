import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED, 
} from './constants.js';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestRobots = () => (dispatch) => {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.catch((error) => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
			.then((users) => {
				const robots = users.map(({id, name, username, email}) => {
					return {
						id,
						name,
						username,
						email
					}
				});
				dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: robots});
			})
}