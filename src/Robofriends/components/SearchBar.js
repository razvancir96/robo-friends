import React from 'react';

// a searchbar where users can fitler the robots displayed
const SearchBar = ({searchFunction}) => {
	return(
		<div>
			<input type="search" 
				placeholder="Enter robot's name" 
				className="pa3 ba b--green bg-lightest-blue ma3"
				onChange={searchFunction}
			/>
		</div>
	);
} 

export default SearchBar;