import React from 'react';
import StoreCard from '../StoreCard';
import H1 from '../Heading';
import Button from '../Button';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Restaurants = ({ restaurants }) => {
    const restList = restaurants.map(restaurant => {
        return (
            <Col lg={3} md={3} sm={6} key={restaurant.uuid}>
                <StoreCard
                    name={restaurant.title}
                    img={restaurant.heroImageUrl}
                    link={restaurant.link}
                    // minPrice={}
                    // deliveryPrice={}
                    // deliveryTime={}
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
};

export default Restaurants;
