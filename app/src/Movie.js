import React from 'react';
import Box from './Box';


function Movie(props) {
    
    const {movieName, guesses} = props;
    const renderedList = movieName.map((innerList, outerIndex) => {
        const renderedInnerList = innerList.map((item, innerIndex) => {
            return <Box key={`${outerIndex}-${innerIndex}`} 
                letter={guesses.includes(item) ? item : ''} 
                id={`${outerIndex+1}-${innerIndex+1}`} 
                boxClassName={guesses.includes(item) ? "MovieBoxSuccess" : "MovieBoxInitial"}
                boxLetterClassName={"MovieBox-letter"}/>;
        });
        return <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}} key={outerIndex}>{renderedInnerList}</div>;
    });
    return (
        <div className="AppComponents" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection:'column'}}>
            {renderedList}
        </div>
    );
}

export default Movie;