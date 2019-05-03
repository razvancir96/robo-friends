import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../../actions.js'
import './css/App.css';


const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		robots: [],
	// 		// searchValue: ''
	// 	};
	// }

	// fetch 10 users with jsonplaceholder API
	componentDidMount() {
		this.props.onRequestRobots();
	}

	// in case of input changing, we update our state
	// onSearchChange = (event) => {
	// 	const input = event.target.value;
	// 	this.setState({searchValue: input});  
	// }

	render() {
		const {searchField, onSearchChange, robots, isPending} = this.props;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		// check if we have data 
		return isPending === true ?
			// if we haven't received any data display "Loading"
			<h1 className="tc f1">LOADING...</h1> :
			// else render our page
			<div className="tc">
				<h1 className="f1">Robo Friends</h1>
				<SearchBar searchFunction={onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);