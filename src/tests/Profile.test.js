import React from 'react';
import { Provider as MockProvider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import { initialState, reducer } from '../redux-store/index.js';
import Profile from '../components/Account/Profile';
import { AppReducer } from '../redux-store/App/AppReducer.js';

// afterEach(cleanup);

// ------------ ATTEMPTED MOCK STORE --------- 
// const mockStore = configureStore([]);

// describe('Profile Connected React-Redux Component', () => {
//     let store;
//     let component;

//     beforeEach((state, action) => {
//         const initialState = {
//             currentUser: {
//                 ...state.currentUser, ...action.payload
//             }
//         }

//         store = mockStore(initialState)

//         component = renderer.create(
//             <MockProvider store = {store}>
//                 <Profile/>
//             </MockProvider>
//         )
//     });

//     it('Should Render First & Last Name', () => {
//         expect(component.props().currentUser.first_name).toBe('Bob')
//     });
// })
// -------------------------- END OF ATTEMPTED MOCK STORE -----------------------//



//--------------------------- ATTEMPT TO CHECK REDUX LOADING --------------------//

// const startingState = {
//     first_name: "Bob"
// };

// function AppReducer(state = startingState, action){
//     switch(action.type){
//         case 'SET_CURRENT_USER':
//             // console.log('SET_CURRENT_USER FIRING', state, action.payload);
//             return {
//                 ...state,
//                 currentUser: {...state.currentUser, first_name: state.first_name },
//             };
//         default: 
//             return state;
//     }
// }
// function renderWithRedux(
//     ui,
//     { initialState, store = createStore(AppReducer, initialState) } = {}
//   ) {
//     return {
//       ...render(<Provider store={store}>{ui}</Provider>),
//       store,
//     }
//   }




// test("Renders Profile Information With redux", () => {
//     const { getByTestId } = renderWithRedux(<Profile />);
//     // expect(getByTestId('first-last')).toHaveTextContent('Bob Saggot');
// })
//--------------------------- END OF ATTEMPT TO CHECK REDUX LOADING --------------------//


//--------------------------- NORMAL TEST ATTEMPTS ---------------------------------//
// test("Profile Loads first and last name", async () => {
//     const person = {
//         first_name: "Austin",
//         last_name: "Hadden",
//         email: ""
//     };

    
// });

// it("should match the snapshot", () => {
//     expect(<Profile />).toJSON().toMatchSnapshot();
//   });

test("Displays the Component", () => {
    render(<Profile/>)
})


// test("Profile Page Loads Heading", async () => {
    
//     const profData = {
//         first_name: "Bob",
//         last_name: "Saggot",
//         about: "About Example",
//         github_url: "example@url.com",
//         linkedin_url: "example@email.com"  
//     }

//     const { getByText } = render(<MockProvider><Profile props={profData}/></MockProvider>);

//     const first = getByText(/bob/i);
//     const last = getByText(/saggot/i);
//     const about = getByText(/about example/i);
//     const github = getByText(/example@url.com/i);
//     const linkedin = getByText(/example@email.com/i);

//     expect(first).toBeInTheDocument();
//     expect(last).toBeInTheDocument();
//     expect(about).toBeInTheDocument();
//     expect(github).toBeInTheDocument();
//     expect(linkedin).toBeInTheDocument();
// });

//--------------------------- END NORMAL TEST ATTEMPTS ---------------------------------//