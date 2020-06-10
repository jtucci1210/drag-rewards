import React from 'react';
import { useDrop } from 'react-dnd';
import Reward, { ItemTypes } from './reward';

function Category({title, index, renderRewards, createReward, updateReward}){

    //collectedProps are the properties avail if needed, drop is ref for the DOM obj
    const [collectedProps, drop] = useDrop({
        //accept specifies which types it will be droppable for
        accept: ItemTypes.REWARD,
        drop: (item, monitor) => {
            //will only have a catID if it has already been placed in one of the swim lanes
            item.catID !== undefined ? updateReward(item.createID, index) : createReward(index, item)
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