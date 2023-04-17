import React from 'react';
import Box from './Box';


function Movie(props) {
    
    const {movieName, guesses} = props;
    console.log(guesses);       
    const renderedList = movieName.map((innerList, outerIndex) => {
        const renderedInnerList = innerList.map((item, innerIndex) => {
            return <Box key={`${outerIndex}-${innerIndex}`} 
                letter={guesses.includes(item) ? item : ''} 
                id={`${outerIndex+1}-${innerIndex+1}`} 
                className={"MovieBoxInitial"}/>;
        });
        return <div key={outerIndex}>{renderedInnerList}</div>;
    });
    return (
        <div>
            {renderedList}
        </div>
    );
}

export default Movie;