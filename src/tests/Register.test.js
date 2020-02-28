import React from 'react'
import {render} from '@testing-library/react'
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import Register from "../components/Account/Register"