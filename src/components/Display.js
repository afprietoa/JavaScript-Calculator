import React from 'react'

export const Display = ({display}) => {
    return (
        <div className='dis'>
        <input id='display'
            type='text'
            value={display}
        />
        </div>
    )
}
