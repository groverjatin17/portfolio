import styled from "styled-components";

const Card =styled.div`
&{
    box-shadow: 3px 3px 5px 1px  #888888;
    height:200px;
    width:30%;
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
    height:85px;
    width:90px;
    margin:20px;
    }
`
const Title =styled.p`
    color:grey;
    font-size:25px;
    font-weight:500;
    padding:0px;
    margin:0px;
`

export {
    Card,
    CardImage,
    Title
}
