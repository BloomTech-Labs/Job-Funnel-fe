
const initialState = {
    openModal: false

}

export const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case 'OPEN_MODAL':
            return {
                ...state,
                openModal: true
            }
        default: 
            return state;
    }

}

