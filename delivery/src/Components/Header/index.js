import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '../Button';
import background from '../../img/bg.jpg';
import HeaderTop from './Top';

const Header = props => {
    return (
        <Container>
            <Grid>
                <HeaderTop logoColor={props.logo} main={props.main} />
                <Row>
                    <Col xs={12}>
                        <Lead1>Меняйте баллы</Lead1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Lead2>на призы</Lead2>
                    </Col>
                </Row>
                <Row center="xs" top="xs">
                    <Col xs={12}>
                        <AboutBtn>Подробнее</AboutBtn>
                    </Col>
                </Row>
            </Grid>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 75px;
`;

const AboutBtn = Button.extend`
    margin-top: 128px;
`;

const Lead = styled.span`
    font-family: 'Pacifico', cursive;
`;

const Lead1 = Lead.extend`
    font-size: 77.32px;
    text-align: left;
    letter-spacing: 2.97px;
    color: #fff;
    margin-top: 96px;
    margin-left: 200px;

    @media (max-width: 1200px) {
        display: block;
        width: 100%;
        margin-left: 0;
        text-align: center;
        line-height: 84px;
        font-size: 60px;
    }
`;

const Lead2 = Lead.extend`
    font-size: 182.75px;
    text-align: left;
    line-height: 37px;
    letter-spacing: 6.49px;
    color: #b7e611;
    margin-left: 260px;

    @media (max-width: 1200px) {
        display: block;
        width: 100%;
        margin-left: 0;
        text-align: center;
        line-height: 84px;
        font-size: 100px;
    }
`;
