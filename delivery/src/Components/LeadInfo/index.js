import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import pizza from '../../img/picpizzaaa.jpg'
import H1 from '../Heading'

class LeadInfo extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col lg={6} md={6}>
                        <H1>Что мы делаем?</H1>
                        <LeadText>
                            <p>
                                Delivery Club - это независимый клубный проект,
                                объединивший сотни служб доставки еды и
                                продуктов в Единую Систему Заказов.
                            </p>
                            <p>
                                Цель проекта - обеспечить своим пользователям
                                наилучшие условия для быстрого, удобного и
                                выгодного осуществления заказов. Услуги сайта
                                абсолютно бесплатны, а условия доставки очень
                                простые
                            </p>
                        </LeadText>
                    </Col>
                    <Col lg={6} md={6}>
                        <DescriptionCover src={pizza} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}


const LeadText = styled.div`
    font-family: "Open Sans", Regular;
    font-size: 18px;
`

const DescriptionCover = styled.img`
    width: 100%;
`

export default LeadInfo;

