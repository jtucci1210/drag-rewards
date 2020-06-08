import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './reward';
import { moveReward } from './App';

function Category({title, index}){

    const [, drop] = useDrop({
        accept: ItemTypes.REWARD,
        drop: () => moveReward(index)
    })

    return(
        <div className="category-item">
            <div className="category-name">{title}</div>
            <div className="category-lane">

            </div>
        </div>
    )
}

export default Category;