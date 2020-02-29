import React from 'react'
import {render} from '@testing-library/react'
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import Register from "../components/Account/Register"

const mockStore = configureMockStore();
const store = mockStore({});

test('register component renders', ()=>{
    render ( <Provider store={store}><Register/></Provider>)
})

test('shows heading', ()=> {
    const { getByText } = render(<Provider store={store}><Register/></Provider>);

    getByText(/Make the most of your professional life./i);
} )

test('Check for labels on register form', ()=> {
    const { getByText } = render(<Provider store={store}><Register/></Provider>);

    getByText(/first name/i);
    getByText(/last name/i);
    getByText(/enter email/i);
    getByText(/create password/i);
} )

const functions = {
    userRegister: () => {
        const user = {
            first_name: 'Mauricio',
            last_name: 'Degregori',
            email: 'degregorimauricio@gmail.com',
            password: 'password1',
            user_type: "applicant"
        }
         return user;
    }
}

test('adding register information', () => {
    expect(functions.userRegister()).toEqual({
        first_name: 'Mauricio',
        last_name: 'Degregori',
        email: 'degregorimauricio@gmail.com',
        password: 'password1',
        user_type: "applicant"
    })
})

test('adding incorrect register information', () => {
    expect(functions.userRegister()).toEqual(expect.not.objectContaining({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        user_type: ''
    }))
})

// imitates click event on submit 
const submitAll = (callback, register) => {
       if(register == 'clicked') {
            callback(register)
        }

}

describe('regiser button', () => {
    test('function is called on button click', () => {
        const event = jest.fn()
        submitAll(event, 'clicked')
        expect(event).toHaveBeenCalled();
    })
})


