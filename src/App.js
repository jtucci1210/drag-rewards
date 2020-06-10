import React, { useState, useEffect } from 'react';
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
	
	const [createdRewards, setCreatedRewards] = useState(() => {
		let saved = window.localStorage.getItem("savedRewards") || [];
		if (saved.length !== 0) {
			try{ //good practice to wrap in a tray catch for error viewing
				//deserialize(turn from string back into object)
				saved = JSON.parse(saved)
			} catch(err){
				console.log(err)
			}
		}
		return saved;
	})
	const [numRewards, setNumRewards] = useState(() => {
		let saved = window.localStorage.getItem("numberRewards") || 0;
		if(saved !== 0){
			try{
				saved = JSON.parse(saved);
			} catch(err) {
				console.log(err)
			}
		}
		return saved;
	})

	useEffect(() => {
		//must serialize(turn into a string) the object or array for storage, toString method also works
		window.localStorage.setItem("savedRewards", JSON.stringify(createdRewards))
		window.localStorage.setItem("numberReward", JSON.stringify(numRewards))
	}, [createdRewards, numRewards]); //useEffect will happen with any change of these two variables


	function renderCategories(){
		return (
			categories.map((title, idx) => {
				return (
					<Category key={idx} title={title} index={idx} 
					renderRewards={renderRewards} updateReward={updateReward} 
					createReward={createReward}/>
				)
			})
		)
	}

	function renderRewards(catID){
		
		return createdRewards.map((reward, idx) => {

			if(reward.catID === catID){
				return (
					<Reward key={idx} title={reward.title} createID={reward.createID}
					idx={reward.idx} catID={catID} updateReward={updateReward}/>
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
				createID: numRewards + 1,
				catID: categoryIdx
			}

			currRewards.push(newReward);
			setCreatedRewards(currRewards)
			setNumRewards(numRewards + 1)
		}

	}

	function updateReward(createID, categoryIdx) {
		let currRewards = Object.assign([], createdRewards);
		let rewardIdx = currRewards.findIndex(reward => reward.createID === createID)

		if(categoryIdx !== undefined) {
			let reward = currRewards[rewardIdx];
			if (!currRewards.some(item => {
				return item.idx === reward.idx && item.catID === categoryIdx
			})) {
				//move option
				console.log(reward)
				reward.catID = categoryIdx;
			} else {
				//already in that category
				return;
			}
		} else {
			//delete option
			currRewards.splice(rewardIdx, 1);
		}
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
