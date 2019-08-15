import * as actionTypes from './actionTypes';
import data from '../../data/data.json';

export const setDrive = ( array ) => {
    return {
        type: actionTypes.SET_DRIVE,
        drive: array
    };
};

export const initFiles = () => {
    return dispatch => {
        new Promise((resolve) => {
            resolve(data)
        }).then((data) => {
            dispatch(setDrive(data));
        });
    }
};