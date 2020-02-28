import React from 'react'
import {render} from '@testing-library/react'
import Login from "../components/Account/Login"
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
// import { shallow, configure } from 'enzyme';


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
