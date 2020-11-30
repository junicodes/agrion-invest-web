


export const authValidation = (authType, data) => {

    switch (authType) {
        case 'SIGN_UP':
           if(data.name === ''){
               return {
                   error: true,
                   type: 'name',
                   msg: `Name field cannot be empty`
               }
           }
           if(data.email === ''){
                return {
                    error: true,
                    type: 'email',
                    msg: `Email field cannot be empty`
                }
            }
            if(data.password === ''){
                return {
                    error: true,
                    type: 'password',
                    msg: `Password field cannot be empty`
                }
            }
        case 'LOGIN':
        
            return false;
        default:
            return {
                error: false
            };
    }

}
