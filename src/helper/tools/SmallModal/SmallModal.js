import { useEffect } from "react";
import { createPortal } from "react-dom";
import {usePortalHook} from '../../../hooks';
import './SmallModal.css'

const SmallModal = (props) => {
  const target = usePortalHook('modal-root');
  
    return createPortal(
        <div className="small-modal-sty animation fadeIn">
            <div className="modal-body">
                <div className="modal-title">
                    <h5>{props.title}</h5>
                    <span onClick={((e) => {props.onModalClose(e)})} type="submit" className="close-modal">&#10006;</span>
                </div>
                <div className="modal-middle" style={{textAlign: 'center'}}>
                    {props.message} <br></br>
                    {props.hint}
                </div>
                <div className="modal-footer m-0 p-1">
                </div>
            </div>
        </div>,
        target,
    )
}

export default SmallModal
