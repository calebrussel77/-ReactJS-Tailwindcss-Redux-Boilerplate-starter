import React from 'react';

import {updateObject} from '../../utils/updateObject';

const initialState = {
    token: null,
    user: null,
    error: null,
    msg: null,
};

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.AUTH_LOGOUT:
            return updateObject(state, {
                token: null,
                user: null,
            });
        default:
            return state;
    }
};

export default AuthReducer;