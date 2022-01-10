import React from 'react';
import { Spinner } from 'react-bootstrap';


function Loading() {
    return(
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading Data...</span>
        </Spinner>
    )
}

export default Loading