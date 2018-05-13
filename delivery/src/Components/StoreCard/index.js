import React from 'react';
import styled from 'styled-components';

const StoreCard = ({ name, img, link }) => (
    <Link href={link}>
        <Image src={img} />
        <Name>{name}</Name>
    </Link>
);

const Link = styled.a`
    display: block;
    margin-bottom: 48px;
    text-decoration: inherit;
    color: inherit;
    cursor: poiner;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translate(0, -10px);
    }
`;

const Image = styled.img`
    width: 100%;
    border-radius: 16px;
`;

const Name = styled.h2`
    margin: 6px 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: left;
    color: #333333;
`;

export default StoreCard;
