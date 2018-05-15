import React from 'react';
import styled from 'styled-components';

const StoreCard = ({
    name,
    img,
    link,
    categories,
    alcohol,
    priceBucket,
    deliveryTime
}) => (
    <Card>
        <Link href={link}>
            <Image src={img} />
            <Name>{name}</Name>
        </Link>
        <Categories>{categories.join(', ')}</Categories>
        <Tags>
            <Chip price>{priceBucket}</Chip>
            <Chip>{`${deliveryTime.min}-${deliveryTime.max} минут`}</Chip>
            {alcohol && <Chip>Алкоголь</Chip>}
        </Tags>
    </Card>
);

const Card = styled.div`
    transition: 0.3s ease-in-out;
    margin-bottom: 48px;

    &:hover {
        transform: translate(0, -5px);
    }
`;

const Link = styled.a`
    display: block;
    text-decoration: inherit;
    color: inherit;
    cursor: poiner;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 5px;
`;

const Name = styled.h2`
    margin: 6px 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: left;
    color: #333333;
`;

const Categories = styled.p`
    margin: 0;
    text-align: left;
    margin-bottom: 16px;
    color: #333333;
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    color: #333333;
`;

const Chip = styled.div`
    border-radius: 32px;
    background: #dbdbdb;
    cursor: pointer;
    height: 32px;
    padding: 0 32px;
    line-height: 32px;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 8px;
    transition: 0.3s ease-in-out;
    color: ${props => (props.price ? '#000000' : 'inherit')};
    font-size: ${props => (props.price ? '20px' : '18px')};

    @media (max-width: 992px) and (min-width: 767px) {
        font-size: 16px;
    }

    &:hover {
        background: #c0c0c0;
    }
`;

export default StoreCard;
