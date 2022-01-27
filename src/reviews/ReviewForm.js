import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { createReview } from '../actions/reviewActions';
import { useDispatch } from 'react-redux';
import { updateRestaurantReviews } from '../actions/restaurantActions';

function ReviewForm({ restaurants, goBack }){

    const [nickname, setNickname] = useState("")
    const [comment, setComment] = useState("")
    const [restaurantName, setRestaurantName] = useState("CuliAir Sky Dining")
    const dispatch = useDispatch()

    function handleReviewSubmit(e) {
        e.preventDefault()
        const relatedRestaurant = restaurants.find(restaurant => restaurant.name === restaurantName)
        const restaurant_id = relatedRestaurant.id

        if (comment) {
        dispatch(createReview({nickname, comment, restaurant_id}))
        dispatch(updateRestaurantReviews(restaurant_id))

        setNickname("")
        setComment("")
        setRestaurantName("CuliAir Sky Dining")

        goBack()

        }
    }

    return(
        <Container className="form">
            <Form onSubmit={handleReviewSubmit}>
            <h3>Add a New Review</h3>
                    <Form.Group className="mb-3" controlId="formBasicNickname">
                        <Form.Label>Nickname: </Form.Label>
                        <Form.Control size="sm" type="text" name="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicContent">
                        <Form.Label>Comment (required): </Form.Label>
                        <Form.Control type="text" name="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
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