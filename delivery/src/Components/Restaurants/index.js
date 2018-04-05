import React, { Component } from 'react';
import StoreCard from '../StoreCard';
import H1 from '../Heading';
import Button from '../Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import places from './places.js';

class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: places
        };
    }

    render() {
        const restList = this.state.restaurants.map((place, index) => {
            return (
                <Col lg={3} md={3} sm={6} key={index}>
                    <StoreCard
                        name={place.name}
                        img={place.img}
                        minPrice={place.minPrice}
                        deliveryPrice={place.deliveryPrice}
                        deliveryTime={place.deliveryTime}
                    />
                </Col>
            );
        });
        
        return (
            <Grid>
                <Row center="xs">
                    <Col sm={12}>
                        <H1>Рестораны</H1>
                    </Col>
                </Row>
                <Row>{restList}</Row>
                <Row center="xs">
                    <Col>
                        <Button>Все рестораны</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Restaurants;
