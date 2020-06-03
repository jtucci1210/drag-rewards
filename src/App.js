import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

	const rewards = ["R1", "R2", "R3", "R4", "R5"];

	const categories = ["C1", "C2", "C3", "C4", "C5"];

	return (
		<div className="App">
			<div className="grid">
				<div className="rewards">
					<span className="reward-heading">Rewards</span>
					<div className="reward-container">
						{rewards.map((reward, idx) => {
							return (
								<div className="reward-item" key={idx}>{reward}</div>
							)
						})}
					</div>
				</div>
				<div className="categories">
					<span className="category-heading">Categories</span>
					<div className="category-container">
						{categories.map((category, idx) => {
							return (
								<div className="category-item" key={idx}>
									<div className="category-name">{category}</div>
									<div className="category-lane">

									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
    	</div>
  	);
}

export default App;
