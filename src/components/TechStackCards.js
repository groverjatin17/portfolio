import React from 'react'
import {Card, CardImage, RatingContainer, GreenCell, WhiteCell, Title} from '../styles/Card.style';

const CardMaker =({rating, image, title}) =>{

    const generateRating = (value) => {
        let greenArray =new Array(value).fill(0).map((_,key)=> <GreenCell key={key}/>)
        let whiteArray = new Array(5-value).fill(0).map((_,key)=> <WhiteCell key={key+4}/>)
        let finalRating= greenArray.concat(whiteArray)
        return finalRating;
    }

    return(    
        <Card>
            <RatingContainer>
                {generateRating(rating)}
            </RatingContainer>
            <CardImage src={image} alt={'Loading...'}/>
            <Title >{title} </Title>
        </Card>
                )
}

export default CardMaker;