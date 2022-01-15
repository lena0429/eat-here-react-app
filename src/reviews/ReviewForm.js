import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { createReview } from '../actions/reviewActions';
import { useDispatch } from 'react-redux';

function ReviewForm({ restaurants }){

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [restaurantName, setRestaurantName] = useState("CuliAir Sky Dining")
    const dispatch = useDispatch()

    function handleReviewSubmit(e) {
        e.preventDefault()
        const relatedRestaurant = restaurants.find(r => r.name === restaurantName)
        const restaurant_id = relatedRestaurant.id

        debugger
        dispatch(createReview({title, content, restaurant_id}))

        setTitle("")
        setContent("")
        setRestaurantName("CuliAir Sky Dining")
    }

    return(
        <Container className="review-form">
            <Form onSubmit={handleReviewSubmit}>
            <h3>Add a New Review</h3>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title: </Form.Label>
                        <Form.Control size="sm" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicContent">
                        <Form.Label>Content: </Form.Label>
                        <Form.Control type="text" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRestaurants">
                        <Form.Label>Select a Restaurant: </Form.Label>
                        <Form.Select value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)}>
                            {restaurants.map((restaurant) => (
                                <option key={restaurant.name}>{restaurant.name}</option>
                            ))}
                        </Form.Select>     
                    </Form.Group>

                    <Button variant="danger" type="submit">Submit</Button>
            </Form>

        </Container>

    )
}

export default ReviewForm