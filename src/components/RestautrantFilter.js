import React from 'react';
import { Container, Button } from 'react-bootstrap';

function RestautrantFilter(props){


    return(
        <Container id="restaurant-filter">
            <input type="text" value={props.search} placeholder="Enter a country's name" onChange={props.handleSearch}/>
            <Button variant="dark" type="submit" onClick={props.handleClearClick}>Clear</Button>
            <div>
            {props.makeResultCards()}
            <hr />
            </div>
        </Container>
    )

}

export default RestautrantFilter