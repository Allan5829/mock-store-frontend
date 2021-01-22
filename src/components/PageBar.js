import React from 'react';
 
const PageBar = props => {

    let buttons = repeat => {
        let arrayButtons = []
        for (let i = 1; i <= props.pages; i++) {
            arrayButtons.push( <button onClick={() => props.changePage(i)} key={i}> {i} </button>)
        }
        return arrayButtons
    }

    return (
        <div>
            {buttons()}
        </div>
    );
}
 
export default PageBar;