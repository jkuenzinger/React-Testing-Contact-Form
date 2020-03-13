import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import ContactForm from './ContactForm';

test('testing rendering of labels on the impus', () =>{
    const{queryByLabelText} = render(<ContactForm/>)
    queryByLabelText(/firstName/i)
    queryByLabelText(/lastName/i)
    queryByLabelText(/email/i)
    queryByLabelText(/message/i)
})

test('adds new person', () => {
    const {getByLabelText, getByTestId} = render(<ContactForm/>)

    const firstNameInput = getByLabelText(/firstname/i)
    const lastNameInput = getByLabelText(/lastname/i)
    const emailInput = getByLabelText(/email/i)
    const messageInput = getByLabelText(/message/i)

    fireEvent.change(firstNameInput, {target:{value: 'test first name'}})
    fireEvent.change(lastNameInput, {target:{value: 'test last name'}})
    fireEvent.change(emailInput, {target:{value: 'test email'}})
    fireEvent.change(messageInput, {target:{value: 'test message'}})

    expect(firstNameInput.value).toBe('test first name')
    expect(lastNameInput.value).toBe('test last name')
    expect(emailInput.value).toBe('test email')
    expect(messageInput.value).toBe('test message')

    fireEvent.click(getByTestId(/submit/i))
    
})