import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRestaurant} from '../actions/restaurantActions';
import { Container, Form, Button } from 'react-bootstrap';


function NewRestaurantForm(props) {
    const initState = {
        name: "",
        country: "",
        image: "",
        gif: "", 
        description: "",
        likes: 0
    }

    const [restaurant, setRestaurant] = useState(initState)

    const dispatch = useDispatch()

    function handleChange(e){
        setRestaurant({
            ...restaurant, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (restaurant.name && restaurant.country) {
            dispatch(createRestaurant(restaurant))
            setRestaurant(initState)
        } 
        props.goBack()
    }

    return(
        <Container className="form">
            <Form onSubmit={handleSubmit}>
            <h3>Add a New Restaurant</h3>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control size="sm" type="text" name="name" value={restaurant.name} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCountry">
                        <Form.Label>Country: </Form.Label>
                        <Form.Control type="text" name="country" value={restaurant.country} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label>Image URL: </Form.Label>
                        <Form.Control type="text" name="image" value={restaurant.image} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicGif">
                        <Form.Label>Gif URL: </Form.Label>
                        <Form.Control type="text" name="gif" value={restaurant.gif} onChange={handleChange} />
                    </Form.Group>   

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description: </Form.Label>
                        <Form.Control type="text" name="description" value={restaurant.description} onChange={handleChange} />
                    </Form.Group>     

                    <Button variant="danger" type="submit">Submit</Button>
            </Form>

        </Container>
    )

}

export default NewRestaurantForm