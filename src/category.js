import React from 'react';
import { useDrop } from 'react-dnd';
import Reward, { ItemTypes } from './reward';

function Category({title, index, renderRewards, createReward, moveReward}){

    //collectedProps are the properties avail if needed, drop is ref for the DOM obj
    const [collectedProps, drop] = useDrop({
        //accept specifies which types it will be droppable for
        accept: ItemTypes.REWARD,
        drop: (item, monitor) => {
            item.catID ? moveReward(index, item) : createReward(index, item)
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