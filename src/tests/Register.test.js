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