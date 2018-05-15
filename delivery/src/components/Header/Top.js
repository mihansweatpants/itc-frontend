import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Button from '../Button';
import LogoSVG from '../Logo';

const HeaderTop = props => (
    <Container main={props.main}>
        <Grid>
            <Row center="xs" between="lg">
                <Link to="/" main={props.main}>
                    <Col lg={1}>
                        <Logo>
                            <LogoSVG color={props.logoColor} />
                        </Logo>
                    </Col>
                </Link>
                <Col lgOffset={6} />
                <Col lg={3}>
                    <LoginBtn>Вход / Регистрация</LoginBtn>
                </Col>
            </Row>
        </Grid>
    </Container>
);

const Container = styled.div`
    ${props =>
        props.main
            ? ''
            : `&::after {
        display: block;
        content: '';
        height: 1px;
        width: 100%;
        background: lightgray;
        margin-top: 50px;
    }`};

    a {
        cursor: ${props => (props.main ? 'default' : 'pointer')};
    }
`;

const LoginBtn = Button.extend`
    margin-top: 63px;
    width: 184px;

    @media (max-width: 991px) {
        margin-top: 16px;
    }
`;

const Logo = styled.svg`
    max-width: 208px;
    max-height: 64px;
    margin-top: 50px;
`;

export default HeaderTop;
