import React, { useState } from 'react';
import logo from './logo.svg';
import { useDrag } from 'react-dnd'
import Reward from './reward';
import Category from './category';
import './App.css';


//when you drag from the og rewards a new reward needs to be created and added to state when dropped
//when dragging from a category you need to move that actual reward by changing the catID and updating state
//need a delete reward category for the moveable rewards
//if catID is null thats when you call create, if it exists thats when you call move

function App() {


	const rewards = ["R1", "R2", "R3", "R4", "R5"];
	const categories = ["C1", "C2", "C3", "C4", "C5"];
	
	const [createdRewards, setCreatedRewards] = useState([])

	function renderCategories(){
		return (
			categories.map((title, idx) => {
				return (
					<Category key={idx} title={title} index={idx} 
					renderRewards={renderRewards} moveReward={moveReward} 
					createReward={createReward}/>
				)
			})
		)
	}

	function renderRewards(catID){

		return createdRewards.map((reward, idx) => {
			if(reward.categoryID === catID){
				return (
					<Reward key={idx} title={reward.title} idx={reward.idx} deleteReward={deleteReward}/>
				)
			}
		})
	}


	function createReward(categoryIdx, item) {
		let currRewards = Object.assign([], createdRewards);
		let rewardID = item.idx;
		if(!currRewards.some(reward => {
			return reward.idx === rewardID && reward.catID === categoryIdx
		})) {
			let newReward = {
				title: item.title,
				idx: item.idx,
				catID: categoryIdx
			}
			currRewards.push(newReward);
			setCreatedRewards(currRewards)

		}

	}

	function moveReward(categoryIdx, item) {
		console.log("here")

	}

	const deleteReward = () => {
		let currRewards = Object.assign([], createdRewards);
		let deleteIdx = currRewards.indexOf(this);
		currRewards.splice(deleteIdx, 1);
		setCreatedRewards(currRewards);

	}

	return (
		<div className="App">
			<div className="grid">
				<div className="rewards">
					<span className="reward-heading">Rewards</span>
					<div className="reward-container">
						{rewards.map((title, idx) => {
							return (
								<Reward key={idx} idx={idx} title={title}/>
							)
						})}
					</div>
				</div>
				<div className="categories">
					<span className="category-heading">Categories</span>
					<div className="category-container">
						{renderCategories()}
					</div>
				</div>
			</div>
    	</div>
  	);
}

export default App;
