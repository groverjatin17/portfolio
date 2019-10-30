import React from 'react'
import styled from 'styled-components'

const Card =styled.div`

&{border:1px solid;
box-shadow: 3px 3px 5px 1px  #888888;
height:250px;
width:280px;
display:flex;
align-items:center;
flex-direction:column;
color:grey;
border-radius:6px
}
&:hover{
    transform: scale(1.1);
}
`

const CardImage =styled.img`
    &{
    height:100px;
    width:110px;
    margin:30px;
    }
`
const RatingContainer=styled.div`
    width:90%;
    display:flex;
    justify-content:flex-end;
    margin:3px 5px 5px;
`
const GreenCell=styled.div`
    border:1px solid ;
    width:8px
    height:8px; 
    color:green;
    background-color:green;
    margin:2px 0px 0px 2px;
    `

const WhiteCell=styled.div`
    border:1px solid; 
    width:8px;
    height:8px; 
    color:green;
    margin:2px 0px 0px 2px;`

const Title =styled.p`
    color:grey;
    font-size:25px;
    font-weight:500;
    padding:0px;
    margin:0px;
`
const cardCreator = (value) => {
    let greenArray =new Array(value).fill(0).map((_,key)=> <GreenCell key={key}/>)
    let whiteArray = new Array(5-value).fill(0).map((_,key)=> <WhiteCell key={key+4}/>)
    let finalRating= greenArray.concat(whiteArray)
    return finalRating;
}


const CardMaker =( props) =>{
    const clickHandler=() => {
        console.log('hi there');
    }

    return(    <Card onClick={clickHandler}>
                    <RatingContainer>
                        {cardCreator(props.rating)}
                    </RatingContainer>
                    <CardImage src={props.image} alt={'Loading...'}/>
                    <Title >{props.title} </Title>
                </Card>
                )
}

export default CardMaker;