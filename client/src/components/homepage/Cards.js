import React, { Component } from 'react';
import CardMaker from './TechStackCards';
import PythonImage from '../../assets/images/Python.png';
import ReactImage from '../../assets/images/React.png';
import ES6Image from '../../assets/images/ES6.jpg';
import Linux from '../../assets/images/linux.png';
import CSS from '../../assets/images/css.png';
import HTML from '../../assets/images/html.png';

export default class Cards extends Component {
    // TODO: Render the technologies more dynamically like by using map rather than hardcoding and
    // sending one by one
    // technologies =[
    //     {title: 'Python', image: PythonImage, rating: 3},
    //     {title: 'React', image: ReactImage, rating: 3},
    //     {title: 'ES6', image: ES6Image, rating: 3},
    //     {title: 'Linux', image: Linux, rating: 3},
    //     {title: 'CSS', image: CSS, rating: 3},
    //     {title: 'HTML', image: HTML, rating: 3},
    // ]
    render() {
        return (
            <>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginBottom: '30px',
                    }}
                >
                    <CardMaker title='Python' image={PythonImage} rating={3} />
                    <CardMaker title='React' image={ReactImage} rating={5} />
                    <CardMaker title='ES6' image={ES6Image} rating={4} />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '15px',
                    }}
                >
                    <CardMaker title='Linux' image={Linux} rating={4} />
                    <CardMaker title='CSS' image={CSS} rating={4} />
                    <CardMaker title='HTML' image={HTML} rating={4} />
                </div>
            </>
        );
    }
}
