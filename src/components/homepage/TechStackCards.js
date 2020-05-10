import React from 'react';
import { Rating } from 'semantic-ui-react';
import { Card, CardImage, Title } from '../../styles/Card.style';

const CardMaker = ({ rating, image, title }) => (
    <Card>
        <Rating
            defaultRating={rating}
            maxRating={5}
            icon='star'
            style={{ float: 'right', margin: '5% 0% 0% 62%' }}
            disabled
        />
        <CardImage src={image} alt='Loading...' />
        <Title>{title} </Title>
    </Card>
);

export default CardMaker;
