import React from 'react'

export const Button = ({id, onClick, className, text}) => {
    return (
        <button 
            id={id}
            onClick={onClick}
            className={className}
        >
            {text}
        </button>
    )
}
