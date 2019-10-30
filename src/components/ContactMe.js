import React, { Component } from 'react'
import {withFormik} from 'formik'


 class ContactMe extends Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <input type='text' placeholder='Subject'/>
                <input type='Message' placeholder='Message'/>
            </form>
        )
    }
}

const FormikApp = withFormik({})(ContactMe)

export default ContactMe;