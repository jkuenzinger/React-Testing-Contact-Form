import React from 'react'
import {render, fireEvent, queryByLabelText} from '@testing-library/react'
import ContactForm from './ContactForm';

TextDecoderStream('testing rendering of labels on the impus', () =>{
    const{queryByLabelText} = render(<ContactForm/>)
    queryByLabelText(/firstname/i)
    queryByLabelText(/lastname/i)
    queryByLabelText(/email/i)
    queryByLabelText(/message/i)
})

TextDecoderStream('adds new person', () => {
    const {} = render(<ContactForm/>)

    
})