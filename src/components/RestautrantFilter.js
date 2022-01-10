import React from 'react';
import { Container } from 'react-bootstrap';

function RestautrantFilter(){

    return(
        <Container id="filter">
            <input type="text" placeholder="Enter a country's name" />
        </Container>
    )

}

export default RestautrantFilter