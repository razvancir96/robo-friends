import React from 'react'
import Card from './Card';

// a list of robo cards
const CardList = ({robots}) => {
	const cardList = robots.map((robot) => {
		return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>;
	})
	return (
		<div>
			{cardList}	
		</div>
	);
}

export default CardList;