import React from 'react'
import {Card, CardImage, Title} from '../styles/Card.style';
import {Rating} from 'semantic-ui-react';

const CardMaker =({rating, image, title}) =>{


    return(    
        <Card>
            <Rating defaultRating={3} maxRating={5} icon='star' style={{float: 'right', margin: '5% 0% 0% 62%'}} disabled />
            <CardImage src={image} alt={'Loading...'}/>
            <Title >{title} </Title>
        </Card>
                )
}

export default CardMaker;
