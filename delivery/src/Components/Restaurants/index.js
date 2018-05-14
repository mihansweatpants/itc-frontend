import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import StoreCard from '../StoreCard';
import H1 from '../Heading';
import Button from '../Button';
import Spinner from '../Spinner';

class Restaurants extends Component {
    state = {
        restaurants: null,
        limit: this.props.main ? 8 : 12,
        offset: 0,
        moreStores: null,
        loading: true
    };

    getStores = async () => {
        const res = await fetch(
            `https://itc-web1-server.now.sh/stores?limit=${
                this.state.limit
            }&offset=${this.state.offset}`
        );
        const resData = await res.json();

        this.setState({
            restaurants: resData.payload.stores,
            moreStores: resData.payload.hasMore,
            loading: false
        });
    };

    loadMoreStores = async () => {
        if (this.state.moreStores) {
            this.setState({
                loading: true
            });

            const res = await fetch(
                `https://itc-web1-server.now.sh/stores?limit=${
                    this.state.limit
                }&offset=${this.state.offset + 12}`
            );

            const resData = await res.json();

            this.setState(prevState => {
                return {
                    restaurants: prevState.restaurants.concat(
                        resData.payload.stores
                    ),
                    offset: prevState.offset + 12,
                    moreStores: resData.payload.hasMore,
                    loading: false
                };
            });
        }
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getStores();
    }

    render() {
        let restList;
        if (this.state.restaurants) {
            restList = this.state.restaurants.map(restaurant => {
                return (
                    <Col lg={3} md={3} sm={6} key={restaurant.uuid}>
                        <StoreCard
                            name={restaurant.title}
                            img={restaurant.heroImageUrl}
                            link={restaurant.link}
                        />
                    </Col>
                );
            });
        }

        return (
            <Grid>
                <Row center="xs">
                    <Col sm={12}>
                        <H1>Рестораны</H1>
                    </Col>
                </Row>
                <Row center="xs">{restList || <Spinner />}</Row>
                <Row center="xs">
                    <Col>
                        {this.props.main ? (
                            <Link to="/catalog">
                                <Button>Все рестораны</Button>
                            </Link>
                        ) : (
                            this.state.moreStores && (
                                <Button onClick={this.loadMoreStores}>
                                    {this.state.loading
                                        ? 'Загрузка...'
                                        : 'Загрузить еще'}
                                </Button>
                            )
                        )}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Restaurants;
