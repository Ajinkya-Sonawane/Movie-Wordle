import React from 'react';
import Box from './Box';


function Movie(props) {
    
    const {movieName, guess} = props;
           
    const renderedList = movieName.map((innerList, outerIndex) => {
        const renderedInnerList = innerList.map((item, innerIndex) => {
            return <Box key={`${outerIndex}-${innerIndex}`} 
                letter={''} 
                id={`${outerIndex}-${innerIndex}`} 
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