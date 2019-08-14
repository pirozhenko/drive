import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    drive: [],
};

const setDrive = (state, action) => {
    return updateObject( state, {
        drive: action.drive,
    } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_DRIVE: return setDrive(state, action);
        default: return state;
    }
};

export default reducer;