import React, { createRef, Fragment, useEffect, useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import InputGroup from "../InputGroupComponent/InputGroup";
import SmallModal from'../../helper/tools/SmallModal/SmallModal';
import Buttons from "../ButtonsComponent/Buttons";
import {titleCase, hintFormat} from '../../helper/formatFunc';
import {signUp} from "../../actions/authAction";
import {authValidation} from '../../validations/auth';
import {signUpApi} from '../../apiRequest/signUpApi';
import "./SignUpForm.css";

const SignUpForm = () => {
    const history = useHistory();
    //validation State
    const [validateMsg, setValidateMsg] = useState(true);
    const [buttonLabel, setButtonLabel] = useState('Sign Up')
    const [smallModal, setSmallModal] = useState(false);
    
    //Listen for all redux state
    const dispatch = useDispatch();
    const authApi = useSelector(state => state.authReducer);

    //Create Ref 
    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const buttonRef = createRef();  

    //Lifecycle Method useEffect
    useEffect(() => {
        if(authApi) { //Listen for redux responsee
            dispatch(signUp(null)) //Dispatch a null state to prevent reoccurrance 

            setButtonLabel('Sign Up');
            if(authApi.status) { //Return true is successful
                //Redirect to login screen
                return true;
            }

            setSmallModal({ //Display an error message to user modal
                title: 'Error Message',
                message: authApi.message || '',
                hint: hintFormat(authApi.hint) || ''
            });
        }
    }, [authApi]);

    //Manipulation 
    const handleModalClose = (e) => {
        e.preventDefault();
        console.log(e)
        setSmallModal(false);
    } 

    //Validations
    const handleValidateFunc = () => {
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        const validate = authValidation('SIGN_UP', data)

        if (validate.error) { 
            return setValidateMsg(validate) 
        }  setValidateMsg(false) // Update Valdation as pass mark
    }

    //Api Request
    const handleSubmitClick = async (e) => {
        e.preventDefault()
        history.push("/profile/farmer");
        //Button Preload 
        setButtonLabel(<Fragment><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></Fragment>);

        const data = {
            name: titleCase(nameRef.current.value),
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        //Check if validation is done correctly
        if(!validateMsg) {
            const payload = await signUpApi(data); //Sign Up Api Request
            dispatch(signUp(payload)) //Dispatch response to the Redux Store 
        }
    }
    
    return (
        <div>
            {smallModal ? <SmallModal title={smallModal.title} message={smallModal.message} hint={smallModal.hint} onModalClose={handleModalClose}/> : null}
            <form className="col-12 pt-4 animate__animated animate__fadeIn">
                <InputGroup ref={nameRef} onValidateFunc={handleValidateFunc}  onValidateMsg={validateMsg} refName="name" inputType="text" labelClassList="d-none" fontawesomeClassList="fas fa-user" placeholder="Name"/>
                <InputGroup ref={emailRef} onValidateFunc={handleValidateFunc} onValidateMsg={validateMsg} refName="email" inputType="email" labelClassList="d-none" fontawesomeClassList="fas fa-at" placeholder="Email Address"/>
                <InputGroup ref={passwordRef} onValidateFunc={handleValidateFunc} onValidateMsg={validateMsg} refName="password" inputType="password" labelClassList="d-none" fontawesomeClassList="fas fa-lock" placeholder="Password"/>
                <InputGroup inputType="button" labelClassList="d-none" fontawesomeClassList="fab fa-facebook-f" inputValue="Signup with Facebook"/>
                <InputGroup inputType="button" labelClassList="d-none" fontawesomeClassList="fab fa-google" inputValue="Signup with Google"/>
                <p className="tac-confirm text-center mb-1">By pressing submit, you agree to our <br/>
                <Link to="/terms-conditions" className="tac-link">terms and conditions</Link></p>
                <div className="col-12 text-center">
                    <Buttons ref={buttonRef} onSubmitClick={handleSubmitClick} btnClass="btn-custom-green" buttonLabel={buttonLabel} />
                </div>
            </form>
        </div>
    );
}

export default withRouter(SignUpForm);
