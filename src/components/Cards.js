import React, { Component } from 'react'
import CardMaker from './TechStackCards'
import PythonImage from '../assets/Python.png'
import ReactImage from '../assets/React.png'
import ES6Image from '../assets/ES6.jpg'
import Linux from '../assets/linux.png'
import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
export default class Cards extends Component {

    render() {
        return (
            <> 
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <CardMaker 
                title="Python" 
                image={PythonImage} 
                rating={3} />
                <CardMaker title="React" image={ReactImage} rating={5} />
                <CardMaker title="ES6" image={ES6Image} rating={4} />
            </div>
            <div style={{display:'flex', justifyContent:'space-around', marginTop: '15px'}}>
            <CardMaker title="Linux" image={Linux} rating={4} />
                <CardMaker title="CSS" image={CSS} rating={4} />
                <CardMaker title="HTML" image={HTML} rating={4} />
                </div>
            </>
        )
    }
}
