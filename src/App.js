import React from 'react';
import logo from './logo.svg';
import { useDrag } from 'react-dnd'
import Reward from './reward';
import Category from './category';
import './App.css';

export const moveReward = function(categoryIdx){

}

function App() {


	const rewards = ["R1", "R2", "R3", "R4", "R5"];

	const categories = ["C1", "C2", "C3", "C4", "C5"];

	return (
		<div className="App">
			<div className="grid">
				<div className="rewards">
					<span className="reward-heading">Rewards</span>
					<div className="reward-container">
						{rewards.map((title, idx) => {
							return (
								<Reward key={idx} title={title}/>
							)
						})}
					</div>
				</div>
				<div className="categories">
					<span className="category-heading">Categories</span>
					<div className="category-container">
						{categories.map((title, idx) => {
							return (
								<Category key={idx} title={title} index={idx}/>
							)
						})}
					</div>
				</div>
			</div>
    	</div>
  	);
}

export default App;
