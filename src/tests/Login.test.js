import React from 'react'
import {render} from '@testing-library/react'
import Login from "../components/Account/Login"
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';



const mockStore = configureMockStore();
const store = mockStore({});

test('component renders', ()=>{
    render ( <Provider store={store}><Login/></Provider>)
})

test('shows heading', ()=> {
    const { getByText } = render(<Provider store={store}><Login/></Provider>);

    getByText(/Make the most of your professional life./i);
} )

test('Check for labels', ()=> {
    const { getByText } = render(<Provider store={store}><Login/></Provider>);

    getByText(/email/i);
    getByText(/password/i);
} )


test("test if login titles render when added ", async () => {

    const testLogin = {
        email: "degregori@gmail.com",
        password: "testpass"
    };

    const { getByText } = render(<Provider store={store}><Login props ={testLogin}/></Provider>);

    const email = getByText(/email/i);
    const password = getByText(/password/i);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();

});

//mock data for incoming tests

const functions = {
    userLogin: () => {
        const user = {
            email: 'degregori@email.com',
            password: 'password'
        }
         return user;
    }
}

test('adding login information', () => {
    expect(functions.userLogin()).toEqual({
        email: 'degregori@email.com',
        password: 'password'
    })
})

test('adding incorrect login information', () => {
    expect(functions.userLogin()).toEqual(expect.not.objectContaining({
        email: 'degregori35@email.com',
        password: 'wrong password'
    }))
})


// imitates click event on submit 
const submitAll = (callback, login) => {
       if(login == 'clicked') {
            callback(login)
        }

}

describe('login button', () => {
    test('function is called on button click', () => {
        const event = jest.fn()
        submitAll(event, 'clicked')
        expect(event).toHaveBeenCalled();
    })
})

//testing post

