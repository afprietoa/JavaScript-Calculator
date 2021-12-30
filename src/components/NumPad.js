import React from 'react'
import buttons from '../data/buttons'
import { Button } from './Button'

export const NumPad = ({onClick}) => {
    return (
        <div className='grid'>
            {buttons.map((btn) =>{
                return(
                    <Button
                        key={btn.id}
                        id={btn.id}
                        onClick={onClick}
                        className={btn.className}
                        text={btn.text}
                    />
                )
            })}
        </div>
    )
}
