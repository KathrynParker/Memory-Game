import React, { Component } from 'react';
import './Jobs.css';
import JobsListItem from './JobsListItem';

class Jobs extends Component {

	render() {
		return (
			<div>
				<div className="App">
					<header className="App-header">
						<h1 className="App-title">Jobs In Atlanta</h1>
						<p className="App-subtitle">Click to explore jobs</p>
					</header>
				</div>
				<div className="Jobs"><JobsListItem /></div>
			</div>
    );
  }
}

export default Jobs;