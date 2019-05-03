import React from 'react'
import './css/Card.css'

// robo card, styled using tachyons
const Card = (props) => {
	return (
		<div className="tc dib br3 grow bw2 shadow-5 card">
			<img src={`https://robohash.org/test${props.id}.png?size=200x200`} alt="Problem." />
			<h2>{props.name}</h2>
			<p>{props.email}</p>
		</div>
	)
}

export default Card;