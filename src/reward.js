import React from 'react';
import { useDrag } from 'react-dnd';

export const ItemTypes = {
    REWARD: 'reward'
}

function Reward({ title, idx, deleteReward }){

    //first obj is a props obj w/ properties such as isDragging
    //second is a ref function to attach DOM ele to React DND
    const [{ isDragging }, drag] = useDrag({
        //item is a required arg, type is what the drop function recognizes
        item: { type: ItemTypes.REWARD },
        //begin allows you to specify what info is returned to the drop fxn
        begin: (monitor) => ({
            type: ItemTypes.REWARD,
            idx: idx,
            title: title,
        }),
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
		<div className="reward-item"
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontWeight: 'bold',
                cursor: 'move',
            }}>
            {title}
            {deleteReward
            ? <span className="delete-button" onClick={() => deleteReward()}>X</span>
            : null}
        </div>

    )
}

export default Reward;