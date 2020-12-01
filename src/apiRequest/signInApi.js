
import {authErrorHandling} from '../apiErrorHandling/auth';
import {apiUrl, apiVersion} from '../helper/config';
import {signIn} from '../helper/routes/generalRoute';

export const signInApi = async (data) => {

   let statusCode = 200;

    try {
        //Call the API
        const response = await fetch(`${apiUrl}${apiVersion}${signIn}`, { 
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            statusCode = response.status
        }

        const result = await response.json(); 

        //Hadle Error handling for request
        const errorHandling = authErrorHandling(Number(statusCode), result)
        if(!errorHandling.status) {
            return errorHandling
        }

        if(result.status) {
            return {
                status: true,
                state: result,
                status_code: Number(statusCode)
            }
        }

    } catch (error) {
        return {
            status: false,
            message: 'An expected error occurred please refresh and try again!',
            hint: error.message,
            status_code: 501
        }
    }
}
