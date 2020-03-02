import React from 'react';
import { Provider as MockProvider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import Profile from '../components/Account/Profile';


// afterEach(cleanup);
const mockStore = configureStore();
Enzyme.configure({ Adapter: newAdapter() })


// ------------ ATTEMPTED MOCK STORE --------- 

describe('Profile Connected React-Redux Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            auth: {
                first_name: "Tony",
                last_name: "Montana"
            },
        });
    });
    it('Renders Profile', () => {
        const wrapper = mount(
            <MockProvider store={store}><Profile/></MockProvider>
        );
        
        expect(wrapper.find(Profile).length).to.equal(1);
        const container = wrapper.find(Profile);
        expect(container.find(Profile).length).to.equal(1);
        expect(container.find(Profile).props().auth).to.eql({ first_name: "Tony", last_name: "Montana" });
    })

    // it('Should Render First & Last Name', () => {
    //     expect(component.props().currentUser.first_name).toBe('Bob')
    // });
})
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