import React, {useState,useEffect} from 'react'
// import axios from 'axios'
import './ResetPassword.css'
import useForm from '../Useform/Useform'
import validate from '../ValidateFormRules/ValidateFormRules'

const ResetPassword = () => {
    const {values, errors,handleChange, handleSubmit} = useForm(resetpass, validate);
  
    function resetpass() {
      console.log('No errors, submit callback called!');
    }
    // const [password, setPassword]= useState("")
    // const [confirmpassword,setConfirmPassword]=useState("")

    // const handleSubmit= (e)=>{
    //     e.preventDefault()

    // }

    return (
        <div>
            <div className="logo"><img src="images/logo.png" alt="Code Queen logo" width="120px" /></div>
            <div className="cover">
                <h1 className="title">Reset your Password</h1>
                <div className="container">
                    <form id="myform" method="PATCH"  action="/resetpassword/{{ token }}"onSubmit={handleSubmit} noValidate >
                        <div className="input">
                            <input
                            type="text" 
                            id="password" 
                            className="ifield" 
                            name="password"
                            autofocus placeholder="Enter new password" 
                            value={values.password}
                            onChange={handleChange}
                            />
                            {errors.password && (<p className="error">{errors.password}</p>)}
                        </div>
                        <div className="input">
                            <input 
                             type="text"
                             id="cfmpassword"
                             className="ifield"
                             name="confirmpassword"
                             autofocus placeholder="Confirm password" 
                             value={values.confirmpassword}
                             onChange={handleChange}
                            />
                            {errors.confirmpassword && (<p className="error">{errors.confirmpassword}</p>)}
                        </div>

                        <div className="btn">
                            <button className="ifield" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword