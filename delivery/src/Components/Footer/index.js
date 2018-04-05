import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ig from '../../img/ig.png';
import vk from '../../img/vk.png';

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <Grid>
                    <Row>
                        <Col md={6} xs={12} center="xs" start="md">
                            <FooterTitle>Компания</FooterTitle>
                            <FooterLink>Для курьеров</FooterLink>
                            <FooterLink>Партнерство для ресторанов</FooterLink>
                            <FooterLink>Условия проведения акций</FooterLink>
                            <FooterLink>Контакты</FooterLink>
                        </Col>
                        <Col md={6} xs={12}>
                            <Icons>
                                <Link>
                                    <SocialIcon
                                        src={ig}
                                        alt="Follow us on IG"
                                    />
                                </Link>
                                <Link>
                                    <SocialIcon
                                        src={vk}
                                        alt="Follow us on VK"
                                    />
                                </Link>
                            </Icons>
                            <Copyright>
                                &copy; 2009-2018 Delivery Club&trade;
                                <br />Все права защищены
                            </Copyright>
                        </Col>
                    </Row>
                </Grid>
            </FooterContainer>
        );
    }
}

const FooterContainer = styled.div`
    margin-top: 100px;
    padding-bottom: 64px;
    background-color: #333333;
    @media (max-width: 768px) {
        margin-top: 30px;
    }
`;

const FooterTitle = styled.h4`
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #999999;
    margin-top: 40px;
    @media (min-width: 768px) {
        text-align: left;
    }
`;

const Icons = styled.div`
    text-align: center;
    @media (min-width: 768px) {
        text-align: right;
    }
`;

const FooterLink = styled.a`
    display: block;
    font-family: 'Open Sans', Regular;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    text-decoration: underline;
    color: #cccccc;

    &:hover {
        color: #a3d200;
    }

    @media (min-width: 768px) {
        text-align: left;
    }
`;

const SocialIcon = styled.img`
    margin-top: 40px;
    margin-left: 15px;
`;

const Copyright = styled.p`
    font-size: 18px;
    line-height: 32px;
    text-align: left;
    color: #cccccc;
    text-align: center;
    line-height: 24px;
    margin-top: 40px;
    @media (min-width: 768px) {
        text-align: right;
    }
`;

const Link = styled.a``;

export default Footer;
