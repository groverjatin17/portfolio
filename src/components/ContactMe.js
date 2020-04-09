import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import ContactMeImage from '../assets/contactMe.jpg';
import {Formik} from 'formik'

 class ContactMe extends Component {
    render() {
        return (
            <>
            <NavigationBar theme= 'dark' />
            <div 
                style={{
                    backgroundImage: `url(${ContactMeImage})`, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-around',
                    alignItems: 'center'  }}>
                <h1>HAVE ANY QUESTIONS?</h1>
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100vh', width: '100vw'}}>
                <img 
                src="https://dd7tel2830j4w.cloudfront.net/f1505468260832x993779528886079700/letter.svg"
                alt='letter'
                style={{width: '30%'}}
                />
                <div style={{border: '1px solid', width: '40%', height: '50%'}}>
                    <Formik 
                    initialValues={{firstName: 'bob'}}
                    onSubmit = {data => {
                        console.log("submit", data);
                    }}>
                        {({values, handleChange, handleBlur, handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <input 
                                    name='firstName'
                                    type='text'
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                    />
                                <div>
                                    <button type="submit">submit</button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
                </div>
            </div>
            </>
        )
    }
}

// const FormikApp = withFormik({})(ContactMe)

export default ContactMe;