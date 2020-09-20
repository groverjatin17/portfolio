import React from 'react';
import { Rating } from 'semantic-ui-react';
import { Card, CardImage, Title } from '../../styles/Card.style';

const CardMaker = ({ rating, image, title }) => (
    <Card>
        <Rating
            className='tech-rating'
            defaultRating={rating}
            maxRating={5}
            icon='star'
            disabled
        />
        <CardImage src={image} alt='Loading...' />
        <Title>{title} </Title>
    </Card>
);

export default CardMaker;
