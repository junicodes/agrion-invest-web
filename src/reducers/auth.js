
const AuthReducer = (state = null, action) => {

    switch(action.type) {

        case 'SIGN_UP':
            return state = action.payload;

        case 'SIGN_IN':

            return state = action.payload;
        default:
            return state;
    }
}

export default AuthReducer;