import React from 'react';

function Rainbow(WrappedComponent) {
    const colors = ['red', 'green', 'yellow', 'orange', 'blue', 'pink'];
    const randomColors = colors[Math.floor(Math.random() * colors.length-1)];
    const textColor = randomColors + '-text';
    console.log(WrappedComponent);
    return(props) => {
        return(
            <div className={textColor}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;