import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [firstnameError, setfirstnameError] = useState("");
    const [lastname, setlastname] = useState("");
    const [lastnameError, setlastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [cpassError, setcpassError] = useState("");

    const handlefirstname = (e) => {
        setfirstname(e.target.value);
        if(e.target.value.length < 1) {
            setfirstnameError("first name is required");
        } else if(e.target.value.length < 2) {
            setfirstnameError("first name must be 2 characters or longer");
        }
        else{
            setfirstnameError("")
        }
    }
    const handlelastname = (e) => {
        setlastname(e.target.value);
        if(e.target.value.length < 1) {
            setlastnameError("last name is required");
        } else if(e.target.value.length < 2) {
            setlastnameError("last name must be 2 characters or longer");
        }
        else{
            setlastnameError("")
        }
    }
    const handleemail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("email is required");
        } else if(e.target.value.length < 5) {
            setemailError("your email should be 5 characters or longer");
        }
        else{
            setemailError("")
        }
    }
    const handlepassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setpasswordError("password is required");
        } else if(e.target.value.length < 8) {
            setpasswordError("password should be 8 characters or longer");
        }
        else{
            setpasswordError("")
        }
    }
    const handlecpassword = (e) => {
        setconfirmpassword(e.target.value);
        if(e.target.value.length < 1) {
            setcpassError("password is required");
        } else if(e.target.value !== password) {
            setcpassError("passwords should match");
        }
        else if (e.target.value === password){
            setcpassError("")
        }
    }
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password ,confirmpassword};
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>firstname: </label>
                <input type="text" onChange={ handlefirstname } />
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>last name: </label>
                <input type="text" onChange={ handlelastname } />
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ handleemail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password : </label>
                <input type="password" onChange={ handlepassword } />
                {
                    passwordError?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confrim password: </label>
                <input type="password" onChange={ handlecpassword } />
                {
                    cpassError ?
                    <p style={{color:'red'}}>{ cpassError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
            <div>
                <h1> your form data </h1>
                <p> first name : {firstname}</p>
                <p> last name : {lastname}</p>
                <p>Email : {email}</p>
                <p>Password : password</p>
                <p>Confrim Password : confirmpassword</p>

            </div>
        </form>
    );
};
    
export default UserForm;
