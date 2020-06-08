import React from 'react';
import { useDrag } from 'react-dnd';

export const ItemTypes = {
    REWARD: 'reward'
}

function Reward({ title, idx }){

    //first obj is a props obj w/ properties collected
    //second is a ref function to attach DOM ele to React DND
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.REWARD },
        begin: (monitor) => ({
            type: ItemTypes.REWARD,
            idx: idx,
            title: title
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
        </div>

    )
}

export default Reward;