import * as actionTypes from './actionTypes';
import data from '../../data/data.json';

export const setBooks = ( array ) => {
    return {
        type: actionTypes.SET_BOOKS,
        booksArray: array
    };
};

export const fetchBooksFailed = () => {
    return {
        type: actionTypes.FETCH_BOOKS_FAILED
    };
};



export const initFiles = () => {
    return dispatch => {
       dispatch(setBooks(data))
    }
};