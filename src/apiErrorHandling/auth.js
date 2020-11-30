import { inArray } from "jquery"


export const authErrorHandling = (statusCode, result) => {
    console.log(statusCode, result)
    const successCode = [201, 200];

    if(statusCode === 422) { 
        return {
            status: false,
            message: result.message,
            hint: JSON.stringify(result.errors) || JSON.stringify(result.hint)
        }
    }
    if(successCode.indexOf(statusCode) === -1 ) {
        console.log('real')
        return {
            status: false,
            message: result.message,
            hint: JSON.stringify(result.errors) || JSON.stringify(result.hint)
        }
    }
    return{ status: true }
}