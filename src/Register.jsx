

import { useState } from "react";

import {useRef} from "react";
import "./Register.css";

function Register({className}) {
    const registerRef = useRef(null);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState('');
    const [address, setAddress] = useState('');
    const [billing, setBilling] = useState('');

    const [isChecked, setIsChecked] = useState(false);

    function onChecked() {
        setIsChecked(!isChecked);
    }
    return (
        <div className={`register ${className}`}>
            <dialog className="register__modal" ref={registerRef} 
                onSubmit={
                    (event)=>{
                        
                    }}
            >
                <h2>Registration</h2>
                <form className="register" action="/subscribe" method = "POST">
                    <label className="register-name register__item">
                        <span className="register-name__label">Name * <i>required</i></span>
                        <input name="name" className="register-name__input" value={name} onInput={(e) => setName(e.target.value)}/>
                        {!name? <span className="register-name__error">This field is required *</span> : <></>}
                    </label>
                    <label className="register-email register__item">
                        <span className="register-email__label">Email: * <i>required</i></span>
                        <input name="email" className="register-email__input" value={email} onInput={(e) => setEmail(e.target.value)}/>
                        {!email? <span className="register-email__error1">This field is required</span> : <></>}       
                        {!email.includes("@")? <span className="register-email__error2">This field be a valid email address including a @</span> : <></>}
                    </label>
                    <label className="register-confirm register__item">
                        <span className="register-confirm__label">Confirm Email: *  <i>required</i></span>
                        <input name="register-confirm" className="register-confirm__input" value={confirm} onInput={(e) => setConfirm(e.target.value)}/>
                        {email !== confirm? <span className="register-confirm__error">This field must match the provided email address</span> : <></>}
                    </label> 
                    <label className="register-address register__item">
                        <span className="register-address__label">Shipping Address * </span>
                        <input name="address" className="register-address__input" value={address} onInput={
                            (e) => {
                                setAddress(e.target.value);
                                if (isChecked) {
                                    setBilling(e.target.value);
                                }
                            }
                        }
                        onChange={() => {
                            if (isChecked) {
                                // billingE1Ref.current.value = addressE1Ref.current.value;
                            }
                        }}/>
                        {!address ? <span className="register-address__error">This field is required *</span> : <></>}
                    </label>
                    <label className="register-same register__item" >
                        <span className="register-same__label">Billing address same as shipping address?</span>
                        <input name="same-address" className="register-same__input" type="checkbox" checked={isChecked} 
                        onChange={() => {
                            const newIsChecked = !isChecked;
                            if (newIsChecked) {
                                // billingE1Ref.current.readOnly = true;
                                setBilling(address);
                                // billingE1Ref.current.classList.add('register-billing--invalid');
                            } else {
                                // billingE1Ref.current.readOnly = false;
                            }
                            onChecked();
                            
                        }}/>
                    </label>
                    <label className="register-billing register__item">
                            <span className="register-billing__label">Billing Address </span>
                            <input name="billing" className="register-billing__input"  readOnly={isChecked} value={billing} onInput={(e) => setBilling(e.target.value)} />
                    </label>
                    <div className="register__buttons">
                        <button type="register-submit" 
                            className="register__confirm register__button"
                            onClick={ (event) => {
                                var isInvalid = false;
                                if (!name) isInvalid = true;
                                if (!email) isInvalid = true;
                                if (!email.includes("@")) isInvalid = true;
                                if (!address) isInvalid = true;       
                                if (isInvalid)  {
                                    event.preventDefault();
                                }               
                            }}
                        >
                            Register
                        </button>
                        <button 
                            className="register__close register__button" 
                            type = "button"
                            onClick={() => {
                                registerRef.current.close();
                            }}
                        >
                            Cancel
                        </button>
                    </div> 
                </form>
            </dialog>
            <button 
                className="register__open"
                onClick={ () => {
                    registerRef.current.showModal();
                }}>Register</button>
        </div>
    );
}

export default Register;