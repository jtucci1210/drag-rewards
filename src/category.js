import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './reward';

function Category({title, index, renderRewards, createReward, moveReward}){

    const [collectedProps, drop] = useDrop({
        accept: ItemTypes.REWARD,
        drop: (item, monitor) => {
            createReward(index, item)
        }
    })

    return(
        <div className="category-item">
            <div className="category-name">{title}</div>
            <div className="category-lane" ref={drop}>
                {renderRewards(index)}
            </div>
        </div>
    )
}

export default Category;