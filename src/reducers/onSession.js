

const OnSession = (state = false, action) => {
    switch (action.type) {
        case 'AUTH_IN':
            //Check if there is a present token on localStorage and return the token
            const token = '12345';
            return state = token
        default:
            return state
    }
}

export default OnSession;